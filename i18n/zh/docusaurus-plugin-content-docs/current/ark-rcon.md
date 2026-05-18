---
id: ark-rcon
title: "ARK: 生存进化：RCON"
description: "了解如何安全地远程管理和控制 ARK: 生存进化 服务器，无需进入游戏 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

RCON（远程控制台）是一种用于远程控制游戏服务器的网络协议。它允许访问服务器控制台，而无需直接操作服务器环境。这样就可以执行管理命令、调整配置参数或获取服务器状态信息。

在 ARK: 生存进化 中，RCON 用于执行服务器端命令，比如管理玩家、修改游戏设置或访问诊断输出。连接通过密码保护，并通过指定端口运行，可通过兼容的 RCON 客户端访问。

RCON 的一个关键优势是它允许服务器管理**无需以玩家身份连接游戏**。服务器管理员可以通过外部工具、命令行界面或网页面板监控和控制 ARK: 生存进化，提供了远程操作的灵活性和便利性。

<InlineVoucher />

## 配置

在使用 RCON 之前，必须先启用并配置它。操作步骤是在游戏服务器管理面板的 **Configs** 中编辑配置文件。在名为 `GameUserSettings.ini` 的文件中，必须添加或修改以下条目：

```cfg
[ServerSettings]
RCONEnabled=True
ServerAdminPassword=define-your-password
```
分配的 RCON 端口可以在设置页面底部的端口概览中找到，必须在那里指定。



## 通过 RCON 连接

要通过 RCON 连接 ARK: 生存进化 服务器，使用工具 **ARKon**。该工具可从此 [Steam 讨论区]([Steam thread](https://steamcommunity.com/app/346110/discussions/2/3417684283223117680/)) 下载。下载并安装到电脑后，需要新建一个服务器条目，填写以下信息：

- 服务器 IP 地址  
- RCON 端口
- RCON 密码 

保存连接配置后，即可从列表中选择服务器并建立连接。连接成功后，可以通过图形界面执行 RCON 命令。ARKon 还提供了专为 ARK: 生存进化 设计的额外功能，比如：

- 实时玩家列表和在线状态  
- 游戏内聊天监控与互动  
- 常用管理员命令的快捷按钮  
- RCON 输出和命令历史的日志记录



## RCON 命令

通过 RCON 连接后，可以在 ARK: 生存进化 服务器上执行各种管理和诊断命令。可用命令取决于游戏引擎，但通常包括玩家管理、状态查询和服务器控制等操作。

| 命令                            | 说明                                           |
|--------------------------------|------------------------------------------------|
| `EnableCheats <password>`       | 启用服务器管理员模式（管理员命令）             |
| `AdminCheat KickPlayer <Steam64ID>` | 踢出玩家                                   |
| `AdminCheat BanPlayer <Steam64ID>`  | 封禁玩家                                    |
| `AdminCheat UnbanPlayer <playerName>` | 解除玩家封禁                               |
| `AdminCheat Broadcast <message>`   | 向所有玩家发送广播消息                        |
| `AdminCheat SaveWorld`          | 保存当前世界状态                              |
| `AdminCheat SetTimeOfDay <hh:mm>` | 设置游戏内时间                               |
| `AdminCheat TeleportPlayerIDToMe <playerID>` | 传送玩家到你位置                      |
| `cheat Slomo <factor>`          | 调整游戏速度                                  |
| `AdminCheat GiveItemNum <ItemID> <quantity> <quality> 0` | 生成物品到你的背包               |




## 总结

RCON 是远程管理 ARK: 生存进化 游戏服务器的核心工具。它提供快速、直接的管理功能访问，同时通过密码认证实现访问控制。正确且安全的配置对于保证服务器稳定和防止未授权访问至关重要。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />