---
id: satisfactory-savegame
title: "Satisfactory: Manage Savegames"
description: "Discover how to manage and back up your Satisfactory game saves locally and on your server for secure gameplay → Learn more now"
sidebar_label: Managing Savegames
services:
  - gameserver-satisfactory
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, we will explore how to manage your Satisfactory game saves on your game server, including backing up your local and server savegames as well as uploading it to your server.

<InlineVoucher />

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.

## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst either playing single player or hosting a multiplayer game locally on your device. These can be found within your Windows AppData, specifically in the following path:
```
../AppData/Local/FactoryGame/Saved/SaveGames
```

:::tip
You can easily access this path directly by pressing `CTRL` + `R` at the same time and searching for the following path in the run dialog: `%localappdata%/FactoryGame/Saved/SaveGames`. Simply press **OK** and you will be taken to the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/pbXDwJWfEPtbAY3/preview)
:::

At this location, you will be able to see a folders which will include your local Savegames in one place.

![](https://screensaver01.zap-hosting.com/index.php/s/knB2RkXYGNR7J5M/preview)

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../satisfactory/save-backups
```

At this location, you should see a folder with a range of random characters which is your Savegame. Simply right-click on the folder and use the **Download** button to save it locally to your device.

![](https://screensaver01.zap-hosting.com/index.php/s/feHc74QHrzPwo24/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the following path:
```
../satisfactory/save-backups
```

![](https://screensaver01.zap-hosting.com/index.php/s/8WsKYjYzNk54A65/preview)

Simply drag and drop any of your Savegames into this folder through your FTP Client and it will be uploaded to your server.

:::tip
It may be useful to copy the name of the Gamesave folder that you have uploaded as you will need this if you wish to activate it in the next section.
:::

## Activating Savegame

Using your Savegame is very easy. You can either manage this through the in-game Satisfactory Server Manager or by heading over to your server's dashboard and utilising the **Savegame Manager** section.



## Conclusion

You have successfully added a Savegame to your game server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂


<InlineVoucher />
