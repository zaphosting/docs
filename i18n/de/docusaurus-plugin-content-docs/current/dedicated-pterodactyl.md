---
id: dedicated-pterodactyl
title: "Dedicated Server: Installation von Pterodactyl"
description: Informationen zur Installation des Pterodactyl-Panels mit Debian auf deinem Dedicated Server von ZAP-Hosting -   ZAP-Hosting.com Dokumentation
sidebar_label: Pterodactyl installieren
---

## Einführung

Das Pterodactyl Panel ist ein Open-Source-Kontrollpanel, das speziell dafür entwickelt wurde, um das Verwalten und Hosten von Spieleservern zu vereinfachen. Es bietet eine Benutzeroberfläche, die es Administratoren ermöglicht, zentral mehrere Spieleserver zu konfigurieren und zu verwalten.

In dieser Anleitung werden wir die notwendigen Schritte durchgehen, um deine eigene Pterodactyl-Instanz auf deinem Server einzurichten.

## Voraussetzungen

Du benötigst einen dedizierten Server mit Linux, um das Pterodactyl Panel zu installieren. Du solltest eines der kompatiblen Betriebssysteme verwenden, die in der untenstehenden Tabelle aufgeführt sind.

| OS     | Kompatible Versionen |
| ------ | ------- |
| Ubuntu | 20.04, 22.04 |
| CentOS | 7, 8    |
| Debian | 11, 12  |



## Abhängigkeiten

Pterodactyl benötigt eine Reihe von Abhängigkeiten, um erfolgreich installiert und betrieben werden zu können. Es stützt sich auch auf einen beliebten Abhängigkeitsmanager für PHP namens Composer.

### Liste der Abhängigkeiten

Hier ist eine Kurzliste der Abhängigkeiten, die du für diese Anleitung benötigen wirst. Im folgenden Abschnitt erfährst du, wie du diese Abhängigkeiten installieren kannst.

- PHP 8.1 mit den folgenden Erweiterungen: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml oder dom, curl, zip und fpm.
- MariaDB
- Webserver - In dieser Anleitung werden wir Nginx verwenden.
- curl
- tar
- unzip
- git
- composer v2

### Installation der Abhängigkeiten

Zuerst solltest du diesen Befehl ausführen, der notwendig ist, um Pakete hinzuzufügen, die nicht standardmäßig im Betriebssystem enthalten sind.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Nun solltest du die zusätzlichen Repositories für PHP, Redis und MariaDB (MySQL) installieren.

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Du musst auch Redis installieren, das für die temporäre Datenspeicherung benötigt wird.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Für den Webserver haben wir uns für Nginx entschieden, da er zuverlässig und Open-Source ist. Du solltest diesen installieren, oder du könntest alternativ andere Webserver wie Apache oder Caddy verwenden, obwohl dies nicht gut zu dieser Anleitung passen würde.

```bash
sudo apt install nginx # Nginx herunterladen und installieren
sudo ufw allow 'Nginx Full' # Firewall anpassen
```

Wir empfehlen, auf http://[deine_serverip]/ zu gehen, wobei du [deine_serverip] durch die IP-Adresse deines Servers ersetzen solltest, um zu testen und sicherzustellen, dass Nginx läuft. Du solltest eine Standard-Willkommensseite sehen.

Weiterhin solltest du jetzt MariaDB installieren, das du als deine MySQL-Datenbank verwenden wirst.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Schließlich solltest du deine Repositories-Liste aktualisieren und die verbleibenden Abhängigkeiten installieren.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Jetzt solltest du alle notwendigen Abhängigkeiten installiert haben und kannst mit der Installation von Composer fortfahren.

### Installation von Composer

Jetzt, da deine Hauptabhängigkeiten installiert sind, musst du Composer installieren, einen beliebten Abhängigkeitsmanager für PHP. Dies ermöglicht dir, den gesamten Pterodactyl-Service einfach herunterzuladen und zu installieren. Führe einfach den folgenden Befehl aus:

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Das Panel herunterladen

Jetzt, da alle Voraussetzungen erfüllt sind, musst du das Pterodactyl Panel installieren. Du musst einen Ordner erstellen, in dem das Panel gespeichert wird, indem du den folgenden Befehl verwendest.

```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Nun kannst du das offizielle Pterodactyl GitHub Repository klonen, um die notwendigen Dateien herunterzuladen.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Sobald das Klonen abgeschlossen ist, hast du das Panel erfolgreich heruntergeladen. Im folgenden Abschnitt wirst du eine Vielzahl von wesentlichen Einstellungen und Optionen konfigurieren, um sicherzustellen, dass das Panel korrekt installiert ist und gut funktioniert.

## Installation

Der erste Teil der Installation umfasst das Einrichten einer MySQL-Datenbank, die alle Daten für dein Pterodactyl-Panel speichern wird. Wenn du bereits eine MySQL-Datenbank mit einem entsprechenden Benutzer eingerichtet hast, kannst du den nächsten Unterabschnitt überspringen.

### Datenbank einrichten

Du musst dich zuerst in deine MySQL-Datenbank einloggen. Wenn es sich um eine frische MySQL-Instanz handelt, kannst du dies einfach durch Ausführen des folgenden Befehls tun:
```
mysql -u root -p
```

Andernfalls, wenn du bereits eine MySQL-Instanz hast, kannst du dich mit deinem Login anmelden, wobei `-u` der Benutzername und `-p` das Passworteingabefeld ist.

Sobald du eingeloggt bist, musst du einen neuen Benutzer erstellen, den du für deine Pterodactyl-Instanz verwenden wirst. Stelle sicher, dass du `[dein_passwort]` durch das Passwort ersetzt, das du verwenden möchtest. Dies kann folgendermaßen durchgeführt werden:

```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

Jetzt, da dein Benutzer bereit ist, musst du eine Tabelle für deine Pterodactyl-Instanz erstellen. Du musst auch Berechtigungen für deinen neuen Benutzer erteilen, damit er Aktionen an der Tabelle durchführen kann. Führe einfach aus:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Du hast erfolgreich einen MySQL-Benutzer und eine Tabelle für deine Pterodactyl-Instanz eingerichtet, sodass du mit der Installation fortfahren kannst. Führe den Befehl `exit` aus, um die MySQL-Verwaltung zu verlassen.

### Fortsetzung der Einrichtung

Um fortzufahren, musst du nun die Standard-Umgebungsdatei kopieren, in der du deine geheimen Token speichern wirst.
```bash
cp .env.example .env
```

Anschließend kannst du Composer verwenden, um automatisch alle notwendigen Pakete zu installieren, indem du ausführst:
```bash
composer install --no-dev --optimize-autoloader
```

Du musst auch einen Verschlüsselungsschlüssel generieren, den du für deine Anwendung verwenden wirst, was durch folgenden Befehl geschieht:
```bash
php artisan key:generate --force
```

### Umgebungskonfiguration

Du wirst jetzt deine Pterodactyl-Instanz einrichten. Dies geschieht einfach durch Ausführen der folgenden Befehle. Jeder Befehl führt durch eine interaktive Einrichtung, die eine breite Palette von Einstellungen wie Sitzungen, E-Mail, Caching und mehr umfasst.

```bash
php artisan p:environment:setup #Erster Befehl
php artisan p:environment:database #Zweiter Befehl
```

### Datenbank einrichten

Der nächste Schritt ist die Einrichtung der Basisdaten, die für den Betrieb des Panels notwendig sind und die Datenbanktabelle verwenden, die du zuvor erstellt hast. Auch dies geschieht einfach durch Ausführen des folgenden Befehls.

:::info
Bitte beachte, dass dies einige Minuten dauern kann. Verlasse den Prozess nicht, da dies zu Fehlern führen kann. Bitte habe Geduld :)
:::

```bash
php artisan migrate --seed --force
```

### Admin-Benutzer einrichten

Jetzt, da deine Datenbank vorbereitet ist, musst du deinen ersten Administrator-Benutzer erstellen, damit du dich bei deinem Pterodactyl-Panel anmelden kannst. Dies geschieht einfach durch Ausführen des folgenden Befehls.
```bash
php artisan p:user:make
```

### Berechtigungen einrichten

Der nächste Schritt bei der Installation deines Panels ist das Einrichten der notwendigen Berechtigungen für Dateien, die sich im Pterodactyl-Panel befinden, damit die Panel-Instanz immer ohne Probleme lesen und schreiben kann.

Du kannst die Berechtigung durch Ausführen des folgenden Befehls setzen:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Sobald dies erledigt ist, solltest du auf dein Pterodactyl-Panel zugreifen können, indem du den folgenden Link aufrufst und `deine_ipadresse` durch die IP deines Systems ersetzt.
```
http://[deine_ipadresse]/
```


### Queue-Worker

Der letzte Schritt bei der Installation des Panels umfasst das Einrichten eines Cronjobs, der in regelmäßigen Abständen zusammen mit einem Queue-Worker läuft, der für viele Hintergrundaufgaben verantwortlich ist.

Öffne zunächst deinen Crontab, indem du `sudo crontab -e` in deiner Konsole ausführst. Sobald dieser geöffnet ist, führe den folgenden Befehl aus, der einen Cronjob einrichtet, der jede Minute für dein Pterodactyl-Panel läuft.
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Jetzt, da dies erledigt ist, musst du einen Queue-Worker mit `systemd` erstellen, der den Queue-Prozess im Hintergrund laufen lässt.

Erstelle eine neue Datei für den Worker, indem du das Folgende ausführst, was deinen Nano-Editor öffnen wird.

```
nano /etc/systemd/system/pteroq.service
```

In dieser Datei kopiere und füge den folgenden Inhalt ein:
```
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# On some systems the user and group might be different.
# Some systems use `apache` or `nginx` as the user and group.
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
Wenn du CentOS verwendest, musst du `redis-server.service` durch `redis.service` in der obigen Datei ersetzen.
:::

Sobald du fertig bist, kannst du speichern, indem du `CTRL + X` und `Y`drückst, um das Speichern der Datei zu bestätigen.

Schließlich musst du den Redis-Dienst und den von dir erstellten Dienst aktivieren, damit sie beim Systemstart ausgeführt werden, indem du die folgenden Befehle ausführst.
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Du hast Pterodactyl erfolgreich auf deinem Server installiert. Du solltest über die folgende URL auf das Panel zugreifen können, indem du `[deine_serverip]` durch die IP deines eigenen Servers ersetzt.
```
http://[deine_serverip]
```


## Optional: Konfiguration des Webservers

Als zusätzliches Feature kannst du deinen Webserver konfigurieren. In dieser Anleitung haben wir Nginx verwendet, daher wird dieser Abschnitt die Anpassung der Konfiguration dafür erkunden.

Der Vorteil einer weiteren Webserver-Konfiguration besteht darin, dass du das Panel auf deiner eigenen Domain einrichten und ein SSL-Zertifikat für deine Panel-Website einrichten könntest.

### DNS-Eintrag für Domain
Damit dein Server über deine Domain erreichbar ist, musst du einen `A` DNS-Eintrag für diese Domain einrichten. Dies hängt stark von deinem Anbieter ab, sollte jedoch über eine Art `DNS-Panel`-Bereich zugänglich sein, wenn du deine Domain verwaltest. Der Inhalt des Eintrags sollte die Ziel-IP-Adresse deines Servers sein, die du verwendest.

![image](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Entfernen der Standardkonfiguration
Beginne damit, die Standardkonfiguration von Nginx zu entfernen. Dies geschieht einfach durch das Löschen der Datei.
```bash
rm /etc/nginx/sites-enabled/default
```
An diesem Punkt solltest du die unten stehenden Inhalte verwenden, um eine neue Konfigurationsdatei für deine Pterodactyl-Panel-Site zu erstellen. Du solltest jetzt entscheiden, ob du SSL verwenden möchtest oder nicht, da die Inhalte der Konfiguration und die notwendigen Schritte je nach Wahl leicht unterschiedlich sein werden.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx mit SSL" label="Nginx mit SSL" default>

### Einrichten von Certbot
Damit deine Website ein SSL-Zertifikat erhält, musst du ein System einrichten, das deine Zertifikate automatisch verwaltet und erneuert. In diesem Fall wirst du Certbot verwenden, das Open-Source ist.

Zuerst musst du Certbot auf deinem Server installieren. Für Nginx musst du auch das Python3-Certbot-Paket installieren.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Als Nächstes musst du eine Verifizierung einrichten, um die Erstellung eines Zertifikats zu ermöglichen. In diesem Fall wirst du eine DNS-Herausforderung verwenden, da diese im Vergleich zu einer HTTP-Herausforderung sicherer ist.

Du musst einen `TXT` DNS-Eintrag für die Domain erstellen, die du verwenden möchtest. Dies hängt stark von deinem Anbieter ab, sollte jedoch über eine Art `DNS-Panel`-Bereich zugänglich sein, wenn du deine Domain verwaltest.

Führe den folgenden Befehl aus, der dir den Inhalt für deinen `TXT` DNS-Eintrag liefert. Ersetze `[deine_domain]` durch die Domain, die du verwenden möchtest.
```bash
certbot -d [deine_domain] --manual --preferred-challenges dns certonly
```

Sobald du deinen DNS-Eintrag eingerichtet hast, musst du die automatische Erneuerung durch die Verwendung eines Cronjobs einrichten. Öffne zuerst den Crontab, indem du `sudo crontab -e` ausführst, und wenn er geöffnet ist, führe den folgenden Befehl aus, um das Zertifikat jeden Tag um 23:00 Uhr Systemzeit zu erneuern.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Erstellen der Konfigurationsdatei

Jetzt, da du dein SSL-Zertifikat bereit hast, kannst du mit dem Erstellen deiner Konfigurationsdatei beginnen.

Führe einfach den folgenden Befehl aus, um den Nano-Editor im angegebenen Zielordner und mit dem spezifizierten Dateinamen zu öffnen.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Kopiere die untenstehende Konfigurationsdatei in den Editor. Stelle sicher, dass du `[deine_domain]` durch die Domain ersetzt, für die du in den vorherigen Schritten DNS-Einträge eingerichtet hast.

:::warning
Stelle sicher, dass du das SSL-Zertifikat eingerichtet hast, da sonst der Webserver nicht erfolgreich starten wird.
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
<TabItem value="Nginx ohne SSL" label="Nginx ohne SSL">

#### Erstellen der Konfigurationsdatei

Führe den folgenden Befehl aus, um den Nano-Editor im angegebenen Zielordner und mit dem spezifizierten Dateinamen zu öffnen.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Kopiere die untenstehende Konfigurationsdatei in den Editor. Stelle sicher, dass du `[deine_domain]` durch die Domain ersetzt, für die du einen DNS-Eintrag eingerichtet hast, der auf die IP-Adresse deines Servers zeigt.

:::warning
Stelle sicher, dass du das SSL-Zertifikat eingerichtet hast, da sonst der Webserver nicht erfolgreich starten wird.
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
Jetzt, da du die Änderungen an deiner Konfiguration vorgenommen hast, musst du sie aktivieren, indem du den folgenden Befehl ausführst.

```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Nicht erforderlich für CentOS

sudo systemctl restart nginx # Nginx neu starten
```

Nachdem alles erfolgreich abgeschlossen wurde, solltest du nun einfach auf dein Pterodactyl-Panel zugreifen können, indem du die Domain verwendest, die du in diesem Abschnitt eingerichtet hast.

Du hast deinen Webserver erfolgreich konfiguriert, um die Verwendung deiner Domain zu ermöglichen und ein SSL-Zertifikat zu deiner Website hinzuzufügen.