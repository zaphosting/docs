---
id: vserver-windows-palworld
title: "VPS：Palworld 专用服务器 Windows 安装指南"
description: "了解如何在你的 Windows VPS 上搭建 Palworld 专用服务器，实现无缝游戏托管 → 立即了解"
sidebar_label: Palworld
services:
  - vserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows VPS，想在上面安装 Palworld 专用服务器吗？来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

<YouTube videoId="thn0wDE5LDg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/3gSdKyDDL65BAxM/preview" title="如何在 Windows VPS 上搭建 Palworld 专用服务器！" description="觉得看视频更容易理解？我们懂你！快来看看这段视频，帮你轻松搞定安装。不管你是赶时间还是喜欢边看边学，这里都有你想要的！"/>
<InlineVoucher />

## 准备工作

首先，通过远程桌面（RDP）连接到你的 VPS。如果你需要帮助，可以参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接上服务器后，你需要安装 **SteamCMD**，以便下载所需的专用服务器文件。SteamCMD 是 Steam 客户端的**命令行版本（CLI）**，能帮你轻松下载各种 Steam 工坊和专用服务器文件。你可以从 [Valve 官方网站](https://developer.valvesoftware.com/wiki/SteamCMD) 下载 SteamCMD，或者直接点这里下载：[steamcmd.zip](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。

在服务器上新建一个文件夹，这里我们命名为 `steamcmd`。然后进入你的下载文件夹，找到刚才下载的 **steamcmd.zip**，把它放进 `steamcmd` 文件夹。接着右键用 Windows 自带的解压功能，或者用 7zip、WinRAR 等工具解压。解压后你会看到一个 **steamcmd.exe** 文件。

双击运行 **steamcmd.exe**，等待安装完成。

![](https://screensaver01.zap-hosting.com/index.php/s/sibPXT2pbo9nME4/preview)

当看到提示 **Loading Steam API.... OK**，说明安装成功，可以开始下一步安装 Palworld 专用服务器了。

## 安装

安装完成后，你应该能在之前打开的 **steamcmd.exe** 命令行窗口里执行命令。先登录，使用匿名用户登录，输入命令：`login anonymous`

登录成功后，就可以开始下载服务器文件了。

:::tip
可选：你可以用命令 `force_install_dir [路径]` 设置你想安装服务器的目录，把 `[路径]` 替换成你想用的路径。例如：
```
force_install_dir C:\Palworld-Server
```
:::

接着运行命令 `app_update 2394010`，开始下载。App ID **2394010** 就是 **Palworld** 的专用服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/rwtMbaiHaW5EL4y/preview)

:::info
请耐心等待下载完成，别中途打断，避免出错。虽然需要点时间，但绝对值得！:)
:::

下载完成后，进入你设置的下载目录，所有服务器文件都在这里。你可以用 **PalServer.exe** 启动服务器，但我们建议先做端口转发和服务器配置。

### 端口转发设置

为了让你的服务器能被外网访问，你需要为专用服务器使用的端口设置端口转发规则。你可以用 Powershell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 Powershell" default>

打开 Windows 搜索框，搜索 **Powershell**，右键选择 **以管理员身份运行**，确保权限充足，设置才能生效。

:::info
一定要用管理员权限运行 Powershell，否则设置可能不会生效。
:::

复制并粘贴以下命令到 Powershell 窗口：
```
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Inbound -LocalPort 8211 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "Palworld Server" -Direction Outbound -LocalPort 8211 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Palworld 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **Windows 防火墙高级安全设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入详细界面。

![](https://screensaver01.zap-hosting.com/index.php/s/TeWKeFcCMZGx9KD/preview)

你需要为 Palworld 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：8211
- UDP 入站和出站：8211

如果需要更多帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

添加完规则后，你的服务器就能被访问了。你可以通过服务器列表搜索框，输入 `[你的IP地址]:8211` 来连接服务器。

建议先通过下面的配置章节调整服务器设置，再正式连接。

## 配置

到这里，你已经完成了 Palworld 服务器的基础搭建。你可以通过服务器目录下的配置文件进一步调整服务器参数。

首先，进入以下目录：
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer
```

找到 **PalWorldSettings.ini** 配置文件。通过它，你可以设置各种服务器参数。具体可用选项和说明，请查看我们的[服务器配置](palworld-configuration.md)指南。

:::note
如果没看到这个文件，请至少启动服务器**一次**，它会自动生成。或者你也可以复制默认配置文件，路径是 `steamapps/common/PalServer/DefaultPalWorldSettings.ini`。
:::

### 启用 Xbox 模式

Palworld 专用服务器现在支持切换为 Microsoft Store/Xbox 专用服务器模式，方便 Xbox 和 Microsoft Store PC 玩家一起玩。

:::note
Steam 版本和 Microsoft Store/Xbox 版本之间仍不支持跨平台联机。你的服务器只能设置为 Steam 或 Microsoft Store/Xbox 其中一种模式。
:::

进入以下目录，打开 **PalWorldSettings.ini** 文件：
```
../steamapps/common/PalServer/Pal/Saved/Config/WindowsServer/PalWorldSettings.ini
```

在文件中添加以下内容，启用 Xbox 模式：
```
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AllowConnectPlatform=Xbox)
```

保存文件，下次启动服务器时就会以 Xbox 模式运行。

:::info
Xbox 主机无法通过 IP 地址直接连接服务器，所以如果你打算用 Xbox 玩，必须把专用服务器设置为公开。

方法是在根目录新建一个 `StartServer.bat` 文件，内容写入：`PalServer.exe -publiclobby`。这个 `-publiclobby` 启动参数会开启社区服务器模式，让服务器出现在列表里。

别忘了设置一个容易被找到的服务器名，具体方法请看我们的[服务器配置](palworld-configuration.md)指南。
:::

## 启动并连接服务器

现在可以启动服务器了。如果你的 Windows VPS 还没安装 [DirectX 运行库](https://www.microsoft.com/en-gb/download/details.aspx?id=35)，请先安装。

进入 Palworld 服务器根目录，运行 **PalServer.exe**，服务器控制台会在命令行窗口打开并开始启动。如果一切正常，服务器会出现在服务器列表里。你也可以直接用服务器列表底部的搜索框，输入 `[你的IP地址]:8211` 连接。

## 总结

恭喜你，Palworld 服务器已经成功安装并配置完成！如果还有任何问题或疑问，随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />