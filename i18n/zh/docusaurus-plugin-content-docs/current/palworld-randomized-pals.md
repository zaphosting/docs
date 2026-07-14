---
id: palworld-randomized-pals
title: "Palworld：随机化伙伴"
description: "了解如何通过编辑服务器配置启用 Palworld 中的随机化伙伴，包括随机器类型和种子设置。-> 立即了解更多"
sidebar_label: Palworld：随机化伙伴
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 包含随机器设置，可以改变伙伴在游戏世界中的生成方式。在本指南中，您将学习如何通过编辑正确的配置文件，在您的 ZAP-Hosting Palworld 服务器上手动启用和配置随机化伙伴。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保您可以访问 ZAP-Hosting 网页界面中的 Palworld 游戏服务器，并且有权限编辑服务器配置文件。

:::info 配置访问权限要求
您需要访问服务器的网页管理界面，打开 `Configs` 部分并编辑 Palworld 配置文件。
:::

## 打开正确的配置文件

要配置随机化伙伴，您需要编辑 `PalWorldSettings.ini` 文件。

在 ZAP-Hosting 游戏服务器管理界面：

1. 打开您的 **Palworld** 服务器。
2. 进入 **Configs**。
3. 打开名为 `PalWorldSettings.ini` 的文件。

该文件包含您的 Palworld 服务器的主要游戏配置值，包括随机器选项。

## 配置随机化伙伴

随机器设置存储在 `PalWorldSettings.ini` 文件中的键值中。您需要找到现有的设置块并手动调整相关值。

### 随机器设置概览

使用以下配置键来控制随机伙伴的生成：

| 配置键 | 允许值 | 默认值 | 作用 |
| --- | --- | --- | --- |
| `RandomizerType` | `None`，`Region` | `None` | 控制是否禁用随机伙伴生成或按区域随机化 |
| `bIsRandomizerPalLevelRandom` | `True`，`False` | `False` | 设置为 `True` 时启用完全随机的野生伙伴等级 |
| `RandomizerSeed` | `[your_seed_value]` 或空 | `""` | 定义世界生成时使用的随机种子 |

:::caution 专用服务器兼容性
据报告，`All` 值与 Palworld 专用服务器不兼容。您应仅使用支持的值，如 `None` 或 `Region`。
:::

### 示例配置

根据需要在 `PalWorldSettings.ini` 文件中添加或调整以下值：

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

如果您想要特定的随机化设置，请将 `zaphosting` 替换为您自己的种子值。种子确保在生成世界时使用相同的随机化模式。

### 各设置项说明

#### `RandomizerType`

此设置控制伙伴生成是否随机化。

- `None` 禁用随机化
- `Region` 启用按区域随机化伙伴生成

如果您想在 Palworld 世界地图中启用随机伙伴，请将此值设置为 `Region`。

#### `bIsRandomizerPalLevelRandom`

此设置控制野生伙伴的等级。

- `False` 保持正常等级行为
- `True` 启用完全随机的野生伙伴等级

这会使 Palworld 游戏的进程变得更加不可预测，尤其是在早期阶段。

#### `RandomizerSeed`

此可选设置定义世界生成时使用的随机种子。

示例：

```ini
RandomizerSeed="[your_seed_value]"
```

将 `[your_seed_value]` 替换为您想使用的任何自定义文本或数字作为种子。

:::note 种子行为说明
随机器种子在世界生成时应用。如果您在已有世界中更改 `RandomizerSeed`，除非重置世界或创建新世界，否则更改不会生效。
:::

## 保存并应用更改

编辑文件后，在 ZAP-Hosting 的 `Configs` 部分保存更改。

保存后，重启您的 Palworld 服务器，以便加载更新的配置。

| 操作 | 是否必需 |
| --- | --- |
| 保存 `PalWorldSettings.ini` | 是 |
| 重启服务器 | 是 |
| 运行额外控制台命令 | 否 |
| 对已有存档更改种子时重置世界 | 是 |

:::tip 何时创建新世界
如果您是首次启用随机化，尤其是使用自定义 `RandomizerSeed`，建议使用新世界以确保设置按预期生效。
:::

## 验证结果

重启后，加入服务器并检查伙伴生成是否符合您选择的随机器设置。

您应确认：

- 是否启用了区域随机生成
- 如果启用，野生伙伴等级是否随机化
- 新世界中世界行为是否符合您配置的种子

如果更改未生效，请重新打开 `PalWorldSettings.ini` 并确认：

- 键名输入正确
- 值的大小写正确，如 `True` 和 `False`
- 保存后服务器已重启
- 如果更改了种子，是否创建了新世界

## 故障排除

### 随机化伙伴未出现

检查 `PalWorldSettings.ini` 中是否存在 `RandomizerType=Region`。如果仍为 `None`，则随机化被禁用。

### 种子更改未生效

通常表示世界已在添加新种子前生成。此时需要重置世界或创建新世界以应用种子。

### 更改随机器设置后服务器出现问题

如果使用了不支持的值，如 `All`，请将设置恢复为支持的值（如 `None` 或 `Region`），保存文件并重启服务器。

:::danger 避免使用不支持的随机器值
除非官方 Palworld 服务器文档确认支持，否则不要在专用服务器上使用 `RandomizerType=All`。该设置目前已知在专用服务器环境中不兼容。
:::

## 结论

恭喜，您已成功在 Palworld 服务器上配置了随机化伙伴。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为您服务！🙂