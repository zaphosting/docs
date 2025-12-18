---
id: redm-rcon
title: "RedM: RCON"
description: "Discover how to remotely manage RedM game servers securely and efficiently without being in-game → Learn more now"
sidebar_label: RCON
services:
  - gameserver-redm
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows access to the server console without direct interaction with the server environment. This makes it possible to execute administrative commands, adjust configuration parameters, or retrieve server status information.

In RedM, RCON is used to execute server-side commands, such as managing players, changing gameplay settings, or accessing diagnostic outputs. The connection is protected by a password and operates over a specified port, accessible via compatible RCON clients.

A key advantage of RCON is that it enables server management **without having to be connected to the game as a player**. Server administrators can monitor and control RedM from external tools, command-line interfaces, or web dashboards, offering flexibility and convenience for remote operation.

![img](https://screensaver01.zap-hosting.com/index.php/s/iEAHnZ6FnQdWn7e/preview)

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled and configured. This is done in the **CFG Editor** section of the gameserver administration in **txAdmin**. To do so, make sure the following lines are added or adjusted in the configuration:

```cfg
ensure rconlog
set rcon_password "your-secure-password"
```



## Connecting via RCON

To connect to the GameXY server via RCON, the Windows tool **IceCon** is used. It is available for download on the [GitHub repository](https://github.com/icedream/icecon). After installing the tool on your computer, create a new connection with the following information:

- **Server IP address**  
- **Game port**
- **RCON password**

Once the connection is successfully established, IceCon provides a graphical interface for sending RCON commands to the RedM server. You can issue standard RCON commands and view real-time command feedback directly in the tool.

IceCon also includes additional features such as:

- Command history and auto-completion  
- Server log viewer  
- Custom command buttons  
- Connection profiles for managing multiple servers



## RCON Commands

Once connected via RCON, various administrative and diagnostic commands can be executed on the RedM server. The available commands depend on the game engine but typically include actions for player management, status queries, and server control.

| Command                   | Description                                       |
| ------------------------- | ------------------------------------------------- |
| `say <message>`           | Sends a message to all players in the chat        |
| `start <resource-name>`   | Starts a specific server resource                 |
| `stop <resource-name>`    | Stops a specific server resource                  |
| `restart <resource-name>` | Restarts a specific server resource               |
| `ensure <resource-name>`  | Starts resource only if it is not already running |
| `refresh`                 | Reloads all resources from the resource directory |
| `clear`                   | Clears the server console output                  |
| `crash`                   | Forces a server crash (for debugging purposes)    |
| `quit`                    | Shuts down the server cleanly                     |



## Conclusion

RCON is a core tool for remote administration of RedM game servers. It enables fast and direct access to administrative functionality while offering access control through password authentication. Proper and secure configuration is critical to ensure server stability and to protect against unauthorized access.

For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
