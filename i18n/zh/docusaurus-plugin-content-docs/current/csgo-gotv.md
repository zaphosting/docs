---
id: csgo-gotv
title: "CS:GO: GOTV"
description: "了解如何通过延迟直播和自动录制为观众转播游戏，随时重温比赛 → 立即了解更多"
sidebar_label: GOTV
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

GOTV 让你可以带有一点延迟地直播游戏。这意味着局外人也能观看服务器上的比赛进程。这个技术也被广泛应用于知名的反恐精英赛事中，让观众能实时欣赏比赛。此外，直播内容还能自动保存，方便你赛后回放。

<InlineVoucher />

## 启用

通过 **server.cfg** 配置文件启用 GOTV 服务。需要添加以下命令：

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```

## 配置

以上命令是必须的，用于激活并让 GOTV 主服务器可访问。下面还有一些进阶配置命令：

|            命令             |                         说明                         |
| :------------------------: | :--------------------------------------------------: |
|  tv_allow_camera_man "0\|1" |        允许观众切换为摄像师视角        |
| tv_allow_static_shots "0\|1" |    使用固定方向摄像机拍摄    |
|     tv_autorecord "0\|1"    | 自动录制所有比赛为 GOTV 演示文件。文件格式为 auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"     | 网络超时后尝试重新连接 |
| tv_chattimelimit "seconds"  | 限制观众发言间隔，单位秒 |
|       tv_debug "0\|1"       |             显示 GOTV 调试信息             |
|   tv_delaymapchange "0\|1"  | 延迟地图切换，直到传输完成 |
|      tv_maxclients "n"      |          GOTV 服务器最大客户端数          |
|        tv_maxrate "n"       | GOTV 观众最大带宽限制，0 表示无限制 |
|        tv_msg "text"        |           向所有观众发送消息           |
|        tv_name "name"       | GOTV 主机名，定义服务器浏览器和状态栏中显示的名称 |
|       tv_nochat "0\|1"      |           启用/禁用 GOTV 聊天           |
|    tv_password "password"   |       为 GOTV 直播设置密码保护       |
|     tv_record "filename"    |             开始录制 GOTV 演示             |
|           tv_stop           |                 停止 GOTV 直播                 |
|        tv_stoprecord        |            停止录制 GOTV 演示             |
|           tv_title          |           定义 GOTV 直播的标题           |

## 连接方式

启用该功能后，可以通过服务器的 IP 地址和分配的 GOTV 端口访问。连接时需要打开游戏控制台，使用以下命令连接：

```
connect SERVERIP:27020
```

手动和自动录制的演示文件存储在 CS:GO 服务器主目录下的 /gxxxxx/CS:GO/game/csgo 文件夹中。你可以通过提供的 FTP 访问下载这些文件。如果你还不熟悉 FTP 访问，可以参考这篇教程：[通过 FTP 访问](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/w9b4Z7ECoSkSQdT/preview)

通过游戏内的演示回放功能，选择 **Load** 加载下载的演示文件，然后点击 **Play** 播放。

<InlineVoucher />