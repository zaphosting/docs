---
id: hytale-pvp-management
title: "Hytale：PvP 管理"
description: "管理和配置你的 Hytale 服务器上的玩家对战（PvP）→ 立即了解更多"
sidebar_label: PvP 管理
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Hytale 服务器上的 PvP 管理控制玩家是否可以在世界中互相攻击或战斗。通过调整 PvP 设置，服务器拥有者可以定义玩家间的战斗是完全开启、完全关闭，还是仅限特定情况。

<InlineVoucher />

## 配置

PvP 行为是按世界单独定义的，通过服务器的配置文件进行设置：

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

此设置决定服务器如何处理玩家间的伤害以及该世界内是否允许 PvP。对 PvP 设置的更改会全局应用于该世界，并且需要重启服务器才能生效。

下面的示例展示了一个禁用 PvP 的世界配置：

```
"WorldConfig": {
  "PvP": false
}
```

应用此配置后，玩家将无法在该世界内互相造成伤害，打造一个以 PvE 为主的环境。

若要启用 PvP 并允许玩家间战斗，配置可设置为：

```
"WorldConfig": {
  "PvP": true
}
```

## 总结

设置完成后，你就能清晰掌握 PvP 的管理方式，并轻松调整配置以支持合作玩法、竞技环境或两者结合。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />