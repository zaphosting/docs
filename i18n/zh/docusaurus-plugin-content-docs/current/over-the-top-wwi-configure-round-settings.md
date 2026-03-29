---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI：配置回合设置"
description: "了解如何配置你的 Over the Top WWI 服务器的回合时长和比赛流程 → 立即了解更多"
sidebar_label: 回合设置
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**Over the Top WWI** 中的回合设置决定了比赛的时长和游戏进程。调整这些参数可以让你掌控比赛节奏、回合长度以及整体游戏流程。

这对于平衡快速对战和更长、更具策略性的战斗尤其重要。

<InlineVoucher />

## 配置

回合设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑该文件。定位并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` 定义每场比赛的回合数
- `MaxMapTime` 设置地图的最长时长（分钟）
- `FinalRecapTimer2` 控制回合结束总结显示的时长

- `PersistentMatch` 决定时间和得分是否在回合间持续

  - `0` → 关闭
  - `1` → 开启

调整这些数值可以让比赛更短，轮换更快，或者延长游戏时间，享受更长的对战体验。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的回合设置将自动生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的回合设置。这样你就能掌控比赛时长，提升服务器上的游戏体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />