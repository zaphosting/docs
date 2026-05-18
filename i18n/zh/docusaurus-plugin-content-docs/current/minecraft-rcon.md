---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "了解如何通过 RCON 远程管理 Minecraft 服务器，实现灵活、安全的控制和高效的服务器管理 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许你无需直接操作服务器环境，就能访问服务器控制台。这意味着你可以执行管理命令、调整配置参数或获取服务器状态信息。

在 Minecraft 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或查看诊断信息。连接通过密码保护，并通过指定端口进行访问，需使用兼容的 RCON 客户端。

RCON 的一个重要优势是，它让你**无需以玩家身份登录游戏**就能管理服务器。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Minecraft，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。这可以直接在游戏服务器管理面板中完成。在**设置**栏目下，有一个名为 **RCON** 的选项，必须开启。然后设置一个安全密码，并指定一个有效端口。具体操作是在游戏服务器管理面板的**配置文件**（Configs）中编辑 `server.properties` 文件，添加或修改以下内容：

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<define-your-password>
```
分配的 RCON 端口可以在设置页面底部的端口概览中找到，必须填写正确。

## 通过 RCON 连接

要通过 RCON 连接 Minecraft 服务器，可以使用命令行工具 **rcon-cli**。该工具可从官方 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载。下载并安装后，使用服务器 IP 地址、RCON 端口和密码即可建立连接。

分配的端口在游戏服务器管理面板设置页面底部的**端口概览**中查看。密码和端口必须与面板或配置文件中设置的保持一致。使用以下命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

## RCON 命令

连接成功后，可以在 Minecraft 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                   | 说明                                     |
|------------------------|------------------------------------------|
| `list`                 | 列出当前在线玩家                         |
| `say <message>`        | 向所有玩家广播消息                       |
| `kick <player>`        | 踢出指定玩家                            |
| `ban <player>`         | 封禁指定玩家                            |
| `pardon <player>`      | 解除玩家封禁                            |
| `op <player>`          | 授予玩家管理员权限                      |
| `deop <player>`        | 撤销玩家管理员权限                      |
| `time set <value>`     | 设置世界时间（如白天、夜晚或具体数字）  |
| `gamemode <mode> <player>` | 设置玩家的游戏模式                   |
| `weather <clear/rain/thunder>` | 更改天气状况                    |
| `stop`                 | 优雅地关闭服务器                        |

## 总结

RCON 是远程管理 Minecraft 服务器的核心工具。它提供快速、直接的管理功能访问，同时通过密码认证保障访问安全。正确且安全的配置对于保证服务器稳定运行和防止未授权访问至关重要。

如果你有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />