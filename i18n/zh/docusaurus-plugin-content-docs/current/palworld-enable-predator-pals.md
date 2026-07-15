---
id: palworld-enable-predator-pals
title: "Palworld：启用掠食者伙伴"
description: "了解如何在您的 Palworld 服务器上启用或禁用掠食者伙伴，解决掠食者伙伴不生成的问题，并手动配置正确的设置。-> 立即了解更多"
sidebar_label: "Palworld：启用掠食者伙伴"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

*掠食者伙伴* 是 Palworld 中可以在世界各地生成的强力Boss类型伙伴。在本指南中，您将学习如何通过手动编辑正确的配置文件，在您的 ZAP-Hosting Palworld 服务器上启用或禁用掠食者伙伴。



## 准备工作

开始之前，请确保您可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器，并且有权限管理其配置文件。

:::info 配置文件访问权限
本设置需要您通过游戏服务器管理中的 **Configs** 部分手动编辑服务器配置。
:::

## 打开 Palworld 配置文件

要更改掠食者伙伴是否生成，您需要编辑 `PalWorldSettings.ini` 文件。

### 在 ZAP 界面中找到正确的文件

首先，在 ZAP-Hosting 网页界面打开您的 Palworld 游戏服务器。然后进入服务器管理的 **Configs** 区域，打开 `PalWorldSettings.ini` 文件。

这是用于游戏相关服务器设置的主要配置文件，包括掠食者Boss伙伴的行为设置。

:::note 需要手动编辑
此设置必须在配置文件中手动更改。如果您的界面没有专门的开关选项，直接编辑 `PalWorldSettings.ini` 是正确的方法。
:::

## 编辑掠食者伙伴设置

在 `PalWorldSettings.ini` 文件中，找到 `OptionSettings` 部分。相关的配置键是 `EnablePredatorBossPal`。

### 配置值

根据您想要的效果，使用以下值之一：

| 设置 | 值 | 结果 |
| --- | --- | --- |
| 启用掠食者伙伴 | `True` | 掠食者Boss伙伴可以在世界中生成 |
| 禁用掠食者伙伴 | `False` | 掠食者Boss伙伴不会在世界中生成 |

### 示例条目

如果该设置已存在，请修改其值。如果缺失，请将其添加到 `OptionSettings` 配置列表中。

```ini
EnablePredatorBossPal=True
```

若要禁用掠食者伙伴，请使用：

```ini
EnablePredatorBossPal=False
```

:::tip 先检查现有语法
Palworld 服务器设置通常作为较长的 `OptionSettings` 行存储在 `PalWorldSettings.ini` 中。如果您的文件已经包含此结构，请在现有设置列表中添加或修改 `EnablePredatorBossPal=True` 或 `EnablePredatorBossPal=False`，而不是创建独立的无关部分。
:::

## 保存并应用更改

编辑完成后，在 **Configs** 部分保存您的更改。

### 重启服务器

文件保存后，重启您的 Palworld 服务器，以便正确加载新设置。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 额外控制台命令 | 否 |

:::caution 必须重启
新掠食者伙伴设置只有在服务器重启后才会生效。如果更改后掠食者伙伴仍未生成，请确认文件是否正确保存且服务器重启成功完成。
:::

## 验证设置

重启后，加入您的服务器，检查掠食者伙伴是否按预期行为生成。

如果您启用了它们但掠食者伙伴未生成，请再次检查 `PalWorldSettings.ini` 中的条目，确保值准确写为 `True` 或 `False`，并确认该设置正确放置在现有服务器配置语法中。

:::note 生成行为说明
此设置控制是否允许掠食者Boss伙伴在世界中生成。它不提供掠食者伙伴位置地图，不会更改单个生成点，也不保证在特定区域立即遇到。
:::

## 配置参考

| 文件 | ZAP-Hosting 中的位置 | 键 | 可能的值 | 默认行为 | 是否需要重启 |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | 游戏服务器管理 → **Configs** | `EnablePredatorBossPal` | `True`，`False` | `True` | 是 |

## 结论

恭喜，您已成功在 Palworld 服务器上启用或禁用掠食者伙伴。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为您服务！🙂