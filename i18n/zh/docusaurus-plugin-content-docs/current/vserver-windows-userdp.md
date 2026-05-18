---
id: vserver-windows-userdp
title: "VPS：通过远程桌面（RDP）访问 Windows 服务器"
description: "了解如何使用 RDP 安全远程连接到你的 Windows 服务器，并轻松管理访问权限 → 立即了解"
sidebar_label: 初始访问（RDP）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windows 操作系统使用远程桌面协议（RDP）轻松实现远程连接到其他 Windows 系统。在本指南中，我们将带你一步步通过 RDP 连接到你的 Windows 服务器。

<InlineVoucher />

## 准备连接信息

无论你使用哪款应用访问 Windows 服务器，连接时都需要输入凭据。

首先，登录你的服务器网页控制面板，进入 **访问与安全**（Access & Security）版块。在这里，你可以查看所有必要信息，主要是服务器的 **IP 地址** 和用户连接凭据。你的用户凭据包括 **用户名**，通常是 `Administrator`，以及 **密码**。

如果你的服务器是新开的，你可以在此页面通过弹窗获取初始随机生成的密码。否则，出于安全考虑密码会被隐藏，但如果忘记密码，随时可以在同一页面生成或设置新密码。

![](https://screensaver01.zap-hosting.com/index.php/s/amLy6sC6XzBN5fQ/preview)

拿到连接信息后，继续往下看，选择合适的应用进行连接。

## 通过 Windows 连接

自 RDP 推出以来，Windows 系统自带了 **远程桌面连接** 应用，作为核心系统组件。你可以直接在 Windows 搜索栏输入“远程桌面连接”或按下 Windows 键/图标，在开始菜单搜索栏找到它。

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

在弹出的窗口中，将 **计算机** 一栏填写为你的服务器 IP 地址，然后点击 **连接**。接下来会弹出 Windows 原生的凭据输入框，输入用户名 `Administrator` 和你的 Windows 服务器密码。

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

点击 **确定** 后，你就能远程连接到你的 Windows 服务器了。如果遇到问题，确认输入的凭据是否正确。

:::info
首次连接时可能会出现证书错误提示，这是正常现象，可以放心忽略。
:::

恭喜你，已成功连接到 Windows 服务器。

## 其他远程连接（RDP）应用

### 桌面端应用

以下程序都是通过远程桌面协议（RDP）连接 Windows 服务器的不错选择。如果你是 Windows 用户，强烈推荐使用系统自带的远程桌面连接应用，省心又稳定。

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### 移动设备应用

现在微软为主流移动操作系统都提供了官方远程桌面（RDP）应用。我们推荐在手机或平板上使用这些官方客户端，功能丰富且体验良好。

应用下载链接（根据平台选择）：
- [Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en)
- [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)

<InlineVoucher />