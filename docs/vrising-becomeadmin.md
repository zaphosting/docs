---
id: vrising-becomeadmin
title: "V Rising: Become admin"
description: "Discover how to manage and assign full administrator permissions for your game server efficiently → Learn more now"
sidebar_label: Become admin
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The assignment of administrator permissions allows you simple and comprehensive administration with full control of your server. As an administrator, you have the option of using all available options and functions provided by the game directly in the game. All the steps you need to take to assign administrator permissions for your server will be described below. 
<InlineVoucher />

### Add permissions

The administration of the admin permissions is handled by the **adminlist.txt** config file. You can access this file in the web interface under Configs. The SteamID64 of the player is needed to add an admin. You can get it by opening your Steam profile and doing a right click at any place. There you will have the possibility to copy the page URL. The URL can then be entered on one of the following websites: https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

Once there, enter your Steam profile URL in the field, which you have copied, and you will then receive your SteamID64. Add the SteamID64 to the **adminlist.txt** config file. To do this, go to the web interface to your game server administration in the category Configs and open the adminlist.txt config file. 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
If you are planning to assign admin permissions to multiple players, then the SteamIDs must have their own line for each player. 
:::

### Activate permissions

Before you can assign the admin permissions in the game, you have to activate the console for your game. Connect to your server and go to the settings. In the settings you have to activate the option **Console Enabled**. The console can be opened by default with the Gravis key on the keyboard. The admin permissions can then be activated in the console with the `adminauth` command. 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### Admin command list

This is a short overview of the most common admin commands you can execute on your server. 

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | Assignment of admin permissions                         |
| admindeauth              | Removal of admin permissions                            |
| banuser [name/IP/userID] | Ban a specific player by name, IP or user ID            |
| banned                   | Displays a list of all the banned users                 |
| bancharacter             | Used to ban a specific character                        |
| give [name]              | Provides you a specific item in the game.               |
| giveset                  | Allows you to explore various sets of armor and weapons |
| kick [name/IP/userID]    | Kick a specific player by name, IP or user ID           |
| unban [name/IP/userID]   | Unban a specific player by name, IP or user ID          |


## Conclusion

Congratulations, you have successfully configured the administrator permissions. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
