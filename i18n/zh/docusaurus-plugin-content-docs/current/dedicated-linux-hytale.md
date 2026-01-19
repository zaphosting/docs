---
id: dedicated-linux-hytale
title: "独立服务器：Hytale 独立服务器搭建指南"
description: "了解如何在你的 Linux 独立服务器上搭建 Hytale 独立服务器，实现流畅的游戏管理 → 立即了解更多"
sidebar_label: Hytale
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独立服务器，想在上面安装 Hytale 吗？你来对地方了！本指南将一步步教你如何在 Linux 服务器上安装这款服务。

## 准备工作

要运行 Hytale 服务器，你的系统需要满足一些基本要求。服务器基于 Java 25 运行，至少需要 4 GB 内存。支持 x64 和 arm64 架构。实际资源消耗取决于玩家数量、视距和世界活动情况，较大的服务器可能需要更多资源。

继续之前，请确保系统已安装 Java 25。你可以用以下命令验证：

```
java --version
```

如果系统还没装 Java，可以参考我们专门的 [Linux 服务器安装 Java](vserver-linux-java) 指南，教你如何正确安装和配置 Java。

## 安装

先创建一个专门的目录来放 Hytale 服务器文件，这样文件会更整齐。

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

服务器主要需要两个部分：服务器程序和游戏资源。这些文件可以通过 Hytale 命令行下载器获取，方便服务器部署和后续更新。

CLI 下载器提供了结构化的方式来下载和更新 Hytale 服务器文件。下载后解压到临时目录，里面有个 QUICKSTART.md 文件，介绍了工具的基本用法。

从命令行运行下载器，按照提示下载最新服务器版本。完成后，把下载好的服务器文件和资源包复制到你的服务器目录。此时目录里应该有服务器的 JAR 文件和类似 Assets.zip 的资源包。

| **命令**                                   | **说明**                             |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | 下载最新版本                         |
| `./hytale-downloader -print-version`          | 显示游戏版本，不下载                 |
| `./hytale-downloader -version`                | 显示 hytale-downloader 版本          |
| `./hytale-downloader -check-update`           | 检查 hytale-downloader 更新          |
| `./hytale-downloader -download-path game.zip` | 指定文件名下载                      |
| `./hytale-downloader -patchline pre-release`  | 从预发布渠道下载                    |
| `./hytale-downloader -skip-update-check`      | 跳过自动更新检查                    |

## 配置

### 启动服务器

启动服务器时运行 JAR 文件，并指定资源包路径。如果资源包放在别的位置，记得调整路径。

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### 认证

首次启动时，服务器需要认证才能让玩家连接。认证通过服务器控制台完成，使用设备登录流程。按照控制台提示操作完成认证。

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

默认服务器监听 UDP 5520 端口，绑定所有可用网卡。你可以根据需要修改地址和端口。服务器通过 UDP 的 QUIC 协议通信。确保防火墙允许该端口的 UDP 流量，可以用 Iptables 或 UFW 设置。

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```

## 性能提示

视距是影响内存使用的关键因素。视距越大，内存占用越高，因为需要同时保持更多世界数据活跃。

大多数情况下，最大视距设置为 12 区块（384 方块）能在服务器性能和游戏体验间取得不错平衡。

对比一下，Minecraft 默认视距是 10 区块（160 方块）。Hytale 默认的 384 方块大约相当于 24 个 Minecraft 区块，这也解释了它更高的内存需求。你可以根据玩家数量和系统资源调整这个值。

## 总结

恭喜你，现在你的系统上已经成功运行了 Hytale 服务器。接下来，你可以安装插件、调整世界设置、优化性能参数，打造专属的游戏环境。建议定期监控资源使用，确保服务器稳定运行。

有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂