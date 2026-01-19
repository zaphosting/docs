---
id: dedicated-linux-mythofempires
title: "独服教程：Myth of Empires Linux 独服安装指南"
description: "了解如何在 Linux 上安装 Myth of Empires 独服并优化你的游戏托管设置 → 立即学习"
sidebar_label: Myth of Empires
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独服，想在上面安装 Myth of Empires 独服服务？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也差不多。

:::tip
你知道吗？你可以直接在独服上安装我们的 **ZAP GS/TS3 接口**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 接口介绍](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉，可以参考我们的 [SSH 初始访问指南](dedicated-linux-ssh.md)。

如果你是第一次在 Linux 服务器上用 SteamCMD，还得先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 完全配置好后再继续。

:::info Wine 兼容层
Myth of Empires 目前没有原生 Linux 服务器版本，所以要在 Linux 上运行 Windows 服务器版本，需要额外准备。

如果你是第一次在 Linux 服务器上用，需要先安装一次 **Wine** 兼容层。请参考我们的快速 [Wine 兼容层安装指南](dedicated-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先切换到 `steam` 用户，并进入它的主目录，方便管理。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令通过 SteamCMD 安装服务器。这里用 `+@sSteamCmdForcePlatformType windows` 参数强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/MOE-Server' +login anonymous +app_update 1794810 validate +quit
```

下载可能需要点时间，尤其是大体积游戏。完成后会显示成功提示。

## 配置服务器

到这一步，你的 Myth of Empires 服务器已经安装好了。你可以通过修改服务器目录下的各种配置文件来进一步调整服务器设置。

所有配置参数都在 Saved 文件夹里的 `.ini` 配置文件中。用 `ls` 命令看看有哪些文件：
```
cd /home/steam/MOE-Server/MOE/Saved/Config/WindowsServer
```

编辑文件的话，直接用 `nano ./[文件名].ini` 打开即可。

想了解所有服务器配置选项及其作用，去看看我们的 Myth of Empires [服务器配置指南](moe-configuration.md)。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **MOEServer.exe** 可执行文件。别忘了用 **xvfb-run** 和 **wine** 命令通过 Wine 兼容层启动：
```
xvfb-run wine /home/steam/MOE-Server/MOE/Binaries/Win64/MOEServer.exe
```

启动成功后，命令行会显示日志。首次启动可能会稍微慢点，因为要完成初始化。启动后，你可以在游戏的 **自定义服务器** 标签页里用 `[你的IP]:15636` 直接搜索连接。

## 总结

恭喜你，Myth of Empires 服务器已经成功安装并配置完成！下一步，建议看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等超多便利功能！

如果还有任何问题，随时联系在线客服，我们每天都在线帮你解决！