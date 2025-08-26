---
id: dedicated-linux-odoo
title: "Dedicated Server: Odoo (Open Source ERP and CRM) unter Linux einrichten"
description: Informationen zur Einrichtung von Odoo auf deinem Linux-Dedicated Server von ZAP-Hosting - ZAP-Hosting.com Dokumentation
sidebar_label: Odoo installieren
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Odoo ist eine modulare Open-Source-Plattform, die Funktionen für Enterprise Resource Planning (ERP) und Customer Relationship Management (CRM) kombiniert. Damit können Unternehmen Prozesse wie Buchhaltung, Lagerverwaltung, Projektmanagement und Vertrieb aus einem einzigen System verwalten und automatisieren. 

Mit seinen flexiblen Erweiterungen lässt sich Odoo auf spezifische Anforderungen zuschneiden und bietet eine integrierte Lösung zur Verwaltung aller Bereiche eines Unternehmens.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Du denkst darüber nach, diesen Dienst selbst zu hosten? Wir führen dich Schritt für Schritt durch Einrichtung und Konfiguration und nennen alles, was du beachten musst.

<InlineVoucher />



## Voraussetzungen

Bevor du **Odoo** installierst, stelle sicher, dass deine Hosting-Umgebung die folgenden Anforderungen erfüllt, um eine reibungslose Installation und optimale Leistung zu gewährleisten.

| Hardware   | Minimum      | Empfohlen   |
| ---------- | ------------ | ----------- |
| CPU        | 1 vCPU-Kerne | 4 vCPU-Kerne |
| RAM        | 1 GB         | 4 GB        |
| Speicherplatz | 15 GB     | 25 GB       |

Die Software erfordert, dass alle notwendigen Abhängigkeiten installiert sind und dass sie auf einem unterstützten Betriebssystem läuft. Stelle vor dem Fortfahren sicher, dass dein Server die folgenden Anforderungen erfüllt:

**Abhängigkeiten:** `Docker`

**Betriebssystem:** Neueste Version von Ubuntu/Debian mit Unterstützung für Docker 26+

Stelle sicher, dass alle Abhängigkeiten installiert sind und die richtige Betriebssystemversion verwendet wird, um Kompatibilitätsprobleme während der Installation von Odoo zu vermeiden.



## Vorbereitung

Bevor du **Odoo** einrichtest, musst du dein System vorbereiten. Dazu gehört, dein Betriebssystem auf die neueste Version zu aktualisieren und alle erforderlichen Abhängigkeiten zu installieren. Diese Vorbereitungen sorgen für eine stabile Umgebung und helfen, Probleme während oder nach der Installation zu vermeiden.


### System aktualisieren
Damit dein System mit der aktuellsten Software und den neuesten Sicherheitsverbesserungen läuft, solltest du zuerst Systemupdates durchführen. Führe dazu den folgenden Befehl aus:

```
sudo apt update && sudo apt upgrade -y
```
So stellst du sicher, dass dein System vor dem Fortfahren die neuesten Sicherheitspatches und Paketversionen hat.

### Abhängigkeiten installieren
Sobald der Aktualisierungsvorgang abgeschlossen ist, kann mit der Installation der Abhängigkeiten fortgefahren werden. Bitwarden wird auf deinem System mithilfe mehrerer Docker-Container bereitgestellt und ausgeführt. Dafür muss Docker zunächst installiert werden. Führe dazu die folgenden Befehle aus: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

Eine vollständige Anleitung zum Installationsprozess und zur Nutzung von Docker findest du in unsere [Docker](Dedicated Server-linux-docker.md) Anleitung.



### Domain konfigurieren

Standardmäßig läuft Odoo auf dem Host über die Ports 80 (HTTP) und 443 (HTTPS). Richte eine Domain mit DNS-Einträgen ein, die auf den Host zeigen. Wenn die Domain von uns verwaltet wird, kannst du das einfach über die Option [EasyDNS](domain-easydns.md) erledigen.




## Installation
Nun, da alle Anforderungen erfüllt sind und die notwendigen Vorbereitungen abgeschlossen wurden, kannst du mit der Installation der Odoo-Anwendung fortfahren.

Wenn du mit mehreren Docker-Setups arbeitest, ist es bewährte Praxis, eine klare Verzeichnisstruktur zu erstellen, um Projekte voneinander zu isolieren. Ein gängiger Ansatz ist, im Home-Verzeichnis des Benutzers einen Ordner *docker* anzulegen, mit einem eigenen Unterordner für jede Domain. So können mehrere Projekte auf demselben Server ohne Konfigurationskonflikte betrieben werden.

Beispiel zur Vorbereitung der Struktur für die Domain `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Innerhalb dieses Projektverzeichnisses wird empfohlen, Unterordner zu erstellen, die von den Containern als Volumes eingehängt werden. Diese Volumes ermöglichen es, Daten zwischen Diensten zu teilen oder persistent zu speichern. Ein wichtiger Fall ist das gemeinsame Webroot, auf das sowohl nginx als auch certbot zugreifen müssen, um SSL-Zertifikate zu erstellen und zu erneuern. Eine geeignete Struktur lässt sich wie folgt erstellen:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

So entstehen separate Verzeichnisse für nginx-Konfiguration, SSL-Zertifikate, Include-Dateien sowie Odoo-spezifische Inhalte wie Konfigurationen und Addons.




### Docker Compose erstellen

Erstelle in deinem Docker-Projekt die `compose.yml`, indem du `nano compose.yml` verwendest. Füge dort folgenden Code ein:

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

Damit nginx und certbot korrekt arbeiten, musst du die TCP-Ports 80 (HTTP) und 443 (HTTPS) in der Firewall erlauben. Diese Ports sind essenziell, da certbot für die HTTP-Validierung Port 80 benötigt, während Port 443 erforderlich ist, um verschlüsselten Verkehr über HTTPS bereitzustellen. Wenn UFW (Uncomplicated Firewall) aktiviert ist, kannst du die notwendigen Regeln mit den folgenden Befehlen hinzufügen:

```
sudo ufw allow http
sudo ufw allow https
```

Anschließend überprüfe die Regeln, indem du sudo ufw status ausführst, um zu bestätigen, dass die Ports geöffnet sind. Stelle sicher, dass keine anderen Firewall-Konfigurationen den Zugriff auf diese Ports blockieren, sonst kann die Zertifikatserstellung fehlschlagen oder der sichere HTTPS-Verkehr unterbrochen werden.



### Nginx einrichten

Die nginx-Einrichtung beginnt mit dem Erstellen einer Konfigurationsdatei für deine Domain. Erzeuge im Verzeichnis `nginx/conf` eine neue Datei mit dem Namen deiner Domain. Führe dazu `nano nginx/conf/example.com.conf` aus und füge die Basisdirektiven ein, wobei du den Platzhalter durch deinen tatsächlichen Domainnamen ersetzt: 

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

Diese Konfiguration ermöglicht es certbot, die ACME-Challenge abzuschließen und gültige SSL-Zertifikate auszustellen. Sie sorgt außerdem dafür, dass alle HTTP-Anfragen auf HTTPS umgeleitet werden.

Sobald die Datei gespeichert wurde, kannst du die benötigten Container starten. Dazu gehören die Datenbank, Odoo und nginx. Führe folgenden Befehl aus:

```
sudo docker compose up -d db odoo nginx
```

Die Container laufen im Hintergrund, und nginx verwendet bereits die neue Konfiguration, sodass certbot im nächsten Schritt Zertifikate erstellen kann.


### SSL-Zertifikate erstellen

Führe den folgenden Befehl aus, um mit certbot SSL-Zertifikate zu erstellen. Achte darauf, nach dem Flag `-d` deine eigene Domain anzugeben und die Beispieladresse user@mail.com durch deine gültige E-Mail zu ersetzen.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Erzeuge anschließend eine dedizierte DH-Parameterdatei, um die Sicherheit des kryptografischen Schlüsselaustauschs weiter zu stärken.

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Erstelle nun die Datei `ssl.conf` mit `nano nginx/ssl/ssl.conf` und füge den folgenden Inhalt ein. Ersetze dabei example.com durch deine Domain:

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

Bearbeite die zuvor erstellte nginx-Konfigurationsdatei und ersetze ihren Inhalt durch die unten gezeigte Konfiguration, um sicherzustellen, dass deine Seite ausschließlich über HTTPS ausgeliefert wird. 

Stelle sicher, dass du deinen tatsächlichen Domainnamen in der Direktive `server_name` einträgst und die korrekten Pfade zu deinen Zertifikatsdateien in den Direktiven `ssl_certificate` und `ssl_certificate_key` angibst.

```bash
server {
    listen 443 ssl;
    http2 on;
    server_name example.com;

    # Include Mozilla's SSL settings
    include /etc/nginx/ssl/ssl.conf;

    # Certificate paths (ensure these match your mounted volume)
    ssl_certificate /etc/letsencrypt/live/example.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/example.com/privkey.pem;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload" always;

    access_log /var/log/nginx/odoo_access.log;
    error_log  /var/log/nginx/odoo_error.log;

    #Gzip
    include /etc/nginx/inc/gzip.conf;

    # Proxy settings for Odoo
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
        # Recommended timeouts for standard requests
        proxy_connect_timeout 30s;
        proxy_send_timeout    60s;
        proxy_read_timeout    60s;
        send_timeout          60s;
    }

    # Cache static files
    location ~* /web/static/ {
        proxy_cache_valid 200 60m;
        proxy_buffering on;
        expires 864000;
        proxy_pass http://odoo:8069;
    }

    # Increase timeouts for long polling
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

    # This allows Certbot to access the challenge URL
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }

    location / {
        return 301 https://$host$request_uri;
    }
}
```



Sobald du die Änderungen in der nginx-Konfiguration gespeichert hast, musst du die neuen Einstellungen anwenden, indem du den nginx-Container neu startest:

```
sudo docker compose restart nginx
```

Der Neustart stellt sicher, dass nginx die aktualisierte Konfiguration lädt und Anfragen sofort mit den neuen Parametern bedient. Achte beim Neustart auf Fehlermeldungen. Falls Probleme auftreten, kannst du die Container-Logs mit `sudo docker compose logs nginx` prüfen, um mögliche Konfigurationsfehler zu beheben. Wenn der Container fehlerfrei läuft, rufe deine Website erneut auf, um zu bestätigen, dass HTTPS aktiv ist und die Seite wie erwartet ausgeliefert wird.



### Odoo-Konfigurationsoptionen

Um benutzerdefinierte Einstellungen anzuwenden, kannst du eine eigene Konfigurationsdatei für Odoo erstellen. Lege eine neue Datei unter `config/odoo.conf` an und füge die gewünschten Optionen hinzu. 

In dieser Datei kannst du mehrere nützliche Parameter definieren: `list_db = False` blendet die Datenbankauswahl von der Login-Seite aus, `proxy_mode = True` teilt Odoo mit, dass es hinter einem Reverse Proxy läuft, und wenn du benutzerdefinierte Addons verwenden möchtest, kannst du die Zeile `addons_path` auskommentieren und auf das zuvor erstellte Addons-Verzeichnis verweisen. Beispielkonfiguration:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### -i base flage entfernen

Der `-i base flag` muss aus der Datei `compose.yml` entfernt werden, da andernfalls die Datenbank neu erstellt wird, wenn du den odoo-Container neu erstellst. Um ihn zu entfernen, öffne die Compose-Datei. Öffne die Compose-Datei mit `nano compose.yml` und passe die Zeile `command` wie folgt an: 

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Auf die Website zugreifen

Sobald die Installation und Konfiguration abgeschlossen ist und alle Dienste laufen, kannst du sicher auf deine Website zugreifen, indem du deine Domain in die Adresszeile des Browsers eingibst.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

Dadurch wird die Startseite deiner neuen Installation geladen. Für den ersten Login wird ein Standardkonto mit dem Benutzernamen `admin` und dem Passwort `admin` bereitgestellt. Es wird dringend empfohlen, diese Zugangsdaten zu ändern



## Abschluss und weitere Ressourcen

Glückwunsch! Du hast Odoo jetzt erfolgreich auf deinem Dedicated Server installiert und konfiguriert. Wir empfehlen außerdem, einen Blick auf die folgenden Ressourcen zu werfen, die dir zusätzliche Hilfe und Orientierung während deiner Serverkonfiguration bieten können

- [Odoo.com](https://odoo.com) - Offizielle Website
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odoo-Dokumentation

Hast du spezielle Fragen, die hier nicht abgedeckt sind? Für weitere Fragen oder Unterstützung wende dich bitte an unser Support-Team, das täglich für dich da ist! 🙂



<InlineVoucher />