---
id: assettocorsa_configure
title: Assetto Corsa: Configure your server
description: Information about the configuration options of your Assetto Corsa server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Configure Server
---

## Connect to FTP

Before we can configure the server, the [FTP access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/qY26x9kCtrpTbrQ/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/SAW5bnPjCpGDE8P/preview)


## Preparation

First we open the Assetto Corsa folder, we can open it by opening Steam and right-clicking "Assetto Corsa" in the Games List, then we select "Properties"

![](https://screensaver01.zap-hosting.com/index.php/s/eC9ny8CTa5PwAEN/preview)

Now we open "Local Files" and open the local game files:

![](https://screensaver01.zap-hosting.com/index.php/s/NM5QR9PeJzjSiY8/preview)

Now we open the "server" folder, there is a "acServerManager" file there, we open it:


![](https://screensaver01.zap-hosting.com/index.php/s/onqBCHqaezK2csf/preview)


## Set Map

We are now in the "AC Server Manager" interface, with this we can create and manage serverconfigs, first we create a new config

![](https://screensaver01.zap-hosting.com/index.php/s/gDXC8MQeiGgZ7Rq/preview)

Now we can configure our server, in our case we only want to edit the tracks & cars, for this we open the "Tracks" tab

![](https://screensaver01.zap-hosting.com/index.php/s/ePC7TwT4nEkJ88P/preview)

Here we can now click on our preferred map, above we can adjust the number of cars on the track.

![](https://screensaver01.zap-hosting.com/index.php/s/oizKLpW3wWfaw6g/preview)

> Make sure that you do not specify more cars than slots on your server, otherwise the server will not start

## Set Cars

Now we switch to the tab "Cars / Entry List", here we can now add new cars:

![](https://screensaver01.zap-hosting.com/index.php/s/ExfRpRW9LbjRNkP/preview)

To activate cars, the checkmark must be set on the left

![](https://screensaver01.zap-hosting.com/index.php/s/7tZqtpfMKLz7oiR/preview)

In the middle you can see cars which can be placed on the grid, here we can choose cars in the colors which should be in the grid:

![](https://screensaver01.zap-hosting.com/index.php/s/D67miafjkCAQTkZ/preview)

> To select multiple cars, several checks can be set to add the different cars in the middle.

> Note that all car slots are filled and not more than the amount of available slots is set.
> ![](https://screensaver01.zap-hosting.com/index.php/s/rGKR2zNwgEagYMa/preview)

## Upload Config

Now we can save the Config with the "Save" button and export it with the "Export" button:

![](https://screensaver01.zap-hosting.com/index.php/s/ixFdiQHfA9q6ca4/preview)

Here we now select a free folder where the config data will be stored.

Now the AC Server Manager can be closed, we now open the folder into which the Configs were exported.

![](https://screensaver01.zap-hosting.com/index.php/s/trBYPXFQT6AcxWL/preview)

These Configs can now be copied via Drag&Drop into the "cfg" folder of your gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/9yFE96xgBQwHgsg/preview)

The server can now be started with the new Config.
