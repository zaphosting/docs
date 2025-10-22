---
id: dedicated-pterodactyl
title: "Dedicated Server: Installation von Pterodactyl"
description: "Entdecke, wie du dein eigenes Pterodactyl Gameserver-Panel effizient einrichtest und verwaltest → Jetzt mehr erfahren"
sidebar_label: Pterodactyl installieren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Das Pterodactyl Panel ist ein Open-Source Control Panel, das entwickelt wurde, um Gameserver einfach zu verwalten und zu hosten. Es bietet eine Benutzeroberfläche, mit der Administratoren mehrere Gameserver zentral konfigurieren und steuern können.

In dieser Anleitung zeigen wir dir die notwendigen Schritte, um deine eigene Pterodactyl-Instanz auf deinem Dedicated Server einzurichten.

<InlineVoucher />

## Vorbereitung

Du benötigst einen Dedicated Server mit Linux, um das Pterodactyl Panel zu installieren. Verwende eines der kompatiblen Betriebssysteme aus der folgenden Tabelle.

| OS     | Kompatible Versionen |
| ------ | -------------------- |
| Ubuntu | 20.04, 22.04         |
| CentOS | 7, 8                 |
| Debian | 11, 12               |

## Abhängigkeiten

Pterodactyl benötigt verschiedene Abhängigkeiten, um erfolgreich installiert und betrieben zu werden. Außerdem setzt es auf den beliebten PHP-Abhängigkeitsmanager Composer.

### Liste der Abhängigkeiten

Hier eine kurze Übersicht der Abhängigkeiten, die du für diese Anleitung brauchst. Im nächsten Abschnitt erfährst du, wie du diese installierst.

- PHP 8.1 mit den Extensions: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml oder dom, curl, zip und fpm.
- MariaDB
- Webserver – in dieser Anleitung verwenden wir Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Installation der Abhängigkeiten

Zuerst solltest du diesen Befehl ausführen, der es dir ermöglicht, zusätzliche Pakete hinzuzufügen, die nicht standardmäßig im OS enthalten sind.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Jetzt installierst du die zusätzlichen Repositories für PHP, Redis und MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Du musst außerdem Redis installieren, das für die temporäre Datenspeicherung benötigt wird.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Für den Webserver haben wir uns für Nginx entschieden, da es zuverlässig und Open-Source ist. Du solltest diesen installieren, alternativ kannst du auch Apache oder Caddy verwenden, aber das passt nicht so gut zu dieser Anleitung.

```bash
sudo apt install nginx # Nginx herunterladen und installieren
sudo ufw allow 'Nginx Full' # Firewall anpassen
```

Wir empfehlen, `http://[deine_serverip]/` im Browser aufzurufen und `[deine_serverip]` durch die IP deines Servers zu ersetzen, um zu testen, ob Nginx läuft. Du solltest eine Standard-Willkommensseite sehen.

Als nächstes installierst du MariaDB, das du als MySQL-Datenbank verwenden wirst.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Zum Schluss aktualisierst du die Paketliste und installierst die restlichen Abhängigkeiten.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Jetzt solltest du alle notwendigen Abhängigkeiten installiert haben und kannst mit der Installation von Composer weitermachen.

### Composer installieren

Nachdem die Hauptabhängigkeiten installiert sind, musst du Composer installieren, den beliebten PHP-Abhängigkeitsmanager. Damit kannst du den kompletten Pterodactyl-Service einfach herunterladen und installieren.

Führe einfach folgenden Befehl aus:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Panel herunterladen

Jetzt, wo alle Voraussetzungen erfüllt sind, musst du das Pterodactyl Panel installieren.

Erstelle zunächst einen Ordner, in dem das Panel gespeichert wird, mit folgendem Befehl:
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Jetzt kannst du das offizielle Pterodactyl GitHub-Repository klonen, um die notwendigen Dateien herunterzuladen.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Nach dem Download hast du das Panel erfolgreich heruntergeladen. Im nächsten Abschnitt konfigurierst du eine Vielzahl von wichtigen Einstellungen, damit das Panel korrekt installiert ist und gut funktioniert.

## Installation

Der erste Teil der Installation besteht darin, eine MySQL-Datenbank einzurichten, die alle Daten für dein Pterodactyl Panel speichert. Falls du bereits eine MySQL-Datenbank mit einem passenden Benutzer hast, kannst du den nächsten Unterabschnitt überspringen.

### Datenbank einrichten

Melde dich zunächst bei deiner MySQL-Datenbank an. Falls es eine frische MySQL-Instanz ist, kannst du das einfach mit folgendem Befehl tun:
```
mysql -u root -p
```

Falls du schon eine MySQL-Instanz hast, kannst du dich mit deinem Benutzernamen (`-u`) und Passwort (`-p`) anmelden.

Sobald du eingeloggt bist, musst du einen neuen Benutzer für deine Pterodactyl-Instanz anlegen. Ersetze `[dein_passwort]` durch dein gewünschtes Passwort:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[dein_passwort]';
```

Jetzt erstellst du eine Datenbank für Pterodactyl und gibst dem neuen Benutzer alle Rechte darauf:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Du hast erfolgreich einen MySQL-Benutzer und eine Datenbank für deine Pterodactyl-Instanz eingerichtet. Verlasse die MySQL-Konsole mit `exit`.

### Installation fortsetzen

Kopiere nun die Standard-Umgebungsdatei, in der du deine geheimen Tokens speichern wirst:
```bash
cp .env.example .env
```

Danach kannst du mit Composer alle notwendigen Pakete automatisch installieren:
```bash
composer install --no-dev --optimize-autoloader
```

Generiere außerdem einen Verschlüsselungsschlüssel für deine Anwendung:
```bash
php artisan key:generate --force
```

### Umgebungs-Konfiguration

Jetzt richtest du deine Pterodactyl-Instanz ein. Das geht interaktiv mit den folgenden Befehlen, die viele Einstellungen wie Sessions, E-Mail, Caching und mehr abdecken:

```bash
php artisan p:environment:setup # Erster Befehl
php artisan p:environment:database # Zweiter Befehl
```

### Datenbank einrichten

Der nächste Schritt ist das Einrichten der Basisdaten, die das Panel zum Laufen braucht. Dabei wird die zuvor erstellte Datenbank genutzt. Führe dazu folgenden Befehl aus.

:::info
Das kann einige Minuten dauern. Bitte nicht abbrechen, sonst kann es zu Problemen kommen. Bleib geduldig :)
:::

```bash
php artisan migrate --seed --force
```

### Admin-Benutzer anlegen

Nachdem die Datenbank vorbereitet ist, musst du deinen ersten Administrator-Benutzer anlegen, um dich im Pterodactyl Panel einzuloggen. Das geht mit:
```bash
php artisan p:user:make
```

### Berechtigungen setzen

Der nächste Schritt ist, die nötigen Berechtigungen für die Dateien im Pterodactyl Panel zu setzen, damit das Panel immer ohne Probleme lesen und schreiben kann.

Setze die Berechtigungen mit:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Danach solltest du dein Pterodactyl Panel über folgenden Link erreichen können, wobei du `deine_ipadresse` durch die IP deines Servers ersetzt:
```
http://[deine_ipadresse]/
```

### Queue Worker einrichten

Der letzte Schritt bei der Installation ist das Einrichten eines Cronjobs, der in regelmäßigen Abständen läuft, sowie eines Queue Workers, der viele Hintergrundaufgaben übernimmt.

Öffne zuerst deine Crontab mit `sudo crontab -e`. Füge dann folgenden Cronjob hinzu, der jede Minute für dein Pterodactyl Panel ausgeführt wird:
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Jetzt erstellst du einen Queue Worker mit `systemd`, der den Queue-Prozess im Hintergrund am Laufen hält.

Erstelle eine neue Datei für den Worker mit:
```
nano /etc/systemd/system/pteroq.service
```

Füge folgenden Inhalt ein:
```
# Pterodactyl Queue Worker Datei
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# Auf manchen Systemen können Benutzer und Gruppe anders heißen.
# Manche Systeme nutzen `apache` oder `nginx` als Benutzer und Gruppe.
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/pterodactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

:::note
Wenn du CentOS nutzt, musst du `redis-server.service` durch `redis.service` in der Datei ersetzen.
:::

Speichere die Datei mit `CTRL + X` und bestätige mit `Y`.

Aktiviere nun den Redis-Dienst und deinen neuen Service, damit sie beim Systemstart automatisch starten:
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Du hast Pterodactyl erfolgreich auf deinem Server installiert. Du solltest das Panel jetzt über folgende URL erreichen können, wobei du `[deine_serverip]` durch die IP deines Servers ersetzt:
```
http://[deine_serverip]
```

## Optional: Webserver konfigurieren

Als Zusatzfeature kannst du deinen Webserver konfigurieren. In dieser Anleitung haben wir Nginx verwendet, deshalb zeigen wir hier, wie du die Konfiguration anpasst.

Der Vorteil einer erweiterten Webserver-Konfiguration ist, dass du das Panel auf deiner eigenen Domain laufen lassen und ein SSL-Zertifikat für deine Panel-Webseite einrichten kannst.

### DNS-Eintrag für die Domain

Damit dein Server über deine Domain erreichbar ist, musst du einen `A` DNS-Eintrag für die Domain anlegen. Das hängt stark von deinem Provider ab, sollte aber über ein `DNS Panel` in der Domain-Verwaltung möglich sein. Der Eintrag muss auf die IP-Adresse deines Servers zeigen.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Standard-Konfiguration entfernen

Entferne zuerst die Standard-Nginx-Konfiguration mit:
```bash
rm /etc/nginx/sites-enabled/default
```

Jetzt kannst du die untenstehenden Inhalte nutzen, um eine neue Konfigurationsdatei für dein Pterodactyl Panel anzulegen. Entscheide dich, ob du SSL nutzen möchtest, da sich die Konfiguration und die notwendigen Schritte dann leicht unterscheiden.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx mit SSL" default>

### Certbot einrichten

Damit deine Webseite ein SSL-Zertifikat bekommt, musst du ein System einrichten, das Zertifikate automatisch verwaltet und erneuert. Hier nutzen wir Certbot, das Open-Source ist.

Installiere Certbot auf deinem Server. Für Nginx brauchst du außerdem das Python3-Certbot-Paket.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Als nächstes richtest du die Verifizierung ein, um ein Zertifikat zu generieren. Wir nutzen eine DNS-Challenge, da diese sicherer ist als eine HTTP-Challenge.

Du musst einen `TXT` DNS-Eintrag für die Domain anlegen, die du verwenden möchtest. Das hängt vom Provider ab, sollte aber über ein `DNS Panel` möglich sein.

Führe folgenden Befehl aus, der dir den Inhalt für den `TXT` DNS-Eintrag anzeigt. Ersetze `[deine_domain]` durch deine Domain.
```bash
certbot -d [deine_domain] --manual --preferred-challenges dns certonly
```

Nachdem du den DNS-Eintrag gesetzt hast, richtest du die automatische Erneuerung per Cronjob ein. Öffne dazu die Crontab mit `sudo crontab -e` und füge folgenden Eintrag hinzu, der das Zertifikat täglich um 23:00 Uhr erneuert:

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Konfigurationsdatei erstellen

Jetzt, wo dein SSL-Zertifikat bereit ist, kannst du die Konfigurationsdatei anlegen.

Öffne den Nano-Editor mit:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Füge folgenden Inhalt ein. Ersetze `[deine_domain]` durch deine Domain, für die du den DNS-Eintrag gesetzt hast.

:::warning
Stelle sicher, dass du das SSL-Zertifikat eingerichtet hast, sonst startet der Webserver nicht korrekt.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [deine_domain];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [deine_domain];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[deine_domain]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[deine_domain]/privkey.pem;
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header X-Frame-Options DENY;
    add_header Referrer-Policy same-origin;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        include /etc/nginx/fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

</TabItem>
<TabItem value="Nginx Without SSL" label="Nginx ohne SSL">

#### Konfigurationsdatei erstellen

Öffne den Nano-Editor mit:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Füge folgenden Inhalt ein. Ersetze `[deine_domain]` durch deine Domain, für die du einen DNS-Eintrag auf deine Server-IP gesetzt hast.

:::warning
Stelle sicher, dass du das SSL-Zertifikat eingerichtet hast, sonst startet der Webserver nicht korrekt.
:::

```
server {
    listen 80;
    server_name [deine_domain];

    root /var/www/pterodactyl/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.1-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```
</TabItem>
</Tabs>

### Konfiguration anwenden

Nachdem du die Änderungen an deiner Konfiguration vorgenommen hast, musst du sie aktivieren:

```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Nicht nötig bei CentOS

sudo systemctl restart nginx # Nginx neu starten
```

Wenn alles erfolgreich war, solltest du dein Pterodactyl Panel jetzt bequem über die Domain erreichen können, die du in diesem Abschnitt eingerichtet hast.

Du hast deinen Webserver erfolgreich konfiguriert, um deine Domain zu nutzen und ein SSL-Zertifikat für deine Webseite hinzuzufügen.

<InlineVoucher />