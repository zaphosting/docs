---
id: dedicated-linux-enshrouded
title: "独立服务器：Enshrouded 独立服务器 Linux 安装指南"
description: "了解如何在 Linux 上安装并运行 Enshrouded 独立服务器，实现无缝游戏托管与管理 → 立即了解更多"
sidebar_label: Enshrouded
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独立服务器，想要安装 Enshrouded 独立服务器服务吗？你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装该服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在你的独立服务器上安装我们的 **ZAP GS/TS3 界面**，只需几步点击即可设置游戏服务器服务，并且能直接集成到你的 ZAP-Hosting 控制面板！想了解更多，点这里看我们的 [GS/TS3 界面介绍](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独立服务器。如果你不确定怎么操作，可以参考我们的 [SSH 初始访问指南](dedicated-linux-ssh.md)。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的首次设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已完全配置好后再继续。

:::info Wine 兼容层
Enshrouded 目前没有原生的 Linux 服务器版本，这意味着你需要额外准备一步，才能在 Linux 上运行 Windows 服务器版本。

如果你是第一次在 Linux 服务器上使用，需要先完成 **Wine** 兼容层的一次性安装。请参考我们的快速 [Wine 兼容层安装指南](dedicated-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先以 `steam` 用户身份登录，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 直接安装服务器。通过 `+@sSteamCmdForcePlatformType windows` 参数，强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Enshrouded-Server' +login anonymous +app_update 2278520 validate +quit
```

下载过程可能需要一些时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到成功提示。

## 配置

到这里，你已经完成了 Enshrouded 服务器的安装。接下来可以通过服务器目录下的配置文件进行更多设置。

你可以通过编辑根目录下的 **enshrouded_server.json** 配置文件来调整所有参数：
```
nano /home/steam/Enshrouded-Server/enshrouded_server.json
```

想了解所有可用的服务器配置选项及其作用，查看我们的 Enshrouded [服务器配置指南](enshrouded-configuration.md)。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，使用下面的命令运行 **enshrouded_server.exe** 可执行文件。记得加上 **xvfb-run** 和 **wine**，通过 Wine 兼容层运行。
```
xvfb-run wine /home/steam/Enshrouded-Server/enshrouded_server.exe
```

你会在命令行看到大量日志输出。如果看到 `[Session] 'HostOnline' (up)!` 这条日志，说明服务器启动成功。你可以通过在游戏的 **查找游戏** 标签页添加服务器地址来直接连接：`[你的IP地址]:15636`。

## 总结

恭喜你，成功在独立服务器上安装并配置了 Enshrouded 服务器！下一步，我们推荐你看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等多种便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！