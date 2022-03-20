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

Now create a fxmanifest.lua file in your freshly created "assets" folder

The following text is now entered in this file:

```
fx_version 'cerulean'
games { 'gta5' }

```

Then the fxmanifest.lua can be saved and closed, we no longer need it.

In your assets folder you now create a "stream" folder.

![image](https://user-images.githubusercontent.com/13604413/159168259-1508dc05-118c-4508-a1b3-7d11316b56fd.png)

## Upload Mods

Now open this stream folder, here you can now upload all ytd and yft files by drag & drop:

![image](https://user-images.githubusercontent.com/13604413/159168290-8136adcb-6bb3-4c97-af56-b834bb3311ab.png)

After all the mods have been uploaded, all you have to do is enter your resource in the server.cfg, you will find this in the "server-data" folder of your FiveM server.

You can open this with any text editor, under the "start" entries you can now enter your resource as follows:

```
start assets
```

Finished! After a server restart, the Carmod should now be found on the server!
