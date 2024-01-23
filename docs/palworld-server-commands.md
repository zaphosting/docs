---
id: palworld-server-commands
title: Palworld Server Commands
description: Information on useful commands for Palworld game from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Server Commands
---

Palworld servers all come with a set of useful built-in server commands which can be used in-game and through your server console. In this guide, we will explore many of these commands providing descriptions and usage examples for each.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SDZC4-FEdNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Setting up Admin

You must first set an admin password for your Palword server and add yourself as an admin in-game before being able to access the admin server commands in the next section.

You can set your server's admin password through the **Settings** tab on your server's webinterface or via the **PalWorldSettings.ini** configuration file. Once set, you can use the `/AdminPassword [password]` command in-game to add yourself as admin.

:::tip
We highly recommend that you take a look at our [Palworld Setup Admin guide](palworld-admin.md) which is a dedicated guide for this topic and provides more in-depth details regarding setting an admin password and adding users as admin.
:::

## Available Commands

The table below consists of a range of server commands for Palworld, alongside their usage examples and descriptions, that can be used in-game and through the server console.

Where the `steamid` parameter is needed, you can copy the SteamID of a player easily by right-clicking twice on the player list.

:::info
You must set up an Admin Password and grant yourself permission using the `/AdminPassword` command before you can being using these commands. Otherwise, you will receive a permission error. Read the next section in this guide to understand how to do this.
:::

| Command Syntax                 | Accepted Values  | Description                                                             | 
| ------------------------------ | ---------------- | ----------------------------------------------------------------------- | 
| /Shutdown [secs] [message]     | Integer, String  | Shut down the server after specified seconds, with the included message | 
| /DoExit                        | -                | Force stops the server                                                  | 
| /Broadcast                     | String           | Send a message to all players currently on the server                   | 
| /KickPlayer [steamid]          | String           | Kick the target player from the server                                  | 
| /BanPlayer [steamid]           | String           | Ban the target player from the server                                   | 
| /TeleportToPlayer [steamid]    | String           | Teleport to the target player                                           | 
| /TeleportToMe [steamid]        | String           | Teleport the target player to you                                       | 
| /ShowPlayers                   | -                | Provide information about all currently connected players               | 
| /Info                          | -                | Provide server information                                              | 
| /Save                          | -                | Save the current world data                                             |

:::note
You cannot currently unban a person in-game as there is no command available. You would have to manually edit the `banlist.txt` file in your server directory if you wish to unban a player.
:::