---
id: palworld-supply-drop-settings
title: "Palworld：空投设置"
description: "了解如何通过手动编辑 SupplyDropSpan 设置来更改 Palworld 游戏服务器上的空投频率。-> 立即了解更多"
sidebar_label: Palworld：空投设置
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 中包含定时出现的空投，能在游戏过程中提供有用资源。本指南将教你如何通过编辑正确的配置文件，手动更改 ZAP-Hosting Palworld 游戏服务器上的空投频率。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 面板中的 Palworld 游戏服务器，并且有权限编辑服务器配置文件。

:::info 需要手动配置
此设置需通过服务器管理中的 **Configs** 手动完成。修改设置后，必须重启服务器，Palworld 才能加载更新后的配置。
:::

## 找到正确的配置文件

要更改空投间隔，需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 面板中：

1. 打开你的 Palworld 游戏服务器管理界面。
2. 进入 **Configs**。
3. 打开文件 `PalWorldSettings.ini`。

该文件包含 Palworld 服务器的主要游戏配置值，包括空投计时器设置。

## 编辑空投设置

在 `PalWorldSettings.ini` 中，找到 `OptionSettings` 部分，定位 `SupplyDropSpan` 条目。

相关配置键如下：

| 设置 | 说明 | 示例 |
| --- | --- | --- |
| `SupplyDropSpan` | 定义空投之间的时间间隔，单位为分钟 | `180` |

如果该条目已存在，请将其值更改为你想要的间隔时间。

### 示例数值

你可以参考以下数值：

| 数值 | 结果 |
| --- | --- |
| `30` | 非常频繁的空投 |
| `60` | 每小时一次空投 |
| `180` | 默认设置，每3小时一次 |
| `360` | 每6小时一次空投 |

### 示例配置

根据你当前文件内容，该设置会作为较大 `OptionSettings` 行的一部分出现。例如：

```ini
OptionSettings=(SupplyDropSpan=180)
```

如果文件中已有多个设置在同一个 `OptionSettings=(...)` 块内，只需更改 `SupplyDropSpan` 的值，保持其他条目不变。

例如：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution 保留现有设置
编辑 `SupplyDropSpan` 时，请勿删除 `OptionSettings` 块中的其他值。误删逗号、括号或其他条目可能导致 Palworld 配置无法正确加载。
:::

## 保存并应用更改

更新 `SupplyDropSpan` 值后：

1. 保存 `PalWorldSettings.ini` 文件的更改。
2. 在 ZAP-Hosting 服务器管理中重启你的 Palworld 服务器。

必须重启服务器，因为 Palworld 在服务器运行时不会实时应用此设置。

:::note 无需额外命令
通常不需要额外的游戏内或控制台命令。重启服务器是应用更新空投间隔的必要步骤。
:::

## 验证新的空投间隔

重启后，服务器将使用新的 `SupplyDropSpan` 值。你可以通过观察游戏中空投事件之间的时间来验证更改是否生效。

如果更改未生效，请检查以下内容：

| 检查项 | 需要确认的内容 |
| --- | --- |
| 正确的文件 | 你编辑的是 `PalWorldSettings.ini` |
| 正确的位置 | 文件是通过服务器管理中的 **Configs** 打开的 |
| 正确的语法 | `SupplyDropSpan` 拼写正确且仍在 `OptionSettings` 块内 |
| 服务器重启 | 保存后服务器已完全重启 |

:::tip 选择平衡的数值
过低的数值会导致空投出现频率远高于正常游戏体验。如果想增加空投频率但不过度，`60` 通常是一个合理的起点。
:::

## 结论

恭喜，你已成功更改 Palworld 服务器上的空投频率。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂