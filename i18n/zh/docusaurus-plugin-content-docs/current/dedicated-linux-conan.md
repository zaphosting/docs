---
id: dedicated-linux-conan
title: "独立服务器：Conan Exiles Linux 独立服务器安装指南"
description: "了解如何在 Linux 上搭建 Conan Exiles 独立服务器，实现流畅的游戏托管与管理 → 立即了解"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Linux 独立服务器，想在上面安装 Conan Exiles 独立服务器服务吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在你的独立服务器上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独立服务器。如果你不熟悉操作，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

:::info Wine 兼容层
Conan Exiles 目前没有原生的 Linux 服务器版本，这意味着你需要额外准备一步，才能在 Linux 上运行 Windows 服务器版本。

如果你是第一次在 Linux 服务器上使用，需要先安装一次 **Wine** 兼容层。请参考我们的快速 [Wine 兼容层安装指南](dedicated-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先切换到 `steam` 用户，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 开始安装。这里用 `+@sSteamCmdForcePlatformType windows` 参数强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Conan-Server' +login anonymous +app_update 443030 validate +quit
```

下载过程可能需要一点时间，尤其是游戏文件较大时。完成后你会看到成功提示。

## 配置服务器

到这一步，你的 Conan Exiles 服务器已经安装完成。接下来可以通过服务器目录里的配置文件进行更多设置。

你可以编辑以下路径下的 **WindowsServerEngine.ini** 文件，调整所有配置参数：
```
nano /home/steam/Conan-Server/Engine/Config/Windows/WindowsServerEngine.ini
```

想添加配置项的话，可以直接写入对应参数。举个例子，设置服务器名、密码和管理员密码，可以这样写：
```
[OnlineSubsystem]
ServerName=[你的服务器名]
ServerPassword=[你的密码]

[ServerSettings]
AdminPassword=[你的管理员密码]
```

建议你去看看 [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration)，里面有详细的配置选项列表。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **ConanSandboxServer.exe** 可执行文件。记得用 **xvfb-run** 和 **wine64** 命令通过 Wine 兼容层启动：
```
xvfb-run wine64 /home/steam/Conan-Server/ConanSandboxServer.exe
```

启动后，命令行会显示大量日志，说明服务器正在运行。你可以直接在游戏服务器列表里搜索你的服务器，或者通过 `[你的IP地址]:7777` 直接连接。

## 总结

恭喜你，成功在独立服务器上安装并配置了 Conan Exiles 服务器！下一步，推荐你看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理日志等超多便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！