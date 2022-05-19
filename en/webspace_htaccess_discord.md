---
id: webspace_htaccess_discord
title: Webspace: Set up Discord forwarding via domain
description: Information on how to add a Discord forwarding domain to your webspace from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Discord forwarding via domain
---

## Join Discord Server via domain

>It is assumed that an own domain as well as an own webserver/webspace is available. 

To be able to reach a discord server via your own domain, a .htaccess file with a corresponding forwarding rule is required. 

For example, the domain example-example.de/discord should enable a forwarding to the discord server.

### Step 1️⃣
Create the subdirectory "discord" on the web space/web server: 

![Bildschirmfoto vom 2022-05-13 05-38-40](https://user-images.githubusercontent.com/61953937/168207049-be0c345b-d28d-4b1e-ada5-454c5cf26e98.png)

### Step 2️⃣
Creating the ".htaccess" file on the web space/web server:

![Bildschirmfoto vom 2022-05-13 05-39-09](https://user-images.githubusercontent.com/61953937/168207066-331ffbe9-edb2-448f-8182-4235df7bae80.png)

![Bildschirmfoto vom 2022-05-13 05-39-58](https://user-images.githubusercontent.com/61953937/168207072-e2a0cb99-6e9d-48ea-8489-b93b9c75b57b.png)

### Step 3️⃣
Create the forwarding rule in the ".htaccess" file:

![Bildschirmfoto vom 2022-05-13 05-40-23](https://user-images.githubusercontent.com/61953937/168207079-f08308b9-9a04-4e8a-a3d5-bedce79936e8.png)#

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
