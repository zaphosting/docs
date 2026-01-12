---
id: vserver-linux-ragemp
title: "VPS：RageMP 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux VPS 上搭建 RageMP 专用服务器，实现无缝多人游戏体验 → 立即了解"
sidebar_label: RageMP
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想要安装 RageMP 专用服务器服务吗？那你来对地方了！本指南将一步步教你如何在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的操作流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 接口**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 接口](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不熟悉操作，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

### 创建用户

强烈建议你创建一个独立用户来运行所有专用游戏服务器服务。像大多数情况一样，直接用 root 用户运行并不安全也不推荐。如果你已经有合适的用户，直接跳到安装步骤吧。

用下面的命令创建一个名为 `gameservers` 的用户，密码可选，自己设定。

```
sudo useradd -m gameservers
sudo passwd gameservers # 可选设置密码
```

确认你已经登录服务器并有了合适的用户后，继续安装步骤。

## 安装

先切换到 `gameservers` 用户，并进入该用户的主目录，方便管理。
```
sudo -u gameservers -s
cd ~
```

为了保持整洁，执行下面命令创建 RageMP 服务器文件夹并进入：
```
mkdir RageMP-Server && cd RageMP-Server
```

接下来，下载 RageMP 官网最新版本。用下面命令直接下载：
```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

这会把 `.tar.gz` 文件下载到当前目录，也就是你刚创建的 `RageMP-Server` 文件夹。用下面命令解压文件：
```
tar -xvzf linux_x64.tar.gz
```

解压后，文件会在 **ragemp-srv** 文件夹里，进入它：
```
cd ragemp-srv
```
随时用 `ls` 查看文件内容。服务器现在已经准备好了，接下来配置参数。

## 配置

到这里，你已经完成了 RageMP 服务器的基础安装。你可以通过服务器目录里的配置文件进一步调整服务器设置。

:::tip
你可能需要先启动服务器一次，配置文件才会被创建。运行这个 shell 文件启动服务器：`/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`，启动后按 `CTRL+C` 关闭服务器。
:::

用下面命令编辑核心配置文件 **conf.json**：
```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## 启动并连接服务器

现在是时候启动你的服务器了。进入主游戏目录，运行 **ragemp-server** shell 文件：
```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

你会在命令行看到日志输出，包括网络日志，说明启动成功。如果一切正常，你的服务器可以通过直接连接访问，也会显示在服务器列表里。你也可以直接用 `[你的IP地址]:22005` 连接。

## 总结

恭喜你，已经成功在 VPS 上安装并配置了 RageMP 服务器！下一步，建议看看我们的 [Linux 服务设置](vserver-linux-create-gameservice.md) 指南，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等多种便利功能！

如果你有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />