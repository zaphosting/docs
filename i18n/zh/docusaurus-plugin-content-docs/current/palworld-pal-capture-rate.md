---
id: palworld-pal-capture-rate
title: "Palworld：Pal 捕获率"
description: "了解如何通过编辑 PalCaptureRate 设置来调整 Palworld 服务器上的 Pal 捕获率，从而更轻松地捕获 Pal。-> 立即了解更多"
sidebar_label: Palworld：Pal 捕获率
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Palworld 允许你通过主世界配置调整服务器上的 Pal 捕获率。在本指南中，你将学习如何在 ZAP-Hosting 界面中找到正确的配置文件，修改哪个数值，以及如何应用新的捕获率。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你可以通过 ZAP-Hosting 网页界面访问你的 Palworld 游戏服务器，并且服务器已经设置并正在运行。

:::info 配置文件访问
对于 ZAP-Hosting 上的 Palworld 服务器，相关设置可以通过游戏服务器管理中的 `Configs` 进行编辑。
:::

## 定位 Palworld 配置文件

要更改 Pal 捕获率，你需要编辑 `PalWorldSettings.ini` 文件。

### 打开配置部分

首先，登录 ZAP-Hosting 网页界面并打开你的 Palworld 游戏服务器。在游戏服务器管理中，导航到 `Configs`。

在那里，找到名为：

```ini
PalWorldSettings.ini
```

的文件。

### 确认正确的设置项

在 `PalWorldSettings.ini` 文件中，Palworld 将许多游戏设置存储在 `OptionSettings` 部分。与 Pal 捕获相关的设置是：

```ini
PalCaptureRate=[your_value]
```

默认值通常是：

```ini
PalCaptureRate=1.000000
```

数值越高，捕获 Pal 越容易；数值越低，捕获难度越大。

## 编辑 Pal 捕获率

现在你已经打开了正确的文件，可以调整捕获率以符合你想要的游戏平衡。

### 修改配置数值

在 `PalWorldSettings.ini` 中搜索 `PalCaptureRate` 条目，并将其值替换为你想要的倍数。

例如：

```ini
PalCaptureRate=2.000000
```

这将使捕获率比默认设置提高一倍。

### 示例数值

以下表格作为一般参考：

| 数值 | 效果 |
| --- | --- |
| `1.000000` | 默认 Pal 捕获率 |
| `1.500000` | 捕获稍微容易一些 |
| `2.000000` | 捕获明显更容易 |
| `3.000000` | 捕获非常容易 |

:::tip 平衡配置建议
如果你想让捕获更容易但又不至于百分百成功，通常选择 `1.500000` 到 `2.000000` 之间的数值是一个合理的起点。
:::

## 保存并应用更改

编辑完 `PalCaptureRate` 数值后，在 ZAP-Hosting 配置编辑器中保存更改。

### 重启服务器

Palworld 不会实时应用此设置。保存文件后，你需要从 ZAP-Hosting 服务器管理中重启游戏服务器，才能加载新的捕获率。

:::caution 需要重启服务器
如果编辑完 `PalWorldSettings.ini` 后不重启服务器，新的捕获率将不会生效。
:::

## 配置参考

下表总结了用于此更改的设置：

| 文件 | 配置键 | 默认值 | 作用 | 是否需要重启 |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | 控制 Pal 捕获率倍数 | 是 |

## 故障排除

如果新的捕获率似乎没有生效，请检查以下几点。

### 核实设置格式

确保该行书写正确，且使用数字值，例如：

```ini
PalCaptureRate=2.000000
```

避免添加多余字符或更改文件中无关的条目。

### 确认文件已保存

编辑后，通过 `Configs` 部分确认 `PalWorldSettings.ini` 文件的更改已被保存。

### 如有需要，重新重启

如果更改后服务器未正确重启，请再次从服务器管理中执行重启操作。

:::note 服务器端游戏设置
`PalCaptureRate` 是服务器端的游戏设置，玩家只有在服务器重新加载更新配置后才能感受到新的捕获率。
:::

## 结论

恭喜你，已成功更改 Palworld 服务器上的 Pal 捕获率。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都为你服务！🙂