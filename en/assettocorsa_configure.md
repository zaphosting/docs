---
id: assettocorsa_configure
title: Assetto Corsa: Configure your server
description: Information about the configuration options of your Assetto Corsa server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Configure Server
---

## Connect to FTP

Before we can configure the server, the [FTP access](gameserver_ftpaccess.md) must be set up:

![image](https://user-images.githubusercontent.com/13604413/159135972-112ad9ef-5f6b-4bc6-ba9f-7471b4f8c22b.png)

After this has been set up, you can now connect and open the server folder:

![image](https://user-images.githubusercontent.com/13604413/159135981-9119c0c9-1b37-4fcc-ad76-1c88bc4b116b.png)


## Preparation

First we open the Assetto Corsa folder, we can open it by opening Steam and right-clicking "Assetto Corsa" in the Games List

Now we open "Local Files" and open the local game files:

![image](https://user-images.githubusercontent.com/13604413/159136021-cd23c04f-0db5-4051-8993-7fddfd0edfaa.png)

Now we open the "server" folder, there is a "acServerManager" file there, we open it

## Set Map

We are now in the "AC Server Manager" interface, with this we can create and manage serverconfigs, first we create a new config

![image](https://user-images.githubusercontent.com/13604413/159136101-06de0307-c485-4673-bbc7-4eed1c32ef7b.png)

Now we can configure our server, in our case we only want to edit the tracks & cars, for this we open the "Tracks" tab

Here we can now click on our preferred map, above we can adjust the number of cars on the track.

![image](https://user-images.githubusercontent.com/13604413/159136194-814b2206-bfc8-44bc-a363-7a275dc73dfc.png)

> Make sure that you do not specify more cars than slots on your server, otherwise the server will not start

## Set Cars

Now we switch to the tab "Cars / Entry List", here we can now add new cars:


To activate cars, the checkmark must be set on the left

![image](https://user-images.githubusercontent.com/13604413/159136202-40a079e2-8558-4c13-825a-f4a73c90b833.png)

In the middle you can see cars which can be placed on the grid, here we can choose cars in the colors which should be in the grid:

![image](https://user-images.githubusercontent.com/13604413/159136214-b58c2720-6a04-4882-a661-12cbde86cf31.png)

> To select multiple cars, several checks can be set to add the different cars in the middle.

> Note that all car slots are filled and not more than the amount of available slots is set.
> ![image](https://user-images.githubusercontent.com/13604413/159136228-57a877cd-e75b-4df0-ad57-30c6b05af255.png)

## Upload Config

Now we can save the Config with the "Save" button and export it with the "Export" button:

![image](https://user-images.githubusercontent.com/13604413/159136248-2aa62490-c2a7-49ae-b97e-0c731cebd7a1.png)

Here we now select a free folder where the config data will be stored.

Now the AC Server Manager can be closed, we now open the folder into which the Configs were exported.

![image](https://user-images.githubusercontent.com/13604413/159136258-33c0896a-2ec7-4c80-9fa1-1bf65ebdd083.png)

These Configs can now be copied via Drag&Drop into the "cfg" folder of your gameserver.

![image](https://user-images.githubusercontent.com/13604413/159136263-cb78e326-bdf5-40c5-9581-804b4f786ce9.png)

The server can now be started with the new Config.
