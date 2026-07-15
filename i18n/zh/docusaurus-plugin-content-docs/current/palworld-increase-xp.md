---
id: palworld-increase-xp
title: "Palworld：提升经验值"
description: "了解如何通过编辑 Palworld 服务器配置并正确调整经验值倍率来提升游戏中的经验值获取。-> 立即了解更多"
sidebar_label: "提升经验值"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过服务器配置调整游戏内的各种倍率，包括玩家获得的经验值。在本指南中，你将学习如何通过编辑正确的配置文件并正确应用更改，在你的 ZAP-Hosting Palworld 服务器上提升经验值倍率。



## 准备工作

开始之前，请确保你可以通过 ZAP-Hosting 网页界面访问你的 Palworld 游戏服务器，并且拥有编辑其配置文件的权限。

:::info 配置访问权限要求
你需要访问服务器的网页管理后台，进入 `Configs`（配置）部分编辑配置文件。如果无法访问服务器管理，请先检查你在 ZAP-Hosting 面板中的产品访问权限。
:::

## 找到配置文件

要提升 Palworld 服务器的经验值倍率，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理界面：

1. 打开你的 Palworld 服务器。
2. 进入 `Configs`（配置）部分。
3. 打开文件 `PalWorldSettings.ini`。

该文件包含 Palworld 专用服务器使用的主要游戏设置，包括经验值倍率。

## 编辑经验值倍率

负责经验值获取的设置项是 `ExpRate`。

### 找到正确的设置项

打开 `PalWorldSettings.ini`，查找 `OptionSettings` 行或定义游戏倍率的部分。

相关配置项如下：

```ini
ExpRate=1.000000
```

### 修改数值

将 `ExpRate` 的值调整为你想要使用的倍率。

| 配置键 | 默认值 | 示例值 | 效果 |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | 经验值翻倍 |
| `ExpRate` | `1.000000` | `3.000000` | 经验值三倍 |

例如，要启用双倍经验，设置为：

```ini
ExpRate=2.000000
```

要启用三倍经验，设置为：

```ini
ExpRate=3.000000
```

:::tip 推荐的数值格式
Palworld 服务器设置通常使用类似 `1.000000` 或 `2.000000` 的小数格式。使用相同格式有助于保持配置一致且易于阅读。
:::

## 配置示例

根据你当前文件内容，该设置通常出现在 `OptionSettings` 块内。例如：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

如果 `ExpRate` 已存在，只需修改其值。如果缺失，则在现有的 `OptionSettings=(...)` 块内添加 `ExpRate=[你的数值]`。

:::caution 小心编辑现有的 OptionSettings 块
除非你的当前配置特别需要，否则不要创建多个 `OptionSettings` 条目。大多数情况下，你只需编辑已有的 `OptionSettings=(...)` 行并修改其中的 `ExpRate` 值。
:::

## 保存并重启服务器

修改经验值倍率后：

1. 保存 `PalWorldSettings.ini` 的更改。
2. 在 ZAP-Hosting 服务器管理界面重启你的 Palworld 服务器。

必须重启服务器，因为 Palworld 在服务器运行时不会立即应用此游戏设置更改。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外控制台命令 | 否 |

:::note 无需额外命令
此设置通常不需要额外的游戏内命令或控制台命令。服务器重启后，新经验倍率即生效。
:::

## 验证新的经验倍率

服务器重新上线后，加入服务器并执行获得经验的操作，例如击败敌人、捕捉 Pals 或完成正常游戏活动。

如果经验值获取没有变化：

- 重新打开 `PalWorldSettings.ini`
- 确认 `OptionSettings` 块内存在 `ExpRate`
- 核实数值书写正确，如 `2.000000`
- 确保保存后服务器已完全重启

:::danger 避免无效配置语法
如果不小心删除了 `OptionSettings=(...)` 行中的逗号、括号或其他值，服务器可能会忽略该设置或无法正确加载配置。保存前务必检查整行内容。
:::

## 结论

恭喜，你已成功提升了 Palworld 服务器上的经验值获取倍率。若有任何疑问或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂