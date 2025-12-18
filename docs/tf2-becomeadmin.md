---
id: tf2-becomeadmin
title: "Team Fortress 2: Become an admin"
description: "Discover how to assign administrator permissions for full server control and enhanced in-game management → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below.

<InlineVoucher />



## Configuration

To register as an admin, the installation of SourceMod or MetaMod is mandatory. In addition, you will need the Steam ID of your Steam account. There are several ways to obtain it: you can either use an external website that provides this service or retrieve it directly through the in-game console.


To obtain your SteamID via a website, first open your Steam profile and right-click anywhere on the page to copy the profile URL. Next, paste this URL into one of the following websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

The page will display your SteamID along with other account information. For admin registration, you need the **SteamID32**:

```
steamID32: STEAM_0:1:XXXXXX
```

Alternatively, you can retrieve your SteamID in-game through the console. Start the game, connect to your server, open the console, and type the command:

```
status
```

This will display your connection details, including your SteamID. Next, connect to the server via FTP and open the `admins.cfg` file located in:

```
.../addons/sourcemod/configs/
```

The file contains an example entry that you can copy and adapt:

```
Admins
{
	"Player name"
	{
		"auth" "steam"
		"identity" "STEAM_0:1:XXXXX"
		"flags" "abcdef"
	}
}
```

The **player name** does not have to match your Steam account name; it is only for internal reference. The `auth` field defines the authentication method, which remains `steam`. In `identity`, enter the SteamID32. The `flags` define the permissions granted to the admin:

| Permission  | Flag | Description |
|-------------|:----:|-------------|
| reservation | a    | Slot reservation |
| generic     | b    | Basic rights (required) |
| kick        | c    | Kick players |
| ban         | d    | Ban players |
| unban       | e    | Unban players |
| slay        | f    | Slap or kill players |
| changemap   | g    | Change map |
| cvar        | h    | Change server values |
| config      | i    | Execute server configs |
| chat        | j    | Advanced chat rights |
| vote        | k    | Start admin votes |
| password    | l    | Set server password |
| rcon        | m    | Execute RCON commands |
| cheats      | n    | Enable `sv_cheats` |
| root        | z    | Full access |

Multiple flags can be combined (e.g., `bc` for kick rights). For full access, use only `z`. You can open the admin menu by typing `admin` in chat or `sm_admin` in the console. With the command `admin` in the chat or `sm_admin` in the console the menu can be called.



## Admin Commands

Below you'll find a list of common admin commands that you can use as an admin on your server.

| Command                           | Description                                     |
| --------------------------------- | ----------------------------------------------- |
| `sm_kick <player>`                | Kicks a player                                  |
| `sm_ban <player> <time> [reason]` | Bans a player for X minutes (0 = permanent)     |
| `sm_unban <SteamID/IP>`           | Unbans a player                                 |
| `sm_slay <player>`                | Instantly kills the player                      |
| `sm_slap <player> [damage]`       | Slaps the player (optionally with damage)       |
| `sm_map <mapname>`                | Changes to the specified map                    |
| `sm_cvar <cvar> <value>`          | Sets a server configuration variable at runtime |
| `sm_vote <topic>`                 | Starts a basic vote                             |
| `sm_restartgame <seconds>`        | Restarts the game after a countdown             |
| `sm_say <message>`                | Sends a message to the global chat              |



## Conclusion

Congratulations, provided you have followed everything, you should have successfully configurated the admin permissions for your server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
