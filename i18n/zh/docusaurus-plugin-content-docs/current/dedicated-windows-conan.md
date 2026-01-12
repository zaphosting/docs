---
id: dedicated-windows-conan
title: "独立服务器：Conan Exiles Windows 独立服务器安装指南"
description: "了解如何在 Windows 独立服务器上搭建 Conan Exiles 独立服务器，实现流畅游戏体验和便捷服务器管理 → 立即了解"
sidebar_label: Conan Exiles
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows 独立服务器，想在上面安装 Conan Exiles 独立服务器服务吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

## 准备工作

首先，通过远程桌面（RDP）连接到你的独立服务器。如果你需要帮助，请参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

:::note 服务器启动工具
除了使用 SteamCMD，Conan Exiles 的开发者还维护了一个方便的服务器启动工具，可以在 Windows 上使用，简化服务器启动流程。

如果你想用这个工具，建议先看看[官方论坛帖子](https://forums.funcom.com/t/conan-exiles-dedicated-server-launcher-official-version-1-7-9-beta/21699)。
:::

连接服务器后，你需要安装 **SteamCMD**，以便下载所需的独立服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，可以轻松下载各种 Steam 工坊和独立服务器文件。你可以从 [Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD) 下载 SteamCMD，或者直接点击[这里](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后进入下载文件夹，找到刚才下载的 **steamcmd.zip** 文件，放入 `steamcmd` 文件夹。接着右键解压该文件，可以用 Windows 自带的解压功能，或者 7zip、Winrar 等工具。解压后会得到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/JFaor7BeJ6P3nNo/preview)

当看到 **Loading Steam API.... OK** 字样时，说明安装成功，可以开始下一步 Conan Exiles 独立服务器的安装了。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口中执行命令。先登录，使用匿名用户登录，命令是：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 设置你想安装服务器文件的目录，替换 `[路径]` 为你想用的路径。例如：
```
force_install_dir C:\Conan-Server
```
:::

接着运行命令 `app_update 443030`，开始下载。App ID **443030** 就是 **Conan Exiles** 的应用 ID。

![](https://screensaver01.zap-hosting.com/index.php/s/RQfzYbWGaiGYCY2/preview)

:::info
请勿中断下载过程，避免出错。虽然可能需要一点时间，但耐心点，绝对值得！:)
:::

下载完成后，进入下载目录，所有服务器文件都在这里。你可以用 **StartServer.bat** 启动服务器，但建议先做好端口转发和服务器配置。

### 端口转发设置

为了让你的服务器对外开放，需要为独立服务器使用的端口设置端口转发规则。你可以直接用 Powershell 命令操作（更简单），也可以通过 Windows Defender 防火墙界面设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 Powershell" default>

打开 Windows 搜索框，搜索 **Powershell**，右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要用管理员权限运行 Powershell，否则设置可能不会生效。
:::

复制粘贴以下命令到 Powershell 窗口：
```
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Inbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,25575 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Conan Exiles Server" -Direction Outbound -LocalPort 7777,7778,27015 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Conan Exiles 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **Windows 防火墙高级安全设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/bzo6Ec6jpQzQ3xn/preview)

你需要为 Conan Exiles 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：7777, 25575
- UDP 入站和出站：7777, 7778, 27015

如果需要更详细的操作指导，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被外网访问了，可以通过服务器 IP 连接。建议先完成下面的服务器配置，再开始连接。

## 配置

到这里，你已经完成了 Conan Exiles 服务器的基础搭建。你可以通过服务器目录下的配置文件进行更多自定义设置。

首先，进入以下目录：
```
../Conan-Server/Engine/Config/Windows
```

找到 **WindowsServerEngine.ini** 配置文件。你可以在这个文件里添加各种参数，调整服务器设置。

举个例子，添加服务器名称、密码和管理员密码，可以写入：
```
[OnlineSubsystem]
ServerName=[你的服务器名]
ServerPassword=[你的密码]

[ServerSettings]
AdminPassword=[你的管理员密码]
```

想了解更多可用参数，推荐浏览 [Conan Exiles Wiki](https://conanexiles.fandom.com/wiki/Server_Configuration)。

## 启动并连接服务器

现在可以启动服务器了。进入 Conan Exiles 服务器根目录，运行之前创建的 **StartServer.bat**，服务器控制台会在命令行窗口打开，开始启动流程。启动后，你可以通过游戏内服务器浏览器，输入服务器 IP 和端口（默认 7777）直接连接。

## 总结

恭喜你，成功在独立服务器上安装并配置了 Conan Exiles 服务器！如果有任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！