---
id: hl1-fastdl
title: "Half-Life 1: Setting up FastDL"
description: "Discover how to optimize game content delivery with FastDL using ZAP-Hosting to improve player download speeds and server performance → Learn more now"
sidebar_label: FastDL
services:
  - gameserver-hl1
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction

FastDL (Fast Download) is a method for delivering custom content such as maps, sounds, or models via an external web server instead of the game server itself. This improves download speeds for players and reduces load on the server.

To use FastDL, you need access to a public HTTP web server. A great option for this is a **ZAP-Hosting Webspace package**, which is well-suited for delivering game content. This guide explains how to set up FastDL using ZAP webspace.

<InlineVoucher />

## Requirements

You will need an active Half-Life 1 server hosted by ZAP-Hosting and an additional webspace package. FTP access or access to the File Manager must be available for both the game server and the webspace.

On the game side, the files you want to distribute (such as `.bsp` maps, sound files, or models) must already be organized correctly. The same structure will then be required on the webspace to allow successful FastDL delivery.

## Preparing the Webspace

To manage and upload your FastDL files, we recommend using the **File Manager** provided in the ZAP webspace interface. It can be accessed directly via the web panel under **Webspace > File Manager**.

![img](https://screensaver01.zap-hosting.com/index.php/s/dptRwGTgL6bHXrE/preview)

In the root directory of your webspace, create a folder named `fastdl`. Inside this folder, create subdirectories like `maps`, `sound`, or `models` depending on the content you plan to serve. The folder structure must exactly mirror the one used by your Half-Life 1 server.

![img](https://screensaver01.zap-hosting.com/index.php/s/beCCJPFT5si3wRZ/preview)

Before uploading your files, make sure they are **compressed using the `.bz2` format** (bzip2). Most Source-based engines require files to be delivered in this format. For example, a map file `custom_map.bsp` should be uploaded as `custom_map.bsp.bz2`.

:::info Compressing with 7-Zip
To prepare your files for FastDL, you can use tools like **7-Zip** to compress them into the `.bz2` format. Simply right-click the file, choose **7-Zip > Add to archive...**, select `bzip2` as the archive format, and confirm.
:::

After uploading the compressed files into the appropriate folders, make sure that **all directories and files have correct read permissions** so they can be accessed publicly. The File Manager allows you to adjust folder and file permissions.

Once your files are uploaded and permission-checked, the FastDL content will be available via the following public URL:

```
https://[your-domain-name].zap.cloud/fastdl/
```

You can test this by opening the URL in your browser and checking if the files are accessible.

## Configure the Game Server

In the ZAP interface under game server administration, open the `server.cfg` file via the **Configs** page and insert the following lines:

```cfg
sv_downloadurl "https://[your-domain-name].zap.cloud/fastdl/"
sv_allowdownload 1
sv_allowupload 0
```

Ensure that the FastDL URL exactly matches the structure used on your webspace. After saving the file, restart your game server to apply the configuration.

## Conclusion

FastDL can be set up quickly and reliably using your own ZAP webspace. This allows for fast and efficient delivery of custom content and improves the experience for all players using your Half-Life 1 server.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
