---
id: webspace-htaccess-discord
title: "Webspace: Set up Discord forwarding via domain"
description: Information on how to add a Discord forwarding domain to your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Discord forwarding
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Join Discord Server via domain

>It is assumed that an own domain as well as an own webserver/webspace is available. 

To be able to reach a discord server via your own domain, a .htaccess file with a corresponding forwarding rule is required. 

For example, the domain example-example.de/discord should enable a forwarding to the discord server.

### Step 1
Create the subdirectory "discord" on the web space/web server: 

![Bildschirmfoto vom 2022-05-13 05-38-40](https://screensaver01.zap-hosting.com/index.php/s/DpCtmzkcw5Hd6NN/preview)

### Step 2
Creating the ".htaccess" file on the web space/web server:

![Bildschirmfoto vom 2022-05-13 05-39-09](https://screensaver01.zap-hosting.com/index.php/s/2ZLm8J4H5dH5AHC/preview)

![Bildschirmfoto vom 2022-05-13 05-39-58](https://screensaver01.zap-hosting.com/index.php/s/np6f3ctsS7oirkL/preview)

### Step 3
Create the forwarding rule in the ".htaccess" file:

![Bildschirmfoto vom 2022-05-13 05-40-23](https://screensaver01.zap-hosting.com/index.php/s/Z48Rj7xJbAXTFFR/preview)#

Important with the forwarding rule is that the original domain is "exchanged" for another one. 
So in the forwarding rule "example-example.de" has to be replaced by the own domain and "https://discord.gg/A6e4jyg" by the own discord server address. 

```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?beispiel-example.de
RewriteRule (.*) https://discord.gg/A6e4jyg [R=301,L]

```
Values that must be changed: 

```
RewriteEngine On
RewriteCond %{HTTP_HOST} (www\.)?***OWN-DOMAIN***
RewriteRule (.*) ***OWN-DISCORD-DOMAIN*** [R=301,L]
```
After saving, the forwarding is immediately active.

### Step 4
Test forwarding:

If the domain/discord is now accessed, a redirection to Discord should take place.  

Ready ✅
