---
id: dedicated-linux-phpmyadmin
title: "独服教程：phpMyAdmin 安装指南"
description: "轻松管理 MySQL 和 MariaDB 数据库，使用 phpMyAdmin 的网页界面实现高效数据库管理 → 立即了解"
sidebar_label: 安装 phpMyAdmin
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

phpMyAdmin 是一款免费且基于网页的 MySQL 和 MariaDB 数据库管理工具。它提供了一个用户友好的界面，让你无需手动输入 SQL 命令，就能轻松创建、编辑、管理和删除数据库。



## 准备工作

开始安装前，请确保系统已更新到最新状态。可以通过以下命令执行更新和升级：

```
sudo apt update -y
sudo apt upgrade -y
```

同时，你还需要确认系统中已安装 PHP，这是使用 phpMyAdmin 的必要条件。关于如何安装 PHP，请参考我们的[安装 PHP](vserver-linux-php.md)教程。

:::warning 缺少 PHP 组件
如果缺少必要的 PHP 组件，phpMyAdmin 的 PHP 文件将无法正确处理和显示。
:::

## 安装步骤

准备工作完成后，就可以开始安装 phpMyAdmin 了。首先，打开你想安装 phpMyAdmin 的目录。

使用命令 `cd /usr/share` 进入对应目录。然后用 `wget` 下载最新版本的 phpMyAdmin：

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
如果系统找不到 `wget` 命令，可以用 `sudo apt install wget -y` 安装它。
:::

下载完成后，使用以下命令解压 ZIP 文件：

```
unzip phpmyadmin.zip
```
:::warning
如果系统找不到 `unzip` 命令，可以用 `sudo apt install unzip -y` 安装它。
:::

解压后，将文件夹重命名为更简洁的名字，删除 ZIP 文件，并设置必要权限：

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## 配置

###  Web 服务器配置文件

接下来需要将 phpMyAdmin 添加到 Web 服务器配置中。使用 `nano /etc/apache2/conf-available/phpmyadmin.conf` 创建一个新的虚拟主机配置文件，并填入以下内容：

```
# phpMyAdmin Apache 配置

Alias /phpmyadmin /usr/share/phpmyadmin

<Directory /usr/share/phpmyadmin>
    Options SymLinksIfOwnerMatch
    DirectoryIndex index.php
</Directory>

# 为安全起见，禁止访问不需要的目录
<Directory /usr/share/phpmyadmin/templates>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/libraries>
    Require all denied
</Directory>
<Directory /usr/share/phpmyadmin/setup/lib>
    Require all denied
</Directory>
```

填好后，按 `CTRL+X` 保存并退出，按 `Y` 确认，再按 `Enter`。

然后激活并加载新建的虚拟主机配置，执行：

```
a2enconf phpmyadmin
systemctl reload apache2
```

### 创建必需的临时目录

为了确保 phpMyAdmin 正常运行，需要创建一个临时目录并设置权限。执行以下命令：

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## 总结

恭喜你，phpMyAdmin 已成功安装并配置完成！现在可以通过服务器的 IP 地址加路径访问网页界面（http://IP-Address/phpmyadmin）。如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂