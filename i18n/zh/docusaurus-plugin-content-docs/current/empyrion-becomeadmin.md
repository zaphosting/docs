---
id: empyrion-becomeadmin
title: "Empyrion：成为管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制并高效管理游戏功能 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-empyrion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器，拥有完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细说明为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 查找 Steam64ID

首先，你需要找到你的 Steam64ID。  
你可以使用这个工具：[SteamID Lookup](https://steamid.io/lookup)。  
之后需要将该 ID 填写到配置文件中。

下面是一个示例，展示如何通过输入你的个人资料链接来获取 steamid：

![](https://screensaver01.zap-hosting.com/index.php/s/3LQXKFg58qXCCHw/preview)

## 配置 adminconfig

需要编辑的 "**adminconfig.yaml**" 文件位于 "**Saves**" 目录下。  
打开该目录需要按照[通过 FTP 访问](gameserver-ftpaccess.md)的说明操作。

![](https://screensaver01.zap-hosting.com/index.php/s/XtfdjdgoxcqXsWx/preview)

默认情况下，文件中会有以下内容：

![](https://screensaver01.zap-hosting.com/index.php/s/Tpf23riFnGfZAsP/preview)

现在需要将之前找到的 Steam64ID 写入 "**Id:**" 后面。

![](https://screensaver01.zap-hosting.com/index.php/s/RHEr44CGsaLQWyY/preview)

通过 "**Permission**" 来设置用户的权限等级。  
权限等级对应关系如下：

Permission | 权限等级
-----|-------
3 | 游戏管理员 (gamemaster)
6 | 版主 (moderator)
9 | 管理员 (admin)


## 总结

恭喜你，管理员权限配置成功！如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />