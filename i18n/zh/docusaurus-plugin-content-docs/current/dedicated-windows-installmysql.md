---
id: dedicated-windows-installmysql
title: "独立服务器：MySQL 安装指南"
description: "教你如何在 Windows 独立服务器上搭建并保护自己的 MySQL 数据库服务器，实现稳定可靠的数据管理 → 立即了解"
sidebar_label: 安装 MySQL
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

MySQL 服务器是各种应用的基础，比如游戏服务器或网站，里面可能存着重要数据。接下来，我们会教你如何在你的 Windows 独立服务器上搭建属于你自己的 MySQL 数据库服务器。

## 安装步骤

首先，通过远程桌面连接登录你的服务器，下载最新版本的 MariaDB，它是我们用来搭建数据库服务器的：[MariaDB 下载](https://mariadb.org/download/?t=mariadb)。

用 WinRAR 或 7Zip 解压下载好的压缩包，双击安装文件启动安装：

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

接着一路点击 **Next**，直到系统让你输入 root 密码：

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

这里你可以设置数据库服务器的超级管理员密码。务必设置一个安全且只有你知道的密码！

:::info
重要提醒！如果你想用 Navicat、HeidiSQL 或其他工具远程访问数据库，必须勾选 **Enable access from remote machines for root user**（允许 root 用户远程访问）！不过出于安全考虑，我们一般不推荐这么做。
:::

之后继续点击 **Next**，直到安装结束，最后点击 **Install** 完成安装：

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

你的数据库服务器现在已经上线，随时可以使用啦！

## 配置外部访问

如果你安装时启用了“允许 root 用户远程访问”，还需要在 Windows 防火墙里开放 MySQL 默认端口 **3306**。打开防火墙，创建一条新规则即可。

关于如何在防火墙里转发端口的详细教程，戳这里：
[端口转发（防火墙）](vserver-windows-port.md)

这样一来，你就能从外部访问你的 MySQL 服务器了！

## 总结

恭喜你，MySQL 服务器安装成功！如果有任何问题或者需要帮助，随时联系我们的客服团队，我们每天都在线，随时为你服务！🙂