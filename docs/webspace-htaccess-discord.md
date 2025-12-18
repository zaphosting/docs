---
id: webspace-htaccess-discord
title: "Webspace: Set up Discord forwarding via domain"
description: "Discover how to redirect your domain to a specific URL using web server configuration for seamless forwarding → Learn more now"
sidebar_label: Discord forwarding
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Domains cannot be forwarded directly to a specific URL by default, just to the main address of a server or website. However, in order to point to a specific URL, you can set up a redirect via a web server in combination with an `.htaccess` file. This automatically redirects the domain call to the desired target URL.

<InlineVoucher />



## Preparation

In order to realize such a forwarding, it is assumed that you already have your own domain (TLD) and a webspace package. Connect the domain to your webspace package. If you don't know exactly how to do this, you can use our easy-to-use [EasyDNS](domain-easydns.md) option. 

:::warning DNS changes take time

Changes to the DNS settings can take up to **24 hours** to be fully adopted and effective worldwide. In some cases, the implementation may be faster, but delays are normal due to caching on different servers. 

:::

As soon as the domain successfully points to the Webspace and can be accessed, you can start configuring the Discord forwarding. 



## Configuration

An `.htaccess` file must be created and configured to configure the forwarding. To do this, navigate to the file manager in the Plesk management for your domain. Once there, click on the plus symbol to create a new folder called `discord`.

![img](https://screensaver01.zap-hosting.com/index.php/s/ZAJAd7EXp7yJE64/download)

Navigate to the `discord` folder and create a new file there with the name `.htaccess`. Now open the newly created file with the text editor. The rule for forwarding will now be added. Copy and paste the following content:
```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]
```

In order for the rule and redirection to work for your domain, you must change the name of the domain. To do this, replace the example domain `example-example.de` domain with your own and save the file. Also replace the Discord Invite URL with the one from your server. 

You should now be able to call the redirect with your domain and the defined discord path. The structure would look like this in our example: `beispiel-example.de/discord`.

## Conclusion

Provided you have followed all the steps, you should have successfully configured the domain forwarding to your Discord server.  For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
