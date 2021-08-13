---
id: fivem_mods_installreplace
title: FiveM: Install Replacement Carmods on server
description: Information on how to install Replacement Carmods on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Replace Carmods
---

## Connect with FTP
First you should connect to your server via FTP, you can use our [FTP-Tutorial](gameserver_ftpaccess.md).

## Preperation

Now create a folder for your mods in the "resources" folder.

> You can name the folder anything as long as it does not contain any special characters. In our example it is "assets".

![](https://screensaver01.zap-hosting.com/index.php/s/WmLim2HXFtwkMHn/preview)

Now create a fxmanifest.lua file in your freshly created "assets" folder

The following text is now entered in this file:

```
fx_version 'cerulean'
```

Then the fxmanifest.lua can be saved and closed, we no longer need it.

In your assets folder you now create a "stream" folder.

![](https://screensaver01.zap-hosting.com/index.php/s/jkLQoW7Qp8a25pp/preview)

## Upload Mods

Now open this stream folder, here you can now upload all ytd and yft files by drag & drop:

![](https://screensaver01.zap-hosting.com/index.php/s/kys9J3d3tC7nsyT/preview)

After all the mods have been uploaded, all you have to do is enter your resource in the server.cfg, you will find this in the "server-data" folder of your FiveM server.

![](https://screensaver01.zap-hosting.com/index.php/s/6LjYGCLFyLJBaS5/preview)

You can open this with any text editor, under the "start" entries you can now enter your resource as follows:

![](https://screensaver01.zap-hosting.com/index.php/s/gaxNFGXXRopkHS5/preview)

Finished! After a server restart, the Carmod should now be found on the server!
