---
id: dedicated-pterodactyl
title: "Dedicated Server: Installation of Pterodactyl"
description: Information about installing the Pterodactyl panel using Debian on your ZAP-Hosting dedicated server - ZAP-Hosting.com documentation
sidebar_label: Install Pterodactyl
---

## Introduction

Pterodactyl Panel is an open source control panel designed to easily manage and host game servers. It provides a user interface that allows administrators to centrally configure and manage multiple game servers.

**Compatible OS with the guide**

| OS | Version | Available |
| -------------- | -------------- | ---------------------- |
| Ubuntu | 20.04 | ✔️ |
| | 22.04 | ✔️ |
| | 23 | ✔️ |
| Debian | 11 | ✔️ |
| | 12 | ✔️ |

## Prerequisites

You need a VPS KVM server or a dedicated Linux server to install Pterodactyl Panel.

You can use this guide by copying and pasting commands, but don't forget to read the comments in the bash lines.

## Package

- PHP 8.3 with the following extensions: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml or dom, curl, zip, and fpm
- MariaDB
- NGINX
- curl
- tar
- unzip
- git
- composer

## Installation of package

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

# On Ubuntu run :
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# On Debian run :
https://packages.sury.org/php/README.txt

 # Redis
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

# MariaDB
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

# Update
apt update

# Install package
apt -y install php8.3 php8.3-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

## Installation of composer
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Download Panel

Now that all the prerequisites are in place, we'll install the Pterodactyl Panel.

We will create a folder where the panel will be stored.

```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Now we'll downlad the files from the officiel Github Repository

```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

## Configuration

The panel is now installed, but we need to configure it to work

:::info
**Configure Database**
```sql
mysql -u root -p

# Change password
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY 'MY_ULTRA_SECURE_PASSWORD';
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
exit
```
:::

We will install composer package and generate a encryption key
```bash
cp .env.example .env
composer install --no-dev --optimize-autoloader
php artisan key:generate --force
```

## Base configuration

Le paramétrage de l'interface principale de Pterodactyl est simple grâce à quelques commandes CLI intégrées à l'application.

```bash
php artisan p:environment:setup
php artisan p:environment:database
php artisan p:environment:mail
```

## Database setup

We will install all the basic data

:::danger
DO NOT exit the process until it is completed!
:::

```bash
php artisan migrate --seed --force
```

## Create first user
```bash
php artisan p:user:make
```

Now we're going to create your admin user so that you can access the panel.

## Set Permissions

We need to permissions on the panel files for webserver
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

### Let's finalize the panel configuration

## Crontab configuration
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

## Create a queue worker
Create a file called `pteroq.service` in `/etc/systemd/system` with the following contents

```bash
# Pterodactyl Queue Worker File
# ----------------------------------

[Unit]
Description=Pterodactyl Queue Worker
After=redis-server.service

[Service]
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

### Activate Redis

```bash
systemctl enable --now redis-server
```

### Enable service

```
systemctl enable --now pteroq.service
```

## Configure Webserver

First, remove the default NGINX configuration.
```bash
rm /etc/nginx/sites-enabled/default
```
Now, you should copy the contents of the file below, replacing `<domain>` with your domain name, and save it to a file named `pterodactyl.conf`. Place this file in the `/etc/nginx/sites-enabled/` folder.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Nginx With SSL" label="Nginx With SSL" default>

```conf
server_tokens off;

server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name <domain>;

    root /var/www/pterodactyl/public;
    index index.php;

    access_log /var/log/nginx/pterodactyl.app-access.log;
    error_log  /var/log/nginx/pterodactyl.app-error.log error;

    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;
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
<TabItem value="Nginx Without SSL" label="Nginx Without SSL">
  
```conf
server {
    listen 80;
    server_name <domain>;


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

## Restart Nginx
```bash
systemctl restart nginx
```

# Wings Installation

### Installing Docker

For a quick installation of Docker CE, execute the following command:

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable bash
```

#### Enable Docker at Startup

For systems with systemd, use the following command to enable Docker to start automatically at system boot:

```bash
sudo systemctl enable --now docker
```

#### Enable Swap

To enable swap, open `/etc/default/grub` as a root user and add `swapaccount=1` in the line starting with `GRUB_CMDLINE_LINUX_DEFAULT`.

Then, execute `sudo update-grub` and `sudo reboot` to reboot the server.

```
GRUB_CMDLINE_LINUX_DEFAULT="swapaccount=1"
```

## Installing Wings

To install Wings, create the directory structure and download Wings using the following commands:

```bash
sudo mkdir -p /etc/pterodactyl
curl -L -o /usr/local/bin/wings "https://github.com/pterodactyl/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"
sudo chmod u+x /usr/local/bin/wings
```

## Configuration

After installing Wings, create a node in your Panel's admin view. Go to Nodes, select Create New, and configure the node.

In the Configuration tab of the node, copy the code block and paste it into a new file named `config.yml` in `/etc/pterodactyl`.

### Starting Wings

To start Wings in debug mode, use the following command:

```bash
sudo wings --debug
```

Once Wings is running without error, terminate the process and use `CTRL+C`.

### Daemonizing with systemd

To run Wings in the background, create a file named `wings.service` in `/etc/systemd/system` with the following content:

```
[Unit]
Description=Pterodactyl Wings Daemon
After=docker.service
Requires=docker.service

[Service]
User=root
WorkingDirectory=/etc/pterodactyl
LimitNOFILE=4096
ExecStart=/usr/local/bin/wings
Restart=on-failure
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

Run the following commands to reload systemd and start Wings:

```bash
systemctl enable --now wings
```

### Allocations

Allocations are IP and port combinations assigned to a server. Each server needs at least one allocation.

To create new allocations, go to Nodes > your node > Allocation.

To find the IP to use for the allocation, use `hostname -I | awk '{print $1}'` or `ip addr | grep "inet "`.

Avoid using `127.0.0.1` for allocations.
