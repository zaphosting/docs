---
id: server-windows-arma3
title: "Arma 3 专用服务器 Windows 安装指南"
description: "了解如何在你的 Windows 服务器上搭建 Arma 3 专用服务器，实现流畅游戏体验和全面控制 → 立即学习"
sidebar_label: Arma 3
services:
  - vserver
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Windows VPS/独立服务器，想在上面安装 Arma 3 专用服务器吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

<InlineVoucher />

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS/独立服务器。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接服务器后，你需要安装 **SteamCMD**，以便下载所需的专用服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 工作坊和专用服务器文件。你可以从 [Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD) 下载 SteamCMD，或者直接点这里下载：[steamcmd.zip](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后打开你的下载文件夹，找到刚才下载的 **steamcmd.zip** 文件，放进 `steamcmd` 文件夹。接着右键解压这个文件，可以用 Windows 自带的解压功能，或者用 7zip、WinRAR 等工具。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/RsC7AK37qrYnDYR/preview)

当你看到 **Loading Steam API.... OK** 的提示时，说明安装成功，可以开始下一步安装 Arma 3 专用服务器了。

## 安装

安装完成后，你应该还能看到之前运行的 **steamcmd.exe** 命令行窗口。先登录，输入命令：`login anonymous`，用匿名用户登录。

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 来设置你想安装服务器的目录，替换 `[路径]` 为你想用的路径。例如：
```
force_install_dir C:\arma3-server
```
:::

然后输入命令 `app_update 233780` 开始下载。App ID **233780** 就是 **Arma 3** 服务器程序。

![](https://screensaver01.zap-hosting.com/index.php/s/52dAJQDFjTs8Y4f/preview)

:::info
请耐心等待下载完成，别中途打断，避免出错。虽然可能需要点时间，但绝对值得！:)
:::

下载完成后，进入你设置的下载目录，所有服务器文件都在这里。你可以用 **Arma 3_server.exe** 启动服务器，但我们建议先做好端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被外网访问，你需要为 VPS/独立服务器开放对应的端口。你可以用 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动配置。

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
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Inbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Arma3 Server" -Direction Outbound -LocalPort 2302-2306 -Protocol UDP -Action Allow
```

这两条命令会自动创建允许 Arma 3 服务器使用的端口的防火墙规则。

</TabItem>

<TabItem value="windefender" label="用 Windows Defender 设置">

用 Windows 搜索打开 **Windows 防火墙高级安全设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入详细界面。

![](https://screensaver01.zap-hosting.com/index.php/s/r9j8kYmR3LtcQJ2/preview)

你需要为 Arma 3 服务器创建新的入站和出站规则，端口和协议如下：
- UDP 入站和出站：2302–2306

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)教程。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被外网访问了。你可以在游戏主菜单选择角色，进入 **查找游戏** 标签页，点击 **添加服务器**，输入你的服务器 IP、端口（默认 2302）和密码（如果设置了的话，没设置就留空）。

建议先按照下面的配置章节调整服务器设置，再正式上线。

## 配置

到这里，你已经完成了 Arma 3 服务器的基础安装。你可以通过服务器目录下的配置文件进一步调整服务器参数。

先进入这个目录：
```
C:\arma3-Server
```

找到 **server.cfg** 配置文件，通过编辑它你可以设置服务器的各种参数。

## 启动 & 连接服务器

现在可以启动服务器了，进入游戏主目录，运行 **arma3server_x64.exe**。

这会打开服务器控制台，开始启动过程。

玩家可以通过 **Arma 3 服务器浏览器**，使用你的 **服务器 IP 地址** 和默认端口 **2302** 连接你的服务器。

## 总结

恭喜你，成功在你的 VPS/独立服务器上安装并配置了 **Arma 3 服务器**！如果还有任何问题或疑问，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />