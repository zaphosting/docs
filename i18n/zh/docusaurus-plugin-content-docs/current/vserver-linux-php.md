---
id: vserver-linux-php
title: '在 Linux 服务器上安装 PHP - 驱动强大的动态网页应用'
description: "学习如何在你的 Linux 服务器上安装 PHP 进行网页开发，并针对 Apache 或独立使用优化你的环境 → 立即了解更多"
sidebar_label: 安装 PHP
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

PHP 是一门流行的通用编程语言，在网页开发中应用广泛。本指南将带你完成在服务器上安装 PHP 的全过程。

<InlineVoucher />

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

## 安装

安装 PHP 到 Linux 服务器主要有两种方式：独立安装或作为 Apache 的附加包。如果你使用的是非 Apache 的自建 Web 服务器，或者用于通用任务，推荐使用独立安装方式。否则，如果你使用 Apache 作为 Web 服务器，建议通过 Apache 方式安装 PHP 作为额外模块。

## 独立安装

使用以下命令安装最新版本的 PHP。如果你想安装指定版本，可以使用 `-y` 参数后跟版本号。

```
# 最新版本
sudo apt install php

# 指定版本（例如 php7.4）
sudo apt -y install php[版本号]
```

通过运行 `php -v` 命令确认安装成功。恭喜你，PHP 已成功安装到服务器。建议继续阅读 **PHP 扩展** 部分，确保安装你需要的扩展。

## Apache 方式

首先，如果你还没安装 Apache，可以用下面命令安装：

```
sudo apt install apache2
```

安装完成后，确保防火墙规则允许 Web 服务器对外访问。这里以 **UFW 防火墙** 为例，因为 Apache 已注册了对应的应用配置。如果你用的是其他防火墙，记得放行 80 端口（HTTP）。

```
sudo ufw allow in "Apache"
```

现在你的服务器应该可以访问了。可以在浏览器输入 `http://[你的服务器IP]` 进行测试。

Apache 准备好后，使用下面命令安装 Apache 的 PHP 模块：

```
sudo apt install php libapache2-mod-php
```

通过 `php -v` 命令确认安装成功。PHP 已成功与 Apache Web 服务器集成。建议继续阅读 **PHP 扩展** 部分，确保安装你需要的扩展。

## PHP 扩展

PHP 自带丰富的可选扩展，可以安装来增强功能。运行以下命令查看可用扩展列表，结果会通过管道传给 `less` 命令方便浏览：

```
apt search php- | less
```

用方向键滚动，准备退出时按 `Q`。要安装扩展包，只需用 apt install 命令，支持一次安装多个扩展，空格分隔即可，加快安装速度。

```
sudo apt install [php_extension] [...]
```

## 总结

你已经成功在 Linux 服务器上安装了 PHP。如有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />