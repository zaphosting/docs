---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Learn how to use RCON for Arma Reforger - ZAP-Hosting Documentation"
sidebar_label: RCON
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In Arma Reforger, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control Arma Reforger from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This is done by editing the configuration file located under **Configs** in the gameserver management panel. In the file named `BEServer_x64.cfg`, the following entries must be added or modified:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
The assigned RCON port can be found at the bottom of the settings page in the Port overview which must be specified there.



## Connecting via RCON

To connect to the Arma Reforger server via RCON, the tool **BattleWarden** is used. It is available for download from the [official website](https://www.battlewarden.net). After downloading and installing the tool on your computer, a new connection profile must be created. The following values are required:

- Server IP address  
- RCON port 
- RCON password

Once the connection is established, RCON commands can be executed through the graphical interface. The tool also offers additional features such as player lists, live chat, and command history, depending on the game’s integration.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the Arma Reforger server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command                         | Description                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Log in as server admin                             |
| `#logout`                       | Log out of admin status                            |
| `#mission <missionName>`       | Starts a new mission on the server                 |
| `#missions`                    | Lists available missions to select from            |
| `#restart`                     | Restarts the current mission                       |
| `#reassign`                    | Moves all players back to role assignment          |
| `#kick <playerID>`             | Kicks a player                                     |
| `#exec ban <playerID>`         | Bans a player                                      |
| `#exec unban <playerID>`       | Unbans a player                                    |
| `#shutdown`                    | Shuts down the server                              |



## Conclusion

RCON is a core tool for remote administration of Arma Reforger game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂
