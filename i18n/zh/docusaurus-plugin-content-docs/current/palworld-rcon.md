---
id: palworld-rcon
title: "Palworld：RCON"
description: "了解如何远程管理 Palworld 服务器，实现灵活控制和监控，无需进入游戏 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许访问服务器控制台，而无需直接操作服务器环境。这样就可以执行管理命令、调整配置参数或获取服务器状态信息。

在 Palworld 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口运行，可通过兼容的 RCON 客户端访问。

RCON 的一个关键优势是它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Palworld，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。操作步骤是在游戏服务器管理面板的 **Configs** 中编辑配置文件。在名为 `PalWorldSettings.ini` 的文件中，需添加或修改以下条目：

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="define-your-password"
```
分配的 RCON 端口可在设置页面底部的端口概览中找到，必须填写正确端口号。



## 通过 RCON 连接

要通过 RCON 连接 Palworld 服务器，可以使用命令行工具 **rcon-cli**。该工具可从官方 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载。下载并安装后，使用服务器 IP 地址、RCON 端口和密码即可建立连接。

分配的端口号在游戏服务器管理面板设置页面底部的 **端口概览** 中查看。密码和端口必须与面板或配置文件中设置的值一致。使用以下命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON 命令

连接成功后，可以在 Palworld 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                                   | 说明                                                         |
|---------------------------------------|--------------------------------------------------------------|
| `/Shutdown <seconds> <message>`       | 服务器倒计时后关闭，并显示消息                                |
| `/DoExit`                             | 立即停止服务器                                               |
| `/Broadcast <message>`                | 向所有在线玩家发送消息                                       |
| `/KickPlayer <SteamID>`               | 通过 SteamID 踢出玩家                                        |
| `/BanPlayer <SteamID>`                | 永久封禁玩家                                                 |
| `/TeleportToPlayer <SteamID>`         | 传送自己到指定玩家位置                                       |
| `/TeleportToMe <SteamID>`             | 将指定玩家传送到自己位置                                     |
| `/ShowPlayers`                       | 列出当前所有在线玩家                                         |
| `/Info`                              | 显示服务器基本信息                                           |
| `/Save`                              | 手动保存游戏世界                                             |



## 总结

RCON 是远程管理 Palworld 游戏服务器的核心工具。它提供快速、直接的管理功能访问，并通过密码认证保障访问安全。正确且安全的配置对于保证服务器稳定运行和防止未授权访问至关重要。

如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />