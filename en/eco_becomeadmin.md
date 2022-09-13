---
id: eco_becomeadmin
title: ECO - Global Survival Server: Become an Admin
description: Information on how to become an admin on your ECO server at ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Become Admin
---


## 🔑 Become Admin

Administrator rights allow you to make changes directly in the game on your server without having to change it in the Config. Adding an admin is done via the **Users.eco** Config, which you can find in the interface under Configs.

![image](https://user-images.githubusercontent.com/26007280/189889438-9fff284d-0b0b-40bd-ac00-27adc646de55.png)



To add a new player as admin the following part in the **Users.eco** Config has to be adjusted:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



The player who is supposed to become admin is specified in the field **values**. In case of several admins, they are added comma separated. To identify the player the SteamID64 is used. 

You can find it by accessing your Steam profile and then right-clicking anywhere on the profile. There you can copy the Steam URL of your profile..

![image](https://user-images.githubusercontent.com/26007280/189889469-1cd77a81-dd16-46ad-957b-74eb8f8ce9fc.png)



Afterwards, the URL must be typed in one of the following websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![image](https://user-images.githubusercontent.com/26007280/189889486-e9c03aa9-6a98-4dad-94f7-f22ea9ab0ea4.png)



This will provide you the general account information as well as the Steam ID.  This one will then be inserted at **values**. The result of this looks like this:

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": [
			"123456789",
			"anotherSteamID"
	]
    }
  },
```



Once the server has been restarted, players registered there have been assigned administrator privileges. If you want to add more admins, then you don't have to do this always via the Config anymore. Instead you can do this in game by using the following command:

```
/admin [player]
```



In the following you will find an overview of common used admin commands that you can execute as an admin.



## ⌨️ Common used commands

|              Commands              |                      Description                       |
| :--------------------------------: | :----------------------------------------------------: |
|             /allblocks             |                   Spawns all blocks                    |
|          /allconstructed           |         Spawns all player constructable blocks         |
|             /allplants             |                Spawns all plant blocks                 |
|             /allskills             |                   Unlocks all skills                   |
|            /allterrain             |               Spawns all diggable blocks               |
|          /allworldobjects          |                Spawns all world objects                |
|      /kick [player],(reason)       |                      Kicks a user                      |
|       /ban [player],(reason)       |                      Bans a user                       |
|     /give [itemname],(amount)      |                 Give yourself an item                  |
| /giveskillpoints [player],(amount) |           Give skillpoints to another player           |
|                /fly                |                    Toggles fly mode                    |
|         /move [x],[y],[z]          | Moves you to position x, y, z; where xyz are integers. |
|       /removeadmin [player]        |               Removes a user as an Admin               |

More available commands can be found in the official [ECO Wiki](https://eco.gamepedia.com/Chat_Commands).

