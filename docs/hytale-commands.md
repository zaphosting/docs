---
id: hytale-commands
title: "Hytale: Commands List"
description: "Overview of available console and in-game commands for Hytale servers → Learn more now"
sidebar_label: Commands List
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Hytale servers provide a wide range of commands that allow administrators to manage gameplay, players, worlds, and server configuration. These commands can be executed either through the live server console or directly in-game, provided the required permissions are available.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

This page provides an overview of commonly used and officially documented Hytale server commands.

<InlineVoucher />



## Authentication

Authentication commands are required to authorize the server so it can accept player connections and interact with Hytale online services.

| Command               | Description                                                  |
| --------------------- | ------------------------------------------------------------ |
| `/auth login device`  | Starts the device-based authentication flow. The server outputs a URL and device code that must be confirmed using a Hytale account. |
| `/auth login browser` | Starts a browser-based authentication flow. Requires a graphical environment on the server. |
| `/auth status`        | Displays the current authentication status of the server.    |
| `/auth logout`        | Logs the server out and removes the active authentication session. |



## Player & Permission

These commands control administrative access and fine-grained permission assignment for users and groups.

| Command                                   | Description                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Grants operator privileges to the specified player.     |
| `/op remove <PlayerName>`                 | Revokes operator privileges from the specified player.  |
| `/perm user list <uuid>`                  | Displays all permissions directly assigned to the user. |
| `/perm user add <uuid> <permission>`      | Assigns one or more permissions directly to the user.   |
| `/perm user remove <uuid> <permission>`   | Removes specific permissions from the user.             |
| `/perm user group list <uuid>`            | Shows all permission groups the user is assigned to.    |
| `/perm user group add <uuid> <group>`     | Adds the user to the specified permission group.        |
| `/perm user group remove <uuid> <group>`  | Removes the user from the specified permission group.   |
| `/perm group list <group>`                | Lists all permissions assigned to a group.              |
| `/perm group add <group> <permission>`    | Adds permissions to a group.                            |
| `/perm group remove <group> <permission>` | Removes permissions from a group.                       |



## Whitelist

Whitelist commands restrict server access to approved players only.

| Command                          | Description                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Adds the specified player to the whitelist.      |
| `/whitelist remove <playername>` | Removes the specified player from the whitelist. |
| `/whitelist list`                | Displays all currently whitelisted players.      |
| `/whitelist enable`              | Enables whitelist enforcement.                   |
| `/whitelist disable`             | Disables the whitelist.                          |
| `/whitelist status`              | Displays the current whitelist status.           |



## World management

World commands control creation, loading, unloading, and deletion of worlds.

| Command                    | Description                                        |
| -- | -- |
| `/world create <name>`     | Creates a new world with the specified name.       |
| `/world load <name>`       | Loads an existing world and makes it active.       |
| `/world unload <name>`     | Unloads a world without deleting its data.         |
| `/world remove <name>`     | Deletes a world and all associated data.           |
| `/world setdefault <name>` | Sets the default world that loads on server start. |



## Gameplay and environment

These commands directly affect gameplay rules and world behavior.

| Command                    | Description                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Displays all currently connected players.   |
| `/tp <player> <target>`    | Teleports one player to another player.     |
| `/tp <player> <x> <y> <z>` | Teleports a player to specific coordinates. |



## Teleport & Positioning

Commands used to manage player positions and visibility.

| Command                    | Description                                 |
| -- | - |
| `/list`                    | Displays all currently connected players.   |
| `/tp <player> <target>`    | Teleports one player to another player.     |
| `/tp <player> <x> <y> <z>` | Teleports a player to specific coordinates. |



## Utility and help

Utility commands provide help and server information.

| Command           | Description                                          |
| ----- | ---- |
| `/help`           | Displays a list of available commands.               |
| `/help <command>` | Displays detailed help for a specific command.       |
| `/status`         | Shows current server status and runtime information. |



## Conclusion

The Hytale command system provides powerful tools for managing servers, players, and gameplay behavior.  By understanding and using the available commands, administrators can efficiently operate and customize their Hytale server environment.

 For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />

