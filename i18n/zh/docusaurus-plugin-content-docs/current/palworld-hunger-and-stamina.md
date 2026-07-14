---
id: palworld-hunger-and-stamina
title: "Palworld：饥饿与耐力"
description: "了解如何通过编辑服务器配置来调整 Palworld 中玩家和 Pal 的饥饿与耐力消耗速率。-> 立即了解更多"
sidebar_label: Palworld：饥饿与耐力
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你控制玩家和 Pal 的饥饿与耐力消耗速度。在本指南中，你将学习如何在 ZAP-Hosting 网页界面中编辑正确的服务器配置文件，并安全地应用自定义消耗速率。

## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 游戏服务器管理中的 Palworld 服务器。

:::info 配置访问要求
你需要访问服务器管理面板及其 `Configs`（配置）部分，才能手动编辑 Palworld 配置文件。
:::

## 打开 Palworld 配置文件

要更改饥饿和耐力的行为，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理中：

1. 打开你的 Palworld 服务器。
2. 进入 `Configs`（配置）部分。
3. 打开 `PalWorldSettings.ini` 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note 用于游戏倍率的文件
饥饿和耐力设置存储在 `PalWorldSettings.ini` 中。这些值通常是专用服务器使用的主选项字符串的一部分。
:::

## 修改饥饿与耐力数值

在 `PalWorldSettings.ini` 中，找到包含服务器选项值的游戏设置部分。你需要添加或调整以下配置键。

:::caution Palworld 中拼写的重要性
Palworld 在这些配置项中使用了拼写 `Decreace`。这是服务器配置格式中的特意写法，因此你必须严格按照下面显示的键名使用。
:::

### 可用配置键

| 配置键 | 说明 | 默认值 |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | 控制玩家饥饿消耗速率 | `1.0` |
| `PlayerStaminaDecreaceRate` | 控制玩家耐力消耗速率 | `1.0` |
| `PalStomachDecreaceRate` | 控制 Pal 饥饿消耗速率 | `1.0` |
| `PalStaminaDecreaceRate` | 控制 Pal 耐力消耗速率 | `1.0` |

### 数值含义

较低的数值会减少饥饿或耐力的消耗速度。

| 数值 | 效果 |
| --- | --- |
| `1.0` | 默认消耗速率 |
| `0.5` | 消耗速率减半 |
| `0.0` | 完全禁用消耗 |

:::tip 选择平衡设置
如果你想要更轻松的生存体验，但不想完全取消该机制，`0.5` 是饥饿和耐力的实用起点。
:::

## 示例配置

根据你想要的游戏体验，在 `PalWorldSettings.ini` 中添加或修改以下数值：

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

此示例将玩家和 Pal 的饥饿与耐力消耗降低为默认速率的一半。

如果你想完全禁用饥饿和耐力消耗，请使用：

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note 设置位置说明
根据你的 `PalWorldSettings.ini` 结构，这些数值可能需要包含在现有的选项列表中，而不是作为独立的单行。如果文件中已有较长的 `OptionSettings` 条目，请确保保留现有格式，只更改或插入相关键。
:::

## 保存并重启服务器

编辑文件后：

1. 保存 `PalWorldSettings.ini` 的更改。
2. 在 ZAP-Hosting 游戏服务器管理中重启你的 Palworld 服务器。

重启后，新设置的饥饿和耐力数值才会生效。

:::caution 必须重启服务器
如果不重启服务器，游戏服务器将不会加载更新后的配置值。
:::

## 游戏内验证更改

服务器重新上线后，加入服务器测试新设置。

### 需要检查的内容

- 玩家饥饿是否变得更慢消耗
- 玩家耐力在移动和动作时是否持续更久
- Pal 的饥饿是否按预期速率减少
- Pal 的耐力消耗是否符合配置数值

如果数值未生效，请重新打开 `PalWorldSettings.ini` 并确认：

- 配置键拼写完全正确
- 数值为有效的小数，如 `1.0`、`0.5` 或 `0.0`
- 设置已正确保存
- 编辑后服务器已完全重启

## 结论

恭喜你，已成功修改 Palworld 服务器上的饥饿与耐力消耗速率。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂