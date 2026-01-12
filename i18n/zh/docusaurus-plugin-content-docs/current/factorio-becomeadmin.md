---
id: factorio-becomeadmin
title: "Factorio：成为管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制，并高效管理游戏内选项 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-factorio
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 配置

管理员权限允许你直接在游戏内对服务器进行更改，无需在配置文件中修改。添加管理员是通过 **server-settings.json** 配置文件完成的，你可以在面板的配置（Configs）中找到它。

![](https://screensaver01.zap-hosting.com/index.php/s/nDGgzXfmgzqDrf5/preview)

配置文件的末尾是关键部分，管理员列表就在这里定义：

```
  "_comment_admins": "不区分大小写的用户名列表，将被立即提升为管理员",
  "admins": []
}
```

需要获得管理员权限的玩家名字必须写在这里。如果添加多个管理员，示例如下：

```
  "_comment_admins": "不区分大小写的用户名列表，将被立即提升为管理员",
  "admins": [
  	"PlayerName1",
  	"PlayerName2",
  	"PlayerName3"
  ]
}
```

名字为 **PlayerName1, PlayerName2, PlayerName3** 的玩家现在已经获得了管理员权限。管理员命令可以通过游戏内控制台执行。下面是常用命令的概览。



### 常用命令

|                命令                 |                         说明                          |
| :--------------------------------: | :---------------------------------------------------: |
|                 /admin             |               打开玩家管理界面。                       |
|           /ban player reason       |                          封禁玩家                      |
|                 /bans              |               显示被封禁玩家列表。                     |
|             /unban player          |                         解封玩家                      |
|  /banlist add/remove/get/clear player  | 添加或移除玩家到封禁列表。等同于 /ban 或 /unban。    |
|          /kick player reason       |                         踢出玩家                      |
|              /mute player          |                         禁言玩家                      |
|             /unmute player         |                        解除禁言                       |
| /whitelist add/remove/get/clear player |         添加或移除玩家到白名单                         |

更多命令请查看官方 [Factorio Wiki](https://wiki.factorio.com/Console)。


## 总结

恭喜你，管理员权限已成功配置。如有任何问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />