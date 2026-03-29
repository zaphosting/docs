---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI：配置重生设置"
description: "了解如何配置你的 Over the Top WWI 服务器的重生行为 → 立即了解更多"
sidebar_label: 重生设置
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的重生设置决定了玩家如何以及何时重新进入战场。这些设置直接影响游戏节奏、公平性和整体比赛流程。

通过调整重生计时器、宽限期和重生行为，你可以打造更快节奏的游戏体验，或者更具策略性和惩罚性的战斗场景。

<InlineVoucher />

## 配置

重生设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```

- `SpawnGracePeriod` 定义玩家在开始时无惩罚或限制的重生宽限时间
- `AttackerRespawnTime` 设置进攻方的重生延迟时间
- `DefenderRespawnTime` 设置防守方的重生延迟时间

- `WaveSpawning` 启用或禁用波次重生

- `WaveLegnth` 定义一个重生波次持续的时间
- `WaveBuildUpTime` 控制一个波次完全形成所需的时间

调整这些数值可以让你控制玩家是单独重生还是以协调的波次形式重生，以及他们多快能重返战场。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的重生行为会自动生效。

## 总结

恭喜你！你已经成功配置了你的 **Over the Top WWI 服务器** 的重生设置。这些调整能帮你微调游戏节奏，提升整体玩家体验。

如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />