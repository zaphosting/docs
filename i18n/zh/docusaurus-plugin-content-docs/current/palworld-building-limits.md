---
id: palworld-building-limits
title: "Palworld：建筑限制"
description: "了解如何通过手动编辑服务器配置来更改 Palworld 的建筑限制、基地建筑规则和区域限制。-> 立即了解更多"
sidebar_label: "Palworld：建筑限制"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过服务器配置控制多个建筑限制和限制规则。在本指南中，你将学习如何在 ZAP-Hosting 网页界面手动编辑正确的配置文件，修改相关建筑数值，并正确应用更改。



## 准备工作

开始之前，请确保：

- 你可以访问 ZAP-Hosting 游戏服务器管理中的 Palworld 游戏服务器
- 你的服务器当前处于离线状态，或者你准备好在修改后重启服务器
- 你知道本指南涵盖的是通用建筑限制和区域限制，而非公会专属基地限制

:::info 需要手动配置
这些设置必须在配置文件中手动更改。相关文件可在 ZAP-Hosting 游戏服务器管理的 `Configs` 中访问。
:::

:::note 公会基地限制
如果你想更改的是每个公会的基地数量限制，而非这里介绍的通用建筑限制，请使用 ZAP-Docs 中提供的公会基地限制专用指南（如果有）。
:::

## 打开配置文件

要更改建筑限制，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理中：

1. 打开你的 Palworld 服务器。
2. 进入 `Configs`。
3. 打开文件 `PalWorldSettings.ini`。

该文件包含你的 Palworld 服务器的主要世界和游戏设置，包括多个与建筑相关的配置项。

## 编辑建筑限制设置

相关数值存储在 `PalWorldSettings.ini` 的 `OptionSettings` 部分。

### 相关配置键

使用以下设置来控制建筑限制和区域限制：

| 配置键 | 说明 | 示例值 |
| --- | --- | --- |
| `MaxBuildingLimitNum` | 设置每个玩家的最大建筑数量。`0` 表示禁用限制。 | `0` |
| `BaseCampMaxNum` | 设置整个服务器允许的最大基地营地数量。 | `128` |
| `bBuildAreaLimit` | 控制是否启用靠近特定建筑的建筑限制。 | `False` |

### 示例配置

根据你当前文件内容，这些数值通常是 `OptionSettings=(...)` 行的一部分。

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

如果你的文件中已有较长的 `OptionSettings` 行，请不要删除其他已有数值。你只需在同一设置块内更改或添加相关条目即可。

### 每个数值的作用

| 设置 | 作用 |
| --- | --- |
| `MaxBuildingLimitNum=0` | 取消每个玩家的建筑数量限制 |
| `MaxBuildingLimitNum=[your_number]` | 限制每个玩家的建筑数量为指定数值 |
| `BaseCampMaxNum=[your_number]` | 设置服务器范围内允许的基地营地总数 |
| `bBuildAreaLimit=True` | 禁止在受限建筑（如快速旅行点）附近建造 |
| `bBuildAreaLimit=False` | 关闭该区域限制 |

:::caution 保持现有语法完整
`PalWorldSettings.ini` 对格式非常敏感。请确保只更改所需数值，保持现有的逗号、括号和整体 `OptionSettings=(...)` 结构不变。
:::

## 保存更改

编辑数值后：

1. 在 `Configs` 部分保存文件。
2. 再次检查该行是否存在格式错误。

如果语法错误，服务器可能会忽略更改的设置或无法正确应用。

### 自定义数值示例

以下示例限制每个玩家最多建造 `5000` 个建筑，服务器允许最多 `20` 个基地营地，并启用受限建筑区域限制：

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

另一个示例取消玩家建筑限制并关闭区域限制：

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## 重启服务器

保存配置后，你需要重启 Palworld 服务器以加载新设置。

在 ZAP-Hosting 游戏服务器管理中：

1. 如果服务器仍在运行，请先停止服务器。
2. 然后重新启动服务器。

`PalWorldSettings.ini` 的更改需要完全重启服务器才能生效。

:::tip 可靠应用更改
如果你一次修改多个配置，建议先保存所有编辑，然后统一重启服务器。这样可以避免不必要的停机时间。
:::

## 验证新限制

服务器重新上线后，加入服务器测试新的建筑行为。

你应确认：

- 玩家是否能建造比之前更多或更少的建筑
- 服务器上的基地营地总数是否符合你配置的数值
- 是否根据 `bBuildAreaLimit` 设置允许或禁止在受限建筑附近建造

如果更改未生效，请重新打开 `PalWorldSettings.ini` 并确认：

- 数值是否正确保存
- 键是否在 `OptionSettings` 块内
- 编辑后服务器是否已完全重启

## 配置参考

| 文件 | ZAP-Hosting 中的位置 | 编辑后所需操作 |
| --- | --- | --- |
| `PalWorldSettings.ini` | 游戏服务器管理中的 `Configs` | 重启服务器 |

| 设置 | 推荐用途 |
| --- | --- |
| `MaxBuildingLimitNum` | 控制每个玩家的建筑限制 |
| `BaseCampMaxNum` | 控制服务器范围内基地营地的总数 |
| `bBuildAreaLimit` | 允许或限制在受保护地图建筑附近建造 |

## 结论

恭喜你，已成功更改 Palworld 服务器的建筑限制。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂