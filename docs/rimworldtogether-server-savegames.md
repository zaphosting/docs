---
id: rimworldtogether-server-savegames
title: "Rimworld Together: Managing Rimworld Together Savegames"
description: "Discover how to manage and back up your Rimworld Together savegames for seamless multiplayer gameplay → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, we will explore how to manage your Rimworld Together Gamesaves on your game server, including backing up your local and server savegames as well as uploading it to your server.

:::info
Keep in mind that moving an existing vanilla game to a Rimworld Together server with mods will likely result in gameplay issues. This especially applies when moving worlds between servers with different mods.
:::

<InlineVoucher />

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.


## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. These can be found within your Windows LocalLow AppData, specifically in the following path:
```
../AppData/LocalLow/Ludeon Studios/RimWorld by Ludeon Studios/Saves
```

:::tip
You can easily access this path directly by pressing `CTRL` + `R` at the same time and searching for the following path in the run dialog: `%userprofile%/appdata/locallow/Ludeon Studios/RimWorld by Ludeon Studios/Saves`. Simply press **OK** and you will be taken to the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/LZ6Ljo2DfBoH45s/preview)
:::

At this location, you will be able to see all of your local Savegames.

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../rimworld-together/Saves
```

At this location, you should be able to see folders which are each a Savegame. Simply right-click on the folder and use the **Download** button to save it locally to your device.

![](https://screensaver01.zap-hosting.com/index.php/s/yjYXnDSHs7g5eCH/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the following path:
```
../rimworld-together/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/s4zakSdKniMdGmT/preview)

Simply drag and drop any of your Savegames into this folder through your FTP Client and it will be uploaded to your server.

:::info
As mentioned at the beginning of the guide, moving worlds between servers with different mods will likely cause gameplay issues.
:::

<InlineVoucher />
