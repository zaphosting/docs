---
id: assettocorsa_mods
title: Install Mods
sidebar_label: Install Mods
---

## Connect to FTP

Before mods can be installed, the [FTP access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/ekYw27nA4cgiNAk/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/MHt37AFEeZYgs97/preview)


## Preparation

First we open the Assetto Corsa folder, we can open it by opening Steam and right-clicking "Assetto Corsa" in the Games List, then we select "Properties"

![](https://screensaver01.zap-hosting.com/index.php/s/eC9ny8CTa5PwAEN/preview)

Now we open "Local Files" and open the local game files:

![](https://screensaver01.zap-hosting.com/index.php/s/NM5QR9PeJzjSiY8/preview)

Now we open the "server" folder, there is a "acServerManager" file there, we open it:

![](https://screensaver01.zap-hosting.com/index.php/s/onqBCHqaezK2csf/preview)



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


## Upload Server Content

Now we have to generate the content for the server, so that Car&Map Mods are loaded on the server. To do this we first click on "Update Server Content" below

![](https://screensaver01.zap-hosting.com/index.php/s/BJj6fGbfiitYPMM/preview)

This process can take a few minutes, all Maps & Cars are now converted to server files.

> After this process is finished, a "Could not update" message may appear, this is not a problem.

Now we open the "Server" folder, where the AcServerManager is located, there is a "Content" folder, which we now upload to our Assetto Corsa Server via Drag&Drop, and overwrite our old "Content" folder:

![](https://screensaver01.zap-hosting.com/index.php/s/JHELeMApML8aamn/preview)

After the content is uploaded, the carmods are installed and active after a server restart.