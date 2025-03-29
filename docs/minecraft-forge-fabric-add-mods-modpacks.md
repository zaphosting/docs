---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft: Install Mods / Modpacks"
description: Information on how to install mods / modpacks on your Minecraft Forge server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Install Mods / Modpacks
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

You'll learn how to download and install a Mod / Modpack on your Minecraft server.

<InlineVoucher />

## Preparation

- A Gameserver ([you can get one here](https://zap-hosting.com/en/gameserver-hosting/))
- An FTP-Client (e.g. WinSCP, FileZilla)
- Connect to your server via FTP: ([Access via FTP](gameserver-ftpaccess.md))

## Step 1 - Finding & downloading mods or modpacks

There are many places on the internet to find mods / modpacks. The largest platform for mods and modpacks is CurseForge. Almost 99% of all mods / modpacks for Minecraft can be found there and downloaded with just a few clicks. This guide will focus on the use of CurseForge. You can search for mods [here](https://www.curseforge.com/minecraft/mc-mods) and for modpacks [here](https://curseforge.com/minecraft/modpacks).

:::note
Mods only work with a specific version of the modloader. You will need to check the mod page to see which version you need. If you are installing multiple mods, make sure they are all using the same version. In addition, Forge mods are not compatible with Fabric mods, and vice versa.
:::

Go to the page of your mod / modpack of choice and click the tab "Files".

![](https://github.com/Yoshlix/docs/assets/26007280/cc528cf6-9fc8-4524-aca0-b954e24716f8)


Find the version you want and click on it to go to the "File Details" section.

:::tip
You can filter by version and modloader using the drop-down menu at the top of the selected "Files" tab.

![](https://github.com/Yoshlix/docs/assets/26007280/6867b2f2-e9db-4a4c-be88-b9b22b800e72)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="For Mods" default>
In the "File Details" section, press the "Download" button. Save this file somewhere, you'll need it later on.

![](https://github.com/Yoshlix/docs/assets/26007280/7b84ae33-1bef-4568-80d7-ef651a654b08)

</TabItem>

<TabItem value="Modpacks" label="For Modpacks">
In the "File Details" section, scroll down until you see "Additional Files" and click on the three dots, select "Download file". Save this file somewhere, you'll need it later on.

![](https://github.com/Yoshlix/docs/assets/26007280/49fb9317-fdd3-474e-8140-b78b102c5f3d)

</TabItem>
</Tabs>

## Step 2 - Extracting files from downloads (only for modpacks)

Find the downloaded file on you pc and rightclick it, select "Extract All...". Choose a folder where you want the extracted files. Remember it!

![](https://github.com/Yoshlix/docs/assets/26007280/edbc753d-1906-4d81-9f05-354ff48ceebb)

![extract the file german version](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

Your unzipped folder should contain a mods, config and defaultconfig folder. There may also be more folders than the ones shown here. 

:::note
Some modpacks require additional steps, such as AllOfFabric6. In the case of AllOfFabric6, you will need to run "startserver.bat" (Windows) or "startserver.sh" (Linux / MacOS) to get the above named folders. The script will download the folders for you. But in most cases the folders will be there without any further steps. If there is no script in the unzipped folder, you should do a quick search on the internet how to get the serverfiles for your modpack.
:::


## Step 3 - Installing the correct server version

In the Zap-Hosting webinterface, select your Gameserver and go to "Games" in the settings section.

![](https://github.com/Yoshlix/docs/assets/26007280/47e88856-0120-408a-8bec-41e54e3b0738)

Expand the section "Available Games" and search for your modloader (Forge for Forge mods / modpacks, Fabric for Fabric mods / modpacks). Select the green download button.

![](https://github.com/Yoshlix/docs/assets/26007280/e3b4e5d3-11c9-4f09-ae46-27cea93a58a3)


Click on the drop-down menu under "Game version" and select your Minecraft version that corresponds to the correct version for your mod/modpack. For Forge, you have the option of using the latest version or the recommended version. Try the latest version first and if your server doesn't work as expected, come back and try the recommended version. Select the "Accept and Install" button.

![](https://github.com/Yoshlix/docs/assets/26007280/3530466f-bd58-4d0e-9ca3-8d964ac76d80)


:::tip
If you don't know which Minecraft version you need, go back to the "File Details" page on CurseForge. Next to the gamecontroller icon you can see the version.

![](https://github.com/Yoshlix/docs/assets/26007280/89f751c1-7179-4107-b8bc-7c4381a7d94c)

:::

When finished installing the game, you will see a blue button next to the name of your game (e.g. Forge, Fabric). Click this button to activate the game.

![](https://github.com/Yoshlix/docs/assets/26007280/53cf9569-3529-42fb-9a7d-6ae636ca4f9c)
![activate the game german version](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## Step 4 - Connecting & uploading mods / modpack via FTP

Connect to your server using your chosen FTP client. Make sure your server is stopped.

### Uploading a mod

When you are connected, navigate into your game folder (e.g. minecraft-forge, minecraft-fabric). Open the mods folder and simply drag and drop you downloaded mod files into the folder.
![](https://github.com/Yoshlix/docs/assets/26007280/8619fc4f-4fab-415a-9692-f74f8930da3f)

When uploading is finished you can start your server.

### Uploading a modpack

When you are connected, navigate into your game folder (e.g. minecraft-forge, minecraft-fabric). Delete the world, mods, config and defaultconfig folders on your server. Now upload all the folders from the unzipped folder you downloaded earlier, except the jre, libraries folders. Simply select all the folders and drag them to your server directory.

![](https://github.com/Yoshlix/docs/assets/26007280/1424a94d-aa96-40ca-8b30-7c1905e67c21)

Once the upload has completed, you can start your server.
