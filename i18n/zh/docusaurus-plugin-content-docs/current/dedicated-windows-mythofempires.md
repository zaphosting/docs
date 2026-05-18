---
id: dedicated-windows-mythofempires
title: "独立服务器：Myth of Empires Windows 独立服务器安装指南"
description: "快速高效地在你的 Windows VPS 上搭建 Myth of Empires 独立服务器 → 立即了解更多"
sidebar_label: MOE 独立服务器安装
services:
  - dedicated
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Windows VPS，想在上面安装 MOE 独立服务器吗？来对地方了！本指南将一步步教你如何在服务器上安装这个服务。

<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/T3jP36eWcQgTmNy/preview" title="如何在 Windows VPS 上搭建 Myth Of Empires 服务器！" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定安装。不管你是赶时间还是喜欢用最酷的方式吸收信息！"/>



## 准备工作
首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接到服务器后，你需要安装 **SteamCMD**，以便下载所需的独立服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 创意工坊和独立服务器文件。你可以从[Valve 官方网站下载 SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)，或者直接点这里下载：[steamcmd.zip](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后去你的下载文件夹，找到刚才下载的 **steamcmd.zip**，把它放进 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 .7zip、Winrar 等工具解压。解压后你会看到一个 **steamcmd.exe** 文件。

直接运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/sjoic6GAg6s8pew/preview)

当看到 **Loading Steam API.... OK** 的提示时，说明安装成功了，接下来就可以开始安装 MOE 独立服务器了。

## 安装

安装完成后，你应该能在之前运行的 **steamcmd.exe** 命令行窗口里执行命令。先登录，使用匿名用户登录，命令是：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 来设置你想安装服务器的目录，把 `[路径]` 替换成你想用的路径。例如：
```
force_install_dir C:\MOE-Server
```
:::

然后运行命令 `app_update 1794810`，开始下载。App ID **1794810** 就是 **MOE** 的应用ID。

![](https://screensaver01.zap-hosting.com/index.php/s/BxbBAPYYAffdGPz/preview)

:::info
请不要在下载完成前中断进程，避免出错。可能需要一点时间，但耐心点，绝对值得！ :)
:::

下载完成后，进入你设置的下载目录，所有服务器文件都在这里。

### 访问 PrivateServerTool

和普通 SteamCMD 安装不同，MOE 需要你从本地 Steam 游戏安装目录里复制一个文件夹，才能在 Windows 上运行服务器。

打开你电脑上的 Steam，右键点击 **Myth of Empires** 游戏，选择 **浏览本地文件**，鼠标悬停在 **管理** 选项上。

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

打开的根目录里找到 **PrivateServerTool** 文件夹。你需要把这个文件夹复制到你的服务器。用 `CTRL+C` 在本地复制，然后通过 RDP 用 `CTRL+V` 粘贴到你的 Windows 服务器。确保粘贴到你的独立服务器根目录。

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

接下来，去下一节设置端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被外网访问，你必须为独立服务器使用的端口设置端口转发规则。你可以通过 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 Powershell" default>

打开 Windows 搜索框，搜索 **Powershell**。右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要用管理员权限运行 Powershell，否则设置可能不会生效。
:::

复制下面命令，粘贴到 Powershell 窗口执行：
```
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Inbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Myth of Empires Server" -Direction Outbound -LocalPort 11888,12888 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 MOE 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/WP68dkL2FtDTLj6/preview)

你需要为 MOE 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：11888, 12888
- UDP 入站和出站：11888, 12888

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

配置好端口转发后，继续下一节创建配置文件和启动 `.bat` 文件。

## 配置

现在用之前从游戏文件夹复制过来的服务器工具，来创建配置文件和启动 `.bat` 文件，用于启动服务器。

进入以下目录（就是你之前复制的文件夹）：
```
../MOE/PrivateServerTool
```

在这个文件夹里运行 **PrivateServerTool.exe**。用这个工具配置服务器选项，比如 mod、游戏设置等等。

建议至少先设置好基本参数，比如 **服务器名称**。

准备好后，切换到工具里的 **启动控制台** 标签页，点击 **保存配置**，然后点击 **启动服务器**。这会生成一个 `StartPrivateServer.bat` 文件，用来启动服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

建议右键 `StartPrivateServer.bat` 文件，选择 **创建快捷方式**，以后启动更方便。

:::note
你可能需要编辑自动生成的 `StartPrivateServer.bat` 文件里的游戏路径。用记事本打开，确认文件开头的路径和你的服务器文件夹路径一致。

如果路径不对，可以在独立服务器根目录窗口的地址栏双击复制当前路径，然后粘贴到 `.bat` 文件里对应位置。
:::

## 启动并连接服务器

现在可以启动服务器了。进入你的 Myth of Empires 服务器目录，运行 **StartPrivateServer.bat**（或者你创建的快捷方式），开始启动服务器。命令行窗口会打开，显示服务器控制台，启动过程开始。

启动后，你可以在游戏里进入 **自定义服务器** 标签页，通过搜索框找到你的服务器并连接。

:::tip
如果连接服务器有问题，打开 `StartPrivateServer.bat` 文件，用记事本检查里面的两个 IP 参数是否和你的 Windows 服务器 IP 一致。这个一般工具会自动填充，但这是个很棒的排查步骤。
:::

恭喜你，已经成功在 Windows 独立服务器上安装了 Myth of Empires！