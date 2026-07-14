---
id: palworld-technology-ids
title: "Palworld：科技ID"
description: "了解如何管理Palworld科技ID，禁用特定科技条目，以及理解服务器上所需的配置值 -> 立即了解更多"
sidebar_label: Palworld：科技ID
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld使用*科技ID*来识别可解锁的科技和某些相关的基于物品的设置。在本指南中，你将学习如何通过手动编辑正确的配置条目，在你的ZAP-Hosting Palworld服务器上禁用特定科技。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你可以访问ZAP-Hosting网页界面中的Palworld游戏服务器，并且有权限编辑服务器配置文件。

:::info 必要权限
你需要访问Palworld服务器管理权限以及ZAP-Hosting面板中的`Configs`（配置）部分，才能完成此设置。
:::

:::note 科技ID来源
Palworld的科技ID是游戏内部定义的字符串，例如`GrapplingGun`或`SkillUnlock_JetDragon`。ZAP-Hosting面板中没有官方的游戏内列表，因此你必须使用可靠的外部参考来获取有效的ID。
:::

## 理解科技ID

科技ID是Palworld用于可解锁科技的内部标识符。服务器配置需要的是精确的ID字符串，而不是游戏中显示的名称。

禁用科技时，Palworld使用`DenyTechnologyList`设置。该值接受以逗号分隔的科技ID列表。

### `DenyTechnologyList`的作用

当你将有效的科技ID添加到`DenyTechnologyList`时，这些科技将在你的服务器上被屏蔽。这对于限制游戏进度、移除特定的机动工具或为社区自定义游戏规则非常有用。

### 支持的值格式

该值必须以逗号分隔的科技ID字符串形式输入，不带额外说明。

| 配置键 | 作用 | 格式 | 示例 |
|---|---|---|---|
| `DenyTechnologyList` | 禁用选定的科技 | 逗号分隔的科技ID字符串 | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution ID必须完全匹配
科技ID必须与游戏内部值完全匹配。如果ID拼写错误或不再适用于当前Palworld版本，设置可能无法生效。
:::

## 打开正确的配置文件

在ZAP-Hosting上，此更改通过手动编辑Palworld配置文件完成。

### 需要编辑的文件

你需要编辑以下文件：

```ini
PalWorldSettings.ini
```

### 在ZAP-Hosting界面中的位置

打开你的Palworld游戏服务器管理，然后进入：

```text
Configs
```

从这里打开`PalWorldSettings.ini`。

:::tip ZAP-Hosting中的配置位置
如果你的服务器提供多个可编辑文件，请确保选择`PalWorldSettings.ini`，因为这是用于游戏相关服务器设置（如`DenyTechnologyList`）的文件。
:::

## 编辑科技ID设置

打开`PalWorldSettings.ini`后，找到服务器选项列表，添加或修改`DenyTechnologyList`条目。

### 向`DenyTechnologyList`添加科技ID

使用逗号分隔的你想禁用的科技列表。

示例：

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

此示例禁用了：

| 科技ID | 含义 |
|---|---|
| `GrapplingGun` | 抓钩枪 |
| `GrapplingGun2` | 高级抓钩枪变体 |
| `SkillUnlock_JetDragon` | 与JetDragon相关的解锁 |

:::note 引号格式
根据你现有的`PalWorldSettings.ini`条目结构，值可能位于更大的选项块内。请保持文件中已有的语法风格，仅更改`DenyTechnologyList`的值。
:::

### 选项块中的示例

许多Palworld服务器将设置存储在更大的`OptionSettings`行内。在这种情况下，条目可能类似于：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

如果`DenyTechnologyList`尚未存在，请将其添加到同一`OptionSettings=(...)`块内，并用逗号与其他条目分隔。

:::caution 保持现有语法
不要删除`OptionSettings`中的其他设置。缺少逗号、括号或引号可能导致配置无法正确加载。
:::

## 选择有效的科技ID

你必须使用有效的内部科技ID，而非游戏中显示的名称。

### 科技ID示例

以下是Palworld已知的部分科技ID示例：

| 科技ID | 示例含义 |
|---|---|
| `AIcore` | AI核心 |
| `GrapplingGun` | 抓钩枪 |
| `GrapplingGun2` | 抓钩枪变体 |
| `GrapplingGun3` | 抓钩枪变体 |
| `GrapplingGun4` | 抓钩枪变体 |
| `GrapplingGun5` | 抓钩枪变体 |
| `SkillUnlock_JetDragon` | JetDragon解锁 |
| `SkillUnlock_IceHorse` | 冰马解锁 |
| `PALBOX` | Palbox相关科技 |
| `RepairBench` | 修理台 |

由于Palworld会持续更新，完整ID列表可能会变化。如果需要更全面的参考列表，请在应用前核对当前可靠来源的ID。

### 其他设置中相关ID的使用

科技风格的内部ID也可能用于其他Palworld配置选项。一个已知示例是：

| 配置键 | 作用 |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | 设置PvP击杀时的自定义掉落物品 |

:::info 相关PvP设置
如果你计划使用ID来自定义PvP物品掉落，请确认`AdditionalDropItemWhenPlayerKillingInPvPMode`所需的ID类型与你想使用的物品匹配。本指南专注于`DenyTechnologyList`。
:::

## 保存并重启服务器

编辑文件后，在ZAP-Hosting界面保存更改。

要应用新配置，请重启你的Palworld服务器。

### 编辑后的必要操作

| 操作 | 是否必需 |
|---|---|
| 保存`PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外控制台命令 | 无确认需要 |

必须重启，因为Palworld在启动时读取这些服务器设置。未重启时，新科技限制可能不会生效。

:::tip 重启后测试
服务器重启后，加入服务器并确认所选科技已按预期不可用。这有助于确认ID和语法输入正确。
:::

## 故障排除

如果重启后科技仍可用，请检查以下几点。

### 核对ID拼写

确保每个科技ID完全正确，包括大小写。

### 检查配置语法

如果编辑了`OptionSettings=(...)`块，请确认：

- 每个设置用逗号分隔
- 引号正确开启和关闭
- 括号完整无缺
- `DenyTechnologyList`位于正确的设置块内

### 确认服务器已成功重启

如果服务器未正确重启，更新的配置可能未被加载。

:::danger 配置错误风险
格式错误的`PalWorldSettings.ini`可能导致设置无法正确加载。如果发生此情况，请恢复之前可用的文件版本，并谨慎重新应用更改。
:::

## 结论

恭喜，你已成功使用科技ID在Palworld服务器上禁用特定科技。若有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂