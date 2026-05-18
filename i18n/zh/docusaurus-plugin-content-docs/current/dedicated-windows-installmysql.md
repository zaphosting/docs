---
id: dedicated-windows-installmysql
title: "在 Windows 服务器上安装 MySQL - 部署并管理可靠的数据库"
description: "学习如何在 Windows 独立服务器上搭建并保护你的 MySQL 数据库服务器，实现可靠的数据管理 → 立即了解"
sidebar_label: 安装 MySQL
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

MySQL 服务器是各种应用的基础，能存储重要数据，比如游戏服务器或网站的数据。接下来，我们将教你如何在你的 Windows 独立服务器上搭建自己的 MySQL 数据库服务器。

## 安装

首先，通过远程桌面连接到你的服务器，下载最新版本的 MariaDB，它是我们用来搭建数据库服务器的：[MariaDB 下载](https://mariadb.org/download/?t=mariadb)。

用 WinRAR 或 7Zip 解压下载好的压缩包，双击安装文件开始安装：

![](https://screensaver01.zap-hosting.com/index.php/s/53N4nAFHyrH4y3Q/preview)

接着一路点击 **Next**，直到系统要求你输入 root 密码：

![](https://screensaver01.zap-hosting.com/index.php/s/eaPM9S8DFkyL2cK/preview)

这里你可以设置数据库服务器的超级管理员密码。务必设置一个安全且只有你知道的密码！

:::info
重要提示！如果你想通过 Navicat、HeidiSQL 或其他工具远程访问数据库，必须勾选 **Enable access from remote machines for root user**（允许 root 用户远程访问）选项！不过出于安全考虑，通常不建议开启此选项。
:::

之后继续点击 **Next**，直到安装结束，最后点击 **Install**：

![](https://screensaver01.zap-hosting.com/index.php/s/btHcmpYicgiraY4/preview)

你的数据库服务器现在已经上线，可以开始使用啦！

## 配置外部访问

如果你在安装时启用了“允许 root 用户远程访问”，还需要在 Windows 防火墙中开放 MySQL 默认端口 **3306**。打开防火墙，创建一条新规则即可。
关于如何在防火墙中转发端口的详细教程，请看这里：
[端口转发（防火墙）](vserver-windows-port.md)

现在你就可以从外部访问你的 MySQL 服务器了！

## 总结

恭喜你，MySQL 服务器安装成功！如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂