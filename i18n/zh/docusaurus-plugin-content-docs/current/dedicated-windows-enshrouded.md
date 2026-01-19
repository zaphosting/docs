---
id: dedicated-windows-enshrouded
title: "独立服务器：Enshrouded 独立服务器 Windows 安装指南"
description: "快速高效地在你的 Windows VPS 或独立服务器上搭建 Enshrouded 独立服务器 → 立即了解更多"
sidebar_label: Enshrouded
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Windows VPS 或独立服务器，想在上面安装 Enshrouded 独立服务器服务？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

<YouTube videoId="cxhqHt2DYjQ" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/PR2nR7xtNp93BLx/preview" title="如何在 Windows VPS 上搭建 Enshrouded 独立服务器！" description="觉得看着操作更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>



## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接到服务器后，你需要安装 **SteamCMD**，以便下载所需的独立服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 创意工坊和独立服务器文件。你可以从 [Valve 官方网站下载 SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)，或者直接点击[这里](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后打开你的下载文件夹，找到刚才下载的 **steamcmd.zip** 文件，放入 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 7zip、WinRAR 等工具解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/fG9g5aRzATAwA3f/preview)

当看到 **Loading Steam API.... OK** 的提示时，说明安装成功，你就可以开始安装 Enshrouded 独立服务器了。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口里执行命令。先登录，使用匿名用户登录，命令是：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 来设置你想安装服务器的目录，把 `[路径]` 替换成你想用的路径。例如：
```
force_install_dir C:\Enshrouded-Server
```
:::

接着运行命令 `app_update 2278520`，开始下载。App ID **2278520** 就是 **Enshrouded** 服务器程序。

![](https://screensaver01.zap-hosting.com/index.php/s/a62m3XbCQsetnQo/preview)

:::info
请耐心等待下载完成，别中途打断，避免出错。虽然可能需要点时间，但绝对值得！:)
:::

下载完成后，进入你设置的下载目录，所有服务器文件都在这里。你可以用 **enshrouded_server.exe** 启动服务器，但我们建议先做好端口转发和服务器配置。

### 给服务器做端口转发

为了让你的服务器能被外网访问，你需要给服务器进程用到的端口设置端口转发。你可以用 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="用 Powershell 设置" default>

打开 Windows 搜索框，搜索 **Powershell**，右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要用管理员权限运行 Powershell，否则设置可能不会生效。
:::

复制粘贴以下命令到 Powershell 窗口：
```
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Inbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Enshrouded Server" -Direction Outbound -LocalPort 15636,15637 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Enshrouded 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="用 Windows Defender 设置">

用 Windows 搜索打开 **Windows 防火墙高级安全设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/tYbM6azDikw2ADs/preview)

你需要为 Enshrouded 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：15636-15637
- UDP 入站和出站：15636-15637

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被访问了。你可以在游戏主菜单选择角色，进入 **查找游戏** 标签页，点击 **添加服务器**，输入你的服务器 IP 和端口（默认15636），以及服务器密码（如果设置了的话，没设置就留空）。

:::tip
想给服务器设置密码或调整更多参数？看看我们的[服务器配置](enshrouded-configuration.md)指南吧。
:::

建议先按照下面的章节配置好服务器，再连接。

## 配置

到这里，你已经完成了 Enshrouded 服务器的基础搭建。你可以通过服务器目录下的配置文件进一步调整服务器参数。

先进入服务器根目录：
```
..EnshroudedServer/ (根目录)
```

找到 **enshrouded_server.json** 配置文件。通过它你可以修改服务器的各种参数。具体可用选项和说明，请参考我们的[服务器配置](enshrouded-configuration.md)指南。

## 启动并连接服务器

现在可以启动服务器了。进入 Enshrouded 服务器根目录，运行 **enshrouded_server.exe**，服务器控制台会在命令行窗口打开并开始启动。

启动后，你就能通过游戏内的 **查找游戏** 标签页，点击 **添加服务器**，输入服务器 IP 和端口（默认15636）直接连接你的服务器。

恭喜你，Enshrouded 已成功安装在你的 Windows 独立服务器上！