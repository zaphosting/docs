---
id: vrising-plugins-bepinex
title: "V Rising: Installing plugins on server (BepInEx)"
description: "Discover how to enhance your V Rising gameplay with BepInEx mods and improve server customization → Learn more now"
sidebar_label: Install plugins (BepInEx)
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning Archived Guide
This document has been archived. Documents are archived if they are no longer relevant, incorrect or up to date. It has been archived for the following reasons:

**Reason**: The product V Rising with BepInEx is no longer functional and has therefore been removed from the shop. 
::::

## Introduction
BepInEx is a highly popular open-source plugin and modding framework which enables players to add mods to a range of games that traditionally do not support official modding. In this guide, we will show how you can install plugins through BepInEx on V Rising.
<InlineVoucher />

## BepInEx Game Version

To use **BepInEx** compatible plugins in V Rising, you first need to install the **V Rising BepInEx** game version onto your server. This can be done easily using our gameserver game switcher functionality, learn more about this by reading our [Game Change](gameserver-gameswitch.md) guide.

## Uploading Plugins

You should begin by finding mods that are compatible with BepInEx and that you wish to add to your server. You can usually see information about the compatibility of the plugin on the respective download page.

:::important
Plugins used must be **BepInEx** compatible, otherwise they will not work!
:::

Once you have a mod ready, begin by connecting to your gameserver via FTP. Read our [Access via FTP](gameserver-ftpaccess.md) guide to learn how to do this.

With your FTP client now ready, navigate to the following directory:
```
../vrising/BepInEx/plugins
```

Into this folder you should drop in the mods that you have downloaded. Typically, these will be `.dll` extension files. In this example, we upload a framework mod which is useful for creating commands.

:::note
The server must be stopped before adding or editing mods, otherwise any edits may become undone.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## Starting Server

Once you have uploaded the plugins that you wanted to have, simply start your server again.

:::info
Some plugins may require being installed client-side on your PC too. Please refer to the information on the plugin's website to see if this is necessary or not.
:::

You have successfully installed new BepInEx plugins to your V Rising gameserver!

<InlineVoucher />
