---
id: openmp-server-commands
title: Open.mp Server Commands
description: Information on useful commands for Open.mp game from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Server Commands
---

Open.mp servers all come with a set of useful built-in server commands which can be used in-game and through your server console. In this guide, we will explore many of these commands providing descriptions and usage examples for each.

## Setting up access (RCON)

In order to be able to run server commands in-game, you will have to enable the RCON feature. You will have to access your configuration `config.json` and adjust the necessary parameters to toggle the feature on and add a password. Please use our [Open.mp Configuration guide](openmp-configuration.md) to access your server configuration file.

Once you have the file ready, find the parameters below; toggle the feature on and set an RCON password.

| Parameter Name                 | Example                                 | Description                                                                                     |
| ------------------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------- | 
| rcon.enable                    | true                                    | Toggle whether RCON feature should be enabled or disabled                                       |
| rcon.password                  | ZAP-IS-AWESOME                          | Set a password which must be used to be able to access RCON from clients                        |

:::info
Ensure that you have setup an RCON Password through your configration. Otherwise, you may face issues and RCON will be accessible by anyone which is highly insecure.
:::

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, RCON should be now accessible and ready.

:::tip
If you want to learn more about RCON, feel free to use our [Open.mp RCON guide](openmp-rcon.md) which goes into further details.
:::

## Available Commands

The table below consists of a range of important server commands for Open.mp, alongside their usage examples and descriptions, which can be used either in-game, through the server console or via an RCON program. If you wish to view all current commands, we recommend reading [open.mp's controlling a server guide](https://www.open.mp/docs/server/ControllingServer) which presents all server comamnds that are currently available.

:::tip
When running commands directly through console or via an RCON program, you do not need to use the `/rcon` prefix. You must only do this when running the commands **in-game**.
:::

:::note
Ensure that RCON has been enabled, otherwise these commands will not work in-game or through an RCON program.
:::

### General Commands

| Command Syntax                 | Accepted Values  | Description                                                          | 
| ------------------------------ | ---------------- | -------------------------------------------------------------------- | 
| /rcon cmdlist                  | -                | Returns a list with all of the server commands                       | 
| /rcon varlist                  | -                | Returns a list wih all current server variables                      | 
| /rcon exit                     | -                | Shuts down the server                                                | 
| /rcon echo [text]              | String           | Send a message to the server console (doesn't display in-game)       | 
| /rcon say [text]               | String           | Send a message to all player's in-game (displays as "Admin: [text]") | 
| /rcon players                  | -                | Provide information about all currently connected players            |
| /rcon reloadlog                | -                | Reloads the server log file                                          |

### Moderative Commands

| Command Syntax                 | Accepted Values  | Description                                                          | 
| ------------------------------ | ---------------- | -------------------------------------------------------------------- | 
| /rcon kick [id]                | Integer          | Kick the target player from the server                               | 
| /rcon ban [id]                 | Integer          | Ban the target player from the server                                | 
| /rcon banip [ip]               | String           | Ban an IP address from the server                                    | 
| /rcon unbanip [ip]             | String           | Unban an IP address from the server                                  | 
| /rcon reloadbans               | -                | Reloads the ban file                                                 |