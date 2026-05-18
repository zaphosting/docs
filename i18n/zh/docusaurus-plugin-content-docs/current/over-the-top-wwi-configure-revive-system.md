---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI：配置复活系统"
description: "了解如何在你的 Over the Top WWI 服务器上配置复活机制 → 立即了解更多"
sidebar_label: 复活系统
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的复活系统决定了玩家被击倒后如何重新回到战斗。调整这些设置可以让你掌控战斗的宽容度或惩罚力度。

更快或更可靠的复活系统能让游戏更易上手，而更严格的设置则提升真实感和失误的后果。

<InlineVoucher />

## 配置

复活系统的配置在服务器配置文件中完成。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。定位并打开 `ServerConfiguration.ini` 配置文件，找到以下参数：

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` 定义复活玩家所需的时间
- `ReviveChance` 决定复活成功的概率
- `ReviveMaxDamage` 定义玩家最大可承受伤害值，超过则无法复活

调整这些数值来控制复活的成功率和所需时间。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的复活设置会自动生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的复活系统。这样你就能微调战斗难度，提升整体游戏体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />