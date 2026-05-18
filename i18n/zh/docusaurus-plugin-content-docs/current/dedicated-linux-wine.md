---
id: dedicated-linux-wine
title: "独服专用：Linux 上的 Wine 兼容层设置"
description: "了解如何在 Linux 上设置 Wine，轻松运行 Windows 游戏服务器，适用于 Ubuntu 及类似系统 → 立即了解"
sidebar_label: 设置 Wine 兼容层
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Wine 是一个开源的 Linux 兼容层，能让原本为 Windows 开发的软件在 Linux 系统上运行。这对只提供 Windows 服务器文件的专用游戏服务器尤其重要，也可能是我们其他 Linux 专用游戏服务器教程的前置条件。本指南将带你完成首次在 Linux 服务器上安装 Wine 的流程。示例中我们使用的是 Ubuntu，但其他发行版的步骤基本类似。

## 准备工作

首先，通过 SSH 连接到你的独服。如果你需要帮助，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

## 安装 Wine

先确保 `/etc/apt/keyrings/` 目录存在，因为 Wine 需要用到它。
```
sudo mkdir -pm755 /etc/apt/keyrings
```

接着，下载并保存 Wine 的 GPG 密钥到该目录，用于验证软件包的真实性。
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

还需要保存 WineHQ 的源列表，可以用下面这条预写好的命令搞定：
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

运行更新命令，确保系统读取并安装了最新的软件包信息。
```
sudo apt update
```

现在可以开始安装最新版本的 Wine 了，这一步可能需要一点时间。
```
sudo apt install --install-recommends winehq-staging
```

最后，安装几个额外的依赖包，确保 Wine 能顺利运行专用游戏服务器：
```
sudo apt install cabextract winbind screen xvfb
```

## 总结

你现在已经成功搭建了 Wine 兼容层，可以在 Linux 服务器上运行 Windows 程序了。有了这个关键的前置条件，即使游戏服务器是为 Windows 打包的，你也能顺利安装运行。

强烈推荐你看看本节的其他教程，里面有通过 SteamCMD 以及可能结合 Wine 来安装 Windows 专用服务器文件的详细步骤。