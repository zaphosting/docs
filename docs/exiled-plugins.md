---
id: exiled-plugins
title: Installing plugins on your server
description: Information on how to install plugins on your EXILED  server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Plugins Install
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Plugins installation

With plugins you have the possibility to customize your server even more. Below we will explain where you can find the most popular server plugins and how to set them up. 

### Preparation

First of all, you need to download the plugins that will be installed on the server. A large selection of EXILED Plugins can be found on their own github (https://github.com/Exiled-Team) and once selected the plugin repo, a releases section will appear on the side to which you will be brought to a download page, instructions on how to do this will be shown below.

### Downloading a plugin
Plugins can be downloaded from many sources for your server. However these are only recognised as the safest options. Please be careful with which plugins you install onto your game server - Always check the source of the plugin by looking for its developers and what the plugin actually does.

## Download
To download a plugin via the github you will need to head to the [EXILED Github page](https://github.com/Exiled-Team) as shown below and select a plugin-repo.
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)

Once you have found the plugin-repo you wish to download a releases section will appear on the right side.
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)

Once you selected the release section it will provide a **.dll** resource, once clicking on this a download will begin.
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)

And that's it you can now follow the Installation part of this document to learn how to install the **.dll** onto your server.

### Installation

Once the desired plugins have been downloaded, the actual installation of the plugins can be started. The setup of the plugins is done via FTP. You need a FTP client to be able to upload files to your server. If you don't know yet what FTP is and how it works, then you should have a look at the following guide: [Access via FTP](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

You can find the **Plugins** folder under the ``/gXXXXXX/.config/EXILED`` directory. There you can upload your selected plugins into the directory. This could look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

Nothing more needs to be done. This already completes the installation. Afterwards you can check in the live console if the plugin was compiled and loaded successfully. The output should look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)
