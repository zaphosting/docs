---
id: vserver-windows-rdp-freeze
title: "VPS：远程桌面连接断开"
description: "了解如何通过提升连接稳定性解决RDP卡顿问题，提升远程桌面效率 → 立即了解"
sidebar_label: RDP连接断开
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RDP卡顿问题是一个常见现象，根据所使用的操作系统和版本不同，远程桌面会话可能会意外冻结。这个问题非常让人头疼，严重影响工作效率。本文将帮你了解问题原因以及如何解决。

<InlineVoucher />

## 主要原因

越来越多的资料显示，这个问题主要是因为RDP协议对丢包或数据包损坏的容错能力较弱。此外，某些Windows版本存在一个bug，导致系统无法顺畅地在TCP和UDP协议间切换，进一步加剧了问题。

## 解决方案

为了解决这个问题，你可以禁用RDP连接中的UDP协议，改用更稳定的TCP协议。操作方法是在你的电脑上以管理员身份打开命令提示符（cmd.exe），然后执行以下命令：

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

执行该命令后，你的电脑将改用TCP协议而非UDP协议进行RDP会话连接。这能提升连接稳定性，尤其是在网络不稳定或丢包率高的环境下。

:::info 
**输入命令后按回车确认**，并且**执行完毕后重启电脑**，让更改生效。
:::

<InlineVoucher />