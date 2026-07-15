---
id: palworld-change-day-night-speed
title: "Palworld：调整昼夜速度"
description: "了解如何通过编辑服务器上的昼夜循环设置来调整 Palworld 中的昼夜速度。-> 立即了解更多"
sidebar_label: Palworld：调整昼夜速度
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你调整服务器上昼夜循环的速度。在本指南中，你将学习如何通过编辑 ZAP-Hosting 游戏服务器管理中的正确配置文件来更改昼夜速度，并正确应用更改。



## 准备工作

开始之前，请确保你可以通过 ZAP-Hosting 网页界面访问你的 Palworld 游戏服务器，并且拥有编辑服务器配置文件的权限。

:::info 需要手动配置
此设置需通过服务器配置文件手动完成。你需要直接编辑 Palworld 的设置，而不是使用游戏内的自动命令。
:::

## 找到配置文件

要更改昼夜速度，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理中，你可以通过 **Configs**（配置）部分访问此文件。打开你的 Palworld 服务器网页界面，导航到配置文件管理区域。

相关文件为：

```ini
PalWorldSettings.ini
```

:::note 配置文件位置说明
根据游戏服务器模板和面板布局不同，该文件通常通过 ZAP-Hosting 管理界面的 **Configs** 区域提供。如果界面中显示了完整的内部路径，通常就是用于游戏玩法配置的 Palworld 服务器设置文件。
:::

## 编辑昼夜速度设置

在 `PalWorldSettings.ini` 中，查找用于昼夜速度的游戏玩法配置项。

你需要调整以下数值：

| 配置键 | 默认值 | 说明 |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | 控制白天流逝速度 |
| `NightTimeSpeedRate` | `1.000000` | 控制夜晚流逝速度 |

数值越大，时间流逝越快；数值越小，时间流逝越慢。

### 示例配置

如果你想让白天和夜晚都加速，可以设置更高的数值，例如：

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

如果你想让白天更长，夜晚更快，可以使用不同的数值，例如：

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### 数值放置位置

Palworld 将许多游戏设置存储在 `PalWorldSettings.ini` 的 `OptionSettings` 部分。你应该编辑已有的 `DayTimeSpeedRate` 和 `NightTimeSpeedRate` 条目，而不是在其他地方添加重复键。

典型的配置段落类似于：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

编辑后可能变成：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution 小心编辑已有条目
确保只修改 `DayTimeSpeedRate=` 和 `NightTimeSpeedRate=` 后的数值。不要删除逗号、括号或 `OptionSettings` 行中的其他设置，格式错误会导致服务器无法正确加载配置。
:::

## 保存并应用更改

更新完 `PalWorldSettings.ini` 中的数值后，在 ZAP-Hosting 配置编辑器中保存文件。

保存后，重启你的 Palworld 服务器，使新的昼夜循环设置生效。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外控制台命令 | 否 |

:::tip 需要重启服务器
Palworld 世界设置的配置更改只有在服务器重启后才能可靠生效。每次更改昼夜速度后，请务必重启服务器。
:::

## 验证新的昼夜循环

重启完成后，加入你的服务器，观察游戏内时间的流逝。

你应该能注意到：

- **白天** 根据 `DayTimeSpeedRate` 变快或变慢
- **夜晚** 根据 `NightTimeSpeedRate` 变快或变慢

如果速度没有变化，请重新打开 `PalWorldSettings.ini`，确认：

- 数值已正确保存
- `OptionSettings` 行格式仍然有效
- 更改后服务器已重启

## 配置参考

以下表格可作为你以后再次调整昼夜速度时的快速参考。

| 设置 | 示例 | 结果 |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | 白天变慢 | 白天持续时间更长 |
| `DayTimeSpeedRate=2.000000` | 白天变快 | 白天流逝更快 |
| `NightTimeSpeedRate=0.500000` | 夜晚变慢 | 夜晚持续时间更长 |
| `NightTimeSpeedRate=2.000000` | 夜晚变快 | 夜晚流逝更快 |

:::note 平衡设置建议
如果想要更自然的游戏体验，避免使用极端高的数值。昼夜变化过快会让农耕、探索和基地管理变得难以规划。
:::

## 结论

恭喜，你已成功更改了 Palworld 服务器上的昼夜速度。若有任何问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂