---
id: webspace_htaccess_discord
title: Discord forwarding via domain
sidebar_label: Discord forwarding via domain
---

## Join Discord Server via domain

>It is assumed that an own domain as well as an own webserver/webspace is available. 

To be able to reach a discord server via your own domain, a .htaccess file with a corresponding forwarding rule is required. 

For example, the domain example-example.de/discord should enable a forwarding to the discord server.

### Step 1️⃣
Create the subdirectory "discord" on the web space/web server: 

![](https://screensaver01.zap-hosting.com/index.php/s/zqQ7pbXdBAbiZt4/preview)

### Step 2️⃣
Creating the ".htaccess" file on the web space/web server:

![](https://screensaver01.zap-hosting.com/index.php/s/JXN57oAZTeCTe8j/preview)

### Step 3️⃣
Create the forwarding rule in the ".htaccess" file:

![](https://screensaver01.zap-hosting.com/index.php/s/Ame6nxmBdgNNM2d/preview)

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

### Step 4️⃣
Test forwarding:

If the domain/discord is now accessed, a redirection to Discord should take place.  

Ready ✅
