---
id: minecraft-timings-report
title: "Minecraft：用 Timings 报告识别服务器问题"
description: "了解如何通过 Timings 报告分析服务器性能问题，找出卡顿原因并优化你的服务器 → 立即学习"
sidebar_label: Timings-报告
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 说明

### 什么是 Timings 报告？

Timings 报告类似于你电脑的任务管理器，能帮你找到问题，尤其是在卡顿时。Timings 报告会记录服务器的所有活动，并以可视化的方式展示出来。

## Timings 报告

## 创建 Timings 报告

根据服务器软件不同，创建 Timings 报告的方式也不同。基本上，你需要先用以下命令开始录制（**Paper Spigot** 除外，前提是设置未被修改）

`/timings start`

录制时，确保像平时一样使用服务器，这样才能记录到相关问题并进行详细分析。录制时间建议至少持续 **10 分钟**，如果可能的话更长。

## 导出 Timings 报告

要创建并导出 Timings 报告，请使用以下命令：

`/timings paste`

几秒钟后会出现一条消息，提示导出成功。点击链接即可打开 Timings 报告。

![](https://screensaver01.zap-hosting.com/index.php/s/wpmB2jr2XCibHtY/preview)

## 分析

### ↔️ 缩小数值范围

导出并打开 Timings 报告后，会出现类似下面的窗口：

![](https://screensaver01.zap-hosting.com/index.php/s/9xMMtpr2jePk7B5/preview)

首先，仔细观察图表，通过鼠标悬停在各个点上，可以查看各个记录点的大致数值。

为了获得尽可能准确的数值，定位服务器可能存在问题的时间段，可以用下方的滑块缩小范围，如图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/yfkbfqJdcQwbsiB/preview)

### 调查服务器数值

总共有 3 列。如下面截图所示，框 1 显示主进程占用的 tick 百分比（20 tick 等于 1 秒）。你还能看到这个进程在录制期间执行了多少次。

框 2 显示更精确的毫秒数值，但请注意，时间绝不应超过 50ms。超过这个值会引发连锁反应，后续所有进程都会积压，最终导致卡顿，因为服务器只能延迟处理这些进程。

:::info
**Full Server Tick** 通常可以忽略，因为数值总是在红色区域，但这不是什么大问题。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/gLkFeTek6yR5tME/preview)

无论如何，你都应该重点关注那些用颜色标记的数值点。

本例中，我们关注所有实体（动物、怪物、物品等）的进程，因为它们的数值已经显示为橙色。由此你可能直接判断服务器上实体数量过多存在问题。
可能服务器上有怪物农场，或者大量新怪物被生成。如果你遇到实体过多的问题，可以在设置中限制生成速率，或者安装插件限制实体数量并在必要时自动清理。

如上所述，列表基本上总是显示主进程。点击某个进程，可以深入查看每种实体的具体进程并进行调查。请同时关注前面提到的第 2 和第 3 列。

你会发现 **Minecraft::tickEntity - nms.EntitySkeleton** 执行了大量进程。怪物农场可能是罪魁祸首。

![](https://screensaver01.zap-hosting.com/index.php/s/fZzeemocpsNfxXL/preview)

另一个橙色数值的进程是等待中的方块。等待中的方块效率特别低，因为服务器每个 tick 都要检查它们的状态。比如飞沙、飞砾，甚至是熔岩和水。

举例来说，如果大型农场使用了大量水源，可能会引发很多问题。问题也可能出现在新区块生成时，山地中的水源被创建，服务器每次都要重新计算水流状态。此外，服务器还要生成和加载区块，这也是个非常消耗资源的过程。

![](https://screensaver01.zap-hosting.com/index.php/s/GWz98fTiknCkWZW)

后续的调查也可以用同样的方法进行，因为其他进程的步骤完全一样。如果你在评估时需要帮助，我们随时在线支持你！

### 检查插件

有时候问题也可能由插件引起。要判断插件是否是原因，可以暂时从服务器移除插件，再次检查系统状态。

如果插件存在问题，也可以在“Plugins”部分进行调查。这里的数值同样分三列，结构和上面服务器数值完全一样。不同的是，这里不显示主进程，而是显示插件本身。点击插件可以查看所有进程并深入分析数值。

![](https://screensaver01.zap-hosting.com/index.php/s/CzitKykWC2dzExD)

<InlineVoucher />