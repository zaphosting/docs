---
id: vserver-linux-proxy
title: "VPS: Setup a Reverse Proxy with nginx on Linux"
description: "Discover how to set up a secure and efficient reverse proxy for websites and game servers to enhance access and protection → Learn more now"
sidebar_label: Reverse Proxy
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

A reverse proxy server is a server that acts as an intermediary between the end users and another server. Websites and game servers are popular reasons for implementing a reverse proxy, each with their own various advantages including security, ease of access and protection.

In this guide, we will explore the process of setting up a general-purpose reverse proxy for websites as well as one tailored towards game servers.

<InlineVoucher />

## Preparation

In order to setup a reverse proxy you will require a **Linux Server** which will host your proxy server. In this example, we will be using Ubuntu as the Linux distro, but the installation steps should be very similar for most Linux distributions.

:::tip Recommended VPS Specs
For a reverse proxy tailored to game servers, we highly recommend purchasing higher network speeds, especially if your server has many players. This is because your VPS will be streaming raw TCP/UDP directly between the client (player) and the game server. Otherwise, a server with base specs and minimal upgrades should suffice for a web-related proxy. :)
:::

We recommend setting the proxy up with a **Domain** that you own. For each subdomain that you plan to use, you should create an `A` DNS record (for example `zapdocs.example.com`), pointing it at the IP Address of your __Linux VPS__. This is what users will use to access your website or game server.

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

## For Websites

A reverse proxy for websites can be highly beneficial for a variety of reasons, including redirecting to internal server resources, such as a vaultwarden instance (without needing the port within the URL), or relaying the user to external content which is useful for load balancing and protection.

One of the biggest benefits is that your server can handle requests from as many sources/domains as needed, as opposed to a single web server running on port 80/443.

### Nginx Setup

Begin by creating an entry within the Nginx directory for the domain you selected earlier, which typically will be a subdomain such as `zapdocs.example.com` as in our example.

:::important
Ensure that you set up an `A` record pointing it at the IP Address of your proxy server before proceeding. Without this, the domain and any subsequent steps will not work as expected.
:::

Access the server block folder using the following command. This is where you will store all of your proxy configurations.

```
cd /etc/nginx/sites-available/
```

Now use the following command to create a new config file. We recommend using the domain used as the file name, to make it easy to identify (e.g. zapdocs.example.com). Replace `[your_filename]` with a filename you wish to use.

```
sudo nano [your_filename]
```

This should open the nano editor, which will allow you to enter contents. Copy the following template into the editor. You need to adjust `[your_domain]` with the domain you wish to proxy followed by `[your_target_server]` for the target server you wish to reach.

```
upstream targetServer {
    # Add the target server you aim to reach. This can be either:
    # Internal "localhost" redirect (e.g. 127.0.0.1:9090)
    # External server (e.g. 103.146.43.52:9000)
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # Domain which should be handled (e.g. zapdocs.example.com)
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
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

## For Game Servers

A reverse proxy for game servers can be highly beneficial for a variety of reasons, including providing an extra layer of security and reliability by improving mitigation and restricting access to the main host.

:::tip
Most dedicated game servers should work perfectly well with a raw TCP/UDP endpoint proxy which you will setup. However, a small minority of games such as BeamMP may not work well with VPNs and proxies, so you will have to test it on a per-game basis.
:::

### Nginx Setup

Setting this up requires the **Nginx Stream** module, which is not part of a default Nginx build.

#### Install Nginx stream module

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### Nginx stream configuration

You will be adding a new `stream` block to the main `nginx.conf` file where you will define the upstream server and what port it should be accessed by on your proxy.

Simply open up the file using the following command.

```
sudo nano /etc/nginx/nginx.conf
```

Now into this file, copy the following template which adds a new `stream` block. You will have to replace `[your_target_server]` with the server you wish to stream to, including the relevant port (such as `:30120` for FiveM). Similarly, replace the `[your_port_listener]` with the port you wish people to access your content via the proxy server.

```
stream {
    upstream targetServer {
        # Add the target server you aim to reach (e.g. 103.146.43.52:30120)
        server [your_target_server];
    }

    server {
        # Listener port which accepts and bridges connections (e.g. 30120)
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

In essence, Nginx will listen at the specific port for incoming connections and stream everything to the target server you have defined (from your proxy server to your real game server).

With all the input values now adapted to your setup, you can save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

To ensure that everything is correct, especially in regard to syntax, you can use `sudo nginx -t` to see if any issues return. If it returns successful, the last step is to restart Nginx to take the new configuration in effect.

```
systemctl reload nginx.service
```

With the service restarted, you should attempt to connect to your game server via the proxy domain. Upon success, you should be able to connect to the game server, specifically the server you have set as the `targetServer` parameter. If you are facing issues, we recommend checking the logs for troubleshooting using `journalctl -f -u nginx.service` to identify any potential errors.

## SSL Certificate

With your chosen reverse proxy now setup, we highly recommend adding an SSL Certificate to your used domains to ensure that the site transmits data securely via HTTPS. Please check out our [Install Certbot](dedicated-linux-certbot.md) guide, which covers the entire process of requesting and automatically renewing SSL Certificates for your domain(s).

## Conclusion

Congratulations, you have successfully setup a reverse proxy for either a website or your game server (or both :), providing you with various security, reliability and performance improvements. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
