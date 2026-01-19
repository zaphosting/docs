---
id: vserver-linux-conan
title: "VPS：Conan Exiles 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux VPS 上使用 SteamCMD 和 Wine 兼容层安装并运行 Conan Exiles 专用服务器 → 立即了解更多"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Linux VPS，想在上面安装 Conan Exiles 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这项服务。示例中我们用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且能直接集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不熟悉，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的首次设置。请参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 完全配置好后再继续。

:::info Wine 兼容层
Conan Exiles 目前没有原生 Linux 服务器版本，所以要在 Linux 上运行 Windows 服务器版本，需要额外准备。

如果你是第一次在 Linux 服务器上使用 Wine，需要先完成一次性安装。请参考我们的快速 [Wine 兼容层安装指南](vserver-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录，方便管理。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 开始安装。这里用 `+@sSteamCmdForcePlatformType windows` 参数强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

下载过程可能会比较久，耐心等待。完成后会显示成功提示。

## 配置服务器

到这里，你已经完成了 Conan Exiles 服务器的安装。接下来可以通过服务器目录里的配置文件进行更多设置。

所有配置参数都可以通过编辑以下路径下的 **WindowsServerEngine.ini** 文件来调整：
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

你可以添加配置项，比如设置服务器名、密码和管理员密码，示例如下：
```
[OnlineSubsystem]
ServerName=[你的服务器名]
ServerPassword=[你的密码]

[ServerSettings]
AdminPassword=[你的管理员密码]
```

建议你浏览 [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration) 获取完整的配置选项列表。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **ConanSandboxServer.exe**，记得用 **xvfb-run** 和 **wine64** 命令通过 Wine 兼容层启动：
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

启动后，命令行会显示大量日志，表示服务器正在运行。你可以通过服务器列表搜索连接，或者直接用 `[你的IP地址]:7777` 直连。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Conan Exiles 服务器！下一步，推荐看看我们的 [Linux 服务设置指南](vserver-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理和日志访问等超多便利功能！

如果有任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />