---
id: gameserver-server-down-what-now
title: '游戏服务器：服务器宕机 - 现在怎么办？'
description: "通过分析日志文件诊断游戏服务器崩溃，找出错误并找到有效解决方案 → 立即了解更多"
sidebar_label: 服务器崩溃 - 该怎么办？
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

如果你的游戏服务器宕机了，可能有很多原因。**重要的是不要直接重启服务器，而是先查看日志文件。通常日志里会有**错误信息**，说明服务器崩溃的具体原因。**如果你直接重启服务器，日志会被重新生成，旧日志会被删除。这样你就看不到之前的错误了。**

<InlineVoucher />

## 查看日志文件

你可以通过左侧菜单轻松访问日志文件。

![](https://screensaver01.zap-hosting.com/index.php/s/rTMjGQPGoijMCXQ/preview)

然后点击绿色的眼睛图标查看日志。**关键是一定要打开最新的日志，**
你可以通过日期或文件名来识别。

![](https://screensaver01.zap-hosting.com/index.php/s/Hc4cYQSj3c9Enpi/preview)

打开后，你需要检查里面的错误信息（**错误通常包含“Error”“Cant find”“Couldnt load”等关键词**）

下面的截图是一个Fivem服务器的例子，显示了错误的服务器许可证密钥。

![](https://screensaver01.zap-hosting.com/index.php/s/pAwzNkHZBTtHds9/preview)

你可以把这个错误信息复制到Google搜索，看看是否有相关的解决方案。通常你能很快找到错误原因。

如果找不到相关信息，可以去Live Chat，把错误信息以文字或截图形式发给客服。

## 日志文件没有内容

这种情况也会发生。如果日志文件是空的，可能是因为服务器直接宕机导致日志没生成，或者重启时日志被删除了。这种情况下，你只能尝试重启服务器，希望错误能再次出现，或者服务器能正常启动。

## Live Chat 没有解决方案

如果你在Google和Live Chat都没找到解决办法，有两种选择。第一是提交工单，保持服务器状态不变，让客服帮你深入排查。

第二种是恢复备份或者重装服务器。

### 方案一 - 恢复备份

恢复备份很简单，左侧点击“备份”，然后用绿色箭头导入最新备份。之后服务器应该能正常运行。

![](https://screensaver01.zap-hosting.com/index.php/s/j9C396QXtq8Pytx/preview)

### 方案二 - 重装服务器

重装可以在左侧“设置”里启动。重装后服务器会被重置到初始状态（你也可以选择“重置所有选项”来恢复默认设置）

![](https://screensaver01.zap-hosting.com/index.php/s/2edwoTrn3We67SB/preview)

## 重装后仍无效

这是最糟糕的情况。此时只能通过聊天或提交工单让客服帮你检查，因为这可能是更严重的问题。我们会尽最大努力尽快帮你解决，让你能正常使用服务器。

<InlineVoucher />