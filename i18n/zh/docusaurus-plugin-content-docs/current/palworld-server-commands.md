---
id: palworld-server-commands
title: "Palworld：Palworld 服务器命令"
description: "了解如何使用内置命令高效管理 Palworld 服务器，实现管理员控制和游戏玩法 → 立即了解更多"
sidebar_label: 服务器命令
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
Palworld 服务器都自带一套实用的内置服务器命令，可以在游戏内和服务器控制台中使用。本指南将带你深入了解这些命令，提供详细说明和使用示例。

<YouTube videoId="SDZC4-FEdNM" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/85ennn4gSYBPNYo/preview" title="一分钟快速搭建你的 PALWORLD 服务器！" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定一切。不管你是赶时间还是喜欢用最酷的方式吸收信息，这里都有你想要的！"/>

<InlineVoucher />

## 设置管理员

你必须先为你的 Palworld 服务器设置管理员密码，并在游戏内将自己添加为管理员，才能使用下一节中的管理员服务器命令。

你可以通过服务器网页界面的 **设置** 标签页，或者编辑 **PalWorldSettings.ini** 配置文件来设置管理员密码。设置完成后，可以在游戏内使用 `/AdminPassword [密码]` 命令将自己添加为管理员。

:::tip
强烈建议你查看我们的[管理员设置](palworld-admin.md)专门指南，里面有更详细的步骤和说明，帮你轻松设置管理员密码并添加管理员用户。
:::

## 可用命令

下表列出了 Palworld 的一系列服务器命令，包含使用示例和说明，这些命令可在游戏内和服务器控制台中使用。

当需要 `steamid` 参数时，可以通过在玩家列表中双击右键轻松复制玩家的 SteamID。

:::info
你必须先设置管理员密码，并通过 `/AdminPassword` 命令授权自己权限，才能使用这些命令。否则会收到权限错误。请阅读本指南下一节了解具体操作。
:::

| 命令语法                      | 接受参数        | 说明                                                                   | 
| ----------------------------- | --------------- | ---------------------------------------------------------------------- | 
| /Shutdown [秒数] [消息]        | 整数，字符串    | 在指定秒数后关闭服务器，并发送包含的消息                             | 
| /DoExit                       | -               | 强制停止服务器                                                       | 
| /Broadcast                    | 字符串          | 向当前所有在线玩家发送消息                                           | 
| /KickPlayer [steamid]         | 字符串          | 将目标玩家踢出服务器                                                 | 
| /BanPlayer [steamid]          | 字符串          | 将目标玩家封禁，禁止进入服务器                                       | 
| /TeleportToPlayer [steamid]   | 字符串          | 传送到目标玩家所在位置                                               | 
| /TeleportToMe [steamid]       | 字符串          | 将目标玩家传送到你所在位置                                           | 
| /ShowPlayers                  | -               | 显示所有当前在线玩家的信息                                           | 
| /Info                         | -               | 显示服务器信息                                                       | 
| /Save                         | -               | 保存当前世界数据                                                     |

:::note
目前游戏内没有解封玩家的命令。如果想解封玩家，需要手动编辑服务器目录下的 `banlist.txt` 文件。
:::

<InlineVoucher />