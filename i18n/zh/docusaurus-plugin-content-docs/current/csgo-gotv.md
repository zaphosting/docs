---
id: csgo-gotv
title: "CSGO：关于 GOTV 的信息"
description: "了解 GOTV 如何实现游戏直播和回放录制，提升 CS:GO 及类似游戏的观赛体验 → 立即了解更多"
sidebar_label: GOTV
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning Archived Guide
本文档已归档。文档归档通常是因为内容不再相关、错误或过时。归档原因如下：

原因：CS:GO 已不再主动提供且停止开发，CS2 是 CS:GO 的继任版本。我们建议切换到 CS2。
::::



## 什么是 GOTV？


GOTV 允许以轻微延迟的方式进行游戏直播。这意味着未参与游戏的外部观众也能实时跟踪服务器上的比赛进程。这项技术也被广泛应用于知名的反恐精英赛事中，让观众能够观看比赛盛况。此外，直播内容还能自动保存，方便之后回放观看。

![](https://screensaver01.zap-hosting.com/index.php/s/qcewrMDCF2nzyie/preview)

<InlineVoucher />

## 如何使用 GOTV？

只要服务器上启用了该功能，就可以通过服务器的 IP 地址和分配的 GOTV 端口进行访问。连接时需要在游戏内打开控制台，使用以下命令连接：

```
connect SERVERIP:27020
```


手动和自动录制的回放文件（demo）会保存在 CS:GO 服务器的主目录（gxxxxx / csgo / csgo /）中。你可以通过提供的 FTP 访问下载这些文件。如果你还不熟悉 FTP 访问，可以参考这篇教程：[通过 FTP 访问](gameserver-ftpaccess.md)。


![](https://screensaver01.zap-hosting.com/index.php/s/enbMKLwNaeqdzxm/preview)



在游戏内的回放功能中，可以通过 **Load** 选择已下载的 demo，然后点击 **Play** 按钮开始播放。



## 安装 GOTV 主服务器

要激活 GOTV 主服务器，需要在 **server.cfg** 文件中添加以下命令：

```
tv_enable 1
tv_delay 90
tv_advertise_watchable 1
```



以上命令是激活并使 GOTV 主服务器可访问的必备配置。除此之外，还有一些高级配置命令，具体如下：

|            命令            |                         说明                         |
| :-----------------------: | :--------------------------------------------------: |
|  tv_allow_camera_man "0\|1"  |        允许观众切换为摄像师视角        |
| tv_allow_static_shots "0\|1" |    使用固定方向摄像机进行拍摄    |
|     tv_autorecord "0\|1"     | 自动录制所有比赛为 GOTV demo，录制文件格式为 auto-YYYYYMMDD-hhmm-map.dem |
|     tv_autoretry "0\|1"      | 网络超时后自动尝试重新连接 |
| tv_chattimelimit "seconds"  | 限制观众发言间隔，单位为秒 |
|       tv_debug "0\|1"        |             显示 GOTV 调试信息             |
|   tv_delaymapchange "0\|1"   | 延迟地图切换，直到传输完成 |
|      tv_maxclients "n"       |          GOTV 服务器最大客户端数量           |
|        tv_maxrate "n"        | GOTV 观众最大带宽限制，0 表示无限制 |
|        tv_msg "text"         |           向所有观众发送消息           |
|        tv_name "name"        | GOTV 主机名，定义在服务器浏览器和状态栏中显示的名称 |
|       tv_nochat "0\|1"       |           启用/禁用 GOTV 聊天           |
|    tv_password "password"    |       为 GOTV 直播设置密码保护        |
|     tv_record "filename"     |             开始录制 GOTV demo             |
|           tv_stop            |                 停止 GOTV 直播                  |
|        tv_stoprecord         |            停止录制 GOTV demo              |
|           tv_title           |           定义 GOTV 直播的标题           |

<InlineVoucher />