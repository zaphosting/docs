---
id: dedicated-linux-ftp-install
title: "在 Linux 服务器上设置 ProFTPD - 搭建安全的 FTP 服务"
description: "了解如何使用 FileZilla Server 在 Linux 上搭建和管理安全的 FTP 服务器，轻松实现文件传输和用户访问 → 立即了解"
sidebar_label: 安装 FTP 服务器
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**FTP（文件传输协议）** 是一种用于通过 TCP/IP 网络传输文件的网络协议。该协议旨在实现系统间文件的轻松交换。借助 **FileZilla Server**，你可以在 Linux 操作系统上搭建这样的 FTP 服务器。FileZilla Server 安装和配置都非常简单，且提供了丰富的功能，比如设置用户账户、管理访问权限和传输文件等。在本指南中，我们将详细介绍如何在 Linux 服务器上安装和配置 **FileZilla Server** 服务。

## 如何安装 FTP 服务器并添加用户？

要添加 FTP 用户，首先需要安装 FTP 服务器。为此，先通过 SSH（Putty）连接到服务器。

现在输入以下命令安装 FTP 服务器：**apt-get install proftpd**。系统会提示确认，输入 **Y** 并回车：

![](https://screensaver01.zap-hosting.com/index.php/s/MWzQMoq5yrRXP7Y/preview)

接下来我们需要调整配置。输入命令 **nano /etc/proftpd/proftpd.conf** 并回车，配置文件会在 Nano 编辑器中打开：

![](https://screensaver01.zap-hosting.com/index.php/s/8X4A6MZEr27YqFf/preview)

需要添加以下内容：

![](https://screensaver01.zap-hosting.com/index.php/s/7ykDgQeP2qTHSbm/preview)

现在重启 FTP 服务器以应用更改，执行命令：**service proftpd restart**

## 如何添加 FTP 用户？

创建新 FTP 用户前，先创建一个 FTP 用户组。执行命令：**addgroup ftpuser**，效果如下：

![](https://screensaver01.zap-hosting.com/index.php/s/eQ2yfySHYx3Wzcp/preview)

接着用以下命令添加第一个 FTP 用户：**adduser benutzerftp -shell /bin/false -home /var/www**，然后执行 **adduser benutzerftp ftpuser**。

系统会提示设置密码：

![](https://screensaver01.zap-hosting.com/index.php/s/4cmAAMcBaoTQ4QD/preview)

确认输入无误：

![](https://screensaver01.zap-hosting.com/index.php/s/6bNjWnr7ie3Cnty/preview)

最后一步，将新用户加入用户组，执行命令：**adduser benutzerftp ftpuser**：

![](https://screensaver01.zap-hosting.com/index.php/s/bj277RHHMBQtPbp/preview)

现在你可以用刚才设置的信息连接 FTP 服务器了：

![](https://screensaver01.zap-hosting.com/index.php/s/7toWfnRSmQzGL9r/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/oHsAKpc7MHqEQCF/preview)