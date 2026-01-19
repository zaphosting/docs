---
id: vserver-linux-ftp-install
title: "VPS：FTP 服务器安装指南"
description: "了解如何使用 FileZilla Server 在 Linux 上搭建和管理安全的 FTP 服务器，高效传输文件 → 立即了解"
sidebar_label: 安装 FTP 服务器
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**FTP（文件传输协议）** 是一种用于通过 TCP/IP 网络传输文件的网络协议。该协议旨在实现系统间文件的便捷交换。借助 **FileZilla Server**，你可以在 Linux 操作系统上搭建 FTP 服务器。FileZilla Server 安装配置简单，功能丰富，比如支持用户账户管理、访问权限控制和文件传输等。在本指南中，我们将带你一步步完成 Linux 服务器上 **FileZilla Server** 的安装与配置。

<InlineVoucher />

## 安装

要添加 FTP 用户，首先需要安装 FTP 服务器。为此，先通过 SSH（Putty）连接到服务器。

现在输入以下命令安装 FTP 服务器：**apt-get install proftpd**。系统会提示确认，输入 **Y** 并回车：

![](https://screensaver01.zap-hosting.com/index.php/s/seKtY9GBELG78in/preview)

接下来需要调整配置文件。输入命令 **nano /etc/proftpd/proftpd.conf** 并回车，Nano 编辑器会打开配置文件：

![](https://screensaver01.zap-hosting.com/index.php/s/J5kS2bJFjDyLpCZ/preview)

请添加以下内容：

![](https://screensaver01.zap-hosting.com/index.php/s/TZoDZpiBQi5Yb5L/preview)

修改完成后，重启 FTP 服务以应用更改，执行命令：**service proftpd restart**

## 添加用户

创建新 FTP 用户前，先创建一个 FTP 用户组，命令为 **addgroup ftpuser**，效果如下：

![](https://screensaver01.zap-hosting.com/index.php/s/M2jnE6mWqQLKkme/preview)

接着添加第一个 FTP 用户，执行命令：**adduser benutzerftp -shell /bin/false -home /var/www**，然后执行 **adduser benutzerftp ftpuser**。

系统会提示你设置密码：

![](https://screensaver01.zap-hosting.com/index.php/s/LKsops7sKTr2jXt/preview)

确认信息无误后继续：

![](https://screensaver01.zap-hosting.com/index.php/s/LWdMS2j7PnRQwnd/preview)

最后一步，将新用户加入用户组，执行命令：**adduser benutzerftp ftpuser**：

![](https://screensaver01.zap-hosting.com/index.php/s/66fqTTttpM5BPkg/preview)

现在你可以用刚才设置的账号信息连接 FTP 服务器了：

![](https://screensaver01.zap-hosting.com/index.php/s/ftccknJBSoC2pCH/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/zRsRHA3NWNCwcsj/preview)



## 总结

恭喜你，FTP 服务器已成功安装并配置完成！如果你有任何疑问或遇到问题，随时联系我们的支持团队，我们每天都在线帮你解决！ 

<InlineVoucher />