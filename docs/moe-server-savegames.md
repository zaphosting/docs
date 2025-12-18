---
id: moe-server-savegames
title: "Myth of Empires: Managing Savegames"
description: "Discover how to securely manage and back up your Myth of Empires game saves for seamless gameplay continuity → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver-moe
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, you will explore how to manage your Myth of Empires Gamesaves on your game server, including backing up your local and server savegames as well as uploading it to your server.

<InlineVoucher />

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.

## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. MOE stores these in a folder within the game installation location.

Open up Steam on your system, right-click your **Myth of Empires** game and select **Browse local files** whilst hovering over the **Manage** section.

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigate to the following path:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

In this folder, you will be able to see all of your currently existing local Savegames.

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

At this location, you should see folders, which are your Savegames. Simply right-click on the folder and use the **Download** button to save it locally to your device.

![](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the following path:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Simply drag and drop any of your Savegames into this folder through your FTP Client and it will be uploaded to your server.

## Activating Savegame

Using your Savegame will require you to select it in your server configuration. The simplest way to do this is by heading over the **Settings** section on your game server's webinterface. Use our [Server Configuration](moe-configuration.md) if for more information.

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

In this section, find the **Map Name** parameter in the Basic settings section, and your uploaded world should now be found here. If you do not see it, ensure that you restart your server after uploading.

You have successfully added a Savegame to your game server.

<InlineVoucher />
