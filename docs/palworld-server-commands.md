---
id: palworld-server-commands
title: "Palworld: Palworld Server Commands"
description: "Discover how to manage Palworld servers effectively using built-in commands for admin control and gameplay → Learn more now"
sidebar_label: Server Commands
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Palworld servers all come with a set of useful built-in server commands which can be used in-game and through your server console. In this guide, we will explore many of these commands providing descriptions and usage examples for each.

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="Set up your PALWORLD server in just one MINUTE!" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

## Setting up Admin

You must first set an admin password for your Palword server and add yourself as an admin in-game before being able to access the admin server commands in the next section.

You can set your server's admin password through the **Settings** tab on your server's webinterface or via the **PalWorldSettings.ini** configuration file. Once set, you can use the `/AdminPassword [password]` command in-game to add yourself as admin.

:::tip
We highly recommend that you take a look at our [Setup Admin](palworld-admin.md) guide which is a dedicated guide for this topic and provides more in-depth details regarding setting an admin password and adding users as admin.
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

<InlineVoucher />
