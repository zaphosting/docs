---
id: ets2-server-modding
title: "ETS2: Installing Mods/DLCs to your ETS2 server"
description: "Discover how to enhance your Euro Truck Simulator 2 experience by adding mods and DLCs for immersive gameplay → Learn more now"
sidebar_label: Install Mods/DLCs
services:
  - gameserver-factorio-ets2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Euro Truck Simulator 2 has native modding support via the Steam Workshop built into the game, allowing you to add a wide variety of mods to your game and your server, alongside purchased game DLCs. In this guide, we will cover the process of installing mods to your client and subsequently to your ETS2 server.

<InlineVoucher />

## Adding Mods & DLCs

To begin with, you will have to find and select the mods and DLCs that you wish to use. You can do this by in-game by accessing the **Mod Manager** and **DLC Browser** options in the main menu.

![](https://screensaver01.zap-hosting.com/index.php/s/osjX59MRjrPBfe6/preview)

### Mods

You can access Mods via the **Mod Manager** option in the main menu, which allows you to easily find mods through the Steam Workshop.

Once you have installed some mods, ensure that you move them to the **Active Mods** list using the arrows besides each mod.

![](https://screensaver01.zap-hosting.com/index.php/s/TG7XK6ZodWZM2pz/preview)

Finally, confirm the changes and enter the game, into single player mode.

### DLCs

You can access the DLCs that you have purchased on your account via the **DLC Browser** option in the main menu.

On this page, you can browse all the DLCs that you currently own and have installed on your client.

## Exporting Server Packages

Now that you have activated the mods and are ready in-game, you will have to export your mods as server packages. To do this, you will have to open the console in-game, which by default is disabled.

To enable it, head over to the following directory and open the `config.cfg` file:
```
C:/Users/[your_user]/Documents/Euro Truck Simulator 2
```

In this file, find the line `uset g_developer "0"` and replace it with `uset g_developer "1"` to enable. Likewise, also find the line `uset g_console "0"` and replace it with `uset g_console "1"`.

![](https://screensaver01.zap-hosting.com/index.php/s/Wz52e4o2KtTndZM/preview)
![](https://screensaver01.zap-hosting.com/index.php/s/raR8jxq7imKzjDD/preview)

Restart your game, and you will now be able to open the console via one of the following keys depending on keyboard layout:
```
` OR ~ OR \
```

Now that you are ready, in the console type in the following command to export server packages:
```
export_server_packages
```

![](https://screensaver01.zap-hosting.com/index.php/s/zbzbdKfyr5xyNrK/preview)

Two files will be exported into your `Documents/Euro Truck Simulator 2` folder, the `server_packages.dat` and `server_packages.sii` files, which contain information about DLCs/mods and will be used in the next section.

## Uploading Server Packages

Now with your server packages exported for your mods, you will have to upload them to your ETS2 server via FTP. Please use our [FTP Access](gameserver-ftpaccess.md) guide as further assistance to connect to your server.

Once ready, head over into the main root **Euro Truck Simulator 2** directory. Upload both of the server packages files into this folder. If these files already exist, simply replace them.

![](https://screensaver01.zap-hosting.com/index.php/s/9xaDPw7sptsN3FH/preview)

:::tip
When modding, the mods must be synced between the client and the server. This means that if you are connecting to a server with mods that you do not have, you will be prompted to download the missing mods.
:::

Finally, restart your server in order to automatically activate and install the mods. You have successfully installed mods to your ETS2 server.

<InlineVoucher />
