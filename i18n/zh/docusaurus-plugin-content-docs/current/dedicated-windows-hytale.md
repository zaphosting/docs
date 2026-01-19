---
id: dedicated-windows-hytale
title: "独立服务器：Hytale 独立服务器搭建"
description: "了解如何在你的 Windows 独立服务器上搭建 Hytale 独立服务器，实现无缝游戏管理 → 立即了解更多"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台独立服务器，想在上面自己托管 Hytale 服务器吗？本指南将一步步教你如何在 Windows 系统上安装并运行 Hytale 独立服务器。

## 准备工作

要运行 Hytale 服务器，你的系统需要满足一些基本要求。服务器基于 Java 25 运行，至少需要 4 GB 内存。支持 x64 和 arm64 架构。实际资源消耗取决于玩家数量、视距和世界活动，因此大型服务器可能需要更多资源。

继续之前，请确保你的 Windows 系统已安装 Java 25。你可以打开命令提示符，运行以下命令来验证：

```
java --version
```

如果系统尚未安装 Java，请参考我们专门针对 Windows 服务器的 Java 安装指南。该指南详细说明了如何正确安装和配置 Java。

## 安装

首先，为 Hytale 服务器创建一个专用目录，方便管理所有服务器文件。例如：

```
C:\Hytale
```

服务器需要两个主要组件：服务器程序和游戏资源。这些文件可以通过 Hytale 命令行下载器获取，专为服务器部署和便捷更新设计。

CLI 下载器提供了结构化的方式来下载和更新 Hytale 服务器文件。下载后，将压缩包解压到临时目录。压缩包内有个 QUICKSTART.md 文件，介绍了工具的基本用法。

在命令行运行下载器，按照提示下载最新服务器版本。完成后，将下载的服务器文件和资源包复制到你的服务器目录。此时目录应包含服务器 JAR 文件和资源包（如 Assets.zip）。

| **命令**                                   | **说明**                             |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | 下载最新版本                         |
| `./hytale-downloader -print-version`          | 显示游戏版本（不下载）               |
| `./hytale-downloader -version`                | 显示 hytale-downloader 版本          |
| `./hytale-downloader -check-update`           | 检查 hytale-downloader 更新          |
| `./hytale-downloader -download-path game.zip` | 下载到指定文件                      |
| `./hytale-downloader -patchline pre-release`  | 从预发布渠道下载                    |
| `./hytale-downloader -skip-update-check`      | 跳过自动更新检查                    |

## 配置

### 启动服务器

启动服务器时，需要运行 JAR 文件并指定资源包路径。如果资源包存放位置不同，请调整路径。打开服务器目录的命令提示符，运行：

```
java -jar HytaleServer.jar --assets C:\Hytale\Assets.zip --bind 0.0.0.0:5520
```

### 认证

首次启动时，服务器必须完成认证，玩家才能连接。认证通过服务器控制台的设备登录流程完成。按照控制台提示操作：

```
/auth login device
```

输出示例：

```
> /auth login device
===================================================================
设备授权
===================================================================
访问: https://accounts.hytale.com/device
输入代码: ABCD-1234
或访问: https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
等待授权（900秒后过期）...

[用户在浏览器完成授权]

> 认证成功！模式：OAUTH_DEVICE
```

认证完成后，服务器即可接受玩家连接。

### 防火墙配置

默认情况下，服务器监听 UDP 端口 5520，绑定所有可用接口。你可以根据需要更改地址和端口。服务器通过 UDP 使用 QUIC 协议通信。确保防火墙允许所选端口的 UDP 入站流量。你可以用 Iptables 或 UFW 配置。Windows PowerShell 下运行以下命令快速添加防火墙规则：

```
New-NetFirewallRule -DisplayName "Hytale Server" -Direction Inbound -Protocol UDP -LocalPort 5520 -Action Allow
```

## 性能提示

视距是影响内存消耗的关键因素。视距越大，内存使用越高，因为更多的世界数据需要同时保持活跃。

大多数情况下，最大视距设置为 12 区块（384 方块）能在服务器性能和游戏体验间取得良好平衡。

对比来看，Minecraft 服务器默认视距为 10 区块（160 方块）。Hytale 默认的 384 方块大约相当于 24 个 Minecraft 区块，这也解释了更高的内存需求。请根据预期玩家数量和系统资源调整此值。

## 总结

恭喜你，现在已经成功在系统上运行了功能完整的 Hytale 服务器。接下来，你可以通过安装 Mod、调整世界设置和优化性能参数来扩展服务器，满足玩家需求。建议定期监控资源使用，确保服务器稳定运行。

如有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂