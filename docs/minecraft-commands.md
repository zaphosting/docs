---
id: minecraft-commands
title: "Minecraft: General Server Commands"
description: "Discover how to use Minecraft commands to enhance gameplay and manage functions effectively → Learn more now"
sidebar_label: General commands
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

### What are commands?

Commands can be used in Minecraft to perform additional functions or special functions. Minecraft itself already contains over **100 commands** without any modification, which can be used to activate, manage or perform a wide variety of functions.

In this article of our documentation we will go into the most important commands, which are used and needed very often.
If a command is not listed here, the official [Minecraft-Wiki](https://minecraft-de.gamepedia.com/) is very helpful, because every part (including all commands) is explained in detail.

<InlineVoucher />

### Use

Every command always starts with a "/". So if you want to use a command, you have to open the chat in game and type the "/" first, then you can write the command itself. By pressing the TAB key a preview of all available commands is displayed. With this, commands can also be quickly and easily completed automatically as known from search queries on the Internet.

:::info
If you should execute commands via the console, the "/" is unnecessary and must be removed!

This character is only used to be able to distinguish between a normal chat message or a command in the game.
:::

### Rights / Permissions

To be able to use commands, the necessary rights are required. In Minecraft-Vanilla or Forge there is no real permission system that can be used by plugins like in Spigot. Here only the level system of the OP-rights can be used. Here you can find a tutorial about the OP-rights system:  [OP Permissions](minecraft-addop.md)

If a permission system has been installed and it is desired to assign rights to certain Minecraft commands, the respective permissions can be assigned as described below.

:::info
The syntax of the permissions for each command is always the same and can be adjusted accordingly.

If you want to assign permissions for the Locate command as an example, the following permissions must be set: ``minecraft.command.locate``
:::



## Commands

### /tp

With the **/tp** command, administrators can teleport to other players or even teleport a player to a desired target player.
The command can also be used to teleport mobs or to teleport themselves to this location by entering coordinates as an example. Further details can be found below.

**Examples:**

``/tp PlayerA``

Teleports the executor of the command to another player.

``/tp PlayerA PlayerB``

Teleports *playerA* to *playerB*. No matter who executes the command, the specified players get teleported.
If the executor of the command is *PlayerB*, *PlayerA* would be teleported to himself.

``/tp -100 75 985``

The executor of the command is teleported to the specified coordinates.
By specifying a player in front of the coordinates (``/tp PlayerA -100 75 985``), the command would teleport the specified player there instead of teleporting itself.

``/tp @s @e[type=minecraft:cow,distance=..10,limit=1]``

Teleports you to the next *cow* within a 10 block radius.
``@s`` can also be swapped with a player like *PlayerA*, which would teleport that player.

### /locate

With the **/locate** command it is possible to get the coordinates of the building you are looking for, like a Villager village.**Beispiele:**

``/locate fortress``

Finds and prints the position of the next Nether fortress when you are in the Nether.

``/locate village``

Finds and displays the position in the same way as for Netherfestaus, but in this case for a Villager village.

### /worldborder

With this command a world border can be created within the current world. This prevents players from exploring the world any further than specified with this command.

**Examples:**

``/worldborder center 0 0``

This sets the center point of the world to the coordinates 0;0, from where the radius is calculated and set.

``/worldborder set 16000``

Sets the limit to 16,000x16,000 blocks. So this would be 8,000 blocks radius in each direction. 

### /effect

This allows players (or even entities) to be given normal potion effects.
Some effects can only be obtained by using commands, like the luck effect, which hasn't been given any function yet.

:::info
The command has changed during the course of the versions and has been further expanded and modified.

The examples for the commands shown below are from the latest version and may therefore look different in older versions! 
:::

**Examples:**

``/effect give PlayerA minecraft:speed``

This will give the player *PlayerA* a speed effect of **Sss 1.

### /gamerule

This command can be used to change special settings in a world or to enable/disable special functions.
For example, as shown in the example below, it can be activated that players keep their inventory in case of death.

**Examples:**

``/gamerule keepInventory true``

This is a setting for the world which allows players to keep their inventory (including experience) in case of death.

``/gamerule mobGriefing false``

This command is used to define if monsters like a Creeper can do no damage to the world.

### /save-all

The server saves the world every 5 minutes and writes the data to disk.
With this command the world is saved immediately and the countdown for automatic saving is reset to 5 minutes.

### /tps

This command can be used to check the TPS (ticks per second) for Spigot and Paper Spigot.
TPS provides information about the performance of the server. The maximum and best TPS the server can achieve is 20.
The TPS shows the last 60 seconds, the two following values are the average of 5 and 15 minutes.

### /ban

This command can be used to exclude a player from the server, so that the player can no longer enter the server under any circumstances. The player account is banned based on its UUID.

:::info
On servers with deactivated online mode, players can change their names and regain access. In such a case, an IP ban through plugins would be the best solution.
:::

**Examples:**

``/ban PlayerA``

In this example the player *PlayerA* gets banned from the server.

``/ban @a``

By executing this command all current players on the server get banned by the server. Administrators with OP privileges are not affected and stay on the server.

### /pardon

By using this command it is possible to unban (as described one point above) so that the player can re-enter the server.

**Examples:**

``/pardon PlayerA``

The player *PlayerA* will be removed from the ban list and can re-enter the server.

### /kick

This command closes the connection between the server and the specified player. This forces the player to leave the server but he can still reconnect.

**Examples:**

``/kick PlayerA``

This throws the player *PlayerA* off the server with the message "Kicked by an operator.

``/kick PlayerA Reason``

This throws the player *PlayerA* off the server with the message "Reason".

<InlineVoucher />
