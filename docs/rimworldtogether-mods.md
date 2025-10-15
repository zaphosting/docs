---
id: rimworldtogether-mods
title: "RimWorld Together: Installing mods"
description: "Discover how to enhance your RimWorld Together server with popular mods for seamless online co-op gameplay → Learn more now"
sidebar_label: Install Mods
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## Introduction

RimWorld Together is a highly popular open-source multiplayer mod which is fully ran by the RimWorld Community and it enables online CO-OP gameplay for the game RimWorld. In this guide, we will show you how to install mods onto your RimWorld Together server.

<InlineVoucher />

## Gathering Mods

You can install a wide variety of different RimWorld mods to your RimWorld Together server.

Mods can be categorised into three different types:
- **Enforced Mods**: These are required, meaning the client must have them or else they will not be able to connect.
- **Optional Mods**: These aren't required, with the client being able to connect even if they don't have it.
- **Forbidden Mods**: Mods in here are banned, which means the server will refuse the client's connection immediately.

You will see these three types show up in the next section for uploading mods, as mods are split between three folders.

### Core Files & DLCs

RimWorld Together allows you to easily download Core Files & DLCs. These are treated exactly the same as any other mod.

You can download the Core and DLCs directly from the [RimWorld Together GitHub Repository](https://github.com/RimworldTogether/RimWorld-Together), specifically downloading the **Extras.zip** folder.

### Other Mods

You can find a wide range of RimWorld mods simply by searching the internet. We highly recommend using [RimWorld's Steam Workshop](https://steamcommunity.com/app/294100/workshop/) page when searching for mods due to it's high popularity and thus higher quantity of mods available.

When you subscribe to mods directly through Steam Workshop, they will download via your Steam client into the following directory: `../steamapps/workshop/content/294100`.

:::tip
If you don't own RimWorld on Steam, you can still download Steam Workshop files and mods by using SteamCMD. Begin by downloading [SteamCMD from the official Valve website](https://developer.valvesoftware.com/wiki/SteamCMD) or directly [here](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip). Run **steamcmd.exe** and wait till it finishes the installation process. Once ready, enter `login anonymous` into the console. 

Now you can begin downloading mods by running `workshop_download_item 294100 [workshop_id]`, replacing `[workshop_id]` with the ID of the Steam Workshop mod. You can find the ID of the workshop mod simply by parsing the URL, specifically the end part for example: `/?id=3230195082`.

Any mods you download via SteamCMD, will be put into the following path: `../steamapps/workshop/content/294100`.
:::

Once you have mods downloaded, you can proceed to the following section which covers uploading them to your gameserver.

:::note
There are certain mods that are guaranteed to be incompatible with RimWorld Together. You can view the list of confirmed [incompatible mods here](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md).

On top of this, there may be other mods that don't function as expected when attempting to use with RimWorld Together, so you may have to put in some research and testing to ensure the mods are functional.
:::

## Uploading Mods

Now that you have mods ready, you can begin by connecting to your gameserver via FTP. Read our [Access via FTP](gameserver-ftpaccess.md) guide to learn how to do this.

With your FTP client now ready, navigate to the following directory:
```
../rimworld-together/Mods
```

In this directory, you will be able to see three separate folders for different types of mods. This ties back to the beginning of the previous section where we compare each mod type. If you haven't read this yet, we advise to read back up to ensure that you understand where to place each mod.

With this in mind, you should now access the files for the mods that you have downloaded and one by one upload each mod folder into the appropriate mod category folder on your gameserver.

:::note
The server must be stopped before adding or editing mods, otherwise any edits may become undone.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## Starting Server

Once you have uploaded the plugins that you wanted to have, simply start your server again. The next time your server starts, all the mods that you have added should be added to the server now.

You have successfully installed new mods to your RimWorld Together gameserver!

## Popular Mods

Still looking for the perfect mods for your server? Browse through our carefully curated list of the most popular and highly recommended mods to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={items} />

<InlineVoucher />
