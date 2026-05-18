---
id: dedicated-linux-cs16
title: "独立服务器：Counter-Strike 1.6 Linux 独立服务器安装指南"
description: "教你如何在 Linux VPS 上搭建 Counter-Strike 1.6 独立服务器，实现流畅游戏体验和便捷服务器管理 → 立即了解"
sidebar_label: "Counter-Strike 1.6"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Counter-Strike 1.6 独立服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也差不多。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里：[GS/TS3 界面](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不确定怎么操作，可以参考我们的[SSH 初始访问指南](dedicated-linux-ssh.md)。如果你是第一次在 Linux 服务器上用 SteamCMD，还需要先完成 SteamCMD 的首次设置。请参考我们的[SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令通过 SteamCMD 直接安装游戏：
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 90 validate +quit
```

下载过程可能需要点时间，尤其是游戏文件较大时。完成后你会看到成功提示。

## 配置服务器

到这一步，你的 Counter-Strike 1.6 服务器已经搭建完成。你可以通过编辑启动配置文件来进一步调整服务器设置。

进入根目录，找到 cfg 文件夹，打开 `server.cfg` 文件，修改服务器参数。
```
nano /home/steam/cs2-ds/game/csgo/cfg/server.cfg
```

## 注册 GSL Token

想让其他玩家加入你的服务器，必须生成并添加游戏服务器登录令牌（GSLT）。这个令牌用来验证你的服务器身份。访问 http://steamcommunity.com/dev/managegameservers ，用游戏 ID 90（对应 Counter-Strike 1.6）生成一个 GSLT。

拿到令牌后，在服务器启动参数里加上 `+sv_setsteamaccount <TOKEN>`。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，执行以下启动命令：
```
./hlds_run -game cstrike +maxplayers X +map <map>
```

启动成功后，命令行会显示日志。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接在服务器列表底部搜索栏输入 `[你的IP]:2456` 来连接。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Counter-Strike 1.6 服务器！接下来推荐看看我们的[Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把游戏服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理和日志访问等超多便利功能！

有任何问题或需要帮助，随时联系我们的支持团队，我们每天在线为你服务！🙂