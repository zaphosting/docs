---
id: dedicated-windows-soulmask
title: "独立服务器：Soulmask 独立服务器 Windows 安装指南"
description: "快速高效地在你的 Windows VPS 或独立服务器上安装 Soulmask 独立服务器 → 立即了解更多"
sidebar_label: Soulmask
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS 或独立服务器，想在上面安装 Soulmask 独立服务器服务吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接到服务器后，你需要安装 **SteamCMD**，以便下载所需的独立服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能让你轻松下载各种 Steam 创意工坊和独立服务器文件。你可以从 [Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD) 下载 SteamCMD，或者直接点击[这里](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上创建一个新文件夹，这里我们命名为 `steamcmd`。然后进入你的下载文件夹，找到刚下载的 **steamcmd.zip** 文件，放入 `steamcmd` 文件夹。接着右键使用 Windows 自带的解压功能，或者用 7zip、WinRAR 等工具解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装过程完成。

![](https://screensaver01.zap-hosting.com/index.php/s/tnMJpp3jEtkB3Zf/preview)

当看到 **Loading Steam API.... OK** 的提示时，说明安装成功，你可以继续下一步安装 Soulmask 独立服务器。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口执行命令。首先需要登录，使用匿名用户登录，输入命令：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 设置你想安装服务器的目录，替换 `[路径]` 为你想用的路径。例如：
```
force_install_dir C:\Soulmask-Server
```
:::

接着运行命令 `app_update 3017310` 开始下载。App ID **3017310** 就是 **Soulmask** 应用的编号。

![](https://screensaver01.zap-hosting.com/index.php/s/aw4oE7cWPeXLdTa/preview)

:::info
请勿在下载完成前中断进程，避免出错。可能需要一点时间，但耐心点，绝对值得！:)
:::

下载完成后，进入下载目录，所有服务器文件都在这里。你可以用 **StartServer.bat** 启动服务器，不过我们建议先做好端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被外网访问，你必须为独立服务器使用的端口设置端口转发规则。你可以通过 PowerShell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 PowerShell" default>

打开 Windows 搜索框，搜索 **PowerShell**。务必右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要以管理员身份运行 PowerShell，否则设置可能无法正确应用。
:::

复制并粘贴以下命令到 PowerShell 窗口：
```
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Inbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Soulmask Server" -Direction Outbound -LocalPort 8777,27015 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Soulmask 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果你打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/3PKQDAa9oF2WFj7/preview)

你需要为 Soulmask 服务器创建新的入站和出站规则，具体如下：
- TCP 入站和出站端口：8777, 27015
- UDP 入站和出站端口：8777, 27015

如果需要更多帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被访问了。你可以在游戏主菜单的多人游戏里选择 IP 直连，输入你的服务器 IP 和端口（默认是 3724，或者你自己设置的端口）连接服务器。

建议先通过下面的配置章节调整服务器设置，再开始连接。

## 配置

到这里，你已经完成了 Soulmask 服务器的基础安装。你可以通过修改根目录下的 **StartServer.bat** 文件和 `../WS/Saved/Config/WindowsServer` 路径下的 **GameUserSettings.ini** 文件来进一步配置服务器。

查看我们的[服务器配置](soulmask-configuration.md)指南，了解所有可用参数和配置选项。

## 启动 & 连接服务器

现在可以启动服务器了。进入根目录，运行 **StartServer.bat**，服务器控制台会在命令行窗口打开，开始启动过程。

:::tip
如果服务器启动失败，命令行窗口一闪而过，去 `../WS/Saved/Logs` 目录查看最新日志，找出问题原因。

有个常见问题是 Windows 独立服务器二进制文件中 Steam 在线服务启动失败，原因是打包不正确。如果错误和 Steam 相关，进入根目录，把以下文件移动到 `../WS/Binaries/Win64` 文件夹：`steamclient64.dll`、`tier0_s64.dll`、`vstdlib_s64.dll`。然后重新启动服务器，应该能正常启动。
:::

启动成功后，你可以在游戏内多人菜单通过输入服务器 IP 和端口 8777 直接连接。

如果想让服务器出现在服务器列表里，请参考我们的[服务器配置](soulmask-configuration.md)指南，在 **StartServer.bat** 文件中添加合适的 `-SteamServerName` 参数。保存后重新运行批处理文件即可。

恭喜你，Soulmask 已成功安装在你的 Windows 独立服务器上！