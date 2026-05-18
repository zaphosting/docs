---
id: avorion-becomeadmin
title: "Avorion：如何成为自己服务器的管理员"
description: "了解如何赋予管理员权限，实现对服务器的全面控制，轻松管理游戏功能 → 立即了解"
sidebar_label: 成为管理员
services:
  - gameserver-avorion
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
赋予管理员权限让你可以轻松全面地管理服务器，拥有完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有选项和功能。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

## 配置

添加管理员是在网页后台的设置页面完成的。点击 **游戏服务器管理** 中的 **设置**，然后向下滚动到 **服务器设置**。

![](https://screensaver01.zap-hosting.com/index.php/s/gzei7sWedJMrqzc/preview)

在这里，你会看到一个名为 **Admin SteamIDs** 的字段。你需要在这里输入你的 SteamID64。获取 SteamID64 的方法是先打开你的 Steam 个人资料页面，然后在页面任意位置右键点击，选择 **复制 Steam URL**。

![](https://screensaver01.zap-hosting.com/index.php/s/q7E3qSd9GoLCswM/preview)

接着打开以下任意一个网站，将你的个人资料链接粘贴进去：

- https://steamrep.com/
- https://steamidfinder.com/
- https://steamid.io/

这些网站会显示你的账户信息以及 Steam ID。我们这里只需要 SteamID64，把它填入对应字段即可。示例如下：

![](https://screensaver01.zap-hosting.com/index.php/s/qakTq9iLW72jkyC/preview)

点击 **保存**。重启服务器后，你就可以在游戏内执行管理员命令了。按 Enter 打开聊天框，输入以 / 开头的命令即可。

## 管理员命令

下面是一些常用的管理员命令汇总。

**通用命令**

| 命令                      | 说明                                  |
| :------------------------ | :----------------------------------- |
| /help                    | 显示帮助信息                         |
| /w [玩家名]              | 发送私聊消息给指定玩家               |
| /save                    | 保存当前游戏状态                     |
| /stop                    | 停止服务器                           |
| /seed                    | 显示服务器种子                       |
| /version                 | 显示当前服务器版本                   |
| /suicide                 | 摧毁你当前的飞船                     |
| /player                  | 显示当前在线玩家数量                 |
| /status                  | 显示服务器当前状态信息               |
| /admin -a [玩家名]       | 添加玩家为管理员                     |
| /admin -r [玩家名]       | 移除玩家管理员权限                   |
| /kick [玩家名]           | 踢出指定玩家                         |
| /ban [玩家名]            | 将玩家加入黑名单                     |
| /unban [玩家名]          | 从黑名单中移除玩家                   |
| /banip [玩家IP]          | 将指定IP加入黑名单                   |
| /unbanip [玩家IP]        | 从黑名单中移除指定IP                 |
| /blacklist               | 显示黑名单相关选项                   |
| /whitelist               | 显示白名单相关选项                   |

**作弊命令（游戏内）：**

| 命令                                   | 说明                                  |
| :------------------------------------ | :----------------------------------- |
| /give [玩家名] [数量] credits          | 给指定玩家一定数量的游戏币           |
| /give [玩家名] [数量] [矿石名称]       | 给指定玩家一定数量的指定矿石         |

**服务器命令（控制台）：**

| 命令                              | 说明                                                                 |
| :-------------------------------- | :------------------------------------------------------------------- |
| /max-logs [数值]                  | 保留的日志文件数量                                                   |
| /difficulty [数值]                | 服务器难度，允许值：-3, -2, -1, 0, 1, 2, 3，默认：0                 |
| /collision-damage [数值]          | 碰撞时对物体造成的伤害，范围0到1，0为无伤害，1为全伤害，默认1       |
| /exit-on-last-admin-logout       | 最后一个管理员登出时关闭服务器                                      |
| /public [数值]                   | 是否允许其他玩家加入服务器                                           |
| /infinite-resources [数值]       | 是否为所有玩家开启无限资源                                           |
| /listed [数值]                   | 是否在公共服务器列表中显示                                           |
| /max-players [数值]              | 最大在线玩家数，默认10                                               |
| /save-interval [数值]            | 自动保存间隔时间，默认300秒                                          |
| /same-start-sector arg           | 是否所有玩家从同一星区开始                                           |
| /server-name [数值]              | 服务器名称，查询时显示                                               |
| /use-steam-networking [数值]     | 是否使用 Steam 网络和认证                                            |
| /galaxy-name [数值]              | 银河名称，会附加到数据路径，最终路径为 [datapath]/[galaxyname]       |
| /datapath [数值]                 | 银河存储文件夹，会加在银河名称前面                                   |
| /admin [数值]                   | 服务器管理员的 Steam ID(s)                                           |

## 结语

恭喜你，管理员权限配置完成！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />