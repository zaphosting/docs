---
id: hytale-profiler-spark
title: "Hytale：Spark Profiler – 识别性能瓶颈"
description: "使用 Spark 模组诊断性能问题，找出你的 Hytale 服务器卡顿原因 → 立即了解"
sidebar_label: Spark Profiler
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Button from '@site/src/components/Button';

## 介绍

性能问题，比如低 TPS（每秒刻数）、卡顿峰值或卡顿抖动，会严重影响 Hytale 服务器上的玩家体验。没有详细的诊断数据，手动找出问题根源非常困难。

![img](https://screensaver01.zap-hosting.com/index.php/s/E4o3SDSRr3RpBBA/preview)

**Spark** 性能分析器模组为服务器拥有者提供了强大的工具来分析服务器性能。安装后，Spark 可以收集 CPU 使用率、刻时长、服务器健康指标等数据，并生成详细报告，帮助你精准定位性能瓶颈。对于大型或繁忙的 Hytale 世界来说，它是排查和优化的必备利器。

<InlineVoucher />

## Spark 的功能

Spark 提供多种性能分析功能：

- **性能分析** – 记录服务器活动，识别慢刻或高 CPU 使用
- **服务器健康指标** – 包含刻时长、TPS、CPU 和内存使用情况
- **交互式报告** – 生成基于网页的报告，可在浏览器中查看
- **轻量且易用** – 设计时考虑了最小性能影响，同时收集有用数据

## 安装 Spark

Spark 通过 CurseForge 发布，作为模组安装。你可以通过我们的模组安装器或 FTP 安装模组。更多信息请查看我们的[安装模组](http://localhost:3000/guides/docs/hytale-mods)指南。安装完成后，重启 Hytale 服务器。

<Button label="下载 Spark" link="https://www.curseforge.com/hytale/mods/spark" block />

## 运行性能分析器

安装 Spark 并启动服务器后，打开游戏服务器面板中的 **实时控制台** 标签，或者如果你有权限，也可以在游戏内聊天框使用命令。开始收集性能数据，请输入以下命令启动分析器：

```
/spark profiler start
```

![](https://screensaver01.zap-hosting.com/index.php/s/4fwJk5wtkGK7Yqy/download)

启动后，Spark 会开始记录详细的服务器活动，比如刻时长、CPU 使用和线程执行情况。分析器应在你想要分析的问题发生时运行，比如高峰玩家活动期间或卡顿峰值出现时。通常运行 30 到 60 秒即可收集到足够的数据进行有效分析。

分析器运行时，你可以通过执行以下命令实时查看结果：

```
/spark profiler open
```

该命令会在控制台或聊天输出中生成一个网页链接。用浏览器打开该链接即可看到实时的性能数据视图，包括刻时图和负载分布。

收集到足够数据后，使用以下命令停止分析器：

```
/spark profiler stop
```

停止后，Spark 会生成最终报告链接。该报告包含完整的分析数据，可以在浏览器中打开或分享给他人进一步分析。

如果你想放弃当前分析会话并重新开始，可以运行：

```
/spark profiler cancel
/spark profiler start
```

这会清除现有数据并立即开始新的分析。

## 分析性能分析器结果

Spark 性能分析报告详细展示了服务器资源的使用情况。最重要的部分之一是刻时间线，显示每个刻完成所需的时间。持续较长的刻通常意味着负载过重，直接影响 TPS 和游戏流畅度。

![img](https://screensaver01.zap-hosting.com/index.php/s/zToJEdffQ75EgXH/preview)

报告还会突出显示**热点**，指出哪些函数或系统占用了最高资源。这些洞察帮助你判断性能问题是由特定模组、玩家行为、世界机制还是服务器配置引起的。

Spark 报告设计为易于分享。当你向客服团队或其他管理员寻求帮助时，提供分析器链接能让他们直接查看数据，给出更精准的建议。

## 总结

Hytale 的 Spark 性能分析器模组是诊断性能问题、找出服务器卡顿根源的宝贵工具。如有更多问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />