---
id: vserver-linux-wine
title: "VPS：Linux 上的 Wine 兼容层设置"
description: "了解如何在 Linux 上设置 Wine，顺畅运行 Windows 软件和游戏服务器 → 立即了解更多"
sidebar_label: 设置 Wine 兼容层
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Wine 是一个开源的 Linux 兼容层，允许原本为 Windows 开发的软件在 Linux 系统上运行。这对于只提供 Windows 服务器文件的专用游戏服务器尤其重要，也可能是我们其他 Linux 专用游戏服务器指南的前置条件。在本指南中，我们将探索首次在 Linux 服务器上安装 Wine 的设置流程。示例中使用的是 Ubuntu，但其他发行版的步骤应该非常相似。

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果需要帮助，请参考我们的[SSH 初始访问](vserver-linux-ssh.md)指南。

## 安装 Wine

先确保 `/etc/apt/keyrings/` 目录存在，因为这是安装 Wine 所必需的。
```
sudo mkdir -pm755 /etc/apt/keyrings
```

接着，下载并保存 Wine 的 GPG 密钥到该目录，用于验证软件包的真实性。
```
sudo wget -O /etc/apt/keyrings/winehq-archive.key https://dl.winehq.org/wine-builds/winehq.key
```

你还需要保存 WineHQ 的源列表，可以用下面这条预写好的命令完成：
```
sudo wget -NP /etc/apt/sources.list.d/ https://dl.winehq.org/wine-builds/$(lsb_release -is | tr '[:upper:]' '[:lower:]')/dists/$(lsb_release -cs)/winehq-$(lsb_release -cs).sources
```

运行更新命令，确保你的软件包信息被读取并更新。
```
sudo apt update
```

现在可以开始安装最新版本的 Wine 了，这一步可能需要一些时间。
```
sudo apt install --install-recommends winehq-staging
```

最后，安装几个额外的软件包，确保 Wine 能更好地支持专用游戏服务器，运行以下命令：
```
sudo apt install cabextract winbind screen xvfb
```

## 总结

你现在已经成功设置了 Wine 兼容层，可以在你的 Linux 服务器上运行 Windows 程序。有了这个重要的前置条件，你就能安装即使是为 Windows 构建的专用游戏服务器了。

我们推荐你查看本节的其他指南，里面涵盖了如何通过 SteamCMD 以及可能结合 Wine 来安装特定游戏的 Windows 专用服务器文件。

<InlineVoucher />