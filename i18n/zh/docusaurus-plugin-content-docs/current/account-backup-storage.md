---
id: account-backup-storage
title: "备份存储：存储、恢复与下载备份"
description: "了解如何通过可扩展的存储选项安全地存储和管理备份，轻松恢复和访问 → 立即了解更多"
sidebar_label: 备份存储
---

## 介绍

备份存储为您创建的服务备份提供了一个集中存放的位置。它允许您安全地保存备份文件，直接恢复到服务，或下载到本地存储。

每个账户包含10 GB的免费备份存储空间。如果需要更多容量，可以额外付费将存储扩展至200 GB。

![img](https://screensaver01.zap-hosting.com/index.php/s/ZBy57k2pbTcteKg/preview)



## 备份存储功能

备份通过各自服务的网页界面直接创建。备份生成后，会自动存储到备份存储中。存储的备份可以通过两种方式使用：

- 通过服务的备份功能直接恢复到对应服务
- 从备份存储下载到本地使用



## 访问备份文件

备份文件在创建后会立即出现在备份存储中。除了通过服务界面恢复备份外，还可以通过FTP连接访问文件。



## 通过FTP连接备份存储

要通过FTP访问备份存储，请为您的操作系统安装FTP客户端（如FileZilla），安装完成后打开应用程序。打开后会显示FileZilla界面：

![img](https://screensaver01.zap-hosting.com/index.php/s/4CrofjFEe7TxYCR/preview)

要建立连接，请在FileZilla顶部的字段中输入FTP访问数据。所需的连接信息可在网页界面的备份存储页面找到。打开备份存储部分，点击菜单栏顶部的图标。

![2022-04-08_05-27](https://screensaver01.zap-hosting.com/index.php/s/dFRCTXK48qxbcJb/preview)

在备份存储页面中，FTP访问数据显示在下图高亮部分。请在FileZilla中输入以下信息：

- **服务器**：IP地址
- **用户名**：FTP用户名
- **密码**：FTP密码

如果端口设置为**21**，则无需指定端口。点击**连接**建立连接。连接成功后，您服务创建的备份将显示在相应目录中。

在FileZilla中，将IP地址填入**服务器**字段，用户名填入**用户名**字段，密码填入**密码**字段。如果端口是*21*，无需填写。然后点击**连接**。  
连接成功后，您会在对应文件夹中看到服务创建的备份。

![img](https://screensaver01.zap-hosting.com/index.php/s/9PAFpxWHiJx9LnT/preview)



## 备份消息和日志

侧边栏的**消息**部分显示备份相关操作的日志。它会显示触发了哪些备份事件，针对哪个服务或套餐，以及具体时间。

![img](https://screensaver01.zap-hosting.com/index.php/s/nFfDMfQBNeE4Jt4/preview)