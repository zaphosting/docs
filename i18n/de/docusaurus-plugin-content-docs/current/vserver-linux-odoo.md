---
id: vserver-linux-odoo
title: "VPS: Odoo (Open Source ERP und CRM) auf Linux einrichten"
description: "Entdecke, wie du deine Geschäftsprozesse mit Odoos integrierter ERP- und CRM-Plattform verwaltest und automatisierst → Jetzt mehr erfahren"
sidebar_label: Odoo installieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Odoo ist eine modulare Open-Source-Plattform, die Enterprise Resource Planning (ERP) und Customer Relationship Management (CRM) Features kombiniert. Sie ermöglicht es Unternehmen, Prozesse wie Buchhaltung, Lagerverwaltung, Projektmanagement und Vertrieb in einem einzigen System zu verwalten und zu automatisieren.

Dank flexibler Erweiterungen kann Odoo an spezifische Bedürfnisse angepasst werden und bietet eine integrierte Lösung zur Verwaltung aller Unternehmensbereiche.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Du denkst darüber nach, diesen Service selbst zu hosten? Wir führen dich Schritt für Schritt durch die Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Odoo** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | Empfohlen   |
| ---------- | ------------ | ----------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne|
| RAM        | 1 GB         | 4 GB        |
| Festplattenspeicher | 15 GB        | 25 GB       |

Die Software benötigt, dass alle notwendigen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Vergewissere dich, dass dein Server folgende Anforderungen erfüllt, bevor du mit der Installation fortfährst:

**Abhängigkeiten:** `Docker`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+

Stelle sicher, dass alle Abhängigkeiten installiert sind und die korrekte Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme bei der Installation von Odoo zu vermeiden.



## Vorbereitung

Bevor du **Odoo** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf den neuesten Stand zu bringen und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitung sorgt für eine stabile Umgebung und hilft, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Um sicherzustellen, dass dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So ist dein System mit den neuesten Sicherheitspatches und Softwareversionen ausgestattet, bevor du weitermachst.

### Abhängigkeiten installieren
Nachdem das Update abgeschlossen ist, kannst du mit der Installation der Abhängigkeiten fortfahren. Odoo wird auf deiner Maschine mit mehreren Docker-Containern betrieben. Dafür muss Docker zuerst installiert werden. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Installation und Nutzung von Docker findest du in unserer [Docker](vserver-linux-docker.md) Anleitung.



### Domain konfigurieren

Standardmäßig läuft Odoo auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf deinen Host zeigen. Wenn die Domain bei uns verwaltet wird, kannst du das ganz einfach über die [EasyDNS](domain-easydns.md) Option erledigen.




## Installation
Nachdem alle Voraussetzungen erfüllt und die Vorbereitungen abgeschlossen sind, kannst du mit der Installation der Odoo-Anwendung starten.

Bei mehreren Docker-Setups ist es sinnvoll, eine klare Verzeichnisstruktur zu erstellen, um Projekte voneinander zu isolieren. Ein gängiger Ansatz ist, im Home-Verzeichnis des Nutzers einen *docker*-Ordner anzulegen, mit einem eigenen Unterordner für jede Domain. So können mehrere Projekte auf demselben Server ohne Konfigurationskonflikte gehostet werden.

Zum Beispiel, um die Struktur für die Domain `example.com` vorzubereiten:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Innerhalb dieses Projektordners empfiehlt es sich, Unterordner anzulegen, die von den Containern als Volumes eingebunden werden. Diese Volumes ermöglichen es, Daten zwischen Diensten zu teilen oder persistent zu speichern. Ein wichtiger Fall ist das gemeinsame Webroot, auf das sowohl nginx als auch certbot zugreifen müssen, um SSL-Zertifikate zu generieren und zu erneuern. Eine passende Struktur kannst du so anlegen:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Das schafft dedizierte Verzeichnisse für nginx-Konfiguration, SSL-Zertifikate, Include-Dateien und Odoo-spezifische Inhalte wie Konfigurationen und Addons.




### Docker Compose erstellen

Erstelle in deinem Docker-Projekt die Datei `compose.yml` mit `nano compose.yml`. Füge dort folgenden Code ein:

```
services:
  db:
    image: postgres:16
    ports:
      - "5432:5432"
    environment:
      - POSTGRES_USER=odoo
      - POSTGRES_PASSWORD=odoo
      - PGDATA=/var/lib/postgresql/data/pgdata
    volumes:
      - odoo-db-data:/var/lib/postgresql/data

  odoo:
    image: odoo:18.0
    depends_on:
      - db
    ports:
      - "8069:8069"
    volumes:
      - odoo-web-data:/var/lib/odoo
      - ./config:/etc/odoo
      - ./addons:/mnt/extra-addons
    command: odoo -d odoo_db -i base --db_user=odoo --db_password=odoo --db_host=db

  nginx:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf:/etc/nginx/conf.d
      - ./nginx/inc:/etc/nginx/inc
      - ./nginx/ssl:/etc/nginx/ssl
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt
    depends_on:
      - odoo

  certbot:
    image: certbot/certbot
    volumes:
      - ./nginx/certbot/www:/var/www/certbot
      - ./nginx/certbot/conf:/etc/letsencrypt

volumes:
  odoo-db-data:
  odoo-web-data:
```



### Firewall

Damit nginx und certbot richtig funktionieren, musst du die TCP-Ports 80 (HTTP) und 443 (HTTPS) in der Firewall freigeben. Diese Ports sind wichtig, weil certbot Port 80 für die HTTP-Validierung nutzt und Port 443 für verschlüsselten HTTPS-Traffic benötigt wird. Wenn UFW (Uncomplicated Firewall) aktiviert ist, kannst du die Regeln mit diesen Befehlen hinzufügen:

```
sudo ufw allow http
sudo ufw allow https
```

Prüfe danach mit `sudo ufw status`, ob die Ports offen sind. Achte darauf, dass keine anderen Firewall-Regeln den Zugriff blockieren, sonst kann die Zertifikatserstellung oder der sichere HTTPS-Traffic fehlschlagen.



### Nginx einrichten

Die nginx-Konfiguration beginnt mit dem Anlegen einer Konfigurationsdatei für deine Domain. Erstelle im Verzeichnis `nginx/conf` eine neue Datei mit dem Namen deiner Domain. Führe dazu `nano nginx/conf/example.com.conf` aus und füge die Grundkonfiguration ein, wobei du `example.com` durch deine echte Domain ersetzt:

```
server {
    listen 80;
    server_name example.com;

    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```

Diese Konfiguration erlaubt certbot, die ACME-Challenge abzuschließen und gültige SSL-Zertifikate auszustellen. Außerdem werden alle HTTP-Anfragen auf HTTPS umgeleitet.

Nachdem du die Datei gespeichert hast, kannst du die benötigten Container starten: Datenbank, Odoo und nginx. Führe dazu folgenden Befehl aus:

```
sudo docker compose up -d db odoo nginx
```

Die Container laufen im Hintergrund, und nginx verwendet bereits die neue Konfiguration, sodass certbot im nächsten Schritt Zertifikate generieren kann.


### SSL-Zertifikate generieren

Führe den folgenden Befehl aus, um SSL-Zertifikate mit certbot zu erstellen. Ersetze dabei `example.com` durch deine Domain und `user@mail.com` durch deine gültige E-Mail-Adresse.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Erstelle anschließend eine eigene DH-Parameter-Datei, um die Sicherheit des kryptografischen Schlüsselaustauschs weiter zu erhöhen.

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Erstelle nun die Datei `ssl.conf` mit `nano nginx/ssl/ssl.conf` und füge folgenden Inhalt ein. Ersetze auch hier `example.com` durch deine Domain:

```
ssl_protocols TLSv1.2 TLSv1.3;
ssl_ecdh_curve X25519:prime256v1:secp384r1;
ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384:DHE-RSA-CHACHA20-POLY1305;
ssl_prefer_server_ciphers off;
ssl_session_timeout 1d;
ssl_session_cache shared:MozSSL:10m;
ssl_dhparam "/etc/nginx/ssl/dhparam.pem";
ssl_trusted_certificate /etc/letsencrypt/live/example.com/chain.pem;
resolver 1.1.1.1 1.0.0.1 valid=300s;
```



## Konfiguration



### Nginx-Konfiguration

Bearbeite die nginx-Konfigurationsdatei, die du zuvor erstellt hast, und ersetze den Inhalt durch die folgende Konfiguration, damit deine Seite ausschließlich über HTTPS ausgeliefert wird.

Ersetze `example.com` im `server_name`-Directive durch deine Domain und gib die korrekten Pfade zu deinen Zertifikatsdateien in den Direktiven `ssl_certificate` und `ssl_certificate_key` an.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Mozilla SSL Einstellungen einbinden
    include /etc/nginx/ssl/ssl.conf;

    # Zertifikat-Pfade (müssen mit deinem gemounteten Volume übereinstimmen)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Sicherheits-Header
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    # Gzip
    include /etc/nginx/inc/gzip.conf;

    # Proxy-Einstellungen für Odoo
    location / {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-NginX-Proxy true;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Forwarded-Host $host;
        proxy_redirect off;
        proxy_request_buffering off;
        # Empfohlene Timeouts für Standardanfragen
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Statische Dateien cachen
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Timeouts für Long Polling erhöhen
    location /longpolling {
        proxy_pass http://odoo:8069;
        proxy_connect_timeout 60s;
        proxy_send_timeout    300s;
        proxy_read_timeout    300s;
        send_timeout          300s;
    }

    location /websocket {
        proxy_pass http://odoo:8069;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name example.com;

    # Ermöglicht Certbot Zugriff auf die Challenge-URL
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



Nachdem du die Änderungen in der nginx-Konfiguration gespeichert hast, musst du die neuen Einstellungen anwenden, indem du den nginx-Container neu startest:

```
sudo docker compose restart nginx
```

Der Neustart sorgt dafür, dass nginx die aktualisierte Konfiguration lädt und sofort mit den neuen Parametern Anfragen bedient. Achte auf Fehlermeldungen während des Neustarts. Falls Probleme auftreten, kannst du die Container-Logs mit `sudo docker compose logs nginx` prüfen, um mögliche Konfigurationsfehler zu finden. Läuft der Container fehlerfrei, rufe deine Webseite auf, um zu bestätigen, dass HTTPS aktiv ist und die Seite wie erwartet ausgeliefert wird.



### Odoo Konfig-Optionen

Um eigene Einstellungen anzuwenden, kannst du eine dedizierte Konfigurationsdatei für Odoo anlegen. Erstelle eine neue Datei unter `config/odoo.conf` und füge die gewünschten Optionen hinzu.

In dieser Datei kannst du nützliche Parameter definieren: `list_db = False` blendet die Datenbankauswahl auf der Login-Seite aus, `proxy_mode = True` teilt Odoo mit, dass es hinter einem Reverse Proxy läuft, und wenn du eigene Addons nutzen möchtest, kannst du die Zeile `addons_path` auskommentieren und auf das Addons-Verzeichnis zeigen lassen, das du vorher erstellt hast. Beispielkonfiguration:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Entferne das -i base Flag

Das `-i base` Flag muss aus der `compose.yml` Datei entfernt werden, da sonst bei jedem Neustart des Odoo-Containers die Datenbank neu erstellt wird. Öffne die compose-Datei mit `nano compose.yml` und passe den Befehl wie folgt an:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Zugriff auf die Webseite

Sobald die Installation und Konfiguration abgeschlossen sind und alle Dienste laufen, kannst du deine Webseite sicher erreichen, indem du deine Domain in die Adresszeile des Browsers eingibst.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Damit wird die Startseite deiner neuen Installation geladen. Für den ersten Login gibt es ein Standardkonto mit dem Benutzernamen `admin` und dem Passwort `admin`. Es wird dringend empfohlen, diese Zugangsdaten sofort zu ändern.



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Odoo erfolgreich auf deinem VPS installiert und konfiguriert. Wir empfehlen dir außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir bei der weiteren Serverkonfiguration helfen können:

- [Odoo.com](https://odoo.com) - Offizielle Webseite
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odoo Dokumentation

Du hast spezielle Fragen, die hier nicht beantwortet wurden? Für weitere Fragen oder Support steht dir unser Support-Team täglich zur Verfügung! 🙂



<InlineVoucher />