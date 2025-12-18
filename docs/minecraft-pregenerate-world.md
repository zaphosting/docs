---
id: minecraft-pregenerate-world
title: "Minecraft: Pregenerate World (Chunks)"
description: "Discover how to pre-generate Minecraft worlds efficiently with plugins or mods for smoother gameplay and optimized server performance → Learn more now"
sidebar_label: Pregenerate World (Chunks)
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Do you want to generate your world quickly, efficiently and safely in advance, rather than during gameplay? Minecraft does not offer an integrated function for this by default. However, this can be realized with specially designed plugins or mods. How to use these and what aspects you need to consider are explained in more detail below.



## Preparation

First of all, you must ensure that your server is designed for the use of plugins or mods. The use of one of the following Minecraft variants is required for use: 

- Minecraft: Forge, Minecraft Fabric (mods)
- Minecraft: Spigot, Minecraft Bukkit, Minecraft: Paper Spigot (plugins) 

If you are currently not using any of these Minecraft variants, you can use the [game switch(gameserver-gameswitch.md) option to select the desired game.


## Installation
The most common method for generating chunks in advance is to use [Chunky](https://github.com/pop4959/Chunky), which is available for numerous server implementations both as a plugin and in a mod version. In this example, chunk generation is explained and demonstrated by using Chunky.

| Variant | Download |
| -------- | ------------------------------------------------------------ |
| Mod | [Forge](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator-forge) [Fabric](https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator) |
| Plugin | [Spigot/Bukkit](https://www.spigotmc.org/resources/chunky.81534/) |

Download **Chunky** either as a plugin or mod and install it on your server. If you don't know exactly how to install [Plugins](minecraft-pluginuploader.md) or [Mods](minecraft-forge-fabric-add-mods-modpacks), the corresponding guides will help you.




## Use 

Once **Chunky** has been successfully installed, you can start generating the chunks. The process can be started with the command `chunky start`.

In case you want to interrupt the generation temporarily and continue later, you can do this with the commands `chunky pause` and `chunky continue`. To end the process completely, use `chunky cancel`. You can execute the commands either via the live console or as an operator directly in game on your server.

:::warning Excessive load
A permanent exceeding of the resource limits over a longer period of time can lead to a temporary suspension. To avoid this, chunk generation should take place at a balanced pace and scope so that the system load remains within an acceptable range.

Further information on resource limits and possible measures can be found in our [resource limit](gameserver-resourcelimit.md) guide. 
:::



## Commands

This section contains all the commands that can be used by Chunky to generate and manage chunks. 

#### Task Management

| Command         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| chunky start    | Starts a new chunk generation task from the current selection |
| chunky pause    | Pauses the current chunk generation tasks, and saves progress |
| chunky continue | Continues running current or saved chunk generation tasks    |
| chunky cancel   | Stops the current chunk generation tasks, and cancels progress |



#### Selection

| Command                                    | Description                                                  |
| ------------------------------------------ | ------------------------------------------------------------ |
| chunky world [world]                       | Sets the currently selected world                            |
| chunky shape `<shape>`                     | Set the shape to generate                                    |
| chunky center [`<x>` `<z>`]                | Sets the current center block location                       |
| chunky radius `<radius>`                   | Sets the current radius                                      |
| chunky worldborder                         | Set the center and radius to match the world border in the selected world |
| chunky spawn                               | Set the center to the spawn point                            |
| chunky corners `<x1>` `<z1>` `<x2>` `<z2>` | Set the selection by corner coordinates                      |
| chunky pattern `<pattern>`                 | Set the preferred generation pattern                         |
| chunky slection                            | Display the current selection                                |





#### Miscellaneous

| Command                   | Description                                           |
| ------------------------- | ----------------------------------------------------- |
| chunky silent             | Toggle displaying update messages                     |
| chunky quiet `<interval>` | Set the quiet interval in seconds for update messages |
| chunky progress           | Display pre-generation progress in-game for all tasks |
| chunky reload             | Reloads the configuration                             |
| chunky trim               | Delete chunks outside selection                       |



## Conclusion

By following the steps, you have successfully installed Chunky and can now generate your world (chunks) in advance. Congratulations, provided you have successfully followed everything, you should have successfully established a connection to the server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
