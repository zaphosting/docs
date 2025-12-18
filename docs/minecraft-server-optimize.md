---
id: minecraft-server-optimize
title: "Minecraft: server performance optimisation"
description: "Discover how to optimize Minecraft servers for better performance and smoother gameplay with effective settings adjustments → Learn more now"
sidebar_label: Minecraft-Server Optimization
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### What exactly happens during optimization?

Optimization is an important point for Minecraft servers so that they can run smoothly and you should definitely take enough time for this on a public server. Only with a lot of time and tests is it possible to achieve the best result. This documentation is therefore not necessarily to be followed exactly, but rather intended as a help in going in the right direction.

In most cases, optimization changes a great number of settings on the servers, which in some cases significantly changes the behavior of the server itself. Among other things, some settings are screwed down, which relieves the server and can thus provide more performance. However, so that the general gaming experience is not influenced too much, you should always find the golden mean here.

## Vanilla

The options for optimizing a vanilla server are unfortunately very limited, as there are only a few setting options available. We try to give the vanilla server a little more power by taking the following measures:

### Visibility

One measure that is taken very often is to reduce the range of vision. The standard view range is 10 chunks, but many players play with far fewer, such as 6-8. Some players overdo it with the chunks and sometimes set this to 32 chunks as an example, which means that the server then has to load and process all of these chunks, which costs a lot of performance.

With a vanilla server, the visibility range can be adjusted in the "server.properties" config, for this the value "view-disance" must be adjusted. In order not to restrict the gaming experience too much, it is recommended to set this value to 5-6, which relieves the server by up to 50%.
We already have an entry in our documentation for this, which can be found [here](minecraft-default-config.md).

### Data-Compression

On a server there is a permanent exchange between the server and the connected players. The movements of the players themselves are transmitted to the server and the server then sends this in turn to all other players. But also player actions or events in the world, such as explosions as an example, are part of the data that is transmitted over and over again.

In order to make the regularity of this exchange a little more elegant, the size of the packed data can be doubled, which means that the server only has to do 50% of the effort to exchange the same data with the players compared to before. To do this, the value "network-compression-threshold" must also be adjusted in the "server.properties" config. The value should be set to 512 here. Here, too, we already have an entry in our documentation, which can be [here](minecraft-default-config.md).

## Forge

Similar to Vanilla, the options that can be made on the server itself are unfortunately somewhat limited, as only very small config files are available. However, the installation of additional mods is possible, which means that the server can also be somewhat dismissed.

### Preloading the chunks

One possibility to relieve the server is that chunks are preloaded. The server then only has to load the saved chunk data during later operation with players and not create and generate the entire chunks. This process can best be left to run overnight, which you start in the evening beforehand.

An additional mod must be installed for this. A very suitable mod can be installed [here](https://www.curseforge.com/minecraft/mc-mods/chunkpregenerator).
The mod can then be installed normally on the server as described in our instructions.

Before the server is restarted, you should ensure that the "max-tick-time" in the "server.properties" is set to "-1". Otherwise, the server could crash. It is also advisable that min. 8-10 GB of RAM are available, as this process unfortunately requires a lot of RAM. For this purpose, the RAM can be briefly upgraded overnight, which can then be downgraded again after this process has been completed.

:::info
Note that the mod mentioned above may not be compatible with the version of Forge you are using and the process may differ from the one described here if you are using a different mod.
:::

As soon as the server is started with the mod, the console must be opened. We would recommend creating a border for the world with a radius of 16,000 blocks. To do this, the following commands must be executed in sequence:

- worldborder center 0 0
- worldborder set 16000

:::info
If necessary, replace the coordinates to your own center of the world with the center command so as not to "cut off" your world (which may already have been built).
:::

As soon as the border has been set, the actual pre-loading can be started. To do this, the following command must be executed:

- pregen gen startWorldBorder

Now all chunks within the border are preloaded one after the other. This process can take up to 8 hours depending on the number of mods installed. The progress of this process is always outputed in the console through info messages at regular intervals. As soon as the process is finished, this is also outputed in the console!

:::info
The mod can still be installed on the server even after this process is complete. It will continue to optimize chunks during operation and will also work when there is no player on the server.
:::

### Visibility

One measure that is taken very often is to reduce the range of vision. The standard view range is 10 chunks, but many players play with far fewer, such as 6-8. Some players overdo it with the chunks and sometimes set this to 32 chunks as an example, which means that the server then has to load and process all of these chunks, which costs a lot of performance.

The visibility of a Forge server can be adjusted in the "server.properties" config, for this the value "view-disance" must be adjusted. In order not to restrict the gaming experience too much, it is recommended to set this value to 5-6, which relieves the server by up to 50%.
We already have an entry in our documentation for this, which can be found [here](minecraft-default-config.md).

### Data-Compression

On a server there is a permanent exchange between the server and the connected players. The movements of the players themselves are transmitted to the server and the server then sends this in turn to all other players. But also player actions or events in the world, such as explosions as an example, are part of the data that is transmitted over and over again.

In order to make the regularity of this exchange a little more elegant, the size of the packed data can be doubled, which means that the server only has to do 50% of the effort to exchange the same data with the players compared to before. To do this, the value "network-compression-threshold" must also be adjusted in the "server.properties" config. The value should be set to 512 here. Here, too, we already have an entry in our documentation, which can be [here](minecraft-default-config.md).

## Bukkit

### Visibility

One measure that is taken very often is to reduce the range of vision. The standard view range is 10 chunks, but many players play with far fewer, such as 6-8. Some players overdo it with the chunks and sometimes set this to 32 chunks as an example, which means that the server then has to load and process all of these chunks, which costs a lot of performance.

The visibility of a Forge server can be adjusted in the "server.properties" config, for this the value "view-disance" must be adjusted. In order not to restrict the gaming experience too much, it is recommended to set this value to 5-6, which relieves the server by up to 50%.
We already have an entry in our documentation for this, which can be found [here](minecraft-default-config.md).

### Data compression

On a server there is a permanent exchange between the server and the connected players. The movements of the players themselves are transmitted to the server and the server then sends this in turn to all other players. But also player actions or events in the world, such as explosions as an example, are part of the data that is transmitted over and over again.

In order to make the regularity of this exchange a little more elegant, the size of the packed data can be doubled, which means that the server only has to do 50% of the effort to exchange the same data with the players compared to before. To do this, the value "network-compression-threshold" must also be adjusted in the "server.properties" config. The value should be set to 512 here. Here, too, we already have an entry in our documentation, which can be [here](minecraft-default-config.md).

### Spawn-Limits

In this step, the general spawn rates of mobs on the server are reduced somewhat. There is almost no noticeable difference compared to the normal values. Nevertheless, it can happen in some places with mob farms as an example that the mob farm does not work as planned.

In order to adjust the settings for this, the config "bukkit.yml" must be edited. The following values ​​must then be adjusted at the point "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
You are of course still welcome to adjust the values ​​yourself if you wish, otherwise the above values ​​are a very good average.
:::

To further improve the spawning, the "monster-spawns" value in the "tickes-per" item should also be changed in the "bukkit.yml" config:
- monster-spawns: 2 #Default: 1

If there is a general problem with monsters as an example (as can be determined as an example in the timing report), the value can be set up to 5. The behavior of the server should then be looked at with each value in order to find the best value for your own server.

### Chunk-Processing

Minecraft works with so-called chunks. A chunk is always formed from 16x16 blocks, which are then strung together and visually represents the world for the client. The server therefore only works with chunks and then loads the required chunks into the RAM. The more chunks are loaded and permanently processed by the server, the more power the server has to provide for this, which in some places brings the server to its knees.

Servers with the standard settings will never unload loaded chunks, which means that the RAM is used very heavily in places and an enormous amount of it is required. Of course, the performance of the server is unfortunately very much reduced here, as more and more has to be processed.

To ensure that the server only loads the chunks that are currently needed, the following options in the "bukkit.yml" config under "chunk-gc" must be adjusted:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

The "period-in-ticks" option determines at what intervals in seconds the chunks should be unloaded. If desired, this value can also be reduced further, but you should note that an undesirable effect may then occur: a loop

In the case of a loop, the chunk would be unloaded, whereupon the chunk is only needed a few later, which means that the server then has to invest performance and time again to reload this chunk. This would then repeat itself over and over again, which puts a greater load on the server than if the chunks remained loaded for a minute longer as an example.

## Spigot

### Visibility

One measure that is taken very often is to reduce the range of vision. The standard view range is 10 chunks, but many players play with far fewer, such as 6-8. Some players overdo it with the chunks and sometimes set this to 32 chunks as an example, which means that the server then has to load and process all of these chunks, which costs a lot of performance.

With a spigot server, the visibility can be adjusted in the "spigot.yml" config, for this the value "view-disance" has to be adjusted. In order not to restrict the gaming experience too much, it is recommended to set this value to 5-6, which relieves the server by up to 50%.

:::info
Depending on your preference, the value can also be set to 4, which as an example helps very well against lagging when you operate farm world servers that are operated on version 1.13+
:::

### Data-Compression

On a server there is a permanent exchange between the server and the connected players. The movements of the players themselves are transmitted to the server and the server then sends this in turn to all other players. But also player actions or events in the world, such as explosions as an example, are part of the data that is transmitted over and over again.

In order to make the regularity of this exchange a little more elegant, the size of the packed data can be doubled, which means that the server only has to do 50% of the effort to exchange the same data with the players compared to before. To do this, the value "network-compression-threshold" must also be adjusted in the "server.properties" config. The value should be set to 512 here. Here, too, we already have an entry in our documentation, which can be [here](minecraft-default-config.md).

### Spawn-Limits

In this step, the general spawn rates of mobs on the server are reduced somewhat. There is almost no noticeable difference compared to the normal values. Nevertheless, it can happen in some places with mob farms as an example that the mob farm does not work as planned.

In order to adjust the settings for this, the config "bukkit.yml" must be edited. The following values must then be adjusted at the point "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
You are of course still welcome to adjust the values ​​yourself if you wish, otherwise the above values are a very good average.
:::

To further improve the spawning, the "monster-spawns" value in the "tickes-per" item should also be changed in the "bukkit.yml" config:
- monster-spawns: 2 #Default: 1

If there is a general problem with monsters as an example (as can be determined as an example in the timing report), the value can be set up to 5. The behavior of the server should then be looked at with each value in order to find the best value for your own server.

### Chunk-Processing

Minecraft works with so-called chunks. A chunk is always formed from 16x16 blocks, which are then strung together and visually represents the world for the client. The server therefore only works with chunks and then loads the required chunks into the RAM. The more chunks are loaded and permanently processed by the server, the more power the server has to provide for this, which in some places brings the server to its knees.

Servers with the standard settings will never unload loaded chunks, which means that the RAM is used very heavily in places and an enormous amount of it is required. Of course, the performance of the server is unfortunately very much reduced here, as more and more has to be processed.

To ensure that the server only loads the chunks that are currently needed, the following options in the "bukkit.yml" config under "chunk-gc" must be adjusted:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

The "period-in-ticks" option determines at what intervals in seconds the chunks should be unloaded. If desired, this value can also be reduced further, but you should note that an undesirable effect may then occur: a loop

In the case of a loop, the chunk would be unloaded, whereupon the chunk is only needed a few later, which means that the server then has to invest performance and time again to reload this chunk. This would then repeat itself over and over again, which puts a greater load on the server than if the chunks remained loaded for a minute longer as an example.

### Spawn-Range

Mobs can always spawn from players at certain intervals. Here we are turning this rate down a bit so that there are no problems with mob spawning. This setting is very important, as some of the settings for spawning have already been adjusted, which were explained above.

We change the following settings in the "spigot.yml" config in the "world-settings":
- mob-spawn-range: 3 #Default: 4

### Entity-Ranges

At this point, we now set when entities - i.e. animals and monsters - are activated. This means that the animals can move as an example or monsters can also recognize players. Basically this is activated for all mobs, but in a kind of standby. In standby mode, the mobs can continue to move and also recognize players, but as an example, the mobs can only move very slowly, which means that the server does not have to provide much power.

Here, too, the changes must be made in the "spigot.yml" config under the item "entity-activation-range". We recommend using the following values:
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

### Funnel-Optimizations

Funnels are a very important part of the game in Minecraft. But for servers these are real poison! For each set funnel, the server has to check 20 times every second whether an item is ready to be picked up. Moving the items from funnel to funnel or in a box also costs valuable work!

In order to improve the whole thing a bit, we increase the time intervals at which the server should carry out such actions. With the values ​​used here, such an action is carried out and checked every 3 seconds. The transfer rates do not change here. However, it can happen that redstone clocks that were created with hoppers may no longer work correctly.

To adjust the settings, the following values ​​must be adjusted in the "spigot.yml" config:
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

### Collisions

Since Minecraft version 1.9 there have been collisions, whereby as an example no more player can stand in player. Here we determine how often entities can collude in general. Especially in mob farms, where many mobs meet in a narrow space, this can sometimes put a heavy load on the server.


To adapt the setting, the following value must be adapted in "spigot.yml":
- max-entity-collisions: 1 #Default: 8

Since collisions have no real effect on mobs, the setting can be turned down here. This value is not used for players, only for mobs!

### Merge-Radius

The merge radius determines which items and XP are merged, which means that the server has to process fewer entities. Especially with servers where many items are on the floor, this can have a positive effect for players if this radius is increased. Here, too, the rule is that you find a good mean value, otherwise a kind of lag effect occurs again, which means that the server has to check a higher range, which then requires too much power!

In order to adapt the setting, the following values must be adapted under the item "merge-radius" in the "spigot.yml":
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

:::info
The values here should not be set higher than 8, otherwise the lagg effect mentioned above can arise!
:::

## Paper Spigot

### Visibility

One measure that is taken very often is to reduce the range of vision. The standard view range is 10 chunks, but many players play with far fewer, such as 6-8. Some players overdo it with the chunks and sometimes set this to 32 chunks as an example, which means that the server then has to load and process all of these chunks, which costs a lot of performance.

With a (paper) spigot server, the view range can be adjusted in the "spigot.yml" config, for this the value "view-disance" must be adjusted. In order not to restrict the gaming experience too much, it is recommended to set this value to 5-6, which relieves the server by up to 50%.

:::info
Depending on your preference, the value can also be set to 4, which as an example helps very well against lagging when you operate farm world servers that are operated on version 1.13+
:::

### Data-Compression

On a server there is a permanent exchange between the server and the connected players. The movements of the players themselves are transmitted to the server and the server then sends this in turn to all other players. But also player actions or events in the world, such as explosions as an example, are part of the data that is transmitted over and over again.

In order to make the regularity of this exchange a little more elegant, the size of the packed data can be doubled, which means that the server only has to do 50% of the effort to exchange the same data with the players compared to before. To do this, the value "network-compression-threshold" must also be adjusted in the "server.properties" config. The value should be set to 512 here. Here, too, we already have an entry in our documentation, which can be [here](minecraft-default-config.md).

### Spawn-Limits

In this step, the general spawn rates of mobs on the server are reduced somewhat. There is almost no noticeable difference compared to the normal values. Nevertheless, it can happen in some places with mob farms as an example that the mob farm does not work as planned.

In order to adjust the settings for this, the config "bukkit.yml" must be edited. The following values must then be adjusted at the point "spawn-limits":
- monsters: 50 #Default: 70
- animals: 10 #Default: 15
- water-animals: 3 #Default: 5
- ambient: 4 #Default: 15

:::info
You are of course still welcome to adjust the values yourself if you wish, otherwise the above values are a very good average.
:::

To further improve the spawning, the "monster-spawns" value in the "tickes-per" item should also be changed in the "bukkit.yml" config:
- monster-spawns: 2 #Default: 1

If there is a general problem with monsters as an example (as can be determined as an example in the timing report), the value can be set up to 5. The behavior of the server should then be looked at with each value in order to find the best value for your own server.

### Chunk-Processing

Minecraft works with so-called chunks. A chunk is always formed from 16x16 blocks, which are then strung together and visually represents the world for the client. The server therefore only works with chunks and then loads the required chunks into the RAM. The more chunks are loaded and permanently processed by the server, the more power the server has to provide for this, which in some places brings the server to its knees.

Servers with the standard settings will never unload loaded chunks, which means that the RAM is used very heavily in places and an enormous amount of it is required. Of course, the performance of the server is unfortunately very much reduced here, as more and more has to be processed.

To ensure that the server only loads the chunks that are currently needed, the following options in the "bukkit.yml" config under "chunk-gc" must be adjusted:
- period-in-ticks: 300 #Default: 600
- load-threshold: 300 #Default: 0

The "period-in-ticks" option determines at what intervals in seconds the chunks should be unloaded. If desired, this value can also be reduced further, but you should note that an undesirable effect may then occur: a loop

In the case of a loop, the chunk would be unloaded, whereupon the chunk is only needed a few later, which means that the server then has to invest performance and time again to reload this chunk. This would then repeat itself over and over again, which puts a greater load on the server than if the chunks remained loaded for a minute longer as an example.

### Spawn-Range

Mobs can always spawn from players at certain intervals. Here we are turning this rate down a bit so that there are no problems with mob spawning. This setting is very important, as some of the settings for spawning have already been adjusted, which were explained above.

We change the following settings in the "spigot.yml" config in the "world-settings":
- mob-spawn-range: 3 #Default: 4

### Mob-Spawner

Especially on city build servers, spawners are used very often and sometimes in large numbers. Spawners then create more and more mobs on the server, which can lead to a lot of problems.

This option adjusts the spawn behavior of the spawner somewhat so that the server activates the spawner at short intervals. To do this, the following value in "paper.yml" must be adjusted:
- mob-spawner-tick-rate: 3 #Default: 1

:::info
The value used above doesn't change behavior too much and doesn't really affect gaming behavior.
:::

### Entity-Ranges

At this point, we now set when entities - i.e. animals and monsters - are activated. This means that the animals can move as an example or monsters can also recognize players. Basically this is activated for all mobs, but in a kind of standby. In standby mode, the mobs can continue to move and also recognize players, but as an example, the mobs can only move very slowly, which means that the server does not have to provide much power.

Here, too, the changes must be made in the "spigot.yml" config under the item "entity-activation-range". We recommend using the following values:
- animals: 6 #Default: 32
- monsters: 16 #Default: 32
- misc: 2 #Default: 16
- water: 6 #Default: 6
- tick-inactive-villagers: true #Default: true

### Funnel-Optimization

Funnels are a very important part of the game in Minecraft. But for servers these are real poison! For each set funnel, the server has to check 20 times every second whether an item is ready to be picked up. Moving the items from funnel to funnel or in a box also costs valuable work!

In order to improve the whole thing a bit, we increase the time intervals at which the server should carry out such actions. With the values ​​used here, such an action is carried out and checked every 3 seconds. The transfer rates do not change here. However, it can happen that redstone clocks that were created with hoppers may no longer work correctly.

To adjust the settings, the following values must be adjusted in the "spigot.yml" config:
- hopper-transfer: 24 #Default: 8
- hopper-check: 24 #Default: 8
- hopper-amount: 3 #Default: 1

:::info
Make sure that the value "use-hopper-check" is set to "true" in the "paper.yml" config!
:::

### Collisions

Since Minecraft version 1.9 there have been collisions, whereby as an example no more player can stand in player. Here we determine how often entities can collude in general. Especially in mob farms, where many mobs meet in a narrow space, this can sometimes put a heavy load on the server.

To adapt the setting, the following value must be adapted in "spigot.yml":
- max-entity-collisions: 1 #Default: 8

Since collisions have no real effect on mobs, the setting can be turned down here. This value is not used for players, only for mobs!

### Merge-Radius

The merge radius determines which items and XP are merged, which means that the server has to process fewer entities. Especially with servers where many items are on the floor, this can have a positive effect for players if this radius is increased. Here, too, the rule is that you find a good mean value, otherwise a kind of lag effect occurs again, which means that the server has to check a higher range, which then requires too much power!

In order to adapt the setting, the following values ​​must be adapted under the item "merge-radius" in the "spigot.yml":
- item: 4.0 #Default 2.5
- exp: 6.0 #Default: 3.0

:::info
The values ​​here should not be set higher than 8, otherwise the lagg effect mentioned above can arise!
:::

### Explosions

At Paper Spigot, many parts of Minecraft servers have been reprogrammed to make the server run better. This also applies to explosions! Here, the software handles explosions better, so that larger laggs on the server are avoided.

To do this, the following value in the "paper.yml" config must be adjusted:
- optimize-explosions: true #Default: false

### Chests

Even with boxes there is a little thing that can be optimized! If a cat is sitting on the box, it cannot be opened. So that the server can check this, the server has to go through all mobs in a certain radius and check whether one of these mobs is sitting on the box, which is unfortunately very time-consuming and every time a box is opened!

The option can easily be deactivated with the following change:
- disable-chest-cat-detection: true #Default: false

### Inventories

The inventory is used a lot, but inventory is not inventory. As an example, a box or workbench is also an inventory. With this change, you can also give the server a nice look without anyone noticing! Here we basically only set the number of ticks after which the server should update each inventory.

For this, the following value must be edited in the "paper.yml" config:
- container-update-tick-rate: 3 #Default: 1

:::info
The value should not be set higher than 5, otherwise the inventory may be a bit buggy! In game modes such as SurvivalGames, where all players want to access the boxes in the middle and get the best items, the value should not be changed and should be left at "1".
:::

### Light-Updates

Here, too, Paper Spigot offers an alternative option so that the light updates in the world are carried out better. With this method, the light updates are not carried out within a tick, which can then, depending on the larger of the update, sometimes bring the server to a standstill, but outside the tick. The whole thing is called async threads in Minecraft.

To do this, the following change must also be made in the "paper.yml" config:
- queue-light-updates: true #Default: false

### Saving Chunk Data

As soon as changes have been made in a chunk, the changes are not written directly to the hard disk, but are first loaded into the RAM. Nevertheless, all changes are saved very often, which can sometimes cause extreme lag, especially when the server wants to save massive changes.

With this change we are reducing the maximum number of chunks that can be saved in one save process. By changing this option, the RAM is used more in places because the changes remain in the RAM longer!

Changes to the following setting must be made in the "paper.yml" config:
- max-auto-save-chunks-per-tick: 10 #Default: 24

### Redstone

Redstone is very often used with sometimes extremely large circuits. On public servers this is sometimes even the weakest point in almost 90% of the servers, since massive laggs can be caused with redstone. Here we also use an alternative processing of Redstone from Paper Spigot, which makes Redstone almost harmless and has the same functionality as in Vanilla!

To do this, the following setting must be made in "paper.yml":
- use-faster-eigencraft-redstone: true #Default: false

:::info
**Danger! In some situations this can change the way Redstone works very much!**
:::

<InlineVoucher />
