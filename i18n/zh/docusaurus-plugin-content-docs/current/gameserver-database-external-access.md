---
id: gameserver-database-external-access
title: '游戏服务器：外部数据库访问'
description: "了解如何使用 Navicat 或 HeidiSQL 等工具管理 ZAP-Hosting 游戏服务器的 MySQL 数据库 → 立即了解更多"
sidebar_label: 外部数据库访问
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

ZAP-Hosting 为游戏服务器产品免费提供 MySQL 数据库。你可以通过 phpMyAdmin 在内部管理，也可以使用 Navicat 或 HeidiSQL 等 MySQL 管理工具进行外部管理。

要访问数据库，你需要数据库的用户凭据。这些信息可以在游戏服务器管理后台的数据库栏目中找到。你需要知道 **服务器/IP**、**数据库名**、**用户名**、**密码** 以及默认端口 **3306**：

![](https://screensaver01.zap-hosting.com/index.php/s/GLG56HQ737rNC7R/preview)

<InlineVoucher />

## 准备工作

首先你需要一款软件，这里以 [Navicat](https://www.chip.de/downloads/Navicat-Lite_70358373.html) 或 [HeidiSQL](https://www.heidisql.com/download.php) 为例。下载完成后运行安装程序并按照步骤完成安装。安装完成后，启动程序并配置数据库连接。

## HeidiSQL

在 HeidiSQL 中建立连接，点击“New”创建一个新连接。

![](https://screensaver01.zap-hosting.com/index.php/s/CgwFCeHErLAokHo/preview)

在 Hostname / IP 处输入你的数据库地址，比如我们的示例是 "mysql-mariadb-5-101.zap-hosting.com"。用户名和密码同样从数据库信息中获取，端口保持默认的 3306。

然后点击“Open”即可连接。

## Navicat

在 Navicat 中建立连接，点击新建连接，选择 **MySQL**。

随后会弹出一个窗口，填写数据库信息。

![](https://screensaver01.zap-hosting.com/index.php/s/rFBDYidqnBc4TZB/preview)

**连接名称** 仅用于区分不同数据库，随你喜欢填写。其他信息按照上面介绍的数据库信息填写。填写完成后点击 **OK**，连接设置完成。你可以在左侧数据库列表中双击你的数据库，或者右键选择“打开连接”：

![](https://screensaver01.zap-hosting.com/index.php/s/Gy7jjBDHiR5n5gn/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/WyqzoLaEP6yQn85/preview)

之后数据库会打开，显示所有已有的数据表。你可以像使用 phpMyAdmin 一样点击操作，也可以使用 SQL 命令来修改和管理数据库。

![](https://screensaver01.zap-hosting.com/index.php/s/FxDrm2K3f7YwLqS/preview)

## 总结

你已经成功连接到数据库，现在可以开始管理它了。如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />