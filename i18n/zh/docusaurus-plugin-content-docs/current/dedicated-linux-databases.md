---
id: dedicated-linux-databases
title: "独立服务器：数据库安装指南"
description: "了解如何在 Ubuntu 及其他 Linux 发行版上安装和配置各种数据库，提升性能与安全 → 立即了解"
sidebar_label: 安装数据库
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南提供了多种数据库的安装步骤。示例中使用的是 Ubuntu 20.04 操作系统，但我们网站上也提供了其他 Linux 发行版的等效命令。这些命令需通过 SSH 执行，如果你还不知道如何通过 SSH 连接服务器，可以查看这里：[初始访问（SSH）](vserver-linux-ssh.md)。

## 准备工作

在开始安装数据库之前，首先要确保系统是最新的。根据你的操作系统，使用以下命令更新系统包管理器中的软件包：

```
// Ubuntu & Debian
sudo apt update

// CentOS
sudo yum update

// OpenSUSE
sudo zypper up

// Fedora
sudo dnf upgrade --refresh
```

## 数据库类型

根据你想安装的数据库服务，选择对应的安装指南：

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="mariadb" label="MariaDB (MySQL)" default>

## 什么是 MariaDB？

MariaDB 是一个开源的关系型数据库管理系统，最初是从 MySQL 分叉而来。它提供了更好的性能、安全性和持续的开发支持。MariaDB 拥有改进的存储引擎，架构上与 MySQL 完全兼容。我们推荐使用 MariaDB 替代 MySQL。

## MariaDB 安装

首先，确保安装的是最新版本的 MariaDB。部分老旧操作系统（如 Debian 9 或 Ubuntu 18.04）默认的软件源中不包含最新版本，执行以下命令可确保获取最新版本：

```
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash
```

安装完仓库后，按照准备工作部分的步骤更新包管理器缓存。

:::info
在现代操作系统如 Ubuntu 22.04 或 Debian 11 上，可以安全忽略上述 MariaDB 仓库安装步骤。
:::

仓库配置完成后，开始安装 MariaDB，执行以下命令（根据操作系统选择）：

```
// Ubuntu & Debian
sudo apt install mariadb-server

// CentOS
sudo yum install mariadb-server

// OpenSUSE
sudo zypper install mariadb

// Fedora
sudo dnf install mariadb-server
```

## MariaDB 配置

安装完成后，输入以下命令开始配置服务器：

```
mysql_secure_installation
```

根据提示配置 MariaDB（MySQL）服务器并设置密码。接下来的提示可以先按 **Enter** 跳过。

![](https://screensaver01.zap-hosting.com/index.php/s/sYDegXcMZwCoZzJ/preview)

:::info
root 用户是你 MariaDB（MySQL）服务器的主用户！
:::

接下来会询问是否为 root 用户设置密码，输入 **y** 确认，然后输入新密码。

:::note
输入密码时不会显示，这是正常现象，密码依然会被保存。请确保为 root 用户设置一个安全密码，并妥善保管。
:::

随后会询问是否删除匿名用户，出于安全考虑建议选择 **y**：

![](https://screensaver01.zap-hosting.com/index.php/s/9rnHy9dJmezjemq/preview)

接着询问是否允许 root 用户远程连接服务器，建议出于安全原因选择禁用，输入 **y**：

![](https://screensaver01.zap-hosting.com/index.php/s/cEozmgcXDBgaRwY/preview)

下一步可以选择删除 MariaDB（MySQL）自带的测试数据库，建议选择 **y**，因为它不必要且可以删除：

![](https://screensaver01.zap-hosting.com/index.php/s/kGHT3tm78dNBTRo/preview)

配置结束时，会询问是否重新加载权限表，输入 **y** 以激活刚才设置的 root 密码：

![](https://screensaver01.zap-hosting.com/index.php/s/kGNDZkRS4QrpEfF/preview)

现在你的 MariaDB（MySQL）服务器已经准备就绪！

![](https://screensaver01.zap-hosting.com/index.php/s/nFxJoiYeCp7MYXN/preview)
</TabItem>

<TabItem value="redis" label="Redis">

## 什么是 Redis？

Redis 是一个内存数据结构存储，主要用于存储键值对数据，也支持列表、JSON 等多种格式。它以速度著称，能在毫秒级响应查询。

## Redis 安装

首先，需要添加一个仓库以安装 Redis。此步骤并非所有 Linux 发行版都需要，仅适用于以下列出的发行版。根据你的操作系统和版本执行对应命令：

```
// Ubuntu（任意版本）和 Debian（仅 Debian 10）
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

// CentOS（仅 CentOS 7）
sudo yum install epel-release

// CentOS（仅 CentOS 8）
sudo dnf install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
```

安装完仓库后，按照准备工作部分的步骤更新包管理器缓存。

:::info
如果你的操作系统不在上述列表中，可以跳过这一步。
:::

仓库配置完成后，安装 Redis Server 包。根据你的操作系统执行对应命令：

```
// Ubuntu 和 Debian
sudo apt install redis-server

// CentOS
sudo yum install redis

// OpenSUSE
sudo zypper install redis

// Fedora
sudo dnf install redis
```

安装完成后，Redis 服务器即可使用！默认监听地址为 127.0.0.1:6379，且无密码。

:::caution 
Debian/Ubuntu 用户注意：
安装完成后，记得启用 `redis-server` 服务，确保服务器重启时自动启动。执行以下命令即可：

```
sudo systemctl enable --now redis-server
```
:::

</TabItem>

<TabItem value="mongodb" label="MongoDB">

## 什么是 MongoDB？
MongoDB 是一个面向文档的 NoSQL 数据库，设计上注重可扩展性和开发者灵活性。它以 JSON 类似的 BSON 格式存储数据，支持多样数据类型。MongoDB 支持索引以缩短响应时间，且不像 MySQL 或 SQLite 那样有固定模式，提供更高的灵活性和敏捷性。

## MongoDB 安装

从下面的标签页中选择你的操作系统，查看对应安装指南。

<Tabs>
<TabItem value="mongodb-ubuntu-debian" label="Ubuntu & Debian">

### Ubuntu & Debian 安装

首先执行以下命令导入 MongoDB 公共 GPG 密钥：

```
curl -fsSL https://pgp.mongodb.com/server-6.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-6.0.gpg \
   --dearmor
```

接着，将 MongoDB 源添加到系统源列表，执行：

```
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg ] https://repo.mongodb.org/apt/$(lsb_release -si | awk '{print tolower($0)}') $(lsb_release -sc)/mongodb-org/6.0 main" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```

更新软件源：

```
sudo apt update
```

最后安装 MongoDB：

```
sudo apt install mongodb-org
```

MongoDB 应该已经安装成功！

</TabItem>
<TabItem value="mongodb-centos-fedora" label="CentOS & Fedora">

### CentOS & Fedora 安装

首先为 Red Hat 系统配置 MongoDB 仓库。

创建文件 `/etc/yum.repos.d/mongodb-org-6.0.repo`，并粘贴以下内容：

```
[mongodb-org-6.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/6.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-6.0.asc
```

然后安装 MongoDB。CentOS 和 Fedora 的安装命令略有不同，请根据系统选择：

```
// CentOS
sudo yum install -y mongodb-org

// Fedora
sudo dnf install -y mongodb-org
```

MongoDB 安装完成，过程比其他 Linux 发行版简单多了！

</TabItem>
<TabItem value="mongodb-suse" label="OpenSUSE">

### OpenSUSE 安装

首先导入 MongoDB 公共密钥：

```
sudo rpm --import https://www.mongodb.org/static/pgp/server-6.0.asc
```

然后添加 MongoDB 仓库：

```
sudo zypper addrepo --gpgcheck "https://repo.mongodb.org/zypper/suse/15/mongodb-org/6.0/x86_64/" mongodb
```

最后安装最新版本 MongoDB：

```
sudo zypper -n install mongodb-org
```

MongoDB 安装完成！

</TabItem>
</Tabs>

</TabItem>
</Tabs>