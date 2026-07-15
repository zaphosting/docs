---
id: palworld-change-server-name
title: "Palworld：更改服务器名称"
description: "了解如何通过手动编辑正确的配置文件来更改您的 Palworld 服务器名称以及更新玩家看到的服务器浏览器名称。-> 立即了解更多"
sidebar_label: "更改服务器名称"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 使用配置文件来定义游戏内服务器浏览器中显示的服务器名称。在本指南中，您将学习如何在 ZAP-Hosting 网页界面中手动更改显示的服务器名称并正确应用更改。



## 准备工作

开始之前，请确保您可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器，并且有权限编辑其配置文件。

:::info 需要手动配置
此更改需通过手动编辑 Palworld 服务器配置文件完成。相关文件可通过游戏服务器管理中的 `Configs` 访问。
:::

## 打开 Palworld 配置文件

要更改服务器名称，您需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 网页界面中：

1. 打开您的 **Palworld** 游戏服务器。
2. 进入服务器管理中的 **Configs**。
3. 打开文件 `PalWorldSettings.ini`。

:::note 配置文件位置说明
在 Palworld 独立服务器上，相关设置通常存储在 `PalWorldSettings.ini` 中。请通过 ZAP-Hosting 界面的 `Configs` 部分编辑此文件，而非手动更改文件路径。
:::

## 编辑服务器名称

在 `PalWorldSettings.ini` 中，找到 `OptionSettings` 部分。服务器浏览器名称由 `ServerName` 条目控制。

您还可以选择设置服务器描述，使用 `ServerDescription`。

### 配置示例

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Your Palworld server description")
```

如果您的文件中已有较长的 `OptionSettings=(...)` 行，只需更改现有的 `ServerName` 和可选的 `ServerDescription` 值。

### 需要更改的值

| 配置键 | 说明 | 示例值 |
| --- | --- | --- |
| `ServerName` | 在 Palworld 服务器浏览器中显示的名称 | `"zaphosting"` |
| `ServerDescription` | 可选的服务器描述文本 | `"Public survival server"` |

:::caution 保持现有设置完整
`OptionSettings` 通常在一行中包含许多其他服务器设置。除非您有意修改其他选项，否则只更改 `ServerName` 和 `ServerDescription` 的值。
:::

## 保存更改

编辑完值后：

1. 在 **Configs** 部分保存 `PalWorldSettings.ini` 文件。
2. 确认引号和逗号格式保持正确。

### 现有行示例

如果您的文件包含类似下面的行，只需更新相关文本：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Public survival server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## 重启服务器

保存配置后，您需要重启 Palworld 服务器以加载新名称。

### 应用新配置

请使用 ZAP-Hosting 游戏服务器管理面板中的重启功能。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外控制台命令 | 否 |

:::tip 服务器浏览器名称更新延迟
重启后，更新的服务器名称可能不会立即在所有玩家的服务器浏览器中显示。如有需要，请等待几分钟后刷新服务器列表。
:::

## 验证新服务器名称

服务器重启后：

1. 打开 Palworld。
2. 进入多人服务器浏览器。
3. 搜索您在 `ServerName` 中配置的名称。

如果仍显示旧名称，请重新打开 `PalWorldSettings.ini` 并确认：
- `ServerName` 值已正确更改
- 文件已成功保存
- 服务器在更改后已完全重启

## 结论

恭喜，您已成功更改 Palworld 服务器名称。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂