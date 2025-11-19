---
id: dedicated-linux-odoo
title: "Dedicated Server: Odoo (Open Source ERP und CRM) auf Linux installieren"
description: "Entdecke, wie du mit Odoos integrierter ERP- und CRM-Plattform Geschäftsprozesse verwaltest und automatisierst für reibungslose Abläufe → Jetzt mehr erfahren"
sidebar_label: Odoo installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Odoo ist eine modulare Open-Source-Plattform, die Enterprise Resource Planning (ERP) und Customer Relationship Management (CRM) Features kombiniert. Damit können Unternehmen Prozesse wie Buchhaltung, Lagerverwaltung, Projektmanagement und Vertrieb zentral steuern und automatisieren.

Dank flexibler Erweiterungen lässt sich Odoo individuell anpassen und bietet eine integrierte Lösung zur Verwaltung aller Unternehmensbereiche.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Willst du diesen Service selbst hosten? Wir begleiten dich Schritt für Schritt bei der Einrichtung und Konfiguration und zeigen dir alles, was du beachten musst.



## Voraussetzungen

Bevor du **Odoo** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Performance zu gewährleisten.

| Hardware   | Minimum      | Empfohlen   |
| ---------- | ------------ | ----------- |
| CPU        | 1 vCPU Kern  | 4 vCPU Kerne|
| RAM        | 1 GB         | 4 GB        |
| Festplattenspeicher | 15 GB | 25 GB       |

Die Software benötigt, dass alle erforderlichen Abhängigkeiten installiert sind und auf einem unterstützten Betriebssystem läuft. Prüfe vor der Installation, ob dein Server folgende Anforderungen erfüllt:

**Abhängigkeiten:** `Docker`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Docker 26+

Stelle sicher, dass alle Abhängigkeiten installiert sind und das Betriebssystem aktuell ist, um Kompatibilitätsprobleme bei der Odoo-Installation zu vermeiden.



## Vorbereitung

Bevor du **Odoo** einrichtest, solltest du dein System vorbereiten. Dazu gehört, das Betriebssystem auf den neuesten Stand zu bringen und alle benötigten Abhängigkeiten zu installieren. So sorgst du für eine stabile Umgebung und vermeidest Probleme während oder nach der Installation.


### System aktualisieren
Damit dein System mit den aktuellsten Software- und Sicherheitsupdates läuft, solltest du zuerst ein Update durchführen. Führe dazu folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor der Installation die neuesten Sicherheitspatches und Softwareversionen hat.

### Abhängigkeiten installieren
Nach dem Update kannst du mit der Installation der Abhängigkeiten starten. Odoo wird über mehrere Docker-Container betrieben, daher muss Docker zuerst installiert werden. Führe dazu folgende Befehle aus:

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine ausführliche Anleitung zur Docker-Installation und Nutzung findest du in unserer [Docker](vserver-linux-docker.md) Anleitung.



### Domain konfigurieren

Standardmäßig läuft Odoo auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf deinen Host zeigen. Wenn die Domain bei uns verwaltet wird, kannst du das ganz einfach über die [EasyDNS](domain-easydns.md) Funktion erledigen.




## Installation
Nachdem alle Voraussetzungen erfüllt und Vorbereitungen abgeschlossen sind, kannst du mit der Installation von Odoo starten.

Bei mehreren Docker-Projekten empfiehlt es sich, eine klare Verzeichnisstruktur anzulegen, um die Projekte voneinander zu trennen. Üblich ist ein *docker*-Ordner im Home-Verzeichnis des Nutzers, mit einem Unterordner pro Domain. So kannst du mehrere Projekte auf einem Server hosten, ohne dass es zu Konfigurationskonflikten kommt.

Zum Beispiel für die Domain `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Innerhalb dieses Projektordners solltest du Unterordner anlegen, die als Volumes von den Containern gemountet werden. Diese Volumes ermöglichen es, Daten zwischen Diensten zu teilen oder persistent zu speichern. Besonders wichtig ist der gemeinsame Webroot, auf den sowohl nginx als auch certbot zugreifen müssen, um SSL-Zertifikate zu erstellen und zu erneuern. Eine passende Struktur sieht so aus:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

Damit hast du dedizierte Ordner für nginx-Konfiguration, SSL-Zertifikate, Include-Dateien und Odoo-spezifische Inhalte wie Konfigurationen und Addons.




### Docker Compose erstellen

Erstelle in deinem Docker-Projekt die Datei `compose.yml` mit `nano compose.yml` und füge folgenden Code ein:

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

Damit nginx und certbot richtig funktionieren, müssen die TCP-Ports 80 (HTTP) und 443 (HTTPS) in der Firewall freigegeben sein. Diese Ports sind wichtig, weil certbot Port 80 für die HTTP-Validierung nutzt und Port 443 für verschlüsselten HTTPS-Traffic benötigt wird. Wenn UFW (Uncomplicated Firewall) aktiviert ist, kannst du die Regeln mit diesen Befehlen hinzufügen:

```
sudo ufw allow http
sudo ufw allow https
```

Prüfe danach mit `sudo ufw status`, ob die Ports offen sind. Achte darauf, dass keine anderen Firewall-Regeln den Zugriff blockieren, sonst kann die Zertifikatserstellung oder der sichere HTTPS-Verkehr fehlschlagen.



### Nginx einrichten

Die nginx-Konfiguration beginnt mit dem Anlegen einer Konfigurationsdatei für deine Domain. Erstelle im Verzeichnis `nginx/conf` eine neue Datei mit dem Namen deiner Domain. Zum Beispiel:

```
nano nginx/conf/example.com.conf
```

Füge folgende Grundkonfiguration ein und ersetze `example.com` durch deine Domain:

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

Diese Konfiguration erlaubt certbot, die ACME-Challenge durchzuführen und gültige SSL-Zertifikate auszustellen. Außerdem werden alle HTTP-Anfragen auf HTTPS umgeleitet.

Speichere die Datei und starte dann die benötigten Container für Datenbank, Odoo und nginx mit:

```
sudo docker compose up -d db odoo nginx
```

Die Container laufen nun im Hintergrund, und nginx nutzt bereits die neue Konfiguration, sodass certbot im nächsten Schritt Zertifikate erstellen kann.


### SSL-Zertifikate erstellen

Führe folgenden Befehl aus, um mit certbot SSL-Zertifikate zu generieren. Ersetze `example.com` durch deine Domain und `user@mail.com` durch deine gültige E-Mail-Adresse:

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Erstelle anschließend eine eigene DH-Parameter-Datei, um die Sicherheit des Schlüsselaustauschs zu erhöhen:

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



### Nginx konfigurieren

Bearbeite die nginx-Konfigurationsdatei, die du zuvor erstellt hast, und ersetze den Inhalt durch die folgende Konfiguration, damit deine Seite ausschließlich über HTTPS erreichbar ist.

Ersetze `example.com` im `server_name` durch deine Domain und passe die Pfade zu den Zertifikatsdateien in `ssl_certificate` und `ssl_certificate_key` entsprechend an.

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



Speichere die Änderungen und lade die neue nginx-Konfiguration mit einem Neustart des Containers:

```
sudo docker compose restart nginx
```

Der Neustart sorgt dafür, dass nginx die aktualisierte Konfiguration lädt und sofort mit den neuen Einstellungen arbeitet. Achte auf Fehlermeldungen beim Neustart. Falls Probleme auftreten, kannst du die Logs mit `sudo docker compose logs nginx` prüfen. Läuft der Container fehlerfrei, öffne deine Website erneut und überprüfe, ob HTTPS aktiv ist und die Seite korrekt ausgeliefert wird.



### Odoo Konfigurationsoptionen

Um eigene Einstellungen anzuwenden, kannst du eine dedizierte Konfigurationsdatei für Odoo anlegen. Erstelle eine neue Datei unter `config/odoo.conf` und füge deine gewünschten Optionen hinzu.

In dieser Datei kannst du nützliche Parameter definieren: `list_db = False` blendet die Datenbankauswahl auf der Login-Seite aus, `proxy_mode = True` teilt Odoo mit, dass es hinter einem Reverse Proxy läuft, und wenn du eigene Addons nutzen möchtest, kannst du die Zeile `addons_path` auskommentieren und auf dein Addons-Verzeichnis zeigen lassen. Beispiel:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Entferne das -i base Flag

Das `-i base` Flag muss aus der `compose.yml` entfernt werden, da sonst bei jedem Neustart des Odoo-Containers die Datenbank neu erstellt wird. Öffne die `compose.yml` mit `nano compose.yml` und passe den Befehl so an:

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Zugriff auf die Website

Nach erfolgreicher Installation und Konfiguration und wenn alle Dienste laufen, kannst du deine Website sicher erreichen, indem du deine Domain in die Browser-Adresszeile eingibst.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Die Startseite deiner neuen Installation wird geladen. Für den ersten Login gibt es einen Standard-Account mit dem Benutzernamen `admin` und dem Passwort `admin`. Es wird dringend empfohlen, diese Zugangsdaten sofort zu ändern.



## Fazit und weitere Ressourcen

Glückwunsch! Du hast Odoo erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen dir außerdem, folgende Ressourcen zu checken, die dir bei der Serverkonfiguration weiterhelfen können:

- [Odoo.com](https://odoo.com) – Offizielle Website
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) – Odoo Dokumentation

Du hast noch Fragen, die hier nicht beantwortet wurden? Für weitere Hilfe oder Support steht dir unser Team täglich zur Verfügung – melde dich einfach bei uns! 🙂