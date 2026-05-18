---
id: vrising-firststeps-connect
title: "V Rising：连接到 V Rising 服务器"
description: "了解如何直接通过 IP 或服务器列表连接到你的 V Rising 服务器，实现无缝游戏体验 → 立即了解更多"
sidebar_label: 连接服务器
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将带你了解如何连接到你的 V Rising 服务器。连接方式有两种：直接通过服务器的 IP 地址连接，或者通过服务器列表连接。我们建议你先根据喜好配置好服务器，详细内容请查看我们的[服务器配置](vrising-configuration.md)指南。

<InlineVoucher />

## 通过 IP 直接连接

### 获取服务器 IP

首先，你需要知道你的 V Rising 服务器的 IP 和端口，才能进行直接连接。只需登录你的[ZAP-Hosting 控制面板](https://zap-hosting.com/en/customer/)，即可查看完整的 IP 和端口信息。

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

如果你是用外部独立服务器运行 V Rising，IP 就是主机的 IP，端口则是你在配置文件中设置的端口（默认是 9876）。更多端口相关信息，请参考我们的[服务器配置](vrising-configuration.md)指南。

### 游戏内连接

先从你的游戏启动器启动 V Rising。在主菜单中选择 **Play**，然后点击 **Online Play**。

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

选择你要玩的游戏模式，或者直接点击右下角的 **Show all Servers**，快速进入服务器浏览器。

接着点击底部的 **Direct Connect** 按钮，输入你的 IP 和端口，格式示例：`123.456.679.123:9876`。如果服务器设置了密码，连接后游戏会提示你输入。

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

如果连接失败并出现超时错误，请确认你输入的 IP 和端口是否正确，且服务器处于在线状态。你可以通过控制面板的控制台功能来帮助排查问题。

## 通过服务器列表连接

更简单的连接方式是通过服务器列表，但这要求你的服务器在配置中设置为公开。

请查看我们的[服务器配置](vrising-configuration.md)指南，确保在配置文件或控制面板中添加了合适的 `Name` 和 `ListOnMasterServer` 参数。

完成后，在主菜单选择 **Play**，然后点击 **Online Play**，再次点击右下角的 **Show all Servers**。现在你可以用服务器浏览器通过名称搜索、游戏模式、难度等多种筛选条件找到你的服务器。

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />