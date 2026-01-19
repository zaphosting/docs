---
id: vserver-windows-hytale
title: "VPS：Hytale 专用服务器搭建指南"
description: "了解如何在你的 Windows VPS 上搭建 Hytale 专用服务器，实现无缝游戏管理 → 立即了解"
sidebar_label: Hytale
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Windows VPS，想自己托管 Hytale 服务器吗？本指南将一步步教你如何在 Windows 系统上安装并运行 Hytale 专用服务器。

<InlineVoucher />

## 准备工作

运行 Hytale 服务器，你的系统需要满足一些基本要求。服务器基于 Java 25 运行，至少需要 4 GB 内存。支持 x64 和 arm64 架构。实际资源消耗取决于玩家数量、视距和世界活动，较大的服务器可能需要更多资源。

继续之前，请确保你的 Windows 系统已安装 Java 25。你可以打开命令提示符，运行以下命令确认：

```
java --version
```

如果系统还没装 Java，可以参考我们专门的 Windows 服务器安装 Java 指南，教你如何正确安装和配置 Java 环境。



## 安装步骤

首先，为 Hytale 服务器创建一个专用文件夹，方便管理所有服务器文件。例如：

```
C:\Hytale
```

服务器主要需要两个部分：服务器程序和游戏资源。这些文件可以通过 Hytale 命令行下载器获取，方便服务器部署和后续更新。

命令行下载器提供了结构化的方式来下载和更新 Hytale 服务器文件。下载解压后，会在临时目录找到一个 QUICKSTART.md 文件，里面介绍了工具的基本用法。

在命令行运行下载器，按照提示下载最新服务器版本。完成后，将下载好的服务器文件和资源包复制到你的服务器目录。此时目录里应该包含服务器 JAR 文件和类似 Assets.zip 的资源包。

| **命令**                                   | **说明**                             |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | 下载最新版本                       |
| `./hytale-downloader -print-version`          | 显示游戏版本，不下载               |
| `./hytale-downloader -version`                | 显示下载器版本                     |
| `./hytale-downloader -check-update`           | 检查下载器更新                   |
| `./hytale-downloader -download-path game.zip` | 指定文件名下载                   |
| `./hytale-downloader -patchline pre-release`  | 从预发布渠道下载                 |
| `./hytale-downloader -skip-update-check`      | 跳过自动更新检查                 |



## 配置

### 启动服务器

启动服务器时，需要运行 JAR 文件并指定资源包路径。如果资源包放在别的位置，记得调整路径。打开服务器目录的命令提示符，运行：

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### 认证

首次启动时，服务器需要认证才能允许玩家连接。认证通过服务器控制台完成，采用设备登录流程。按照控制台提示操作完成认证。

```
/auth login device
```

输出示例：

```
> /auth login device
===================================================================
设备授权
===================================================================
访问：https://accounts.hytale.com/device
输入代码：ABCD-1234
或访问：https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
等待授权（900秒后过期）...

[用户在浏览器完成授权]

> 认证成功！模式：OAUTH_DEVICE
```

认证完成后，服务器即可接受玩家连接。



### 防火墙配置

默认情况下，服务器监听 UDP 端口 5520，绑定所有可用网卡。你可以根据需要更改地址和端口。服务器通过 UDP 使用 QUIC 协议通信。确保防火墙允许所选端口的 UDP 入站流量。你可以用 Iptables 或 UFW 配置，Windows PowerShell 下运行以下命令快速添加规则：

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```



## 性能提示

视距是影响内存使用的关键因素。视距越大，内存占用越高，因为需要同时加载更多世界数据。

大多数情况下，最大视距设置为 12 区块（384 方块）能在服务器性能和游戏体验间取得不错平衡。

对比一下，Minecraft 默认视距是 10 区块（160 方块）。Hytale 默认的 384 方块大约相当于 24 个 Minecraft 区块，这也解释了更高的内存需求。你可以根据预期玩家数量和系统资源调整这个数值。



## 总结

恭喜你，现在已经成功在系统上运行了功能完整的 Hytale 服务器。接下来，你可以安装插件、调整世界设置，优化性能参数，打造专属的游戏体验。建议定期监控资源使用，确保服务器稳定运行。

有任何问题或需要帮助，随时联系我们的支持团队，我们每天在线为你服务！🙂

<InlineVoucher />