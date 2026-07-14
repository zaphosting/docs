---
id: palworld-enable-hardcore-mode
title: "Palworld：启用硬核模式"
description: "了解如何通过编辑正确的服务器配置文件，设置 True 或 False 值，并安全应用永久死亡选项来启用 Palworld 的硬核模式。-> 立即了解更多"
sidebar_label: Palworld：启用硬核模式
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

*硬核模式* 在 Palworld 中启用玩家以及可选的 Pals 的永久死亡规则。通过本指南，你将学会如何在 ZAP-Hosting Palworld 服务器上手动启用硬核模式，方法是编辑正确的配置文件并重启服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你可以通过 ZAP-Hosting 网页界面访问你的 Palworld 游戏服务器。你还需要有权限通过游戏服务器管理的 **Configs** 部分编辑服务器配置文件。

:::danger 永久数据丢失警告
启用硬核设置后，角色死亡将导致永久丢失。如果你同时启用 Pal 丢失，Pals 也会永久丢失。
:::

:::tip 先创建备份
在更改硬核模式等游戏设置之前，建议先为你的服务器或存档数据创建备份（如果你的服务支持备份选项）。
:::

## 打开 Palworld 配置文件

要启用硬核模式，你需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理中：

1. 打开你的 Palworld 服务器。
2. 进入 **Configs**。
3. 打开文件 `PalWorldSettings.ini`。

:::info 正确的配置文件
硬核设置存储在 `PalWorldSettings.ini` 中。如果你编辑了其他文件，修改将不会应用到你的 Palworld 服务器。
:::

## 编辑硬核设置

Palworld 将许多游戏设置存储在 `PalWorldSettings.ini` 的 `OptionSettings` 配置项中。你需要手动设置相关的硬核值。

### 必需的配置键

以下配置键控制硬核行为：

| 配置键 | 值 | 作用 |
| --- | --- | --- |
| `bHardcore` | `True` 或 `False` | 启用或禁用玩家永久死亡 |
| `bPalLost` | `True` 或 `False` | 启用或禁用 Pal 死亡后永久丢失 |
| `bCharacterRecreateInHardcore` | `True` 或 `False` | 允许硬核死亡后创建新角色 |

### 推荐值概览

| 场景 | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| 仅玩家永久死亡 | `True` | `False` | `False` 或 `True` |
| 完整硬核含 Pal 丢失 | `True` | `True` | `False` 或 `True` |
| 禁用硬核模式 | `False` | `False` | `False` |

:::note True 和 False 值
这些设置使用布尔值，必须准确输入 `True` 或 `False`，以符合配置格式要求。
:::

### 示例配置

如果你的 `OptionSettings` 中已有这些键，按需修改它们的值。如果缺失，请在同一 `OptionSettings` 行内添加。

示例：

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

如果你的 `OptionSettings` 行已经包含许多其他设置，请不要删除它们，只需在现有括号内添加或调整与硬核相关的条目。

:::caution 保留现有设置
`PalWorldSettings.ini` 通常在一个 `OptionSettings` 条目中包含许多活跃的服务器设置。误删其他值可能会重置服务器上无关的游戏选项。
:::

## 保存并应用更改

编辑文件后：

1. 保存 `PalWorldSettings.ini` 的更改。
2. 在 ZAP-Hosting 游戏服务器管理中重启你的 Palworld 服务器。

必须重启服务器以加载更新后的硬核配置。

## 验证硬核模式是否激活

重启后，加入你的服务器，确认硬核规则已生效。

### 需要检查的内容

| 设置 | 预期行为 |
| --- | --- |
| `bHardcore=True` | 玩家死亡后无法正常继续游戏 |
| `bPalLost=True` | Pals 死亡后永久丢失 |
| `bCharacterRecreateInHardcore=True` | 硬核死亡后可以创建新角色 |

:::info 重要行为说明
具体游戏内效果取决于你启用了哪三个硬核设置中的哪些。如果你想要玩家永久死亡但仍允许用户重新创建新角色，请启用 `bCharacterRecreateInHardcore=True`。
:::

## 故障排除

如果硬核模式未按预期工作，请检查以下几点。

### 确认文件是否正确编辑

确保你是在 ZAP-Hosting Palworld 服务器的 **Configs** 区域编辑了 `PalWorldSettings.ini`，而不是其他文件。

### 检查语法

硬核键必须放在 `OptionSettings=(...)` 条目内。标点错误、缺少逗号或将值放在错误位置都会导致服务器无法读取。

有效语法示例：

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### 再次重启服务器

如果保存文件后未重启服务器，新设置不会生效。请执行完整重启后再次测试。

## 结论

恭喜你，已成功在 Palworld 服务器上启用硬核模式。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂