---
id: vserver-linux-avorion
title: "VPS：Avorion 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux VPS 上安装和配置 Avorion 专用服务器，实现无缝游戏托管和管理 → 立即了解更多"
sidebar_label: Avorion
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Avorion 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也差不多。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不确定怎么操作，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

如果你是第一次在 Linux 服务器上用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令，通过 SteamCMD 直接安装 Avorion 服务器到 `steam` 用户目录下。
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

请耐心等待下载完成，游戏文件较大时可能需要点时间。成功后你会看到确认安装成功的提示。

## 配置服务器

到这一步，你的 Avorion 服务器已经安装完成。你可以通过编辑之前复制的 **startserver.sh** 文件来配置服务器参数。用命令打开：
```
nano /home/steam/Avorion-Server/startserver.sh
```

想调整具体的世界参数和设置，可以编辑每个银河存档里的 **server.ini** 配置文件。它们存放在你的用户根目录（默认是 `steam`）下，操作示例如下：
```
# 查看当前存档
ls /home/steam/.avorion/galaxies

# 编辑存档配置
nano /home/steam/.avorion/galaxies/avorion_galaxy/server.ini
```

## 启动并连接服务器

现在可以启动服务器了。先进入游戏主目录，建议先复制一份示例启动脚本：
```
cp /home/steam/Avorion-Server/server.sh /home/steam/Avorion-Server/startserver.sh
```

你可以根据需要编辑这个启动脚本。准备好后，运行它：
```
/home/steam/Avorion-Server/startserver.sh
```

启动时你会在命令行看到日志输出，表示服务器正在启动。首次启动可能会花点时间，完成后控制台会显示 `Server startup complete.`。这时你就能通过游戏内的服务器浏览器，输入你的服务器 IP 和端口（默认是 27000）直接连接了。

## 总结

恭喜你，Avorion 服务器已经成功安装并配置完成！下一步，我们推荐你看看我们的 [Linux 服务设置指南](vserver-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务。这样可以实现开机自动启动、自动更新、方便管理和查看日志等超多实用功能！

如果你还有任何问题或遇到麻烦，随时联系在线客服，我们每天都在线帮你解决！

<InlineVoucher />