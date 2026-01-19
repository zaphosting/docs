---
id: dedicated-linux-palworld
title: "独服教程：Palworld 专用服务器 Linux 安装指南"
description: "了解如何在 Linux 上设置和配置 Palworld 专用服务器，实现无缝游戏管理 → 立即了解"
sidebar_label: Palworld
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独服，想在上面安装 Palworld 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版操作也大同小异。

:::tip
你知道吗？你可以直接在独服上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面介绍](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉操作，可以参考我们的 [SSH 初始访问指南](dedicated-linux-ssh.md)。

如果你是第一次在 Linux 服务器上用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 配置完成后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令，通过 SteamCMD 直接安装 Palworld 服务器到 `steam` 用户目录。
```
steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。完成后会显示成功提示。

## 配置服务器

到这一步，你的 Palworld 服务器已经安装完成。接下来可以通过配置文件进一步调整服务器设置。

先复制一份默认配置文件到保存目录，才能进行编辑：
```
cp /home/steam/Palworld-Server/DefaultPalWorldSettings.ini /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

复制完成后，打开新配置文件进行编辑：
```
nano /home/steam/Palworld-Server/Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

想了解所有可用配置项及其作用，别忘了查看我们的 Palworld [服务器配置指南](palworld-configuration.md)。

## 启动并连接服务器

现在可以启动服务器了，进入游戏主目录，运行启动脚本：
```
/home/steam/Palworld-Server/PalServer.sh
```

启动后，命令行会显示日志，包括游戏版本信息，表示启动成功。如果一切正常，你的服务器会出现在服务器列表里。你也可以直接用服务器列表底部的搜索框，输入 `[你的IP地址]:8211` 来连接。

## 总结

恭喜你，Palworld 服务器已经成功安装并配置完成！下一步，强烈推荐看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把游戏服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理日志等超多实用功能！

如果遇到任何问题，随时联系在线客服，我们每天都在线帮你解决！