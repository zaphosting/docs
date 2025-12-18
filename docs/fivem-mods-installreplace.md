---
id: fivem-mods-installreplace
title: "FiveM: Install Replacement Carmods on server"
description: "Discover how to set up and upload mods to your FiveM server for custom gameplay experiences → Learn more now"
sidebar_label: Install Replace Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect with FTP
First you should connect to your server via FTP, you can use our [Access via FTP](gameserver-ftpaccess.md) guide for this.

## Preparation

Now create a folder for your mods in the "resources" folder.

:::info
You can name the folder anything as long as it does not contain any special characters. In our example it is "assets".
:::

Now create a fxmanifest.lua file in your freshly created "assets" folder

The following text is now entered in this file:

```
fx_version 'cerulean'
games { 'gta5' }

```

Then the fxmanifest.lua can be saved and closed, we no longer need it.

In your assets folder you now create a "stream" folder.

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## Upload Mods

Now open this stream folder, here you can now upload all ytd and yft files by drag & drop:

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

After all the mods have been uploaded, all you have to do is enter your resource in the server.cfg, you will find this in the "server-data" folder of your FiveM server.

You can open this with any text editor, under the "start" entries you can now enter your resource as follows:

```
start assets
```

Finished! After a server restart, the Carmod should now be found on the server!

<InlineVoucher />
