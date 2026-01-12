---
id: gmod-rcon
title: "Garry's Mod：RCON"
description: "了解如何安全高效地远程管理 Garry's Mod 服务器，无需进入游戏 → 立即了解"
sidebar_label: RCON
services:
  - gameserver-gmod
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许你无需直接操作服务器环境即可访问服务器控制台，从而执行管理命令、调整配置参数或获取服务器状态信息。

在 Garry's Mod 中，RCON 用于执行服务器端命令，比如管理玩家、更改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口进行访问，支持兼容的 RCON 客户端连接。

RCON 的一个关键优势是它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Garry's Mod，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。你可以在游戏服务器管理面板的 **Configs** 里编辑配置文件。打开名为 `server.cfg` 的文件，添加或修改以下内容：

```cfg
rcon_password "定义你的密码"
```


## 通过 RCON 连接

连接 Garry's Mod 服务器的 RCON，通常使用命令行工具 **rcon-cli**。你可以从官方的 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载。下载并安装后，使用服务器的 IP 地址、RCON 端口和密码即可建立连接。

分配的端口可以在游戏服务器管理面板设置页底部的 **端口概览** 中找到。密码和端口必须与面板或配置文件中设置的保持一致。使用下面的命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON 命令

连接成功后，你可以在 Garry's Mod 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                         | 说明                                         |
| ---------------------------- | -------------------------------------------- |
| `rcon_password <password>`   | RCON 访问认证                                |
| `status`                     | 显示服务器和玩家信息                         |
| `changelevel <mapname>`      | 切换到指定地图                               |
| `mp_timelimit <min>`         | 设置地图时间限制（分钟）                     |
| `mp_roundtime <min>`         | 设置回合时长（分钟）                         |
| `sv_cheats 0/1`              | 启用/禁用作弊命令（仅限管理员）              |
| `kick <playername>`          | 踢出指定玩家                                 |
| `banid <duration> <SteamID>` | 禁止指定玩家一段时间                          |
| `exec <file.cfg>`            | 执行配置文件                                 |
| `say <message>`              | 向所有玩家广播消息                           |


## 总结

RCON 是远程管理 Garry's Mod 服务器的核心工具。它提供快速、直接的管理功能访问，同时通过密码认证保障访问安全。合理且安全的配置对于保证服务器稳定运行和防止未授权访问至关重要。

如果你有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />