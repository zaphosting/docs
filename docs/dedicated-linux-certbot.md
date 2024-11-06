---
id: dedicated-linux-certbot
title: "Dedicated Server: Installation of Certbot"
description: Information on how to setup Certbot on your Linux Dedicated Server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Certbot
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

SSL Certificates are essential parts of the internet, ensuring that data can be safely transmitted between client and host. In this guide, we will explore the process of setting up the open-source [**Certbot**](https://certbot.eff.org/) tool to request free SSL certificates from the **Let's Encrypt** non-profit certificate authority.

<InlineVoucher />

## Preparation

You will need to have a Linux VPS prepared, with a web server such as Nginx or Apache installed and setup. In our example, we will be using Nginx as it is a highly performant and popular open-source web server. See our [Linux Proxy](vserver-linux-proxy.md) guide for help setting this up.

In order to make use of Certbot, you will need a **Domain** that you own. For each subdomain that you plan to use, you should create an `A` DNS record (for example `zapdocs.example.com`), pointing it at the IP Address of your __Linux VPS__. This is what users will use to access your website or game server.

## Installation

With your Nginx web server and domain ready, you can proceed with installing Certbot to your server.

:::important Disable Permanent DDoS Protection Mode
Please ensure that the DDoS protection on your VPS is set to **Sentry Mode** via the **DDoS Manager** section on your product's web interface. Do not use Permanent Mode otherwise you will likely face issues with completing ACME Challenges from Certbot as genuine requests become blocked.
:::

### Setting up Certbot

Begin by installing the open-source [**Certbot**](https://certbot.eff.org/) package, which you will be using to request free SSL certificates from **Let's Encrypt**.

```
sudo apt install certbot python3-certbot-nginx
```

With Certbot now installed, you can proceed to request certificates for your domain(s). We recommend using the default **ACME Challenge** method, which is a one-click setup and automatically verifies the domain and edits your Nginx server block for you. However, if you are facing issues with this, you can attempt to use the **TXT** DNS record method as an alternative which require more manual setup.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="acme" label="ACME Challenge (recommended)" default>

#### Verification via ACME Challenge

With Certbot now installed, you can now request certificates for your domain using the following command. If you are using a root domain (e.g. `example.com`) we recommend you request a certificate both for both the `www.` and non-www versions. In our example, we will be requesting a certificate for the `zapdocs.example.com` subdomain.

```
# For Root Domains
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# For Sub-Domains
certbot --nginx -d [your_domain]
```

Once the command is ran, follow the interactive setup which will ask you to input an email address to be used for certificate communication followed by an optional mailing list and the terms & conditions which you must accept.

Certbot should now create an ACME Challenge and automatically verify the domain(s) requested. Upon success, Certbot will return certificates for your requested domain(s) and automatically edit your Nginx server block to accept port 443 (HTTPS) and add paths to your certificates.

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

</TabItem>

<TabItem value="txtrecord" label="TXT DNS Record">

#### Verification via TXT DNS Record

If you are facing difficulties or troubles with verifying your domain through the ACME Challenge (default) method, you can instead attempt to use a DNS challenge, where you will be required to create a **TXT** DNS record with the value that Let's Encrypt provides you.

By using this method, you will have to manually edit your server block with the certificate paths, thus we recommend using the ACME method as the main method which does this automatically by using the `--nginx` parameter addon. Similarly, you cannot easily automatically renew the certificates using this method.

Simply run the following command, replacing `[your_domain]` with the domain you are using.

```
certbot certonly -d [your_domain] --preferred-challenges dns-01 --manual -m [your_domain]
```

After command execution, you will be required to set up a new **TXT** record with the value that is returned in console (which should be `_acme-challenge.` prefixed to your domain). Using our example, we would create a **TXT** record for `_acme-challenge.zapdocs.example.com` with the value provided.

Once you have created the record, press enter to continue. If everything is correct and propagated, the certificates will be created and saved at the `/etc/letsencrypt/live/[your_domain]` path.

Now you will have to return back to your server block file. You can do this by running the `sudo nano /etc/nginx/sites-available/[your_domain]` command.

In the file, you should either replace port 80 (HTTP) listeners with port 443 (HTTPS) or add it separately, depending on whether you wish to keep the content accessible via HTTP as well.

```
listen 443 ssl;
listen [::]:443 ssl;
```

Most importantly, you will have to manually define the paths to the SSL Certificate that you have created. Below the `server_name` parameter, add the following lines replacing `[your_domain]` with the domain you have been using.

```
server_name
...
# SSL Certificates
ssl_certificate /etc/letsencrypt/live/[your_domain]/fullchain.pem;
ssl_certificate_key /etc/letsencrypt/live/[your_domain]/privkey.pem;
```

Save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`.

To ensure that everything is correct, especially in regard to syntax, you can use `sudo nginx -t` to see if any issues return. If it returns successful, the last step is to restart Nginx to take the new configuration in effect.

```
systemctl reload nginx.service
```

</TabItem>
</Tabs>

You have successfully setup an SSL Certificate for your domain(s). With Nginx restarted, you should now attempt to access the domain you have used via HTTPS to ensure that everything is functional. If you are facing issues, we recommend checking the logs for troubleshooting using `journalctl -f -u nginx.service` to identify any potential errors.

## Automatic Renewal

Lastly, we recommend setting up a cronjob to automatically renew the SSL certificates in regular intervals, once again using Certbot. This can be done easy via the crontab menu using: `crontab -e`

If this is your first time using this, you may be prompted to select an editor. We recommend selecting the first option, which should be `/bin/nano`.

With the file now open in nano, simply add the following line to run the renewal every day at 6am local time.

```
0 6 * * * certbot renew
```

Save the file and quit nano by using `CTRL + X`, followed by `Y` to confirm and lastly `ENTER`. You have successfully setup autorenewal using Certbot for your SSL Certificates.

## Conclusion

Congratulations, you have successfully setup Certbot for your domain(s) using Nginx, providing your website with secure data transmission via HTTPS. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂