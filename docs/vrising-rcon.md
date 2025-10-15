---
id: vrising-rcon
title: "V Rising: RCON"
description: "Discover how to remotely manage and control V Rising servers efficiently without in-game connection → Learn more now"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In V Rising, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control V Rising from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This is done by editing the configuration file located under **Configs** in the gameserver management panel. In the file named `ServerHostSettings.json`, the following entries must be added or modified:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

The assigned RCON port can be found at the bottom of the settings page in the Port overview which must be specified there.



## Connecting via RCON

V Rising server via RCON, the command-line tool **rcon-cli** is used. It can be downloaded from the official [GitHub repository](https://github.com/gorcon/rcon-cli). After downloading and installing the tool on your computer, a connection can be established using the server’s IP address, RCON port, and RCON password.

The assigned port can be found in the **Port overview** at the bottom of the settings page in the gameserver administration.  The password and port must match the values configured in the panel or configuration file. Use the following command to connect and directly execute a command:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the V Rising server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command                                     | Description                                                   |
|--------------------------------------------|---------------------------------------------------------------|
| `adminauth`                                | Enables admin rights for your character (in-game only)        |
| `admindeauth`                              | Disables admin rights                                          |
| `banuser <SteamID>`                        | Bans a player permanently                                     |
| `unbanuser <SteamID>`                      | Unbans a previously banned player                              |
| `kick <playername>`                        | Immediately kicks a player from the server                    |
| `give <ItemName> <Amount>`                 | Gives items directly to your inventory                        |
| `teleport <X> <Y>`                         | Teleports your character to given coordinates                 |
| `teleportplayer <name> <X> <Y>`            | Teleports another player to specific coordinates              |
| `changehealth <value>`                     | Sets your current health to a specific value                  |
| `spawn <EntityName> <Amount>`              | Spawns NPCs, creatures, or other entities                     |



## Conclusion

RCON is a core tool for remote administration of V Rising game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
