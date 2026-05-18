---
id: dedicated-linux-rust
title: "独服教程：Rust 专用服务器 Linux 安装指南"
description: "学习如何在 Linux 上搭建 Rust 专用服务器，高效托管游戏并优化服务器性能 → 立即了解"
sidebar_label: Rust
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Linux 独服，想在上面安装 Rust 专用服务器吗？来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装 Rust 专用服务器。示例中我们用的是 Ubuntu，但其他发行版操作也大同小异。

:::tip
你知道吗？你可以直接在独服上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面介绍](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉，可以参考我们的 [SSH 初始访问指南](dedicated-linux-ssh.md)。

如果你是第一次在 Linux 服务器上用 SteamCMD，还得先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 配置完成后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，执行下面的命令通过 SteamCMD 安装 Rust 服务器：
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

下载可能需要点时间，尤其是游戏文件较大时。完成后会显示成功提示。

## 配置服务器

到这一步，Rust 服务器已经安装好了。你可以通过服务器目录里的配置文件进一步调整服务器设置。

进入根目录，创建一个 `.sh` 脚本文件，用来启动服务器并设置参数：
```
nano /home/steam/Rust-Server/start_server.sh
```

把下面内容复制进去。这里包含了一些基础且常用的参数。如果想添加更多参数或了解详细说明，推荐去看看 [Rust 官方 Wiki](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver)。
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

保存文件，按 `CTRL+X`，然后按 `Y`，最后回车确认。接着，为了让脚本能直接运行，执行：
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## 启动并连接服务器

现在可以启动服务器了，进入游戏主目录，运行启动脚本：
```
/home/steam/Rust-Server/start_server.sh
```

命令行会显示启动日志，表示服务器启动成功。首次启动可能会稍微慢点，因为要初始化配置。启动成功后，你的服务器会出现在服务器列表里，或者你也可以直接用 `[你的IP]:28015` 连接。

## 总结

恭喜你，Rust 服务器已经成功安装并配置完成！接下来，强烈建议你看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把游戏服务器设置成系统服务。这样可以实现开机自动启动、自动更新、轻松管理和查看日志等超多便利功能！

如果你还有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！