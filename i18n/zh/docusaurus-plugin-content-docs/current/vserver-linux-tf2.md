---
id: vserver-linux-tf2
title: "VPS：Team Fortress 2 专用服务器 Linux 安装指南"
description: "快速高效地在你的 Linux VPS 上搭建 Team Fortress 2 专用服务器 → 立即了解更多"
sidebar_label: "Team Fortress 2"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Team Fortress 2 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里：[GS/TS3 界面](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你需要帮助，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的首次设置。请务必先按照我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md) 完成配置，确保 SteamCMD 正常运行后再继续。

## 安装步骤

先以 `steam` 用户身份登录，并进入该用户的根目录，方便管理。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 直接安装 Team Fortress 2 服务器：
```
steamcmd +force_install_dir '/home/steam/tf2-ds' +login anonymous +app_update 232250 validate +quit
```

下载过程可能需要一些时间，尤其是游戏文件较大时，请耐心等待。完成后你会看到成功提示。

## 配置服务器

到这里，你已经完成了 Team Fortress 2 服务器的安装。接下来可以通过编辑启动配置文件来进一步调整服务器设置。

进入根目录，找到 cfg 文件夹，打开 `server.cfg` 文件，修改服务器参数。
```
nano /home/steam/tf-ds/tf2/tf/cfg/server.cfg
```

## 注册 GSL Token

为了让其他玩家能加入你的服务器，你必须生成并添加一个游戏服务器登录令牌（GSLT）。这个令牌用来验证你的服务器身份。访问 http://steamcommunity.com/dev/managegameservers ，使用游戏 ID 232250（Team Fortress 2）创建你的 GSLT。

拿到令牌后，在服务器启动参数中加入 `+sv_setsteamaccount <TOKEN>`。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，执行以下启动命令：
```
./srcds_run -console -game tf -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

启动成功后，命令行会显示日志。首次启动可能会稍微久一点，因为需要完成初始化。你也可以直接在服务器列表底部的搜索栏输入 `[你的IP地址]:2456` 来连接服务器。

## 总结

恭喜你，Team Fortress 2 服务器已经成功安装并配置完成！下一步建议查看我们的 [Linux 服务设置](vserver-linux-create-gameservice.md) 指南，教你如何把新服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理和日志访问等超多便利功能！

如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />