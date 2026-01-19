---
id: vserver-windows-fs-22-epic
title: "VPS：Farming Simulator 2022（Epic Games）专用服务器 Windows 设置"
description: "了解如何为 Epic Games 版本的 Farming Simulator 22 搭建专用服务器，优化游戏体验和托管效果 → 立即了解"
sidebar_label: Farming Simulator 2022（Epic Games）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
为 Farming Simulator 22 Epic Games 版本搭建服务器的流程与标准版本略有不同。本指南将带你一步步完成设置，重点讲解 Epic Games 版本的独特之处。
<InlineVoucher />

## 准备工作

开始之前，请确保你的环境满足以下要求：
- **操作系统：** Windows Server 2016/2019（64位）
- **CPU：** 至少 4 核 2.4 GHz（AMD/Intel）
- **内存：** 至少 4GB（DDR3/4）
- **磁盘空间：** 至少 50GB 可用空间（建议 SSD 或更好）
- **Epic Games 账号：** 拥有 Farming Simulator 22 的 Epic Games 账号。

:::info
运行服务器时，不能用同一个 Epic Games 账号同时托管服务器和玩游戏。如果你想在服务器上玩游戏，需要另一个账号拥有游戏副本。
:::

## 第 1 步：准备安装服务器
首先通过远程桌面（RDP）连接到你的服务器。如果需要帮助，请参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

连接后，你需要安装一个必要的前置组件 Microsoft Visual C++ Redistributable，可以从 [微软官网](https://learn.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist?view=msvc-170) 下载。下载完成后，按照提示完成安装。

:::tip
你可能已经安装过 C++ Redistributable，如果安装程序报错，可以放心忽略，继续下一步。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9kjW9QdoWtwRAbW/preview.png)

接下来安装 Epic Games 启动器，下载地址在 [Epic Games 官网](https://store.epicgames.com/en-US/download)。同样，按照提示完成安装。

![](https://screensaver01.zap-hosting.com/index.php/s/msGyRYr5cxoSti5/preview.png)

安装完成后，启动器可能需要下载一些额外文件和更新。

![](https://screensaver01.zap-hosting.com/index.php/s/Bzya5Tzj8sY7RY2/preview)

启动器打开后，使用拥有 Farming Simulator 2022 的 Epic Games 账号登录。

## 第 2 步：下载 Farming Simulator 2022

在 Epic Games 启动器中，点击 **库** 标签，找到 Farming Simulator 22。点击 **安装** 按钮，选择你想安装游戏的位置。

![](https://screensaver01.zap-hosting.com/index.php/s/s9SxMgLtQHtwTPQ/preview)

等待下载和安装完成，速度取决于服务器的带宽。

## 第 3 步：设置启动参数

游戏安装完成后，回到 Epic Games 启动器的 **库** 标签。找到 Farming Simulator 22，点击右侧的三个点，选择 **管理**。

![](https://screensaver01.zap-hosting.com/index.php/s/t63G5XzxwpaLje9/preview)

向下滚动到 **启动选项**，启用它。在出现的文本框中输入 `-server`，然后关闭菜单。

![](https://screensaver01.zap-hosting.com/index.php/s/HLAXkbdpanAFfbS/preview)

## 第 4 步：启动服务器

现在你可以通过 Epic Games 启动器或桌面快捷方式启动 Farming Simulator 2022。游戏会通过命令提示符（CMD）以专用服务器模式启动。如果没有，请确认启动参数设置正确。

![](https://screensaver01.zap-hosting.com/index.php/s/Bf5LX72LWNwSFib/preview)

## 第 5 步：启用网页管理界面（可选）

Farming Simulator 22 专用服务器自带网页管理界面，启用后可以方便调整设置和查看各种信息，推荐开启。

操作前请先关闭服务器（退出命令提示符），确保后续修改不会被覆盖。

进入游戏安装目录，默认路径通常是 `C:\Program Files\Epic Games\FarmingSimulator22`。

![](https://screensaver01.zap-hosting.com/index.php/s/yoqHoDAFZFkP2Ps/preview)

找到根目录下的 `dedicatedServer.xml` 文件，用记事本等文本编辑器打开。

修改管理员用户名和密码：
```xml
  <initial_admin>
    <username>admin</username> //用户名
    <passphrase>your_password</passphrase> //密码
  </initial_admin>
```

![](https://screensaver01.zap-hosting.com/index.php/s/gks4Pswpyc3Wcix/preview)

保存文件后关闭，运行同目录下的 `dedicatedServer.exe`。

![](https://screensaver01.zap-hosting.com/index.php/s/KjNeS5E8BLEgnnH/preview)

现在你可以在浏览器访问 `http://[你的服务器IP]:8080` 来打开网页管理界面，替换 `[你的服务器IP]` 为你的服务器地址。如果在同一台服务器上访问，也可以用 `http://127.0.0.1:8080`。

![](https://screensaver01.zap-hosting.com/index.php/s/n96fcAxyxBnfjyL/preview)

:::info
由于 Epic Games 版本的特殊架构，网页管理界面功能可能有限。你可以通过它修改设置和停止服务器，但不能用它启动服务器。

遇到问题时，先关闭 dedicatedServer.exe，再直接运行 Farming Simulator 22 确保服务器正常启动，之后再运行 dedicatedServer.exe 激活网页界面。

务必先启动服务器，再启动网页界面，否则 Epic Games 可能会误判两个程序为同一文件，导致无法启动主服务器。
:::

## 第 6 步：端口转发

为了让你的服务器对外开放，需要设置端口转发，放行专用服务器使用的端口。你可以通过 PowerShell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动配置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 PowerShell" default>

打开 Windows 搜索，输入 **PowerShell**，右键选择 **以管理员身份运行**，确保权限充足。

:::info
请务必以管理员身份运行 PowerShell，否则设置可能无法生效。
:::

复制粘贴以下命令到 PowerShell 窗口：
```
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Inbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS22 Server" -Direction Outbound -LocalPort 10823,8080 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Farming Simulator 22 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

使用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击 **高级设置** 进入。

![](https://screensaver01.zap-hosting.com/index.php/s/Jj8KAgWotFRrqdQ/preview)

你需要为 Farming Simulator 22 创建新的入站和出站规则，放行以下协议和端口：
- TCP 入站和出站：3724, 27015
- UDP 入站和出站：3724, 27015

如果需要帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

## 第 7 步：连接服务器
启动游戏，进入多人游戏菜单。查找服务器名称（可在网页管理界面查看并自定义）。

找到服务器后点击连接，若提示输入密码，密码同样在网页管理界面可见。

## 结语

恭喜你，成功在 VPS 上安装并配置了 Farming Simulator 2022 服务器！如果有任何疑问或问题，欢迎随时联系我们的客服团队，我们每天都在线帮你解决！

<InlineVoucher />