---
id: palworld-change-death-penalty
title: "Palworld：更改死亡惩罚"
description: "了解如何通过编辑服务器配置更改 Palworld 的死亡惩罚，包括 DeathPenalty 值和重启步骤。-> 立即了解更多"
sidebar_label: Palworld：更改死亡惩罚
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过更改 `DeathPenalty` 服务器设置来控制玩家死亡时失去的内容。在本指南中，你将学习如何在 ZAP-Hosting 网页界面中编辑正确的配置文件并正确应用更改。



## 准备工作

开始之前，请确保：

- 你可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器
- 你的服务器处于离线状态，或者你准备好在修改后重启服务器
- 你清楚想为玩家设置哪种死亡行为

:::info 配置文件访问
对于 ZAP-Hosting 上的 Palworld 服务器，相关设置可以通过游戏服务器管理中的 **Configs** 进行编辑。
:::

## 打开 Palworld 配置文件

要更改死亡惩罚，你需要编辑 `PalWorldSettings.ini` 文件。

### 在 ZAP-Hosting 界面中找到该文件

首先，登录 ZAP-Hosting 网页界面并打开你的 Palworld 游戏服务器。然后进入游戏服务器管理的 **Configs** 部分，打开名为 `PalWorldSettings.ini` 的文件。

该文件包含你的 Palworld 服务器的主要游戏配置值，包括死亡惩罚行为。

:::note 手动配置更改
死亡惩罚设置存储在配置文件中。你需要手动编辑该值，而不是依赖单独的快捷设置，除非你当前的界面明确提供了该选项。
:::

## 更改 DeathPenalty 值

在 `PalWorldSettings.ini` 中，找到定义游戏玩法设置的 `OptionSettings` 部分。你需要找到 `DeathPenalty` 条目并将其值更改为你想要的选项。

### 支持的 DeathPenalty 值

Palworld 当前支持以下 `DeathPenalty` 设置值：

| 值 | 效果 |
| --- | --- |
| `None` | 玩家死亡时不掉落任何物品 |
| `Item` | 玩家掉落物品，但保留装备 |
| `ItemAndEquipment` | 玩家掉落物品和装备 |
| `All` | 玩家掉落物品、装备以及队伍中的所有 Pals |

:::tip 选择合适的设置
如果你想要更休闲的服务器体验，通常选择 `None` 或 `Item`。如果想要默认的生存体验，使用 `All`。
:::

### 配置示例条目

在大多数 Palworld 服务器配置中，该设置作为较长的 `OptionSettings` 行的一部分出现。例如：

```ini
OptionSettings=(DeathPenalty=All)
```

要完全禁用死亡惩罚，将其改为：

```ini
OptionSettings=(DeathPenalty=None)
```

如果你的文件中同一 `OptionSettings=(...)` 块包含多个设置，只需更改 `DeathPenalty` 的值，其他条目保持不变。例如：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

在这种情况下，你只需将 `ItemAndEquipment` 替换为你想要的值。

:::caution 保持现有语法
不要删除 `OptionSettings=(...)` 块中的逗号、括号或其他现有设置。语法错误会导致服务器无法正确加载配置。
:::

## 保存并应用更改

编辑完 `DeathPenalty` 值后，保存对 `PalWorldSettings.ini` 的更改。

### 重启服务器

保存文件后，从 ZAP-Hosting 网页界面重启你的 Palworld 服务器。必须重启服务器才能加载更新后的配置。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外控制台命令 | 否 |

:::info 需要重启
Palworld 从服务器配置中读取此设置。新的死亡行为只有在完全重启服务器后才会生效。
:::

## 验证新的死亡设置

服务器重启后，加入服务器并在游戏中测试行为，以确认更改是否生效。

### 需要检查的内容

根据你选择的值，确认玩家是否：

- 死后保留所有物品
- 只丢失背包物品
- 丢失背包物品和装备
- 丢失背包物品、装备和队伍中的 Pals

如果设置似乎没有变化，请重新打开 `PalWorldSettings.ini` 并确认：

- `DeathPenalty` 值拼写完全正确
- 更改已成功保存
- 编辑后服务器已重启

:::danger 使用精确的值名称
`DeathPenalty` 设置在配置中区分大小写。请始终使用准确的值名称：`None`、`Item`、`ItemAndEquipment` 或 `All`。
:::

## 结论

恭喜你，已成功更改 Palworld 的死亡惩罚。若有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂