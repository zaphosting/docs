---
id: minecraft_addop
title: OP-Permissions
sidebar_label: OP-Permissions
---

## Assign OP rights

In order to be able to assign OP-rights to yourself or other players, you first have to open the console, as far as no other player has sufficient OP-rights so far, so that the assignment is possible in the game itself.


To open the console, the respective server must first be called via the **Dashboard**. In the interface of the server you will find the entry "Live Console" on the left side of the list under the tab "INFORMATION".

![](https://i.imgur.com/iueWbsT.png)

Now you should see a dark window representing the console of the server. Underneath it, you can see an input field where any commands are passed to the console. In order to set the OP rights, the command "op <player>" (without "/") must be entered into the input field and then the green button "Send command" has to be clicked to send the command to the console.

![](https://i.imgur.com/zB5P0WQ.png)

After a few seconds, the command sent should appear in the console, followed by the message "Made <player> a server operator", which marks the action as successful. Now the respective player has all OP-rights and can for example change the game mode.

> The distribution of OP-rights is now also possible in the game itself, so that you should adjust the rights level as explained in the next step, if you wish to do so.

## Rights level

The OP rights are divided into four levels, whereby level 4 is always set by default. The respective levels contain different rights, so that the rights can be roughly divided according to the player. The respective rights of a level are as follows:

| Level | Description | Permissions |
| :-----: |:-------------:| :-----:|
| 1 | Moderator | Changes within the protected spawn area can be made. |
| 2 | Gamemaster | Set and edit command blocks, and execute various cheat commands (e.g.: /gamemode). |
| 3 | Admin | Kicking and banning players, as well as other commands that are part of the general administration of the server. Additional operators can also be appointed. |
| 4 | Owner | No more restrictions in place. |

> By installing a permissions plugin like LuckPerms on your Bukkit/Spigot server, you can set the permissions much more specific and detailed. It is also possible to create multiple groups, which simplifies the distribution of rights.

## Assign rights level

In order to adjust the level of a player, he must first be appointed as an Operator, as explained under "Granting OP-Rights". To adjust the level, the file "ops.json" must be edited via FTP connection.

As soon as the connection to the server has been established via FTP, you have to navigate to the respective directory of the server. Now in our case at FileZilla you have to right-click on the file and click on "View/Edit" in the menu that appears.

![](https://i.imgur.com/qW2NHJQ.png)

Now the value of "level" must be set to the desired level for the desired player, whereupon the file must be saved with **STRG+S**.

![](https://i.imgur.com/bq4seRq.png)

In order for the changes to take effect, the server must be restarted, which is possible by holding the red Stop button in the server interface.