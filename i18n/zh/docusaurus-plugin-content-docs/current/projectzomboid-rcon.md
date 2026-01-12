---
id: projectzomboid-rcon
title: "Project Zomboid：RCON"
description: "了解如何安全地远程管理和控制 Project Zomboid 服务器，无需游戏内访问 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许访问服务器控制台，而无需直接操作服务器环境。这样就可以执行管理命令、调整配置参数或获取服务器状态信息。

在 Project Zomboid 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口运行，可通过兼容的 RCON 客户端访问。

RCON 的一个关键优势是，它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Project Zomboid，提供了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。操作步骤是在游戏服务器管理面板的 **Configs** 中编辑配置文件。在名为 `servertest.ini` 的文件中，需添加或修改以下条目：

```cfg
RCONPort=XXXXX
RCONPassword=define-your-password
```
分配的 RCON 端口可以在设置页面底部的端口概览中找到，必须在那里指定。

## 通过 RCON 连接

要通过 RCON 连接 Project Zomboid 服务器，使用命令行工具 **rcon-cli**。该工具可从官方 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载。下载并安装到电脑后，可以使用服务器的 IP 地址、RCON 端口和 RCON 密码建立连接。

分配的端口可在游戏服务器管理面板设置页面底部的 **端口概览** 中找到。密码和端口必须与面板或配置文件中配置的值一致。使用以下命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

## RCON 命令

连接成功后，可以在 Project Zomboid 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                             | 说明                                   |
| -------------------------------- | -------------------------------------- |
| `/grantadmin <username>`         | 授予玩家管理员权限                      |
| `/removeadmin <username>`        | 撤销玩家管理员权限                      |
| `/save`                          | 手动保存游戏世界                        |
| `/kickuser <username>`           | 踢出玩家                               |
| `/banuser <username>`            | 封禁玩家                               |
| `/unbanuser <username>`          | 解除玩家封禁                           |
| `/adduser <username> <password>` | 创建带密码的新用户                      |
| `/godmod <username>`             | 切换指定玩家的上帝模式                  |
| `/teleport <Name1> <Name2>`      | 将 Name1 传送到 Name2                   |
| `/chopper`                       | 模拟直升机飞过                         |

## 总结

RCON 是远程管理 Project Zomboid 游戏服务器的核心工具。它提供快速、直接的管理功能访问，同时通过密码认证实现访问控制。正确且安全的配置对于保证服务器稳定和防止未授权访问至关重要。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />