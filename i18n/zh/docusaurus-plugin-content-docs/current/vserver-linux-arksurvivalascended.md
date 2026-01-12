---
id: vserver-linux-arksurvivalascended
title: "VPS：ARK Survival Ascended 专用服务器 Linux 安装指南"
description: "了解如何在你的 Linux VPS 上安装 ARK: Survival Ascended 专用服务器，实现无缝游戏管理 → 立即了解详情"
sidebar_label: ARK Survival Ascended
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux VPS，想在上面安装 ARK: Survival Ascended 专用服务器吗？那你来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这项服务。示例中我们使用的是 Ubuntu，但其他发行版的流程也大同小异。

:::tip
你知道吗？你可以直接在 VPS 上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面介绍](vserver-linux-gs-interface.md)。
:::

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你不确定怎么操作，可以参考我们的 [SSH 初始访问指南](vserver-linux-ssh.md)。

如果你是第一次在 Linux 服务器上使用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](vserver-linux-steamcmd.md)，确保 SteamCMD 已经完全配置好后再继续。

:::info Wine 兼容层
目前 ARK: Survival Ascended 没有原生 Linux 服务器版本，这意味着你需要额外准备一步，才能在 Linux 上运行 Windows 服务器版本。

如果你是第一次在 Linux 服务器上使用，需要先安装一次 **Wine** 兼容层。请参考我们的快速 [Wine 兼容层安装指南](vserver-linux-wine.md) 来完成这一步。
:::

## 安装

先以 `steam` 用户身份登录，并进入 `home/steam` 目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，使用下面的命令通过 SteamCMD 直接安装服务器：
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

下载过程可能会花点时间，尤其是游戏文件较大时，请耐心等待。安装成功后，会看到成功提示。

## 配置

到这里，你的 ARK: Survival Ascended 服务器已经安装完成。你可以通过服务器目录下的配置文件进一步调整服务器设置。

所有配置参数都可以通过编辑位于 Saved 文件夹内的 **GameUserSettings.ini** 文件来修改。

```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

想了解所有可用配置项及其作用，别忘了查看我们的 [ARK: Survival Ascended 服务器配置指南](ark-configuration.md)。

## 启动并连接服务器

现在可以启动服务器了。进入游戏主目录，运行 **ArkAscendedServer.exe** 可执行文件，记得用 **xvfb-run** 和 **wine** 命令通过 Wine 兼容层启动：
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
遗憾的是，由于兼容性问题，Linux 上无法运行带有 Battleye 反作弊的服务器版本，因为反作弊系统完全不支持 Linux。
:::

启动成功后，你会在命令行看到日志输出。首次启动可能会稍微慢一点，因为需要完成初始化。你也可以直接通过服务器列表底部的搜索栏，输入 `[你的IP地址]:7777` 来连接服务器。

## 总结

恭喜你，已经成功在 VPS 上安装并配置好了 ARK: Survival Ascended 服务器！下一步，我们建议你看看我们的 [Linux 服务设置指南](vserver-linux-create-gameservice.md)，教你如何把新服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理日志等多种便利功能。

如果你有任何问题或遇到困难，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />