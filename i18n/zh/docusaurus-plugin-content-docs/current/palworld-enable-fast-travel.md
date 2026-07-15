---
id: palworld-enable-fast-travel
title: "Palworld：启用快速旅行"
description: "了解如何在您的 Palworld 服务器上配置快速旅行，包括仅限基地的快速旅行设置和手动配置更改。-> 立即了解更多"
sidebar_label: "启用快速旅行"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许您通过主服务器配置控制玩家在服务器上的快速旅行使用方式。在本指南中，您将学习如何在 ZAP-Hosting 界面中编辑正确的配置文件，调整快速旅行设置，并正确应用更改。



## 准备工作

开始之前，请确保您可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器，并且拥有编辑其配置文件的权限。

:::info 需要手动配置
此设置需要通过手动编辑 Palworld 服务器配置完成。您可以通过游戏服务器管理中的 `Configs` 访问所需文件。
:::

## 定位配置文件

要更改快速旅行行为，您需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理中：

1. 打开您的 Palworld 服务器。
2. 进入 `Configs`。
3. 打开文件 `PalWorldSettings.ini`。

该文件包含服务器的游戏相关设置，包括快速旅行选项。

:::note 配置文件位置
根据当前面板布局，该文件通过服务器管理中的 `Configs` 区域管理。如果界面中未显示确切的底层路径，您仍然可以直接安全地编辑 `PalWorldSettings.ini` 中所需的值。
:::

## 了解快速旅行设置

Palworld 提供了两个与快速旅行行为相关的配置键。

| 配置键 | 值类型 | 默认值 | 功能 |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | 完全启用或禁用快速旅行 |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | 限制快速旅行，仅允许玩家在基地之间旅行 |

这些值是服务器选项字符串的一部分，存储在 `PalWorldSettings.ini` 中。

:::tip 选择合适的设置
如果您想要更沉浸式的旅行体验和更多探索，可以完全禁用快速旅行。如果想保持旅行功能但限制玩家在地图上的自由移动，通常选择仅限基地的快速旅行更合适。
:::

## 编辑快速旅行值

打开 `PalWorldSettings.ini`，找到 `OptionSettings=` 部分。在 Palworld 中，许多服务器设置以逗号分隔的值存储在此条目中。

### 启用普通快速旅行

要允许标准快速旅行，请确保存在以下值：

```ini
bEnableFastTravel=True
```

如果您希望玩家使用所有正常的快速旅行选项，还需确保此值设置为：

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### 完全禁用快速旅行

要完全禁用快速旅行，请设置：

```ini
bEnableFastTravel=False
```

禁用后，玩家必须手动穿越世界。

### 限制快速旅行仅限基地

如果只想允许基地之间的快速旅行，请使用以下组合：

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

此设置通常适用于以 PvP 为主的服务器，因为它允许有限的旅行，但不允许玩家无限制移动。

:::caution 保持现有语法完整
除非您有意更改，否则不要删除 `OptionSettings=` 行中的其他现有值。Palworld 将许多设置存储在单个逗号分隔条目中，格式错误可能导致设置无法加载。
:::

## 配置示例

下面是 `PalWorldSettings.ini` 中相关部分的示例：

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

根据您想要的设置，替换现有配置中的快速旅行值。

:::note 现有服务器配置
您的 `OptionSettings=` 行通常包含比上例更多的值。您只需调整 `bEnableFastTravel` 和 `bEnableFastTravelOnlyBaseCamp`，同时保留该行的其他内容。
:::

## 推荐配置

根据您想运行的服务器类型，可以使用以下组合：

| 服务器类型 | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | 结果 |
| --- | --- | --- | --- |
| 默认游戏玩法 | `True` | `False` | 完全启用快速旅行 |
| 探索为主 | `False` | `False` | 禁用所有快速旅行 |
| PvP 或限制旅行 | `True` | `True` | 仅限基地之间快速旅行 |

## 应用更改

保存 `PalWorldSettings.ini` 中的更改后，您需要重启服务器以加载新设置。

### 重启服务器

保存文件后，使用 ZAP-Hosting 游戏服务器管理中的重启功能。

通常不需要额外的游戏内或控制台命令。服务器重启后，新快速旅行配置将生效。

:::info 需要重启
对 `PalWorldSettings.ini` 的更改在 Palworld 服务器重启之前不会可靠生效。
:::

## 验证结果

服务器重新上线后，加入服务器并测试游戏内的快速旅行行为。

您应确认：

- 如果启用，完整快速旅行功能可用
- 如果禁用，没有快速旅行选项
- 如果启用仅限基地旅行，则只有基地间旅行可用

:::tip 解决错误行为
如果设置未生效，请重新打开 `PalWorldSettings.ini`，检查 `OptionSettings=` 行的格式错误，特别是缺失逗号、重复键或无效的 `True` / `False` 值。
:::

## 结论

恭喜，您已成功在 Palworld 服务器上启用或配置快速旅行。若有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂