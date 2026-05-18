---
id: dedicated-linux-avorion
title: "独服教程：Avorion 专用服务器 Linux 安装指南"
description: "教你如何在 Linux VPS 上安装并配置 Avorion 专用服务器，实现无缝游戏托管 → 立即了解"
sidebar_label: Avorion
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Linux VPS，想在上面安装 Avorion 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版操作也差不多。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不太熟悉，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 教程。

如果你是第一次在 Linux 服务器上用 SteamCMD，还得先完成 SteamCMD 的首次设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 配置完成后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入它的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令通过 SteamCMD 直接安装 Avorion 服务器：
```
steamcmd +force_install_dir '/home/steam/Avorion-Server' +login anonymous +app_update 565060 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时。完成后你会看到成功提示。

## 配置服务器

到这一步，你已经完成了 Avorion 服务器的安装。接下来可以通过编辑之前复制的 **startserver.sh** 文件来配置服务器参数。用命令打开：
```
nano /home/steam/Avorion-Server/startserver.sh
```

你还可以通过修改每个星系存档里的 **server.ini** 文件来调整世界相关的参数。存档文件夹在你的用户根目录（一般是 `steam`）下，操作命令如下：
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

你可以根据需要编辑这个启动脚本。准备好后，用下面命令启动服务器：
```
/home/steam/Avorion-Server/startserver.sh
```

启动时你会在命令行看到日志，表示服务器正在启动。首次启动可能会稍微久一点，等到控制台显示 `Server startup complete.` 就说明服务器启动成功了。之后你就能通过游戏内的服务器浏览器，输入你的服务器 IP 和端口（默认 27000）直接连接了。

## 总结

恭喜你，Avorion 服务器已经成功安装并配置完成！下一步推荐看看我们的 [Linux 服务设置](dedicated-linux-create-gameservice.md) 教程，教你如何把游戏服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理和日志访问等超多便利功能！

如果你还有任何问题或遇到困难，随时联系在线客服，我们每天都在线帮你解决！