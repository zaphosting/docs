---
id: dedicated-raid
title: "独立服务器：RAID 配置"
description: "了解 RAID 配置如何提升配备 SSD 的独立服务器的数据性能和冗余 → 立即了解更多"
sidebar_label: 配置 RAID
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RAID（独立磁盘冗余阵列）是一项将多个硬盘组合成一个逻辑驱动器的技术，旨在实现数据冗余和/或提升性能。不同的 RAID 级别提供了不同的数据分布和容错组合。

## 可用的 RAID 类型
我们的独立服务器目前配备 2 个 SSD 插槽，因此有两种可能的 RAID 配置。第一种是 RAID0，用于将多个卷合并成一个大卷；第二种是 RAID1，用于镜像卷并保持数据冗余。下面我们将详细介绍这两种配置。

:::info
RAID0 由于有两个硬盘，读写速度会稍微快一点。
:::

### RAID0
在这种 RAID 配置中，所有现有卷会合并成一个大卷，例如两块各 1TB 的 SSD 会合成一个 2TB 的分区，供你完全使用。

它没有数据冗余，因此一旦出现技术故障，数据丢失往往不可避免，因为数据被写入不同的扇区。

如果你在系统上存储敏感数据，建议不要使用 RAID0，或者至少要定期做系统备份。

:::info
如果你的独立服务器只有 1 块 SSD，那它自动就是 RAID0。
:::

### RAID1
这种配置和 RAID0 完全不同，它提供数据冗余，也就是说你在服务器上存储的所有数据都会被复制一份。

数据会被镜像到两块 SSD 上，容错率达到 50%，所以只要有一块 SSD 正常，你的数据就安全无虞。

出现技术故障时，只需更换受影响的 SSD，服务器会自动重建 RAID，也就是重新镜像数据。

特别是对于更敏感的数据，这种配置强烈推荐，但它并不能替代备份。

:::info
定期备份所有重要数据是必须的！
:::

## 配置助手

当服务器启动时，需要启动 RAID 配置工具。你可以在启动的关键步骤按下 `F8` 来进入。

![](https://screensaver01.zap-hosting.com/index.php/s/cYzj7L6dL5g7255/preview)

此时按 F8 打开 RAID 配置工具

***

![](https://screensaver01.zap-hosting.com/index.php/s/L4Lw8oGjxbDR96N/preview)

几秒后，会显示这个配置概览。

***

现在有几个菜单选项：

* 创建逻辑驱动器  
用于创建新的卷。

* 查看逻辑驱动器  
显示当前的 RAID 配置。

***
RAID0

![](https://screensaver01.zap-hosting.com/index.php/s/6mtbrFXNPeqHnYi/preview)

RAID1

![](https://screensaver01.zap-hosting.com/index.php/s/749Kxjq6Mkzdc69/preview)
***

* 删除逻辑驱动器  
可以删除当前的 RAID 配置，比如为了创建新的。

* 选择启动卷  
可以选择从其他存储介质启动，不过我们这里一般不需要。

* 管理许可证密钥  
这里无需调整，许可已预配置好。

* 缓存设置  
缓存选项可以调整，稍微提升 SSD 的读写速度。  
基本上，每次写入时最后的数据块会被缓存，以防断电等安全原因。  
这会带来极小的性能损失。

### 创建新的 RAID

首先确认没有现有卷，打开 `删除逻辑驱动器`

![](https://screensaver01.zap-hosting.com/index.php/s/EbPtmgFyZ3oN6jb/preview)

按 `F8` 删除现有 RAID。

***

![](https://screensaver01.zap-hosting.com/index.php/s/qmtAciacCLKJ9QG/preview)

按 `F3` 确认删除。

***

删除成功后，打开 `创建逻辑驱动器`

![](https://screensaver01.zap-hosting.com/index.php/s/SjP6ZkcWXCKc4kT/preview)

这里会显示所有 SSD 并提供 RAID 配置选项。  
当然，并非所有 RAID 类型都能在当前硬件配置下实现。

我们示例中选择 RAID0 或 RAID1。

:::info
可以通过按 `TAB` 在菜单间切换
:::

选好 RAID 配置后，按 `Enter` 确认。

:::info
按 `ESC` 可关闭配置助手
:::

### 选择启动卷

如果你修改了 RAID，必须选择启动卷。  
在 **选择启动卷** 中选择你创建的逻辑驱动器，否则服务器会陷入启动循环。

**选择启动卷**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2GDEYfjnkmaKF9F/preview)
***
**直连存储**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/2468ZCGkr2ninxM/preview)
***
**逻辑驱动器 01**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tN6pRiJbZexbzmg/preview)
***
**按 `F8` 保存为启动卷**<br/>
![](https://screensaver01.zap-hosting.com/index.php/s/tqGFzGZGgeo4JjZ/preview)

最后，你可以按 `F8` 直接重启系统，或者按 `Enter` 返回主菜单。  
记住，每次修改 RAID 配置后都必须设置启动卷。

## 总结

恭喜你，已经成功配置了独立服务器的 RAID！  
如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂