---
id: dedicated-linux-webserver
title: "在 Linux 服务器上安装 Nginx 和 Apache - 配置强大的网页服务器环境"
description: "了解如何安装和配置 Nginx 或 Apache 网页服务器，高效托管你的网站 → 立即了解"
sidebar_label: 安装网页服务器
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Nginx 和 Apache 是非常流行的网页服务，用来将网页内容传送到用户的浏览器。下面我们会教你如何在你的系统上安装其中一个服务。

## 准备工作

在正式安装网页服务器之前，必须确保系统是最新的。为此，我们通过 SSH 连接到服务器。如果你还不知道 SSH 是什么，或者怎么用，可以参考这篇指南：[初次访问（SSH）](vserver-linux-ssh.md)。

连接后，根据你的操作系统，使用以下命令更新系统：

```
// Debian
sudo apt-get update

// Ubuntu
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper update

// Fedora
sudo dnf upgrade --refresh
```

## 安装

准备工作完成后，就可以开始安装网页服务器了。根据你的操作系统和选择的网页服务器，执行以下命令：

### Apache

```
// Debian
sudo apt install apache2

// Ubuntu
sudo apt install apache2

// CentOS
sudo yum install httpd

// OpenSUSE
sudo zypper install httpd

// Fedora
sudo dnf install httpd
```

安装完网页服务器后，你就可以上传你的网站文件了。通过 FTP/SFTP 连接到服务器，进入以下目录并上传文件：

```
/var/www/html/
```

### Nginx

```
// Debian
sudo apt install nginx

// Ubuntu
sudo apt install nginx

// CentOS
sudo yum install nginx

// OpenSUSE
sudo zypper install nginx

// Fedora
sudo dnf install nginx
```

安装完网页服务器后，你就可以上传你的网站文件了。通过 FTP/SFTP 连接到服务器，进入以下目录并上传文件：

```
/usr/share/nginx/html
```

## 版本检测

安装完成后，可以用命令 `apache2 -v`（Apache）和 `nginx -v`（Nginx）来检查安装是否成功。输出应该类似下面这样：

### Apache

```
apache2 -v
Server version: Apache/2.4.41 (Ubuntu)
Server built:   XXXX-XX-XXTXX:XX:XX
```

### Nginx

```
nginx -V
nginx version: nginx/1.2.3
...
```

只要出现以上任意一种情况，说明网页服务器已经成功安装啦。