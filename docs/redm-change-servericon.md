---
id: redm-change-servericon
title: "RedM: Change server icon for the server list"
description: Information on how to change RedM server icon from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Change server icon
---

Are you looking to customise your server and set your own custom icon for your server? This can be done easily! In this guide you will learn how to prepare an image and set it as your new custom server icon.

## Preparation

In order to set a custom server icon for your RedM server, you must first perpare an image file that is in the size of 96x96 pixels and that is in the PNG image format (`.png` file extension).

We recommend using an image manipulation program such as GIMP, or simply use an online website tool to resize and convert your existing image.

Once you have prepared the image which follows those parameters, you are ready to upload it and set it in your server configuration.

## Installation

### Uploading files

The next step is to upload your ready image to your RedM game server, which is done through the use of FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide.

Once you are logged in to FTP, navigate to the folder `gXXXX/redm/server-data/` and upload your server icon file there. Make sure to remember what the file is called.

![image](https://github.com/zaphosting/docs/assets/42719082/066d6d02-5e88-4583-9a20-e7d8146317b7)

### Activation

To ensure that the icon is loaded on server startup, you must now set it in the `server.cfg` file for your server, under the `load_server_icon` parameter.

For example, if you have named your icon `zaphosting96x96`, the set command would be: 
```
# Loading a server icon (96x96 PNG file)
load_server_icon zaphosting96x96
```

You can access your `server.cfg` file either through FTP (as seen above), or via the **Configs** section on your game server's webinterface.

:::info
Please ensure that the name of the image file set in the command exactly matches what you previously uploaded. This includes being case sensitive.
:::

Finally, you can restart your server. Your new server iocn will be loaded next time your server has fully started and will should show up on the server list shortly.

You have successfully set a custom server icon on your RedM game server!