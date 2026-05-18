---
id: dedicated-linux-foundry
title: "独服教程：Foundry 专用服务器 Linux 安装指南"
description: "教你如何在 Linux 独服上安装 Foundry 专用服务器，实现无缝游戏托管和管理 → 立即了解"
sidebar_label: Foundry
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独服，想在上面安装 Foundry 专用服务器服务？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也差不多。

:::tip
你知道吗？你可以直接在独服上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上用 SteamCMD，还得先完成 SteamCMD 的首次设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 完全配置好后再继续。

:::info Wine 兼容层
Foundry 目前没有原生 Linux 服务器版本，所以要在 Linux 上跑 Windows 版本的服务器，需要额外准备。

如果你是第一次在 Linux 服务器上用 Foundry，必须先安装一次 **Wine** 兼容层。请参考我们的快速 [Wine 兼容层安装指南](dedicated-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先切换到 `steam` 用户，并进入它的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令开始安装。这里用 SteamCMD 直接安装到 `steam` 用户目录，`+@sSteamCmdForcePlatformType windows` 参数确保安装的是 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Foundry-Server' +login anonymous +app_update 2915550 validate +quit
```

下载过程可能会花点时间，尤其是大体积游戏。完成后会显示成功提示。

## 配置

到这一步，你的 Foundry 服务器已经安装好了。接下来可以通过服务器目录里的配置文件进一步调整设置。

所有配置参数都在根目录下的 **app.cfg** 文件里，打开它进行编辑：
```
nano /home/steam/Foundry-Server/app.cfg
```

想了解所有配置项及其作用，去看看我们的 Foundry [服务器配置指南](foundry-configuration.md)。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **FoundryDedicatedServerLauncher.exe** 可执行文件。记得用 **xvfb-run** 和 **wine** 命令通过 Wine 兼容层启动：
```
xvfb-run wine /home/steam/Foundry-Server/FoundryDedicatedServer.exe
```

启动成功后，命令行会显示日志。如果一切正常，你的服务器会出现在服务器列表里。你也可以直接用服务器列表底部的搜索栏，输入 `[你的IP地址]:3724` 直接连接。

## 总结

恭喜你，Foundry 服务器已经成功安装并配置完成！下一步推荐看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等超多便利功能！

如果还有任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！