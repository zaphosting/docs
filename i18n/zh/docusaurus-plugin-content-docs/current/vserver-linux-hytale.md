---
id: vserver-linux-hytale
title: "VPS：Hytale 专用服务器搭建指南"
description: "了解如何在你的 Linux VPS 上搭建 Hytale 专用服务器，实现流畅的游戏管理 → 立即了解"
sidebar_label: Hytale
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Hytale 吗？那你来对地方了！本指南将一步步教你如何在 Linux 服务器上安装这款游戏服务器。

<InlineVoucher />

## 准备工作

运行 Hytale 服务器，你的系统需要满足一些基本要求。服务器基于 Java 25 运行，至少需要 4 GB 内存。支持 x64 和 arm64 架构。实际资源消耗取决于玩家数量、视距和世界活动，玩家多了或者视距开大了，可能需要更多资源。

继续之前，先确认你的系统已经安装了 Java 25。用下面命令检查：

```
java --version
```

如果还没装 Java，参考我们专门的 [Linux 服务器安装 Java](vserver-linux-java) 教程，教你如何正确安装和配置 Java 环境。



## 安装步骤

先创建一个专门的目录来放 Hytale 服务器文件，方便管理：

```
sudo mkdir -p /opt/hytale
sudo chown -R $(whoami):$(whoami) /opt/hytale
cd /opt/hytale
```

服务器主要需要两个部分：服务器程序和游戏资源。这些文件可以通过 Hytale 的命令行下载器获取，专为服务器部署和方便更新设计。

命令行下载器提供了结构化的方式来下载和更新服务器文件。下载完压缩包后，解压到临时目录。压缩包里有个 QUICKSTART.md，里面写了工具的基本用法。

在命令行运行下载器，按提示操作下载最新服务器版本。下载完成后，把服务器文件和资源包复制到你的服务器目录。此时目录里应该有服务器的 JAR 文件和资源包，比如 Assets.zip。

| **命令**                                   | **说明**                             |
| :-------------------------------------------- | :------------------------------------ |
| `./hytale-downloader`                         | 下载最新版本                         |
| `./hytale-downloader -print-version`          | 显示游戏版本，不下载                 |
| `./hytale-downloader -version`                | 显示下载器版本                      |
| `./hytale-downloader -check-update`           | 检查下载器更新                     |
| `./hytale-downloader -download-path game.zip` | 指定文件名下载                     |
| `./hytale-downloader -patchline pre-release`  | 从预发布渠道下载                   |
| `./hytale-downloader -skip-update-check`      | 跳过自动更新检查                   |



## 配置

### 启动服务器

启动服务器时，运行 JAR 文件并指定资源包路径。如果你的资源包放在别的地方，记得改路径：

```
java -jar HytaleServer.jar --assets /opt/hytale/Assets.zip --bind 0.0.0.0:5520
```

### 认证流程

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
访问： https://accounts.hytale.com/device
输入代码： ABCD-1234
或者访问： https://accounts.hytale.com/device?user_code=ABCD-1234
===================================================================
等待授权（900秒后过期）...

[用户在浏览器完成授权]

> 认证成功！模式：OAUTH_DEVICE
```

认证完成后，服务器就能接受玩家连接了。



### 防火墙配置

默认情况下，服务器监听 UDP 5520 端口，绑定所有可用网卡。你可以根据需要修改地址和端口。服务器通过 UDP 的 QUIC 协议通信。确保防火墙允许该端口的 UDP 流量，可以用 Iptables 或 UFW 设置：

```
sudo iptables -A INPUT -p udp --dport 5520 -j ACCEPT
sudo ufw allow 5520/udp
```



## 性能提示

视距是影响内存占用的关键因素。视距越大，内存占用越高，因为需要同时加载更多世界数据。

大多数情况下，最大视距设为 12 区块（384 方块）能在性能和游戏体验间取得不错平衡。

对比一下，Minecraft 默认视距是 10 区块（160 方块）。Hytale 默认的 384 方块大约相当于 24 个 Minecraft 区块，这也解释了它更高的内存需求。你可以根据玩家数量和服务器资源调整这个数值。



## 总结

恭喜你，现在已经成功搭建了一个功能完整的 Hytale 服务器！接下来你可以安装插件、调整世界设置、优化性能参数，打造专属的游戏体验。建议定期监控资源使用，确保服务器稳定运行。

有任何问题或需要帮助，随时联系我们的支持团队，我们每天在线为你服务！🙂

<InlineVoucher />