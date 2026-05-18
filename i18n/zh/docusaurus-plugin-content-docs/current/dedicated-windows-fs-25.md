---
id: dedicated-windows-fs-25
title: "独立服务器：Farming Simulator 2025 Windows 独立服务器安装指南"
description: "了解如何在 Windows 上搭建 Farming Simulator 2025 独立服务器，流畅托管多人游戏 → 立即了解"
sidebar_label: Farming Simulator 2025
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

你有一台 Windows 独立服务器，想在上面安装 Farming Simulator 2025 独立服务器服务吗？你来对地方了！本指南将一步步教你如何在服务器上安装这项服务。

## 准备工作

要托管 Farming Simulator 2025 独立服务器，你需要一台准备好的 Windows 服务器和一份有效的游戏授权来运行独立服务器。

安装前，请通过远程桌面（RDP）连接到你的 Windows 服务器。如果需要帮助，请参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

### 游戏授权

要在 Windows 服务器上托管独立服务器，你必须拥有一份来自 [Farming Simulator](https://www.farming-simulator.com/buy-now.php) 官网的数字版 Farming Simulator 2025。

![](https://screensaver01.zap-hosting.com/index.php/s/F7j4opS3tXZKSHs/preview)

你不能使用你玩游戏时的同一个授权密钥，因此你需要额外购买一份**专门用于独立服务器**的游戏副本。

:::info Steam 游戏授权
你可以用 Steam 游戏授权来托管独立服务器，但这非常不方便，因为你必须一直在后台运行 Steam 客户端。同时，由于 Steam 的限制，你无法用同一账号在其他设备上玩其他游戏。所以我们强烈建议你直接在官网购买独立密钥，避免这些麻烦。

如果你决定使用**Steam**授权，请通过 Steam 正常安装游戏文件，然后跳到本指南的**独立服务器设置**部分。
:::

购买官网数字版后，你会通过结账时填写的邮箱收到一串产品密钥。接下来安装时需要用到这个密钥来下载游戏和验证独立服务器。

## 安装

### 安装游戏文件

确认你已准备好授权密钥和 Windows 服务器后，打开服务器上的 [Giants Software 下载页面](https://eshop.giants-software.com/downloads.php)，输入你之前收到的授权密钥。

![](https://screensaver01.zap-hosting.com/index.php/s/srzwXmn2K5GPy2r/preview)

验证成功后，你会看到各种游戏下载方式。找到 Windows 版的 **Farming Simulator 25 (Windows 10/11)**，点击下载。

![](https://screensaver01.zap-hosting.com/index.php/s/boLooPWLYEqwtbp/preview)

游戏下载可能需要一段时间，请耐心等待。

![](https://screensaver01.zap-hosting.com/index.php/s/8YZgmrQJMrMas2p/preview)

下载完成后，找到你下载的 **.img** 文件，双击打开，它会自动挂载为一个虚拟光驱。

![](https://screensaver01.zap-hosting.com/index.php/s/eHqKPF28JFkgyLp/preview)

运行里面的 **Setup.exe**，接受 UAC 提示，跟随安装向导完成游戏安装，包括同意条款和选择安装路径（可选）。

![](https://screensaver01.zap-hosting.com/index.php/s/5mCg8wsgRzTQwzj/preview)

安装过程可能较长，请耐心等待。安装完成后退出安装程序。建议在文件资源管理器中右键点击挂载的**DVD 驱动器**选择**弹出**，释放虚拟光驱。此时游戏基础安装完成。

### 激活游戏

游戏安装完成后，你需要至少启动一次游戏来激活。可以通过桌面快捷方式或 Windows 搜索栏启动游戏。

首次启动时会弹出授权密钥输入框，输入你邮箱收到的密钥并确认。激活成功后游戏会继续加载。

![](https://screensaver01.zap-hosting.com/index.php/s/nnFkynzt9Bapdk4/preview)

激活完成后可以关闭游戏，接下来继续设置独立服务器和自带的网页管理界面。如果遇到**显卡驱动**错误，选择**否**即可跳过启动。

## 独立服务器设置

游戏准备好后，需要调整独立服务器的配置。打开游戏安装目录，默认路径是 `C:\Program Files (x86)\Farming Simulator 2025`，如果安装时改过路径请找到对应文件夹。

找到并用文本编辑器打开 **dedicatedServer.xml** 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/q4QXo9S4rDTrknc/preview)

建议修改文件顶部的 `username` 和 `passphrase` 字段，设置你自己的登录凭证，这将用于登录服务器的网页管理面板。修改后保存并关闭文件。

![](https://screensaver01.zap-hosting.com/index.php/s/B7bqNTYnD3bHw7y/preview)

### 访问网页管理界面

配置好凭证后，运行游戏根目录下的 **dedicatedServer.exe** 启动服务器。

:::info 管理员权限
请确保以管理员身份运行独立服务器程序，否则启动服务器时可能会遇到权限问题。右键点击文件选择**以管理员身份运行**即可。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/RDcLPWqzyBmGPDm/preview)

首次启动时会自动生成证书、安装更新和必要工具，可能需要一些时间，请耐心等待。

![](https://screensaver01.zap-hosting.com/index.php/s/xfk2BgNmEZFmNZG/preview)

准备就绪后，在浏览器输入 `http://[你的服务器IP]:8080` 访问网页管理面板，使用之前设置的用户名和密码登录。

![](https://screensaver01.zap-hosting.com/index.php/s/Yx57Zn6xCqMYkwz/preview)

在这里你可以调整服务器设置、管理存档、管理 Mod 等多种操作。

### 端口转发设置

为了让你的服务器对外开放，需要在防火墙或路由器上设置端口转发，开放独立服务器使用的端口。你可以通过 PowerShell 命令快速设置，也可以通过 Windows Defender 防火墙界面手动设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="powershell" label="通过 PowerShell" default>

打开 Windows 搜索，输入 **PowerShell**，右键选择**以管理员身份运行**，确保权限充足。

:::info
请务必以管理员身份运行 PowerShell，否则设置可能无法生效。
:::

复制粘贴以下命令到 PowerShell 窗口执行：
```
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823  -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Inbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol TCP -Action Allow
New-NetFirewallRule -DisplayName "FS2025 Server" -Direction Outbound -LocalPort 8080,10823 -Protocol UDP -Action Allow
```

这些命令会自动创建防火墙规则，确保你的 Farming Simulator 2025 服务器能被外网访问。

</TabItem>

<TabItem value="windefender" label="通过 Windows Defender">

用 Windows 搜索打开 **高级安全 Windows 防火墙设置**。如果打开的是基础防火墙页面，点击**高级设置**进入。

![](https://screensaver01.zap-hosting.com/index.php/s/P8AZZGBepLXfiDW/preview)

你需要为 FS2025 服务器创建新的入站和出站规则，端口和协议如下：
- TCP 入站和出站：8080, 10823
- UDP 入站和出站：8080, 10823

如果需要更多帮助，请参考我们的[端口转发（防火墙）](vserver-windows-port.md)指南。

</TabItem>
</Tabs>

添加规则后，你的服务器就能被公网访问了，可以通过网页管理面板远程管理，也能在游戏内连接服务器。

### 启动服务器

设置好配置和防火墙规则后，打开网页管理面板首页，点击 **Start** 按钮启动服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/5S4FmawFoJBsMyo/preview)

启动成功后，界面会更新，且会弹出一个新的 CMD 窗口运行游戏服务器进程。如果启动失败，确认你是否以管理员身份运行管理面板。

![](https://screensaver01.zap-hosting.com/index.php/s/QtgAz7kpJq6knjf/preview)

## 结语

恭喜你，成功在独立服务器上安装并配置了 Farming Simulator 2025 独立服务器！如果有任何问题，欢迎随时联系我们的客服团队，我们每天都在线为你服务！