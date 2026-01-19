---
id: vrising-rcon
title: "V Rising：RCON"
description: "了解如何高效远程管理和控制 V Rising 服务器，无需游戏内连接 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许你无需直接操作服务器环境即可访问服务器控制台。这样就能执行管理命令、调整配置参数或获取服务器状态信息。

在 V Rising 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或查看诊断输出。连接通过密码保护，并在指定端口上运行，可通过兼容的 RCON 客户端访问。

RCON 的一个关键优势是它允许你**无需以玩家身份连接游戏**即可管理服务器。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 V Rising，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。你需要在游戏服务器管理面板的 **Configs** 目录下编辑配置文件。在名为 `ServerHostSettings.json` 的文件中，添加或修改以下条目：

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

分配的 RCON 端口可以在设置页面底部的端口概览中找到，必须在那里填写正确的端口号。



## 通过 RCON 连接

连接 V Rising 服务器的 RCON，通常使用命令行工具 **rcon-cli**。你可以从官方的 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载。下载并安装后，使用服务器的 IP 地址、RCON 端口和密码即可建立连接。

分配的端口号在游戏服务器管理面板设置页面底部的 **端口概览** 中查看。密码和端口必须与面板或配置文件中设置的值一致。使用以下命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON 命令

连接成功后，你可以在 V Rising 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                                      | 说明                                                         |
|-------------------------------------------|--------------------------------------------------------------|
| `adminauth`                               | 为你的角色开启管理员权限（仅限游戏内）                       |
| `admindeauth`                             | 关闭管理员权限                                               |
| `banuser <SteamID>`                       | 永久封禁指定玩家                                             |
| `unbanuser <SteamID>`                     | 解除之前封禁的玩家                                           |
| `kick <playername>`                       | 立即将玩家踢出服务器                                        |
| `give <ItemName> <Amount>`                | 直接给予你指定数量的物品                                     |
| `teleport <X> <Y>`                        | 将你的角色传送到指定坐标                                     |
| `teleportplayer <name> <X> <Y>`           | 将其他玩家传送到指定坐标                                     |
| `changehealth <value>`                    | 设置你当前的生命值                                           |
| `spawn <EntityName> <Amount>`             | 生成 NPC、生物或其他实体                                     |



## 总结

RCON 是远程管理 V Rising 游戏服务器的核心工具。它提供快速、直接的管理功能访问，并通过密码认证保障访问安全。正确且安全的配置对于确保服务器稳定运行和防止未授权访问至关重要。

如果你有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />