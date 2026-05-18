---
id: dedicated-reset
title: "独立服务器：服务器重置（恢复出厂状态）"
description: "了解如何有效重置服务器，恢复性能或从头开始，安全清除数据 → 立即了解更多"
sidebar_label: 服务器重置
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你的服务器不再像以前那样正常工作，或者你想从头开始但不知道怎么做？别担心，你可以通过重新安装来重置服务器。本指南将告诉你如何操作以及需要注意的事项。

## 准备工作

在重置服务器数据之前，你需要知道现有数据将会丢失。如果你有重要数据，现在是备份数据的最佳时机，然后再开始重新安装。接下来，你需要决定具体想用哪种方式重置系统。

## 数据重置方式

根据你的需求和情况，有两种不同的重置数据方式。下面我们详细介绍这两种选项：

- 使用 RAID 配置重置数据（快速方法）
- 使用 Wipe ISO 重置数据（彻底方法）

通过 RAID 配置重置数据时，现有数据会被逻辑删除并替换为新数据，这是一种快速且高效的系统重装方案。

相比之下，使用 Wipe ISO 重置会进行多轮删除，确保所有数据被永久且不可恢复地清除。这种方法适合需要彻底擦除系统的情况。

### 快速方法

和配置 RAID 一样，启动时按 `F8` 键进入 RAID 配置界面。打开菜单选项 **Delete Logical Drive**，这里会显示当前的 RAID 配置和硬盘。按 `F8` 键删除现有 RAID，删除操作需按 `F3` 键确认。

然后返回 RAID 配置，打开菜单选项 **Create Logical Drive**。选择硬盘和想要的 RAID 配置（Raid 0/1），按 `Enter` 键确认创建 RAID。

如果你不熟悉如何配置 RAID，建议先看看我们的通用 [RAID 配置](dedicated-raid.md) 指南。

### 彻底方法

需要挂载并执行 Wipe ISO 来完成数据重置的实际过程。ISO 文件可以通过 iLO 或远程控制台挂载。如果你还不清楚怎么操作，请参考 [自定义 ISO](http://localhost:3000/guides/docs/dedicated-iso) 指南。

将以下 Wipe ISO 文件挂载到你的服务器并重启：

```
http://185.223.30.65/dedicatedisos/wipedisk.iso
```

服务器重启后，Wipe ISO 会自动被识别并加载。使用你喜欢的远程控制台（HTML5、.NET、Java Web Start）连接你的独立服务器。

你会看到服务器自动执行格式化过程，并显示进度。服务器会覆盖所有现有卷，有效删除所有数据。根据 SSD 容量大小，这个过程可能需要 45 分钟到 2 小时不等。

![](https://screensaver01.zap-hosting.com/index.php/s/4nfaexaqiK78t6e/preview)

:::danger
此过程不可逆，操作完成即为最终状态。没有额外备份可供恢复。
除非你完全确定要删除所有数据，否则强烈不建议执行此操作。
:::

## 总结

恭喜你，已成功删除独立服务器上的所有数据。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂