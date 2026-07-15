---
id: palworld-item-weight
title: "Palworld：物品重量"
description: "了解如何通过编辑服务器配置中的物品重量设置来更改 Palworld 物品重量倍数，实现更好的携带重量平衡。-> 立即了解更多"
sidebar_label: Palworld：物品重量
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过修改主服务器设置文件中的配置值来调整服务器上的物品重量。在本指南中，你将学习如何在 ZAP-Hosting 网页界面中找到正确的文件，编辑哪个 `item weight` 设置，以及如何正确应用更改。



## 准备工作

开始之前，请确保你的 Palworld 游戏服务器已在线，并且你可以访问其网页管理界面。

:::info 必要访问权限
你需要访问 ZAP-Hosting 网页界面中的 Palworld 服务器管理面板，才能在 **Configs** 下编辑配置文件。
:::

## 打开 Palworld 配置文件

要更改物品重量倍数，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理界面：

1. 打开你的 Palworld 服务器。
2. 进入 **Configs**。
3. 打开文件 `PalWorldSettings.ini`。

该文件包含你的 Palworld 服务器使用的主要游戏玩法配置值。

:::note 配置文件作用
`PalWorldSettings.ini` 存储多个游戏玩法修改器，包括伤害、耐力、掉落率和 `item weight` 等倍率。
:::

## 编辑物品重量设置

在 `PalWorldSettings.ini` 中，找到 `OptionSettings` 部分，查找 `ItemWeightRate` 条目。

如果该条目已存在，修改其值；如果缺失，则在 `OptionSettings` 参数列表中添加它。

### 配置键

使用以下设置：

```ini
ItemWeightRate=1.000000
```

### 值的含义

`ItemWeightRate` 控制服务器上物品的重量倍数。

| 配置键 | 默认值 | 作用 |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | 标准物品重量 |
| `ItemWeightRate` 小于 `1.0` | 例如：`0.500000` | 物品更轻，玩家可携带更多 |
| `ItemWeightRate` 大于 `1.0` | 例如：`2.000000` | 物品更重，玩家可携带更少 |

### 示例数值

根据你想要的游戏平衡，可以使用以下示例值：

| 期望效果 | 数值 |
|---|---:|
| 默认物品重量 | `1.000000` |
| 半重量物品 | `0.500000` |
| 非常轻的物品 | `0.250000` |
| 双倍物品重量 | `2.000000` |

:::tip 选择合适的倍数
如果你想要更轻松的生存体验，较低的 `item weight` 值（如 `0.5`）通常是一个实用的起点。这样可以减轻背包压力，但不会完全取消重量管理。
:::

## 示例配置

在 Palworld 中，这些游戏玩法数值通常存储在 `PalWorldSettings.ini` 的 `OptionSettings=(...)` 行内。你的文件可能已经包含许多其他设置。

简化示例如下：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

许多服务器的 `OptionSettings` 已包含多个用逗号分隔的值。在这种情况下，只需添加或编辑 `ItemWeightRate` 部分，不要删除其他条目。

示例：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution 保持现有设置完整
除非你有意重置，否则不要删除 `OptionSettings` 行中的其他值。删除逗号、括号或已有条目可能导致配置错误。
:::

## 保存并应用更改

编辑文件后：

1. 保存 `PalWorldSettings.ini` 的更改。
2. 重启你的 Palworld 服务器。

必须重启服务器，因为服务器在启动时读取这些游戏配置。新的 `item weight` 值只有在重启后才能完全生效。

## 验证新的物品重量

重启后，加入服务器并在游戏中测试物品携带行为。

你应该注意到：

- 较低的数值会降低物品的实际重量
- 较高的数值会增加物品的实际重量
- 根据你选择的倍数，背包容量的感觉会有所不同

如果更改似乎未生效，请重新打开 `PalWorldSettings.ini` 并确认：

| 检查项 | 需确认内容 |
|---|---|
| 正确文件 | 你编辑的是 `PalWorldSettings.ini` |
| 正确位置 | 文件是通过服务器管理中的 **Configs** 打开的 |
| 正确键值 | 存在 `ItemWeightRate` |
| 正确语法 | 如果文件使用该格式，值在 `OptionSettings=(...)` 行内 |
| 已完成重启 | 保存后服务器已重启 |

## 结论

恭喜你，已成功更改 Palworld 服务器上的物品重量设置。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂