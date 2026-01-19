---
id: fivem-qbcore-admin
title: "FiveM：使用 QBCore 成为管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制和更强大的游戏内管理 → 立即了解"
sidebar_label: 成为管理员
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器，拥有对服务器的完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细说明为你的服务器分配管理员权限所需的所有步骤。

<InlineVoucher />

## 配置

管理员权限的配置通过 ``server.cfg`` 配置文件完成。首先登录 txAdmin 界面并打开 CFG 编辑器。然后滚动到配置文件末尾，直到找到 `Permissions` 部分。

![img](https://screensaver01.zap-hosting.com/index.php/s/KPRTmPoYdsCWjGd/preview)

QBCore 支持多种玩家标识符，包括 FiveM ID（`identifier.fivem:`）、Rockstar 许可证（`identifier.license:`）和 Discord ID（`identifier.discord:`）。你可以直接从 txAdmin 界面获取这些标识符。接着，你可以决定赋予他们 GOD、Admin 或 Mod 的权限等级。

获取标识符并确定权限等级后，可以通过将玩家添加到 `server.cfg` 来分配个人权限。只需在权限部分添加以下三种选项之一作为新条目：

```
add_principal identifier.license:xxxxxx qbcore.god   # 玩家名称
add_principal identifier.license:xxxxxx qbcore.admin # 玩家名称
add_principal identifier.license:xxxxxx qbcore.mod   # 玩家名称
```

最终效果示例如下：

```
## Permissions ##
add_ace group.admin command allow # 允许所有命令
# 部署者备注：此管理员主账号没有自动添加的标识符。
# add_principal identifier.discord:111111111111111111 group.admin #示例

add_principal identifier.fivem:16219250 qbcore.admin # 玩家名称
```

## 结语

只要你成功完成以上所有步骤，你就已经成为自己服务器的管理员啦！如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />