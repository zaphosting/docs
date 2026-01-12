---
id: dedicated-linux-ragemp
title: "独服教程：RageMP 独服 Linux 安装指南"
description: "了解如何在你的 Linux 独服上安装 RageMP 独服，实现无缝游戏托管和管理 → 立即了解"
sidebar_label: RageMP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独服，想在上面安装 RageMP 独服服务吗？来对地方了！本指南将一步步教你如何在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也差不多。

:::tip
你知道吗？你可以直接在独服上安装我们的 **ZAP GS/TS3 接口**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 接口](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。

### 创建用户

强烈建议你创建一个专门的用户来运行所有游戏服务器服务。像大多数情况一样，用 root 用户运行并不安全也不推荐。如果你已经有合适的用户，直接跳到安装步骤。

用下面的命令创建一个名为 `gameservers` 的用户，密码可选，自己设定。

```
sudo useradd -m gameservers
sudo passwd gameservers # 可选密码
```

确认你已经登录服务器并有了用户后，继续安装步骤。

## 安装

先切换到 `gameservers` 用户，进入该用户的主目录，方便管理。

```
sudo -u gameservers -s
cd ~
```

为了保持整洁，创建一个新文件夹专门放 RageMP 服务器文件，并进入该文件夹。

```
mkdir RageMP-Server && cd RageMP-Server
```

接下来，下载 RageMP 官网最新版本。用下面命令直接下载。

```
wget https://cdn.rage.mp/updater/prerelease/server-files/linux_x64.tar.gz
```

这会把 `.tar.gz` 文件下载到当前目录，也就是你刚创建的 `RageMP-Server` 文件夹。用下面命令解压文件。

```
tar -xvzf linux_x64.tar.gz
```

解压后，文件会在 **ragemp-srv** 文件夹里，进入它：

```
cd ragemp-srv
```

随时用 `ls` 查看文件夹内容。服务器现在已经准备好了，接下来配置参数。

## 配置

到这一步，你已经完成了 RageMP 服务器的基础安装。你可以通过服务器目录里的配置文件进一步调整服务器设置。

:::tip
你可能需要先启动服务器一次，配置文件才会生成。运行这个 shell 文件启动服务器：`/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server`，启动后按 `CTRL+C` 关闭服务器。
:::

用下面命令打开核心配置文件 **conf.json** 进行编辑。

```
nano /home/gameservers/RageMP-Server/ragemp-srv/conf.json
```

## 启动 & 连接服务器

现在可以启动服务器了。进入主游戏目录，运行 **ragemp-server** shell 文件。

```
/home/gameservers/RageMP-Server/ragemp-srv/ragemp-server
```

你会在命令行看到日志输出，包括网络日志，说明启动成功。如果一切正常，你的服务器就能通过直接连接访问，也会显示在服务器列表里。你也可以直接用 `[你的IP]:22005` 连接。

## 总结

恭喜你，RageMP 服务器已经成功安装并配置完成！下一步，推荐看看我们的 [Linux 服务设置](dedicated-linux-create-gameservice.md) 教程，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志，超方便！

如果有任何问题，随时联系在线客服，我们每天都在线帮你解决！