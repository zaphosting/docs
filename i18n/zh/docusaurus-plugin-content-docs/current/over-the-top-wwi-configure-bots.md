---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI：配置机器人"
description: "了解如何在你的 Over the Top WWI 服务器上配置机器人设置 → 立即了解更多"
sidebar_label: 机器人
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 **Over the Top WWI** 服务器上，机器人可以用来填补空位，模拟大规模战斗，并在玩家数量较少时保持活跃。通过调整机器人设置，你可以控制难度、行为以及比赛的整体强度。

这让你可以打造从小规模的有序冲突到拥有大量 AI 控制单位的混乱大战。

<InlineVoucher />

## 配置

机器人设置在服务器配置文件中进行配置。你可以在 **游戏服务器管理面板** 的 **配置** 里访问并编辑该文件。找到并打开 `ServerConfiguration.ini` 配置文件。在文件中找到以下参数：

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```

- `AttackerBots` 定义进攻方机器人的数量
- `DefenderBots` 定义防守方机器人的数量
- `AutoAssignBots` 自动分配机器人到各队伍
- `0` → 关闭
- `1` → 开启

- `BotCallinMulti` 控制机器人生成或增援的频率
- `SubBotForPlayer` 玩家加入时替换机器人
- `1` → 开启
- `0` → 关闭

### 高级机器人配置

你还可以通过以下参数进一步自定义机器人行为：

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```

这些数值控制生成机器人时各单位类型的出现频率。数值越高，该类型的机器人在比赛中出现得越多。

### 波次与规模设置

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```

- `WaveLegnth` 控制机器人波次持续时间
- `WaveBuildUpTime` 定义波次完全生成所需时间
- `AutoAssignBotsScaleMulti` 根据玩家数量调整机器人数量

修改完 `ServerConfiguration.ini` 后，保存文件并重启服务器。新的机器人设置将在游戏中生效。

## 结语

恭喜你！你已经成功配置了 **Over the Top WWI 服务器** 上的机器人。调整这些设置可以帮你控制比赛强度，提升玩家体验，并让你的服务器始终保持活跃。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />