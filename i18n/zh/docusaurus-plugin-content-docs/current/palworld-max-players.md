---
id: palworld-max-players
title: "Palworld: 最大玩家数"
description: "了解如何通过编辑 ZAP 面板中的正确配置文件来更改 Palworld 游戏服务器的最大玩家数设置。-> 立即了解更多"
sidebar_label: Palworld: 最大玩家数
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你控制同时加入服务器的最大玩家数量。在本指南中，你将学习如何通过编辑 ZAP-Hosting 游戏服务器管理中的正确配置文件，手动更改最大玩家数。



## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 网页面板中的 Palworld 游戏服务器管理界面。

:::info 配置文件访问
你需要通过游戏服务器管理中的 **Configs** 区域手动编辑服务器配置文件。如果你还不知道如何访问你的游戏服务器，请先从 ZAP-Hosting 网页面板打开它。
:::

## 找到 Palworld 配置文件

要更改最大玩家数，你需要编辑 `PalWorldSettings.ini` 文件。

在你的 ZAP-Hosting 游戏服务器管理界面：

1. 打开你的 **Palworld** 服务器
2. 进入 **Configs**
3. 打开名为 `PalWorldSettings.ini` 的文件

该文件包含主要的游戏玩法和服务器设置，包括允许的最大玩家数。

:::note 正确的文件
本次更改只需编辑 `PalWorldSettings.ini`。如果服务器中有其他文件，除非你完全了解它们的作用，否则不要修改无关的值。
:::

## 更改最大玩家数

在 `PalWorldSettings.ini` 文件中，找到 `OptionSettings` 部分，定位 `ServerPlayerMaxNum` 条目。

相关设置如下：

| 配置键 | 描述 | 默认值 |
| --- | --- | --- |
| `ServerPlayerMaxNum` | 设置允许加入服务器的最大玩家数 | `32` |

典型条目示例如下：

```ini
ServerPlayerMaxNum=32
```

将该值更改为你想要的玩家上限。例如，允许 16 名玩家：

```ini
ServerPlayerMaxNum=16
```

或者保持默认的 32 人设置：

```ini
ServerPlayerMaxNum=32
```

:::caution 使用支持的数值
Palworld 专用服务器通常默认最大玩家数为 `32`。如果设置过高，可能会根据你的服务器方案和当前游戏版本影响服务器稳定性或性能。如果不确定，建议先设置较低数值并测试服务器。
:::

## 配置示例

根据文件格式不同，该设置可能出现在较长的 `OptionSettings` 行内。此时只需更改 `ServerPlayerMaxNum` 的值即可。

示例：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

如果你的文件是这种格式，不要删除逗号、括号或其他条目的引号。只替换 `ServerPlayerMaxNum=` 后面的数字。

## 保存并应用更改

更改数值后：

1. 保存 `PalWorldSettings.ini` 文件
2. 重启你的 Palworld 服务器

必须重启服务器，新的最大玩家数设置才会生效。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 运行额外控制台命令 | 无需额外命令（未验证） |
| 重启服务器 | 是 |

:::tip 需要重启
`ServerPlayerMaxNum` 配置更改在服务器运行时不会立即生效。你需要重启服务器，让 Palworld 加载更新后的设置。
:::

## 验证新的玩家上限

重启后，服务器应使用新的最大玩家数。

你可以通过以下方式验证：

- 查看游戏服务器管理界面中的服务器详情（如果显示）
- 多人加入服务器测试
- 再次检查 `PalWorldSettings.ini` 中的当前配置

如果设置未生效，请重新打开文件确认：

- 存在 `ServerPlayerMaxNum=[你的数值]`
- 文件格式未被破坏
- 保存后服务器已完全重启

:::caution 配置语法
如果不小心删除了 `OptionSettings` 行中的逗号、括号或其他值，服务器可能会忽略该设置或无法正确加载配置。请谨慎编辑，只更改所需的数值。
:::

## 结论

恭喜，你已成功更改 Palworld 服务器的最大玩家数。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为你服务！🙂