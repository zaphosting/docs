---
id: palworld-savegames
title: Manage Palworld Savegames
description: Information about savegame management for the Palworld game from ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Savegames
---

You can manage your savegame using an FTP program such as FileZilla Client or WinSCP. In our example, we are using WinSCP.
Simply establish a connection with the program of your choice; you can find the data for this in the dashboard on the left under "FTP browser".

You can find the savegame via FTP in the folder `Pal/Saved/SaveGames/0`.

![](https://screensaver01.zap-hosting.com/index.php/s/xMMKs6p5M6pz23j/preview)

## Savegame backup

To back up your savegame, you can simply download it via your FTP client, make sure that you save the entire folder and not just the files in it, in our case the savegame is called `891F30085A3F4D338DC5F015B5C1E729`.

![](https://screensaver01.zap-hosting.com/index.php/s/SXXpJ5oMPwyFNrN/preview)

## Configure your own savegame

### Find local savegame

Savegames that were created locally can be found in the following folder:
`Appdata/Local/PAL/Saved/SaveGames/`

You can open this folder by pressing Windows key+R at the same time and entering the following in the dialogue:
`%localappdata%/PAL/Saved/SaveGames/`

![](https://screensaver01.zap-hosting.com/index.php/s/wtwnsM5rrjFxjis/preview)

Then simply press "OK" and you will be taken to the PAL SaveGames folder:

![](https://screensaver01.zap-hosting.com/index.php/s/rpaSM3AQsZai6fz/preview)

Here we open the folder next to the UserOption.sav file, this folder is named after our SteamID.

Here we can now view all our savegames.

### Upload savegame

::info Make sure that your server is stopped before changing the savegame!

To upload your own savegame, you can upload your savegame folder to the `Pal/Saved/SaveGames/0` folder:

![](https://screensaver01.zap-hosting.com/index.php/s/tadxngnRCJDbtTe/preview)

### Load savegame

To load the savegame on the server, we have to edit the `GameUserSettings.ini`, which we find

for Windows in:
`Pal/Saved/Config/WindowsServer/`


for Linux in:
`Pal/Saved/Config/LinuxServer/`

There the `GameUserSettings.ini` can be opened, here we find a `DedicatedServerName=` line:

![](https://screensaver01.zap-hosting.com/index.php/s/qLG2jtzFkYM6WB7/preview)

Here we now enter the name of our uploaded savegame, in our case the line looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/xe85aAbd7DefpF9/preview)

Done! You can now start your server and continue playing on your savegame.

## My savegame is suddenly gone, what now?

In rare cases it can happen that the server creates a new savegame when it is started instead of loading the existing one.

To do this, check in `Pal/Saved/SaveGames/0` which Savgames are available:

![](https://screensaver01.zap-hosting.com/index.php/s/wYQ42Aein5y6Z6j/preview)

In our case, we have two savegames, the older folder is probably our savegame, which we can now load by [Configuring it in GameUserSettings.ini](#load-savegame).

The savegame should then be active on the server again!