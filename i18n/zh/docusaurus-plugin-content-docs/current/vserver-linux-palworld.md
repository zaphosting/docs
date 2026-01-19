---
id: vserver-linux-palworld
title: "VPS：Palworld 专用服务器 Linux 安装指南"
description: "了解如何高效地在你的 Linux VPS 上安装并运行 Palworld 专用服务器 → 立即了解"
sidebar_label: Palworld
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Palworld 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且与 ZAP-Hosting 控制面板无缝集成！想了解更多，戳这里看我们的 [GS/TS3 界面](vserver-linux-gs-interface.md)。
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

登录后，运行下面的命令通过 SteamCMD 直接安装 Palworld 服务器到 `steam` 用户目录下。
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到确认成功的提示信息。

## 配置服务器

到这里，你已经完成了 Palworld 服务器的安装。接下来可以通过服务器目录下的配置文件进行更细致的设置。

首先，需要复制默认配置文件到保存目录，才能进行编辑：
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

复制完成后，打开新配置文件编辑核心参数：
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

想了解所有可用配置项及其作用，别忘了查看我们的 Palworld [服务器配置指南](palworld-configuration.md)。

## 启动并连接服务器

现在可以启动服务器了。进入主游戏目录，运行启动脚本 **PalServer.sh**：
```
/home/steam/Palworld-Server/PalServer.sh
```

启动后，你会在命令行看到日志输出，包括游戏版本信息，表示启动成功。如果一切正常，你的服务器会出现在服务器列表中。你也可以直接在服务器列表底部的搜索栏输入 `[你的IP地址]:8211` 来连接。

## 总结

恭喜你，Palworld 服务器已经成功安装并配置完成！下一步，建议你看看我们的 [Linux 服务设置指南](vserver-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等多种便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />