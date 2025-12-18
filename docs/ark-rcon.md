---
id: ark-rcon
title: "ARK: Survival Evolved: RCON"
description: "Discover how to remotely manage and control ARK: Survival Evolved servers securely without joining the game → Learn more now"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In ARK: Survival Evolved, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control ARK: Survival Evolved from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This is done by editing the configuration file located under **Configs** in the gameserver management panel. In the file named `GameUserSettings.ini`, the following entries must be added or modified:

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```
The assigned RCON port can be found at the bottom of the settings page in the Port overview which must be specified there.



## Connecting via RCON

To connect to the ARK: Survival Evolved server via RCON, the tool **ARKon** is used. It is available for download from this [Steam Thread]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)). After downloading and installing the tool on your computer, a new server entry must be created with the following information:

- Server IP address  
- RCON port
- RCON password 

After saving the connection profile, the server can be selected from the list and the connection established. Once connected, RCON commands can be executed through the graphical interface. ARKon also provides additional features specifically for ARK: Survival Evolved, such as:

- Real-time player list and online status  
- In-game chat monitoring and interaction  
- Quick-access buttons for common admin commands  
- Logging of RCON output and command history



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the ARK: Survival Evolved server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command                            | Description                                           |
|-----------------------------------|--------------------------------------------------------|
| `EnableCheats <password>`         | Enables admin mode on the server (admin commands)     |
| `AdminCheat KickPlayer <Steam64ID>` | Kicks a player                                     |
| `AdminCheat BanPlayer <Steam64ID>`  | Bans a player                                        |
| `AdminCheat UnbanPlayer <playerName>` | Unbans a player                                    |
| `AdminCheat Broadcast <message>`   | Sends a broadcast message to all players              |
| `AdminCheat SaveWorld`            | Saves the current world status                        |
| `AdminCheat SetTimeOfDay <hh:mm>` | Sets the in-game time                                  |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | Teleports a player to your location         |
| `cheat Slomo <factor>`            | Adjusts game speed                                    |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | Spawns items into your inventory        |




## Conclusion

RCON is a core tool for remote administration of ARK: Survival Evolved game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
