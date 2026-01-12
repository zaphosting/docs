---
id: vserver-windows-foundry
title: "VPS：Foundry 专用服务器 Windows 安装指南"
description: "了解如何在你的 Windows VPS 上安装 Foundry 专用服务器，实现无缝游戏托管 → 立即了解"
sidebar_label: Foundry
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS，想在上面安装 Foundry 专用服务器服务吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

<YouTube videoId="bRsZNqKsghA" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/Xm3o2P3oc7QzLtp/preview" title="如何在 Windows VPS 上设置 Foundry 专用服务器！" description="觉得看视频更容易理解？我们懂你！快来看看我们的教学视频，帮你轻松搞定。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>
<InlineVoucher />

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接到服务器后，你需要安装 **SteamCMD**，以便下载所需的专用服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 创意工坊和专用服务器文件。你可以从 [Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD) 下载 SteamCMD，或者直接点这里下载 [steamcmd.zip](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后进入你的下载文件夹，找到刚才下载的 **steamcmd.zip**，把它放进 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 7zip、WinRAR 等工具解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/KdfaWmQGQ3oiGtb/preview)

当你看到 **Loading Steam API.... OK** 的提示时，说明安装成功，可以开始下一步安装 Foundry 专用服务器了。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口里执行命令。先登录，输入命令：`login anonymous`，用匿名用户登录。

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 设置你想安装服务器的目录，把 `[路径]` 替换成你想用的路径，比如：
```
force_install_dir C:\Foundry-Server
```
:::

接着运行命令 `app_update 2915550`，开始下载。App ID **2915550** 就是 Foundry 应用的编号。

![](https://screensaver01.zap-hosting.com/index.php/s/3PqEYjiJYgPsZ8y/preview)

:::info
请不要在下载完成前中断进程，避免出错。虽然可能需要点时间，但耐心点绝对值得！:)
:::

下载完成后，进入下载目录，你会看到所有服务器文件。这里可以用 **FoundryDedicatedServerLauncher.exe** 启动服务器，但我们建议先设置端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被外网访问，你需要为专用服务器使用的端口设置端口转发规则。你可以用 PowerShell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 PowerShell" default>

打开 Windows 搜索框，搜索 **PowerShell**，右键选择 **以管理员身份运行**，确保权限足够，设置才能生效。

:::info
一定要用管理员权限运行 PowerShell，否则设置可能不会生效。
:::

复制下面命令，粘贴到 PowerShell 窗口执行：
```
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Inbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Foundry Server" -Direction Outbound -LocalPort 3724,27015 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Foundry 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入详细界面。

![](https://screensaver01.zap-hosting.com/index.php/s/pQM8SaYL6ERf6Sy/preview)

你需要为 Foundry 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：3724, 27015
- UDP 入站和出站：3724, 27015

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)教程。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被访问了。你可以在游戏主菜单选择多人游戏，点击 IP 直连，输入你的服务器 IP 和端口（默认是 3724，或者你设置的端口）连接服务器。

建议先按照下面章节配置服务器设置，再正式连接。

## 配置

到这里，你已经完成了 Foundry 服务器的基本安装。你可以通过配置文件进一步调整服务器参数。回到游戏文件夹根目录，如果没有 **app.cfg** 文件，就新建一个。这个文件和 **FoundryDedicatedServerLauncher.exe** 在同一个目录。

用记事本或你喜欢的编辑器打开 **app.cfg**，开始添加你想调整的配置参数。每个参数单独一行，格式是 参数名=值。

举个例子，下面是三个配置参数：
```
server_world_name=ZAPDocsTest
server_name=ZAP-Hosting Docs Test
server_max_players=10
```

想了解所有可用配置和作用，去看看我们的[服务器配置](foundry-configuration.md)页面。

## 启动 & 连接服务器

现在可以启动服务器了。进入根目录，运行 **FoundryDedicatedServerLauncher.exe**，服务器控制台会在命令行窗口打开，开始启动。

启动后，你可以通过游戏主菜单的 **多人游戏 -> IP 直连**，输入服务器 IP 和端口（默认3724，或你设置的端口）连接。

如果想让服务器出现在服务器列表里，记得在配置文件里添加合适的 `server_name` 和 `server_is_public` 参数，保存后重新启动服务器。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Foundry 服务器！如果还有任何问题或疑问，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />