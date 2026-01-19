---
id: dedicated-linux-create-gameservice
title: "独服专用：将你的专用游戏服务器设置为 Linux 服务"
description: "了解如何在 Linux 上设置和管理专用游戏服务器服务，实现自动化启动和轻松控制 → 立即了解"
sidebar_label: 设置 Linux 服务
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

服务是 Linux 系统的核心组成部分，指的是在后台运行的进程或应用程序，可以是预定义任务，也可以是基于事件触发的任务。它带来了很多好处，比如开机自动启动服务器、自动更新服务器、方便管理和查看日志等等！本指南将带你一步步创建专用游戏服务器的服务。

## 准备工作

首先，通过 SSH 连接到你的独服。如果你不熟悉操作，可以参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南。

你还需要按照本节中的某个专用游戏服务器指南，在你的 Linux 系统上安装并配置游戏服务器。本指南以 [Palworld 专用游戏服务器](dedicated-linux-palworld.md) 为例，但操作步骤同样适用于我们所有的指南。

## 创建服务

先为你搭建好的专用游戏服务器创建一个新的服务文件。将 `[your_game]` 替换成你想用的名字。建议用游戏名来命名，方便管理，这里我们用 `palworld.service` 举例：
```
sudo nano /etc/systemd/system/[your_game].service
```

## 配置服务

打开 nano 编辑器后，复制下面的核心文件内容，这是一个可复用的服务模板。我们提供了两个版本，一个适用于使用 SteamCMD 的游戏，另一个适用于非 SteamCMD 游戏。

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

来拆解一下文件内容，帮你更好理解：
- `Description`：随便写，方便你快速识别这个服务的用途。
- `User`：按照我们的指南，你应该已经为 SteamCMD 游戏创建了单独的 `steam` 用户，非 SteamCMD 游戏则是 `gameservers` 用户。如果没有，填你想用来运行服务的用户。
- `WorkingDirectory`：指向服务所需的主目录路径。
- `ExecStartPre`（仅 SteamCMD）：这里写的是之前 SteamCMD 的安装命令，每次服务器重启时都会执行，确保游戏是最新版本。你可以从对应的专用游戏服务器指南复制，或者手动替换成游戏对应的参数。
- `ExecStart`：定义服务启动时执行的任务。路径同样可以从对应指南复制，或者手动替换成启动文件的路径。
:::important Wine 兼容层
如果你的游戏需要用到 **Wine** 兼容层运行，`ExecStart` 参数里需要加上 **xvfb-run** 和 **wine** 命令。比如 V-Rising 的示例：
```
/usr/bin/xvfb-run wine /home/steam/V-Rising-Server/start_server.bat
```

另外，如果需要强制指定平台版本，确保你的 `ExecStartPre` SteamCMD 安装命令里也包含了 `+@sSteamCmdForcePlatformType` 参数。
:::

把所有参数替换成你专用游戏服务器对应的值后，按 `CTRL + X`，然后按 `Y` 确认保存，最后按 `ENTER` 退出 nano。

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

服务文件创建完成后，需要启用它。以 `palworld.service` 为例，`[your_service]` 替换成 `palworld`：
```
sudo systemctl enable [your_service]
```

:::tip
如果你修改了服务文件，记得运行 `systemctl daemon-reload`，这样改动才能生效。
:::

现在你可以用 `systemctl start` 命令启动服务器，同理也能用类似命令停止或重启服务器：
```
sudo systemctl start [your_service]
sudo systemctl stop [your_service]
sudo systemctl restart [your_service]
```

:::tip
想查看服务状态，可以用 `systemctl status` 命令。如果需要调试日志，执行 `journalctl -u [your_service].service`，能看到最新日志。
:::

最后，如果你想取消开机自动启动服务，只需禁用它：
```
sudo systemctl disable [your_service]
```

## 总结

恭喜！你已经成功为你的专用游戏服务器设置了 Linux 服务。服务器现在会在机器启动时自动启动。

你也了解了服务文件的内容结构，以及如何用各种命令来管理服务。