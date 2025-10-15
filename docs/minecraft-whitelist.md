---
id: minecraft-whitelist
title: "Minecraft: Server Activating and editing a whitelist"
description: "Discover how to secure your Minecraft server by managing player access with whitelist features and protect your gameplay → Learn more now"
sidebar_label: Whitelist
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
The **Minecraft Whitelist** is an option to protect your server by only allowing selected players on the list to connect to yourserver. By default, Minecraft doesn't offer a server password option like other games do.

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="How to enable WHITELIST on your Minecraft Server" description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

<InlineVoucher />

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


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## Manage Whitelist



### Add / remove players



**Chat**

You can add or remove players from the whitelist by using the following commands:

```
/whitelist add SpielerName
/whitelist remove SpielerName
```



**white-list.json**

In case the UUID of the player is known, then the player can also be added manually via the **white-list.json** file. This can be accessed and modified by using FTP. You can find instructions for connecting via FTP here: [Access via FTP](gameserver-ftpaccess.md)

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


<InlineVoucher />
