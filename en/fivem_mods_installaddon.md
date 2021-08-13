---
id: fivem_mods_installaddon
title: FiveM: Install Addon Carmods on Server
description: Information on how to install Addon Carmods on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Addon Carmods
---

## Connect with FTP

First you should connect to your server via FTP, you can use our [FTP-Tutorial](gameserver_ftpaccess.md).

## Preparation

For this tutorial we will use the [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest) tool, this simplifies the process a lot, for this we download the "NConvert.zip" and "rpf2fivem.zip" folders from the "Releases" section:

![](https://screensaver01.zap-hosting.com/index.php/s/HeFZebkMZQAK4Dw/preview)

Now we first unpack rpf2fivem into an empty folder:

![](https://screensaver01.zap-hosting.com/index.php/s/fNdbWdnDr44KofT/preview)

Then we open the NConvert zip file and copy the "NConvert" folder into the same folder:

![](https://screensaver01.zap-hosting.com/index.php/s/cafFciLEeejdszm/preview)


Now we can open the `rpf2fivem.exe`!


## Downloading Mods

To install mods via rpf2fivem we have to add direct links in it, e.g. from gta5-mods.com, here we just choose the carmod we want to have and click on "Download".

Now we just have to right-click on the download button and press "Copy link address", which we then paste into the top left of rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/a6qjRGsg2QT89A6/preview)


Here we can type in our own resource name and press "Add to queue":

![](https://screensaver01.zap-hosting.com/index.php/s/s9d25qzttRQpWLD/preview)


If further mods are to be downloaded, they can simply be added in the same way, several carmods can be installed at the same time:

## Convert Mods

Now that we have a list of mods, we can simply press the "Start" button.

> Note: the 'compress/downsize textures' tick should always be set to prevent Carmods from having texture errors in FiveM.

![](https://screensaver01.zap-hosting.com/index.php/s/G6ieBPeEesXdr52/preview)

Now the carmods are downloaded and prepared for FiveM.

## Upload resources

After rpf2fivem is finished, the carmods can be found in the "rpf2fivem" folder:

![](https://screensaver01.zap-hosting.com/index.php/s/GiQKz2LBjboKycR/preview)

We can now simply upload these via [FTP](fivem_installresources.md), a `servercfg.txt` is also created in the rpf2fivem folder which contains the entries to enter the carmods directly into the server.cfg, we can simply copy these entries into the server.cfg.


Done! The Carmods are now installed on your server, after a restart of the server they can be used.