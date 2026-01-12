---
id: vserver-windows-port
title: "VPS：管理 Windows Defender 防火墙规则"
description: "了解如何管理 Windows Defender 防火墙规则并优化端口转发，实现安全的服务器通信 → 立即了解更多"
sidebar_label: 端口转发（防火墙）
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windows 操作系统自带 Windows Defender 防火墙，用于管理服务器与互联网之间的入站和出站流量。在本指南中，我们将介绍如何管理防火墙规则以及端口转发的一些实用技巧。

<InlineVoucher />

## 访问 Windows Defender 防火墙

Windows 系统内置了 **Windows Defender 防火墙高级安全** 应用，这是一个核心系统应用，方便你在一个地方轻松管理防火墙规则。

你可以通过在 Windows 搜索栏中搜索，或者按下 Windows 键/图标并使用开始菜单的搜索栏来快速访问它。

![](https://screensaver01.zap-hosting.com/index.php/s/MEdQwo2do8zA84m/preview)

## 管理规则

大多数应用和进程，尤其是那些必须通过互联网访问的，比如游戏服务器或网页服务器，都需要端口转发，以确保客户端能够与服务器（主机）通信。

:::info
默认情况下，Windows 只会为需要的应用打开防火墙端口，其他端口均保持关闭状态。这是为了避免不必要地暴露端口，降低风险。这也是为什么你第一次启动游戏时可能会看到 UAC 提示，确认新的防火墙规则。
:::

在 Windows 中，管理规则主要有两种方式：为程序创建规则，或者为端口整体创建规则（这样所有使用该端口的程序或进程都会被涵盖）。

规则类型有两种：
- 入站规则（Inbound Rule）：控制入站通信（来自互联网，访问你的服务器）。
- 出站规则（Outbound Rule）：控制出站通信（从你的服务器，访问互联网）。

通常在端口转发时，你需要同时创建这两种规则，允许客户端通信。但具体情况还是要看你的使用场景和配置。

![](https://screensaver01.zap-hosting.com/index.php/s/a8HCX6ZyWfemQtN/preview)

### 程序规则

创建程序规则通常是推荐的选择，因为它限制了通信仅针对特定程序或进程，而不是整个端口，这样就不会让任何程序或服务都能通过该端口通信。

接下来你将创建两个程序规则，一个出站规则和一个入站规则，两个都允许连接。

下面示例中，我们只设置 **入站** 规则。步骤完全相同，你可以重复操作来创建出站规则。

首先，在侧边栏右键点击 **入站规则**，选择 **新建规则...**。

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

第一步，选择规则类型为 **程序**。

![](https://screensaver01.zap-hosting.com/index.php/s/NPm9ae8BsD78An9/preview)

接下来，点击浏览按钮选择你想为其创建转发规则的程序。示例中选择了 Mozilla Firefox 浏览器作为示例应用。

![](https://screensaver01.zap-hosting.com/index.php/s/XsS2iTa4JjXF8j5/preview)

动作部分，选择 **允许连接**。

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

配置配置文件时，保持所有选项勾选，继续到最后一步。这里你需要为规则设置一个方便记忆的名称，也可以添加可选描述。

准备好后，点击 **完成** 创建规则。

![](https://screensaver01.zap-hosting.com/index.php/s/dpWEYFYGtWQYkw3/preview)

恭喜，你已成功为你的 Windows 服务器创建了程序规则。现在请重复以上步骤，在 **出站规则** 下创建对应的出站规则。

### 端口规则

创建通用端口规则在很多场景下也很有用，步骤与之前类似。

你将创建两个端口规则，一个出站和一个入站，两个都允许连接。

下面示例中，我们只设置 **入站** 规则。步骤完全相同，你可以重复操作来创建出站规则。

首先，在侧边栏右键点击 **入站规则**，选择 **新建规则...**。

![](https://screensaver01.zap-hosting.com/index.php/s/mnZXWgEWyxSciE4/preview)

第一步，选择规则类型为 **端口**。

![](https://screensaver01.zap-hosting.com/index.php/s/eobA3wzbwQSqjpK/preview)

接下来，你需要定义端口类型（TCP 或 UDP）和你想转发的端口号。如果你需要同时转发 TCP 和 UDP，则需要分别创建两条规则。

示例中使用了端口 25565（TCP），这是 Minecraft 默认端口。

![](https://screensaver01.zap-hosting.com/index.php/s/yMco5L6ERWiLEHk/preview)

动作部分，选择 **允许连接**。

![](https://screensaver01.zap-hosting.com/index.php/s/pnFz9EoxPqPT8xS/preview)

配置配置文件时，保持所有选项勾选，继续到最后一步。这里你需要为规则设置一个方便记忆的名称，也可以添加可选描述。

准备好后，点击 **完成** 创建规则。

![](https://screensaver01.zap-hosting.com/index.php/s/Ro5k6JgTF73exoH/preview)

恭喜，你已成功为你的 Windows 服务器创建了端口规则。现在请重复以上步骤，在 **出站规则** 下创建对应的出站规则。

<InlineVoucher />