---
id: vserver-windows-conan
title: "VPS：Conan Exiles 专用服务器 Windows 安装指南"
description: "快速高效地在你的 Windows VPS 上搭建 Conan Exiles 专用服务器 → 立即了解更多"
sidebar_label: Conan Exiles
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS，想在上面安装 Conan Exiles 专用服务器吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

<InlineVoucher />

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）指南](vserver-windows-userdp.md)。

:::note 服务器启动工具
除了使用 SteamCMD，Conan Exiles 的开发者还维护了一个方便的服务器启动工具，可以在 Windows 上使用，简化服务器启动流程。

如果你想用这个工具，建议先阅读[官方论坛帖子](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699)。
:::

连接到服务器后，你需要安装 **SteamCMD**，以便下载所需的专用服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 工坊和专用服务器文件。你可以从[Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD)下载 SteamCMD，或者直接点击[这里](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上创建一个新文件夹，这里我们命名为 `steamcmd`。然后进入你的下载文件夹，找到刚才下载的 **steamcmd.zip** 文件，放入 `steamcmd` 文件夹。接着右键解压，可以用 Windows 自带的解压功能，或者用 7zip、WinRAR 等工具。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/932qXLjMaaBEHo6/preview)

当看到 **Loading Steam API.... OK** 的提示时，说明安装成功，你就可以开始安装 Conan Exiles 专用服务器了。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口中执行命令。先登录，使用匿名用户登录，输入命令：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 设置你想安装服务器的目录，替换 `[路径]` 为你想用的路径。例如：
```
force_install_dir C:\Conan-Server
```
:::

接着运行命令 `app_update 443030`，开始下载。App ID **443030** 就是 **Conan Exiles**。

![](https://screensaver01.zap-hosting.com/index.php/s/mcdEHB9kobmYkg2/preview)

:::info
请勿中断下载过程，避免出错。耐心等待，值得的！:)
:::

下载完成后，进入下载目录，你会看到所有服务器文件。这里可以用 **StartServer.bat** 启动服务器，但我们建议先做好端口转发和服务器配置。

### 端口转发设置

为了让你的服务器对外开放，你必须为专用服务器使用的端口设置端口转发规则。你可以直接用 Powershell 命令操作（更简单），也可以通过 Windows Defender 防火墙界面设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 Powershell" default>

打开 Windows 搜索框，搜索 **Powershell**。右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要以管理员身份运行 Powershell，否则设置可能无法生效。
:::

复制并粘贴以下命令到 Powershell 窗口：
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Conan Exiles 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/4LSs8YaXT4cGJnx/preview)

你需要为 Conan Exiles 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：7777, 25575
- UDP 入站和出站：7777, 7778, 27015

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)教程。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被外网访问了，可以通过服务器 IP 连接。建议先完成下面的服务器配置，再开始连接。

## 配置

到这里，你已经完成了 Conan Exiles 服务器的基础安装。你可以通过服务器目录下的配置文件进行更详细的设置。

首先，进入目录：
```
../Conan-Server/Engine/Config/Windows
```

找到 **WindowsServerEngine.ini** 配置文件。你可以通过编辑这个文件，添加各种参数来调整服务器设置。

举个例子，添加服务器名称、密码和管理员密码，可以在文件中写入：
```
[OnlineSubsystem]
ServerName=[你的服务器名]
ServerPassword=[你的服务器密码]

[ServerSettings]
AdminPassword=[你的管理员密码]
```

建议浏览[Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration)获取完整的配置参数列表。

## 启动并连接服务器

现在可以启动服务器了。进入 Conan Exiles 服务器的根目录，运行之前创建的 **StartServer.bat**，服务器控制台会在命令行窗口打开并开始启动。

启动后，你可以通过游戏内的服务器浏览器，输入服务器 IP 和端口（默认 7777）直接连接。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Conan Exiles 服务器！如果有任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />