---
id: ark_becomeadmin
title: ARK: Become an admin
description: Information on how to become an admin on your ARK server at ZAP-Hosting - ZAP-Hosting.com Documentation
sidebar_label: Become Admin
---


## Become Admin


Administrator rights allow you to make changes directly in the game on your server without having to change it in the Config. In order to assign administrator rights to yourself or other players, you must first define a server admin password. This password is defined in the Gameusersettings.ini Config, which you can find in the interface under Configs. 



![img](https://screensaver01.zap-hosting.com/index.php/s/PHmtWF8BRnpSMzH/preview)



In the Config we look for the **ServerAdminPassword=** command and define the password. This will look like this:



![img](https://screensaver01.zap-hosting.com/index.php/s/8QxkctxsCSAEAXK/preview)





Once the password has been defined, the Config must be saved and the server restarted. Afterwards you can connect to your server and log in as admin via the in-game console with the following command and your server admin password:

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
