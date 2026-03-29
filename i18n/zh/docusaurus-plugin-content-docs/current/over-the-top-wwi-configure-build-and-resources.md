---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI：配置建造点和资源"
description: "了解如何在你的 Over the Top WWI 服务器上配置建造点、大炮和资源限制 → 立即了解更多"
sidebar_label: 建造点与资源
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 **Over the Top WWI** 中，建造点和资源设置决定了玩家在比赛中能部署多少建筑、防御设施和装备。这些数值直接影响游戏平衡，尤其是在建筑和防御工事至关重要的模式中。

通过调整这些设置，你可以打造更注重防守的玩法，拥有丰富的防御工事，或者限制资源以实现更快节奏、更激烈的对战。

<InlineVoucher />

## 配置

建造和资源设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 选项中访问并编辑该文件。找到并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` 和 `DefenderBuildPoints` 定义了每个队伍可用的建造点数量

- `AttackerCannonPoints` 和 `DefenderCannonPoints` 控制可部署的大炮或火炮单位数量

- `SapperBPRegenAmount` 定义了建造点随时间恢复的数量

- `SapperCannonPRegenAmount` 控制大炮点的恢复速度

- `SapperPropBPRegenTime` 和 `CannonPropPRegenTime` 定义了恢复间隔的秒数

调整这些数值可以控制玩家能建造多少建筑和防御设施，以及资源在游戏中的补充速度。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。更新后的资源设置将自动生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的建造点和资源设置。这样你就能掌控防御工事，平衡游戏体验，塑造整体战斗氛围。

如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />