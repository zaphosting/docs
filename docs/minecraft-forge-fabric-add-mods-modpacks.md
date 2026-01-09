---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Install Mods / Modpacks"
description: "Discover how to download and install Minecraft mods and modpacks to enhance your server gameplay → Learn more now"
sidebar_label: Install Mods / Modpacks
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## Introduction

You'll learn how to download and install a Mod / Modpack on your Minecraft server.

<InlineVoucher />

## Preparation

- A Gameserver ([you can get one here](https://zap-hosting.com/en/gameserver-hosting/))
- An FTP-Client (e.g. WinSCP, FileZilla)
- Connect to your server via FTP: ([Access via FTP](gameserver-ftpaccess.md))



## Finding & downloading mods or modpacks

There are many places on the internet to find mods / modpacks. The largest platform for mods and modpacks is CurseForge. Almost 99% of all mods / modpacks for Minecraft can be found there and downloaded with just a few clicks. This guide will focus on the use of CurseForge. You can search for mods [here](https://www.curseforge.com/minecraft/mc-mods) and for modpacks [here](https://curseforge.com/minecraft/modpacks).

:::note
Mods only work with a specific version of the modloader. You will need to check the mod page to see which version you need. If you are installing multiple mods, make sure they are all using the same version. In addition, Forge mods are not compatible with Fabric mods, and vice versa.
:::

Go to the page of your mod / modpack of choice and click the tab "Files".

![](https://screensaver01.zap-hosting.com/index.php/s/abryep5KdQcqpAi/preview)


Find the version you want and click on it to go to the "File Details" section.

:::tip
You can filter by version and modloader using the drop-down menu at the top of the selected "Files" tab.

![](https://screensaver01.zap-hosting.com/index.php/s/HoJYzW7bkC4Z6oL/preview)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="For Mods" default>
In the "File Details" section, press the "Download" button. Save this file somewhere, you'll need it later on.

![](https://screensaver01.zap-hosting.com/index.php/s/7ZcEHsmmqZWdZB5/preview)

</TabItem>

<TabItem value="Modpacks" label="For Modpacks">
In the "File Details" section, scroll down until you see "Additional Files" and click on the three dots, select "Download file". Save this file somewhere, you'll need it later on.

![](https://screensaver01.zap-hosting.com/index.php/s/YzH5Gz4w3yJZjx3/preview)

</TabItem>
</Tabs>

## Step 2 - Extracting files from downloads (only for modpacks)

Find the downloaded file on you pc and rightclick it, select "Extract All...". Choose a folder where you want the extracted files. Remember it!

![](https://screensaver01.zap-hosting.com/index.php/s/y9SWDpX2HYgekbQ/preview)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Your unzipped folder should contain a mods, config and defaultconfig folder. There may also be more folders than the ones shown here. 

:::note
Some modpacks require additional steps, such as AllOfFabric6. In the case of AllOfFabric6, you will need to run "startserver.bat" (Windows) or "startserver.sh" (Linux / MacOS) to get the above named folders. The script will download the folders for you. But in most cases the folders will be there without any further steps. If there is no script in the unzipped folder, you should do a quick search on the internet how to get the serverfiles for your modpack.
:::


## Step 3 - Installing the correct server version

In the Zap-Hosting webinterface, select your Gameserver and go to "Games" in the settings section.

![](https://screensaver01.zap-hosting.com/index.php/s/Ne5B9CnHrbwgmfW/preview)

Expand the section "Available Games" and search for your modloader (Forge for Forge mods / modpacks, Fabric for Fabric mods / modpacks). Select the green download button.

![](https://screensaver01.zap-hosting.com/index.php/s/dnBCddmXGAMpMj8/preview)


Click on the drop-down menu under "Game version" and select your Minecraft version that corresponds to the correct version for your mod/modpack. For Forge, you have the option of using the latest version or the recommended version. Try the latest version first and if your server doesn't work as expected, come back and try the recommended version. Select the "Accept and Install" button.

![](https://screensaver01.zap-hosting.com/index.php/s/gCdcwLzc4Hxptqp/preview)


:::tip
If you don't know which Minecraft version you need, go back to the "File Details" page on CurseForge. Next to the gamecontroller icon you can see the version.

![](https://screensaver01.zap-hosting.com/index.php/s/9TsCBRP9PGQL2fC/preview)

:::

When finished installing the game, you will see a blue button next to the name of your game (e.g. Forge, Fabric). Click this button to activate the game.

![](https://screensaver01.zap-hosting.com/index.php/s/YzzBzSJjnsaqKS2/preview)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Step 4 - Connecting & uploading mods / modpack via FTP

Connect to your server using your chosen FTP client. Make sure your server is stopped.

### Uploading a mod

When you are connected, navigate into your game folder (e.g. minecraft-forge, minecraft-fabric). Open the mods folder and simply drag and drop you downloaded mod files into the folder.
![](https://screensaver01.zap-hosting.com/index.php/s/Zwm9SYdgK6MKBdz/preview)

When uploading is finished you can start your server.

### Uploading a modpack

When you are connected, navigate into your game folder (e.g. minecraft-forge, minecraft-fabric). Delete the world, mods, config and defaultconfig folders on your server. Now upload all the folders from the unzipped folder you downloaded earlier, except the jre, libraries folders. Simply select all the folders and drag them to your server directory.

![](https://screensaver01.zap-hosting.com/index.php/s/PEyqrSES4xPGaFz/preview)

Once the upload has completed, you can start your server.



## Popular Mods

Still looking for the perfect mods for your server? Browse through our carefully curated list of the most popular and highly recommended mods to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={mods} />

## Popular Modpacks

Still looking for the perfect mods for your server? Browse through our carefully curated list of the most popular and highly recommended mods to enhance your gameplay and give your server the finishing touch it deserves. Get inspired and find exactly the additions that fit your project.

<SearchableItemList items={modpacks} />

<InlineVoucher />
