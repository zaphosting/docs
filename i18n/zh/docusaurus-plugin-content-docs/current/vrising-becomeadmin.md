---
id: vrising-becomeadmin
title: "V Rising：成为管理员"
description: "了解如何高效管理并分配游戏服务器的完整管理员权限 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松全面地管理服务器，拥有完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面会详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

### 添加权限

管理员权限的管理通过 **adminlist.txt** 配置文件完成。你可以在网页面板的配置（Configs）中找到这个文件。添加管理员需要玩家的 SteamID64。你可以通过打开你的 Steam 个人资料，右键点击任意位置，复制页面 URL 来获取。然后将该 URL 输入以下任一网站查询： https://steamid.io/ https://steamrep.com/ https://steamidfinder.com/ 

![](https://screensaver01.zap-hosting.com/index.php/s/QT5HRX4t966kRjQ/preview)

进入网站后，将复制的 Steam 个人资料 URL 粘贴到输入框中，即可获得你的 SteamID64。将这个 SteamID64 添加到 **adminlist.txt** 配置文件中。操作步骤是在网页面板进入游戏服务器管理的配置（Configs）分类，打开 adminlist.txt 配置文件。 

![](https://screensaver01.zap-hosting.com/index.php/s/Y35BDx5xJ5zLGoS/preview)

:::info
如果你打算给多个玩家分配管理员权限，每个 SteamID 必须单独占一行。 
:::

### 激活权限

在游戏内分配管理员权限之前，你需要先激活游戏的控制台。连接到你的服务器，进入设置。在设置中启用 **Console Enabled**（启用控制台）选项。默认情况下，控制台可以通过键盘上的波浪号键（Gravis key）打开。然后你可以在控制台使用 `adminauth` 命令激活管理员权限。 

![](https://screensaver01.zap-hosting.com/index.php/s/MLS9wbcC56ZomAb/preview)


### 管理员命令列表

下面是你可以在服务器上执行的一些常用管理员命令简要一览。

|                          |                                                         |
| ------------------------ | ------------------------------------------------------- |
| adminauth                | 分配管理员权限                                           |
| admindeauth              | 移除管理员权限                                           |
| banuser [name/IP/userID] | 通过名字、IP 或用户ID封禁指定玩家                        |
| banned                   | 显示所有被封禁用户列表                                   |
| bancharacter             | 封禁指定角色                                             |
| give [name]              | 给你游戏中的指定物品                                     |
| giveset                  | 允许你探索各种护甲和武器套装                             |
| kick [name/IP/userID]    | 通过名字、IP 或用户ID踢出指定玩家                        |
| unban [name/IP/userID]   | 通过名字、IP 或用户ID解除封禁指定玩家                    |


## 总结

恭喜你，管理员权限已成功配置完成。如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />