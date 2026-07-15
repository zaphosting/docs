---
id: palworld-enemy-drop-rate
title: "Palworld：敌人掉落率"
description: "了解如何通过编辑正确的配置值来更改 Palworld 游戏服务器上的敌人掉落率，实现更好的战利品平衡。-> 立即了解更多"
sidebar_label: Palworld：敌人掉落率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

`EnemyDropItemRate` 控制 Palworld 中敌人掉落的战利品数量。在本指南中，您将学习如何在 ZAP-Hosting 游戏服务器管理面板中手动编辑正确的配置文件，并成功应用新的敌人掉落率。



## 准备工作

开始之前，请确保您可以访问您的 Palworld 游戏服务器管理面板，并且拥有编辑服务器配置文件的权限。

:::info 需要手动配置
此设置需要通过手动编辑服务器配置文件完成。相关文件可在您的 ZAP-Hosting 游戏服务器管理面板的 `Configs` 中找到。
:::

## 定位配置文件

要更改敌人掉落率，您需要编辑 `PalWorldSettings.ini` 文件。

### 打开配置文件区域

登录您的 ZAP-Hosting 游戏服务器管理面板，打开您的 Palworld 服务器。然后导航到 `Configs` 区域，这里列出了所有可用的配置文件。

### 选择 `PalWorldSettings.ini`

在 `Configs` 区域打开 `PalWorldSettings.ini` 文件。该文件包含您的 Palworld 游戏服务器的主要游戏玩法配置值，包括战利品和掉落相关的设置。

:::note 配置文件概览
在 Palworld 专用服务器上，游戏设置通常存储在 `PalWorldSettings.ini` 中。敌人战利品倍数通过 `EnemyDropItemRate` 条目进行配置。
:::

## 编辑敌人掉落率

现在您已经打开了正确的文件，可以调整战利品掉落倍数。

### 找到正确的设置项

在 `PalWorldSettings.ini` 中搜索 `OptionSettings` 行，并找到以下键：

```ini
EnemyDropItemRate=1.000000
```

如果该键已存在，请将其值更改为您想要的倍数。

### 设置您想要的倍数

`EnemyDropItemRate` 使用数字倍数：

| 配置键 | 默认值 | 示例值 | 效果 |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | 敌人掉落物品数量翻倍 |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | 敌人掉落物品数量减少 |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | 敌人掉落物品数量增加三倍 |

例如，要让击败的敌人、野生 Pals 和 Boss 掉落的战利品翻倍，设置为：

```ini
EnemyDropItemRate=2.000000
```

如果您编辑的是完整的 `OptionSettings` 条目，可能类似于以下片段：

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution 保持现有设置完整
在许多 Palworld 服务器配置中，`OptionSettings` 包含多项值在同一行。请仅更改 `EnemyDropItemRate` 的值，避免删除逗号、括号或其他现有设置，否则可能导致配置失败。
:::

## 检查相关掉落限制

较高的战利品倍数会增加地面上的掉落物品数量。这可能影响服务器性能，尤其是在激烈战斗或 Boss 战时。

### 检查 `DropItemMaxNum`

如果您的服务器已经存在大量同时掉落的物品，请检查同一配置文件中的 `DropItemMaxNum` 设置。

| 配置键 | 作用 |
| --- | --- |
| `EnemyDropItemRate` | 敌人掉落战利品的倍数 |
| `DropItemMaxNum` | 限制同时存在的掉落物品数量 |

:::tip 平衡战利品与性能
如果您大幅提高了 `EnemyDropItemRate`，建议将 `DropItemMaxNum` 保持在合理范围，以减少不必要的物品堆积和性能问题风险。
:::

## 保存并应用更改

编辑完配置后，在 `Configs` 区域保存 `PalWorldSettings.ini` 文件。

### 重启服务器

保存文件后，重启您的 Palworld 服务器以加载新的设置。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 额外控制台命令 | 无需验证命令 |

:::info 需要重启
对 `PalWorldSettings.ini` 的更改不会在运行时立即生效。保存文件后，您需要重启服务器。
:::

## 验证新的掉落率

重启完成后，加入您的 Palworld 服务器并击败敌人，确认新的战利品倍数是否按预期生效。

如果掉落数量没有变化，请重新打开 `PalWorldSettings.ini` 并确认：

- `EnemyDropItemRate` 拼写正确
- 值位于正确的 `OptionSettings` 配置中
- 文件已成功保存
- 更改后服务器已重启

## 结论

恭喜，您已成功更改了 Palworld 服务器上的敌人掉落率。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂