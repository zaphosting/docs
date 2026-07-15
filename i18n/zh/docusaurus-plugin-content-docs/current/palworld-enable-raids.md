---
id: palworld-enable-raids
title: "Palworld：启用突袭"
description: "了解如何通过编辑正确的配置设置来启用或禁用 Palworld 服务器上的突袭敌人攻击。-> 立即了解更多"
sidebar_label: "Palworld：启用突袭"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 突袭是针对玩家基地的入侵敌人攻击。在本指南中，您将学习如何通过手动编辑 ZAP-Hosting 游戏服务器管理中的正确配置文件来启用或禁用突袭。



## 准备工作

开始之前，请确保您可以通过 ZAP-Hosting 网页界面访问您的 Palworld 游戏服务器，并且拥有编辑服务器配置文件的权限。

:::info 需要手动配置
此设置需通过在游戏服务器管理中的 **Configs** 手动编辑 Palworld 服务器配置完成。保存更改后，您需要重启服务器以使新设置生效。
:::

## 找到正确的配置文件

要启用或禁用突袭，您需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理中：

1. 打开您的 **Palworld** 游戏服务器。
2. 进入 **Configs**。
3. 打开名为 `PalWorldSettings.ini` 的文件。

该文件包含您的 Palworld 服务器的主要游戏配置值，包括控制是否启用突袭的设置。

## 编辑突袭设置

在 `PalWorldSettings.ini` 中，找到 `OptionSettings` 部分。相关的配置键是：

```ini
bEnableInvaderEnemy=True
```

此设置控制服务器上是否激活入侵敌人突袭。

### 启用突袭

如果您想启用突袭，请将值设置为 `True`：

```ini
bEnableInvaderEnemy=True
```

此值允许游戏过程中周期性地对玩家基地发动敌人攻击。

### 禁用突袭

如果您想禁用突袭，请将值设置为 `False`：

```ini
bEnableInvaderEnemy=False
```

这将完全禁用入侵敌人攻击，适合想要更和平建造体验或稍微降低服务器负载的玩家。

## 配置参考

以下表格为突袭设置的快速参考：

| 配置文件 | 配置键 | 值 | 效果 |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | 启用突袭和入侵敌人攻击 |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | 禁用所有突袭和入侵敌人攻击 |

:::note 默认行为
Palworld 服务器默认行为通常是 `bEnableInvaderEnemy=True`，即默认启用突袭，除非您手动更改此设置。
:::

## 保存并应用更改

编辑完 `PalWorldSettings.ini` 中的值后，请在 ZAP-Hosting **Configs** 部分保存文件。

然后，您需要重启 Palworld 服务器以加载更新后的配置。

### 重启服务器

保存文件后，请使用 ZAP-Hosting 游戏服务器管理中的重启功能重启服务器。

:::caution 需要重启
如果不重启服务器，更改的突袭设置可能不会生效。仅编辑文件是不够的。
:::

## 验证设置

重启完成后，您的新突袭配置应已生效。

- 如果 `bEnableInvaderEnemy=True`，则突袭已启用。
- 如果 `bEnableInvaderEnemy=False`，则突袭已禁用。

如果设置似乎未生效，请重新打开 `PalWorldSettings.ini`，确认值已正确保存且无格式错误。

:::tip 和平建造体验
禁用突袭适合想专注于探索、基地建设或低压力合作玩法，不受周期性敌人攻击干扰的玩家。
:::

## 结论

恭喜，您已成功在 Palworld 服务器上启用或禁用突袭。若有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为您服务！ 🙂