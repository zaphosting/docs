---
id: dedicated-linux-ftp-install
title: "独立服务器：FTP 服务器安装指南"
description: "了解如何使用 FileZilla Server 在 Linux 上搭建和管理安全的 FTP 服务器，轻松实现文件传输和用户访问 → 立即了解"
sidebar_label: 安装 FTP 服务器
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**FTP（文件传输协议）** 是一种用于通过 TCP/IP 网络传输文件的网络协议。该协议旨在实现系统间文件的便捷交换。借助 **FileZilla Server**，你可以在 Linux 操作系统上搭建 FTP 服务器。FileZilla Server 安装配置简单，功能丰富，比如支持创建用户账号、管理访问权限和文件传输等。在本指南中，我们将带你一步步完成 Linux 服务器上 **FileZilla Server** 的安装与配置。

## 如何安装 FTP 服务器并添加用户？

要添加 FTP 用户，首先需要安装 FTP 服务器。为此，先通过 SSH（Putty）连接到服务器。

接着输入以下命令安装 FTP 服务器：**apt-get install proftpd**。系统会提示确认，输入 **Y** 并回车：

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

接下来需要调整配置文件。输入命令 **nano /etc/proftpd/proftpd.conf** 并回车，Nano 编辑器会打开配置文件：

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

请在配置文件中添加以下内容：

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

完成后，重启 FTP 服务以应用更改，执行命令：**service proftpd restart**

## 如何添加 FTP 用户？

创建新 FTP 用户前，先创建一个 FTP 用户组。执行命令：**addgroup ftpuser**，效果如下：

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

然后用以下命令添加第一个 FTP 用户：**adduser benutzerftp -shell /bin/false -home /var/www**，接着执行 **adduser benutzerftp ftpuser**。

系统会提示你设置密码：

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

确认输入信息无误：

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

最后，将新用户添加到组中，执行命令：**adduser benutzerftp ftpuser**：

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

现在，你就可以用刚才设置的账号信息连接 FTP 服务器了：

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)