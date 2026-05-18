---
id: dedicated-windows-foundry
title: "独立服务器：Foundry 独立服务器 Windows 安装指南"
description: "快速高效地在你的 Windows VPS 或独立服务器上搭建 Foundry 独立服务器 → 立即了解更多"
sidebar_label: Foundry
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有 Windows VPS 或独立服务器，想在上面安装 Foundry 独立服务器服务吗？你来对地方了！本指南将一步步教你如何在服务器上安装这个服务。

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/e7inNNGMd5Wwcsp/preview" title="如何在 Windows VPS 上搭建 Foundry 独立服务器！" description="觉得看视频更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>



## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接到服务器后，你需要安装 **SteamCMD**，以便下载所需的独立服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 创意工坊和独立服务器文件。你可以从 [Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD) 下载 SteamCMD，或者直接点击[这里](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后进入你的下载文件夹，找到刚才下载的 **steamcmd.zip** 文件，放入 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 7zip、WinRAR 等工具解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装过程完成。

![](https://screensaver01.zap-hosting.com/index.php/s/XPJF72x6MmBLCt2/preview)

当看到 **Loading Steam API.... OK** 的提示时，说明安装成功，你就可以开始下一步安装 Foundry 独立服务器了。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口里执行命令。先登录，使用匿名用户登录，输入命令：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 来设置你想安装服务器的目录，替换 `[路径]` 为你想用的路径。例如：
```
force_install_dir C:\Foundry-Server
```
:::

然后运行命令 `app_update 2915550`，开始下载。App ID **2915550** 就是 Foundry 应用的编号。

![](https://screensaver01.zap-hosting.com/index.php/s/JpS7WeHDTmeqeH7/preview)

:::info
请勿在下载完成前中断进程，以免出错。耐心等待一下，绝对值得！:)
:::

下载完成后，进入下载目录，所有服务器文件都在这里。你可以用 **FoundryDedicatedServerLauncher.exe** 启动服务器。不过我们建议先做好端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被公网访问，你必须为独立服务器使用的端口设置端口转发规则。你可以直接用 PowerShell 命令操作（更简单），也可以通过 Windows Defender 防火墙界面设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 PowerShell" default>

打开 Windows 搜索框，搜索 **PowerShell**，右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要以管理员身份运行 PowerShell，否则设置可能不会生效。
:::

复制并粘贴以下命令到 PowerShell 窗口：
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Foundry 服务器能被公网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/FnTnwd3dQ6bWMky/preview)

你需要为 Foundry 服务器创建新的规则。分别在入站和出站规则里添加以下协议和端口：
- TCP 入站和出站：3724, 27015
- UDP 入站和出站：3724, 27015

如果需要更多帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被访问了。你可以通过服务器 IP 地址连接，方法是在主菜单选择多人游戏，点击 IP 直连，输入你的 IP 和端口（默认是 3724，或者你设置的端口）。

我们建议先通过下面的配置章节调整服务器设置，再正式连接。

## 配置

到这里，你已经完成了 Foundry 服务器的基础搭建。你可以通过配置文件进一步调整服务器参数。回到游戏文件夹根目录，如果没有 **app.cfg** 文件，就新建一个。这个文件和 **FoundryDedicatedServerLauncher.exe** 在同一目录。

用记事本或你喜欢的编辑器打开 **app.cfg**，开始添加你想调整的配置参数。每个参数一行，格式是 参数名=值。

举个例子，下面是三个配置示范：
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

想了解所有可用配置和作用，查看我们的[服务器配置](foundry-configuration.md)指南。

## 启动 & 连接服务器

现在可以启动服务器了。进入根目录，运行 **FoundryDedicatedServerLauncher.exe**，服务器控制台会在命令行窗口打开，开始启动。

启动后，你可以通过 IP 直连连接服务器，路径是 **多人游戏->IP 直连**，输入服务器 IP 和端口 3724（默认端口，且已做端口转发）。

如果想让服务器出现在服务器列表里，参考我们的[服务器配置](foundry-configuration.md)指南，添加合适的 `server_name` 和 `server_is_public` 参数到配置文件。保存后重新运行服务器程序。

恭喜你，已成功在 Windows 独立服务器上安装 Foundry！