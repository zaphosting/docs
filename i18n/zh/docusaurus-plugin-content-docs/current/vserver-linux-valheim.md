---
id: vserver-linux-valheim
title: "VPS：Valheim 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux VPS 上搭建 Valheim 专用服务器，实现流畅游戏体验和便捷服务器管理 → 立即了解"
sidebar_label: Valheim
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Valheim 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装 Valheim 服务器。示例中我们用的是 Ubuntu，但其他发行版的步骤也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不熟悉操作，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 已经配置完成后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令，通过 SteamCMD 直接安装 Valheim 服务器到 `/home/steam/Valheim-Server` 目录。
```
steamcmd +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

下载过程可能需要一点时间，尤其是游戏文件较大时。完成后你会看到成功提示。

## 配置服务器

到这一步，你的 Valheim 服务器已经安装完成。你可以通过编辑启动脚本来进一步配置服务器。

进入主目录，打开 `.sh` 启动文件，修改启动参数。
```
nano /home/steam/Valheim-Server/start_server.sh
```

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行启动脚本：
```
/home/steam/Valheim-Server/start_server.sh
```

启动成功后，命令行会显示日志。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接在服务器列表底部的搜索栏输入 `[你的IP地址]:2456` 来连接服务器。

:::info
如果连接时控制台出现 `PlayFab` 错误，可能是 Linux 版本的跨平台支持有问题。你可以通过编辑启动脚本 `nano /home/steam/Valheim-Server/start_server.sh`，删除 `-crossplay` 参数来关闭跨平台支持。

如果你必须使用跨平台功能，建议安装 Windows 版本服务器并用 **Wine** 兼容层运行。参考我们的快速指南 [Wine 兼容层安装](vserver-linux-wine.md) 来配置。配置完成后，通过 SteamCMD 安装 Windows 版本：
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/Valheim-Server' +login anonymous +app_update 896660 validate +quit
```

安装完成后，用下面命令通过 Wine 启动 Windows 版本服务器：
```
xvfb-run wine /home/steam/Valheim-Server/StartServer.bat
```
:::

## 总结

恭喜你，已经成功在 VPS 上安装并配置了 Valheim 服务器！下一步，我们推荐你看看我们的 [Linux 服务设置](vserver-linux-create-gameservice.md) 指南，教你如何把游戏服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理日志等超多便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />