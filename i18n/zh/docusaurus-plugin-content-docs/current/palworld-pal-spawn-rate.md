---
id: palworld-pal-spawn-rate
title: "Palworld：Pal 出生率"
description: "了解如何通过编辑服务器上的 Pal 频率出生设置来更改 Palworld 中 Pal 的出生率 -> 立即了解更多"
sidebar_label: Palworld：Pal 出生率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过服务器配置设置控制 Pal 在世界中的出生频率。在本指南中，你将学习如何在 ZAP-Hosting 游戏服务器管理中编辑正确的配置文件，并安全地应用新的 Pal 出生率。



## 准备工作

开始之前，请确保：

- 你可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器
- 你的服务器处于离线状态，或者你准备好在修改后重启服务器
- 你理解较高的出生率可能会增加服务器负载并降低性能

:::info 需要手动配置
此更改需通过编辑游戏服务器管理中的 **Configs** 下的服务器配置文件手动完成。ZAP-Hosting 面板中没有针对该设置的独立滑块。
:::

## 打开 Palworld 配置文件

要更改 Pal 出生率，你需要编辑 `PalWorldSettings.ini` 文件。

在你的 ZAP-Hosting 游戏服务器管理中：

1. 打开你的 **Palworld** 服务器。
2. 进入 **Configs**。
3. 打开文件 `PalWorldSettings.ini`。

该文件包含主要的游戏玩法相关服务器设置，包括 Pal 出生倍率。

:::note 配置文件位置说明
对于 ZAP-Hosting 的 Palworld 服务器，相关文件可直接通过游戏服务器管理中的 **Configs** 部分访问，已包含在服务器设置中。
:::

## 更改 Pal 出生率

你需要修改的设置是 `PalSpawnNumRate`。

### `PalSpawnNumRate` 的作用

`PalSpawnNumRate` 控制服务器上 Pal 的出生频率倍率。

| 配置键 | 默认值 | 描述 |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | 控制世界中 Pal 的出生数量。数值越高，出生频率越高。 |

在 Palworld 中，该值通常是 `PalWorldSettings.ini` 文件中 `OptionSettings` 行的一部分。

### 编辑该设置

打开 `PalWorldSettings.ini`，找到 `OptionSettings=` 部分。在该部分内找到 `PalSpawnNumRate` 条目。

如果该条目已存在，修改其数值。例如：

```ini
PalSpawnNumRate=1.000000
```

你可以将其增加为：

```ini
PalSpawnNumRate=2.000000
```

此示例将 Pal 出生倍率翻倍，相较默认值提高一倍。

:::tip 推荐起始数值
建议从较小的增幅开始，如 `1.500000` 或 `2.000000`，并测试服务器性能后再尝试更高数值。
:::

### 配置示例片段

根据你现有文件内容，该设置可能出现在类似下面的长 `OptionSettings` 行中：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution 保持现有语法
请勿删除 `OptionSettings` 行中的逗号、括号或其他已有值。`PalWorldSettings.ini` 格式错误可能导致服务器无法正确加载配置。
:::

## 推荐数值及性能影响

你可以根据想要的游戏体验选择不同数值。

| 数值 | 效果 |
| --- | --- |
| `1.000000` | 默认 Pal 出生率 |
| `1.500000` | 稍微增加出生频率 |
| `2.000000` | 明显增加世界中的 Pal 数量 |
| `3.000000` 或更高 | 大幅增加出生，可能影响性能 |

较高数值能让世界更活跃，但也会增加服务器需要处理的实体数量。

:::danger 高出生率可能降低稳定性
非常高的出生率设置可能严重影响服务器性能，尤其是在繁忙服务器或与其他高负载世界设置同时使用时。如发现卡顿，请降低数值并重启服务器。
:::

## 保存并重启服务器

编辑完成后：

1. 保存 `PalWorldSettings.ini` 文件的更改。
2. 在 ZAP-Hosting 游戏服务器管理中重启你的 Palworld 服务器。

重启后新 Pal 出生率设置才会生效。

## 验证更改

服务器重新上线后，加入你的 Palworld 服务器，观察 Pal 通常出现区域的世界活动。

如果出生率似乎没有变化：

- 重新打开 `PalWorldSettings.ini`，确认 `PalSpawnNumRate` 是否存在
- 确保数值位于正确的 `OptionSettings` 部分内
- 确认文件已成功保存
- 确认更改后再次重启服务器

## 配置参考

| 项目 | 数值 |
| --- | --- |
| 配置文件 | `PalWorldSettings.ini` |
| ZAP-Hosting 位置 | 游戏服务器管理 → `Configs` |
| 设置名称 | `PalSpawnNumRate` |
| 默认值 | `1.000000` |
| 是否需要重启 | 是 |

## 结论

恭喜，你已成功更改 Palworld 服务器上的 Pal 出生率。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂