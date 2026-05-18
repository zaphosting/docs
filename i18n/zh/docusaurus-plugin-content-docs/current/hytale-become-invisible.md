---
id: hytale-become-invisible
title: "Hytale：变得隐形"
description: "了解如何在 Hytale 服务器上变得隐形 → 立即了解更多"
sidebar_label: 变得隐形
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 Hytale 服务器上，隐形功能对于管理、测试或内容创作非常有用。它允许管理员在不被注意的情况下观察玩家，检查可疑行为，或探索区域而不干扰游戏进程。根据服务器配置和权限设置，通常可以通过游戏内命令或实时控制台启用隐形。

<InlineVoucher />

## 需求

要使用隐形功能，你必须在服务器上拥有足够的权限。大多数情况下，你需要拥有管理员权限或对管理和游戏命令的访问权限。如果没有所需权限，命令将被拒绝，无法启用隐形。想获得必要权限，请参考我们的[成为管理员](hytale-becomeadmin.md)指南。

## 变得隐形

要变得隐形，打开游戏内聊天并输入服务器支持的隐形命令。执行以下命令：

```
/hide <playername>
```

命令成功执行后，你的角色将不再被其他玩家看到。根据服务器规则和隐形实现，你仍然可以移动、互动并监控活动。

除了基础的隐藏命令，Hytale 还提供了扩展选项，允许你控制谁能看到某个玩家。例如，你可以只对特定目标玩家隐藏某个玩家，或者对服务器上的所有人应用隐形。

可用命令如下：
- `/hide <playername>`  使指定玩家隐形。
- `/hide <playername> --target <playername>`  仅对目标玩家隐藏指定玩家。
- `/hide all`  使所有玩家隐形。

## 取消隐形

要恢复正常可见状态，再次运行对应命令以关闭隐形。命令确认后，其他玩家将能像平常一样看到你的角色。

```
/hide show <playername>
```

还有一些额外命令用于更具体的场景，比如只恢复对某些目标玩家的可见性，或取消所有玩家的隐形。

可用命令如下：
- `/hide show <playername>`  取消指定玩家的隐形状态。
- `/hide show <playername> --target <playername>`  仅对目标玩家取消指定玩家的隐形。
- `/hide showall`  取消所有玩家的隐形。

## 总结

在 Hytale 服务器上变得隐形是管理员和版主监控游戏的强大工具，能让你低调观察游戏进程。如有更多问题或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />