---
id: eco-becomeadmin
title: "ECO: Become an Admin"
description: "Discover how to assign administrator permissions for full server control and efficient game management → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Configuration
Adding an admin is done via the **Users.eco** Config, which you can find in the interface under Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



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

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



Afterwards, the URL must be typed in one of the following websites:

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



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



## Common used commands

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

## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
