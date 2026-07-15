---
id: palworld-max-guild-bases
title: "Palworld：最大公会基地数"
description: "了解如何通过编辑服务器上的 BaseCampMaxNumInGuild 值来更改 Palworld 中的最大公会基地设置。-> 立即了解更多"
sidebar_label: "最大公会基地数"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你控制每个公会在服务器上可以放置的最大基地数量。本指南将教你如何在 ZAP-Hosting 网页界面手动编辑正确的配置文件，修改 `BaseCampMaxNumInGuild` 设置，并通过重启服务器应用更改。



## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器。

:::info 必要访问权限
你需要访问 Palworld 服务器管理界面及其 `Configs` 配置文件编辑部分。
:::

## 找到配置文件

要更改最大公会基地设置，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 网页界面中，打开你的 Palworld 游戏服务器管理，导航至：

`Configs` → `PalWorldSettings.ini`

该文件包含了 Palworld 服务器的主要游戏配置值，包括公会和基地限制。

## 编辑最大公会基地数值

在 `PalWorldSettings.ini` 文件中，找到 `OptionSettings` 部分。你需要修改的设置是：

`BaseCampMaxNumInGuild=[your_value]`

将 `[your_value]` 替换为你希望每个公会允许放置的基地数量。

### 配置示例

如果你想允许每个公会最多放置 `6` 个基地，条目应如下所示：

```ini
BaseCampMaxNumInGuild=6
```

如果该设置已存在，只需更改其数值。如果缺失，请在文件中现有的 `OptionSettings` 参数列表内添加该条目。

:::note 默认值和原版最大值
当前参考信息显示默认值为 `4`，原版最大值为 `10`。超过 `10` 的数值通常不被未修改的 Palworld 服务器支持。
:::

### 数值参考

| 配置键 | 描述 | 默认值 | 原版最大值 |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | 每个公会允许的最大基地数量 | `4` | `10` |

:::caution 使用有效数值
请将 `BaseCampMaxNumInGuild` 设置为合理且受支持的数值。超过 `10` 的数值通常需要服务器端模组支持，且在标准 Palworld 服务器上可能无法正常工作。
:::

## 保存配置

修改数值后，在 ZAP-Hosting 配置编辑器中保存 `PalWorldSettings.ini` 文件。

这会保存新的最大公会基地设置，但只有在服务器重启后才会生效。

## 重启服务器

保存文件后，从服务器管理界面重启你的 Palworld 服务器。

必须重启服务器，因为 Palworld 会在启动时读取 `PalWorldSettings.ini` 配置。未重启时，新设置通常不会生效。

### 后续操作

编辑 `BaseCampMaxNumInGuild` 后，通常不需要额外的控制台命令。重启后，新数值应自动生效。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外命令 | 否 |

:::tip 测试新限制
重启后，加入服务器并用公会测试基地放置限制，确认新设置已按预期生效。
:::

## 故障排除

如果最大公会基地设置似乎没有生效，请检查以下几点。

### 核实配置条目

确保 `BaseCampMaxNumInGuild` 拼写正确且使用数字值，例如：

```ini
BaseCampMaxNumInGuild=8
```

键名拼写错误或无效数值会导致设置无效。

### 确认文件已保存

重启服务器前，确认你在 `Configs` → `PalWorldSettings.ini` 中的更改已保存。

### 完全重启服务器

更改设置后必须完全重启服务器。如果只是保存文件但未重启，旧值可能仍在使用。

### 保持在原版限制内

如果设置超过 `10`，服务器可能会忽略该值或出现异常行为，除非你使用了兼容的模组。运行标准服务器时，请保持数值在 `10` 或以下。

## 结论

恭喜你，已成功更改 Palworld 服务器上公会基地的最大数量。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂