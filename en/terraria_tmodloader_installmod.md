---
id: terraria_tmodloader_installmod
title: Terraria: Installing mods on servers (tModLoader)
description: Information on how to install mods on your Terraria server using tModLoader - ZAP-Hosting.com documentation
sidebar_label: Mod Installation (tModLoader)
---


## Mod installation via tModLoader

The tModLoader for Terraria is an important modification that allows mods to be loaded onto your Terraria server. The installation is done via drag & drop and with just one adjustment on your server, so the whole thing is very easy and done in a few minutes.


## Installation of tModLoader on your PC

If you haven't installed tModLoader yet, you can download it directly from Steam for free . Simply search for tModLoader in the Steam Store or use the following link: [tModLoader im Steam Store](https://store.steampowered.com/app/1281930/tModLoader/)

After downloading and installing you can start your tModLoader directly from Steam.

## Adding mod's on your PC

Once in the main menu, open your mod folder, you do this by clicking on **Mods** and then on **Manage Mods** then **Open Mod Folder**:

![](https://screensaver01.zap-hosting.com/index.php/s/YGMWDGYnLqGxmL7/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WZLXdGqFCs9Sqgn/preview)

In the now opened folder, which is located by default under **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods** you can now put your desired Mods.
In this example we are installing the Calamity-Mod.

![](https://screensaver01.zap-hosting.com/index.php/s/ZRfipZ2TtEzFtdC/preview)

> A mod must always have the ending **.tmod** , otherwise it cannot be loaded from the server!

Then you can close the folder again, then click on **Back** in the game and then on **Mods**: 

![](https://screensaver01.zap-hosting.com/index.php/s/tpXrPHx2ZfSLP35/preview)

There you will now see your added mod which you can activate by clicking on **Disabled**:

![](https://screensaver01.zap-hosting.com/index.php/s/ZMHXD63HMHADwDX/preview)

To make the mod active, click on **Reload Mods**, then you can close the game again and start installing the mod on your server.


## Installation of Mod's on your Server

In order to be able to install the mod on your server, you can connect to your server via FTP, how it works you can find out here: ![FTP File Access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

There you navigate to the following directory: /g******/terraria/mods/ where you also insert the previously used **.tmod** file:

![](https://screensaver01.zap-hosting.com/index.php/s/SwcqF7FF7w4i6YB/preview)

> If there is no file with the name **enabled.json** you have to start the server first, then it should appear. Alternatively, you can create the file yourself.

After you open the file **enabled.json** via **Right Click > Edit** and add there the name of your mod one, which should look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/NiewmdRdT35j8Zo/preview)

If you want to insert several mod's, you can do so like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/AZkf5XnbK6xfrJR/preview)

> Please note that a comma must be placed after each mod name, except for the name of the last mod!

Now you can close the FTP connection, start your server and connect to your server with the tModLoader you downloaded from Steam.

By pressing **ESC**, then clicking on **Settings** and then clicking on **Mod Configuration** you can see your mods loaded on the server:
