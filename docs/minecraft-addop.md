---
id: minecraft-addop
title: "Minecraft: Server Assigning OP rights"
description: "Discover how to assign OP rights to players and manage server permissions effectively for better game control → Learn more now"
sidebar_label: OP-Permissions
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Assign OP rights

In order to be able to assign OP-rights to yourself or other players, you first have to open the console, as far as no other player has sufficient OP-rights so far, so that the assignment is possible in the game itself.


To open the console, the respective server must first be called via the **Dashboard**. In the interface of the server you will find the entry "Live Console" on the left side of the list under the tab "INFORMATION".

![](https://screensaver01.zap-hosting.com/index.php/s/PAaZQPXF75aW4Bi/preview)

Now you should see a dark window representing the console of the server. Underneath it, you can see an input field where any commands are passed to the console. In order to set the OP rights, the command "op player" (without "/") must be entered into the input field and then the green button "Send command" has to be clicked to send the command to the console.

![](https://screensaver01.zap-hosting.com/index.php/s/myba237CL5XMfKi/preview)

After a few seconds, the command sent should appear in the console, followed by the message "Made player a server operator", which marks the action as successful. Now the respective player has all OP-rights and can for example change the game mode.

:::info
The distribution of OP-rights is now also possible in the game itself, so that you should adjust the rights level as explained in the next step, if you wish to do so.
:::

## Rights level

The OP rights are divided into four levels, whereby level 4 is always set by default. The respective levels contain different rights, so that the rights can be roughly divided according to the player. The respective rights of a level are as follows:

| Level | Description | Permissions |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Changes within the protected spawn area can be made. |
| 2 | Gamemaster | Set and edit command blocks, and execute various cheat commands (e.g.: /gamemode). |
| 3 | Admin | Kicking and banning players, as well as other commands that are part of the general administration of the server. Additional operators can also be appointed. |
| 4 | Owner | No more restrictions in place. |

:::info
By installing a permissions plugin like LuckPerms on your Bukkit/Spigot server, you can set the permissions much more specific and detailed. It is also possible to create multiple groups, which simplifies the distribution of rights.
:::

## Assign rights level

In order to adjust the level of a player, he must first be appointed as an Operator, as explained under "Granting OP-Rights". To adjust the level, the file "ops.json" must be edited via FTP connection.

As soon as the connection to the server has been established via FTP, you have to navigate to the respective directory of the server. Now in our case at FileZilla you have to right-click on the file and click on "View/Edit" in the menu that appears.

![](https://screensaver01.zap-hosting.com/index.php/s/TTeL8WqnQfrdEDq/preview)

Now the value of "level" must be set to the desired level for the desired player, whereupon the file must be saved with **CTRL+S**.

![](https://screensaver01.zap-hosting.com/index.php/s/WKQkAR3oALsSNAc/preview)

In order for the changes to take effect, the server must be restarted, which is possible by holding the red Stop button in the server interface.

<InlineVoucher />
