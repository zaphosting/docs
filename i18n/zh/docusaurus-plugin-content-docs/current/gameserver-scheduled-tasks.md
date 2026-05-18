---
id: gameserver-scheduled-tasks
title: "游戏服务器：定时任务（Cron）"
description: "了解如何通过定时任务自动化服务器流程，实现备份、服务管理和命令执行 → 立即了解更多"
sidebar_label: 定时任务
services:
  - webspace
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

创建定时任务，按预设时间自动执行。这让你可以自动化服务器上的各种流程。你可以指定任务是只执行一次还是重复执行。



## 任务类型

定时任务支持执行多种类型的任务。目前支持以下任务类型：

- 启动服务
- 停止服务
- 重启服务
- 重启服务器（仅限在线时）
- 创建备份
- 执行命令

这些预设类型让你能高度自动化地管理服务器。尤其是**执行命令**类型，可以帮你创建更多具体且定制化的任务。

:::warning 频率限制
某些定时任务存在频率限制，意味着它们不能无限次执行，而是有冷却时间或次数限制。
 :::

## 创建任务

在你的游戏服务器管理后台，进入“设置”下的“定时任务”。要创建新任务，点击定时任务列表右侧带加号的绿色按钮。会弹出一个新窗口，供你配置任务。

![img](https://screensaver01.zap-hosting.com/index.php/s/TBxP22trRKML3wk/download)





## 管理任务

在任务配置中，你可以定义想创建的任务类型。填写名称（可选），并选择提供的任务类型之一。下面示例展示了如何创建一个定时重启服务的任务。

![img](https://screensaver01.zap-hosting.com/index.php/s/P6DeWiRC3tDqG2z/preview)

选择“重复”作为重复类型。在 Cron 表达式字段中，填写任务执行的时间间隔。此例中，服务每三小时重启一次。

:::tip Cron 生成器

不熟悉 Cron 的结构或语法？直接用 [**Crontab Guru**](https://crontab.guru/)。这是个简单的工具，帮你轻松构建并复制 Cron 表达式。

:::

完成创建时，选择定时任务的起止时间，然后点击保存。

## 删除任务

想删除已有任务？在列表中点击右侧红色垃圾桶按钮即可删除。

![img](https://screensaver01.zap-hosting.com/index.php/s/6XWMJn2BoAdL6t9/download)



## 总结

现在你已经知道如何创建、管理和删除定时任务了。如有更多问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />