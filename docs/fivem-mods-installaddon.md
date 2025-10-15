---
id: fivem-mods-installaddon
title: "FiveM: Install Addon Carmods on Server"
description: "Discover how to easily download and convert car mods for FiveM to enhance your game experience with step-by-step guidance → Learn more now"
sidebar_label: Install Addon Carmods
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect with FTP

First you should connect to your server via FTP, you can use our [Access via FTP](gameserver-ftpaccess.md).

## Preparation

For this tutorial we will use the [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest) tool, this simplifies the process a lot, for this we download the "NConvert.zip" and "rpf2fivem.zip" folders from the "Releases" section:

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

Now we first unpack rpf2fivem into an empty folder:

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

Then we open the NConvert zip file and copy the "NConvert" folder into the same folder:

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)


Now we can open the `rpf2fivem.exe`!


## Downloading Mods

To install mods via rpf2fivem we have to add direct links in it, e.g. from gta5-mods.com, here we just choose the carmod we want to have and click on "Download".

Now we just have to right-click on the download button and press "Copy link address", which we then paste into the top left of rpf2fivem:

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)


Here we can type in our own resource name and press "Add to queue".

If further mods are to be downloaded, they can simply be added in the same way, several carmods can be installed at the same time:

## Convert Mods

Now that we have a list of mods, we can simply press the "Start" button.

:::info
Note: the 'compress/downsize textures' tick should always be set to prevent Carmods from having texture errors in FiveM.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

Now the carmods are downloaded and prepared for FiveM.

## Upload resources

After rpf2fivem is finished, the carmods can be found in the "rpf2fivem" folder:

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

We can now simply upload these via [Install resources](fivem-installresources.md), a `servercfg.txt` is also created in the rpf2fivem folder which contains the entries to enter the carmods directly into the server.cfg, we can simply copy these entries into the server.cfg.


Done! The Carmods are now installed on your server, after a restart of the server they can be used.

<InlineVoucher />
