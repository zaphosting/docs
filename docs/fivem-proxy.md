---
id: fivem-proxy
title: "FiveM: Setup a Reverse Proxy"
description: "Discover how to enhance your FiveM server security and reliability with a reverse proxy setup for better DDoS protection and performance → Learn more now"
sidebar_label: Reverse Proxy
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A reverse proxy server is a server that acts as an intermediary between the end users (your players) and your FiveM server. This can be highly beneficial for servers that receive frequent DDoS attacks, as it provides an extra layer of security and reliability by reducing visibility of the main host and provides extra mitigation.

In this guide, we will explore the process of setting up a reverse proxy for your FiveM server. There are two types of reverse proxies in this scenario; the connect proxy which is used for the connect endpoint and a server proxy which is used for the server endpoint where raw TCP/UDP proxying occurs. Both can be setup independent of each other.

<InlineVoucher />

## Preparation

In order to setup a reverse proxy you will require a **Linux Server** (such as a VPS) which will host your proxy server. In this example, we will be using Ubuntu as the Linux distro, but the installation steps should be very similar for most Linux distributions.

:::tip Recommended VPS Specs
We highly recommend purchasing higher network speeds if you plan to setup a server proxy, especially if your server has many players. This is because your VPS will be streaming raw TCP/UDP directly between the client (player) and the FiveM server. Otherwise, a server with base specs and minimal upgrades should suffice. :)
:::

We also recommend setting the proxy up with a **Domain** that you own. You should create an `A` record on the domain you wish to use (for example `zapdocs.example.com`), pointing it at the IP Address of your __Linux VPS__. This is what players will use to connect to the server, although you could technically use the IP Address of your proxy server instead if you wish.

### Accessing VPS

With your Linux VPS ready, you will have to connect to it. Please use our [SSH Initial Access](vserver-linux-ssh.md) guide to learn more about how to do this.

### Installing Nginx

You will be using Nginx to host a reverse proxy server as it is a highly performant and popular open-source web server.

Now that you have accessed your VPS, use the following command to install Nginx.

```
sudo apt install nginx
```

Once installed, you will have to adjust your firewall to ensure that the service is accessible from the internet. For this guide, we will be using the **UFW Firewall** since Nginx registers itself as an app, making it easy to adjust settings. You can learn more about the UFW Firewall using our [Linux Security Tips](vserver-linux-security-tips.md) guide.

:::note
If you are using other firewalls (such as Iptables), please ensure that you provide the relevant firewall access to Nginx, specifically on port 80 and 443 where the nginx service operates.
:::

You can check Nginx profiles by running `sudo ufw app list`. In this scenario, we would want to select the **Nginx Full** option, which will provide access to HTTP for testing and HTTPS for production use.

```
sudo ufw allow 'Nginx Full'
```

With Nginx now setup, attempt to access the page via a browser to ensure it is working as expected. If the test page works as expected, you can now proceed with the guide.

```
http://[your_serverip]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect Proxy

A connect proxy is used to proxy the connect endpoint for your FiveM server. In essence, this means that your proxy server will be responsible in receiving connect endpoint requests and passing them on to your main FiveM server. This provides a great benefit in masking the true FiveM host IP Address from the server list, reducing visibility.

### Nginx Setup

Begin by creating an entry within the Nginx directory for the host you selected earlier during domain setup. In this example, we will be using `zapdocs.example.com` as before.

Use the following command to create the server block for your domain, replacing `[your_domain]` with your own.

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

Now copy the following template into your editor and adjust it with your values.

```
upstream backend {
    # FiveM Server IP Address
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # For example: zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # Required to pass auth headers correctly
        proxy_pass_request_headers on;
        # Required to not make deferrals close the connection instantly
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # Extra block for a caching proxy
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

With all the input values now adapted to your setup, you can save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

Now you need to activate the server block file by creating a symlink to the active directory.

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

To ensure that everything is correct, especially in regard to syntax, you can use `sudo nginx -t` to see if any issues return. If it returns successful, the last step is to restart Nginx to take the new server block in effect.

```
systemctl reload nginx.service
```

With the service restarted, you should now test accessing the domain you have used for the reverse proxy in your browser. Upon success, the page should load the desired content that you have set as the `targetServer` parameter. If you are facing issues, we recommend checking the logs for troubleshooting using `journalctl -f -u nginx.service` to identify any potential errors.

### FiveM Configuration

With the proxy now setup, you will have to adjust some values in the `server.cfg` configuration file on your FiveM server.

Add the following contents into the configuration, replacing values with your setup.

```
# Prevents the server list from advertising your server using its actual IP
set sv_forceIndirectListing true

# Makes the server list backend request your domain instead of default (example: zapdocs.example.com)
set sv_listingHostOverride "[your_domain]"

# A space-separated list of IPv4 networks in CIDR notation to allow 'X-Real-IP' from, as well as bypass the rate limiter
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# The actual endpoint your server is hosted on, or one or multiple server endpoint proxies
set sv_endpoints "[your_fivem_serverip]:30120"
```

Now save the file and restart the server. The next time your server is started, your domain should now resolve to your FiveM server meaning it can be used to connect.

You can verify everything is functional by attempting to access: `https://[your_domain]/info.json`. If it loads correctly, your connect proxy is working.

## Server Proxy

A server proxy is used to proxy the server endpoint to your FiveM server, which directly proxies the raw TCP/UDP endpoints and streams.

### Nginx Setup

To do this, you will use the **stream** module that is a part of Nginx. Access and open the `nginx.conf` file using nano.

```
sudo nano /etc/nginx/nginx.conf
```

Now copy the following contents into the root scope, replacing values with your setup.

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

With all the input values now adapted to your setup, you can save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

To ensure that everything is correct, especially in regard to syntax, you can use `sudo nginx -t` to see if any issues return. If it returns successful, the last step is to restart Nginx to take the new configuration in effect.

```
systemctl reload nginx.service
```

With the service restarted, you should attempt to connect to your game server via the proxy domain. Upon success, you should be able to connect to the game server, specifically the server you have set as the `targetServer` parameter. If you are facing issues, we recommend checking the logs for troubleshooting using `journalctl -f -u nginx.service` to identify any potential errors.

### FiveM Configuration

With the proxy now setup, you will have to adjust a value in the `server.cfg` configuration file on your FiveM server.

:::tip
If you have already setup the `set sv_endpoints` parameter by setting up a Connect Proxy, you can skip this.
:::

Add the following line into the configuration, replacing the value with your setup.

```
# The actual endpoint your server is hosted on, or one or multiple server endpoint proxies
set sv_endpoints "[your_fivem_serverip]:30120"
```

Now save the file and restart the server. The next time the server is started, the raw TCP/UDP endpoints should now be streaming through your reverse proxy.

You can verify this by analysing the IP Address of players, which should all be the IP Address of your proxy server followed by random allocated ports.

## SSL Certificate

With your FiveM reverse proxy now setup, we highly recommend adding an SSL Certificate to your used domains to ensure that the site transmits data securely via HTTPS.

Please check out our [Install Certbot](dedicated-linux-certbot.md) guide, which covers the entire process of requesting and automatically renewing SSL Certificates for your domain(s).

## Conclusion

Congratulations, you have successfully setup a reverse proxy for your FiveM server, providing you with various security, reliability and performance improvements. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
