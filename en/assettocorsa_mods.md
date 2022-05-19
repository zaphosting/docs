---
id: assettocorsa_mods
title: Assetto Corsa: Installing mods on a server
description: Information on how to install mods on your Assetto Corsa server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Mods
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



## Upload Server Content

Now we have to generate the content for the server, so that Car&Map Mods are loaded on the server. To do this we first click on "Update Server Content" below

![image](https://user-images.githubusercontent.com/13604413/159136780-321115f5-0141-410e-975f-71e33f500da1.png)

This process can take a few minutes, all Maps & Cars are now converted to server files.

> After this process is finished, a "Could not update" message may appear, this is not a problem.

Now we open the "Server" folder, where the AcServerManager is located, there is a "Content" folder, which we now upload to our Assetto Corsa Server via Drag&Drop, and overwrite our old "Content" folder:

![image](https://user-images.githubusercontent.com/13604413/159136806-a7f18a68-1dc6-43e6-bf57-6c153c439706.png)

After the content is uploaded, the carmods are installed and active after a server restart.
