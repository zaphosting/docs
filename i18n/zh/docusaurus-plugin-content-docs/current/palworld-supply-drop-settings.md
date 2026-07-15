---
id: palworld-supply-drop-settings
title: "Palworld：空投设置"
description: "了解如何通过手动编辑 SupplyDropSpan 设置来更改 Palworld 游戏服务器上的空投频率。-> 立即了解更多"
sidebar_label: "Palworld：空投设置"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 包含定期出现的空投，内含有用资源。通过本指南，你将学会如何在 ZAP-Hosting Palworld 游戏服务器上手动更改空投频率，方法是编辑正确的配置文件并正确应用更改。

## 准备工作

开始之前，请确保你可以通过 ZAP-Hosting 网页界面访问你的 Palworld 游戏服务器，并且服务器当前在你的游戏服务器管理中可用。

:::info 需要手动配置
此设置需通过手动编辑 Palworld 服务器配置完成。你需要通过游戏服务器管理中的 **Configs** 部分打开配置文件。
:::

## 找到配置文件

要更改空投间隔，你需要编辑 `PalWorldSettings.ini` 文件。

在你的 ZAP-Hosting 游戏服务器管理中：

1. 打开你的 Palworld 服务器。
2. 进入 **Configs**。
3. 打开文件 `PalWorldSettings.ini`。



:::note 配置文件位置说明
在 ZAP-Hosting，Palworld 的相关游戏设置通常通过服务器管理中的 **Configs** 区域内的 `PalWorldSettings.ini` 文件管理。如果你的界面布局略有不同，请在可用的配置文件列表中查找 `PalWorldSettings.ini`。
:::

## 编辑空投设置

用于空投频率的设置是 `SupplyDropSpan`。

该值定义空投之间的间隔，单位为**分钟**。

### 找到正确的部分

在 `PalWorldSettings.ini` 中，Palworld 服务器设置通常存储在 `OptionSettings` 行内。你需要定位现有的设置块，并检查是否已存在 `SupplyDropSpan`。

如果已存在，则修改其值。

如果不存在，则将其添加到 `OptionSettings=(...)` 部分，与其他逗号分隔的设置一起。

### 配置条目格式

使用以下格式：

```ini
SupplyDropSpan=[your_value]
```

将 `[your_value]` 替换为你想设置的分钟数。

### 示例值

| 设置 | 含义 |
| --- | --- |
| `SupplyDropSpan=180` | 默认间隔 3 小时 |
| `SupplyDropSpan=60` | 每 1 小时空投一次 |
| `SupplyDropSpan=360` | 每 6 小时空投一次 |
| `SupplyDropSpan=30` | 非常频繁的空投 |

以下是该设置在完整 `OptionSettings` 块中的示例：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution 保持现有语法完整
不要删除 `OptionSettings` 行中的逗号、括号或其他现有值。该行格式错误可能导致服务器无法正确加载配置。
:::

## 保存并应用更改

编辑完数值后：

1. 保存 `PalWorldSettings.ini` 的更改。
2. 在 ZAP-Hosting 游戏服务器管理中重启你的 Palworld 服务器。

必须重启服务器，因为 Palworld 不会在服务器运行时实时应用此游戏设置。

### 是否需要额外命令？

通常不需要额外的游戏内或控制台命令。重启服务器是加载更新后的 `SupplyDropSpan` 值的必要步骤。

| 操作 | 是否必需 |
| --- | --- |
| 编辑 `PalWorldSettings.ini` | 是 |
| 添加或更改 `SupplyDropSpan` | 是 |
| 运行额外控制台命令 | 否 |
| 保存后重启服务器 | 是 |

## 验证设置

服务器重启后，新空投间隔应已生效。

由于该设置控制定时的世界事件，你可能需要等待下一次刷新周期才能在游戏内完全确认更改。如果你设置了较短的间隔，如 `60` 或 `30`，验证会更容易。

:::tip 更快测试更改
如果你想在不等待数小时的情况下确认设置是否生效，可以临时将 `SupplyDropSpan=30`。测试完成后，再改回你想要的长期值。
:::

## 故障排除

### 设置未生效

如果空投频率似乎没有变化，请检查以下内容：

- 确认 `SupplyDropSpan` 拼写完全正确
- 确认该值位于 `OptionSettings=(...)` 部分内
- 检查是否有缺失逗号或括号错误
- 保存文件后重启服务器

### 服务器配置错误

如果编辑文件后服务器无法启动，请恢复之前的配置并仔细检查语法。

:::danger INI 格式错误风险
Palworld 将许多游戏设置存储在单行 `OptionSettings` 中。即使是一个字符错误也会破坏配置。保存前务必仔细检查更改。
:::

## 结论

恭喜，你已成功更改 Palworld 空投设置。若有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！ 🙂