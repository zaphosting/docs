---
id: assettocorsa-mods
title: "Assetto Corsa: Installing mods on a server"
description: Information on how to install mods on your Assetto Corsa server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Mods
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect to FTP

Before we can configure the server, the [FTP access](gameserver-ftpaccess.md) must be set up:

![image](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

After this has been set up, you can now connect and open the server folder:

![image](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Preparation

First we open the Assetto Corsa folder, we can open it by opening Steam and right-clicking "Assetto Corsa" in the Games List

Now we open "Local Files" and open the local game files:

![image](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Now we open the "server" folder, there is a "acServerManager" file there, we open it



## Set Cars

Now we switch to the tab "Cars / Entry List", here we can now add new cars:


To activate cars, the checkmark must be set on the left

![image](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

In the middle you can see cars which can be placed on the grid, here we can choose cars in the colors which should be in the grid:

![image](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
To select multiple cars, several checks can be set to add the different cars in the middle.


Note that all car slots are filled and not more than the amount of available slots is set.

![image](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Upload Config

Now we can save the Config with the "Save" button and export it with the "Export" button:

![image](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Here we now select a free folder where the config data will be stored.

Now the AC Server Manager can be closed, we now open the folder into which the Configs were exported.

![image](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

These Configs can now be copied via Drag&Drop into the "cfg" folder of your game server.

![image](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Upload Server Content

Now we have to generate the content for the server, so that Car&Map Mods are loaded on the server. To do this we first click on "Update Server Content" below

![image](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

This process can take a few minutes, all Maps & Cars are now converted to server files.

:::info
After this process is finished, a "Could not update" message may appear, this is not a problem.
:::

Now we open the "Server" folder, where the AcServerManager is located, there is a "Content" folder, which we now upload to our Assetto Corsa Server via Drag&Drop, and overwrite our old "Content" folder:

![image](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

After the content is uploaded, the carmods are installed and active after a server restart.
