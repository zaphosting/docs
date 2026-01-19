---
id: dedicated-linux-satisfactory
title: "独立服务器：Satisfactory 专用服务器 Linux 安装指南"
description: "开始在你的 Linux 服务器上安装和配置 Satisfactory 专用服务器，实现无缝游戏托管 → 立即了解更多"
sidebar_label: Satisfactory
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独立服务器，想在上面安装 Satisfactory 专用服务器服务吗？你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装该服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在你的独立服务器上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面介绍](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独立服务器。如果你不熟悉操作，可以参考我们的 [SSH 初始访问指南](dedicated-linux-ssh.md)。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 直接安装 Satisfactory 服务器：
```
steamcmd +force_install_dir '/home/steam/Satisfactory-Server' +login anonymous +app_update 1690800 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到确认成功的提示信息。

## 配置服务器

到这里，你已经完成了 Satisfactory 服务器的安装。接下来可以通过服务器目录下的配置文件进行更细致的设置。

你可以编辑位于 Saved 文件夹内的 **Engine.ini** 和 **GameUserSettings.ini** 配置文件，调整所有服务器参数。
```
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/GameUserSettings.ini
nano /home/steam/Satisfactory-Server/FactoryGame/Saved/Config/LinuxServer/Engine.ini
```

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **FactoryServer.sh** 脚本：
```
/home/steam/Satisfactory-Server/FactoryServer.sh
```

启动成功后，你会在命令行看到日志输出。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接通过服务器列表底部的搜索栏，输入 `[你的IP地址]:15777` 来连接服务器。

## 总结

恭喜你，Satisfactory 服务器已经成功安装并配置完成！下一步，我们推荐你查看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等多种便利功能！

如果你有任何问题或遇到困难，随时联系在线客服，我们每天都在这里帮你！