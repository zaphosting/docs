---
id: minecraft_default_config
title: Server Config 
sidebar_label: Server Config
---

## What can I set in this Config?

Minecraft already comes with a small config called *server.properties*. In this Config the server can be configured. We describe here what the individual points do and what to consider when making changes. Some settings should be treated **carefully**, as they can have a drastic effect on the performance of the server, which can lead to instability of the server.

### view-distance

With this setting, the *maximum visibility can be set by the server*. Regardless of how the visibility has been set in the client, the server will never send chunk data to the client as defined here. You can also reduce this value to reduce the performance of the server.
The gaming experience is not affected even if the value is set to 5. Lower values are not recommended and may cause problems in rare cases.

**IMPORTANT:** The value should not be increased under any circumstances (unless absolutely necessary) and should therefore be treated with caution, as it could cause severe performance problems.

> This setting is only used with a Vanilla or Forge server.
> For Bukkit, Spigot and Paper Spigot the value must be set in their own Config.

### max-build-height

Here you can define up to which height (Y-coordinate) you can build or dismantle.
Values greater than 256 are **not allowed** and are ignored by the server.
The setting is therefore very useful if you want to reduce the maximum height.

### server-ip

If you have booked multiple IPs for your root or vServer, you can specify here which IP should be used.
If you have only one IP, this value can simply remain free - the same applies to a game server.

### level-seed

By default, the world generator always generates a random (seed) [https://minecraft.gamepedia.com/Seed_(level_generation)] and thus a completely random world. However, you can specify your own seed of **letters or numbers** here, whereupon the server then creates the corresponding world. The maximum length of **32 characters** should also not be exceeded.

> There are some seed generators where you can configure a world according to your own ideas.
> (This one) [https://minecraft.tools/en/custom.php] Generator is one of the best and allows almost everything.

### gamemode

With this option you can set the default game mode on your server. The game mode is given to each player when they first visit the server and can be changed at any time thereafter using the (/gamemode) [https://minecraft.gamepedia.com/Gameplay#Game_modes] command.

If you do not know the IDs of the respective game modes, you will find a list here:

| Value | Game Mode |
|--|--|
| 0 | Survival |
| 1 | Creative |
| 2 | Adventure |
| 3 | Spectator |

### server-port

Here you can assign a fixed port to your server, over which it will be accessible in connection with the IP. If you want to run several servers on your root server, you have to define a different port for each server. This option can usually be left untouched and is usually only needed for a BungeeCord network.

### enable-command-block

This allows (command blocks) [https://minecraft.gamepedia.com/Command_Block] to be activated on the server.
If none are needed, the value should be set to *false*, as there are some methods that can destroy or damage the server in connection with command blocks.

### allow-nether

This option can be enabled or disabled Nether.
If deactivated, the Nether can no longer be entered via a portal.
However, access is still possible via a plugin like (Multiverse Core) [https://www.spigotmc.org/resources/multiverse-core.390/].

### enable-rcon

Via RCON, commands can be executed from anywhere in the console.
A password is required for this, if a separate port is available. The settings for this are also set here in the Config.
We recommend to deactivate RCON to prevent unauthorized access.

### op-permission-level

Here you can define the default OP level that should be assigned to a new operator at the beginning.
The respective levels and the individual allocation per player is described in more detail (here) [https://docs.zap-hosting.com/docs/en/minecraft_addop/].

### enable-query

The query provides external services such as a website with separate data, such as the current number of players or an exact listing of current players.
For example, you could use PHP to display data on a website. Some serverlists use this function so that the server can be listed correctly in the list.

### prevent-proxy-connections

This setting can be used to determine whether players can connect to a VPN/proxy.
A VPN is often used to bypass an IP ban, so this option can be very useful.
Sometimes there is also a restriction, so that even normal connections are wrongly classified and thus blocked.

> To gain extensive control over VPN/Proxy connections, you can install a plugin for it.
> Many free plugins can be found quickly, but this (but paid) (plugin) [https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates] has convinced us the most and also secures your server from any bot attacks.

### generator-settings

As in the single game mode, the server can create a world according to certain specifications.
Similar to a seed, the world can be configured beforehand, after which the server creates the world.
The difference is, however, that it is still always a random world and therefore it is not like any other.

A generation code would look like this for a flatmap:

`{"biome": "minecraft:plains", "layers":[{"block": "minecraft:bedrock", "height":1}},{"block": "minecraft:dirt", "height":2},{"block": "minecraft:grass_block", "height":1}],structures:{"village":}}}

### resource-pack

If a special texture package is to be used on the server, the **direct download can be specified as link**.
The pack will then be loaded and activated automatically after the player confirms the download.

### player-idle-timeout

Absent players can be automatically kicked after the specified number of seconds with this option.
This option is therefore very helpful if the slots of a server are very busy and you kick inactive players to make room for a new (possibly active) player.

### level-name

By default the world is named "world". With this option, you can specify a different name for the world.
If a world already exists and the name is changed here, a new world with this name is automatically created.
The old world will be retained and will still be in the previous folder.

### motd

Here you can define a message which will be displayed in the server list, if added. The message will not be displayed during direct connection, if no special mods are installed in the client.
The message can be given all the colors and formatting Minecraft offers.

> The MOTD can be created quickly and easily using this (tool) [https://minecraft.tools/en/motd.php].

### force-gamemode

This determines whether players should always be set to the default game mode as described above when entering the server.
Regardless of which game mode the server was left with, the default game mode is always set.

### hardcore

Hardcore mode ensures that players are banished on death or put into spectator mode.
If this is desired, **a new world **must be created, as Hardcore Mode has an impact on the world generation.

### white-list

This activates the (whitelist) [https://minecraft.gamepedia.com/Commands/whitelist], which means that only players who are on the list will have access. We explain the handling of the whitelist (here) [http://bald.de].

### broadcast-console-to-ops

Determines whether operators will receive a chat notification when commands are executed in the game.

### pvp

This allows PVP to be activated or deactivated on the server. If PVP is deactivated, players can no longer harm each other.
This option does not prevent the wilful placement of lava as an example. Players can still attack each other via detours.

### spawn-npcs

In villages you meet villagers, if activated here.
If this option is set to *false*, there will be no more villagers to find on the whole server.
This option is very useful if you want to limit trade to players only and thus strengthen the economy of a business server.

### generate-structures

This setting again influences the world generator. This can be used to determine whether structures should be created in the world.
This means villages or temples as an example.

### spawn-animals

Determines whether animals should be spawned on the server.
A list of all animals can be found (here) [https://minecraft.gamepedia.com/Animal]. 

### snooper-enabled

If activated, the server sends anonymous data to Mojang.
The data is used for further development and optimization.
This option has no influence on the performance of the server.

### difficulty

This can be used to define the general difficulty on the server.
Depending on this, mobs cause more or less damage as an example.
Detailed information about this and the possible options can be found (here) [https://minecraft.gamepedia.com/Difficulty].

### network-compression-threshold

The value determines the size from which data is sent or compressed between client and server.
A small value like the default value 256 means that data is exchanged between client and server about 20 times per second.
To reduce the performance of the server a value of 512 is recommended and does not affect the performance of the server.
The value should **never** be set higher than 1024.

**This setting should be handled with care, as incorrect values can cause far-reaching problems for players and irreparable damage to the world.**

### level-type

Determines the world type according to which the world generator creates a world.
After changing this option, a **new world should be created**. Otherwise there will be unwanted cuts in the world where new chunks are generated.

| Value | Meaning |
|--|--|
| DEFAULT | Normal world with mountains, valleys, villages |
| FLAT | A completely flat world, where only villages are included |
| LARGEBIOMES | Similar to a normal world, but with larger biomes |
| AMPLIFIED | Also similar to a normal world, only very fissured and with big differences in height |
| BUFFET | A buffet world, whereby the settings are determined via the *generator-settings* option |

### spawn-monsters

Determines whether monsters should be spawned on the server.
A list of all monsters can be found (here) [https://minecraft.gamepedia.com/Mob#Hostile_mobs]. 

### max-tick-time

This controls the maximum length of a tick. Different tasks from the server are assigned to a tick.
If a tick lasts longer than 60 seconds by default, the server is automatically stopped.

For Forge servers this is sometimes very annoying, because mods often have high demands and therefore need a bit more time.
In such a case you can set the value to *-1*, which disables the automatic stop.

### max-players

Sets how many slots can be occupied and thus the maximum number of players that can be on the server.

### enforce-whitelist

This option causes the whitelist to accept any changes directly.
Normally, the whitelist must be reloaded before it is activated.

### online-mode

Here you can determine whether players without a premium account can access the server.
Please note that if it is a public server, players will be able to get rights, because players can choose the name of the operator and the server **only** can match the name.

This would then allow a player to gain access to the rights without permission.
To prevent this, you should install a password plugin for a plugin-enabled server like Spigot.

### allow-flight

This will disable or enable Minecraft's own AntiCheat in relation to flying.
Mostly through hack clients, players are able to fly without permission.

> Nevertheless, we recommend to install an AntiCheat in form of a plugin in any case!

### function-permission-level

Determines the OP level at which commands can be executed. At level 4 they can stop the server as an example or kick or ban players.
