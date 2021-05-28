---
id: satisfactory_addmods
title: Install Mods
sidebar_label: Install Mods
---

> **CAUTION**
> Mods are **not officially** supported by the developers, but they are tolerated!
> In the worst case, the installation of mods can destroy the savegame, make it temporarily unplayable due to an update or also destroy it!
> A backup should be created **in any case before** installing mods and backups should also be created regularly just in case!

## Install Modded Satisfactory on the server

To be able to install mods on your server at all, you must first order a Modded Satisfactory Server: https://zap-hosting.com/en/modded-satisfactory-server-mieten/
If you have already rented a Satisfactory server, the game can be changed at any time thanks to the cloud system as described in [this manual](https://zap-hosting.com/guides/docs/en/gameserver_gameswitch/).

## Install Mod-Manager

Das Tool "SatisfactoryModManager" gestaltet die Verwaltung und Installation von Mods sehr einfach und kann mit wenigen Klicks abgewickelt werden.
Das Tool ist verfügbar für Windows und Linux und kann hier herruntergeladen werden: https://github.com/satisfactorymodding/SatisfactoryModManager/releases

Auf der verlinkten Seite werden alle Versionen aufgelistet, in der Regel sollte immer die neuste Version verwendet werden, also der erste Eintrag von oben.
Unter "Assets" kann das Tool nun heruntergeladen werden. Je nachdem welches Betriebssystem (Windows oder Linux) du verwendest, klickst du die passende Datei an, wodurch der Download automatisch startet bzw. abhängig von deinem Browser oder gewählten Einstellungen bestätigt werden muss.

![](https://screensaver01.zap-hosting.com/index.php/s/xn9W7dW7HJpRGBA/preview)

When the download is complete, run the file and install the mod manager on your PC, choosing the options that suit you during installation.

## Install Mods

The same mods must be installed 1:1 on the client (by all players!) and on the server so that the connection is possible and no crashes occur.
In the first step, the mods are compiled and installed on the client so that they can then be transferred to the server.

> **WARNING**
> Not all mods are compatible with the multiplayer!
> If the mod is compatible with the multiplayer, this is usually always mentioned in the description of the mod.
> Note: Even if the mod is stated to be compatible with the multiplayer, this is not a guarantee of it!

### Client

The mods are saved in profiles so that, for example, other mods can be tested in a test world and you can switch back to the regular mods with one click.
So first select a profile or create a new one as shown in the screenshot.

![](https://screensaver01.zap-hosting.com/index.php/s/sAYyLdMA5YiozBF/preview)

First set the filter to "Compatible" so that only mods that are currently compatible with the version are displayed.

![](https://screensaver01.zap-hosting.com/index.php/s/EM9q87scfbR3cq9/preview)

Mods can now be installed simply by clicking on the download icon if it is ensured that the mod is compatible with the multiplayer, as described above.

![](https://screensaver01.zap-hosting.com/index.php/s/ZCGqJGXYiqXWSPC/preview)

### Server

After all desired mods have been installed on the client and it has been ensured that the mod is compatible with the multiplayer, the mods can now be installed on the server. 
So that there are no problems with the transfer of the changes, please make sure that your server is stopped beforehand!

Now connect to your server via FTP to be able to upload the mods in the next step.
We have described everything about the FTP connection in [this manual](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/).
After the connection has been established, open the following folder path: `/gXXXX/modded-satisfactory/FactoryGame/Mods`

Now you have to open the local folder of Satisfactory on your PC.
The steps differ slightly between Steam and Epic Games:

<!--DOCUSAURUS_CODE_TABS-->

<!--Steam-->
If you have installed Satisfactory via Steam, you can open the folder directly via the Steam client:

![](https://screensaver01.zap-hosting.com/index.php/s/8PEXmfXkE2JGsZT/preview)

<!--Epic Games-->
Epic Games does not have a button to open the installation folder, so the folder must be opened manually.
To do this, open Windows Explorer and navigate to the folder where Epic Games was installed by you.
This is usually the correct path: `C:\Program Files\Epic Games\SatisfactoryEarlyAccess`

<!--END_DOCUSAURUS_CODE_TABS-->

The mods that have been installed in the client by the mod manager must now be uploaded via FTP.
In order to access the mods themselves, the following folders must be opened one after the other: `FactoryGame -> Mods`.

Now we select all folders **except the SML folder** by holding down the CTRL key and clicking on the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/LzXgsiGwc4gXGY5/preview)

The selected folders are now dragged and dropped into the previously opened mod folder in FTP:

![](https://screensaver01.zap-hosting.com/index.php/s/bpXNB9Fw6wSMgP3/download) 

## Server starten

After the mods have been uploaded, the server can simply be started via the web interface.
Afterwards, the server can be joined as described in these instructions: https://zap-hosting.com/guides/docs/en/satisfactory_connect/
