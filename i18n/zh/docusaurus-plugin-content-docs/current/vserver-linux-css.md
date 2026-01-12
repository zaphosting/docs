---
id: vserver-linux-css
title: "VPS：Counter-Strike: Source 专用服务器 Linux 安装指南"
description: "快速高效地在你的 Linux VPS 上搭建 Counter-Strike: Source 专用服务器 → 立即了解"
sidebar_label: "Counter-Strike: Source"
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 Counter-Strike: Source 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这个服务。示例中我们用的是 Ubuntu，但其他发行版的流程也差不多。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不确定怎么操作，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。如果你是第一次在 Linux 服务器上用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请务必先按照我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md) 完成配置，确保 SteamCMD 正常运行后再继续。

## 安装步骤

先切换到 `steam` 用户，并进入该用户的根目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令开始安装，通过 SteamCMD 直接安装到 `steam` 用户目录下：
```
steamcmd +force_install_dir '/home/steam/cs2-ds' +login anonymous +app_update 232330 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，你会看到确认成功的提示。

## 配置服务器

到这里，你的 Counter-Strike: Source 服务器已经搭建完成。接下来可以通过编辑启动配置文件来调整服务器设置。

进入根目录，找到 `cfg` 文件夹，打开 `server.cfg` 文件，里面可以修改各种服务器参数。
```
nano /home/steam/css-ds/cstrike/cfg/server.cfg
```

## 注册 GSL Token

为了让其他玩家能加入你的服务器，你需要生成并添加一个游戏服务器登录令牌（GSLT）。这个令牌用来验证你的服务器身份。访问 http://steamcommunity.com/dev/managegameservers ，用游戏ID 232330（对应 Counter-Strike: Source）创建一个令牌。

拿到令牌后，在服务器启动参数里加上 `+sv_setsteamaccount <TOKEN>`。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，执行下面的启动命令：
```
./srcds_run -console -game cstrike -secure +maxplayers 22 +map de_dust +sv_setsteamaccount XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

启动成功后，命令行会显示日志。首次启动可能会稍微慢一点，因为需要初始化所有内容。你也可以直接在服务器列表底部的搜索栏输入 `[你的IP地址]:2456` 来连接服务器。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Counter-Strike: Source 服务器！下一步，强烈推荐看看我们的 [Linux 服务设置](vserver-linux-create-gameservice.md) 指南，教你如何把新服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理和日志访问等超多便利功能！

如果有任何问题或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />