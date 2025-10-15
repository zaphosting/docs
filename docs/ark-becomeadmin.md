---
id: ark-becomeadmin
title: "ARK: Become an admin"
description: "Discover how to manage your game server with full admin control and enhance gameplay experience → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Configuration

Administrator rights allow you to make changes directly in the game on your server without having to change it in the Config. In order to assign administrator rights to yourself or other players, you must first define a server admin password. This password is defined in the settings of our webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Once the password has been defined, the server is required to be rebooted. Afterwards you can connect to your server and log in as admin via the in-game console with the following command and your server admin password:

```
enableCheats password
```



Afterwards you can execute all server commands as admin. In the following you will find an overview of the most used commands. 



## Common used commands

| Command                                        | Description                                                  |
| ---------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Enables / disables the cheat menu                            |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Add player to whitelist                                      |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Remove player from whitelist                                 |
| admincheat SetMessageOfTheDay Nachricht        | Defines the message of the day (MOTD). This message appears when a player connects to the game server |
| admincheat broadcast Nachricht                 | Sends a message to all players on the server                 |
| admincheat god                                 | Enable immortality for your own player                       |
| admincheat fly                                 | Enable flying for your own player                            |
| admincheat walk                                | Disable flying for your own player                           |
| admincheat teleport                            | Teleports your player in the direction you are currently looking at |
| admincheat slomo                               | Changes both the speed of the server and the movement speed of all players |
| admincheat playersonly                         | This will stop all creature movements and stop/prevent crafting |
| admincheat ghost                               | Enable Noclip for your own player                            |
| admincheat forcetame                           | Enables immediate taming of dinosaurs and riding without a saddle |
| admincheat listplayers                         | Lists all players including the SteamId64                    |
| admincheat banplayer SteamId64                 | Ban players by using the SteamID64                           |
| admincheat unbanplayer SteamId64               | Unban players by using the SteamID64                         |
| admincheat setplayerpos x y z                  | Teleports the own player to the desired location             |
| admincheat saveworld                           | Saves the current state of the world                         |
| admincheat addexperience Menge                 | Adds experience to the player                                |
| admincheat settimeofday Zeit                   | Changes the time of day of the game server. Example: "admincheat settimeofday 12:00 |


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
