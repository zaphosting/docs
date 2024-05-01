---
id: minecraft-whitelist
title: "Minecraft: Server Activating and editing a whitelist"
description: Information on how to activate and edit a whitelist for your Minecraft server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Whitelist
---

import YouTube from '@site/src/components/YouTube/YouTube';

## Introduction
The **Minecraft Whitelist** is an option to protect your server by only allowing selected players on the list to connect to yourserver. By default, Minecraft doesn't offer a server password option like other games do.

![image](https://user-images.githubusercontent.com/13604413/159177717-aa8faccd-3535-4147-b3db-278f2799c883.png)

<YouTube videoId="nyor26XxwLY" title="How to enable WHITELIST on your Minecraft Server" description="Feel like you understand better when you see things in action?  We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

## Activate whitelist



### Activation (Config)

In order to activate the whitelist, the value of the command in the **server.properties** Config has to be set to **true**. A restart of the server is necessary for the change to take effect. 

```
white-list=true
```



### Activation (Chat)

Alternatively, the whitelist option can also be activated in-game or via the live console:

```
/whitelist on			(Enable whitelist option)
/whitelist off			(Disable whitelist option)
```



To enable the whitelist option via the game, operator permissions are required! Otherwise, this can also be done via the live console (interface). Be aware that the commands have to be executed without the **/** symbol there.


![image](https://user-images.githubusercontent.com/13604413/159177718-f61f5bef-e6fa-4bc3-a14c-8a9224b8b15a.png)



## Manage Whitelist



### Add / remove players



**Chat**

You can add or remove players from the whitelist by using the following commands:

```
/whitelist add SpielerName
/whitelist remove SpielerName
```



**white-list.json**

In case the UUID of the player is known, then the player can also be added manually via the **white-list.json** file. This can be accessed and modified by using FTP. You can find instructions for connecting via FTP here: [FTP File Access](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "Spieler3"
  }
]
```



### Update list

If you add players manually, then you will need to reload the whitelist in-game. This is also possible by using a command to avoid a restart of the server:

```
 /whitelist reload
```



### View the list

If you don't want to open the whitelist file via FTP every time, you can also display all players on the whitelist with the following command: 

```
/whitelist list
```

