---
id: server-linux-arma3
title: "Arma 3 专用服务器 Linux 安装指南"
description: "了解如何在 Linux 上安装并运行 Arma 3 专用服务器，实现无缝游戏托管和管理 → 立即了解更多"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS/专用服务器，想在上面安装 Arma 3 专用服务器吗？你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的步骤也大同小异。

:::tip
你知道吗？你可以直接在你的 VPS/专用服务器上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，点这里看 [GS/TS3 界面介绍](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的 VPS/专用服务器。如果你不熟悉操作，可以参考我们的 [SSH 初始访问指南](dedicated-linux-ssh.md)。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已完全配置好后再继续。

## 安装

先以 `steam` 用户身份登录，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 直接安装 Arma 3 服务器。这里用 `+@sSteamCmdForcePlatformType windows` 参数强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/arma3-server' +login anonymous +app_update 233780 validate +quit
```

下载过程可能需要一些时间，尤其是游戏文件较大时，请耐心等待。完成后会显示成功提示。

## 配置

到这里，你已经完成了 Arma 3 服务器的安装。接下来可以通过服务器目录下的配置文件进行进一步设置。

所有配置参数都可以通过编辑根目录下的 **server.cfg** 文件来调整。
```
nano /home/steam/arma3-server/server.cfg
```

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行以下命令启动 **arma3server_x64** 可执行文件。

```
/home/steam/arma3-server/arma3server_x64
```

终端会显示大量日志，表示服务器已成功启动。

玩家可以通过 **Arma 3 服务器浏览器**，使用你的服务器 IP 和默认端口 **2302** 直接连接。

## 结语

恭喜你，已经成功在 VPS/专用服务器上安装并配置了 **Arma 3 服务器**！如果有任何问题或疑问，欢迎随时联系在线客服，我们每天都在这里帮你解决！

<InlineVoucher />