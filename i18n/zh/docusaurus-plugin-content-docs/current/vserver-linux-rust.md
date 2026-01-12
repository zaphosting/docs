---
id: vserver-linux-rust
title: "VPS：Rust 专用服务器 Linux 安装指南"
description: "教你如何用 SteamCMD 在 Linux VPS 上轻松搭建 Rust 专用服务器，畅享无缝游戏托管体验 → 立即了解"
sidebar_label: Rust
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Linux VPS，想在上面安装 Rust 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装 Rust 专用服务器。示例中我们用的是 Ubuntu，但其他发行版的步骤也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，[点这里看 GS/TS3 界面介绍](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不确定怎么操作，可以参考我们的 [SSH 初始访问指南](vserver-linux-ssh.md)。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令，通过 SteamCMD 直接安装 Rust 服务器到 `/home/steam/Rust-Server` 目录。
```
steamcmd +force_install_dir '/home/steam/Rust-Server' +login anonymous +app_update 258550 validate +quit
```

请耐心等待下载完成，游戏文件较大可能需要点时间。成功后会看到确认信息。

## 配置服务器

到这一步，你的 Rust 服务器已经安装完成。接下来可以通过服务器目录里的配置文件进行更多自定义设置。

进入主目录，创建一个 `.sh` 脚本文件，用来启动服务器并调整各种参数。
```
nano /home/steam/Rust-Server/start_server.sh
```

把下面内容复制进去。这里包含了一些基础且常用的参数。如果想添加更多参数或了解详细说明，推荐去看看 [官方 Rust Wiki](https://wiki.facepunch.com/rust/Creating-a-server#startingtheserver)。
```
#!/bin/bash
/home/steam/Rust-Server/RustDedicated -batchmode -nographics +server.hostname "your_server_name" +server.port 28015 +server.identity "my_server" +server.maxplayers 50 +server.worldsize 1000 +server.saveinterval 300
```

保存文件，按 `CTRL+X`，然后按 `Y`，最后回车确认。接着，为了让这个脚本能直接运行，执行下面命令给它添加执行权限。
```
chmod +x /home/steam/Rust-Server/start_server.sh
```

## 启动并连接服务器

现在可以启动你的服务器了，进入游戏目录，运行启动脚本：
```
/home/steam/Rust-Server/start_server.sh
```

你会在命令行看到启动日志，表示服务器启动成功。首次启动可能会稍微慢一点，因为需要完成初始化。如果一切正常，你的服务器会出现在服务器列表里。你也可以直接用 `[你的IP地址]:28015` 连接。

## 总结

恭喜你，Rust 服务器已经成功安装并配置完成！下一步，强烈推荐看看我们的 [Linux 服务设置指南](vserver-linux-create-gameservice.md)，教你如何把游戏服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理日志等超多实用功能！

如果你还有任何问题或遇到困难，随时联系在线客服，我们每天都在线帮你解决！

<InlineVoucher />