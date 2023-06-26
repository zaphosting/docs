---
id: minecraft-forge-fabric-add-mods-modpacks
title: Installing mods / modpacks on your server
description: Information on how to install mods / modpacks on your Minecraft Forge server from ZAP-Hosting.com - ZAP-Hosting.com documentation
sidebar_label: Mods / Modpacks Installation
---

You'll learn how to download and install a Mod / Modpack on your Minecraft server.

Click here to get to our Minecraft servers: [Minecraft server hosting](https://zap-hosting.com/en/minecraft-server-hosting/)


## Prerequisites

- A Gameserver ([you can get one here](https://zap-hosting.com/en/gameserver-hosting/))
- An FTP-Client (e.g. WinSCP, FileZilla)
- Connect to your server via FTP ([Tutorial](https://zap-hosting.com/guides/docs/gameserver-ftpaccess))

## Step 1 - Finding & downloading mods or modpacks

There are many places on the internet to find mods / modpacks. The largest platform for mods and modpacks is CurseForge. Almost 99% of all mods / modpacks for Minecraft can be found there and downloaded with just a few clicks. In this guide we'll use CurseForge. You can search for mods [here](https://www.curseforge.com/minecraft/mc-mods) and for modpacks [here](https://curseforge.com/minecraft/modpacks).

:::note
Mods only work with a specific version of the modloader. You will need to check the mod page to see which version you need. If you are installing multiple mods, make sure they are all using the same version. In addition, Forge mods are not compatible with Fabric mods, and vice versa.
:::

Go to the page of your mod / modpack of choice and click the tab "Files".

![go to the "Files" tab](https://i.imgur.com/zcTpHW3.png)

Find the version you want and click on it to go to the "File Details" section.

:::tip
You can filter by version and modloader using the drop-down menu at the top of the selected "Files" tab.

![filter by version and modloader](https://i.imgur.com/QfTDr9B.png)
:::

<Tabs>
<TabItem value="Mods" label="For Mods" default>
In the "File Details" section, press the "Download" button. Save this file somewhere, you'll need it later on.

![download the mod file](https://i.imgur.com/9uRWWUK.png)
</TabItem>

<TabItem value="Modpacks" label="For Modpacks">
In the "File Details" section, scroll down until you see "Additional Files" and click on the three dots, select "Download file". Save this file somewhere, you'll need it later on.

![download the modpack file](https://i.imgur.com/nrG8oMp.png)
</TabItem>
</Tabs>

## Step 2 - Extracting files from downloads (only for modpacks)

Find the downloaded file on you pc and rightclick it, select "Extract All...". Choose a folder where you want the extracted files. Remember it!

![extract the file](https://i.imgur.com/Luso6Cr.png) ![extract the file german version](https://i.imgur.com/R3BZDg4.png)

Your unzipped folder should contain a mods, config and defaultconfig folder. There may also be more folders than the ones shown here. 

:::note
Some modpacks require additional steps, such as AllOfFabric6. In the case of AllOfFabric6, you will need to run "startserver.bat" (Windows) or "startserver.sh" (Linux / MacOS) to get the above named folders. The script will download the folders for you. But in most cases the folders will be there without any further steps. If there is no script in the unzipped folder, you should do a quick search on the internet how to get the serverfiles for your modpack.
:::


## Step 3 - Installing the correct server version

In the Zap-Hosting webinterface, select your Gameserver and go to "Games" in the settings section.

![select "Games"](https://i.imgur.com/ScjxJ1j.png) ![select "Games" german version](https://i.imgur.com/fU9CavE.png)

Expand the section "Available Games" and search for your modloader (Forge for Forge mods / modpacks, Fabric for Fabric mods / modpacks). Select the green download button.

![download modloader](https://i.imgur.com/DxTkPgG.png) ![download modloader german version](https://i.imgur.com/3WFXozc.png)

Click on the drop-down menu under "Game version" and select your Minecraft version that corresponds to the correct version for your mod/modpack. For Forge, you have the option of using the latest version or the recommended version. Try the latest version first and if your server doesn't work as expected, come back and try the recommended version. Select the "Accept and Install" button.

![select the right version](https://i.imgur.com/pOlLXL2.png) ![select the right version german version](https://i.imgur.com/VBVMiIy.png)

:::tip
If you don't know which Minecraft version you need, go back to the "File Details" page on CurseForge. Next to the gamecontroller icon you can see the version.

![find version](https://i.imgur.com/yt1PaO5.png)
:::

When finished installing the game, you see a blue button next to the name of your game (e.g. Forge, Fabric). Click this button to activate the game.

![activate the game](https://i.imgur.com/0f0Ygok.png) ![activate the game german version](https://i.imgur.com/gGqQpJG.png)


## Step 4 - Connecting & uploading mods / modpack via FTP

Connect to your server using your chosen FTP client. Make sure your server is stopped.

### Uploading a mod

When you are connected, navigate into your game folder (e.g. minecraft-forge, minecraft-fabric). Open the mods folder and simply drag and drop you downloaded mod files into the folder.

![uploading mod](https://i.imgur.com/OjcGP41.png)

When uploading is finished you can start your server.

### Uploading a modpack

When you are connected, navigate into your game folder (e.g. minecraft-forge, minecraft-fabric). Delete the world, mods, config and defaultconfig folders on your server. Now upload all the folders from the unzipped folder you downloaded earlier, except the jre, libraries folders. Simply select all the folders and drag them to your server directory.

![uploading files](https://i.imgur.com/K3yWtoY.png)

When uploading is finished you can start your server.
