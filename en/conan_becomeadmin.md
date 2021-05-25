---
id: conan_becomeadmin
title: Conan Exiles: Become an admin on your own server
description: Information on how to become an admin on your Conan Exiles server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become Admin
---



## Become Admin 

Administrator rights allow you to make changes directly in the game on your server without having to change it in the Config. In order to assign administrator rights to yourself or other players, you must first define a server admin password. This password is defined in the **ServerSettings.ini** Config, which you can find in the interface under Configs.


In the Config we look for the **AdminPassword=** command and define the password. This will look like this:




![img](https://screensaver01.zap-hosting.com/index.php/s/pFYfDrGiFgGAWwe/preview)



Once the password has been defined, the Config must be saved and the server restarted. Afterwards you can connect to your server and click on Server Settings by pressing the ESC key. There you can set the Admin Password and become an admin.



![img](https://screensaver01.zap-hosting.com/index.php/s/RTnxioH8sgCoxsq/preview)



Afterwards you can execute all server commands as admin. In the following you will find an overview of the most used commands.





## Common used Commands

| Command                                                | Description                                                  |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| MakeMeAdmin [AdminPassword]                            | Enables the Admin Mode                                       |
| MakeMeNormal                                           | Disables the Admin Mode                                      |
| LearnEmote [emote]                                     | Type /emote [emote] in the chat or press and hold R to display the emote menu. Admin mode required |
| God                                                    | Enables/disables God mode                                    |
| PlayerCanBuildEverywhere [PlayerName]                  | Allows building where building is disabled for the specified player |
| Teleport                                               | Teleport to a surface or into the air                        |
| TeleportPlayer X[float] Y[float] Z[float]              | Teleports you or another player to the specified coordinates |
| TeleportToPlayer [PlayerName]                          | Teleports you to the specified player                        |
| Fly                                                    | Enables the flight mode                                      |
| Ghost                                                  | Enables the ghost mode (invisible, noclip)                   |
| SetServerSetting serverSetting[FString] Value[FString] | Allows you to change the server settings from ServerSettings.ini during the game |

More admin commands related to the game can be found on [Gamepedia](https://conanexiles.gamepedia.com/Admin_Panel) of Conan Exiles. 



