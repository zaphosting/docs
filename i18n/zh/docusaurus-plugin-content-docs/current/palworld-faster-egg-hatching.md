---
id: palworld-faster-egg-hatching
title: "Palworld：加快孵蛋速度"
description: "了解如何通过编辑 Palworld 服务器的孵蛋设置来缩短孵蛋时间，实现更快的孵化效果。-> 立即了解更多"
sidebar_label: Palworld：加快孵蛋速度
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在 Palworld 中，孵蛋时间由服务器配置值控制。本指南将教你如何通过编辑正确的配置文件并正确应用更改，来缩短你在 ZAP-Hosting Palworld 服务器上的孵蛋时间。



## 准备工作

开始之前，请确保：

- 你可以访问你的 ZAP-Hosting 游戏服务器网页界面
- 你的 Palworld 服务器在游戏服务器管理中可用
- 你能够编辑 **Configs** 部分下的文件

:::info 配置文件访问
对于 ZAP-Hosting 上的 Palworld，相关服务器设置可以通过游戏服务器管理中的 **Configs** 进行编辑。此任务需要修改 `PalWorldSettings.ini` 文件。
:::

## 了解孵蛋设置

Palworld 使用 `PalEggDefaultHatchingTime` 设置来定义基础孵蛋时间，单位为小时。数值越低，蛋孵化越快。

根据当前 Palworld 服务器配置参考，默认值为 `72`，表示一个巨大蛋的孵化时间为 72 小时。其他蛋类型的孵化时间也基于此值进行缩放。

| 配置键 | 默认值 | 描述 |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | 基础孵蛋时间（小时） |

:::note 设置工作原理
此值影响服务器上所有玩家的孵蛋过程。如果你降低它，所有使用孵化器的玩家的孵化速度都会加快。
:::

## 打开 Palworld 配置文件

首先，你需要在 ZAP-Hosting 界面中访问正确的配置文件。

### 进入 Configs 部分

打开你的 Palworld 游戏服务器管理，进入 **Configs** 部分。找到并打开名为：

```ini
PalWorldSettings.ini
```

该文件包含你的 Palworld 服务器的游戏玩法配置项，包括孵蛋时间设置。



## 编辑孵蛋时间

打开 `PalWorldSettings.ini` 后，搜索 `OptionSettings` 行。Palworld 将许多游戏设置存储在此部分。

### 修改所需配置键

找到以下条目：

```ini
PalEggDefaultHatchingTime=72.000000
```

将数值改为更低的数字，以加快孵蛋速度。

例如：

```ini
PalEggDefaultHatchingTime=24.000000
```

这会将基础孵蛋时间从 72 小时缩短到 24 小时。

### 示例数值

你可以根据想要的孵化速度选择不同的数值。

| 数值 | 结果 |
| --- | --- |
| `72.000000` | 默认孵蛋时间 |
| `48.000000` | 稍微加快，游戏更平衡 |
| `24.000000` | 孵蛋速度明显加快 |
| `12.000000` | 非常快的孵蛋速度 |
| `1.000000` | 极快孵化 |

:::caution 使用合理数值
过低的数值会显著改变游戏平衡。如果想要更自然的进程，建议从 `24.000000` 或 `48.000000` 这样的中等数值开始。
:::

### 配置示例片段

根据你当前的配置，该设置会出现在 `OptionSettings` 块内。典型示例如下：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip 编辑正确条目
如果 `PalEggDefaultHatchingTime` 键已存在，请编辑现有值，避免重复添加。`OptionSettings` 块内重复的键可能导致设置被忽略或覆盖。
:::

## 保存并应用更改

编辑完成后，在 ZAP-Hosting 界面保存 `PalWorldSettings.ini` 文件。

### 重启服务器

保存后，重启你的 Palworld 服务器以加载新的孵蛋时间设置。

:::info 需要重启
配置更新后，必须重启服务器才能生效。
:::

## 已孵化蛋的重要行为

如果蛋已经在孵化中，新的孵蛋时间不会可靠地更新这些正在进行的孵化计时。实际上，你需要移除并重新开始受影响的蛋的孵化过程，才能应用新的孵化速度。

| 情况 | 需要的操作 |
| --- | --- |
| 变更后放入的新蛋 | 重启后无需额外操作 |
| 变更前已在孵化的蛋 | 需要重新开始孵化 |

:::note 已存在的孵化计时
如果更改孵蛋时间后没有看到预期效果，请检查蛋是否在配置更改前已开始孵化。
:::

## 结论

恭喜，你已成功缩短了 Palworld 服务器上的孵蛋时间。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂