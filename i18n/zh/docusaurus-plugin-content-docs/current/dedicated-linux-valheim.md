---
id: dedicated-linux-valheim
title: "专用服务器：Valheim 专用服务器 Linux 安装指南"
description: "了解如何在 Linux 上搭建 Valheim 专用服务器，高效托管游戏并优化服务器性能 → 立即了解"
sidebar_label: Valheim
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 专用服务器，想在上面安装 Valheim 专用服务器服务吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在你的专用服务器上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的专用服务器。如果你不熟悉操作，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，执行下面的命令，通过 SteamCMD 直接安装 Valheim 服务器：
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到确认成功的提示信息。

## 配置服务器

到这一步，你已经完成了 Valheim 服务器的基础安装。接下来可以通过编辑启动脚本来进一步配置服务器。

进入根目录，打开 `.sh` 启动文件，修改你需要的参数：
```
nano /home/steam/Valheim-Server/start_server.sh
```

## 启动并连接服务器

现在可以启动服务器了，进入游戏主目录，运行启动脚本：
```
/home/steam/Valheim-Server/start_server.sh
```

启动后，你会在命令行看到日志输出，表示服务器启动成功。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接通过服务器列表底部的搜索栏，输入 `[你的IP地址]:2456` 来连接服务器。

:::info
如果连接时遇到控制台出现 `PlayFab` 错误，可能需要关闭跨平台支持来解决，这是 Linux 版本当前的已知问题。操作方法是运行 `nano /home/steam/Valheim-Server/start_server.sh`，删除启动参数中的 `-crossplay` 标志。

如果你必须使用跨平台功能，另一种方案是安装 Windows 版本服务器，并通过 **Wine** 兼容层运行。请参考我们的快速指南 [Wine 兼容层安装](dedicated-linux-wine.md) 来完成设置。准备好后，可以用下面命令通过 SteamCMD 安装 Windows 版本 Valheim 服务器：
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

安装完成后，使用以下命令通过 Wine 启动 Windows 版本服务器：
```
xvfb-run wine /home/steam/Valheim-Server/StartServer.bat
```
:::

## 总结

恭喜你，已经成功在专用服务器上安装并配置了 Valheim 服务器！下一步，我们推荐你看看我们的 [Linux 服务设置](dedicated-linux-create-gameservice.md) 指南，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等多种便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线，随时帮你解决！