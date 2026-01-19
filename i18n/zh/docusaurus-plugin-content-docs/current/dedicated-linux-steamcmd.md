---
id: dedicated-linux-steamcmd
title: "独立服务器：SteamCMD Linux 安装指南"
description: "了解如何在 Linux 服务器上设置 SteamCMD，高效安装独立游戏服务器 → 立即了解"
sidebar_label: 安装 SteamCMD
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

SteamCMD 是安装各种游戏独立服务器（比如 Palworld、Enshrouded 等）必不可少的工具。在本指南中，我们将带你完成首次在 Linux 服务器上安装 SteamCMD 的流程。示例中使用的是 Ubuntu，但其他发行版的步骤也大同小异。

## 准备工作

首先，通过 SSH 连接到你的独立服务器。如果你需要帮助，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

## 安装 SteamCMD

连接服务器后，你需要安装 **SteamCMD**，才能下载所需的独立服务器文件。SteamCMD 是 Steam 客户端的 **命令行版本（CLI）**，它让你轻松下载各种 Steam 创意工坊和独立服务器文件。

Linux 系统通常先更新一下系统，命令根据你用的发行版不同，执行对应的：

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

接下来安装几个必要的软件包，具体说明如下：

- **software-properties-common** 包方便管理你的发行版和独立软件源。
- SteamCMD 是 32 位工具，所以必须添加 **i386** 架构支持，确保系统安装对应的软件。
- 由于 SteamCMD 是专有软件，你需要根据发行版添加 **multiverse** 或 **non-free** 软件源，这些通常默认仓库里没有。

```
sudo apt install software-properties-common
sudo dpkg --add-architecture i386

// Ubuntu
sudo add-apt-repository multiverse

// Debian 及其他非 Debian 发行版
sudo apt-add-repository non-free
```

然后运行更新命令，确保软件源变更生效：

```
sudo apt update
```

最后，运行下面命令安装 SteamCMD。安装过程中可能会弹出许可协议，直接接受即可继续。

```
sudo apt install steamcmd
```

:::tip
你可以通过运行 `steamcmd` 来验证安装是否成功。启动后，命令行提示符会显示 `Steam>`，输入 `quit` 即可退出。
:::

准备工作完成后，就可以用 SteamCMD 安装你的独立服务器啦。

## 创建用户

强烈建议为 SteamCMD 创建一个独立用户。像大多数服务一样，直接用 root 用户运行并不安全也不推荐。

用下面命令创建一个名为 `steam` 的用户，密码可选：

```
sudo useradd -m steam
sudo passwd steam # 可选设置密码
```

创建好用户后，需要修改 `.bashrc` 文件，给该用户添加 `/usr/games` 路径访问权限，因为 SteamCMD 就在这里。具体做法是添加一个环境变量。

用 nano 编辑器打开文件：

```
sudo nano /home/steam/.bashrc
```

用方向键滚动到文件末尾，添加以下内容：

```
export PATH="/usr/games/:$PATH"
```

保存并退出 nano，按 `CTRL + X`，然后按 `Y` 确认，最后按 `ENTER`。

## 总结

你已经成功为 Linux 服务器配置好了 SteamCMD 的核心功能。接下来可以用 `steam` 用户开始安装 Steam 内容了。

推荐你看看本节的其他指南，里面有用 SteamCMD 安装具体游戏服务器的详细教程，帮你快速上手。