---
id: vserver-windows-mythofempires
title: "VPS：Myth of Empires 专用服务器 Windows 安装指南"
description: "快速高效地在你的 Windows VPS 上搭建 Myth of Empires 专用服务器 → 立即了解更多"
sidebar_label: MOE 专用服务器安装
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你有一台 Windows VPS，想在上面安装 MOE 专用服务器？那你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。
<YouTube videoId="ir3QNvwu7WY" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/4WnZSyGqLyN7pmG/preview" title="如何在 Windows VPS 上搭建 Myth Of Empires 服务器！" description="觉得看着操作更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定。无论你是赶时间还是喜欢用最酷的方式吸收信息，这里都有你想要的！"/>
<InlineVoucher />

## 准备工作
首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接到服务器后，你需要安装 **SteamCMD**，这样才能下载所需的专用服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，它能帮你轻松下载各种 Steam 工作坊和专用服务器文件。你可以从 [Valve 官方网站下载 SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)，或者直接点这里下载：[steamcmd.zip](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后去你的下载文件夹，找到刚才下载的 **steamcmd.zip**，把它放进 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 7zip、Winrar 等工具解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/JBMboZ4WGiE9w27/preview)

当看到提示 **Loading Steam API.... OK**，说明安装成功，可以开始下一步安装 MOE 专用服务器了。

## 安装

安装完成后，你应该还能在之前打开的 **steamcmd.exe** 命令行窗口里执行命令。先登录，使用匿名用户登录，输入命令：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选操作：你可以用命令 `force_install_dir [路径]` 来设置你想安装服务器的目录，把 `[路径]` 替换成你想用的路径，比如：
```
force_install_dir C:\MOE-Server
```
:::

接着运行命令 `app_update 1794810`，开始下载。App ID **1794810** 就是 **MOE** 服务器程序。

![](https://screensaver01.zap-hosting.com/index.php/s/TQCbwxE8xe7TfPn/preview)

:::info
下载过程中请不要中断，耐心等待完成！虽然可能需要点时间，但绝对值得 :)
:::

下载完成后，进入你设置的下载目录，所有服务器文件都在这里了。

### 访问 PrivateServerTool

和普通的 SteamCMD 安装不同，MOE 需要你从本地 Steam 游戏安装目录复制一个文件夹，才能在 Windows 上运行服务器。

打开你电脑上的 Steam，右键点击 **Myth of Empires** 游戏，选择 **管理** → **浏览本地文件**。

![](https://screensaver01.zap-hosting.com/index.php/s/Cmj325wLSWgNGif/preview)

打开的根目录里找到 **PrivateServerTool** 文件夹。这个文件夹需要复制到你的服务器上。你可以在本地电脑用 `CTRL+C` 复制，然后通过 RDP 在服务器上用 `CTRL+V` 粘贴。确保粘贴到你的专用服务器根目录。

![](https://screensaver01.zap-hosting.com/index.php/s/sXdqCYW2QnKrReN/preview)

接下来，去下一节设置端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被外网访问，你必须为专用服务器使用的端口设置端口转发。你可以用 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="用 Powershell 设置" default>

打开 Windows 搜索框，搜索 **Powershell**，右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

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

这些命令会自动帮你创建防火墙规则，确保 MOE 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="用 Windows Defender 设置">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/7myCrE3M6nDEXGx/preview)

你需要为 MOE 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：11888, 12888
- UDP 入站和出站：11888, 12888

如果需要更详细的操作指导，可以参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

完成端口设置后，继续下一节创建配置文件和启动 `.bat` 文件。

## 配置

现在用之前复制过来的游戏文件夹里的服务器工具，来创建配置文件和启动 `.bat` 文件。

进入目录（就是你刚才复制的文件夹）：
```
../MOE/PrivateServerTool
```

运行 **PrivateServerTool.exe**。用这个工具配置服务器选项，比如 mod、游戏设置等等。

建议至少先设置好基本参数，比如 **服务器名称**。

准备好后，切换到工具里的 **Start Console** 标签页，先点击 **Save Config** 保存配置，再点击 **Start Server**。这会生成一个 `StartPrivateServer.bat` 文件，用来启动服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/TtcAbW6ZEWNyjXS/preview)

建议右键 `StartPrivateServer.bat`，选择 **创建快捷方式**，以后启动更方便。

:::note
你可能需要编辑自动生成的 `StartPrivateServer.bat` 文件里的游戏路径。用记事本打开，确认文件开头的路径和你的服务器文件夹路径一致。

如果路径不对，可以在专用服务器根目录窗口的地址栏双击复制当前路径，然后粘贴到 `.bat` 文件里对应位置。
:::

## 启动并连接服务器

现在可以启动服务器了。进入 Myth of Empires 服务器目录，运行 **StartPrivateServer.bat**（或者你创建的快捷方式），服务器控制台会弹出，开始启动。

启动后，你可以在游戏里进入 **自定义服务器** 标签页，通过搜索框找到你的服务器，直接连接。

:::tip
如果连接有问题，打开 `StartPrivateServer.bat` 文件，用记事本检查里面的两个 IP 参数，确认它们和你的 Windows 服务器 IP 一致。这个一般工具会自动填好，但这是个很棒的排查步骤。
:::

## 总结

恭喜你，已经成功在 VPS 上安装并配置了 Myth of Empires 服务器！如果还有任何问题，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />