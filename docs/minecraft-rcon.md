---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Discover how to remotely manage Minecraft servers with RCON for flexible, secure control and efficient server administration → Learn more now"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In Minecraft, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control Minecraft from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This can be done directly in the gameserver administration. Under the **Settings** section, there is an option called **RCON** that must be activated. A secure password should be set, and a valid port defined. This is done by editing the configuration file located under **Configs** in the gameserver management panel. In the file named `server.properties`, the following entries must be added or modified:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<define-your-password>
```
The assigned RCON port can be found at the bottom of the settings page in the Port overview which must be specified there.



## Connecting via RCON

To connect to the Minecraft server via RCON, the command-line tool **rcon-cli** is used. It can be downloaded from the official [GitHub repository](https://github.com/gorcon/rcon-cli). After downloading and installing the tool on your computer, a connection can be established using the server’s IP address, RCON port, and RCON password.

The assigned port can be found in the **Port overview** at the bottom of the settings page in the gameserver administration.  The password and port must match the values configured in the panel or configuration file. Use the following command to connect and directly execute a command:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the Minecraft server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command               | Description                                 |
|------------------------|---------------------------------------------|
| `list`               | Lists connected players                     |
| `say <message>`       | Broadcasts a message to all players         |
| `kick <player>`       | Kicks a player from the server              |
| `ban <player>`        | Bans a player                               |
| `pardon <player>`     | Unbans a player                             |
| `op <player>`         | Grants operator privileges to a player       |
| `deop <player>`       | Revokes operator privileges                  |
| `time set <value>`    | Sets world time (e.g., day, night, number)   |
| `gamemode <mode> <player>` | Sets a player's game mode            |
| `weather <clear/rain/thunder>` | Changes the weather               |
| `stop`                | Stops the server gracefully                 |



## Conclusion

RCON is a core tool for remote administration of Minecraft game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
