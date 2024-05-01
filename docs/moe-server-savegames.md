---
id: moe-server-savegames
title: "Myth of Empires: Managing Savegames"
description: Information on how to manage savegames on your Myth of Empires server from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Manage Savegames
---

## Introduction

In this guide, you will explore how to manage your Myth of Empires Gamesaves on your gameserver, including backing up your local and server savegames as well as uploading it to your server.

## Prerequisites

In order to access your server files, you will require an FTP Client such as [WinSCP](https://winscp.net/eng/index.php) or [FileZilla](https://filezilla-project.org/) which are both open-source and free to download.

You will have to connect to your server through an FTP Client using the credentials that are found under **Tools->FTP-Broswer** on your gameserver's webinterface. Please use our [FTP File Access guide](https://zap-hosting.com/guides/docs/gameserver-ftpaccess) as further assistance to connect to your server.

## Backup Savegame

### Local Savegame

Local Savegames are ones which you have created whilst hosting a multiplayer game locally on your device. MOE stores these in a folder within the game installation location.

Open up Steam on your system, right-click your **Myth of Empires** game and select **Browse local files** whilst hovering over the **Manage** section.

![image](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

Navigate to the following path:
```
../WindowsPrivateServer/MOE/Saved/SaveGames/
```

In this folder, you will be able to see all of your currently existing local Savegames.

### Accessing Savegame via FTP

Backing up your Savegame from the server is simple. Once you have connected to your gameserver through an FTP Client, head over to the following path:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

At this location, you should see folders, which are your Savegames. Simply right-click on the folder and use the **Download** button to save it locally to your device.

![image](https://screensaver01.zap-hosting.com/index.php/s/3yN723tY8eiBb2w/preview)

### Automatic Backup

We also provide an option to automatically backup your Savegame (and configuration file) directly through our webinterface. Simply head over to your gameserver's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Automatic Server Backup guide](gameserver-backups.md) for this topic.

## Uploading Savegame

Similarly to backing up, uploading your Savegame is simple. First ensure that you connect to your gameserver through an FTP Client. Once you are ready, head over to the following path:
```
../moe-dedicated/MOE/Saved/SaveGames/
```

![image](https://screensaver01.zap-hosting.com/index.php/s/KLD26KTYZYpfoqP/preview)

Simply drag and drop any of your Savegames into this folder through your FTP Client and it will be uploaded to your server.

## Activating Savegame

Using your Savegame will require you to select it in your server configuration. The simplest way to do this is by heading over the **Settings** section on your gameserver's webinterface. Use our [MOE Configuration guide](moe-configuration.md) if for more information.

![image](https://github.com/zaphosting/docs/assets/42719082/5e65fc4a-45ec-4696-8170-e7c6384dac8d)

In this section, find the **Map Name** parameter in the Basic settings section, and your uploaded world should now be found here. If you do not see it, ensure that you restart your server after uploading.

You have successfully added a Savegame to your gameserver.