---
id: palworld-change-server-type
title: "Palworld：更改服务器类型"
description: "了解如何在 Palworld 服务器中切换 Linux 和 Windows 服务器类型，更新正确的配置路径，并正确应用更改以确保模组兼容。-> 立即了解更多"
sidebar_label: "Palworld：更改服务器类型"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 服务器可以运行不同的服务器类型，通常是 Linux 或 Windows，具体取决于您的托管环境和模组需求。在本指南中，您将学习如何在 ZAP-Hosting 界面中更改服务器类型，识别正确的配置文件路径，并正确应用更改。



## 准备工作

开始之前，请确保您可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器，并且有权限停止和重启服务器。

:::info 关于服务器类型更改的重要信息
将服务器类型从 Linux 更改为 Windows，或从 Windows 更改为 Linux，可能会影响文件路径、模组兼容性以及现有配置文件的位置。Windows 服务器类型通常是某些基于 UE4SS 的模组设置所必需的。
:::

:::caution 检查是否需要重新安装
根据 Palworld 产品在您的服务上的部署方式，更改服务器类型可能需要重新安装或重新部署软件。如果当前界面中没有直接提供该选项，请在继续操作前联系支持。
:::

## 理解切换服务器类型时的变化

更改服务器类型通常不意味着修改 Palworld 游戏配置中的某个值。主要变化是底层服务器软件环境的切换，这也会改变活动配置文件的位置。

对于 Palworld，主要的配置文件通常是：

- `PalWorldSettings.ini`

该文件所在的文件夹取决于所选的服务器类型。

| 服务器类型 | 配置文件夹路径 | 主要配置文件 |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note 这很重要的原因
如果您编辑了 Linux 配置文件，但服务器当前以 Windows 服务器类型运行，您的更改可能不会生效，因为服务器会从 Windows 专用路径读取配置。
:::

## 停止服务器

在更改服务器类型之前，您应先停止服务器，以避免文件冲突和更改不完整。

1. 登录 ZAP-Hosting 游戏服务器网页界面。
2. 打开您的 Palworld 服务器管理页面。
3. 使用服务器控制选项停止服务器。

:::tip 编辑前的推荐操作
如果您已经使用模组或手动编辑过配置文件，建议在更改服务器类型前先备份数据。
:::

## 在 ZAP-Hosting 界面更改服务器类型

服务器类型的更改通常通过 ZAP-Hosting 界面中的产品或软件设置完成，而不是直接编辑 `PalWorldSettings.ini` 文件中的某一行。

1. 在 Palworld 服务器管理页面，找到服务器软件或游戏设置区域。
2. 查找控制已安装服务器类型或软件版本的选项。
3. 根据目标设置，将选项从 `Linux` 更改为 `Windows`，或从 `Windows` 更改为 `Linux`。
4. 保存更改。



:::info 如果找不到服务器类型选项
该设置的具体标签和位置可能因当前 ZAP-Hosting 界面或产品版本而异。如果没有看到服务器类型选择器，可能需要重新安装或联系支持协助。
:::

## 编辑正确的配置文件

更改服务器类型后，您需要确认正在编辑正确文件夹中的活动配置文件。

### 打开配置文件区域

在 ZAP-Hosting 游戏服务器管理界面：

1. 打开您的 Palworld 服务器。
2. 进入 `Configs`。
3. 导航到与您所选服务器类型匹配的文件夹。

使用以下路径之一：

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

然后打开：

- `PalWorldSettings.ini`

### 验证或重新应用设置

如果您之前在另一服务器类型下编辑过设置，这些更改可能只存在于旧文件夹中。您应比较两个版本的 `PalWorldSettings.ini`，并在当前活动文件中重新应用所需的值。

| 检查内容 | 重要原因 |
| --- | --- |
| 现有自定义设置 | 可能只存在于之前的服务器类型文件夹中 |
| 与模组相关的设置 | Windows 服务器类型通常用于支持 UE4SS 模组 |
| 游戏玩法数值 | 服务器只读取当前操作系统特定路径下的文件 |

:::caution 不要假设两个文件夹内容同步
Linux 和 Windows 配置文件夹是分开的。更改服务器类型不会自动将自定义设置复制到另一个位置。
:::

## 检查配置条目

服务器类型本身通常不由 `PalWorldSettings.ini` 中的某一行控制。但切换类型后，您仍应确认活动配置文件包含预期的设置。

典型的 `PalWorldSettings.ini` 结构类似如下：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

请替换以下占位符：

- `[your_server_name]` 替换为您的服务器名称
- `[your_admin_password]` 替换为您的管理员密码
- `[your_server_password]` 替换为您的加入密码（如果有）
- `[your_server_ip]` 替换为您的服务器公网 IP（如果设置需要）

:::note 文件中不需要特殊命令
目前没有已知的 `PalWorldSettings.ini` 条目可以切换底层服务器类型（Linux 与 Windows）。此更改由托管界面中的服务器环境控制。
:::

## 应用更改

更改服务器类型并确认正确配置文件后，您需要应用新的设置。

### 重启服务器

保存更改后，从 ZAP-Hosting 网页界面重新启动服务器。

在大多数情况下，如果服务器软件类型已成功切换，正常重启即可生效。

### 如果界面要求，执行重新安装

某些部署可能在更改软件类型后需要重新安装或重新部署步骤。如果界面提供此选项，请按提示操作，并确认：

- 正确的服务器类型已激活
- 正确的配置路径正在使用
- 您的 `PalWorldSettings.ini` 设置仍然存在

:::danger 重新安装可能覆盖文件
如果需要重新安装，除非提前备份，否则自定义文件或模组可能会被删除。请务必在确认重新安装前备份存档、模组和配置文件。
:::

## 验证新服务器类型是否生效

服务器重新启动后，确认更改是否成功。

### 通过配置路径确认

再次打开 `Configs`，检查活动文件路径是否与您选择的服务器类型匹配：

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### 确认模组兼容性

如果您切换到 Windows 是为了支持 UE4SS 模组，请确认模组文件和相关设置现在符合 Windows 服务器环境。

### 检查服务器运行状态

确认服务器是否正常启动，且预期设置是否正确加载。

| 验证点 | 预期结果 |
| --- | --- |
| 服务器成功启动 | 类型更改后无启动失败 |
| 配置路径正确 | 与 Linux 或 Windows 服务器类型匹配 |
| 自定义设置加载 | 服务器使用您编辑的 `PalWorldSettings.ini` |
| 模组支持 | 如适用，支持基于 Windows 的模组需求 |

## 故障排除

### 找不到服务器类型选项

如果找不到更改服务器类型的设置，可能是当前产品界面未直接暴露该选项。此时，建议联系 ZAP-Hosting 支持，询问您的 Palworld 服务是否支持在 Linux 和 Windows 服务器类型间切换。

### 更改后设置未生效

这通常是因为编辑了错误的配置路径。请检查您是否更新了：

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

或

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

以匹配当前活动的服务器类型。

### 模组仍无法使用

仅切换到 Windows 服务器类型可能不足以完成完整的模组安装。一些模组需要额外的文件、加载器或手动安装步骤，超出服务器类型更改范围。

## 结论

恭喜，您已成功更改 Palworld 服务器类型。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂