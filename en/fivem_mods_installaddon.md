---
id: fivem_mods_installaddon
title: FiveM: Install Addon Carmods on Server
description: Information on how to install Addon Carmods on your FiveM server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Install Addon Carmods
---

## Connect with FTP

First you should connect to your server via FTP, you can use our [FTP-Tutorial](gameserver_ftpaccess.md).

## Preparation

For this tutorial we will use the [rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest) tool, this simplifies the process a lot, for this we download the "NConvert.zip" and "rpf2fivem.zip" folders from the "Releases" section:

![image](https://user-images.githubusercontent.com/13604413/159167695-526d6441-d8e5-4387-adf3-c7a27de6919a.png)

Now we first unpack rpf2fivem into an empty folder:

![image](https://user-images.githubusercontent.com/13604413/159167715-0153b838-5d6a-4650-bccf-d6b353fe3e58.png)

Then we open the NConvert zip file and copy the "NConvert" folder into the same folder:

![image](https://user-images.githubusercontent.com/13604413/159167737-4e050771-d8c6-4d80-bc5b-2c591355c04d.png)


Now we can open the `rpf2fivem.exe`!


## Downloading Mods

To install mods via rpf2fivem we have to add direct links in it, e.g. from gta5-mods.com, here we just choose the carmod we want to have and click on "Download".

Now we just have to right-click on the download button and press "Copy link address", which we then paste into the top left of rpf2fivem:

![image](https://user-images.githubusercontent.com/13604413/159167811-0cfd1264-e0af-4b78-aa98-c85d28884d20.png)

![image](https://user-images.githubusercontent.com/13604413/159167824-56daa647-0abc-4741-aeeb-ff6c8a7d3d7d.png)


Here we can type in our own resource name and press "Add to queue".

If further mods are to be downloaded, they can simply be added in the same way, several carmods can be installed at the same time:

## Convert Mods

Now that we have a list of mods, we can simply press the "Start" button.

> Note: the 'compress/downsize textures' tick should always be set to prevent Carmods from having texture errors in FiveM.

![image](https://user-images.githubusercontent.com/13604413/159167849-ddce8a9b-efbb-4572-b914-eee4c49149ef.png)

Now the carmods are downloaded and prepared for FiveM.

## Upload resources

After rpf2fivem is finished, the carmods can be found in the "rpf2fivem" folder:

![image](https://user-images.githubusercontent.com/13604413/159167879-bea87ed6-3458-4c61-acaf-05e0b92e6039.png)

We can now simply upload these via [FTP](fivem_installresources.md), a `servercfg.txt` is also created in the rpf2fivem folder which contains the entries to enter the carmods directly into the server.cfg, we can simply copy these entries into the server.cfg.


Done! The Carmods are now installed on your server, after a restart of the server they can be used.
