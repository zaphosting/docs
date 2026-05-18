---
id: valheim-admin
title: "Valheim：服务器管理员命令 & 作弊指令"
description: "了解如何分配管理员权限，实现对服务器的全面控制并高效管理玩家 → 立即了解更多"
sidebar_label: 管理员命令 & 作弊指令
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你轻松全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面会详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

### 配置
要将自己添加为管理员，首先需要获取你的 SteamID64，可以使用像 [Steam ID Finder](https://steamidfinder.com/) 这样的工具。

在这里输入你的 Steam 个人主页链接：

![](https://screensaver01.zap-hosting.com/index.php/s/e8H8Y4P9ojW9sD2/preview)

然后点击 `Find Steam ID`

现在你应该能看到你的 Steam 个人资料，复制其中的 “Steam64ID (Dec)”。

接着打开服务器的网页管理界面，进入设置页面，这里会有一个 “Admins” 选项，可以添加你的 Steam ID：

![](https://screensaver01.zap-hosting.com/index.php/s/aJkGRMcmWrnZyiM/preview)

添加完 Steam ID 后，保存设置并重启服务器。

## 访问控制台

在 Valheim 中，按下游戏内的 “F5” 键即可打开控制台，在这里你可以输入所有管理员命令。

### 管理员命令

|  命令   |           参数          |                  功能               |
| :-----: | :--------------------: | :--------------------------------: |
|   kick  |    名字/玩家ID/IP      |       踢出指定玩家                 |
|   ban   |    名字/玩家ID/IP      |       封禁指定玩家                 |
|  unban  |      玩家ID/IP         |       解除指定玩家封禁             |
| banned  |          无            |       显示所有被封禁的玩家         |

<InlineVoucher />