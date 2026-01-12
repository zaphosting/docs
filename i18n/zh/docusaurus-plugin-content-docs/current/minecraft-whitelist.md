---
id: minecraft-whitelist
title: "Minecraft：服务器启用和编辑白名单"
description: "了解如何通过管理白名单功能来保护你的Minecraft服务器，限制玩家访问，保障你的游戏体验 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
**Minecraft 白名单** 是一种保护你服务器的方式，只允许名单上的指定玩家连接服务器。默认情况下，Minecraft不像其他游戏那样提供服务器密码功能。

![](https://screensaver01.zap-hosting.com/index.php/s/zbbRQdonbZPTeib/preview)

<YouTube videoId="nyor26XxwLY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/oSWCcxscEcDzrq7/preview" title="如何在你的Minecraft服务器上启用白名单" description="觉得看视频更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定白名单设置。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>

<InlineVoucher />

## 启用白名单



### 启用方法（配置文件）

要启用白名单，需要在 **server.properties** 配置文件中将对应命令的值设置为 **true**。更改后需要重启服务器才能生效。

```
white-list=true
```



### 启用方法（聊天命令）

另外，也可以通过游戏内聊天或实时控制台启用白名单：

```
/whitelist on			（启用白名单）
/whitelist off			（关闭白名单）
```



通过游戏内启用白名单需要拥有管理员权限！如果没有权限，也可以通过实时控制台（界面）操作。注意，控制台执行命令时不要带 **/** 符号。


![](https://screensaver01.zap-hosting.com/index.php/s/rxsCnTeEarycfR7/preview)



## 管理白名单



### 添加 / 移除玩家



**聊天命令**

你可以用以下命令添加或移除白名单上的玩家：

```
/whitelist add 玩家名
/whitelist remove 玩家名
```



**white-list.json 文件**

如果你知道玩家的 UUID，也可以通过编辑 **white-list.json** 文件手动添加玩家。该文件可以通过 FTP 访问和修改。这里有连接FTP的教程：[通过FTP访问](gameserver-ftpaccess.md)

```
[
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "玩家1"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "玩家2"
  },
  {
    "uuid": "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    "name": "玩家3"
  }
]
```



### 更新白名单

如果你手动添加了玩家，需要在游戏内重新加载白名单。可以用命令避免重启服务器：

```
 /whitelist reload
```



### 查看白名单

如果你不想每次都通过FTP打开白名单文件，可以用下面的命令显示所有白名单上的玩家：

```
/whitelist list
```


<InlineVoucher />