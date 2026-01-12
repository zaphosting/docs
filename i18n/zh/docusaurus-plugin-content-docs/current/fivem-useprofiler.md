---
id: fivem-useprofiler
title: "FiveM：使用 Profiler 识别服务器问题"
description: "了解如何使用 FiveM Profiler 分析服务器性能并识别资源问题，助你畅玩无忧 → 立即了解更多"
sidebar_label: 使用 Profiler
services:
  - gameserver-fivem
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍

Profiler 是一个非常实用且易用的游戏工具，用于测量服务器性能。它可以用来检查可能导致性能问题的代码和线程，比如开发不佳的资源等。Profiler 直接集成在服务器软件中。

<InlineVoucher />

## Profiler 的使用方法
使用 FiveM Profiler 的步骤相当简单。只需在实时控制台执行命令 `profiler record 100` 和 `profiler view`。这会生成一个包含 100 帧的性能分析文件，随后你可以通过控制台提供的链接访问它。 ![img](https://screensaver01.zap-hosting.com/index.php/s/ZGFEaFFmgyKn8PK/preview)




## 识别问题
Profiler 会显示需要重点检查的各个活动（tick）信息。选中一个 tick 区域并放大查看。根据该 tick，你可以看到执行了哪些进程以及它们耗时多少。

![](https://screensaver01.zap-hosting.com/index.php/s/6BJozz7abRSHSj5/preview)

这样，你还能识别出哪些资源占用了大量时间。总耗时超过 6 毫秒的资源可能会引发性能问题。
:::



## 总结

恭喜你，已经成功生成了 FiveM 性能分析文件，帮助你识别潜在问题。如有更多疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />