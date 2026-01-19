---
id: hytale-death-penalty
title: "Hytale：更改死亡惩罚"
description: "了解你的 Hytale 服务器上的死亡惩罚机制 → 立即了解更多"
sidebar_label: 更改死亡惩罚
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

在 Hytale 服务器上，**死亡惩罚**决定了玩家死亡时会受到怎样的影响。这个设置控制了玩家死亡后，进度、物品、耐久度或其他游戏后果的具体表现程度。

:::info 早期体验提示

Hytale 于 2026 年 1 月 13 日发布，目前处于早期体验阶段。由于游戏仍在积极开发中，服务器软件、配置文件、模组支持和安装流程可能会持续变化。

:::

<InlineVoucher />


## 可用的死亡惩罚设置
死亡惩罚设置控制玩家死亡时对背包物品和耐久度的影响。这些选项让你决定物品是保留、部分丢失还是全部掉落，以及物品死亡时耐久度的损失程度。

以下是可用的配置选项：

**ItemsLossMode**  
该设置定义玩家死亡时物品丢失的整体行为。支持以下取值：

- `None` – 玩家死亡后保留全部物品
- `All` – 玩家死亡时全部物品掉落
- `Configured` – 物品丢失根据百分比设置决定

**ItemsAmountLossPercentage**  
仅在 `ItemsLossMode` 设置为 `Configured` 时生效。  
定义死亡时每个物品堆叠丢失的百分比。  
例如，`50.0` 表示每个物品堆叠丢失一半。

**ItemsDurabilityLossPercentage**  
控制玩家死亡时物品耐久度的损失百分比。  
该值基于物品当前耐久度，允许死亡带来后果但不至于直接丢失物品。

这些设置结合起来，能让你精细调整死亡惩罚的宽容度或惩罚力度，确保游戏体验符合服务器的难度和玩法风格。



## 死亡惩罚配置

死亡惩罚设置位于服务器主配置文件 `config.json` 中。服务器启动时会读取这些值，且对所有玩家生效。

在配置文件中，死亡相关设置属于游戏玩法配置部分。要添加或修改死亡惩罚，找到 `config.json` 中的以下行：

```
"GameplayConfig": "Default",
```

这行定义了当前激活的游戏玩法配置文件。死亡惩罚配置块应紧跟在此行下方。找到后，添加如下死亡配置块，定义重生和物品丢失的处理方式：

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

下面是一个典型示例，展示死亡时物品丢失和耐久度损失的部分应用：

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

在此配置中，服务器使用 `Configured` 模式，物品丢失由百分比控制。  
玩家死亡时，每个物品堆叠丢失一半，物品耐久度损失 25%。

如果不希望发生任何物品丢失，可以将丢失模式设置为 `None`，此时百分比值会被忽略：

```
{
  "ItemsLossMode": "None"
}
```

如果想要更严厉的惩罚，死亡时全部物品掉落，可以设置为：

```
{
  "ItemsLossMode": "All"
}
```

修改完 `config.json` 后，必须重启服务器才能生效。  
建议重启后在游戏内验证，确保死亡惩罚符合预期难度。



## 总结

配置好死亡惩罚后，你就能清楚掌控 Hytale 服务器上玩家死亡时的处理方式。  
如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂



<InlineVoucher />