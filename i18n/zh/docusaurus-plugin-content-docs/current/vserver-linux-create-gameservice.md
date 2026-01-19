---
id: vserver-linux-create-gameservice
title: "VPS：将你的专用游戏服务器设置为 Linux 服务"
description: "了解如何为专用游戏服务器创建和管理 Linux 服务，实现自动启动和轻松维护 → 立即了解"
sidebar_label: 设置 Linux 服务
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

服务是 Linux 系统的重要组成部分，指的是在后台运行的进程或应用程序，可以是预定义任务或基于事件的任务。它带来了多种好处，包括开机自动启动服务器、自动更新服务器、方便管理和访问日志等等！本指南将带你了解如何为你的专用游戏服务器创建一个服务。

<InlineVoucher />

## 准备工作

首先，通过 SSH 连接到你的 VPS。如果你需要帮助，可以参考我们的[SSH 初始访问](vserver-linux-ssh.md)指南。

你还应该按照本节中的某个专用游戏服务器指南，在你的 Linux 系统上安装并设置游戏服务器。本指南以[Palworld 专用游戏服务器](vserver-linux-palworld.md)为例，但操作步骤同样适用于我们所有的指南。

## 创建服务

首先为你已设置的专用游戏服务器创建一个新的服务文件。将 `[your_game]` 替换为你选择的名称。我们建议使用游戏名称来保持整洁有序，这里我们用 `palworld.service` 作为示例。
```
sudo nano /etc/systemd/system/[your_game].service
```

## 配置服务

打开 nano 编辑器后，复制以下核心文件内容，这是一个可复用的服务文件模板。我们提供了两个版本，一个适用于使用 SteamCMD 的游戏指南，另一个适用于非 SteamCMD 游戏指南。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="steamcmd" label="SteamCMD 游戏" default>

```
[Unit]
Description=[your_server] 服务器
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/[your_server_folder]
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/[your_server_folder]' +login anonymous +app_update [your_game_steamid] +quit
ExecStart=/home/steam/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>

<TabItem value="regular" label="普通游戏">

```
[Unit]
Description=[your_server] 服务器
Wants=network-online.target
After=network-online.target

[Service]
User=gameservers
Group=gameservers
WorkingDirectory=/home/gameservers/[your_server_folder]
ExecStart=/home/gameservers/[your_server_folder]/[your_path_to_start_file]
Restart=always

[Install]
WantedBy=multi-user.target
```

</TabItem>
</Tabs>

我们来拆解一下文件内容，帮你更好理解：
- `Description`：可以写任何内容，方便你快速识别该服务的用途。
- `User`：按照我们的指南，你应该为 SteamCMD 游戏设置了一个单独的 `steam` 用户，非 SteamCMD 游戏则是 `gameservers` 用户。如果没有，设置为运行该服务的用户即可。
- `WorkingDirectory`：这是服务所需所有文件所在的主目录路径。
- `ExecStartPre`（仅 SteamCMD）：这里基本上是之前的 SteamCMD 安装命令，每次服务器重启时都会执行，确保服务器保持最新。你可以从对应的专用游戏服务器指南复制，或者手动替换为游戏对应的值。
- `ExecStart`：定义服务启动时执行的预定义任务。你同样可以从对应的专用游戏服务器指南复制路径，或者手动替换为启动文件的路径。

:::important Wine 兼容层
对于需要 **Wine** 兼容层才能运行的游戏，你需要在 `ExecStart` 参数中加入 **xvfb-run** 和 **wine** 命令。以 V-Rising 为例：
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

如果需要强制平台版本，请确保你的 `ExecStartPre` SteamCMD 安装命令中也包含 `+@sSteamCmdForcePlatformType` 参数。
:::

当你根据自己的专用游戏服务器调整好所有参数后，按 `CTRL + X`，然后按 `Y` 确认保存，最后按 `ENTER` 退出 nano。

以 Palworld 为例，文件内容如下：
```
[Unit]
Description=Palworld 服务器
Wants=network-online.target
After=network-online.target

[Service]
User=steam
Group=steam
WorkingDirectory=/home/steam/Palworld-Server
ExecStartPre=/usr/games/steamcmd +force_install_dir '/home/steam/Palworld-Server' +login anonymous +app_update 2394010 +quit
ExecStart=/home/steam/Palworld-Server/PalServer.sh
Restart=always

[Install]
WantedBy=multi-user.target
```

## 管理服务

服务文件创建完成后，需要启用它。以 `palworld.service` 为例，`[your_service]` 替换为 `palworld`。
```
sudo systemctl enable [your_service]
```

:::tip
如果你对服务文件做了任何修改，记得运行 `systemctl daemon-reload`，确保更改生效。
:::

现在你可以用 `systemctl start` 命令启动服务器，同样也可以用类似命令轻松停止或重启服务器。
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
查看服务详情可以用 `systemctl status` 命令。如果需要调试日志，可以用 `journalctl -u [your_service].service` 查看服务的最新日志。
:::

最后，如果你想禁止服务开机自启，只需禁用它：
```
sudo systemctl disable [your_service]
```

## 总结

你已经成功为你的专用游戏服务器设置了一个 Linux 服务。服务器现在会在系统启动时自动启动。

你也了解了服务文件的内容以及如何用各种命令管理服务。

<InlineVoucher />