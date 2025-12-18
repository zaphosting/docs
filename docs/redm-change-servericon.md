---
id: redm-change-servericon
title: "RedM:  Change icon for server list"
description: "Discover how to customize your RedM server icon with a perfect 96x96 PNG image for a unique look → Learn more now"
sidebar_label: Change server icon
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Are you looking to customise your server and set your own custom icon for your server? This can be done easily! In this guide you will learn how to prepare an image and set it as your new custom server icon.

<InlineVoucher />

## Preparation
In order to set a custom server icon for your RedM server, you must first prepare an image file that is in the size of 96x96 pixels and that is in the PNG image format (`.png` file extension). We recommend using an image manipulation program such as GIMP, or simply use an online website tool to resize and convert your existing image. Once you have prepared the image which follows those parameters, you are ready to upload it and set it in your server configuration.


## Installation

### Uploading files

The next step is to upload your ready image to your RedM game server, which is done through the use of FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP access](gameserver-ftpaccess.md) guide.

Once you are logged in to FTP, navigate to `gXXXXXX/redm-txadmin/YOUR_FRAMEWORK/` and upload your server icon file there. The CFX default template is used in this example. Upload the file to your own framework folder. Make sure to remember what the file is called.

![img](https://screensaver01.zap-hosting.com/index.php/s/XyxtsR2FbmjD6SM/download)



### Activation

To ensure that the icon is loaded on server startup, you must now set it in the `server.cfg` file for your server, under the `load_server_icon` parameter. For example, if you have named your icon `zaphosting96x96`, the set command would be: 

```
# Loading a server icon (96x96 PNG file)
load_server_icon zaphosting96x96.png
```

:::info
Please ensure that the name of the image file set in the command exactly matches what you previously uploaded. This includes being case sensitive.
:::



## Conclusion

Provided that you have followed all the steps, your new server icon should be displayed the next time you restart the server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
