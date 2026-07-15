---
id: palworld-equipment-durability-rate
title: "Palworld：装备耐久度倍率"
description: "了解如何通过编辑正确的配置值来更改装备耐久度，并调整您 Palworld 服务器上的装备耐久度倍率。-> 立即了解更多"
sidebar_label: "装备耐久度倍率"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 Palworld 中，装备耐久度倍率控制您的工具、武器和护甲在使用过程中耐久度的消耗速度。本指南将教您如何手动更改 ZAP-Hosting Palworld 服务器配置中的 `EquipmentDurabilityDamageRate` 设置，并正确应用该更改。



## 准备工作

开始之前，请确保您可以访问 ZAP-Hosting 网站上的 Palworld 游戏服务器管理界面。您还需要有权限编辑服务器配置文件，路径在 **Configs** 下。

:::info 需要手动配置
此设置必须在 Palworld 配置文件中手动更改。此特定更改无需在游戏内执行任何命令。
:::

## 了解耐久度设置

Palworld 将许多游戏玩法设置存储在 `PalWorldSettings.ini` 配置文件中。与装备耐久度相关的设置是：

- `EquipmentDurabilityDamageRate`

该值作为耐久度损耗的乘数：

| 配置键 | 说明 | 默认值 |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | 控制装备耐久度消耗速度 | `1.000000` |

较低的数值会减少耐久度损耗，意味着您的装备可以使用更长时间。数值为 `0.000000` 时，装备耐久度完全不消耗。

:::note 此设置影响范围
此设置仅改变工具、武器和护甲等装备的耐久度损耗速率，不会增加物品伤害、修理速度或物品品质。
:::

## 打开 Palworld 配置文件

要更改该设置，您需要从 ZAP-Hosting 游戏服务器管理界面编辑 Palworld 服务器的主配置文件。

### 在 ZAP-Hosting 界面中找到文件

1. 登录 ZAP-Hosting 网站。
2. 打开您的 **Palworld** 游戏服务器管理界面。
3. 进入 **Configs**。
4. 打开文件 `PalWorldSettings.ini`。

该文件存储了 Palworld 的游戏玩法数值，如耐久度、耐力、伤害及其他世界设置。

## 编辑装备耐久度倍率

打开 `PalWorldSettings.ini` 后，查找 `OptionSettings` 行。Palworld 通常将游戏设置以逗号分隔的条目形式存储在此部分。

### 添加或修改配置项

确保 `OptionSettings` 中存在以下条目：

```ini
EquipmentDurabilityDamageRate=1.000000
```

如果该键已存在，请将其当前值替换为您想要的数值；如果缺失，则在现有的 `OptionSettings=(...)` 块内添加。

### 示例数值

根据您想要的效果，可以使用以下数值：

| 数值 | 效果 |
| --- | --- |
| `1.000000` | 默认耐久度消耗 |
| `0.500000` | 装备耐久度大约延长一倍 |
| `0.250000` | 装备耐久度大约延长四倍 |
| `0.000000` | 装备变为不可破坏 |

### 配置示例片段

您的 `OptionSettings` 行内容可能因服务器设置不同而异，但耐久度设置应出现在同一逗号分隔列表中，例如：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution 保持现有格式
编辑文件时请勿删除 `OptionSettings` 行中的其他数值。Palworld 需要这些设置保持正确的逗号分隔格式。
:::

## 保存并应用更改

编辑配置文件后，请在 ZAP-Hosting 界面保存您的更改。

### 重启服务器

要使新的耐久度设置生效，请从游戏服务器管理界面重启您的 Palworld 服务器。

未重启服务器时，通常不会加载更新后的配置。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行游戏内命令 | 否 |
| 重新安装服务器 | 否 |

:::tip 先用小幅度调整测试
如果不确定哪个耐久度数值适合您的游戏风格，建议先用 `0.500000`。这会明显提升耐久度，但不会完全关闭该机制。
:::

## 故障排除

如果重启后新装备耐久度设置未生效，请检查以下几点。

### 核实配置键名

确保键名完全写为：

```ini
EquipmentDurabilityDamageRate
```

Palworld 配置键名在实际管理中区分大小写，请严格复制上述名称。

### 检查是否放置在 `OptionSettings` 内

该值必须位于 `PalWorldSettings.ini` 的 `OptionSettings=(...)` 部分内。放置在该块外部，服务器可能会忽略。

### 确认文件已保存

在 **Configs** 中编辑后，重新打开 `PalWorldSettings.ini` 确认更改仍然存在。若无，说明文件未成功保存。

### 如有必要，重新重启

如果更改时有玩家在线或服务器未正常重启，请再次从管理面板执行完整重启。

## 结论

恭喜，您已成功更改 Palworld 服务器上的装备耐久度倍率。如有更多问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为您服务！🙂