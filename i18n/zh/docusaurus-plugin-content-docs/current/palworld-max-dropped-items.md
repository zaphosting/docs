---
id: palworld-max-dropped-items
title: "Palworld：最大掉落物品数量"
description: "了解如何通过编辑正确的配置值来更改 Palworld 服务器上的掉落物品限制和物品消失设置。-> 立即了解更多"
sidebar_label: Palworld：最大掉落物品数量
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你控制世界中最多存在多少掉落物品，以及这些物品在消失前能存在多久。在本指南中，你将学习如何在 ZAP-Hosting 面板中编辑正确的配置文件，调整掉落物品设置，并安全应用更改。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你可以访问 ZAP-Hosting 网页面板中的 Palworld 游戏服务器，并且有权限编辑其配置文件。

:::info 需要手动配置
此设置需通过手动编辑 Palworld 服务器配置完成。所需文件可在游戏服务器管理的 `Configs` 目录下找到。
:::

## 打开 Palworld 配置文件

要更改掉落物品限制，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理界面：

1. 打开你的 Palworld 服务器
2. 进入 `Configs`
3. 打开文件 `PalWorldSettings.ini`

该文件包含了 Palworld 服务器的主要游戏玩法配置值，包括掉落物品的行为设置。

## 修改掉落物品设置

掉落物品的设置通过 `PalWorldSettings.ini` 文件中的条目进行配置。你需要调整文件中活动设置行或部分的相关数值。

### 相关配置键

使用以下配置键来控制掉落物品：

| 配置键 | 默认值 | 说明 |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | 世界中同时存在的最大掉落物品数量 |
| `DropItemAliveMaxHours` | `1.0` | 掉落物品自动消失前的存活时间（小时） |

### 示例配置

根据你当前文件内容，这些值通常是 Palworld 选项设置条目的一部分。例如：

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

如果你的 `OptionSettings` 条目中已经存在这些键，只需修改数值即可。例如：

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

在此示例中：

- `DropItemMaxNum=2000` 限制世界中最多存在 `2000` 个掉落物品
- `DropItemAliveMaxHours=0.500000` 使掉落物品在 `0.5` 小时（即 30 分钟）后消失

:::note 数值格式
Palworld 服务器设置通常使用带有多个尾随零的小数格式，如 `1.000000`。建议尽量保持文件中已有的格式风格。
:::

## 选择合适的数值

正确的数值取决于你的玩家数量、服务器活跃度和掉落物品生成情况。

### 推荐使用场景

| 场景 | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| 小型私人服务器 | `3000` | `1.000000` |
| 繁忙的多人服务器 | `2000` | `0.500000` |
| 性能优先配置 | `1000` 到 `1500` | `0.250000` 到 `0.500000` |

### 性能考虑

较低的掉落物品限制可以提升服务器性能，尤其是在以下情况下：

- 多名玩家同时在线活跃
- 世界中生成大量物品
- 玩家频繁采集、建造或遗留战利品在地面

:::tip 通过降低物品限制提升性能
如果你发现服务器出现卡顿或响应变慢，降低最大掉落物品数量和消失时间可以减少世界杂乱，提升稳定性。
:::

:::caution 避免设置过低数值
如果数值设置过低，玩家可能会发现物品消失过快，或者掉落物品数量很快达到上限。请在应用后仔细测试更改效果。
:::

## 保存并应用更改

编辑完 `PalWorldSettings.ini` 后，在 ZAP-Hosting 面板中保存文件。

保存后，重启你的 Palworld 服务器，使新的掉落物品设置生效。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 额外控制台命令 | 否 |

:::info 需要重启生效
对 `PalWorldSettings.ini` 的更改只有在重启 Palworld 服务器后才会生效。
:::

## 验证新设置

重启后，加入服务器并观察正常游戏过程中掉落物品的表现。

你应检查：

- 掉落物品数量是否按预期被控制
- 物品在地面停留时间是否符合设置
- 减少物品数量或存活时间后服务器性能是否有所提升

如有需要，可返回 `PalWorldSettings.ini` 进一步微调数值。

## 结论

恭喜你，已成功配置 Palworld 服务器的最大掉落物品数量和消失时间。若有任何疑问或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂