---
id: factorio-becomeadmin
title: "Factorio: Become an Admin"
description: "Discover how to assign administrator permissions for full server control and manage in-game options effectively → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

## Configuration

Administrator rights allow you to make changes directly in the game on your server without having to change it in the Config. Adding an admin is done via the **server-settings.json** Config, which you can find in the interface under Configs.

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

At the end of the config file is the important part. The admins are defined there:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": []
}
```

The names of the players who shall receive administrator rights have to be specified there. If several admins are added then it could look like this for example:

```
  "_comment_admins": "List of case insensitive usernames, that will be promoted immediately",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

The players with the names **PlayerName1, PlayerName2, PlayerName3** have now received the permissions. Admin commands can now be executed in game via the console. In the following you will find an overview of common used commands.



### Common used commands

|                Command                 |                         Description                          |
| :------------------------------------: | :----------------------------------------------------------: |
|                 /admin                 |               Opens the player management GUI.               |
|           /ban player reason           |                          Ban player                          |
|                 /bans                  |               Prints a list of banned players.               |
|             /unban player              |                         Unban player                         |
|  /banlist add/remove/get/clear player  | Adds or removes a player from the banlist. Same as /ban or /unban. |
|          /kick player reason           |                         Kick player                          |
|              /mute player              |                         Mute player                          |
|             /unmute player             |                        Unmute player                         |
| /whitelist add/remove/get/clear player |         Adds or removes a player from the whitelist          |

More available commands can be found in the official [Factorio Wiki](https://wiki.factorio.com/Console).


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
