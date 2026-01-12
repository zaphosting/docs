---
id: vserver-linux-foundry
title: "VPS：Foundry 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux VPS 上安装 Foundry 专用服务器，实现无缝游戏托管和管理 → 立即了解更多"
sidebar_label: Foundry
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Foundry 专用服务器服务吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 接口**，只需几步就能设置游戏服务器服务，并且与 ZAP-Hosting 控制面板实现直接集成！想了解更多，戳这里看 [GS/TS3 接口](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不熟悉，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要完成 SteamCMD 的首次设置。请先参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

:::info Wine 兼容层
Foundry 目前没有原生 Linux 服务器版本，这意味着你需要额外准备一步，才能在 Linux 上运行 Windows 版本的服务器。

如果你是第一次在 Linux 服务器上使用，需要完成一次性的 **Wine** 兼容层安装。请先参考我们的快速 [Wine 兼容层安装指南](vserver-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先以 `steam` 用户身份登录，进入 `home/steam` 目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 开始安装。这里用到了 `+@sSteamCmdForcePlatformType windows` 参数，强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到成功提示。

## 配置服务器

到这一步，你的 Foundry 服务器已经安装完成。你可以通过服务器目录下的配置文件进一步调整服务器设置。

所有配置参数都可以在根目录下的 **app.cfg** 文件中修改：
```
nano /home/steam/Foundry-Server/app.cfg
```

想了解所有可用配置项及其作用，别忘了查看我们的 Foundry [服务器配置指南](foundry-configuration.md)。

## 启动并连接服务器

现在开始启动服务器吧！进入游戏主目录，运行 **FoundryDedicatedServerLauncher.exe** 可执行文件。记得用 **xvfb-run** 和 **wine** 命令通过 Wine 兼容层启动：
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

启动成功后，命令行会显示日志。如果一切正常，你的服务器会出现在服务器列表里。你也可以直接用服务器列表底部的搜索栏，输入 `[你的IP地址]:3724` 直接连接。

## 总结

恭喜你，Foundry 服务器已经成功安装并配置完成！下一步，我们推荐你看看我们的 [Linux 服务设置指南](vserver-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等超多便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />