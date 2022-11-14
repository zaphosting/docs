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

![image](https://user-images.githubusercontent.com/26007280/189975016-52eb5c86-d427-427d-94d5-4fedd7d40765.png)

![image](https://user-images.githubusercontent.com/26007280/189975029-693bc662-2d62-485d-9fd7-2eb54d454330.png)

In the now opened folder, which is located by default under **C:\Users\UserName\Documents\My Games\Terraria\ModLoader\Mods** you can now put your desired Mods.
In this example we are installing the Calamity-Mod.

![image](https://user-images.githubusercontent.com/26007280/189975047-b641f42a-7ab6-4954-8db1-089fd237c4be.png)

> A mod must always have the ending **.tmod** , otherwise it cannot be loaded from the server!

Then you can close the folder again, then click on **Back** in the game and then on **Mods**: 

![image](https://user-images.githubusercontent.com/26007280/189975073-e40b342a-35a7-4915-95b5-67662ecffaca.png)

There you will now see your added mod which you can activate by clicking on **Disabled**:

![image](https://user-images.githubusercontent.com/26007280/189975095-829e41f1-c534-4723-83a8-f80714dde419.png)

To make the mod active, click on **Reload Mods**, then you can close the game again and start installing the mod on your server.


## Installation of Mod's on your Server

In order to be able to install the mod on your server, you can connect to your server via FTP, how it works you can find out here: ![FTP File Access](https://zap-hosting.com/guides/docs/en/gameserver_ftpaccess/)

There you navigate to the following directory: /g******/terraria/mods/ where you also insert the previously used **.tmod** file:

![image](https://user-images.githubusercontent.com/26007280/189975128-0ec4f68e-1d50-4228-94ab-b4f7e1c7ae86.png)

> If there is no file with the name **enabled.json** you have to start the server first, then it should appear. Alternatively, you can create the file yourself.

After you open the file **enabled.json** via **Right Click > Edit** and add there the name of your mod one, which should look like this:

![image](https://user-images.githubusercontent.com/26007280/189975152-ff10e2cc-32c9-49f0-ae39-e5175dcba739.png)

If you want to insert several mod's, you can do so like this: 

![image](https://user-images.githubusercontent.com/26007280/189975186-57ce2560-44bf-4c5f-8dfd-c39c11ec9c68.png)

> Please note that a comma must be placed after each mod name, except for the name of the last mod!

Now you can close the FTP connection, start your server and connect to your server with the tModLoader you downloaded from Steam.

By pressing **ESC**, then clicking on **Settings** and then clicking on **Mod Configuration** you can see your mods loaded on the server:
