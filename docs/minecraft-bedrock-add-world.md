---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock: Import own World"
description: "Discover how to import and share your custom Minecraft Bedrock worlds on your server for seamless multiplayer fun → Learn more now"
sidebar_label: Import own World
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Minecraft Bedrock Edition allows you to create your own worlds and use them on your server. In this guide, we will show you how to import an own world into your Minecraft: Bedrock Server to share it with your friends.

<InlineVoucher />

## Preparation

To import a world into your Minecraft Bedrock Server, you need to connect via FTP. If you are not familiar with this, we recommend taking a look at the [FTP access](gameserver-ftpaccess.md) guide.

Make sure you have already saved the world you want to import on your computer. The world should be in a folder with the corresponding files.
If you want to upload a world from Minecraft: Bedrock single-player, you can find it at the following path:
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## Installation

### Stop the Server

Before starting the import, you need to stop your Minecraft Bedrock Server. This ensures that no data is lost and the import runs smoothly.

### Upload the World

Navigate via FTP to the directory where your server's worlds are stored. The path is usually:

```
/gXXXXXX/minecraft-bedrock/worlds
```

Here you will see the folders of all worlds currently stored on your server. Each world has a unique name.

Upload the folder of your world you want to import into the directory. Make sure the folder name is not changed, as Minecraft will not recognize the world otherwise.

Then you need to open the `server.properties` file, which is located in the server's main folder, and change the value of `Bedrock level` in the following setting to the folder name of your world:

```
level-name=Bedrock level
```
:::tip
If you want to use your default world again, you can just change the value back to `Bedrock level` and restart the server!
:::

### Start the Server

After you have successfully uploaded the world, start your server again. The imported world should now load automatically.

### Verify the Changes

Connect to your server and verify that the imported world has been loaded correctly. You should now be able to play in the new world. If something does not work as expected, double-check the steps and ensure that the world folders are named and placed correctly.

## Conclusion

Importing a world into your Minecraft Bedrock Server is a simple process that allows you to share your own creations with others. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
