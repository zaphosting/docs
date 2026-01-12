---
id: vserver-linux-mythofempires
title: "VPS：Myth of Empires 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux VPS 上安装并运行 Myth of Empires 专用服务器，实现无缝游戏托管 → 立即了解"
sidebar_label: Myth of Empires
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Myth of Empires 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不熟悉，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的首次设置。请参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 已完全配置好后再继续。

:::info Wine 兼容层
Myth of Empires 目前没有原生 Linux 服务器版本，这意味着你需要额外准备一步，才能在 Linux 上运行 Windows 服务器版本。

如果你是第一次在 Linux 服务器上使用，需要先完成 **Wine** 兼容层的一次性安装。请参考我们的快速 [Wine 兼容层安装指南](vserver-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先以 `steam` 用户身份登录，并进入该用户的根目录 `home/steam`，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 开始安装。这里用到了 `+@sSteamCmdForcePlatformType windows` 参数，强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到成功提示。

## 配置服务器

到这一步，你已经完成了 Myth of Empires 服务器的基础安装。接下来可以通过服务器目录下的各种配置文件进行更细致的设置。

所有配置参数都可以通过编辑 Saved 文件夹内的 `.ini` 配置文件来调整。先用 `ls` 命令看看有哪些文件：
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

编辑文件时，运行 `nano ./[文件名].ini` 即可打开 nano 编辑器。

想了解所有服务器配置选项及其作用，别忘了查看我们的 Myth of Empires [服务器配置指南](moe-configuration.md)。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **MOEServer.exe** 可执行文件。记得用 **xvfb-run** 和 **wine** 命令通过 Wine 兼容层启动：
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

启动成功后，命令行会显示日志。首次启动可能会稍微久一点，因为需要完成初始化。启动后，你可以通过游戏内的 **自定义服务器** 标签页，输入 `[你的IP地址]:15636` 直接连接服务器。

## 总结

恭喜你，Myth of Empires 服务器已经成功安装并配置完成！下一步，强烈建议你看看我们的 [Linux 服务设置指南](vserver-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等超多便利功能！

如果你还有任何疑问或遇到问题，随时联系在线客服，我们每天都在线帮你解决！

<InlineVoucher />