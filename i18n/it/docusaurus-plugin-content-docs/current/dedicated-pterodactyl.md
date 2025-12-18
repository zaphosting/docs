---
id: dedicated-pterodactyl
title: "Server Dedicato: Installazione di Pterodactyl"
description: "Scopri come configurare e gestire efficacemente il tuo pannello server di gioco Pterodactyl → Scopri di più ora"
sidebar_label: Installa Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduzione

Pterodactyl Panel è un pannello di controllo open source progettato per gestire e ospitare facilmente server di gioco. Offre un'interfaccia utente che permette agli amministratori di configurare e gestire centralmente più server di gioco.

In questa guida esploreremo i passaggi necessari per configurare la tua istanza Pterodactyl sul tuo server.



## Preparazione

Ti servirà un server dedicato con Linux per installare il Pterodactyl Panel. Dovresti usare uno dei sistemi operativi compatibili elencati nella tabella qui sotto.

| OS     | Versioni compatibili |
| ------ | -------------------- |
| Ubuntu | 20.04, 22.04         |
| CentOS | 7, 8                 |
| Debian | 11, 12               |

## Dipendenze

Pterodactyl richiede diverse dipendenze per poter essere installato e funzionare correttamente. Si basa anche su un popolare gestore di dipendenze PHP chiamato Composer.

### Lista Dipendenze

Ecco una lista rapida delle dipendenze necessarie per questa guida. Vai alla sezione successiva per scoprire come installarle.

- PHP 8.1 con le seguenti estensioni: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml o dom, curl, zip e fpm.
- MariaDB
- Webserver - In questa guida useremo Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Installazione Dipendenze

Per prima cosa, esegui questo comando essenziale per poter aggiungere pacchetti non di default nel sistema operativo.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Ora installa i repository aggiuntivi per PHP, Redis e MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

Dovrai anche installare Redis, necessario per l’archiviazione temporanea dei dati.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

Per il webserver, abbiamo scelto Nginx perché è affidabile e open-source. Puoi installarlo oppure usare altri webserver come Apache o Caddy, ma non sono coperti in questa guida.

```bash
sudo apt install nginx # Scarica e installa Nginx
sudo ufw allow 'Nginx Full' # Configura il firewall
```

Ti consigliamo di visitare `http://[tuo_ip_server]/`, sostituendo `[tuo_ip_server]` con l’IP del tuo server, per testare che Nginx sia attivo. Dovresti vedere la pagina di benvenuto di default.

Prosegui installando MariaDB, che userai come database MySQL.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Infine aggiorna la lista dei repository e installa le dipendenze rimanenti.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

Ora hai tutte le dipendenze necessarie e puoi passare all’installazione di Composer.

### Installazione di Composer

Ora che le dipendenze principali sono installate, devi installare Composer, il gestore di dipendenze PHP più usato. Ti permetterà di scaricare e installare facilmente tutto il servizio Pterodactyl.

Esegui semplicemente questo comando:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Scarica il Pannello

Ora che hai tutto pronto, devi installare il Pterodactyl Panel.

Crea una cartella dove verrà salvato il pannello con questo comando:
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Ora clona il repository ufficiale di Pterodactyl su GitHub per scaricare i file necessari.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Una volta completato il download, il pannello sarà pronto. Nella sezione successiva configurerai tutte le impostazioni essenziali per farlo funzionare al meglio.

## Installazione

La prima parte dell’installazione consiste nel configurare un database MySQL che conterrà tutti i dati del tuo pannello Pterodactyl. Se hai già un database MySQL con un utente configurato, puoi saltare la sottosezione successiva.

### Configurazione Database

Accedi al tuo database MySQL per iniziare. Se è una nuova installazione, puoi farlo così:
```
mysql -u root -p
```

Altrimenti, usa il tuo utente MySQL con `-u` per username e `-p` per la password.

Una volta dentro, crea un nuovo utente per Pterodactyl. Sostituisci `[your_password]` con la password che vuoi usare:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

Ora crea il database per Pterodactyl e dai i permessi all’utente appena creato:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

Hai configurato correttamente utente e database per Pterodactyl, puoi uscire da MySQL con:
```
exit
```

### Proseguimento Setup

Copia ora il file di ambiente di default dove salverai i token segreti.
```bash
cp .env.example .env
```

Poi usa Composer per installare automaticamente tutti i pacchetti necessari:
```bash
composer install --no-dev --optimize-autoloader
```

Genera la chiave di crittografia per l’applicazione:
```bash
php artisan key:generate --force
```

### Configurazione Ambiente

Configura la tua istanza Pterodactyl con questi comandi interattivi, che ti guideranno tra sessioni, email, caching e altro.

```bash
php artisan p:environment:setup # Primo comando
php artisan p:environment:database # Secondo comando
```

### Configurazione Database

Ora imposta i dati base necessari per far funzionare il pannello, usando il database creato prima.

:::info
Questa operazione può richiedere qualche minuto. Non chiudere il processo o rischi di rompere tutto. Pazienta :)
:::

```bash
php artisan migrate --seed --force
```

### Creazione Utente Admin

Con il database pronto, crea il tuo primo utente amministratore per accedere al pannello:
```bash
php artisan p:user:make
```

### Impostazione Permessi

Imposta i permessi necessari per i file del pannello così che possa leggere e scrivere senza problemi.

Esegui:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Ora puoi accedere al pannello Pterodactyl visitando questo link, sostituendo `your_ipaddress` con l’IP del tuo server:
```
http://[your_ipaddress]/
```

### Queue Workers

Ultimo step: configura un cronjob che gira ogni minuto e un queue worker che gestisce i task in background.

Apri il crontab con `sudo crontab -e` e aggiungi questa riga:
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Ora crea un queue worker con systemd per mantenere attivo il processo in background.

Apri l’editor nano per creare il file:
```
nano /etc/systemd/system/pteroq.service
```

Incolla questo contenuto:
```
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
# Su alcuni sistemi l’utente e il gruppo potrebbero essere diversi.
# Alcuni usano `apache` o `nginx` come utente e gruppo.
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
Se usi CentOS, sostituisci `redis-server.service` con `redis.service` in questo file.
:::

Salva con `CTRL + X` e conferma con `Y`.

Infine, abilita i servizi Redis e il worker per l’avvio automatico:
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

Hai installato Pterodactyl sul tuo server! Puoi accedere al pannello tramite questo URL, sostituendo `[your_serverip]` con l’IP del tuo server:
```
http://[your_serverip]
```

## Opzionale: Configurazione Webserver

Come extra, puoi configurare il webserver. In questa guida abbiamo usato Nginx, quindi qui vedremo come modificarne la configurazione.

Così potrai usare il pannello sul tuo dominio e aggiungere un certificato SSL.

### Record DNS del Dominio

Per raggiungere il server tramite dominio, devi creare un record DNS di tipo `A` per quel dominio. Dipende dal provider, ma di solito si fa da un pannello DNS nella gestione del dominio. Il record deve puntare all’IP del tuo server.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Rimuovere configurazione di default

Inizia eliminando la configurazione di default di Nginx:
```bash
rm /etc/nginx/sites-enabled/default
```

Ora crea un nuovo file di configurazione per il pannello Pterodactyl. Decidi se vuoi usare SSL o no, perché la configurazione cambia un po’.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx con SSL" default>

### Configurazione Certbot

Per avere un certificato SSL, devi configurare un sistema che gestisca e rinnovi automaticamente i certificati. Useremo Certbot, open-source.

Installa Certbot sul server. Per Nginx serve anche il pacchetto python3-certbot-nginx.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Ora devi configurare la verifica per generare il certificato. Useremo la sfida DNS, più sicura di quella HTTP.

Devi creare un record DNS di tipo `TXT` per il dominio che vuoi usare. Anche questo dipende dal provider, ma si fa dal pannello DNS.

Esegui questo comando per ottenere il contenuto da mettere nel record `TXT`. Sostituisci `[your_domain]` con il tuo dominio.
```bash
certbot -d [your_domain] --manual --preferred-challenges dns certonly
```

Dopo aver creato il record DNS, configura il rinnovo automatico con un cronjob. Apri il crontab con `sudo crontab -e` e aggiungi questa riga per rinnovare ogni giorno alle 23:00:
```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Creazione file di configurazione

Ora che hai il certificato SSL, crea il file di configurazione.

Apri nano con:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Incolla questa configurazione, sostituendo `[your_domain]` con il tuo dominio.

:::warning
Assicurati di aver configurato il certificato SSL, altrimenti Nginx non partirà.
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
<TabItem value="Nginx Without SSL" label="Nginx senza SSL">

#### Creazione file di configurazione

Apri nano con:
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Incolla questa configurazione, sostituendo `[your_domain]` con il dominio che punta all’IP del tuo server.

:::warning
Se vuoi SSL, devi prima configurare il certificato, altrimenti Nginx non partirà.
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

### Applica Configurazione

Dopo aver modificato la configurazione, abilitala con:
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Non serve su CentOS

sudo systemctl restart nginx # Riavvia Nginx
```

Se tutto è andato liscio, ora puoi accedere al pannello Pterodactyl usando il dominio configurato.

Hai configurato con successo il webserver per usare il tuo dominio e aggiungere un certificato SSL al sito.