---
id: dedicated-pterodactyl
title: "Dedikerad Server: Installation av Pterodactyl"
description: "Upptäck hur du snabbt sätter upp och hanterar din egen Pterodactyl-spelserverpanel → Läs mer nu"
sidebar_label: Installera Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Pterodactyl Panel är en open source kontrollpanel designad för att enkelt hantera och hosta spelservrar. Den erbjuder ett användargränssnitt som låter administratörer centralt konfigurera och hantera flera spelservrar.

I den här guiden går vi igenom stegen för att sätta upp din egen Pterodactyl-instans på din server.



## Förberedelser

Du behöver en dedikerad server som kör Linux för att installera Pterodactyl Panel. Använd ett av de kompatibla operativsystemen i tabellen nedan.

| OS     | Kompatibla versioner |
| ------ | -------------------- |
| Ubuntu | 20.04, 22.04         |
| CentOS | 7, 8                 |
| Debian | 11, 12               |

## Beroenden

Pterodactyl kräver flera beroenden för att kunna installeras och köras korrekt. Den förlitar sig också på en populär beroendehanterare för PHP som heter Composer.

### Lista på beroenden

Här är en kort lista på beroenden du behöver för den här guiden. Gå vidare till nästa avsnitt för att se hur du installerar dem.

- PHP 8.1 med följande tillägg: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml eller dom, curl, zip och fpm.
- MariaDB
- Webbserver – i denna guide använder vi Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Installera beroenden

Börja med att köra detta kommando som är viktigt för att kunna lägga till paket som inte är standard i OS:et.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Nu installerar du extra repositories för PHP, Redis och MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Du måste även installera Redis som behövs för temporär datalagring.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

För webbservern valde vi Nginx eftersom den är pålitlig och open source. Du bör installera denna, eller så kan du använda andra webbservrar som Apache eller Caddy, men de passar inte lika bra för den här guiden.

```bash
sudo apt install nginx # Ladda ner och installera Nginx
sudo ufw allow 'Nginx Full' # Justera brandväggen
```

Vi rekommenderar att du går till `http://[din_serverip]/`, där du byter ut `[din_serverip]` mot din servers IP-adress för att testa och säkerställa att Nginx körs. Du bör se en standard välkomstsida.

Fortsättningsvis installerar du MariaDB som du kommer använda som din MySQL-databas.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Slutligen uppdaterar du dina repositories och installerar resterande beroenden.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Nu ska du ha alla nödvändiga beroenden installerade och kan gå vidare till att installera Composer.

### Installera Composer

När dina huvudberoenden är installerade måste du installera Composer, en populär beroendehanterare för PHP. Den gör det enkelt att ladda ner och installera hela Pterodactyl-tjänsten.

Kör helt enkelt följande kommando:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Ladda ner panelen

Nu när alla förutsättningar är på plats måste du installera Pterodactyl Panel.

Skapa en mapp där panelen ska lagras med kommandot nedan.
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Klona sedan den officiella Pterodactyl GitHub-repot för att ladda ner nödvändiga filer.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

När kloningen är klar har du panelen nedladdad. I nästa avsnitt konfigurerar du en rad viktiga inställningar för att säkerställa att panelen installeras korrekt och fungerar som den ska.

## Installation

Första steget i installationen är att sätta upp en MySQL-databas som kommer lagra all data för din Pterodactyl-panel. Har du redan en MySQL-databas med en passande användare kan du hoppa över nästa del.

### Databasinställning

Logga in på din MySQL-databas för att börja. Om det är en ny MySQL-instans gör du det enkelt med:
```
mysql -u root -p
```

Har du redan en MySQL-instans använder du ditt inlogg med `-u` som användarnamn och `-p` för lösenord.

När du är inloggad måste du skapa en ny användare för din Pterodactyl-instans. Byt ut `[ditt_lösenord]` mot det du vill använda. Kör:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[ditt_lösenord]';
```

Nu skapar du en databas för Pterodactyl och ger din nya användare rättigheter att hantera den.
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Du har nu skapat en MySQL-användare och databas för Pterodactyl, så du kan fortsätta installationen. Skriv `exit` för att lämna MySQL.

### Fortsatt setup

Kopiera nu standardmiljöfilen där du kommer lagra dina hemliga tokens.
```bash
cp .env.example .env
```

Använd Composer för att automatiskt installera alla nödvändiga paket:
```bash
composer install --no-dev --optimize-autoloader
```

Generera en krypteringsnyckel för din applikation:
```bash
php artisan key:generate --force
```

### Miljökonfiguration

Nu sätter du upp din Pterodactyl-instans. Kör följande kommandon som startar en interaktiv setup med inställningar för sessions, mail, caching med mera.

```bash
php artisan p:environment:setup # Första kommandot
php artisan p:environment:database # Andra kommandot
```

### Sätta upp databasen

Nästa steg är att lägga in grunddata som panelen behöver för att fungera, med hjälp av databasen du skapade tidigare.

:::info
Detta kan ta några minuter. Stäng inte ner processen, det kan förstöra installationen. Ha tålamod :)
:::

```bash
php artisan migrate --seed --force
```

### Skapa adminanvändare

Nu när databasen är klar måste du skapa din första adminanvändare för att kunna logga in i panelen.
```bash
php artisan p:user:make
```

### Sätta rättigheter

Nästa steg är att ge rätt behörigheter till filerna i Pterodactyl-panelen så att den alltid kan läsa och skriva utan problem.

Kör:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

När detta är klart kan du nå din Pterodactyl-panel via länken nedan, byt ut `din_ipadress` mot din servers IP.
```
http://[din_ipadress]/
```

### Köhanterare (Queue Workers)

Sista steget i installationen är att sätta upp en cronjob som körs regelbundet tillsammans med en köhanterare som sköter många bakgrundsuppgifter.

Öppna din crontab med `sudo crontab -e`. Lägg till följande rad som kör cronjobben varje minut för Pterodactyl:
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Skapa sedan en queue worker med `systemd` som håller köprocessen igång i bakgrunden.

Skapa en ny fil med nano:
```
nano /etc/systemd/system/pteroq.service
```

Klistra in följande innehåll:
```
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# På vissa system kan användare och grupp vara annorlunda.
# Vissa system använder `apache` eller `nginx` som användare och grupp.
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
Om du använder CentOS måste du byta ut `redis-server.service` mot `redis.service` i filen ovan.
:::

Spara med `CTRL + X` och `Y` för att bekräfta.

Slutligen aktiverar du redis-tjänsten och din nya tjänst så att de startar vid boot:
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Du har nu installerat Pterodactyl på din server. Du kan nå panelen via:
```
http://[din_serverip]
```

## Valfritt: Konfigurera webbservern

Som en extra grej kan du konfigurera din webbserver. I den här guiden använder vi Nginx, så här går vi igenom hur du justerar konfigurationen.

Fördelarna är att du kan köra panelen på din egen domän och lägga till SSL-certifikat för din panelwebbplats.

### Domänens DNS-post
För att din server ska nås via din domän måste du skapa en `A` DNS-post för domänen. Hur du gör detta beror på din leverantör, men det brukar finnas i en DNS-panel när du hanterar din domän. Postens innehåll ska vara IP-adressen till din server.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Ta bort standardkonfigurationen
Börja med att ta bort standardkonfigurationen för Nginx:
```bash
rm /etc/nginx/sites-enabled/default
```
Nu kan du skapa en ny konfigurationsfil för din Pterodactyl-panel. Bestäm om du vill använda SSL eller inte, eftersom konfigurationen skiljer sig lite.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx med SSL" default>

### Sätta upp Certbot
För att din webbplats ska ha SSL-certifikat måste du sätta upp ett system som automatiskt hanterar och förnyar certifikaten. Här använder vi Certbot som är open source.

Installera Certbot på servern. För Nginx behöver du även python3-certbot-paketet.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Nästa steg är att verifiera domänen för att kunna generera certifikatet. Vi använder DNS-utmaning eftersom det är säkrare än HTTP-utmaning.

Du måste skapa en `TXT` DNS-post för domänen du vill använda. Hur du gör detta beror på din leverantör, men det finns oftast i en DNS-panel.

Kör följande kommando som ger dig innehållet till din `TXT` DNS-post. Byt ut `[din_domän]` mot din domän.
```bash
certbot -d [din_domän] --manual --preferred-challenges dns certonly
```

När du skapat DNS-posten måste du sätta upp automatisk förnyelse via cronjob. Öppna crontab med `sudo crontab -e` och lägg till detta för att förnya certifikatet varje dag kl 23:00 systemtid.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Skapa konfigurationsfilen

Nu när du har SSL-certifikatet kan du skapa konfigurationsfilen.

Öppna nano för att skapa filen:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Klistra in följande konfiguration. Byt ut `[din_domän]` mot din domän som du satt DNS-poster för.

:::warning
Se till att SSL-certifikatet är klart, annars startar inte webbservern korrekt.
:::

```
server_tokens off;

server {
    listen 80;
    server_name [din_domän];
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name [din_domän];

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/[din_domän]/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/[din_domän]/privkey.pem;
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
<TabItem value="Nginx Without SSL" label="Nginx utan SSL">

#### Skapa konfigurationsfilen

Öppna nano för att skapa filen:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Klistra in följande konfiguration. Byt ut `[din_domän]` mot din domän som du satt DNS-post för som pekar på din servers IP.

:::warning
Se till att du har satt upp SSL-certifikatet, annars startar inte webbservern korrekt.
:::

```
server {
    listen 80;
    server_name [din_domän];

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

### Aktivera konfigurationen

När du gjort ändringarna måste du aktivera konfigurationen:
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Behövs ej på CentOS

sudo systemctl restart nginx # Starta om Nginx
```

Om allt gått rätt till kan du nu enkelt nå din Pterodactyl-panel via domänen du satt upp.

Du har nu konfigurerat din webbserver för att använda din domän och lagt till SSL-certifikat på din webbplats.