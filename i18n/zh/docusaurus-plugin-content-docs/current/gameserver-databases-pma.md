---
id: gameserver-databases-pma
title: '游戏服务器：PHPMyAdmin 访问'
description: "了解如何通过 ZAP-Hosting 游戏服务器上的 phpMyAdmin 高效管理 MySQL 数据库，实现无缝数据库控制 → 立即了解更多"
sidebar_label: PHPMyAdmin
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

通过 phpMyAdmin，可以通过网页界面快速轻松地管理 MySQL 数据库。ZAP-Hosting 的游戏服务器产品包含 MySQL 数据库。这些数据库既可以通过 phpMyAdmin 管理，也可以使用 Navicat 或 HeidiSQL 等外部 MySQL 管理工具进行管理。我们还提供了相关指南，详见 [外部数据库访问](gameserver-database-external-access.md)。

<InlineVoucher />

## 登录 phpMyAdmin

首先，我们进入为游戏服务器创建的数据库列表。方法是在服务器左侧边栏的“工具”标签下打开“数据库”菜单项。

![](https://screensaver01.zap-hosting.com/index.php/s/ay9X6jBsCRWYdDB/preview)

此页面列出了该服务器的所有数据库。登录 phpMyAdmin 非常简单，因为我们的系统会自动完成登录。你只需点击蓝色按钮“管理”。

:::info
如果无法自动登录，则需要使用对应的用户凭据手动登录。相关信息可参考本示例中红色标记区域。
:::


## 表格工具

初始显示的是 phpMyAdmin 的首页。要查看和编辑对应数据库的表格，必须先打开该数据库：

![](https://screensaver01.zap-hosting.com/index.php/s/DFTDGKm47ngaB9R/preview)

现在会列出数据库中的所有表格以及一些工具，你可以通过这些工具执行特定操作，比如点击红色“删除”按钮即可删除表格。

![](https://screensaver01.zap-hosting.com/index.php/s/dkPqEj5xgQoHgHD/preview)

为了节省时间，可以对多个表格同时执行操作。方法是依次点击最左侧的选择框，直到选中所有想操作的表格。如果想对数据库中的所有表格执行操作，也可以使用“全选”按钮，它会自动选中所有表格。之后，从下拉菜单中选择所需操作，点击“确定”即可执行。

![](https://screensaver01.zap-hosting.com/index.php/s/Qip8TDLbeezT67F/preview)


## 修改表格内容

通过双击对应字段，可以快速轻松地编辑表格中的数值。但前提是表格必须配置为允许编辑。可以通过是否显示三个操作按钮来判断是否支持编辑。

![](https://screensaver01.zap-hosting.com/index.php/s/H7twJagPyR7L66w/preview)


## 执行 SQL 命令

phpMyAdmin 还支持执行普通的 SQL 命令。首先选择数据库，然后点击菜单栏顶部的“SQL”选项。

进入命令输入界面后，可以输入任意 SQL 命令，点击“确定”即可执行。

![](https://screensaver01.zap-hosting.com/index.php/s/jJcmLGcXAfxQgkH/preview)

<InlineVoucher />