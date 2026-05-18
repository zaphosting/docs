---
id: hytale-change-day-night-duration
title: "Hytale：更改昼夜时长"
description: "了解如何在 Hytale 服务器上进行世界间传送 → 立即了解更多"
sidebar_label: 更改昼夜时长
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Hytale 服务器上的昼夜循环决定了一个世界中白天和黑夜阶段持续的时间。通过调整这些周期的时长，服务器拥有者可以影响游戏节奏、氛围和难度。

较短的夜晚可能营造出更轻松的环境，而较长的夜晚则能增加挑战和紧张感。自定义昼夜时长让你能根据服务器的预期玩法风格调整世界体验。

:::info 早期体验提示

Hytale 于 2026 年 1 月 13 日发布，目前处于早期体验阶段。由于游戏仍在积极开发中，服务器软件、配置文件、模组支持和安装流程可能会持续变化。

:::

<InlineVoucher />

## 配置

要更改昼夜时长，必须直接编辑世界目录下的 `config.json` 配置文件，路径如下：

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

如果配置文件中还没有白天和黑夜时长的条目，需要手动添加。滚动查找以下行：

```
"GameplayConfig":
```

在这行正下方插入昼夜时长设置：

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

这些数值以秒为单位定义白天和黑夜的时长。例如，`1800` 表示白天持续时间较长，而 `1000` 控制夜晚持续多久，之后循环重置。修改完成后，保存 `config.json` 文件并重启服务器。

## 总结

完成此配置后，你就能完全掌控 Hytale 服务器中每个世界的昼夜时长。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />