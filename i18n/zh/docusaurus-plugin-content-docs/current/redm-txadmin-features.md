---
id: redm-txadmin-features
title: "RedM：txAdmin 界面"
description: "了解如何通过 txAdmin 的全功能网页面板高效管理和监控你的 RedM 服务器 → 立即了解更多"
sidebar_label: txAdmin 界面
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

txAdmin 是一个完全免费的全功能网页面板，用于管理和监控你的 RedM 服务器。它提供了丰富的功能，旨在让管理 RedM 服务器变得轻松简单。在本指南中，我们将带你了解 txAdmin 界面，重点介绍其功能，并详细说明你可以用它做什么。

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)

<InlineVoucher />



## 导航

导航菜单包含以下项目：**玩家**、**历史**、**白名单**、**管理员**、**设置** 和 **系统**。下面将对每个部分进行详细说明。

### 玩家

玩家部分提供玩家统计的总体概览，包括连接过的玩家总数、过去 24 小时内连接的玩家数，以及过去 24 小时和 7 天内的新玩家数。下方列出了当前在线的玩家，以及他们的总游戏时长、首次连接时间和最后连接时间。

点击某个玩家即可访问更多管理选项。在这里，你可以查看详细信息、备注、历史记录（封禁/警告）、ID（玩家标识符、玩家硬件ID）以及封禁选项。

![](https://screensaver01.zap-hosting.com/index.php/s/wpRc2sW6gZZaN3S/download)





### 历史

历史部分列出了所有对玩家发出的警告和封禁，包括玩家详细信息、原因、执行警告/封禁的管理员以及日期和时间。你还可以在这里撤销警告和封禁。

![](https://screensaver01.zap-hosting.com/index.php/s/qbLwEx39pmpY4sa/preview)

### 白名单

在白名单部分，你可以管理白名单功能。白名单允许你限制谁可以访问服务器。如果在 txAdmin 设置中启用了此选项，当新玩家首次连接时会自动创建白名单请求。你可以在此部分相应地管理这些请求。

![](https://screensaver01.zap-hosting.com/index.php/s/o4K5zgGrz8G7Rqp/preview)

### 管理员

在管理员部分，可以指定和管理管理员。点击 **添加** 按钮即可新增管理员。弹出窗口中可以创建账号并设置相应权限。

![](https://screensaver01.zap-hosting.com/index.php/s/H7BYP2QqyZD6nSJ/download)

### 设置

在设置部分，你可以配置 txAdmin 和服务器本身的各种选项。由于设置项众多，它们被分为以下几个类别：**通用**、**FXServer**、**重启器**、**玩家管理**、**Discord** 和 **游戏**。下面将详细介绍每个部分。

![img](https://screensaver01.zap-hosting.com/index.php/s/9r44PictxZLad6c/download)

#### 通用

在通用部分，可以配置服务器名称、聊天/Discord 消息语言和封禁模板。

![](https://screensaver01.zap-hosting.com/index.php/s/y3WMSp5PPKyyDC2/preview)



#### FXServer

在 FXServer 部分，可以配置服务器数据文件夹和 CFG 文件路径，以及激活游戏模式/DLC、启用/禁用 OneSync、自动启动和静默模式等额外参数。

![img](https://screensaver01.zap-hosting.com/index.php/s/8s5rBzAN7nsRtqe/preview)



#### 封禁

在封禁部分，你可以管理封禁功能。定义是否主动检查账号封禁状态，以及当因封禁拒绝连接时显示的提示信息。

![img](https://screensaver01.zap-hosting.com/index.php/s/fTjM4EFbtB7cw4q/preview)

#### 白名单

在白名单部分，你可以管理白名单功能。定义是否启用白名单，以及当因未在白名单中而拒绝连接时显示的提示信息。

![img](https://screensaver01.zap-hosting.com/index.php/s/6MyaBwRnroTSHbK/preview)

#### Discord

在 Discord 部分可以启用 Discord 集成，实现信息自动传输到关联的 Discord 服务器。启用时需配置 Discord 机器人的相关信息。

![img](https://screensaver01.zap-hosting.com/index.php/s/jSbXE9c23wjiKRf/preview)

#### 游戏

在游戏部分，你可以启用 txAdmin 菜单供游戏内使用，允许管理员通过 /tx 命令访问和管理菜单。还可以定义布局、切换按钮配置以及通知/警告的自定义选项。

![img](https://screensaver01.zap-hosting.com/index.php/s/fLo976YMdbYkHts/preview)

### 系统

在设置部分，你还可以看到一些重要的通用选项和信息。它们被分为以下几个类别：**主操作**、**诊断**、**控制台日志** 和 **操作日志**。下面将详细介绍每个部分。



#### 主操作

在主操作中，你可以重置 FXServer、备份数据库、清理数据库，并定义玩家因长时间不活跃而从白名单中移除的时间。

![](https://screensaver01.zap-hosting.com/index.php/s/3A38EoqELeWMYJ6/download)



#### 诊断

诊断部分显示有关环境、txAdmin 运行时、诊断报告、FXServer /info.json 和进程的所有相关信息。

![](https://screensaver01.zap-hosting.com/index.php/s/4Qg9MKwwnqFXwBd/preview)

#### 控制台日志

控制台日志显示 txAdmin 在父终端上的输出，包括通常隐藏的调试信息。

![](https://screensaver01.zap-hosting.com/index.php/s/jsCerbambRn5DMy/preview)

#### 操作日志

操作日志记录了所有由 txAdmin 或任何管理员执行的操作。

![](https://screensaver01.zap-hosting.com/index.php/s/P65fwKRSfjDZgdo/preview)



## 侧边栏

侧边栏菜单包含以下项目：**仪表盘**、**实时控制台**、**资源**、**服务器日志** 和 **CFG 编辑器**。下面将详细介绍每个部分。



### 仪表盘

仪表盘显示服务器的所有重要通用信息。通过统计数据可以实时监控服务器的利用率和性能。服务器状态（启动、在线或停止）显示在侧边栏。你可以从这里启动、停止或重启服务器，一键踢出所有玩家，并发送公告。此外，还可以设置定时重启。侧边栏右侧显示当前在线玩家的信息。

![](https://screensaver01.zap-hosting.com/index.php/s/YrRXBNBX2xTnRyJ/preview)



### 实时控制台

实时控制台为你提供服务器活动的实时信息。你可以查看活动详情、警告和错误信息。它是调试问题时分析潜在错误信息的重要参考。

![](https://screensaver01.zap-hosting.com/index.php/s/PDyPa7TfsHgTbAD/preview)

### 资源
资源部分展示所有资源的概览，无论是通过模板（配方）预装的，还是你后续添加的。你也可以根据需要重启或停止它们。

![](https://screensaver01.zap-hosting.com/index.php/s/QJZnMTCqQpx92EL/preview)

### 服务器日志

服务器日志允许你监控服务器上的所有活动。例如，你可以查看玩家连接或断开连接的时间、聊天消息、游戏内死亡、菜单操作、执行的命令和系统事件等详细信息。

![](https://screensaver01.zap-hosting.com/index.php/s/zgBGMQq3stNkstq/preview)



### CFG 编辑器

你可以使用 CFG 编辑器管理和更新服务器的 `server.cfg` 配置文件。这里包含了控制服务器设置的所有关键配置命令。

![](https://screensaver01.zap-hosting.com/index.php/s/jqDBDqp55HoKmNB/preview)


<InlineVoucher />