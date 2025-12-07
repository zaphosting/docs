---
id: dedicated-pterodactyl
title: "Dedicated Server: Installatie van Pterodactyl"
description: "Ontdek hoe je efficiënt je eigen Pterodactyl game server panel installeert en beheert → Leer het nu"
sidebar_label: Pterodactyl Installeren
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Pterodactyl Panel is een open source control panel dat ontworpen is om game servers makkelijk te beheren en hosten. Het biedt een gebruikersinterface waarmee admins centraal meerdere game servers kunnen configureren en beheren.

In deze gids nemen we je mee door de stappen om je eigen Pterodactyl installatie op je server op te zetten.



## Voorbereiding

Je hebt een dedicated server nodig met Linux om het Pterodactyl Panel te installeren. Gebruik een van de compatibele besturingssystemen uit de onderstaande tabel.

| OS     | Compatibele versies |
| ------ | ------------------- |
| Ubuntu | 20.04, 22.04        |
| CentOS | 7, 8                |
| Debian | 11, 12              |

## Dependencies

Pterodactyl heeft verschillende dependencies nodig om succesvol geïnstalleerd en gedraaid te worden. Daarnaast maakt het gebruik van Composer, een populaire dependency manager voor PHP.

### Lijst met Dependencies

Hier is een korte lijst van dependencies die je nodig hebt voor deze gids. In de volgende sectie leggen we uit hoe je deze installeert.

- PHP 8.1 met de volgende extensies: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml of dom, curl, zip, en fpm.
- MariaDB
- Webserver - in deze gids gebruiken we Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Dependencies Installeren

Eerst voer je deze command uit, essentieel om pakketten toe te voegen die niet standaard in het OS zitten.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Daarna voeg je de extra repositories toe voor PHP, Redis en MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Je moet ook Redis installeren, wat nodig is voor tijdelijke data opslag.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Voor de webserver kiezen we Nginx omdat het betrouwbaar en open-source is. Je kunt ook Apache of Caddy gebruiken, maar die passen minder goed bij deze gids.

```bash
sudo apt install nginx # Download en installeer Nginx
sudo ufw allow 'Nginx Full' # Pas firewall aan
```

We raden aan om naar `http://[jouw_serverip]/` te gaan (vervang `[jouw_serverip]` door het IP van je server) om te testen of Nginx draait. Je zou een standaard welkomstpagina moeten zien.

Vervolgens installeer je MariaDB, wat je als MySQL database gaat gebruiken.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Tot slot update je de repositories en installeer je de resterende dependencies.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Je hebt nu alle benodigde dependencies geïnstalleerd en kunt doorgaan met het installeren van Composer.

### Composer Installeren

Nu je de belangrijkste dependencies hebt, moet je Composer installeren, de populaire dependency manager voor PHP. Hiermee download en installeer je makkelijk de volledige Pterodactyl service.

Voer simpelweg deze command uit:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Panel Downloaden

Nu alles klaarstaat, moet je het Pterodactyl Panel installeren.

Maak eerst een map aan waar het panel opgeslagen wordt:
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Clone nu de officiële Pterodactyl GitHub repository om de benodigde bestanden te downloaden.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Na het downloaden is het panel succesvol binnengehaald. In de volgende sectie configureer je allerlei essentiële instellingen zodat het panel goed werkt.

## Installatie

Het eerste deel van de installatie is het opzetten van een MySQL database die alle data van je Pterodactyl panel opslaat. Heb je al een MySQL database met een geschikte gebruiker, dan kun je de volgende subsectie overslaan.

### Database Setup

Log in op je MySQL database om te beginnen. Bij een verse MySQL installatie doe je dit met:
```
mysql -u root -p
```

Heb je al een MySQL instance, gebruik dan je eigen login met `-u` als gebruikersnaam en `-p` voor het wachtwoord.

Eenmaal ingelogd, maak je een nieuwe gebruiker aan voor je Pterodactyl installatie. Vervang `[your_password]` door je gewenste wachtwoord:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

Maak nu een database aan en geef je nieuwe gebruiker de juiste rechten:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Je hebt nu een MySQL gebruiker en database klaarstaan voor Pterodactyl. Verlaat MySQL met `exit`.

### Setup Vervolgen

Kopieer nu het standaard environment bestand waar je je geheime tokens opslaat:
```bash
cp .env.example .env
```

Installeer vervolgens alle benodigde pakketten via Composer:
```bash
composer install --no-dev --optimize-autoloader
```

Genereer een encryptiesleutel voor je applicatie:
```bash
php artisan key:generate --force
```

### Environment Configuratie

Stel nu je Pterodactyl installatie in via interactieve setup commands. Hiermee configureer je sessies, e-mail, caching en meer.

```bash
php artisan p:environment:setup # Eerste command
php artisan p:environment:database # Tweede command
```

### Database Inrichten

Vervolgens zet je de basisdata op die het panel nodig heeft, gebruikmakend van de database die je eerder hebt aangemaakt.

:::info
Dit kan een paar minuten duren. Verlaat het proces niet, anders kan het misgaan. Even geduld dus :)
:::

```bash
php artisan migrate --seed --force
```

### Admin Gebruiker Aanmaken

Maak nu je eerste admin gebruiker aan om in te loggen op het Pterodactyl panel:
```bash
php artisan p:user:make
```

### Rechten Instellen

Geef de juiste rechten aan de bestanden zodat het panel altijd kan lezen en schrijven zonder problemen.

```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Je kunt nu je Pterodactyl panel bereiken via:
```
http://[jouw_ipadres]/
```

### Queue Workers

Laatste stap is het instellen van een cronjob die regelmatig draait, samen met een queue worker die achtergrondtaken afhandelt.

Open je crontab met `sudo crontab -e` en voeg deze regel toe om elke minuut de scheduler te draaien:
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Maak nu een queue worker aan met `systemd` die de queue processen op de achtergrond laat draaien.

Open een nieuw bestand in nano:
```
nano /etc/systemd/system/pteroq.service
```

Plak hierin de volgende inhoud:
```
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# Op sommige systemen kunnen user en group anders zijn.
# Soms is dat `apache` of `nginx`.
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
Gebruik je CentOS? Vervang dan `redis-server.service` door `redis.service` in dit bestand.
:::

Sla op met `CTRL + X` en bevestig met `Y`.

Activeer nu de redis service en je queue worker zodat ze starten bij het opstarten van je systeem:
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Pterodactyl is nu succesvol geïnstalleerd. Je kunt het panel bereiken via:
```
http://[jouw_serverip]
```

## Optioneel: Webserver Configureren

Als extra kun je je webserver configureren. In deze gids gebruiken we Nginx, dus hieronder lees je hoe je die aanpast.

Voordelen van deze configuratie zijn dat je het panel op je eigen domein kunt draaien en een SSL-certificaat kunt instellen.

### Domein DNS Record
Om je server bereikbaar te maken via je domein, moet je een `A` DNS record aanmaken. Dit doe je via het DNS paneel van je domeinprovider. Het record moet verwijzen naar het IP-adres van je server.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Default Config Verwijderen
Verwijder eerst de standaard Nginx configuratie:
```bash
rm /etc/nginx/sites-enabled/default
```

Maak nu een nieuwe configuratie aan voor je Pterodactyl panel. Kies of je SSL wilt gebruiken, want dat bepaalt welke configuratie je gebruikt.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx Met SSL" default>

### Certbot Installeren
Voor een SSL-certificaat gebruik je Certbot, een open-source tool die certificaten automatisch beheert en vernieuwt.

Installeer Certbot en de Nginx plugin:
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Je moet nu een verificatie instellen om het certificaat te genereren. We gebruiken een DNS challenge omdat dat veiliger is dan HTTP.

Maak een `TXT` DNS record aan voor je domein via je DNS paneel.

Voer deze command uit om de inhoud van het `TXT` record te krijgen. Vervang `[your_domain]` door je domein:
```bash
certbot -d [your_domain] --manual --preferred-challenges dns certonly
```

Zodra je DNS record staat, stel je automatische vernieuwing in via een cronjob. Open crontab met `sudo crontab -e` en voeg deze regel toe om elke dag om 23:00 te vernieuwen:

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Configuratiebestand Aanmaken

Open nu het configuratiebestand in nano:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Plak de volgende configuratie, vervang `[your_domain]` door je domein.

:::warning
Zorg dat je SSL certificaat klaarstaat, anders start Nginx niet goed op.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [your_domain];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [your_domain];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[your_domain]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[your_domain]/privkey.pem;
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
<TabItem value="Nginx Without SSL" label="Nginx Zonder SSL">

#### Configuratiebestand Aanmaken

Open nano:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Plak deze configuratie, vervang `[your_domain]` door je domein.

:::warning
Zorg dat je SSL certificaat klaarstaat, anders start Nginx niet goed op.
:::

```
server {
    listen 80;
    server_name [your_domain];

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

### Configuratie Toepassen

Activeer je configuratie met:
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Niet nodig voor CentOS

sudo systemctl restart nginx # Herstart Nginx
```

Als alles goed is gegaan, kun je nu je Pterodactyl panel bereiken via het domein dat je hebt ingesteld.

Je hebt nu je webserver succesvol geconfigureerd om je domein te gebruiken en een SSL-certificaat toe te voegen.