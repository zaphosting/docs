---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Discover how to remotely manage and control 7 Days to Die servers securely without in-game access for efficient server administration → Learn more now"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In 7 Days to Die, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control 7 Days to Die from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This can be done directly in the gameserver administration. Under the **Settings** section, there is an option called **RCON** that must be activated. A secure password should be set, and a valid port defined. 

The assigned RCON port can be found at the bottom of the settings page in the **Port overview**. 

Before RCON can be used, it must be enabled and configured. This is done by editing the configuration file located under **Configs** in the gameserver management panel. In the file named `serverconfig.xml`, the following entries must be added or modified:

```cfg
<property name="TelnetPassword" value="define-your-password-here"/>
```
The assigned RCON port can be found at the bottom of the settings page in the Port overview which must be specified there.



## Connecting via RCON

To connect to the 7 Days to Die server via RCON, the command-line tool **rcon-cli** is used. It can be downloaded from the official [GitHub repository](https://github.com/gorcon/rcon-cli). After downloading and installing the tool on your computer, a connection can be established using the server’s IP address, RCON port, and RCON password.

The assigned port can be found in the **Port overview** at the bottom of the settings page in the gameserver administration. The password and port must match the values configured in the panel or configuration file. Use the following command to connect and directly execute a command:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> -t telnet command
```



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the 7 Days to Die server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command                | Description                                    |
|------------------------|------------------------------------------------|
| `dm` or `debugmenu on`  | Enables developer mode                         |
| `giveme <ItemName> <count>` | Gives yourself an item                     |
| `buffplayer <ID> <buff>` | Grants a buff to a player                      |
| `tele <x> <y> <z>`     | Teleports you to coordinates                    |
| `settime <seconds>`     | Sets current in-game time                      |
| `setgameday <day>`      | Sets the current game day                      |
| `spawnentity <ID>`      | Spawns an entity by ID                         |
| `kick <player>`         | Kicks a player from the server                  |
| `ban <address>`         | Bans an IP or player                            |
| `saveworld`             | Manually saves the world state            |



## Conclusion

RCON is a core tool for remote administration of 7 Days to Die game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
