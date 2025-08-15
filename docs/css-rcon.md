---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Learn how to use RCON for Counter-Strike: Source - ZAP-Hosting Documentation"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In Counter-Strike: Source, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control Counter-Strike: Source from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This is done by editing the configuration file located under **Configs** in the gameserver management panel. In the file named `server.cfg`, the following entries must be added or modified:

```cfg
rcon_password "define-your-password"
```


## Connecting via RCON

To connect to the Counter-Strike: Source server via RCON, the command-line tool **rcon-cli** is used. It can be downloaded from the official [GitHub repository](https://github.com/gorcon/rcon-cli). After downloading and installing the tool on your computer, a connection can be established using the server’s IP address, RCON port, and RCON password.

The assigned port can be found in the **Port overview** at the bottom of the settings page in the gameserver administration.  The password and port must match the values configured in the panel or configuration file. Use the following command to connect and directly execute a command:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the Counter-Strike: Source server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command                    | Description                                      |
|---------------------------|--------------------------------------------------|
| `rcon_password <password>`   | Authenticate as RCON admin                     |
| `status`               | Shows player and server information            |
| `changelevel <map>`   | Switches map                                    |
| `mp_autoteambalance 0/1` | Enables/disables team auto-balancing       |
| `mp_timelimit <minutes>` | Sets map time limit                           |
| `mp_friendlyfire 0/1`    | Enables/disables friendly fire                 |
| `mp_freezetime <seconds>` | Sets freeze time at round start               |
| `sv_cheats 0/1`         | Enables cheats (admin use only)                |
| `exec <file.cfg>`       | Executes a config file                         |
| `kick <player>`         | Kicks a player from the server                |



## Conclusion

RCON is a core tool for remote administration of Counter-Strike: Source game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
