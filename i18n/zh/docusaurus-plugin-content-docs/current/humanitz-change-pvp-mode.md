---
id: humanitz-change-pvp-mode
title: "HumanitZ：切换 PvP 模式"
description: "了解如何在你的 HumanitZ 服务器上开启或关闭 PvP → 立即了解更多"
sidebar_label: "切换 PvP 模式"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

玩家对战玩家（PvP）是像 HumanitZ 这类生存游戏的核心玩法。开启或关闭 PvP 会改变玩家之间的战斗互动方式，比如是否能互相造成伤害，以及是否能操作玩家拥有的物品，比如载具或箱子。

<InlineVoucher />

## 配置

PvP 模式是在 `GameServerSettings.ini` 文件中控制的。你可以在服务器管理面板的 **配置** 里找到这个文件。打开配置文件，找到以下参数：

```
;false/true=关闭/开启。这也会影响玩家物品（如车辆和箱子）的交互权限
PVP=true
```

- `PVP=true` – 开启玩家对战玩家  
- `PVP=false` – 关闭玩家对战玩家

要切换 PvP 模式，只需把值设置为 `true`（开启）或 `false`（关闭），根据你想要的服务器 PvP 体验来调整。

示例 – 关闭 PvP：

```
PVP=false
```

编辑完文件后，保存更改并重启服务器，新的设置就会生效。

## 总结

恭喜你！通过修改 `GameServerSettings.ini` 里的 `PVP` 参数，你已经成功切换了 HumanitZ 服务器的 PvP 模式。如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />