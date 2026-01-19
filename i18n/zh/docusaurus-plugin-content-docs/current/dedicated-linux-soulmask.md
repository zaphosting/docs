---
id: dedicated-linux-soulmask
title: "独立服务器：Soulmask 独立服务器 Linux 安装指南"
description: "了解如何在 Linux 上安装和配置 Soulmask 独立服务器，实现无缝游戏托管和管理 → 立即了解更多"
sidebar_label: Soulmask
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独立服务器，想要安装 Soulmask 独立服务器服务吗？你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在你的独立服务器上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独立服务器。如果你不确定怎么操作，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装

先切换到 `steam` 用户，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令，通过 SteamCMD 直接安装 Soulmask 服务器到 `steam` 用户目录下。
```
steamcmd +force_install_dir '/home/steam/Soulmask-Server' +login anonymous +app_update 3017300 validate +quit
```

下载过程可能需要一点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到确认成功的提示信息。

## 配置

到这里，你已经完成了 Soulmask 服务器的安装。接下来可以通过服务器目录下的配置文件进行进一步设置。

所有配置参数都可以通过编辑位于 Saved 文件夹内的 **Engine.ini** 文件来调整。
```
nano /home/steam/Soulmask-Server/Engine/Saved/Config/LinuxServer/Engine.ini
```

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **StartServer.sh** 脚本：
```
/home/steam/Soulmask-Server/StartServer.sh
```

启动成功后，你会在命令行看到日志输出。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接通过服务器列表底部的搜索栏，输入 `[你的IP地址]:18888` 来连接服务器。

## 总结

恭喜你，Soulmask 服务器已经成功安装并配置完成！下一步，我们推荐你查看我们的 [Linux 服务设置](dedicated-linux-create-gameservice.md) 指南，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和日志访问等多种便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！