---
id: cs2-cstv
title: "CS2: CSTV "
description: "了解如何通过延迟直播和自动录制为观众转播游戏实况，随时重温比赛 → 立即了解更多"
sidebar_label: CSTV
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

CSTV 提供了带有少量延迟的游戏直播功能。这意味着未参与游戏的外部观众也能实时跟踪服务器上的动态。这项技术同样被广泛应用于知名的反恐精英赛事中，让观众能够观看精彩比赛。此外，直播内容还能自动保存，方便你赛后回放。

<InlineVoucher />

## 启用

CSTV 服务的启用通过 **server.cfg** 配置文件完成。需要在其中添加以下命令：

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## 配置

以上命令是激活并开放 CSTV 主服务器的必备配置。除此之外，还有以下高级配置命令：

|            命令            |                         说明                         |
| :-----------------------: | :--------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        允许观众切换为摄像师视角        |
| tv_allow_static_shots "0\|1" |    使用固定方向摄像机拍摄    |
|     tv_autorecord "0\|1"     | 自动录制所有游戏为 CSTV 演示文件。录制文件格式为 auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | 网络超时后自动重连 |
| tv_chattimelimit "seconds"  | 限制观众发言间隔，单位为秒 |
|       tv_debug "0\|1"        |             显示 CSTV 调试信息             |
|   tv_delaymapchange "0\|1"   | 延迟换图，直到传输完成 |
|      tv_maxclients "n"       |          CSTV 服务器最大客户端数量          |
|        tv_maxrate "n"        | 最大允许的 CSTV 观众带宽，0 表示无限制 |
|        tv_msg "text"         |           向所有观众发送消息           |
|        tv_name "name"        | CSTV 主机名。定义服务器浏览器和状态栏中显示的 CSTV 名称 |
|       tv_nochat "0\|1"       |           启用/禁用 CSTV 聊天           |
|    tv_password "password"    |       为 CSTV 直播设置密码保护       |
|     tv_record "filename"     |             开始录制 CSTV 演示             |
|           tv_stop            |                 停止 CSTV 直播                 |
|        tv_stoprecord         |            停止录制 CSTV 演示             |
|           tv_title           |           定义 CSTV 直播的标题           |

## 建立连接

如果服务器启用了该功能，可以通过服务器的 IP 地址和分配的 CSTV 端口进行访问。连接时需要在游戏控制台输入以下命令：

```
connect SERVERIP:27020
```

手动和自动录制的演示文件存储在 CS:GO 服务器的主目录 /gxxxxx/cs2/game/csgo 中。你可以通过提供的 FTP 访问下载这些文件。如果你还不熟悉 FTP 访问方式，可以参考这里的教程：[通过 FTP 访问](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

通过游戏内的演示回放功能，可以选择 **加载** 下载的演示文件，并点击 **播放** 按钮开始观看。

<InlineVoucher />