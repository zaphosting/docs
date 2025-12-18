---
id: vserver-windows-rdp-freeze
title: "VPS: Remote Desktop Connection Drops"
description: "Discover how to fix RDP freezing issues by improving connection stability and boosting remote desktop productivity → Learn more now"
sidebar_label: RDP Connection Drops
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The RDP freeze problem is a common phenomenon where, depending on the operating system and version used, remote desktop sessions unexpectedly freeze. This issue can be frustrating and significantly impair productivity. In this document, you will learn more about the cause of the problem and how to fix it.

<InlineVoucher />

## Primary Cause

Various sources increasingly indicate that the problem is due to the reduced resilience of the RDP protocol to packet loss or corrupted packets. Additionally, a bug in certain Windows versions can cause the operating system to fail to seamlessly switch between the TCP and UDP protocols, further exacerbating the issue.

## Solution Approach

To resolve the issue, you can disable the UDP protocol for the RDP connection and instead use the more stable TCP protocol. To do this, open the Command Prompt (cmd.exe) as an administrator on your computer and execute the following command:

```
reg add "HKLM\software\policies\microsoft\windows nt\Terminal Services\Client" /v fClientDisableUDP /d 1 /t REG_DWORD
```

![](https://screensaver01.zap-hosting.com/index.php/s/6E6AzroG88ETj2X/preview)

By executing this command, your computer will now use the TCP protocol instead of the UDP protocol for the RDP session. This can improve the stability of the connection, especially in networks with unstable connections or high packet loss.

:::info 
**Confirm the input** by pressing the Enter key and **restart your computer afterward** so that the change is applied and takes effect.
:::

<InlineVoucher />
