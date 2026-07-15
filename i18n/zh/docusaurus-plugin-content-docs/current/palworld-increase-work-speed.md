---
id: palworld-increase-work-speed
title: "Palworld：提升工作速度"
description: "了解如何通过编辑 WorkSpeedRate 设置来提升 Palworld 中玩家和 Pal 的工作速度，从而加快服务器上的工作进度。-> 立即了解更多"
sidebar_label: "Palworld：提升工作速度"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过更改服务器配置值来调整玩家和 Pal 完成基地相关工作的速度。在本指南中，你将学习如何通过编辑正确的配置文件并正确应用更改，在你的 ZAP-Hosting Palworld 服务器上提升工作速度。



## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 网站上的 Palworld 游戏服务器管理界面。

:::info 需要手动配置
此设置需通过配置编辑器手动完成。你需要在游戏服务器管理的 `Configs` 部分自行编辑 Palworld 服务器配置文件。
:::

## 打开 Palworld 配置文件

要更改工作速度，你需要编辑 `PalWorldSettings.ini` 文件。

### 文件位置

1. 登录 ZAP-Hosting 网站。
2. 打开你的 **Palworld** 游戏服务器管理界面。
3. 进入 **Configs**。
4. 打开名为 `PalWorldSettings.ini` 的文件。

该文件包含控制你 Palworld 服务器游戏玩法速率和倍数的设置。

:::note 配置文件位置说明
在 ZAP-Hosting，相关文件可直接通过游戏服务器管理的 `Configs` 访问。如果你的服务器显示多个配置文件，请确保编辑的是 `PalWorldSettings.ini`。
:::

## 修改工作速度设置

用于提升工作速度的设置项是 `WorkSpeedRate`。

### 设置作用说明

`WorkSpeedRate` 控制玩家和 Pal 在基地执行工作任务的速度。默认值通常为 `1.0`，表示正常速度。

更高的数值会增加速度倍数：

| 配置键 | 默认值 | 示例值 | 效果 |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | 工作速度加倍 |
| `WorkSpeedRate` | `1.0` | `10.0` | 工作速度非常快 |

### 编辑数值

在 `PalWorldSettings.ini` 中查找 `OptionSettings` 行。`WorkSpeedRate` 条目存储在该设置块内。

如果该条目已存在，修改其数值。例如：

```ini
WorkSpeedRate=1.000000
```

将其更改为更高的数值，例如：

```ini
WorkSpeedRate=2.000000
```

若想获得更快的效果，可以使用更高的倍数，例如：

```ini
WorkSpeedRate=10.000000
```

### 配置示例片段

根据你当前文件内容，该设置可能作为较长的 `OptionSettings` 行的一部分，类似如下：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution 小心编辑现有语法
`PalWorldSettings.ini` 使用严格格式。请确保只更改 `WorkSpeedRate` 的数值，不要删除逗号、括号或引号等 `OptionSettings` 行中的其他内容。
:::

## 保存并重启服务器

编辑完成后，需要保存更改并重启 Palworld 服务器。

### 应用更改

1. 保存更新后的 `PalWorldSettings.ini` 文件。
2. 在 ZAP-Hosting 服务器管理界面重启你的 Palworld 游戏服务器。

必须重启服务器，因为 Palworld 只在启动时读取这些游戏设置。服务器未重启前，新工作速度不会生效。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 额外控制台命令 | 否 |

:::tip 推荐测试方法
建议先使用适中的数值如 `2.0` 进行测试。过高的数值可能导致游戏进度过快，影响整体游戏平衡。
:::

## 验证新的工作速度

服务器重新上线后，加入你的 Palworld 服务器，测试基地的工作相关活动。

你应该能明显感受到玩家和 Pal 完成任务的速度比之前更快。如果没有变化，请重新打开 `PalWorldSettings.ini`，确认：

- `WorkSpeedRate` 是否存在
- 数值是否设置正确
- 文件是否成功保存
- 编辑后服务器是否完全重启

:::note 游戏平衡提示
提升工作速度会显著影响基地发展速度。若想保持平衡体验，建议逐步增加数值，而非一次设置过高。
:::

## 结论

恭喜，你已成功提升了 Palworld 服务器的工作速度。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂