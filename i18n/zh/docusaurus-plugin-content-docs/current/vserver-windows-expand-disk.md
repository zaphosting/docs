---
id: vserver-windows-expand-disk
title: "VPS：在 Windows Server 上扩展磁盘（分区）"
description: "了解如何安全地扩展你的 Windows 服务器分区，有效利用新增磁盘空间 → 立即了解更多"
sidebar_label: 扩展磁盘（分区）
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windows 操作系统自带磁盘和分区管理功能，让你轻松完成各种磁盘管理操作，包括扩展分区、拆分磁盘等。其中，扩展分区功能在升级服务器存储容量后尤为重要。本指南将带你了解如何在 Windows 服务器上扩展分区。

<InlineVoucher />

## 准备工作

首先通过 RDP 连接到你的 Windows 服务器。如果你需要帮助，请参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

管理磁盘和分区有两种方法，一种是通过 **磁盘管理** 工具，另一种是通过命令行工具 **diskpart**。**磁盘管理** 提供了 Diskpart 的图形界面版本，能完成大多数常见操作，包括扩展分区。对于高级用户，`diskpart` 命令行工具功能更强大、更灵活。

## 扩展分区

在多种情况下，你可能需要扩展现有分区以利用新增的磁盘空间。比如升级服务器磁盘空间后，默认新增空间不会自动分配，必须手动扩展主分区。

我们推荐使用 **磁盘管理** 工具方法，操作更简单，尤其适合新手。此过程安全，不会影响数据。

<Tabs>
<TabItem value="disk-management" label="通过磁盘管理（GUI）" default>

首先打开 **磁盘管理** 工具。你可以在开始菜单搜索，或者按 `Windows 键 + R`，输入 `diskmgmt.msc` 并确认打开。

![](https://screensaver01.zap-hosting.com/index.php/s/xfMexYdrJMr3L6Y/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/gKjkst3H89knLFa/preview)

打开工具后，右键点击主分区，选择 **扩展卷**，会弹出一个新的向导窗口。

:::tip
主启动盘通常是 **C:** 盘。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/nWMStW6T74SrrRe/preview)

在向导中点击 **下一步**，进入分配空间页面。默认情况下，Windows 会自动填充所有未分配空间，通常无需修改。

继续点击 **下一步**，最后点击 **完成**，完成扩展操作。

![](https://screensaver01.zap-hosting.com/index.php/s/MwRFS8eCHoqBSNt/download)

完成后，磁盘管理中会显示更新后的磁盘大小。

![](https://screensaver01.zap-hosting.com/index.php/s/M46ca4FkeG42AZz/preview)

</TabItem>

<TabItem value="diskpart" label="通过 Diskpart（命令行）">

首先以管理员身份打开命令提示符。在开始菜单搜索“命令提示符”，右键选择 **以管理员身份运行**。

输入 `diskpart` 进入命令行工具。加载后，输入 `list disk` 查看当前连接的所有磁盘。

接着输入 `select disk [磁盘编号]`，将 `[磁盘编号]` 替换为你想扩展的磁盘编号。

:::tip
主启动盘通常是 **C:** 盘。
:::

选中磁盘后，输入 `list volume` 查看该磁盘上的所有卷。找到你想扩展的卷，输入 `select volume [卷编号]`，将 `[卷编号]` 替换为对应编号。

选中磁盘和卷后，执行以下命令扩展卷。你可以直接执行命令扩展所有未分配空间，或者指定扩展大小。
```
# 扩展到所有未分配空间
extend

# 扩展指定大小（10240 = 10240MB = 10GB）
extend size=10240
```

成功后，再次查看卷大小会发现已增加。退出命令行工具，输入 `quit` 即可。

</TabItem>
</Tabs>

## 总结

你已成功扩展了主分区，充分利用了所有磁盘空间。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />