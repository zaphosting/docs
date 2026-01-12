---
id: dedicated-linux-vrising
title: "独立服务器：V-Rising 独立服务器 Linux 安装指南"
description: "了解如何在 Linux 上搭建 V-Rising 独立服务器，实现无缝游戏托管和管理 → 立即了解更多"
sidebar_label: V-Rising
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独立服务器，想在上面安装 V-Rising 独立服务器服务吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的操作流程也大同小异。

:::tip
你知道吗？你可以直接在你的独立服务器上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独立服务器。如果你不熟悉操作，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

:::info Wine 兼容层
V-Rising 目前没有原生的 Linux 服务器版本，这意味着你需要额外准备一个步骤来让 Windows 服务器版本能在 Linux 上运行。

如果你是第一次在 Linux 服务器上使用，需要先安装一次 **Wine** 兼容层。请参考我们的快速 [Wine 兼容层安装指南](dedicated-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先切换到 `steam` 用户，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 直接安装游戏服务器。这里用 `+@sSteamCmdForcePlatformType windows` 参数强制安装 Windows 版本的二进制文件。
```
steamcmd +@sSteamCmdForcePlatformType windows +force_install_dir '/home/steam/V-Rising-Server' +login anonymous +app_update 1829350 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到成功提示。

## 配置服务器

到这一步，你已经完成了 V-Rising 服务器的安装。接下来可以通过编辑启动文件来进一步配置服务器。

你可以通过编辑 **ServerGameSettings.json** 和 **ServerHostSettings.json** 配置文件来调整所有服务器参数，这两个文件都在 Settings 文件夹里。
```
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerGameSettings.json
nano /home/steam/V-Rising-Server/VRisingServer_Data/StreamingAssets/Settings/ServerHostSettings.json
```

想了解所有可用的服务器配置选项及其作用，别忘了看看我们的 V-Rising [服务器配置指南](vrising-configuration.md)。

## 启动并连接服务器

现在是时候启动你的服务器了。进入游戏主目录，我们建议先复制一份示例启动脚本。
```
cp /home/steam/V-Rising-Server/start_server_example.bat /home/steam/V-Rising-Server/start_server.bat
```

你可以根据需要编辑这个文件。准备好后，用下面的命令运行新的 **start_server.bat** 启动脚本，别忘了加上 **xvfb-run** 和 **wine**，通过 Wine 兼容层启动。
```
xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

启动成功后，你会在命令行看到日志输出。首次启动可能会稍微久一点，因为需要完成各种初始化。你也可以直接在服务器列表的底部搜索栏输入 `[你的IP地址]:8211` 来连接服务器。

## 总结

恭喜你，成功在独立服务器上安装并配置了 V-Rising 服务器！下一步，我们推荐你看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和日志访问等多种便利功能！

如果你有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！