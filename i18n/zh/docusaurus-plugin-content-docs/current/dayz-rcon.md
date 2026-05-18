---
id: dayz-rcon
title: "DayZ: RCON"
description: "了解如何高效远程管理和控制 DayZ 游戏服务器，无需游戏内连接 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许访问服务器控制台，而无需直接操作服务器环境。这样就可以执行管理命令、调整配置参数或获取服务器状态信息。

在 DayZ 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口运行，可通过兼容的 RCON 客户端访问。

RCON 的一个关键优势是它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 DayZ，极大提升远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。这可以直接在游戏服务器管理后台完成。在**设置**栏目下，有一个名为**RCON**的选项，必须激活。请设置一个安全的密码。

分配的 RCON 端口可以在设置页面底部的**端口概览**中找到。



## 通过 RCON 连接

要通过 RCON 连接 DayZ 服务器，使用的工具是 **BattleWarden**。你可以从[官网](https://www.battlewarden.net)下载。下载并安装到电脑后，需要创建一个新的连接配置，填写以下信息：

- 服务器 IP 地址  
- RCON 端口  
- RCON 密码

连接成功后，可以通过图形界面执行 RCON 命令。该工具还提供玩家列表、实时聊天和命令历史等附加功能，具体取决于游戏的集成情况。

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON 命令

通过 RCON 连接后，可以在 DayZ 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                         | 说明                                          |
|------------------------------|-----------------------------------------------|
| `#login <password>`           | 以 RCON 管理员身份登录                         |
| `#logout`                    | 结束管理员会话                                |
| `#kick <playerName>`          | 踢出服务器中的玩家                            |
| `#ban <playerName>`           | 永久封禁玩家                                  |
| `#exec ban <playerID>`        | 通过 Steam64ID（BattlEye）封禁玩家           |
| `#exec unban <playerID>`      | 解除之前封禁的玩家                            |
| `#shutdown`                   | 关闭服务器                                  |
| `#monitor <seconds>`          | 每隔 x 秒显示性能数据                         |
| `#lock`                      | 锁定服务器，禁止新连接                        |
| `#unlock`                    | 解锁服务器，允许新连接                        |




## 总结

RCON 是远程管理 DayZ 游戏服务器的核心工具。它提供快速、直接的管理功能访问，同时通过密码认证实现访问控制。正确且安全的配置对于保证服务器稳定和防止未授权访问至关重要。

如果你有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />