---
id: dedicated-linux-cscz
title: "独立服务器：Counter-Strike: Condition Zero Linux 独服安装指南"
description: "了解如何在 Linux VPS 上搭建 Counter-Strike: Condition Zero 独立服务器，实现流畅游戏管理 → 立即了解"
sidebar_label: "Counter-Strike: Condition Zero"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Counter-Strike: Condition Zero 独立服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不熟悉，可以参考我们的 [SSH 初始访问](dedicated-linux-ssh.md) 指南。如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令通过 SteamCMD 直接安装游戏：
```
steamcmd +force_install_dir '/home/steam/cs-ds' +login anonymous +app_update 90 validate +quit
```

下载过程可能需要一点时间，尤其是游戏文件较大的时候。完成后你会看到成功提示。

## 配置服务器

到这里，你的 Counter-Strike: Condition Zero 服务器已经安装完成。接下来可以通过编辑启动配置文件来调整服务器设置。

进入根目录，找到 cfg 文件夹，打开 `server.cfg` 文件，修改服务器参数。
```
nano /home/steam/cs-ds/cstrike/cfg/server.cfg
```

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，执行以下启动命令：
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

启动成功后，命令行会显示日志。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接在服务器列表底部的搜索栏输入 `[你的IP地址]:2456` 来连接服务器。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Counter-Strike: Condition Zero 服务器！下一步，建议看看我们的 [Linux 服务设置](dedicated-linux-create-gameservice.md) 指南，教你如何把游戏服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理和日志访问等多种便利功能。

如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂