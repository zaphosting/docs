---
id: minecraft-default-config
title: "Minecraft: Server Config settings"
description: "Explore how to optimize Minecraft server settings for performance and stability while customizing gameplay experience → Learn more now"
sidebar_label: Server Config
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## What can I set in this config?

Minecraft already comes with a small config called *server.properties*.
The server can be fundamentally configured in. Here we describe what the individual points do and what needs to be considered when making changes. Some settings are **carefully** treated, as they sometimes drasticly influence on the performance of the server, which can lead among other things to instability of the server.

<InlineVoucher />

### view-distance

With this setting, the *maximum visibility* can be set by the server. Regardless of how the visibility was set in the client, the server never sends chunk data to the client as specified here. Here you can also lower the value to protect the performance of the server. The gaming experience is not affected even with a value of 5. Lower values then 5 are not recommended and, in rare cases, can also cause problems.
**IMPORTANT:** The value should under no circumstances (if not absolutely necessary) be set higher and should therefore be treated with caution, as this could lead to severe performance problems.

:::info
This setting is only applied to a Vanilla or Forge server.

For Bukkit, Spigot and Paper Spigot, the value must be set in their own config.
:::

### max-build-height

With this it can be determined up to which height (Y-coordinate) can be built or dismantled. Values greater than 256 are **not permitted** and are ignored by the server. The setting is therefore very useful if you want to reduce the maximum height.

### server-ip

If you have booked multiple IPs for your root or VPS, you can specify here which IP should be used. If you only have a single IP, this value can simply remain free - the same applies to a game server.

### level-seed

By default, the world generator always generates a random [seed](https://minecraft.fandom.com/wiki/Seed_(level_generation)) and thus a completely random world.
However, you can define your own seed from **letters or numbers** here, and the server will then create the corresponding world. The maximum length of **32 characters** should also not be exceeded.

:::info
There are some seed generators where you can configure a world according to your own ideas.

[This one](https://minecraft.tools/en/custom.php) Generator is one of the best and can do almost anything.
:::

### gamemode

This option allows you to set the default game mode on your server. The game mode is given to every player for the first visit to the server and can then be changed at any time using the [/gamemode](https://minecraft.fandom.com/wiki/Gameplay) command.

If you cannot identify the IDs of the respective game modes, you will find a list here:

| value | Gamemode |
|--|--|
| 0 | Survival |
| 1 | Creative |
| 2 | Adventure |
| 3 | Spectator |

### server-port

You can assign a fixed port to your server via which it will be accessible in connection with the IP. If you want to run several servers on your server as an example, a different port must be defined for each server. This option can usually remain untouched and is usually only required for a BungeeCord network.

### enable-command-block

This enables [command blocks](https://minecraft.fandom.com/wiki/Command_Block) to be activated on the server. If none are needed, the value should be set to *false* because there are some methods by which the server can be destroyed or damaged in connection with command blocks.

### allow-nether

This option can turn the Nether on or off. If deactivated, the nether can no longer be accessed via a portal. However, access is still via a plugin such as [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/).

### enable-rcon

Commands can be executed from anywhere in the console using RCON. A password is required, as far as a separate port. The settings for this are also set here in the Config. We recommend deactivating RCON to prevent intrusion by unauthorized persons.

### op-permission-level

The standard OP level can be specified here, which should be assigned to a new operator at the beginning. The respective level and the individual allocation per player is [here](minecraft-addop.md) described in more detail by us.

### enable-query

The query provides external services such as a website with separate data, such as the current number of players or a precise list of the current players. For example, you could display data on a website using PHP. Some server lists use this function so that the server can be listed correctly in the list.

### prevent-proxy-connections

This setting can be used to determine whether players can connect to a VPN / proxy. A VPN is often used to bypass an IP ban, so the option can be very useful. In some cases there is also a restriction, so that even normal connections are wrongly classified and blocked.

:::info
In order to gain extensive control over VPN / proxy connections, it is worth installing a plugin for it.

Many free plugins can be found quickly, this (but for a fee) [plugin](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates) convinced us the most and protects your server from any bot attacks.
:::

### generator-settings

As in single game mode, the server can create a world according to certain specifications. Similar to a seed, the world can be configured beforehand, after which the server creates the world. It is different, however, that it is still a random world and therefore it is not like any other.

A generation code for a flatmap would look like this:

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

If a special texture package is to be used on the server, the **direct download link** can be specified as a link. 
The pack will then be loaded and activated automatically after confirmation from the player.

### player-idle-timeout

Absent players can be kicked automatically with this option after the specified number of seconds. The option is therefore very useful when the slots of a server are very busy and you kick inactive players to make room for a new (possibly active) player.

### level-name

The world is named "world" by default. With this option a different name can now be defined, after which the world is named. If a world already exists and the name is changed here, a new world with this name is automatically created. The old world remains and is still in the previous folder.

### motd

A message can be defined here, which is displayed in the server list, if added. The message is not displayed for the direct connection unless special mods are installed in the client. The message can be provided with all possible colors and formatting that Minecraft offers.

:::info
The MOTD can be created quickly and easily using this [tool](https://minecraft.tools/en/motd.php).
:::

### force-gamemode

This determines whether the player should always be set to the standard game mode as described above when entering the server. Regardless of which game mode the server was left with, the standard game mode is always set.

### hardcore

The hardcore mode ensures that players are banished upon death or put into spectator mode. If so desired, a new world **must be** created as the hardcore mode has an impact on the world generation.

### white-list

This activates the [Whitelist](https://minecraft.fandom.com/wiki/Commands/whitelist), whereby only players who are on the list get access. The commands used to whitelist players, remove whitelisted players, and more are displayed on that page.

### broadcast-console-to-ops

Determines whether operators receive a chat notification when commands are executed in the game.

### pvp

With this the PVP can be deactivated or activated on the server. If PVP is deactivated, players can no longer harm each other. This option does not prevent the deliberate placement of lava as an example. So players can continue to attack via detours.

### spawn-npcs

In villages you meet villagers, if activated here. If this option is set to *false*, there will be no villagers on the entire server. The option is very useful if you only want to limit trading to players and thus strengthen the economy of an economic server.

### generate-structures

This setting affects the world generator again. It can be used to determine whether structures should be created in the world. This means villages or temples as an example.

### spawn-animals

Specifies whether animals should be spawned on the server. You can find a list of all animals
[here](https://minecraft.fandom.com/wiki/Animal). 

### snooper-enabled

If activated, the server sends anonymous data to Mojang. The data will be used for further development and optimization. This option has no impact on server performance.

### difficulty

This allows the general difficulty to be determined on the server. Depending on the example, mobs do more or less damage. Precise information on this and the possible options can be found [here](https://minecraft.fandom.com/wiki/Difficulty).

### network-compression-threshold

The value defines the size from which data is sent or compressed between the client and server. A small value like something of the standard value 256, data from client and server are exchanged approx. 20 times a second. A value of 512 is advisable to relieve the performance of the server and does not have any negative effects. The value should **never be set** higher than 1024.

**This setting should be treated with caution, as wrong values ​​can cause extensive problems for players and irreparable damage to the world.**

### level-type

Determines the world type, according to which the world generator creates a world. After changing this option, a **new world** should be **created**. Otherwise there will be unwanted cuts in the world where new chunks will be generated.

| Value | Meaning |
|--|--|
| DEFAULT | Normal world with mountains, valleys, villages, etc |
| FLAT | A completely flat world where only villages are included |
| LARGEBIOMES | Similar to a normal world, only with larger biomes |
| AMPLIFIED | Also similar to a normal world, only very jagged and big differences in height |
| BUFFET | A buffet-world, where the settings by selecting *generator-settings* are set |

### spawn-monsters

Determines whether monsters should be spawned on the server. You can find a list of all monsters 
[here](https://minecraft.fandom.com/wiki/Mob). 

### max-tick-time

This regulates the maximum length of a tick. Different tasks from the server are assigned to a tick. If a tick lasts longer than 60 seconds by default, the server is automatically stopped.

For Forge servers, this is sometimes very annoying, since mods often place high demands and thus take a little more time. In such a case, the value can be set to *-1*, which deactivates the automatic stop.

### max-players

Sets the number of slots that can be occupied and the maximum number of players that can be on the server.

### enforce-whitelist

This option causes the whitelist to accept any changes directly. Normally the whitelist has to be reloaded before it is activated.

### online-mode

This can be used to determine whether players can access the server without a premium account. It should be noted that if it is a public server, players can gain rights because players can choose the name of the operator and the server **can only** match the name.

A player would then gain unauthorized rights. To prevent this, you should urgently install a password plug-in on a plug-in-capable server such as Spigot.

### allow-flight

This deactivates or activates Minecraft's own AntiCheat in relation to flying. Mostly through hack clients it is possible for players to fly without permission.

:::info
However, we always recommend installing an AntiCheat in the form of a plugin!
:::

### function-permission-level

Specifies the OP level with which commands can be executed. At level 4, these can stop the server as an example or kick or ban players.

<InlineVoucher />
