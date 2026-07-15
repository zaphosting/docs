---
id: palworld-max-workers
title: "Palworld：最大工人数量"
description: "了解如何通过编辑 BaseCampWorkerMaxNum 来更改 Palworld 的最大工人设置，包括每个基地的默认最大值和安全的原版限制。-> 立即了解更多"
sidebar_label: "Palworld：最大工人数量"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你更改服务器上每个基地营地分配的最大工作 Pal 数量。在本指南中，你将学习如何在 ZAP-Hosting 网页界面中编辑正确的配置文件，调整 `BaseCampWorkerMaxNum` 值，并正确应用更改。



## 准备工作

开始之前，请确保你可以通过 ZAP-Hosting 游戏服务器管理面板访问你的 Palworld 游戏服务器。

:::info 配置访问要求
你需要访问服务器的网页管理界面，以便打开 **Configs** 部分并手动编辑 Palworld 配置文件。
:::

## 了解最大工人设置

Palworld 中负责最大工人数量的设置是 `BaseCampWorkerMaxNum`。此选项控制每个基地营地最多可以有多少 Pal 工作。

| 设置 | 配置文件 | 作用 | 默认值 | 原版最大值 |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | 设置每个基地营地的最大工人 Pal 数量 | `15` | `50` |

:::note 原版限制说明
当前公开文档显示游戏内正常最大值为 `50`。超过 `50` 的数值通常需要使用模组，且不属于标准原版服务器配置。
:::

:::caution 性能影响
增加工人数量会提高 CPU 和内存使用，因为更多 Pal 会在基地活动。使用较高数值时，请在更改后监控服务器性能。
:::

## 打开 Palworld 配置文件

要更改最大工人设置，你需要编辑 `PalWorldSettings.ini` 文件。

### 在 ZAP-Hosting 界面中找到文件

打开你的 Palworld 游戏服务器管理，导航至：

- `Configs`
- `PalWorldSettings.ini`

这是存储 Palworld 服务器游戏设置的配置文件。



## 编辑 BaseCampWorkerMaxNum 值

打开 `PalWorldSettings.ini` 后，查找 `OptionSettings` 行。Palworld 服务器设置通常以逗号分隔的键值对形式存储在此部分。

### 修改配置项

找到以下键：

```ini
BaseCampWorkerMaxNum=15
```

将值更改为你想要的数量。例如，允许每个基地有 `20` 个工人 Pal，写成：

```ini
BaseCampWorkerMaxNum=20
```

### 配置示例

根据你当前的文件，设置通常出现在类似下面的较长 `OptionSettings` 条目中：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip 仅修改必要的值
除非你有意调整其他游戏设置，否则只修改 `BaseCampWorkerMaxNum`，避免意外配置错误。
:::

## 推荐数值

你可以根据游戏风格选择任何数值，只要它在支持的原版限制范围内。

| 数值 | 结果 | 推荐理由 |
| --- | --- | --- |
| `15` | 默认 Palworld 工人限制 | 适合标准游戏体验 |
| `20` 到 `30` | 增加基地自动化 | 大多数私人服务器的良好平衡 |
| `40` 到 `50` | 非常高的工人数量 | 仅在服务器资源充足时使用 |
| 超过 `50` | 非标准原版行为 | 通常需要模组，未经测试不推荐 |

## 保存并应用更改

编辑完成后，在 ZAP-Hosting 配置编辑器中保存 `PalWorldSettings.ini` 文件。

### 重启服务器

保存文件后，重启你的 Palworld 服务器，使新的最大工人设置生效。

:::info 需要重启
`PalWorldSettings.ini` 的更改不会在服务器运行时立即生效。保存后必须重启服务器。
:::

## 验证新的工人限制

服务器重启后，加入你的 Palworld 服务器，检查任一基地营地。你现在应该可以分配到你设置的新工人上限。

如果更改未生效，请检查以下内容：

| 检查项 | 验证内容 |
| --- | --- |
| 正确的文件 | 你编辑的是 `PalWorldSettings.ini` |
| 正确的键 | `BaseCampWorkerMaxNum` 存在且拼写正确 |
| 有效的语法 | `OptionSettings` 行未被破坏 |
| 重启完成 | 保存后服务器已完全重启 |
| 数值范围 | 数值在原版正常限制 `50` 以内 |

:::caution 配置语法注意
Palworld 配置项对格式非常敏感。如果不小心删除了逗号、括号或 `OptionSettings` 行的其他部分，服务器可能会忽略该设置或加载失败。
:::

## 结论

恭喜你，已成功更改 Palworld 服务器上每个基地营地的最大工人数量。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂