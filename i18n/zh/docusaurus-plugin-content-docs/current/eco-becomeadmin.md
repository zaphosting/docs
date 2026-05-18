---
id: eco-becomeadmin
title: "ECO：成为管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制和高效游戏管理 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-eco
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松全面地管理服务器，拥有完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有选项和功能。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

## 配置
添加管理员是通过 **Users.eco** 配置文件完成的，你可以在面板的 Configs（配置）中找到它。

![](https://screensaver01.zap-hosting.com/index.php/s/ACgPpyPfGmnmi8X/preview)



要添加新玩家为管理员，需要调整 **Users.eco** 配置中的以下部分：

```xml
  "Admins": {
    "System.String": {
      "$type": "System.Collections.Generic.List`1[[System.String, System.Private.CoreLib]], System.Private.CoreLib",
      "$values": []
    }
  },
```



想要成为管理员的玩家需要填写在 **values** 字段中。如果有多个管理员，使用逗号分隔。玩家的身份通过 SteamID64 来识别。

你可以通过访问你的 Steam 个人资料，然后在页面任意位置右键点击，复制你的 Steam 个人资料链接。

![](https://screensaver01.zap-hosting.com/index.php/s/YQoe4tpFzbRTAqd/preview)



接着，将链接粘贴到以下任意网站中查询：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

![](https://screensaver01.zap-hosting.com/index.php/s/3RSya5KbWGfcgHr/preview)



这样你就能获得该账号的基本信息和 Steam ID。将这个 Steam ID 填入 **values** 字段中，示例如下：

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



服务器重启后，列表中的玩家将拥有管理员权限。如果你想添加更多管理员，不必每次都修改配置文件，可以直接在游戏内使用以下命令：

```
/admin [player]
```



下面是一些常用的管理员命令，作为管理员你可以执行它们。



## 常用命令一览

|              命令               |                      说明                       |
| :-----------------------------: | :---------------------------------------------: |
|             /allblocks           |                   生成所有方块                  |
|          /allconstructed         |         生成所有玩家可建造的方块                 |
|             /allplants           |                生成所有植物方块                  |
|             /allskills           |                   解锁所有技能                   |
|            /allterrain           |               生成所有可挖掘的方块               |
|          /allworldobjects        |                生成所有世界物体                  |
|      /kick [player],(reason)    |                      踢出玩家                    |
|       /ban [player],(reason)     |                      封禁玩家                    |
|     /give [itemname],(amount)    |                 给自己物品                       |
| /giveskillpoints [player],(amount) |           给其他玩家技能点                      |
|                /fly              |                    切换飞行模式                  |
|         /move [x],[y],[z]        | 移动到坐标 x, y, z；xyz 为整数                   |
|       /removeadmin [player]      |               移除管理员权限                      |

更多命令请查看官方 [ECO Wiki](https://eco.gamepedia.com/Chat_Commands)。

## 总结

恭喜你，管理员权限已成功配置！如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />