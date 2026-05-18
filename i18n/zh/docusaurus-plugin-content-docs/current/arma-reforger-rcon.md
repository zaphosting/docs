---
id: arma-reforger-rcon
title: "Arma Reforger：RCON"
description: "了解如何安全远程管理和控制 Arma Reforger 服务器，实现灵活的管理和监控 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许无需直接操作服务器环境即可访问服务器控制台，从而可以执行管理命令、调整配置参数或获取服务器状态信息。

在 Arma Reforger 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口进行，支持兼容的 RCON 客户端访问。

RCON 的一个重要优势是它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 Arma Reforger，极大提升了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。操作步骤是在游戏服务器管理面板的 **Configs** 目录下编辑配置文件。在名为 `BEServer_x64.cfg` 的文件中，需添加或修改以下条目：

```cfg
RConPort XXXXX
RConPassword define-your-password
```
分配的 RCON 端口可以在设置页面底部的端口概览中找到，必须在那里填写对应端口号。



## 通过 RCON 连接

连接 Arma Reforger 服务器的 RCON 推荐使用工具 **BattleWarden**，可从其[官网](https://www.battlewarden.net)下载。下载并安装后，需要新建一个连接配置，填写以下信息：

- 服务器 IP 地址  
- RCON 端口  
- RCON 密码

连接成功后，即可通过图形界面执行 RCON 命令。该工具还提供玩家列表、实时聊天和命令历史等附加功能，具体取决于游戏的集成支持。

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON 命令

通过 RCON 连接后，可以在 Arma Reforger 服务器上执行各种管理和诊断命令。可用命令依赖于游戏引擎，通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                         | 说明                                        |
|------------------------------|---------------------------------------------|
| `#login <password>`           | 以服务器管理员身份登录                      |
| `#logout`                    | 退出管理员身份                              |
| `#mission <missionName>`     | 启动服务器上的新任务                        |
| `#missions`                  | 列出可选任务                                |
| `#restart`                   | 重启当前任务                                |
| `#reassign`                  | 将所有玩家重新分配到角色                    |
| `#kick <playerID>`           | 踢出玩家                                    |
| `#exec ban <playerID>`       | 封禁玩家                                    |
| `#exec unban <playerID>`     | 解除玩家封禁                                |
| `#shutdown`                  | 关闭服务器                                  |



## 总结

RCON 是远程管理 Arma Reforger 游戏服务器的核心工具。它提供快速、直接的管理功能访问，并通过密码认证保障访问安全。合理且安全的配置对于确保服务器稳定运行和防止未授权访问至关重要。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />