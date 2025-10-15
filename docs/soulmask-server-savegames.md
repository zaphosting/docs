---
id: soulmask-server-savegames
title: "Soulmask: Managing Soulmask Savegames"
description: "Discover how to manage and back up your Soulmask Gamesaves locally and on your server for secure gameplay → Learn more now"
sidebar_label: Manage Savegames
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, we will explore how to manage your Soulmask Gamesaves on your game server, including backing up your local and server savegames as well as uploading it to your server.

<InlineVoucher />

## Preparation

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your game server's webinterface. Please use our [Access via FTP](gameserver-ftpaccess.md) guide as further assistance to connect to your server.


## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. These can be found within your Windows Local AppData, specifically in the following path:
```
../AppData/Local/WS/[your_steamid]/AutoGames
```

:::tip
You can easily access this path directly by pressing `CTRL` + `R` at the same time and searching for the following path in the run dialog: `%userprofile%/appdata/local/WS/`. Simply press **OK** and open the folder with your SteamID to reach the AutoGames folder.

![](https://screensaver01.zap-hosting.com/index.php/s/FT4J9Jdi8d8LDxq/preview)
:::

At this location, you will be able to see all of your local Savegames. Each folder will be labelled with the invite code of the server, which makes it easy to identify the correct world.

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your game server through an FTP Client, head over to the following path:
```
../soulmask/WS/Saved/Worlds/Dedicated
```

At this location, you will be able to see the main `Level01_Main` folder, which is where the save for the dedicated server is found. Simply right-click on the folder and use the **Download** button to save it locally to your device.

:::note
At the moment, Soulmask dedicated servers only support one save at a time, which is found in the main `Level01_Main` folder.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Ywna6zc3BkCK6ES/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your game server through an FTP Client and ensure that you shut down your server.

:::note
At the moment, Soulmask dedicated servers only support one save at a time, which is found in the main `Level01_Main` folder.
:::

Once you are ready, head over to the following path:
```
../soulmask/WS/Saved/Worlds/Dedicated/Level01_Main
```

![](https://screensaver01.zap-hosting.com/index.php/s/iWKPKw5Grg4JgPi/preview)

Now drag and drop the **world.db** file from the save that you wish to upload and replace the existing file. Make sure to download the existing file from the server if you wish to keep it, otherwise it will be lost once you overwrite the file.

You can also upload your gameplay settings file, by heading over to the following path:
```
../soulmask/WS/Saved/GameplaySettings
```

![](https://screensaver01.zap-hosting.com/index.php/s/yqXF9EaDCin5rzT/preview)

Drag and drop the **GameXishu.json** file from the save you wish to upload and replace the existing file. Once again, download the existing file if you wish to keep it before replacing.

:::tip
If the save you are using has a slightly different name for the **GameXishu.json** file, for example `GameXishu_2.json`, adjust the file name back to `GameXishu.json` so that it is recognised by the dediated server.
:::

Now simply start the server again, and your save should now load successfully on the server.

<InlineVoucher />
