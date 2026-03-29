---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Learn how to remotely manage your HumanitZ server using RCON and rcon-cli → Learn more now"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RCON (Remote Console) is a network protocol used to remotely control gameservers. It allows administrators to execute commands on the server without needing to connect to the game directly. This makes it possible to manage players, adjust settings, or monitor server activity externally.

In **HumanitZ**, RCON can be used to execute administrative commands such as kicking players, sending messages, or controlling server behavior. Access is secured using a password and a dedicated port.

A key advantage of RCON is that it allows server administration **without being connected as an in-game player**, enabling flexible and efficient remote management.

<InlineVoucher />

## Configuration

Before RCON can be used, it must be enabled in the server configuration. Open the settings page of your server and enable the rcon option. You can also adjust it through the config files.Open your gameserver management panel, navigate to Configs, and locate the `GameServerSettings.ini` file.

Add or adjust the following entries:

```
RCONEnabled=true
RCONPassword=your_secure_password
RCONPort=XXXXX
```


The assigned RCON port can be found in the **Port overview** within your server administration. Ensure that the password and port match your configuration.

After making changes, save the file and **restart the server** so the settings take effect.

## Connecting via RCON

To connect to your HumanitZ server via RCON, you can use the command-line tool **rcon-cli**. It is available from the official GitHub repository:
https://github.com/gorcon/rcon-cli

Once installed, you can connect to your server using the following command:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

Replace the placeholders with your server’s IP address, RCON port, and password.

This command allows you to directly execute RCON commands from your local system without needing an interactive session.

## RCON Commands

Once connected via RCON, you can execute various administrative commands on your HumanitZ server. The available commands depend on the game implementation but commonly include player management and server control.

| Command | Description|
|----------------------------------|------------------------------------------|
| `broadcast <message>`| Sends a message to all players |
| `kick <playername>`| Kicks a player from the server |
| `ban <playername>` | Bans a player|
| `unban <playername>` | Unbans a player|
| `save` | Saves the current game state |
| `restart`| Restarts the server|
| `shutdown` | Shuts down the server|
| `whitelist add <steamid>`| Adds a player to the whitelist |
| `whitelist remove <steamid>` | Removes a player from the whitelist|

## Conclusion

Congratulations! You have successfully set up and used **RCON for your HumanitZ server**. This allows you to manage your server remotely, execute administrative commands, and maintain control without needing to join the game.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />