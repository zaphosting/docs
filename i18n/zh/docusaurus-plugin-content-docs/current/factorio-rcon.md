---
id: factorio-rcon
title: "Factorio: RCON"
description: "了解如何远程管理和控制你的 Factorio 服务器，实现高效的管理和游戏调整 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许你无需直接操作服务器环境，就能访问服务器控制台。这样你就可以执行管理命令、调整配置参数，或者获取服务器状态信息。

在 Factorio 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置，或者访问诊断输出。连接通过密码保护，并在指定端口上运行，可以通过兼容的 RCON 客户端访问。

RCON 的一个重要优势是，它让你**无需以玩家身份连接游戏**就能管理服务器。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Factorio，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。这可以直接在游戏服务器管理后台完成。在**设置**栏目下，有一个名为**RCON**的选项，必须开启。请设置一个安全的密码。

分配的 RCON 端口可以在设置页面底部的**端口概览**中找到。



## 通过 RCON 连接

要通过 RCON 连接 Factorio 服务器，可以使用命令行工具 **rcon-cli**。你可以从官方的 [GitHub 仓库](https://github.com/gorcon/rcon-cli) 下载它。下载并安装到你的电脑后，就可以使用服务器的 IP 地址、RCON 端口和密码建立连接。

分配的端口同样在游戏服务器管理后台设置页面底部的**端口概览**中。密码和端口必须与面板或配置文件中设置的值一致。使用下面的命令连接并直接执行命令：

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON 命令

连接成功后，你可以在 Factorio 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                            | 说明                                                   |
|--------------------------------|--------------------------------------------------------|
| `/help`                        | 显示所有可用命令                                       |
| `/players`                     | 列出所有已连接的玩家                                   |
| `/kick <player>`               | 将指定玩家踢出服务器                                   |
| `/ban <player>`                | 永久封禁指定玩家                                       |
| `/unban <player>`              | 解除对之前封禁玩家的封禁                               |
| `/admins`                      | 显示服务器管理员列表                                   |
| `/promote <player>`            | 授予玩家管理员权限                                     |
| `/demote <player>`             | 撤销玩家的管理员权限                                   |
| `/save`                       | 保存当前世界状态                                       |
| `/server-save`                | 触发一次手动服务器保存                                 |



## 总结

RCON 是远程管理 Factorio 游戏服务器的核心工具。它提供快速、直接的管理功能访问，同时通过密码认证保障访问安全。正确且安全的配置对于确保服务器稳定运行和防止未授权访问至关重要。

如果你有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />