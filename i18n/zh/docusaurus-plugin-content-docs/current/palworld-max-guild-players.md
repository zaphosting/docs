---
id: palworld-max-guild-players
title: "Palworld：最大公会玩家数"
description: "了解如何通过编辑服务器上的最大公会玩家数设置来更改 Palworld 公会玩家限制。-> 立即了解更多"
sidebar_label: "Palworld：最大公会玩家数"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你控制单个公会中最多可以加入多少玩家。在本指南中，你将学习如何通过编辑 ZAP-Hosting 游戏服务器管理中的正确配置文件，手动更改最大公会玩家数限制。



## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器管理。

:::info 配置访问要求
你需要访问 Palworld 服务器管理和 `Configs`（配置）部分，因为此设置必须在服务器配置文件中手动更改。
:::

## 找到正确的配置文件

要更改公会玩家限制，你需要编辑 `PalWorldSettings.ini` 文件。

在你的 ZAP-Hosting 游戏服务器管理中：

1. 打开你的 **Palworld** 服务器
2. 进入 **Configs**（配置）
3. 打开名为 `PalWorldSettings.ini` 的文件

该文件包含 Palworld 服务器的主要游戏配置值，包括与公会相关的设置。

## 编辑最大公会玩家数设置

在 `PalWorldSettings.ini` 中，找到 `OptionSettings` 配置行。公会玩家限制由 `GuildPlayerMaxNum` 键控制。

### 配置值

使用以下设置定义单个公会允许的最大玩家数：

```ini
GuildPlayerMaxNum=[your_value]
```

将 `[your_value]` 替换为你希望每个公会允许的玩家数量。

### 默认值和示例值

| 配置键 | 描述 | 默认值 |
| --- | --- | --- |
| `GuildPlayerMaxNum` | 单个公会允许的最大玩家数 | `20` |

例如，如果你想允许每个公会最多 `30` 名玩家，设置为：

```ini
GuildPlayerMaxNum=30
```

:::note 编辑现有的 OptionSettings 行
在 Palworld 中，服务器设置通常存储在单个 `OptionSettings=(...)` 条目内。你通常需要在该行内更改现有的 `GuildPlayerMaxNum` 值，而不是添加第二个重复条目。
:::

### 示例片段

你的配置可能类似于：

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

如果你的文件中 `OptionSettings=(...)` 已包含多个设置，只需更改 `GuildPlayerMaxNum` 部分，保持其他值不变。

:::caution 避免重复键
不要在同一配置块中多次添加 `GuildPlayerMaxNum`。重复键可能导致意外行为，或者让服务器无法确定使用哪个值。
:::

## 保存并应用更改

编辑完成后：

1. 保存 `PalWorldSettings.ini` 文件的更改
2. 重启你的 Palworld 服务器

服务器必须重启，才能加载新的公会玩家数限制。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 额外控制台命令 | 无需验证命令 |

:::tip 需要重启
更新后的最大公会玩家数值不会在服务器运行时立即生效。保存配置后，你需要完全重启服务器。
:::

## 验证新的公会限制

服务器重启后，新的公会规模限制应对加入或管理公会的玩家生效。

如果更改未生效，请检查以下内容：

- 确认你编辑的是正确的文件：`PalWorldSettings.ini`
- 确认 `GuildPlayerMaxNum` 拼写正确
- 确认该值位于活动的 `OptionSettings=(...)` 配置中
- 确认服务器重启已成功完成

:::caution 配置格式要求
Palworld 配置文件对格式非常敏感。如果你不小心删除了 `OptionSettings=(...)` 中的逗号、括号或其他现有值，服务器可能会忽略该设置或无法正确加载。
:::

## 结论

恭喜，你已成功更改 Palworld 服务器上的最大公会玩家数限制。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为你提供帮助！🙂