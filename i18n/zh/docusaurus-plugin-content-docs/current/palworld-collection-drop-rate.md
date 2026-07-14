---
id: palworld-collection-drop-rate
title: "Palworld：采集掉落率"
description: "了解如何调整 Palworld 采集设置，增加采集资源数量，加快资源刷新速度，提升你的 Palworld 游戏服务器体验。-> 立即了解更多"
sidebar_label: Palworld：采集掉落率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你控制玩家采集资源的数量以及可采集物体的刷新速度。在本指南中，你将学习如何在 ZAP-Hosting 游戏服务器中手动编辑正确的配置文件，以更改采集掉落率和相关资源设置。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 面板中的 Palworld 游戏服务器，并且服务器当前处于离线状态，或者在修改后可以重启。

:::info 配置文件访问
Palworld 的相关游戏设置存储在 `PalWorldSettings.ini` 文件中。你可以通过 ZAP-Hosting 游戏服务器管理界面的 `Configs`（配置）部分访问此文件。
:::

## 打开 Palworld 配置文件

要更改采集设置，你需要编辑 Palworld 服务器的主配置文件。

### 在 ZAP-Hosting 面板中定位文件

1. 登录 [ZAP-Hosting 面板](https://zap-hosting.com)。
2. 打开你的 Palworld 游戏服务器。
3. 进入服务器管理的 `Configs`（配置）部分。
4. 打开名为 `PalWorldSettings.ini` 的文件。

:::note 正确的文件
本指南中描述的采集相关设置都存储在 `PalWorldSettings.ini` 文件中。如果你没有立即看到预期的条目，它们通常位于 `OptionSettings` 配置行内。
:::

## 编辑采集设置

Palworld 将许多游戏选项以键值对形式存储在 `PalWorldSettings.ini` 的 `OptionSettings` 部分。要增加采集资源数量或调整资源节点刷新速度，你需要修改相关的数值。

### 相关配置键

以下是采集相关的配置项：

| 配置键 | 默认值 | 说明 |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | 控制玩家从可采集资源获得的物品数量。数值越高，采集数量越多。 |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | 控制可采集物体的刷新速度。数值越高，资源刷新越快。 |
| `CollectionObjectHpRate` | `1.000000` | 控制可采集物体（如石头或树木）的生命值。数值越高，通常需要更长时间才能采集完成。 |

### 示例配置数值

如果你想让采集资源翻倍，并且资源节点刷新速度加快一倍，可以将两个数值都设置为 `2.000000`。

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

如果你还想让可采集物体更容易采集，可以降低它们的生命值倍率：

```ini
CollectionObjectHpRate=0.500000
```

:::tip 推荐起始数值
`2.000000` 是 `CollectionDropRate` 和 `CollectionObjectRespawnSpeedRate` 的常用起始值，这样可以明显加快游戏进度，同时不会过度改变 Palworld 的游戏体验。
:::

## 在 `PalWorldSettings.ini` 中应用更改

打开 `PalWorldSettings.ini` 后，找到已有的 `OptionSettings` 条目，直接在其中调整相关键的数值。

### 示例 `OptionSettings` 片段

根据你当前服务器的配置，这一行可能已经包含许多设置。你只需修改已有的采集相关键值，或者如果缺失则添加它们。

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution 保持现有语法
请确保保持 `OptionSettings` 行的格式完整，不要误删逗号、括号或其他设置，否则服务器可能无法正确加载配置。
:::

## 保存并重启服务器

编辑完成后，在 `Configs` 部分保存你的更改。

### 重启要求

Palworld 不会在服务器运行时即时应用这些游戏配置更改。你需要保存文件后重启服务器，才能加载新的数值。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 额外控制台命令 | 无需验证的命令 |

:::info 需要重启
更改 `CollectionDropRate`、`CollectionObjectRespawnSpeedRate` 或 `CollectionObjectHpRate` 后，必须完全重启服务器。无需额外的游戏内或控制台命令。
:::

## 验证新的采集行为

重启完成后，进入服务器测试几个可采集物体，如树木、石头或矿石节点。

### 需要检查的内容

- 玩家每次采集是否获得更多材料
- 被采集的资源节点是否比之前更快刷新
- 如果你修改了 `CollectionObjectHpRate`，采集物体是否更容易或更难采集

如果效果过强或过弱，可以返回 `PalWorldSettings.ini` 继续调整倍率。

:::tip 细调你的服务器
如果想要更平衡的 Palworld 采集设置，建议逐步增加数值，比如从 `1.000000` 调整到 `1.500000`，再逐渐提高。
:::

## 配置参考

下表总结了 Palworld 采集设置中最重要的数值及其效果。

| 设置 | 示例 | 效果 |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | 默认 | 标准采集资源数量 |
| `CollectionDropRate=2.000000` | 增加 | 采集资源翻倍 |
| `CollectionObjectRespawnSpeedRate=1.000000` | 默认 | 标准刷新速度 |
| `CollectionObjectRespawnSpeedRate=2.000000` | 增加 | 资源刷新更快 |
| `CollectionObjectHpRate=1.000000` | 默认 | 标准采集物体生命值 |
| `CollectionObjectHpRate=0.500000` | 降低 | 采集物体更快被采集 |

## 结论

恭喜你，已成功更改 Palworld 服务器的采集掉落率。若有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂