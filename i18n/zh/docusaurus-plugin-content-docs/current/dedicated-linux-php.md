---
id: dedicated-linux-php
title: '独立服务器：PHP 安装指南'
description: "了解如何在你的 Linux 服务器上安装 PHP 进行网页开发，并通过必备扩展优化你的环境 → 立即学习"
sidebar_label: 安装 PHP
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

PHP 是一门流行的通用编程语言，在网页开发中应用广泛。本指南将带你完成在服务器上安装 PHP 的全过程。

## 准备工作

首先通过 SSH 连接到你的服务器。如果你还不会操作，可以参考我们的[初始访问（SSH）](vserver-linux-ssh.md)指南。

登录后，建议根据你的操作系统运行对应的更新命令，保持服务器安全并拥有最新功能。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## 安装方式

安装 PHP 到 Linux 服务器主要有两种方式：独立安装或作为 Apache 的附加包。如果你使用的是非 Apache 的自建 Web 服务器，或者只是做通用任务，推荐用独立安装方式。若是搭配 Apache Web 服务器使用，则建议用 Apache 附加包方式安装 PHP。

## 独立安装

用下面的命令安装最新版本的 PHP。如果想安装指定版本，可以用 `-y` 参数加上版本号。

```
# 最新版本
sudo apt install php

# 指定版本（例如 php7.4）
sudo apt -y install php[版本号]
```

用 `php -v` 命令确认安装成功。恭喜你，PHP 已成功安装到服务器。建议继续阅读 **PHP 扩展** 部分，确保安装你需要的扩展。

## Apache 配合安装

如果你还没装 Apache，先用下面命令安装：

```
sudo apt install apache2
```

安装完成后，确保防火墙规则允许 Web 服务器对外访问。这里以 **UFW 防火墙** 为例，因为 Apache 已注册了对应的应用。如果你用的是其他防火墙，记得放行 80 端口（HTTP）。

```
sudo ufw allow in "Apache"
```

现在你的服务器应该可以访问了。打开浏览器，输入 `http://[你的服务器IP]` 试试看。

Apache 准备好后，使用下面命令安装 Apache 专用的 PHP 包：

```
sudo apt install php libapache2-mod-php
```

用 `php -v` 确认安装成功。PHP 已成功和 Apache Web 服务器一起运行。别忘了查看 **PHP 扩展** 部分，安装你需要的扩展。

## PHP 扩展

PHP 自带丰富的可选扩展，可以安装来增强功能。运行下面命令查看可用扩展列表，结果会通过管道传给 `less`，方便翻页查看。

```
apt search php- | less
```

用方向键滚动，按 `Q` 退出。安装扩展时，直接用 apt install 命令，多个扩展用空格分开，安装更快。

```
sudo apt install [php_extension] [...]
```

## 总结

你已经成功在 Linux 服务器上安装了 PHP。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天在线为你服务！🙂