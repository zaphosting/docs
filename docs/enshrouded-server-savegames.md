---
id: enshrouded-server-savegames
title: "Enshrouded: Managing Enshrouded Savegames"
description: "Discover how to manage and back up your Enshrouded Gamesaves for secure multiplayer gaming → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver-enshrouded
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, we will explore how to manage your Enshrouded Gamesaves on your game server, including backing up your local and server savegames as well as uploading it to your server.

<InlineVoucher />

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.


## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. By default, Enshrouded uses Steam Cloud to automatically back up your Savegame. In order to access this, you will have to go into your steam userdata folder to access the game data. Head over to the following path:
```
../Steam/userdata/[your_steamid]/1203620/remote
```

:::tip
In regular installations, the Steam folder will be on your OS drive, at the path: `C://Program Files x86/Steam`. Keep in mind it is possible that this may be different for you if you have installed Steam elsewhere.
:::

Once you reach this folder, you will be able to see a characters file alongside all of your local Savegames in one place. 

![](https://screensaver01.zap-hosting.com/index.php/s/dyydLNzQt7ZWRPx/preview)

:::note
If you are explicitly **not** using Steam Cloud to save, you will be able to find your save folder in the following directory: `C://Users/[youruser]/Saved Games/Enshrouded`.
:::

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../enshrouded/savegame/
```

At this location, you should see a file with random characters which is your Savegame. Simply right-click on the file and use the **Download** button to save it locally to your device.

![](https://screensaver01.zap-hosting.com/index.php/s/wTcodeKXYq3RBfY/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the following path:
```
../enshrouded/savegame/
```

![](https://screensaver01.zap-hosting.com/index.php/s/gJW8wSapi4Bo2gw/preview)

Simply drag and drop any of your Savegames into this folder through your FTP Client and it will be uploaded to your server.

## Activating Savegame

Using your Savegame is very easy. Simply connect to your server, and during the game setup screen, you will be able to choose a specific Savegame that you wish to use. The save's name, level and last played date will be displayed below each save to help you identify which you wish to select.

You have successfully added a Savegame to your game server.

<InlineVoucher />
