---
id: minecraft-bedrock-addons
title: "Minecraft: Bedrock Install Addons"
description: Information on how to install Addons on your Minecraft Bedrock server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Addon Installation
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Minecraft: Bedrock Edition has native modding support and a massive community which allows you to expand and enhance the gameplay with your friends. In this guide, we will cover the process of installing and activating an addon on your Minecraft: Bedrock server.

<InlineVoucher />

## Preperation

To install an addon map to your Minecraft: Bedrock, you need to connect to it via FTP. If you are not familiar with this, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide.

Before proceeding with installation, you will also have to find addons that you wish to install to your server. We recommend browsing on [CurseForge](https://www.curseforge.com/minecraft-bedrock) as they offer a huge library of addons and resource packs created by the community. 

## Installation

### Download the world from the server

The first thing you need to do, ist stopping the server to save all current progress.

Then you need to navigate via FTP to this location:

```

```

```
C:\Users\%username%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

### Install the Addon into the World
Now open the .mcpack file from your addon. The game should open and automatically import the addon. The world that you downloaded from your server should now be displayed, if you have not downloaded the world simply click on "Create new". Make sure that you have selected everything you want and then go to "Play". Your addons should now be available in the game. If everything works, just close Minecraft.

## Upload the world to the server

Now go back to your FTP Application (i.e Filezilla/WinSCP). Delete the world that you have downloaded before, as we will replace it. After this, upload the folder to your server again. It's important that the name hasn't been changed and is equal. One last step is still to come. In the world folder on your PC you now have the folder "behavior_packs" and / or "resource_packs"


Upload them to their correct folders on the server. These are in the same folder as the "worlds" folder. Then you have to open server.properties and adjust the line from to this: 

```
texturepack-required=false
```
```
texturepack-required=true
```

This ensures that players who join your server download the required resources. When that's done, all you have to do is tostart the server, join it and then you should be able to use your addon.

### Verify the changes

Connect to your server and verify that the addons have been installed correctly. Test the new features or resources to ensure everything is working as expected. If something doesn’t go as planned, double-check the steps and make sure the files have been uploaded correctly and the settings in the `server.properties` have been adjusted.

## Conclusion

Installing addons on your Minecraft: Bedrock Server is a great way to expand the gameplay experience and add new content. With this guide, you can easily install addons and customize your server. Have fun exploring the new possibilities!
