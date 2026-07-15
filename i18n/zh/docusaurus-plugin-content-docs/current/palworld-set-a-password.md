---
id: palworld-set-a-password
title: "Palworld：设置密码"
description: "了解如何通过手动编辑 Palworld 游戏配置来设置服务器密码，并正确应用密码更改。-> 立即了解更多"
sidebar_label: "设置密码"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过密码保护服务器，只有授权玩家才能加入。本指南将教你如何在 ZAP-Hosting 游戏服务器配置中手动设置或更改服务器密码，并正确应用密码。



## 准备工作

开始之前，请确保：

- 你的 Palworld 游戏服务器已在 ZAP-Hosting 网页界面上线
- 你拥有游戏服务器管理权限
- 你知道想要用于服务器访问的密码

:::info 需要手动配置
Palworld 的密码需要通过服务器配置文件手动设置。在 ZAP-Hosting 界面中，你可以通过游戏服务器管理的 `Configs` 访问这些文件。
:::

## 打开 Palworld 配置文件

要为你的 Palworld 服务器设置密码，需要编辑 `PalWorldSettings.ini` 文件。

### 在 ZAP-Hosting 界面找到该文件

1. 登录 ZAP-Hosting 网页界面。
2. 打开你的 **Palworld** 游戏服务器管理。
3. 进入 **Configs**。
4. 打开文件 `PalWorldSettings.ini`。

该文件包含 Palworld 服务器的主要设置，包括控制是否需要密码加入的条目。

:::note 配置文件作用
`PalWorldSettings.ini` 文件将服务器选项存储在单行配置中，通常位于 `OptionSettings=(...)` 部分。你需要编辑其中的 `ServerPassword` 值。
:::

## 编辑服务器密码

打开 `PalWorldSettings.ini` 后，找到 `ServerPassword` 条目。

### 必填配置条目

使用以下格式：

```ini
ServerPassword="[your_password]"
```

将 `[your_password]` 替换为你希望玩家加入服务器时输入的密码。

如果当前未启用密码，值可能是：

```ini
ServerPassword=""
```

空值表示未设置加入密码。

### 配置示例

在 Palworld 中，该设置通常是 `OptionSettings=(...)` 块的一部分，类似如下：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution 保持现有格式完整
仅修改 `ServerPassword="..."` 中的值。不要删除逗号、引号、括号或 `OptionSettings=(...)` 行中的其他条目，否则服务器可能无法正确加载配置。
:::

## 配置参考

下表展示了与密码更改相关的设置：

| 设置 | 示例值 | 作用 |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | 要求玩家加入服务器前输入密码 |

### 密码建议

选择密码时，请注意以下几点：

| 建议 | 说明 |
| --- | --- |
| 使用独特密码 | 避免重复使用其他服务的账号密码 |
| 避免过于简单的词汇 | 简单密码更容易被猜到 |
| 仅与信任的玩家分享 | 拥有密码的人都能尝试加入 |
| 安全保存密码 | 使用密码管理器帮助安全记录 |

:::tip 选择强密码
如果你打算为朋友或限定社区运行私人 Palworld 服务器，建议使用强密码而非简单词或服务器名，以减少不必要的加入尝试。
:::

## 保存更改并重启服务器

编辑密码后，在 `Configs` 部分保存文件。

### 应用新密码

要使密码更改生效：

1. 保存 `PalWorldSettings.ini` 的更改。
2. 重启你的 Palworld 游戏服务器。

必须重启服务器，因为 Palworld 在启动时从配置文件读取服务器设置。未重启时，密码更改可能不会生效。

:::info 需要重启
更改 `ServerPassword` 后，需在 ZAP-Hosting 游戏服务器管理界面手动重启服务器，才能加载新设置。
:::

## 验证密码

重启完成后，通过 Palworld 游戏尝试加入服务器测试配置。

### 需要检查的内容

连接时确认：

- 服务器现在要求输入密码才能加入
- 配置的密码能正常使用
- 没有密码的玩家无法访问服务器

如果服务器未提示输入密码，请重新打开 `PalWorldSettings.ini` 检查：

- `ServerPassword` 是否存在于 `OptionSettings=(...)` 部分
- 值是否非空
- 文件是否成功保存
- 服务器是否已在更改后重启

:::note 密码可见性
密码以明文形式存储在配置文件中。请确保只将服务器管理权限分享给信任的用户。
:::

## 结论

恭喜，你已成功为 Palworld 服务器设置密码。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂