---
id: palworld-player-damage-and-defense
title: "Palworld：玩家伤害与防御"
description: "了解如何通过编辑服务器配置和正确调整伤害倍率来更改 Palworld 中的玩家伤害和防御设置。-> 立即了解更多"
sidebar_label: Palworld：玩家伤害与防御
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过服务器配置值调整玩家造成的伤害和玩家受到的伤害。在本指南中，你将学习如何编辑 ZAP-Hosting 游戏服务器中的正确配置文件，修改玩家伤害和防御倍率，并正确应用更改。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你的 Palworld 服务器已经安装完成，并且你可以访问其网页管理界面。

你需要：
- 一个在 ZAP-Hosting 上激活的 Palworld 游戏服务器
- 访问游戏服务器网页界面的权限
- 编辑 `Configs` 目录下文件的权限

:::info 手动配置说明
此设置需要手动编辑 Palworld 配置文件。针对这些特定设置，无需额外的游戏内命令。
:::

## 打开正确的配置文件

要更改玩家伤害和防御，你需要编辑文件 `PalWorldSettings.ini`。

在 ZAP-Hosting 游戏服务器管理界面：
1. 打开你的 Palworld 服务器
2. 进入 `Configs`
3. 打开 `PalWorldSettings.ini`

该文件包含专用服务器使用的主要游戏倍率，包括玩家攻击伤害和玩家受到伤害的数值。

:::note 配置文件位置说明
任务上下文确认相关文件可通过游戏服务器管理界面中的 `Configs` 访问。如果你的界面布局略有不同，请查找服务器的配置文件列表并打开 `PalWorldSettings.ini`。
:::

## 编辑玩家伤害和防御数值

在 `PalWorldSettings.ini` 中，你需要找到以下配置项。

| 配置键 | 功能 | 默认值 |
| --- | --- | --- |
| `PlayerDamageRateAttack` | 控制玩家造成的伤害量 | `1.000000` |
| `PlayerDamageRateDefense` | 控制玩家受到的伤害量 | `1.000000` |

这些数值通常存储在文件的主选项块中。

### 示例配置

参考以下示例：

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

如果这些数值已存在，只需修改数字即可。如果你的文件使用单行长选项，请确保小心编辑现有条目，不要删除逗号、括号或相邻数值。

### 数值作用说明

| 数值 | 效果 |
| --- | --- |
| 较高的 `PlayerDamageRateAttack` | 玩家造成更多伤害 |
| 较低的 `PlayerDamageRateAttack` | 玩家造成更少伤害 |
| 较高的 `PlayerDamageRateDefense` | 玩家受到的有效伤害减少（仅在游戏逻辑允许的情况下），但此设置通常用作伤害承受倍率 |
| 较低的 `PlayerDamageRateDefense` | 玩家受到更多伤害 |

:::caution 理解防御倍率
`PlayerDamageRateDefense` 影响玩家受到的伤害倍率。数值越低，玩家受到的伤害越多；数值越高，根据服务器的平衡行为，减少的相对危险程度较小。更改后务必测试设置效果。
:::

## 选择合适的倍率数值

你可以根据服务器想要的难度自定义这些设置。

### 平衡示例

如果你想保持大致默认体验，保持两个数值为 `1.000000`：

```ini
PlayerDamageRateAttack=1.000000
PlayerDamageRateDefense=1.000000
```

### 简单战斗示例

如果你希望玩家造成更多伤害且更容易生存，可以提高攻击倍率并谨慎测试防御相关平衡：

```ini
PlayerDamageRateAttack=1.500000
PlayerDamageRateDefense=1.500000
```

### 困难战斗示例

如果你希望玩家造成更少伤害且承受更多惩罚，可以降低数值：

```ini
PlayerDamageRateAttack=0.800000
PlayerDamageRateDefense=0.800000
```

:::tip 逐步调整
每次调整倍率时，建议以 `0.1` 或 `0.25` 的小步长进行。这样更容易找到合适的平衡，避免战斗过于简单或过于苛刻。
:::

## 保存文件并重启服务器

编辑完 `PalWorldSettings.ini` 后，在 ZAP-Hosting 的 `Configs` 区域保存文件。

保存后，重启你的 Palworld 服务器以加载新的伤害设置。

### 编辑后必需操作

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行游戏内命令 | 否 |
| 手动运行控制台命令 | 否 |

:::info 需要重启
`PlayerDamageRateAttack` 和 `PlayerDamageRateDefense` 的更改只有在服务器重启后才能可靠生效。
:::

## 验证新设置

重启后，加入服务器并直接测试战斗。

你应检查：
- 玩家造成的伤害是否符合预期
- 敌人攻击是否感觉更强或更弱
- 整体平衡是否符合你的游戏设计意图

如果结果不理想，返回 `PalWorldSettings.ini`，再次调整倍率，保存文件并重启服务器。

## 结论

恭喜你，已成功更改 Palworld 服务器上的玩家伤害和防御设置。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂