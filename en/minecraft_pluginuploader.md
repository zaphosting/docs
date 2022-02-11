---
id: minecraft_pluginuploader
title: Minecraft Server: Using ZAP-Hosting Plugin Uploader
description: Information on how to use the plugin uploader to upload plugins to your Minecraft server from ZAP-Hosting via the web interface - ZAP-Hosting.com documentation
sidebar_label: Plugin Uploader
---

Click here to get to our Minecraft servers: [Minecraft server hosting](https://zap-hosting.com/en/minecraft-server-hosting/)

## 🕹 Plugin Uploader

Click your Minecraft server on the server overview. Then select the Plugins tab, which is located in the Settings sub-item.

> Make sure your current game is Spigot or Bukkit. The plugin uploader is only available there.

![](https://screensaver01.zap-hosting.com/index.php/s/85EQDC4yFMRDP9J/preview)

## 🔼 Install/Upload Plugins

There are two different ways you can install a plugin on your Minecraft server.

- You can install your plugin from one of our pre-made selections (if available)
- You can upload your own plugins using drag'n drop

### 📚 Plugins from List

Select your desired plug-in from the "All plugins" list and click on the green "Install" button. The installation may take a moment depending on the size of the plug-in.

![](https://screensaver01.zap-hosting.com/index.php/s/R5nmsdPRsyzfERe/preview)

###  Upload your own Plugin

Drag the desired plugin .jar file into the box marked on the picture. It is also possible to drag and install several plugins into this area at the same time.

![](https://screensaver01.zap-hosting.com/index.php/s/6ws2Nn3B8tLDBEC/preview)

If you have dragged the plugin into the upload field, it takes a moment until the plugin is on the server.

![](https://screensaver01.zap-hosting.com/index.php/s/QTFFSNRDcWyHyjk/preview)

In order to be able to use the plugin you have to reload your server with the command `/rl` or `/reload` via your game server console (or restart the entire server).

> In rare cases the server has to be restarted so that the plugin runs smoothly.


## 🚮 Uninstall Plugin

![](https://screensaver01.zap-hosting.com/index.php/s/XHHeAwj5HWyREH6/preview)

To uninstall a plugin, click on the red bin next to the entry.

## 🔴 Deactivate Plugin

To do this, click on the green button with the lock behind an installed plugin. If the button changes its color from green to orange, you have deactivated your plugin. The other way around, you activate your plugin again. The plugin file is still on the server after deactivation, but is no longer loaded by the game server.

> After you have deactivated your plugin, you have to reload the server once for the changes to take effect. Use one of the following two commands in your game server console or in-game: `/rl` or `/reload`

![](https://screensaver01.zap-hosting.com/index.php/s/PzrodHsLynxCxL8/preview)

## 🆘 Common Problems

**My plug-in cannot be uploaded via the "Drag'n Drop" area.**

Suggested solutions:

- Your plug-in may be larger than 5 MB and therefore unsuitable for uploading via the web interface. Alternatively, just use an FTP client.
- The FTP rights may cause problems. To fix the problem, click on the FTP browser tab in the web interface and click the Reset FTP rights button. You should then be able to upload plugins again.
- Your plugin may be invalid and does not contain a valid plugin.yml. In this case, please use an FTP client as an alternative.
- Sometimes the list may not be reloaded. Simply load the page via. F5, etc. new.

### My plug-in can no longer be deleted.

> In that case, contact support.

### My plugin cannot be deactivated / activated.

Suggested solutions:

- Is your plugin still on the server? Check this by clicking the Refresh button at the edge of the table. This will re-synchronize the displayed list with the plugins on the server. Now only the plugins that are actually on the server are displayed.

### Plugins are missing from the All Plugins section.

Suggested solutions:

- There may not be a current version of this plugin for the currently installed version of your game server. To request a plugin, use the blue button Plugin missing ?.

![](https://screensaver01.zap-hosting.com/index.php/s/cJ6H7XfgAXEaZLW/preview)

### The Uninstall/Install in the pre-made list does not seem to work.

Suggested solutions:

- Reload the page here to solve the problem.

### A plug-in is displayed that is not on the server at all.

Suggested solutions:

- In that case, you can simply remove the plugin entry by clicking the uninstall button.
- Alternatively, you can try clicking the Synchronize button.
