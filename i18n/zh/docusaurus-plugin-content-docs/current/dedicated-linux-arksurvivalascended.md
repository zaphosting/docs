---
id: dedicated-linux-arksurvivalascended
title: "独服教程：ARK Survival Ascended Linux 独服安装指南"
description: "了解如何在 Linux 上搭建 ARK: Survival Ascended 独服，实现流畅游戏体验和便捷服务器管理 → 立即学习"
sidebar_label: ARK Survival Ascended
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Linux 独服，想在上面安装 ARK: Survival Ascended 独服服务？来对地方了！本指南将一步步教你如何通过 SteamCMD 在 Linux 服务器上安装这款游戏服务器。示例中我们用的是 Ubuntu，但其他发行版操作也大同小异。

:::tip
你知道吗？你可以直接在独服上安装我们的 **ZAP GS/TS3 界面**，只需几步就能设置游戏服务器服务，并且完美集成到你的 ZAP-Hosting 控制面板！想了解更多，戳这里看 [GS/TS3 界面介绍](dedicated-linux-gs-interface.md)。
:::

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉操作，可以参考我们的 [SSH 初始访问指南](dedicated-linux-ssh.md)。

如果你是第一次在 Linux 服务器上用 SteamCMD，还需要先完成 SteamCMD 的初始设置。请参考我们的 [SteamCMD Linux 安装指南](dedicated-linux-steamcmd.md)，确保 SteamCMD 配置完成后再继续。

:::info Wine 兼容层
ARK: Survival Ascended 目前没有原生 Linux 服务器版本，所以要在 Linux 上运行 Windows 服务器版本，需要额外准备。

首次使用时，你得先安装一次 **Wine** 兼容层。请参考我们的快速 [Wine 兼容层安装指南](dedicated-linux-wine.md) 来完成这一步。
:::

## 安装步骤

先切换到 `steam` 用户，并进入该用户的主目录，方便管理文件。
```
sudo -u steam -s
cd ~
```

登录后，运行下面的命令通过 SteamCMD 安装服务器：
```
steamcmd +force_install_dir '/home/steam/ARK-SA-Server' +login anonymous +app_update 2430930 validate +quit
```

下载过程可能会花点时间，尤其是大体积游戏。完成后会显示成功提示。

## 配置服务器

到这一步，你的 ARK: Survival Ascended 服务器已经安装完成。接下来可以通过服务器目录里的配置文件进一步调整设置。

所有配置参数都在 Saved 文件夹下的 **GameUserSettings.ini** 文件里，打开它进行编辑：
```
nano /home/steam/ARK-SA-Server/ShooterGame/Saved/Config/WindowsServer/GameUserSettings.ini
```

想了解所有配置项及其作用？看我们的 [ARK: Survival Ascended 服务器配置指南](ark-configuration.md)。

## 启动并连接服务器

现在开始启动服务器吧！进入游戏主目录，运行 **ArkAscendedServer.exe**，记得用 **xvfb-run** 和 **wine** 命令通过 Wine 兼容层启动：
```
xvfb-run wine /home/steam/ARK-SA-Server/ShooterGame/Binaries/Win64/ArkAscendedServer.exe TheIsland_WP?listen
```

:::info
遗憾的是，Linux 不支持带有 Battleye 反作弊的服务器版本，因为反作弊系统完全不兼容。
:::

启动成功后，命令行会显示日志。首次启动可能会稍慢，因为需要完成初始化。你也可以直接在服务器列表底部搜索栏输入 `[你的IP]:7777` 来连接服务器。

## 总结

恭喜你，ARK: Survival Ascended 独服已经成功安装并配置完成！下一步，推荐看看我们的 [Linux 服务设置指南](dedicated-linux-create-gameservice.md)，教你如何把游戏服务器设置成系统服务，实现开机自动启动、自动更新、轻松管理和日志访问等超多便利功能！

如果遇到任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！