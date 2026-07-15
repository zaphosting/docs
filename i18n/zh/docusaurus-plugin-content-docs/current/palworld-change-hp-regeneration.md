---
id: palworld-change-hp-regeneration
title: "Palworld：更改HP回复"
description: "了解如何通过编辑服务器上的玩家和Pal回复设置来更改Palworld中的HP回复，实现更快、更慢或禁用的治疗 -> 立即了解更多"
sidebar_label: "Palworld：更改HP回复"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld允许你通过主服务器配置更改玩家和Pal的回复设置。在本指南中，你将学习如何在ZAP-Hosting网页界面中编辑正确的配置文件，调整HP回复数值，并正确应用更改。



## 准备工作

开始之前，请确保你的Palworld服务器已在线，并且你可以通过ZAP-Hosting面板访问其网页管理界面。

:::info 配置访问要求
你需要访问游戏服务器管理和`Configs`区域，以手动编辑Palworld配置文件。
:::

## 打开Palworld配置文件

要更改HP回复，你需要编辑`PalWorldSettings.ini`文件。

在ZAP-Hosting游戏服务器管理界面：

1. 打开你的Palworld服务器。
2. 进入`Configs`。
3. 打开文件`PalWorldSettings.ini`。

该文件包含服务器的主要游戏配置值，包括玩家和Pal的生命回复倍率。

:::note 手动配置修改提示
根据你当前的配置，设置可能以长参数行的形式出现在`OptionSettings`部分。请谨慎编辑现有数值，并保持格式完整。
:::

## 更改HP回复数值

HP回复设置以数字倍率形式存储。数值`1.0`表示使用默认回复速度。

### 支持的回复设置

在`PalWorldSettings.ini`中使用以下配置键：

| 配置键 | 说明 | 默认值 |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | 玩家自然HP回复速率 | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | 玩家睡眠时HP回复速率 | `1.0` |
| `PalAutoHPRegeneRate` | Pal自然HP回复速率 | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Pal在Palbox中睡眠时的HP回复速率 | `1.0` |

### 数值含义

更改回复时可参考以下数值逻辑：

| 数值 | 效果 |
| --- | --- |
| `1.0` | 默认回复速度 |
| 大于`1.0` | 回复加快 |
| 小于`1.0` | 回复减慢 |
| `0.0` | 禁用回复 |

:::tip 选择合适的回复数值
如果想让生存体验稍微简单些，可以尝试`1.5`或`2.0`。如果想增加挑战，可以使用低于`1.0`的数值，或者用`0.0`完全禁用回复。
:::

## 编辑配置条目

在大多数Palworld服务器设置中，这些数值位于`PalWorldSettings.ini`的`OptionSettings=(...)`行内。

### 配置示例

如果缺少条目，请添加；如果已有，则修改现有数值：

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

例如，如果你想让玩家和Pal的自然回复更快，可以使用：

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

如果只想更改特定数值，只调整对应条目，保持其他`OptionSettings`值不变。

:::caution 保留现有OptionSettings值
不要删除`OptionSettings`行中无关的条目。该部分通常包含许多游戏设置，删除它们可能会意外重置服务器配置的其他部分。
:::

## 保存并应用更改

编辑完成后，在ZAP-Hosting的`Configs`区域保存更改。

要应用新的回复设置，请重启你的Palworld服务器。

### 重启服务器

1. 保存编辑后的`PalWorldSettings.ini`文件。
2. 返回服务器管理界面。
3. 重启服务器。

必须重启，因为Palworld在服务器启动时读取这些游戏设置。

:::info 需要重启
HP回复更改在服务器运行时不会立即生效。保存配置后必须重启服务器。
:::

## 验证新的回复设置

服务器重启后，加入服务器并在游戏中测试新的治疗效果。

你可以通过以下方式验证更改：

- 玩家自然HP恢复
- 玩家睡眠时的治疗
- Pal自然HP恢复
- Pal在Palbox睡眠时的治疗行为

如果回复效果不符合预期，请重新打开`PalWorldSettings.ini`确认：

- 配置键拼写完全正确
- 数值为有效的小数，如`1.0`或`2.0`
- 条目仍在`OptionSettings`部分内
- 保存后服务器已重启

## 结论

恭喜，你已成功更改Palworld中的HP回复。若有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂