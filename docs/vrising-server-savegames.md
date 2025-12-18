---
id: vrising-server-savegames
title: "V Rising: Managing V Rising Savegames"
description: "Discover how to manage and back up your V Rising game saves for secure multiplayer gaming experiences → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, we will explore how to manage your V Rising Gamesaves on your game server, including backing up your local and server savegames as well as uploading it to your server.

<InlineVoucher />

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.


## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. These can be found within your Windows LocalLow AppData, specifically in the following path:
```
../AppData/LocalLow/Stunlock Studios/VRising
```

:::tip
You can easily access this path directly by pressing `CTRL` + `R` at the same time and searching for the following path in the run dialog: `%userprofile%/appdata/locallow/Stunlock Studios/VRising`. Simply press **OK** and you will be taken to the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/dz4ytiTai5jD2ep/preview)
:::

At this location, you will be able to either see a `Saves` and/or `CloudSaves` folder depending on whether you have used Steam Cloud Saving feature and the type of server. If you head into the folders, you will be able to find your local Savegames.

:::note
Depedning on the game version, your saves will be placed under either a v1 or v3 folder.
:::

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../vrising/save-data/Saves
```

At this location, you should be able to see a v1 and v3 folder, which depends on the game version. Within each, you will be able to find your Savegames. Simply right-click on the folder and use the **Download** button to save it locally to your device.

![](https://screensaver01.zap-hosting.com/index.php/s/tZ4HngqLeHTkizz/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the following path:
```
../vrising/save-data/Saves
```

![](https://screensaver01.zap-hosting.com/index.php/s/RXd4aoxrA6QnP46/preview)

Depending on your saves version, you will now simply drag and drop any of your Savegames into the appropriate folder through your FTP Client and it will be uploaded to your server.

:::tip
It may be useful to copy the name of the Gamesave folder that you have uploaded, as you will need this if you wish to activate it in the next section.
:::

## Activating Savegame

In order to use a specific Savegame, you will have to edit a configuration file. There are a few methods of doing this, we will cover doing this through the webinterface since this is the most user-friendly. If you wish to see other methods of editing the file, please see our [Server Configuration](vrising-configuration.md) guide which covers this.

Simply head over to the **Settings** section on your game server's webinterface and find the **Savename** setting.

Change this setting to the name of the savegame folder that you uploaded in the previous step. Once ready, ensure that you save at the bottom using the green **Save** button and then restart your server.

<InlineVoucher />
