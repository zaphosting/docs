---
id: vserver-linux-soulmask
title: "VPS：Soulmask 专用服务器 Linux 安装指南"
description: "快速高效地在你的 Linux VPS 上安装和配置 Soulmask 专用服务器 → 立即了解更多"
sidebar_label: Soulmask
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Soulmask 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这款服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不熟悉，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录 `home/steam`，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令通过 SteamCMD 直接安装 Soulmask 服务器到 `steam` 用户目录。
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

下载过程可能需要一点时间，尤其是游戏文件较大的时候，请耐心等待。完成后会显示成功提示。

## 配置服务器

到这里，你已经完成了 Soulmask 服务器的安装。接下来可以通过服务器目录下的配置文件进行更细致的设置。

所有配置参数都可以通过编辑 **Engine.ini** 文件来调整，路径在 Saved 文件夹内：
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## 启动并连接服务器

现在可以启动服务器了，进入游戏主目录，运行启动脚本 **StartServer.sh**：
```
/home/steam/Soulmask-Server/StartServer.sh
```

启动后，你会在命令行看到日志输出，表示服务器启动成功。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接通过服务器列表底部的搜索栏，输入 `[你的IP地址]:18888` 来连接服务器。

## 总结

恭喜你，Soulmask 服务器已经成功安装并配置完成！下一步，推荐你看看我们的 [Linux 服务设置](vserver-linux-create-gameservice.md) 指南，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等多种便利功能！

如果你有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />