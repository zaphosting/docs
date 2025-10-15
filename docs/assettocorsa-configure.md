---
id: assettocorsa-configure
title: "Assetto Corsa: Configure your server"
description: "Discover how to configure your Assetto Corsa server with custom maps and cars for optimal gameplay experience → Learn more now"
sidebar_label: Configure Server
services:
  - gameserver-assettocorsa
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Connect to FTP

Before we can configure the server, the [Access via FTP](gameserver-ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/GdzeM4wyAGtGk8e/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/dkSSLWF5QGGf4yR/preview)


## Preparation

First we open the Assetto Corsa folder, we can open it by opening Steam and right-clicking "Assetto Corsa" in the Games List

Now we open "Local Files" and open the local game files:

![](https://screensaver01.zap-hosting.com/index.php/s/XKBgdiNbZ5AXtia/preview)

Now we open the "server" folder, there is a "acServerManager" file there, we open it

## Set Map

We are now in the "AC Server Manager" interface, with this we can create and manage serverconfigs, first we create a new config

![](https://screensaver01.zap-hosting.com/index.php/s/Z37toTgBHDmf54n/preview)

Now we can configure our server, in our case we only want to edit the tracks & cars, for this we open the "Tracks" tab

Here we can now click on our preferred map, above we can adjust the number of cars on the track.

![](https://screensaver01.zap-hosting.com/index.php/s/Hr9AMt9SHyas4CN/preview)

:::info
Make sure that you do not specify more cars than slots on your server, otherwise the server will not start
:::

## Set Cars

Now we switch to the tab "Cars / Entry List", here we can now add new cars:


To activate cars, the checkmark must be set on the left

![](https://screensaver01.zap-hosting.com/index.php/s/4w643p56GLXK9cP/preview)

In the middle you can see cars which can be placed on the grid, here we can choose cars in the colors which should be in the grid:

![](https://screensaver01.zap-hosting.com/index.php/s/T5SfpsdAPxfMwnY/preview)

:::info
To select multiple cars, several checks can be set to add the different cars in the middle.


Note that all car slots are filled and not more than the amount of available slots is set.

![](https://screensaver01.zap-hosting.com/index.php/s/FTeJX3BJipBRFQP/preview)
:::

## Upload Config

Now we can save the Config with the "Save" button and export it with the "Export" button:

![](https://screensaver01.zap-hosting.com/index.php/s/b7co7wfcegmwPYd/preview)

Here we now select a free folder where the config data will be stored.

Now the AC Server Manager can be closed, we now open the folder into which the Configs were exported.

![](https://screensaver01.zap-hosting.com/index.php/s/4Nysjo24BAAGbqe/preview)

These Configs can now be copied via Drag&Drop into the "cfg" folder of your game server.

![](https://screensaver01.zap-hosting.com/index.php/s/YKHtnDMSqBgssDc/preview)

The server can now be started with the new Config.

<InlineVoucher />
