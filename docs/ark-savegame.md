---
id: ark-savegame
title: ARK Survival Evolved Import own save file
description: Information about importing a save file to your ARK Survival Evolved game server - ZAP-Hosting.com documentation
sidebar_label: Importing save file
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Introduction

Are you looking to import your own or an official backup save file to your Ark: Survival Evolved server? Look no further, this guide will explain the steps to importing your regular own or official backup save file to your new server.

<YouTube videoId="lvIIVOhAUjo" title="How to get an ARK:SE Server with Official Server Backups" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

## Prepare your save file

### Official backup save file

You must first download your official server save file. You can do this directly from [ARK's website](https://survivetheark.com/index.php?/server-backups/), or use [an community-created tool](https://arkutils.netlify.app/tools/officialdownload) to find your server more easily as it allows for searching.

:::note
If you are an Xbox or Playstation player, you will not be able to download official server files unfortunately. The developers have only allowed world saves from Steam and Epic platforms to be freely downloaded.
:::

There are two snapshots that were made, the first is from August 25th, 2023 and the second is from September 30th, 2023. For either, you must find your server and download your save file.

:::note
The use of your own official backup save is only possible with the **ARK - SE (Official backupsave compatible)** game server variant. If you use a different version for your server, you can change the version under **games** section on your game server's webinterface accordingly or using our [Gameswitch guide](gameserver-gameswitch.md).

![image](https://github.com/zaphosting/docs/assets/42719082/8f2ac8fa-2b23-4738-8d95-87c289e9d98a)
:::



### Own regular save file

To import your own save file (non-official), all files from the save file are required. These are usually saved in the **SavedArks** directory, which is located in the **Shootergame/Saved** directory. Search for these files and save them for the upcoming import process.

:::note
For this, you should use the regular **Ark: SE** game server variant (without the official backupsave support) as you are importing a regular save file which is not official.

![image](https://github.com/zaphosting/docs/assets/42719082/43a6f039-778b-471f-82c8-91f1b8644a33)
:::



## Uploading save to server

Once you have downloaded your `.zip` save file, you will have to unzip it using a program such as 7zip or Winrar. For either type of game server and save file, the upload process is the same.

Now you will have to access your server through FTP in order to upload your save files. Please use our [FTP Access](gameserver-ftpaccess.md) guide if you require assistance for logging in via your preferred FTP client and transferring files.

With your FTP client open, head over to the following subdirectory within your game server:
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![image](https://github.com/zaphosting/docs/assets/42719082/92ca6e48-346e-4f3c-80e2-972421d1f73f)

Delete all files of the current save file (or back them up beforehand if you wish to play on this save file in the future). Next, drag and upload all of the extracted files into this directory (including .ark, .arktribe and .arkprofile files). Please be patient as it may take some time to finish uploading everything, which is dependant on the size of all of your save file content.

Once your upload is finished, restart your server and the newly uploaded files should be loaded. You have successfully uploaded an official backup save file to your Ark: Survival Evolved game server.