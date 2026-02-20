---
id: dedicated-linux-odoo
title: "Setup Odoo on a Linux Server - Run Your Own Open Source ERP and CRM"
description: "Discover how to manage and automate business processes with Odoo’s integrated ERP and CRM platform for streamlined company operations → Learn more now"
sidebar_label: Install Odoo
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Odoo is a modular open-source platform that combines Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) features. It allows businesses to manage and automate processes such as accounting, inventory, project management, and sales from a single system. 

With its flexible extensions, Odoo can be tailored to specific needs and provides an integrated solution for managing all areas of a company.

![img](https://screensaver01.zap-hosting.com/index.php/s/3nwfLeK2c9kTiCp/preview)

Considering about hosting this service yourself? We’ll walk you through every step on how to set it up and configure it, along with everything you need to keep in mind.





## Prerequisites

Before installing **Odoo**, ensure that your hosting environment meets the following requirements to guarantee a smooth installation and optimal performance.

| Hardware   | Minimum      | Recommended  |
| ---------- | ------------ | ------------ |
| CPU        | 1 vCPU Cores | 4 vCPU Cores |
| RAM        | 1 GB         | 4 GB         |
| Disk space | 15 GB        | 25 GB        |

The software requires that all necessary dependencies are installed and that it is running on a supported operating system. Make sure your server meets the following requirements before proceeding with the installation:

**Dependencies:** `Docker`

**Operating System:** Latest version of Ubuntu/Debian supporting Docker 26+

Ensure all dependencies are installed and the correct operating system version is in use to avoid compatibility issues during the installation of Odoo.



## Preparation

Before setting up the **Odoo**, you need to prepare your system. This includes updating your operating system to the latest version and installing all required dependencies. These preparations ensure a stable environment and help prevent issues during or after the installation.


### Update System
To make sure your system is running with the most recent software and security improvements, you should always perform system updates first. To do this, run the following command:

```
sudo apt update && sudo apt upgrade -y
```
This ensures that your system has the latest security patches and software versions before proceeding.

### Install dependencies
Once the update process is complete, the installation of dependencies can now be proceeded with. Bitwarden will be deployed and run on your machine using an array of Docker containers. This requires Docker to be installed first. To do this, run the following command: 

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

A complete walkthrough of the installation process and how to use Docker is available in our [Docker](dedicated-linux-docker.md) guide.



### Configure your domain

By default, Odoo runs on the host via ports 80 (HTTP) and 443 (HTTPS). Set up a domain with DNS records pointing to the host. If the domain is managed by us, you can easily do this using the [EasyDNS](domain-easydns.md) option.




## Installation
Now that all requirements have been met and the necessary preparations have been completed, you can proceed with the installation of the Odoo application.

When working with multiple Docker setups, it is a good practice to create a clear directory structure to keep projects isolated from one another. A common approach is to create a *docker* folder inside the user’s home directory, with a dedicated subfolder for each domain. This way, multiple projects can be hosted on the same server without configuration conflicts.

For example, to prepare the structure for the domain `example.com`:

```
mkdir -p /docker/example.com
cd /docker/example.com
```

Within this project directory, it is recommended to create subfolders that will be mounted as volumes by the containers. These volumes allow data to be shared between services or kept persistent. One critical case is the shared webroot, which both nginx and certbot must access in order to generate and renew SSL certificates. A suitable structure can be created as follows:

```
mkdir -p nginx/{conf,ssl,inc} config addons
```

This provides dedicated directories for nginx configuration, SSL certificates, include files, and Odoo-specific content such as configs and addons.




### Create Docker Compose

Inside your docker project create the compose.yml by using `nano compose.yml`. Insert the following code there:

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

For nginx and certbot to operate properly, you need to allow TCP ports 80 (HTTP) and 443 (HTTPS) through the firewall. These ports are essential because certbot relies on port 80 for HTTP validation, while port 443 is required to serve encrypted traffic over HTTPS. If UFW (Uncomplicated Firewall) is enabled, you can add the necessary rules using the following commands:

```
sudo ufw allow http
sudo ufw allow https
```

Afterward, verify the rules by running sudo ufw status to confirm that the ports are open. Make sure no other firewall configurations are blocking access to these ports, otherwise certificate generation or secure HTTPS traffic may fail.



### Nginx setup

The nginx setup begins by creating a configuration file for your domain. Inside the `nginx/conf` directory, create a new file named after your domain. To do so execute the `nano nginx/conf/example.com.conf` and add the basic directives into the file, replacing the placeholder with your actual domain name: 

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

This configuration allows certbot to complete the ACME challenge and issue valid SSL certificates. It also ensures that all HTTP requests are redirected to HTTPS.

Once the file has been saved, you can start the required containers. These include the database, Odoo, and nginx. Run the following command:

```
sudo docker compose up -d db odoo nginx
```

The containers will run in the background, and nginx will already use the new configuration, enabling certbot to generate certificates in the following step.


### Generate SSL certificates

Run the command below to create SSL certificates using certbot. Make sure to specify your own domain after the `-d` flag and replace the example address user@mail.com with your valid email.

```
sudo docker compose run --rm certbot certonly --webroot --webroot-path=/var/www/certbot -d example.com --email user@mail.com --agree-tos --no-eff-email
```

Generate a dedicated DH parameter file afterwards to further strengthen the security of the cryptographic key exchange.

```
openssl dhparam -out nginx/ssl/dhparam.pem 2048
```

Now create the `ssl.conf` file by using `nano nginx/ssl/ssl.conf`  and add the following content to it. Make sure to replace example.com with your domain:

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



## Configuration



### Nginx configuration

Edit the nginx configuration file you created earlier and replace its contents with the configuration shown below to ensure that your site is only served over HTTPS. 

Be sure to insert your actual domain name in the `server_name` directive and specify the correct paths to your certificate files in the `ssl_certificate` and `ssl_certificate_key` directives.

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



Once you have saved the changes in the nginx configuration, you need to apply the new settings by restarting the nginx container:

```
sudo docker compose restart nginx
```

Restarting ensures that nginx loads the updated configuration and immediately begins serving requests with the new parameters. Watch for any error messages during the restart process. If issues occur, you can inspect the container logs using `sudo docker compose logs nginx` to troubleshoot potential configuration problems. When the container runs without errors, revisit your website to confirm that HTTPS is active and the site is being served as expected.



### Odoo Config Options

To apply custom settings, you can create a dedicated configuration file for Odoo. Place a new file at `config/odoo.conf` and add the desired options. 

Within this file you can define several useful parameters: `list_db = False` hides the database selection from the login page, `proxy_mode = True` tells Odoo it is running behind a reverse proxy, and if you want to use custom addons, you can uncomment the `addons_path` line and point it to the addons directory you created earlier.  Example configuration:

```
[options]
list_db = False
proxy_mode = True
#addons_path = /mnt/extra-addons
```



### Remove -i base flage

The `-i base flag` must be removed from the `compose.yml` file, otherwise it will recreate the database when you recreate the odoo container, to remove it access the compose file. Open the compose file by using `nano compose.yml` and adjust the command like to this: 

```
command: odoo -d odoo_db --db_user=odoo --db_password=odoo --db_host=db
```



## Accessing website

Once the installation and configuration is complete and all services are running, you can securely access your website by entering your domain in the browser’s address bar.



![img](https://screensaver01.zap-hosting.com/index.php/s/QTEzbrqG66tTQEA/download)

This will load the start page of your new installation. For the initial login, a default account is provided with the username `admin` and the password `admin`. It is strongly recommended that you change these credential



## Conclusion and more Resources

Congratulations! You have now successfully installed and configured Odoo on your VPS/Dedicated Server. We also recommend taking a look at the following resources, which could provide you with additional help and guidance during your server configuration process

- [Odoo.com](https://odoo.com) - Official Website
- [odoo.com/documentation/18.0/](https://www.odoo.com/documentation/18.0/) - Odoo Documentation

Got specific questions that aren't covered here? For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂



