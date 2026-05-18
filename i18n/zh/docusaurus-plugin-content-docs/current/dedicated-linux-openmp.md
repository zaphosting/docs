---
id: dedicated-linux-openmp
title: "独服教程：Open.mp 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux 独服上安装 open.mp 专用服务器，实现无缝游戏托管和管理 → 立即了解"
sidebar_label: Open.mp
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独服，想在上面安装 open.mp 专用服务器服务吗？那你来对地方了！本指南将一步步教你如何在 Linux 服务器上安装这个服务。我们以 Ubuntu 为例，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在独服上安装我们的 **ZAP GS/TS3 接口**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 接口](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。

### 创建用户

强烈建议你创建一个专门的用户来运行所有游戏服务器服务。像大多数情况一样，直接用 root 用户运行并不安全也不推荐。如果你已经有合适的用户，直接跳到安装步骤。

用下面的命令创建一个名为 `gameservers` 的用户，可以设置你喜欢的密码。

```
sudo useradd -m gameservers
sudo passwd gameservers # 可选密码
```

确认你已经登录服务器并准备好用户后，继续安装步骤。

## 安装

先切换到 `gameservers` 用户，并进入该用户的主目录，方便管理。
```
sudo -u gameservers -s
cd ~
```

为了保持整洁，创建一个新文件夹专门放 open.mp 服务器文件，并进入该文件夹。
```
mkdir OpenMP-Server && cd OpenMP-Server
```

接下来，你需要从 [open.mp GitHub 仓库](https://github.com/openmultiplayer/open.mp/releases) 下载最新版本。在页面上，右键点击 **linux-x86** 版本，复制链接。然后用下面命令下载，记得把 `[link]` 替换成你复制的链接。
```
wget [link]
```

这会把 `.zip` 文件下载到当前目录，也就是你刚创建的 `OpenMP-Server` 文件夹。用下面命令解压文件。
```
tar -xvzf open.mp-linux-x86.tar.gz
```

解压后，文件会在 **Server** 文件夹里，进入它：
```
cd Server
```
随时用 `ls` 查看文件内容。服务器现在已经准备好了，接下来配置参数。

## 配置

到这一步，你已经完成了 open.mp 服务器的基础安装。你可以通过服务器目录下的配置文件进一步调整服务器设置。

用下面命令打开核心配置文件 **config.json**：
```
nano /home/gameservers/OpenMP-Server/Server/config.json
```

想了解所有可用配置项及其作用，参考我们的 Open.mp [服务器配置](openmp-configuration.md) 指南。

## 启动 & 连接服务器

现在开始启动服务器吧！进入主游戏目录，运行 **omp-server** 脚本：
```
/home/gameservers/OpenMP-Server/Server/omp-server
```

你会在命令行看到日志输出，包括网络日志，说明启动成功。如果一切正常，你的服务器就能通过直接连接访问，也会显示在服务器列表里。你也可以直接用 `[你的IP]:7777` 连接。

## 总结

恭喜你，成功在 VPS 上安装并配置了 open.mp 服务器！下一步，推荐看看我们的 [Linux 服务设置](dedicated-linux-create-gameservice.md) 教程，教你如何把新游戏服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等超多便利功能！

如果你有任何问题或遇到困难，随时联系在线客服，我们每天都在线帮你！