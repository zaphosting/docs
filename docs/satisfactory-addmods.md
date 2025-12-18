---
id: satisfactory-addmods
title: "Satisfactory: Install Mods"
description: "Discover how to safely manage and install mods for Satisfactory servers while protecting your savegame → Learn more now"
sidebar_label: Install Mods
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::danger
**IMPORTANT**

Mods are currently not working!
:::

:::info
**CAUTION**

Mods are **not officially** supported by the developers, but they are tolerated!

In the worst case, the installation of mods can destroy the savegame, make it temporarily unplayable due to an update or also destroy it!

A backup should be created **in any case before** installing mods and backups should also be created regularly just in case!
:::

<InlineVoucher />

## Install Modded Satisfactory on the server

To be able to install mods on your server at all, you must first order a Modded Satisfactory Server: https://zap-hosting.com/en/satisfactory-server-hosting/
If you have already rented a Satisfactory server, the game can be changed at any time thanks to the cloud system as described in [Game Change](gameserver-gameswitch.md).

## Install Mod-Manager

The tool "SatisfactoryModManager" makes the administration and installation of mods very easy and can be done with just a few clicks.
The tool is available for Windows and Linux and can be downloaded here: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

All versions are listed on the linked page; as a rule, the latest version should always be used, i.e. the first entry from the top.
The tool can now be downloaded under "Assets". Depending on which operating system (Windows or Linux) you use, you click on the appropriate file, which starts the download automatically or, depending on your browser or selected settings, you have to confirm it.

![](https://screensaver01.zap-hosting.com/index.php/s/e7q5qCBP7D4ZL5g/preview)

When the download is complete, run the file and install the mod manager on your PC, choosing the options that suit you during installation.

## Install Mods

The same mods must be installed 1:1 on the client (by all players!) and on the server so that the connection is possible and no crashes occur.
In the first step, the mods are compiled and installed on the client so that they can then be transferred to the server.

:::info
**WARNING**

Not all mods are compatible with the multiplayer!

If the mod is compatible with the multiplayer, this is usually always mentioned in the description of the mod.

Note: Even if the mod is stated to be compatible with the multiplayer, this is not a guarantee of it!
:::

### Client

The mods are saved in profiles so that, for example, other mods can be tested in a test world and you can switch back to the regular mods with one click.
So first select a profile or create a new one as shown in the screenshot.

![](https://screensaver01.zap-hosting.com/index.php/s/EMFsKnrsowZAxJE/preview)

First set the filter to "Compatible" so that only mods that are currently compatible with the version are displayed.

![](https://screensaver01.zap-hosting.com/index.php/s/jg82aG3ketFxesD/preview)

Mods can now be installed simply by clicking on the download icon if it is ensured that the mod is compatible with the multiplayer, as described above.

![](https://screensaver01.zap-hosting.com/index.php/s/CH2pBzS8iXxEpRz/preview)

### Server

After all desired mods have been installed on the client and it has been ensured that the mod is compatible with the multiplayer, the mods can now be installed on the server. 
So that there are no problems with the transfer of the changes, please make sure that your server is stopped beforehand!

Now connect to your server via FTP to be able to upload the mods in the next step.
We have described everything about the FTP connection in [Access via FTP](gameserver-ftpaccess.md).
After the connection has been established, open the following folder path: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Now you have to open the local folder of Satisfactory on your PC.
The steps differ slightly between Steam and Epic Games:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
If you have installed Satisfactory via Steam, you can open the folder directly via the Steam client:

![](https://screensaver01.zap-hosting.com/index.php/s/ryEKHqEQFDBkkME/preview)

</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games does not have a button to open the installation folder, so the folder must be opened manually.
To do this, open Windows Explorer and navigate to the folder where Epic Games was installed by you.
This is usually the correct path: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

</TabItem>
</Tabs>

The mods that have been installed in the client by the mod manager must now be uploaded via FTP.
In order to access the mods themselves, the following folders must be opened one after the other: `FactoryGame -> Mods`.

Now we select all folders **except the SML folder** by holding down the CTRL key and clicking on the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/jCNjLHiF3JRgB24/preview)

The selected folders are now dragged and dropped into the previously opened mod folder in FTP. 

## Server starten

After the mods have been uploaded, the server can simply be started via the web interface. The server should now be joinable which you can learn more via the [Connect to Server](satisfactory-connect.md) guide.

<InlineVoucher />
