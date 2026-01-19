---
id: dedicated-windows-rdp-freeze
title: "独立服务器：远程桌面连接断开"
description: "了解如何通过提升连接稳定性和防止会话中断来修复RDP冻结 → 立即了解更多"
sidebar_label: RDP连接断开
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RDP冻结问题是一种常见现象，根据所使用的操作系统和版本不同，远程桌面会话会意外冻结。这个问题非常令人头疼，会严重影响工作效率。在本文中，你将了解问题的原因以及如何解决它。

## 主要原因

多方信息表明，这个问题主要是因为RDP协议对丢包或损坏数据包的容错能力较弱。此外，某些Windows版本中的一个漏洞会导致操作系统无法顺畅地在TCP和UDP协议之间切换，进一步加剧了问题。

## 解决方案

为了解决这个问题，你可以禁用RDP连接中的UDP协议，改用更稳定的TCP协议。操作步骤是在你的电脑上以管理员身份打开命令提示符（cmd.exe），然后执行以下命令：

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

执行该命令后，你的电脑将改用TCP协议而非UDP协议进行RDP会话连接。这能提升连接稳定性，尤其是在网络不稳定或丢包率高的情况下。

:::info 
**按回车键确认输入**，然后**重启电脑**，以确保更改生效。
:::