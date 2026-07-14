---
id: palworld-structure-damage-rate
title: "Palworld：建筑物伤害倍率"
description: "了解如何通过安全且正确地编辑服务器配置来更改 Palworld 建筑物伤害和建筑物腐蚀速率。-> 立即了解更多"
sidebar_label: Palworld：建筑物伤害倍率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你控制建筑物受到的伤害量以及它们随时间腐蚀的速度。在本指南中，你将学习如何在 ZAP-Hosting 游戏服务器管理中手动编辑正确的配置文件，并应用新的建筑物伤害设置。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你的 Palworld 服务器已经安装完成，并且你可以访问其网页管理界面。

:::info 必要访问权限
你需要访问你的 ZAP-Hosting 游戏服务器管理面板以及 Palworld 服务器的 `Configs` 配置区域。
:::

:::note 手动配置说明
本设置通过手动编辑 Palworld 配置文件完成。本指南中没有通过单击切换按钮来更改具体设置。
:::

## 打开正确的配置文件

要更改建筑物伤害和腐蚀速率，你需要编辑 `PalWorldSettings.ini` 文件。

在你的 ZAP-Hosting 游戏服务器管理中：

1. 打开你的 **Palworld** 服务器。
2. 进入 **Configs**。
3. 打开文件 `PalWorldSettings.ini`。

该文件包含服务器的主要游戏玩法配置值，包括与建筑物相关的倍率设置。

## 编辑建筑物伤害设置

相关数值存储在 `PalWorldSettings.ini` 文件中的服务器设置条目里。

### 相关配置键

使用以下设置来控制建筑物伤害行为：

| 配置键 | 说明 | 默认值 |
| --- | --- | --- |
| `BuildObjectDamageRate` | 控制建筑物受到的伤害量 | `1.0` |
| `BuildObjectDeteriorationDamageRate` | 控制建筑物随时间腐蚀的速度 | `1.0` |

数值 `1.0` 表示正常默认倍率。较低的数值会减少效果，较高的数值会增加效果。

### 示例配置

根据你当前文件内容，这些数值通常是 `PalWorldSettings.ini` 中服务器选项列表的一部分。

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

如果你的配置使用组合选项字符串，确保只更改数值，保持周围语法不变。

例如：

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution 保持现有语法完整
`PalWorldSettings.ini` 可能在单个 `OptionSettings=(...)` 行中包含许多设置。如果你的服务器是这种情况，编辑文件时请勿删除逗号、括号或其他现有条目。
:::

## 选择合适的数值

你可以根据希望玩家建造的建筑物耐久度调整倍率。

### 建筑物伤害倍率

`BuildObjectDamageRate` 调整建筑物受到的直接伤害量。

| 数值 | 效果 |
| --- | --- |
| `0.5` | 建筑物受到一半伤害 |
| `1.0` | 默认建筑物伤害 |
| `2.0` | 建筑物受到双倍伤害 |

### 建筑物腐蚀倍率

`BuildObjectDeteriorationDamageRate` 调整建筑物随时间腐蚀的速度。

| 数值 | 效果 |
| --- | --- |
| `0.1` | 非常缓慢的腐蚀 |
| `1.0` | 默认腐蚀速度 |
| `2.0` | 更快的腐蚀 |

:::tip 推荐的腐蚀最低值
建议将 `BuildObjectDeteriorationDamageRate` 保持在 `0.1` 或更高。非常低或禁用腐蚀会导致废弃建筑物长时间残留，可能会对清理和服务器性能产生负面影响。
:::

## 保存文件并重启服务器

编辑完 `PalWorldSettings.ini` 中的数值后，在 `Configs` 区域保存文件。

然后你需要重启 Palworld 服务器，使新的建筑物伤害设置生效。

### 编辑后所需操作

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 额外控制台命令 | 无需验证命令 |

:::info 需要重启
`BuildObjectDamageRate` 和 `BuildObjectDeteriorationDamageRate` 的更改在服务器重启前不会可靠生效。
:::

## 验证更改

服务器重新上线后，加入你的 Palworld 服务器并测试新的行为。

你可以通过以下方式验证更改：

- 建筑物受到的直接伤害是否比之前更多或更少
- 废弃或暴露的建筑物是否以预期速度腐蚀

如果更改未生效，请重新打开 `PalWorldSettings.ini` 并确认：

- 设置名称准确写为 `BuildObjectDamageRate` 和 `BuildObjectDeteriorationDamageRate`
- 数值放置在正确的部分或 `OptionSettings` 行中
- 保存后服务器已重启

## 结论

恭喜你，已成功更改 Palworld 服务器上的建筑物伤害和腐蚀速率。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂