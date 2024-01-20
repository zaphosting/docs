---
id: palworld-server-commands
title: Palworld Server Commands
description: Information on useful commands for Palworld game from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Server Commands
---

Palworld servers all come with a set of useful built-in server commands which can be used in-game and through your server console. In this guide, we will explore many of these commands providing descriptions and usage examples for each.

<iframe width="560" height="315" src="https://www.youtube.com/embed/SDZC4-FEdNM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Available Commands

The table below consists of a range of server commands for Palworld, alongside their usage examples and descriptions, that can be used in-game and through the server console.

Where the `steamid` parameter is needed, you can copy the SteamID of a player easily by right-clicking twice on the player list.

:::info
You must set up an Admin Password and grant yourself permission using the `/AdminPassword` command before you can being using these commands. Otherwise, you will receive a permission error. Read the next section in this guide to understand how to do this.
:::

| Command Syntax                 | Accepted Values  | Description | 
| ------------------------------ | ---------------- | ----------- | 
| /Shutdown [secs] [message]     | Integer, String  | Shut down the server after specified seconds, with the included message.         | 
| /DoExit                        | -                | Force stops the server         | 
| /Broadcast                     | String           | Send a message to all players currently on the server        | 
| /KickPlayer [steamid]          | String           | Kick the target player from the server         | 
| /BanPlayer [steamid]           | String           | Ban the target player from the server         | 
| /TeleportToPlayer [steamid]    | String           | Teleport to the target player         | 
| /TeleportToMe [steamid]        | String           | Teleport the target player to you         | 
| /ShowPlayers                   | -                | Provide information about all currently connected players         | 
| /Info                          | -                | Provide server information         | 
| /Save                          | -                | Save the current world data         |

:::note
You cannot currently unban a person in-game as there is no command available. You would have to manually edit the `banlist.txt` file in your server directory if you wish to unban a player.
:::

## Setting up an Admin Password

You will have to access your server's **PalWorldSettings.ini** configuration file.

Once you have opened the file, search for the `AdminPassword` parameter in the file and move to it. In this field simply set a password that you wish to use as the admin password. Ensure that you save the file and close it.

:::tip
We recommend you to use our [Palworld Configuration guide](palworld-configuration.md) to understand how to access your configuration and edit your admin password more easily.
:::

Finally, restart your Palworld server and the next time it loads the admin password will be set. Now simply run the `/AdminPassword` command followed with the password that you have previously set, and you will be auhenticated and will have access to server commands.