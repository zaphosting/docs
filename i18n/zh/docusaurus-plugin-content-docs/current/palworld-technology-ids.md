---
id: palworld-technology-ids
title: "Palworld：科技ID"
description: "了解如何管理Palworld科技ID，禁用特定科技条目，并安全编辑正确的服务器配置。-> 立即了解更多"
sidebar_label: Palworld：科技ID
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld使用*科技ID*来识别可解锁的科技和服务器配置中的某些物品相关设置。在本指南中，您将学习如何通过编辑ZAP-Hosting Palworld服务器配置中的`DenyTechnologyList`设置来禁用特定科技。



## 准备工作

开始之前，请确保您可以访问ZAP-Hosting网页界面中的Palworld游戏服务器，并且有权限编辑其配置文件。

:::info 配置访问要求
您需要访问游戏服务器管理界面及`Configs`部分，才能编辑`PalWorldSettings.ini`。
:::

:::note 科技ID来源
Palworld科技ID是基于字符串的值，例如`GrapplingGun`、`GrapplingGun2`或`SkillUnlock_JetDragon`。当前的第三方参考列表可见于：[Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids)。

由于Palworld更新可能会更改可用科技，您应始终确认计划使用的ID在当前游戏版本中仍然存在。
:::

## 理解科技ID

科技ID是Palworld用于可解锁科技条目的内部标识符。在专用服务器上，这些ID可用于特定配置选项，以控制游戏玩法行为。

本指南最相关的设置是`DenyTechnologyList`，它允许您阻止服务器上选定科技的解锁或使用。

### 支持的配置用法

下表展示了本指南涵盖的相关配置键：

| 配置键 | 作用 | 值格式 |
| --- | --- | --- |
| `DenyTechnologyList` | 禁用服务器上的特定科技 | 以逗号分隔的科技ID字符串列表 |

### 科技ID示例

以下ID是常见的参考示例：

| 科技ID | 示例含义 |
| --- | --- |
| `GrapplingGun` | 抓钩枪 |
| `GrapplingGun2` | 高级抓钩枪 |
| `SkillUnlock_JetDragon` | 喷气龙相关解锁 |
| `SkillUnlock_IceHorse` | 冰霜骏马相关解锁 |
| `PALBOX` | Palbox相关科技 |
| `RepairBench` | 修理台 |
| `AIcore` | AI核心 |

:::caution 使用精确ID值
科技ID是区分大小写的字符串值。如果输入错误的ID，Palworld可能会忽略它，导致科技无法按预期被禁用。
:::

## 打开Palworld配置文件

要在ZAP-Hosting服务器上配置科技ID，您需要手动编辑正确的Palworld设置文件。

### 在ZAP-Hosting界面中找到文件

1. 登录ZAP-Hosting网页界面。
2. 打开您的**Palworld**游戏服务器。
3. 进入游戏服务器管理中的**Configs**。
4. 打开文件`PalWorldSettings.ini`。

这是存储和编辑`DenyTechnologyList`设置的配置文件。



### 定位相关设置

在`PalWorldSettings.ini`中，查找包含您的Palworld服务器设置的选项块。

您需要找到或添加`DenyTechnologyList`条目。

:::tip 快速搜索文件
使用浏览器的搜索功能，按`CTRL` + `F`，搜索`DenyTechnologyList`以更快找到该设置。
:::

## 配置`DenyTechnologyList`

现在您可以定义哪些科技应在服务器上被屏蔽。

### 值格式

`DenyTechnologyList`使用以逗号分隔的科技ID列表。

示例格式：

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

每个条目必须是有效的Palworld科技ID。不要添加描述、ID中多余的空格或不支持的字符。

### 添加或编辑设置

如果该设置已存在，请用您想要的列表替换当前值。

如果该设置尚不存在，请将其添加到`PalWorldSettings.ini`中相应的服务器设置部分。

示例：

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

此示例通过ID禁用了多个科技。

### 配置示例参考

| 示例条目 | 结果 |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | 仅禁用基础抓钩枪科技 |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | 禁用多个抓钩枪科技等级 |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | 禁用选定的特殊解锁科技 |

:::note 相关物品ID用法
部分Palworld物品相关设置也使用基于ID的值。例如，第三方参考显示`AdditionalDropItemWhenPlayerKillingInPvPMode`也可以使用Palworld ID值来控制PvP物品掉落。但本指南专注于`DenyTechnologyList`。
:::

## 保存并应用更改

编辑配置后，您需要保存文件并重启服务器，使Palworld加载更新后的设置。

### 保存文件

编辑完`PalWorldSettings.ini`后：

1. 在`Configs`编辑器中保存更改。
2. 再次检查条目，确认ID拼写正确。

### 重启服务器

文件保存后，从ZAP-Hosting游戏服务器管理界面重启您的Palworld服务器。

必须重启服务器，因为`PalWorldSettings.ini`中的配置更改只有在服务器重新启动并加载更新文件后才会生效。

:::info 需要重启
更改`DenyTechnologyList`后必须重启服务器。使用配置文件方法时，通常不需要额外的游戏内命令。
:::

## 验证科技是否被禁用

重启后，您应确认配置是否按预期生效。

### 需要检查的内容

您可以通过检查选定科技是否仍在游戏中可用来验证结果。

请参考以下检查表：

| 检查项 | 预期结果 |
| --- | --- |
| 服务器成功重启 | 服务器正常上线 |
| `PalWorldSettings.ini`正确保存 | 您的`DenyTechnologyList`条目仍然存在 |
| 游戏内测试禁用科技 | 选定科技不再可用，符合预期 |

### 如果设置无效

如果科技仍然可用，请检查以下内容：

| 可能问题 | 需要确认 |
| --- | --- |
| ID无效 | 确认科技ID与当前游戏版本完全匹配 |
| 格式错误 | 确保列表用逗号分隔，且仅包含纯ID字符串 |
| 文件未保存 | 重新打开`PalWorldSettings.ini`确认值仍存在 |
| 服务器未重启 | 保存更改后再次重启服务器 |

:::caution 游戏更新可能更改ID
Palworld持续更新，科技信息可能随时间变化。如果之前有效的ID不再生效，请先核对当前可靠的参考资料，再进行进一步排查。
:::

## 结论

恭喜，您已成功使用科技ID在Palworld服务器上禁用特定科技。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂