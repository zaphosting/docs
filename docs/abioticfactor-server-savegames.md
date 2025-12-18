---
id: abioticfactor-server-savegames
title: "Abiotic Factor: Managing Abiotic Factor Savegames"
description: "Discover how to manage and back up your Abiotic Factor game saves locally and on your server for secure gameplay → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, we will explore how to manage your Abiotic Factor Gamesaves on your game server, including backing up your local and server savegames as well as uploading it to your server.

<InlineVoucher />

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) as further assistance to connect to your server.


## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. These can be found within your Windows Local AppData, specifically in the following path:
```
../AppData/Local/AbioticFactor/Saved/SaveGames/[your_steamid]/Worlds
```

:::tip
You can easily access this path directly by pressing `CTRL` + `R` at the same time and searching for the following path in the run dialog: `%userprofile%/AppData/Local/AbioticFactor/Saved/SaveGames`. Simply press **OK** and you will be taken to the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/zd7Zy5C6EH7BMHa/preview)
:::

Make sure to navigate to the subsequent Steam ID folder followed by the `Worlds` folder. At this location, you will be able to find all of your local Savegames.

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds
```

At this location, you will be able to find your Savegames. Simply right-click on the folder and use the **Download** button to save it locally to your device.

![](https://screensaver01.zap-hosting.com/index.php/s/RJSeBFpCdGamK7s/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the following path:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

:::note
Currently, Abiotic Factor dedicated servers don't support switching between Savegames, therefore you must upload the contents of your Savegame folder into the main `world` folder.
:::

Now get the folder of the Savegame you wish to upload opened up. Simply drag and drop all of the inner contents of your Savegame folder into the main `world` folder on the server. This will upload your Savegame onto your server.

![](https://screensaver01.zap-hosting.com/index.php/s/wsT4MXpp2MFWLtQ/preview)

:::info
If the main Savegame `world` folder is missing, attempt to shut down and start the server. If this doesn't help, use the **Revalidate Steam Files** button on the main gameserver dashboard to restore the default files.
:::

## Activating Savegame

Unlike usually having to edit a configuration file to activate your Savegame, you don't have to here since Abiotic Factor dedicated servers don't support Savegame switching yet.

Instead, simply restart your server and on next launch the server will load the Savegame contents that you have uploaded into the main `world` folder.

<InlineVoucher />
