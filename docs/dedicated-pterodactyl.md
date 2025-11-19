---
id: dedicated-pterodactyl
title: "Dedicated Server: Installation of Pterodactyl"
description: "Discover how to set up and manage your own Pterodactyl game server panel efficiently → Learn more now"
sidebar_label: Install Pterodactyl
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Pterodactyl Panel is an open source control panel designed to easily manage and host game servers. It provides a user interface that allows administrators to centrally configure and manage multiple game servers.

In this guide, we will explore the steps necessary to setup your own Pterodactyl instance on your server.



## Preparation

You will need a dedicated server running Linux to install the Pterodactyl Panel. You should use one of the compatible operating systems found in the table below.

| OS     | Compatible versions |
| ------ | ------------------- |
| Ubuntu | 20.04, 22.04        |
| CentOS | 7, 8                |
| Debian | 11, 12              |

## Dependencies

Pterodactyl requires a range of dependencies in order to be able to install and run successfully. It also relies on a popular dependency manager for PHP named Composer.

### Dependencies List

Here is a shortlist of depdencenies that you will require for this guide. Head over to the following section which explores how to install these dependencies.

- PHP 8.1 with the following extensions: cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml or dom, curl, zip, and fpm.
- MariaDB
- Webserver - In this guide we will use Nginx.
- curl
- tar
- unzip
- git
- composer v2

### Installing Dependencies

First, you should run this command which is essential in allowing you to add packages that aren't default to the OS.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg
```

Now you should install the additional repositories for PHP, Redis and MariaDB (MySQL).

```bash
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php
```

You will also have to install Redis which is needed for temporary data storage.

```bash
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
```

For the webserver, we chose to use Nginx since it is reliable and open-source. You should install this or you could use alternate webservers suchas Apache or Caddy, although this wouldn't fit in well with this guide.

```bash
sudo apt install nginx # Download and install Nginx
sudo ufw allow 'Nginx Full' # Adjust firewall
```

We recommend going to `http://[your_serverip]/`, replacing `[your_serverip]` with your server's IP address to test and ensure that Nginx is running. You should see a default welcome page.

Continuing, you should now install MariaDB which is what you will use as your MySQL database.
```bash
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

Finally, you should update your repositories list and install the remaining dependencies.
```bash
apt update
apt -y install php8.1 php8.1-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

You should now have all the necessary dependencies installed and can proceed to installing Composer.

### Installing Composer

Now that your main dependencies are installed, you will have to install Composer, which is a popular dependency manager for PHP. This will allow you to easily download and install the entire Pterodactyl service.

Simply run the following command:
```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Download the Panel

Now that all the prerequisites are in place, you will have to install the Pterodactyl Panel.

You must create a folder where the panel will be stored using the command below.
```bash
mkdir /var/www/pterodactyl
cd /var/www/pterodactyl
```

Now, you can clone the official Pterodactyl GitHub Repository to download the necessary files.
```bash
curl -Lo panel.tar.gz https://github.com/pterodactyl/panel/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

Once cloning is complete, you will have the panel downloaded successfully. In the following section, you will configure a wide range of essentially settings and options to ensure that the panel is installed correctly and functions well.

## Installation

The first part of the installation involves setting up a MySQL database which will store all of the data for your Pterodactyl panel. If you already have a MySQL database ready with an appropriate user, you may proceed past the next sub-section.

### Database Setup

You will need to login to your MySQL database to begin. If this is a fresh MySQL instance you can do this simply by running:
```
mysql -u root -p
```

Otherwise, if you already have a MySQL instance, you can use your login with `-u` being the username and `-p` being the password entry field.

Once logged in, you must create a new user which you will use for your Pterodactyl instance. Ensure that you replace `[your_password]` with what you wish to use. This can be done through:
```sql
CREATE USER 'pterodactyl'@'127.0.0.1' IDENTIFIED BY '[your_password]';
```

Now that your user is ready, you must create a table for your Pterodactyl instance. You will also have to grant permissions for your new user to be able to perform actions on the table. Simply run:
```sql
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'pterodactyl'@'127.0.0.1' WITH GRANT OPTION;
```

You have successfully setup a MySQL user and table for your Pterodactyl instance, so you can proceed with the installation. Run the `exit` command to leave MySQL management.

### Continuing Setup

To continue, you must now copy the default environment file where you will store your secret tokens.
```bash
cp .env.example .env
```

Following this, you can now use Composer to automatically install all necessary packages by running:
```bash
composer install --no-dev --optimize-autoloader
```

You must also generate an encryption key that you will use for your application, which is done through:
```bash
php artisan key:generate --force
```

### Environment Configuration

You will now setup your Pterodactyl instance. This is done simply by running the following commands. Each command will go through an interactive setup that covers a wide range of settings such as sessions, email, caching and more.

```bash
php artisan p:environment:setup #First Command
php artisan p:environment:database #Second Command
```

### Setting up the Database

The next step is to setup the base data that is necessary for the panel to run, which uses the database table that you created earlier. Once again, this is done simply by running the following command.

:::info
Please be aware that this may take up to a few minutes to complete. Do not exit the process or this may break things. Please be patient :)
:::

```bash
php artisan migrate --seed --force
```

### Setting up Admin User

Now that your database is prepared, you will have to create your first administrator user so that you can login to your Pterodactyl panel. This is done simply by running the following command.
```bash
php artisan p:user:make
```

### Setting up Permissions

The next step in installing your panel is setting the necessary permissions for files found in the pterodactyl panel so that the panel instance can always read and write without an issue.

You can set permission by running the following command:
```bash
chown -R www-data:www-data /var/www/pterodactyl/*
```

Once this is done, you should be able to access your Pterodactyl panel by heading over to the following link, replacing `your_ipaddress` with the IP of your system.
```
http://[your_ipaddress]/
```

### Queue Workers

The final step in installing the panel, involves setting up a cronjob which runs in regular intervals alongside a queue worker that is responsible for many background tasks.

First, open up your crontab by running `sudo crontab -e` in your console. Once this is open, run the following command which sets up a cronjob that runs every minute for your Pterodactyl panel.
```bash
* * * * * php /var/www/pterodactyl/artisan schedule:run >> /dev/null 2>&1
```

Now that this is done, you need to create a queue worker using `systemd` which keeps the queue process running in the background.

Create a new file for the worker, by running the following which will open up your nano editor.
```
nano /etc/systemd/system/pteroq.service
```

In here, copy and paste the following content:
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
If you are using CentOS, you must replace `redis-server.service` with `redis.service` in the above file.
:::

Once ready, you can save by pressing `CTRL + X` and `Y` to confirm the file to be saved.

Finally, you need to enable the redis service and the service you have created to run when your system boots by running the following commands.
```
sudo systemctl enable --now redis-server
sudo systemctl enable --now pteroq.service
```

You have successfully installed Pterodactyl on your server. You should be able to access the panel by the following url, replacing `[your_serverip]` with your own server's IP.
```
http://[your_serverip]
```

## Optional: Configuring the Webserver

As an additional feature, you may decide to configure your webserver. In this guide we used Nginx, therefore this section will explore how to adjust the configuration for this. 

The benefits of further webserver configuration is that you will be able to set up the panel on your own domain and could setup an SSL certificate for your panel website.

### Domain DNS Record
In order for your server to be reachable by your domain, you must setup an `A` DNS record for that domain. This is highly dependent on the provider that you use, but it should be accessible through some sort of a `DNS Panel` area when managing your domain. The contents of the record should be the target IP address of your server that you are using.

![](https://screensaver01.zap-hosting.com/index.php/s/EsGB6DaTC65Fce8/preview)

### Removing default configuration
Begin by removing the default Nginx configuration. This is done simply by removing the file.
```bash
rm /etc/nginx/sites-enabled/default
```
At this point, you should use the contents below to create a new configuration file for your pterodactyl panel site. You should decide whether you wish to use SSL or not at this stage, as the configuration contents and steps necessary will differ slightly depending on the choice.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Nginx With SSL" label="Nginx With SSL" default>

### Setting up Certbot
In order for your website to have an SSL certificate, you must setup a system which automatically manages and renews your certificates. In this case, you will use Certbot which is open-source.

First you must install Certbot to your server. For Nginx, you also need to install the python3 certbot pacakge.
```bash
sudo apt update
sudo apt install -y certbot
sudo apt install -y python3-certbot-nginx
```

Next you will have to setup verification in order to allow for generation of a certiciate. In this case, you will use a DNS challenge since this is more secure compared to an HTTP challenge.

You will have to create an `TXT` DNS record for the domain that you wish to use. This is highly dependent on the provider that you use, but it should be accessible through some sort of a `DNS Panel` area when managing your domain.

Run the following comamnd which is provide you with the content for your `TXT` DNS record. Replace `[your_domain]` with the domain that you wish to use.
```bash
certbot -d [your_domain] --manual --preferred-challenges dns certonly
```

Once you have setup your DNS record, you will have to setup auto renewal through the use of a cronjob. Firstly, open crontab by running `sudo crontab -e` and when open, run the following command to set the certificate to renew every day at 23:00 system time.

```bash
0 23 * * * certbot renew --quiet --deploy-hook "systemctl restart nginx"
```

#### Creating the Configuration File

Now that you have your SSL certificate ready, you can begin creating your configuration file.

Simply run the following command to open nano editor at the designated target folder and the specified file name.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Into the editor, copy the configuration file below. Make sure to replace `[your_domain]` with the domain that you have setup a DNS records for in previous steps.

:::warning
Make sure you have setup the SSL certificate, otherwise the the webserver will fail to start successfully.
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
<TabItem value="Nginx Without SSL" label="Nginx Without SSL">

#### Creating the Configuration File

Run the following command to open nano editor at the designated target folder and the specified file name.
```bash
nano /etc/nginx/sites-enabled/pterodactyl.conf
```

Into the editor, copy the configuration file below. Make sure to replace `[your_domain]` with the domain that you have setup a DNS record for pointing at your server's IP address.

:::warning
Make sure you have setup the SSL certificate, otherwise the the webserver will fail to start successfully.
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

### Apply Configuration

Now that you have performed the changes to your configuration, you must enable it by running the following.
```bash
sudo ln -s /etc/nginx/sites-available/pterodactyl.conf /etc/nginx/sites-enabled/pterodactyl.conf # Not needed for CentOS

sudo systemctl restart nginx # Restart Nginx
```

With everything being done successfully, you should now be able to easily access your Pterodactyl panel by using the domain that you have setup in this section.

You have successfully configured your webserver to enable the use of your domain and add an SSL certificate to your website.


