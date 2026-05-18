---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI：配置队友伤害"
description: "了解如何在你的 Over the Top WWI 服务器上启用或调整队友伤害设置 → 立即了解更多"
sidebar_label: 队友伤害
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

队友伤害决定了玩家在游戏中是否能对自己的队友造成伤害。调整这些设置可以让你掌控 **Over the Top WWI** 服务器上的战斗是更真实还是更宽容。

开启队友伤害能提升游戏的真实感和战术深度，而关闭或降低它则能带来更轻松、易上手的游戏体验。

<InlineVoucher />

## 配置

队友伤害设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里找到并编辑这个文件。找到并打开 `ServerConfiguration.ini` 配置文件，里面包含以下参数：

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire`：开启或关闭近战对队友的伤害。
- `EnableFriendlyRangeFire`：开启或关闭远程对队友的伤害。
- `FriendlyFireAtRoundStart`：队友伤害生效前的延迟时间（秒）。
- `FriendlyFirePercent`：近战对队友造成的伤害比例。
- `RangeFriendlyFirePercent`：远程对队友造成的伤害比例。
- `ExplosionFf`：开启或关闭爆炸伤害对队友的影响。
- `FriendlyFireReflectPercent`：将一定比例的伤害反弹给攻击者，而不是队友。

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的队友伤害设置将立即生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 的队友伤害设置。调整这些数值可以帮你在真实感和游戏体验之间找到最佳平衡，打造专属于你社区的玩法。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />