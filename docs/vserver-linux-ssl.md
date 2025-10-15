---
id: vserver-linux-ssl
title: "VPS: Create SSL certificate (Let's Encrypt) for Linux server"
description: "Discover how to secure your website with free SSL certificates using Certbot and Let's Encrypt for safe data transmission → Learn more now"
sidebar_label: Install SSL Certificate (Let's Encrypt)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

SSL Certificates are essential parts of the internet, ensuring that data can be safely transmitted between client and host. In this guide, we will explore the process of setting up the open-source [**Certbot**](https://certbot.eff.org/) tool to request free SSL certificates from the **Let's Encrypt** non-profit certificate authority.

<InlineVoucher />

## Preparation

In order to make use of Certbot, you will require a Linux server and a **Domain** that you own. You need to have access to the DNS Settings of the Domain and you **must** create an `A` DNS record poitning at the IP Address of your __Linux server__ for each root domain or sub domain you plan to use.

Certbot also had additional plugins which allows you to easily "one-click" setup a certificate for a domain which works with a variety of web servers such as Nginx or Apache. We recommend using Nginx as it is a highly performant and popular open-source web server. See our [Linux reverse proxy](vserver-linux-proxy.md) guide for help setting this up.

## Installation

Begin by installing the open-source [**Certbot**](https://certbot.eff.org/) package, which you will be using to request free SSL certificates from **Let's Encrypt**.

```
sudo apt install certbot
```

With Certbot now installed, you can proceed to request certificates for your domain(s). Let's Encrypt and Certbot provide a variety of ACME Challenges to verify ownership of the domain.

We highly recommend using the default **HTTP-01** method because it allows for automatic renewal. However, if you are facing issues with this, you can attempt to use the **DNS-01** method as an alternative which is manual and does not support automatic renewals as it relies on verifying using a **TXT** DNS record.

:::tip Utilise Web Server Plugins
For readers using a web server such as Nginx, Apache or their own web server, we recommend moving to the **Web Server Plugins** section below which shows how to utilise additional Certbot plugins for these web servers to utilise a "one-click" install setup as well as request certificates without the need to turn off the web server.
:::

### HTTP-01 Challenge

With Certbot now installed, you can now request certificates for your domain(s). In this example, we will be using standalone mode which means that Certbot will start a temporary web server for you to perform the necessary actions. This means that you must open port 80 in your firewall rules and not have any existing web servers or services running on port 80 to allow the temporary web server to start and allow the challenge to be fetched (hence the `HTTP` in the name of the challenge).

In the following command, you will utilise the `--standalone` parameter to inform Certbot that you wish to use the temporary web server option.

```
# For Root Domains
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# For Sub-Domains
certbot certonly --standalone -d [your_domain]

# Interactive Setup
certbot certonly --standalone
```

Once the command is ran, you may be required to follow a first-time interactive setup which will ask you to input an email address to be used for certificate communication followed by an optional mailing list and the terms & conditions which you must accept.

Certbot will now generate an ACME Challenge and host it using the temporary webserver. The Let's Encrypt servers will then attempt to fetch this from your server and upon success the certificates will be created and saved at the `/etc/letsencrypt/live/[your_domain]` path.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

You can now utilise the SSL Certificates where ever you need simply by providing the local path to the certificates.

### TXT DNS Record

If you are facing difficulties or troubles with verifying your domain through the **HTTP-01** method, as an alternative you can attempt to use the **DNS-01** method which involves creating a **TXT** DNS record with a value provided by Let's Encrypt.

As previously mentioned, this method does **not** support automatic renewal unless you setup your own infrastructure to manage this. Thus, it is highly recommended to use the **HTTP-01** method where possible.

In the following command, you will utilise the `--preferred-challenges` parameter to inform Certbot that you wish to use the `DNS-01` method.

```
# For Root Domains
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# For Sub-Domains
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# Interactive Setup
certbot certonly --preferred-challenges dns-01
```

Once the command is ran, you may be required to follow a first-time interactive setup which will ask you to input an email address to be used for certificate communication followed by an optional mailing list and the terms & conditions which you must accept.

Certbot will now provide you with instructions on creating a **TXT** DNS record with a specific value that you must use. The target will typically be `_acme-challenge.` prefixed to your domain (in this example, it would be `_acme-challenge.zapdocs.example.com`) and the value it should be set to will be provided in the console.

Once you have created the record, press enter to continue. If everything is correct and propegated, the certificates will be created and saved at the `/etc/letsencrypt/live/[your_domain]` path.

:::note
Please be patient as DNS Record changes may take some time to propegate. This should typically occur within minutes, but on rare occurances it could take longer.
:::

You can now utilise the SSL Certificates where ever you need simply by providing the local path to the certificates.

## Web Server Plugins

Certbot contains a range of different additional web server plugins which makes it even simpler to manage certificates as the plugins automatically edit the relevant server blocks for you. To use a plugin, you simply have the add the relevant parameter to your `certbot` command.

Both of these methods utilise the **HTTP-01** challenge and work in essentially the same manner. When one of the plugins is used, Certbot will first search for the relevant server block that includes the requested domain as the `server_name` parameter. Once found, Certbot will generate an ACME Challenge and add a temporary `location /.well-known/acme-challenge/...` location block to the relevant server block config.

The Let's Encrypt servers will then attempt to fetch this from your server and upon success your certificate will be generated and the server block configuration for the selected web server will be automatically edited to adjust to using HTTPS (port 443) and to add paths to the newly generated certificate.

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx Plugin

Before utilising the plugin, ensure that it is installed.

```
sudo apt install python3-certbot-nginx
```

To make use of the Nginx plugin, you should use the `--nginx` parameter within your command as following.

```
# For Root Domains
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# For Sub-Domains
certbot --nginx -d [your_domain]

# Interactive Setup
certbot --nginx
```

:::tip
If you wish to disable automatic "one-click" server block adjustments from Certbot, you can include `certonly` parameter within the command such as `certbot certonly`.
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache Plugin

Before utilising the plugin, ensure that it is installed.

```
sudo apt install python3-certbot-apache
```

To make use of the Nginx plugin, you should use the `--apache` parameter within your command as following.

```
# For Root Domains
certbot --apache -d [your_root_domain] -d www.[your_root_domain]

# For Sub-Domains
certbot --apache -d [your_domain]

# Interactive Setup
certbot --apache
```

:::tip
If you wish to disable automatic "one-click" server block adjustments from Certbot, you can include `certonly` parameter within the command such as `certbot certonly`.
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot Plugin

If you are running your own local web server that doesn't use traditional software, you may wish to use the webroot method to use your own web server without being forced to stop it.

To make use of the Webroot plugin, you should use the `--weboot` parameter within your command as following. You will also need to include a `-w [your_webserver_path]` (short for `--webroot-path`) which is the path to the top-level directory of your web server.

```
# For Root Domains
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# For Sub-Domains
certbot --webroot -w [your_webserver_path] -d [your_domain]

# Interactive Setup
certbot --webroot -w [your_webserver_path]
```

:::tip
One of these most common web root location is `/var/www/html`. You could also do this for web servers such as Nginx or Apache in cases where you wish to utilise the web server, without having automatic server block adjustments like the native plugins provide.
:::

</TabItem>
</Tabs>

## Automatic Renewal

In most cases, Certbot should automatically setup certificate renewal for you through the use of cronjob and/or systemd timer. You can confirm this by running the following command, which utilises the `--dry-run` parameter to test the process.
```
certbot renew --dry-run
```

:::tip
As previously mentioned, the **DNS-01** method does not support automatic renewal via Certbot, unless you setup your own infrastructure to manage this. Thus, it is highly recommended to use the **HTTP-01** method.
:::

This should be successful if everything is as expected. If you wish to view or make changes to the automatic renewal, the command will be found in one of the following locations: `/etc/crontab/`, `/etc/cron.*/*` or via `systemctl list-timers`.

### Manual Cronjob Setup

If for some reason automatic renewal is not setup for you, you can add this yourself via cronjob. Open the crontab menu using `crontab -e`. If this is your first time doing this, you may be prompted to select an editor. Select the first option, which should be `/bin/nano`.

With the file now open in nano, simply add the following line to run the renewal every day at 6am local time.

```
0 6 * * * certbot renew
```

Save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

## Conclusion

You have successfully setup Certbot for your domain(s) through a variety of methods including standalone, web root or via one of the plugins, providing your website with secure data transmission via HTTPS. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
