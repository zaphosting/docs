---
id: valheim_plugins_bepinex
title: Valheim: Installing plugins on server (BepInEx)
description: Information on how to install plugins on your Valheim server using BepInEx (Valheim Plus & BepInEx Server) from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install plugins (BepInEx)
---

## 🔧 Using plugins with BepInEx

To use **BepInEx*** compatible plugins in Valheim you first need to install **Valheim Plus** on your server. 
You can make this change for free, here you can find a tutorial: [Game Change](https://zap-hosting.com/guides/docs/en/gameserver_gameswitch/).

> ATTENTION: Valheim Plus must also be installed on your PC. Here you can find the download for Valheim Plus: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).


## 🖥️ Installing plugins on your server

**IMPORTANT:** The plugins used here must be **BepInEx** compatible. Plugins for **uMod** for example will **not** work there! 
> You can usually see information about the compatibility when downloading a plugin.

To install mods on your Valheim Plus server you first have to connect to it via **FTP**, how to do that you can read here: [FTP file access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/).
There you navigate to the following directory: **/gxxxxxx/valheim-linux-plus/BepInEx/plugins**
In this directory you can upload your plugins, these consist mostly of one **.dll** file or of several files.

> ATTENTION: Before uploading plugins your server must be **shutdown**!

In our example we upload an anticheat to the server which consists of three files: 

![](https://screensaver01.zap-hosting.com/index.php/s/9GQTJ65Wp2JznZz/preview)


## ⬆️ Start your server

After you uploaded your plugins as described you can start your server.

> Make sure that some plugins have to be installed on the client side of your PC. This information can be found in the source of the plugin.


**Have fun with your Valheim server! :)**
