---
id: dedicated-windows-userdp
title: "独立服务器：通过远程桌面（RDP）访问 Windows 服务器"
description: "了解如何轻松使用 RDP 远程连接你的 Windows 服务器，安全访问多种设备 → 立即了解更多"
sidebar_label: 初始访问（RDP）
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windows 操作系统使用远程桌面协议（RDP）轻松实现远程连接其他 Windows 系统。在本指南中，我们将带你一步步通过 RDP 连接到你的 Windows 服务器。

## 通过 Windows 连接

自 RDP 推出以来，Windows 系统内置了 **远程桌面连接** 应用程序，作为核心系统组件。你可以通过在 Windows 搜索栏中输入“远程桌面连接”或按下 Windows 键/图标并使用开始菜单搜索栏来快速打开它。

![](https://screensaver01.zap-hosting.com/index.php/s/TRfpNC3rACZ3KGB/preview)

在新窗口中，将 **计算机** 一栏填写为你的服务器 IP 地址，然后点击 **连接**。此时会弹出 Windows 原生的凭据输入框，输入用户名为 `Administrator`，密码则是你 Windows 服务器的登录密码。

![](https://screensaver01.zap-hosting.com/index.php/s/GCRs6KbGHz27HBS/preview)

点击 **确定** 后，你就能远程连接到你的 Windows 服务器了。如果遇到问题，请确认你输入的凭据是否正确。

:::info
首次连接时可能会出现证书错误提示，这是正常现象，可以放心忽略。
:::

恭喜，你已成功连接到你的 Windows 服务器。

## 其他远程连接（RDP）应用

### 桌面端应用

以下程序都是通过远程桌面协议（RDP）连接 Windows 服务器的不错替代方案。如果你是从 Windows 设备访问服务器，我们强烈推荐使用系统自带的远程桌面连接应用，因为它更简洁且稳定。

- Remote Desktop Connection Manager (RDCMan)
- mRemoteNG
- RoyalTS
- Devolutions Remote Desktop Manager
- DameWare Mini Remote Control

### 移动设备应用

如今，微软为主流移动操作系统提供了官方的远程桌面（RDP）应用。我们建议在手机或平板上使用这些官方应用，因为它们功能丰富且体验良好。

你可以根据平台在这里下载应用：[Android](https://play.google.com/store/apps/details?id=com.microsoft.rdc.androidx&hl=en) 和 [iOS](https://apps.apple.com/us/app/remote-desktop-mobile/id714464092)