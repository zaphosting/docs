---
id: palworld-server-savegames
title: "Palworld: Managing Palworld Savegames"
description: "Discover how to securely manage and back up your Palworld Gamesaves for seamless gameplay continuity → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver-palworld
---

import InlineVoucher from '@site/src/components/InlineVoucher';

In this guide, we will explore how to manage your Palworld Gamesaves on your game server, including backing up your local and server savegames as well as uploading it to your server.

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.


## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. These can be found within your Windows AppData, specifically in the following path:
```
../AppData/Local/Pal/Saved/SaveGames
```

:::tip
You can easily access this path directly by pressing `CTRL` + `R` at the same time and searching for the following path in the run dialog: `%localappdata%/Pal/Saved/SaveGames/`. Simply press **OK** and you will be taken to the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/gWL9gtAZ8JE2ENP/preview)
:::

At this location, you will be able to see a folder which will be your SteamID. Open this folder and you will be able to see all of your local Savegames in one place.

![](https://screensaver01.zap-hosting.com/index.php/s/aaeRXfs5cFjA6fN/preview)

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../palworld/Pal/Saved/SaveGames/0
```

At this location, you should see a folder with a range of random characters which is your Savegame. Simply right-click on the folder and use the **Download** button to save it locally to your device.

![](https://screensaver01.zap-hosting.com/index.php/s/pmrmNHS5NAfXpY3/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the following path:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

Simply drag and drop any of your Savegames into this folder through your FTP Client and it will be uploaded to your server.

:::tip
It may be useful to copy the name of the Gamesave folder that you have uploaded as you will need this if you wish to activate it in the next section.
:::

## Activating Savegame

In order to use a specific Savegame, you will have to edit a configuration file. Head over to the following path and find the file named **GameUserSettings.ini**:
```
../Pal/Saved/Config/WindowsServer/ # For Windows
../Pal/Saved/Config/LinuxServer/ # For Linux
```

In this folder, open the **GameUserSettings.ini** file and find the `DedicatedServerName` parameter.

At this line, edit the contents, replacing it with the name of the Savegame (the name of the folder) that you wish to activate on your server.

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Ensure that you save this file and restart your server for this to take effect. You have successfully added a Savegame to your game server.

## Savegame has Disappeared

In rare cases, it is possible that the server creates a new Savegame when it's started instead of loading an existing one.

Firstly, check your Savefiles through your FTP Client by heading to the following path:
```
../Pal/Saved/SaveGames/0
```

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

At this location you should still see the old Savegame and a new one that was generated. To resolve this, simply edit the configuration file as described in the Activating Savegame section above, with the correct Savegame folder name.

The Savegame should be active again once you have saved the file and restarted your server.

:::info
We highly recommend activating Automatic Backups as mentioned in the previous Automatic Backup section, as Palworld is still in Early Access so it is possible for Savegames to be lost or corrupted during updates.
:::

<InlineVoucher />
