---
id: minecraft-worlds
title: "Minecraft: Manage world saves"
description: "Discover how to manage, convert, and back up Minecraft worlds across platforms to keep your game progress safe and seamless → Learn more now"
sidebar_label: Manage Worlds
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

At its core, Minecraft stores game saves as **worlds**, with each world being its own self-contained save. In this guide, we will explore the process of managing worlds on your Minecraft game server, including converting worlds between platforms, regenerating worlds, backing up your local and server worlds and uploading worlds to your server.

<InlineVoucher />

## Preparation

In order to manage your worlds, you will have to begin by accessing your Minecraft game server via FTP. If you are not familiar with how to use FTP, please view our [Access via FTP](gameserver-ftpaccess.md) guide.

## Comparing Platform Differences

One key difference between vanilla server and server platforms is that vanilla servers combines the normal world, the nether and the end dimensions as one whole save.

In contrast, alternate server platforms including Spigot, PaperMC and Bukkit split each dimension as seperate world save. You can view the table below which compares how an example world named **zapdocs** is treated by both types of server platforms.

| World Dimension  | Vanilla Server (Combined) | Server Platforms (Individual)  |
| ---------------- | ------------------------- | ------------------------------ |
| Normal/Overworld | zapdocs                   | zapdocs                        |
| Nether           | zapdocs                   | zapdocs_nether                 |
| The End          | zapdocs                   | zapdocs_the_end                |

## Converting Worlds

When switching between a vanilla server and a server platform, you may wish to keep your world save. Due to the differences above, you will have to adjust the file structure to either extract or merge individual worlds for the nether and end dimensions depending on action.

:::info
This is only required if you are switching between vanilla and server platforms, whilst wanting to keep and move an existing world. If you are simply moving between vanilla or across server platforms, you do not need to convert anything.
:::

:::note
Ensure that you turn the server off before proceeding to ensure that there are no conflicts or rollbacks.
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="Convert from Vanilla" default>

To convert a world from vanilla to server platform format, you will have to extract certain folders to create new individual  worlds for each dimension. Of course, it is expected that you would move all worlds onto a new server that is running a server platform such as Spigot, PaperMC or Bukkit.

Access your server through FTP and follow the path `../vanilla/[your_world]` to access the world save that you wish to convert. Locate the **DIM1** and **DIM-1** folders.

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

The **DIM1** folder is used for the end data whilst the **DIM-1** folder is used for nether data.

You will have to move each folder into its own new world folder, as following:
- For nether, create a new `[your_world]_nether` folder under the root folder. Move the **DIM-1** folder into this new seperate world folder.
- Similarly for the end, create a new `[your_world]_the_end` folder under the root folder. Move the **DIM1** folder into this new seperate world folder.

:::info
You may be required to overwrite the `DIM` folders, but that is normal as by default server platforms generate all dimensions straight away.
:::

In this example, the world is called `world` therefore new `world_nether` and `world_the_end` folders were created in the root folder, with the appropriate `DIM` folder moved into them.

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

The three individual worlds are now ready to be used on server platforms.

</TabItem>

<TabItem value="converting-to-vanilla" label="Convert to Vanilla">

To convert a world from a server platform to vanilla format, the process is practically identical but in reverse. You will have to extract data from the individual worlds for the nether and the end dimensions, to merge it into a single world format. Of course, it is expected that you would move the combined world onto a new server that is running vanilla server.

Access your server through FTP and enter the root path. Locate the three individual world folders which should be `[your_world]`, `[your_world]_nether` and `[your_world]_the_end` with `[your_world]` replacing the name of the world.

Open `[your_world]_nether` individual world folder and move the `DIM-1` folder into the main `[your_world]` folder. In this example, just like before the world is called `world` by default.

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

Now repeat the same thing for the `[your_world]_the_end` individual world folder and move `DIM1` into the main `[your_world]` folder.

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

The combined world is now ready to be used on a vanilla server.

</TabItem>
</Tabs>

## Generating Worlds

Generating worlds is simple and you can choose to either generate an entirely new world or regenerate the current world as fresh. Minecraft utilises a **seed** system where every world has a unique seed, which means that with the seed alone you can regenerate an exact starting copy of a world.

<Tabs>
<TabItem value="generating-new" label="Generate new world" default>

In order to generate a new world, simply shut down the server and connect to the server via FTP. You should also open the `server.properties` configuration file, either through the **Configs** section on your server's web interface panel or via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

Now to generate a new world, you can either:
- Through FTP, find the world that is named the same as the `level-name` parameter in the config file and delete it.
- Edit the `level-name` parameter in the config file to something different and save.

If you are looking to keep the old save, we recommend using option 2 as this way the world will remain on the server but will be "inactive".

Now start the server again and the server will notice that the world with the `level-name` name is missing and therefore it will generate a new world with a new seed.

</TabItem>

<TabItem value="regenerating-current" label="Regenerate current world">

In order to regenerate the current world, you will have to make note of the seed. This can be done through the **Console** section on your server's web interface or directly in-game, but do note you require OP (operator) if you wish to do it in-game.

Run the `/seed` command either in the console or in-game which will return the **seed** value of the current world. Note this seed down.

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

With the seed now known, you will have to adjust the `level-seed` parameter in the `server.properties` configuration file. You can do this either through the **Configs** section on your server's web interface panel or via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
Ensure that you turn the server off beforehand to ensure the file saves correctly.
:::

Change the `level-seed` parameter to the seed value and save the file. Now connect to your server through FTP.

To regenerate the world, you can either:
- Through FTP, find the world that is named the same as the `level-name` parameter in the config file and delete it.
- Edit the `level-name` parameter in the config file to something different and save.

If you are looking to keep the old save, we recommend using option 2 as this way the world will remain on the server but will be "inactive".

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

Now start the server again and the server will notice that the world with the `level-name` name is missing and therefore it will regenerate the current world using the seed that was provided through the `level-seed` parameter.

</TabItem>
</Tabs>

## Backup World Saves

### Local Saves

Local world saves are ones which you have created whilst playing in single player. These can be found within your Windows AppData, specifically in the following path:
```
../AppData/Roaming/.minecraft/saves
```

:::tip
You can easily access this path directly by pressing `CTRL` + `R` at the same time and searching for the following path in the run dialog: `%appdata%/.minecraft/saves/`. Simply press **OK** and you will be taken to the folder.

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

In this folder, you will be able to see all local world saves in one place.

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### Accessing Saves via FTP

Backing up your world save from the server is simple. Once you have connected to your game server through an FTP Client, simply access the root folder of the server platform you are utilising. World saves are directly found in there, with the default world name being `world`.

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### Automatic Backup

We also provide an option to automatically back up your world save (and configuration file) directly through our webinterface. Simply head over to your game server's webinterface and go to the **Tools->Backups** section. Here you can configure a variety of options to schedule automatic backups for your server. We provide you with 10gb free backup storage which your backups will be stored in. For further information regarding backups, have a look at our dedicated [Backups](gameserver-backups.md) guide for this topic.

## Uploading World Save

Similarly to backing up, uploading your world save is simple. First, ensure that you connect to your game server through an FTP Client. Once you are ready, head over to the root path of the server platform you are utilising.

:::info Vanilla & Server Platform Worlds
Remember that the vanilla server and server platforms store worlds in a slightly different format.

If you are moving a save from vanilla to a server platform such as PaperMC, or the other way round, please view the converting worlds section of the guide.
:::

Simply drag and drop any of your world saves into the root folder through your FTP Client and it will be uploaded to your server.

:::tip
It may be useful to copy the name of the Gamesave folder that you have uploaded as you will need this if you wish to activate it in the next section.
:::

## Activating World Save

In order to use a specific world save, you will have to edit the `server.properties` configuration file, specifically the `level-name` parameter.

You can do this either through the **Configs** section on your server's web interface panel or via FTP.

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

In the file, find the `level-name` parameter and edit it to match the folder name of your world save. If you are using a server platform, use the main folder name and not the `_nether` or `_the_end` folders.





## Conclusion

You now understand how to handle your Minecraft worlds with confidence. From converting saves between vanilla and server platforms, to generating new worlds, regenerating old ones using seeds, making reliable backups, uploading custom worlds, and activating them on your server. With this knowledge, you’re ready to manage your worlds smoothly and keep your adventures safe and organized. 

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
