---
id: vserver-windows-avorion
title: "VPS：Avorion 专用服务器 Windows 安装指南"
description: "快速高效地在你的 Windows VPS 上搭建 Avorion 专用服务器 → 立即了解更多"
sidebar_label: Avorion
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS，想在上面安装 Avorion 专用服务器吗？那你来对地方了！本指南将一步步教你如何在服务器上安装这个服务。

<YouTube videoId="x10ssP09qtg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/7Nfiz2kgc9Sxbts/preview" title="如何在 Windows VPS 上搭建 Avorion 专用服务器！" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢用最酷的方式吸收信息！"/>
<InlineVoucher />

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接服务器后，你需要安装 **SteamCMD**，以便下载所需的专用服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 工坊和专用服务器文件。你可以从 [Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD) 下载 SteamCMD，或者直接点这里下载：[steamcmd.zip](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后进入你的下载文件夹，找到刚才下载的 **steamcmd.zip**，把它放进 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 7zip、Winrar 等软件解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/ip9LBB5FLryC8d8/preview)

当你看到 **Loading Steam API.... OK** 的提示时，说明安装成功，可以开始下一步安装 Avorion 专用服务器了。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口里执行命令。先登录，使用匿名用户登录，输入命令：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 来设置你想安装服务器的目录，把 `[路径]` 替换成你想用的路径。例如：
```
force_install_dir C:\Avorion-Server
```
:::

然后运行命令 `app_update 565060`，开始下载。App ID **565060** 就是 Avorion 的应用编号。

![](https://screensaver01.zap-hosting.com/index.php/s/sPoyqTf375tHFCg/preview)

:::info
请耐心等待下载完成，别中途打断，避免出错。虽然需要点时间，但绝对值得！:)
:::

下载完成后，进入你设置的下载目录，所有服务器文件都在这里。找到 **server.bat** 文件，复制一份并重命名为 **startserver.bat** 或类似名字。以后启动服务器就用这个 `.bat` 文件，也方便你编辑服务器配置。建议先做好端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被外网访问，你需要给专用服务器用到的端口设置端口转发。你可以用 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

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
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Inbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Avorion Server" -Direction Outbound -LocalPort 27000,27003,27020,27021 -Protocol UDP -Action Allow
```

这些命令会自动帮你创建防火墙规则，确保 Avorion 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="用 Windows Defender 设置">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入详细界面。

![](https://screensaver01.zap-hosting.com/index.php/s/ELdjaBQjdxSBz4J/preview)

你需要为 Avorion 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：27000
- UDP 入站和出站：27000, 27003, 27020, 27021

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)教程。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被外网访问了，可以通过服务器 IP 连接。建议先通过下面的配置章节调整服务器设置，再开始连接。

## 配置

到这里，你已经完成了 Avorion 服务器的基础搭建。你可以直接编辑之前复制的 **startserver.bat** 文件，用记事本等文本编辑器打开，调整服务器启动参数。

如果想修改世界相关的参数和设置，需要进入你的银河存档，编辑 **server.ini** 配置文件。这个文件存放在 Windows 的 AppData 目录，路径如下：
```
../AppData/Roaming/Avorion/galaxies
```

:::tip
你可以按 `CTRL` + `R` 打开运行窗口，输入 `%userprofile%/AppData/Roaming/Avorion/galaxies`，点击确定，直接跳转到该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/exjm2axcnYWoXAo/preview)
:::

## 启动并连接服务器

现在可以启动服务器了。进入 Avorion 服务器的根目录，运行你之前创建的 **startserver.bat** 文件，服务器控制台会在命令行窗口打开并开始启动。

启动后，你可以通过游戏内的服务器浏览器，输入服务器 IP 和端口（默认 27000）直接连接你的服务器。

## 总结

恭喜你，成功在 VPS 上安装并配置了 Avorion 服务器！如果还有任何问题或疑问，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />