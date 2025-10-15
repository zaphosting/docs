---
id: assettocorsa-mods
title: "Assetto Corsa: Installing mods on a server"
description: "Discover how to set up and customize your Assetto Corsa server for optimal gameplay experience → Learn more now"
sidebar_label: Install Mods
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect to FTP

Before we can configure the server, the [Access via FTP](gameserver-ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/gcojCfR2L8Mt5gg/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/eSDXfR8HS6eDC6g/preview)


## Preparation

First we open the Assetto Corsa folder, we can open it by opening Steam and right-clicking "Assetto Corsa" in the Games List

Now we open "Local Files" and open the local game files:

![](https://screensaver01.zap-hosting.com/index.php/s/A8PqgJEGHnc72Xe/preview)

Now we open the "server" folder, there is a "acServerManager" file there, we open it



## Set Cars

Now we switch to the tab "Cars / Entry List", here we can now add new cars:


To activate cars, the checkmark must be set on the left

![](https://screensaver01.zap-hosting.com/index.php/s/3M7QKxcEEBEEKfw/preview)

In the middle you can see cars which can be placed on the grid, here we can choose cars in the colors which should be in the grid:

![](https://screensaver01.zap-hosting.com/index.php/s/7WbYdxJk8TJEDc3/preview)

:::info
To select multiple cars, several checks can be set to add the different cars in the middle.


Note that all car slots are filled and not more than the amount of available slots is set.

![](https://screensaver01.zap-hosting.com/index.php/s/ogiaNKsGJZjWK2p/preview)
:::


## Upload Config

Now we can save the Config with the "Save" button and export it with the "Export" button:

![](https://screensaver01.zap-hosting.com/index.php/s/DcJLfNGYtpmRjSz/preview)

Here we now select a free folder where the config data will be stored.

Now the AC Server Manager can be closed, we now open the folder into which the Configs were exported.

![](https://screensaver01.zap-hosting.com/index.php/s/cRYG4yspGbzpnHH/preview)

These Configs can now be copied via Drag&Drop into the "cfg" folder of your game server.

![](https://screensaver01.zap-hosting.com/index.php/s/56pgFoDj9KQyBX2/preview)



## Upload Server Content

Now we have to generate the content for the server, so that Car&Map Mods are loaded on the server. To do this we first click on "Update Server Content" below

![](https://screensaver01.zap-hosting.com/index.php/s/dRg5xoxcrNcCK9r/preview)

This process can take a few minutes, all Maps & Cars are now converted to server files.

:::info
After this process is finished, a "Could not update" message may appear, this is not a problem.
:::

Now we open the "Server" folder, where the AcServerManager is located, there is a "Content" folder, which we now upload to our Assetto Corsa Server via Drag&Drop, and overwrite our old "Content" folder:

![](https://screensaver01.zap-hosting.com/index.php/s/dfDYjZjADkpfdDc/preview)

After the content is uploaded, the carmods are installed and active after a server restart.

<InlineVoucher />
