---
id: valheim-plugins-bepinex
title: "Valheim: Installing plugins on server (BepInEx)"
description: "Discover how to enhance your Valheim gameplay with BepInEx plugins and unlock new modding possibilities → Learn more now"
sidebar_label: Install plugins (BepInEx)
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## Introduction
BepInEx is a highly popular open-source plugin and modding framework which enables players to add mods to a range of games that traditionally do not support official modding. In this guide, we will show how you can install plugins through BepInEx on Valheim.

<InlineVoucher />

## BepInEx Game Version

To use **BepInEx** compatible plugins in Valheim, you first need to install the **Valheim Plus** game version onto your server. We also have a standalone **Valheim BepInEx** game version, however we recommend installing Valheim Plus as it comes bundled with everything. This can be done easily using our gameserver game switcher functionality, learn more about this by reading our [Game Change](gameserver-gameswitch.md) guide.

:::info
Valheim Plus must also be locally installed on your PC. Here you can find the download for Valheim Plus: [Valheim Plus Download](https://www.nexusmods.com/valheim/mods/4).
:::

## Uploading Plugins

You should begin by finding mods that are compatible with BepInEx and that you wish to add to your server. You can usually see information about the compatibility of the plugin on the respective download page.

:::important
Plugins used must be **BepInEx** compatible, otherwise they will not work!
:::

Once you have a mod ready, begin by connecting to your gameserver via FTP. Read our [Access via FTP](gameserver-ftpaccess.md) to learn how to do this.

With your FTP client now ready, navigate to the following directory:
```
../valheim-linux-plus/BepInEx/plugins
```

Into this folder you should drop in the mods that you have downloaded. Typically, these will be `.dll` extension files.

:::note
The server must be stopped before adding or editing mods, otherwise any edits may become undone.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## Starting Server

Once you have uploaded the plugins that you wanted to have, simply start your server again.

:::info
Some plugins may require being installed client-side on your PC too. Please refer to the information on the plugin's website to see if this is necessary or not.
:::

You have successfully installed new BepInEx plugins to your Valheim gameserver!

## Popular Plugins

Still looking for the perfect plugins for your server?

 Browse through our carefully curated list of the most popular and highly recommended plugins to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />

<InlineVoucher />
