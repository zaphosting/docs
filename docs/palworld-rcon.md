---
id: palworld-rcon
title: "Palworld: RCON"
description: "Discover how to remotely manage Palworld servers for flexible control and monitoring without joining the game → Learn more now"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In Palworld, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control Palworld from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This is done by editing the configuration file located under **Configs** in the gameserver management panel. In the file named `PalWorldSettings.ini`, the following entries must be added or modified:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="define-your-password"
```
The assigned RCON port can be found at the bottom of the settings page in the Port overview which must be specified there.



## Connecting via RCON

To connect to the Palworld server via RCON, the command-line tool **rcon-cli** is used. It can be downloaded from the official [GitHub repository](https://github.com/gorcon/rcon-cli). After downloading and installing the tool on your computer, a connection can be established using the server’s IP address, RCON port, and RCON password.

The assigned port can be found in the **Port overview** at the bottom of the settings page in the gameserver administration.  The password and port must match the values configured in the panel or configuration file. Use the following command to connect and directly execute a command:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the Palworld server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command                                   | Description                                                 |
|------------------------------------------|-------------------------------------------------------------|
| `/Shutdown <seconds> <message>`          | Shuts down the server after a countdown with a message      |
| `/DoExit`                                | Immediately stops the server                                |
| `/Broadcast <message>`                   | Sends a message to all connected players                    |
| `/KickPlayer <SteamID>`                  | Kicks a player by SteamID                                   |
| `/BanPlayer <SteamID>`                   | Permanently bans a player                                   |
| `/TeleportToPlayer <SteamID>`            | Teleports yourself to the specified player                  |
| `/TeleportToMe <SteamID>`                | Teleports the specified player to your location             |
| `/ShowPlayers`                           | Lists all currently connected players                       |
| `/Info`                                  | Displays basic server information                           |
| `/Save`                                  | Manually saves the world                                    |



## Conclusion

RCON is a core tool for remote administration of Palworld game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
