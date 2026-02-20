---
id: dedicated-linux-phpmyadmin
title: "在 Linux 服务器上安装 phpMyAdmin - 通过网页界面管理你的数据库"
description: "了解如何通过 phpMyAdmin 的网页界面轻松管理 MySQL 和 MariaDB 数据库，实现高效数据库管理 → 立即了解更多"
sidebar_label: 安装 phpMyAdmin
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

phpMyAdmin 是一款免费的基于网页的 MySQL 和 MariaDB 数据库管理工具。它提供了一个用户友好的界面，让你无需手动输入 SQL 命令，就能轻松创建、编辑、管理和删除数据库。



## 准备工作

开始安装之前，确保系统已更新到最新状态。可以通过以下命令执行待处理的更新和升级：

```
sudo apt update -y
sudo apt upgrade -y
```

你还必须确认系统中已安装 PHP，这是使用 phpMyAdmin 的必要条件。想了解如何安装 PHP，请查看我们的[安装 PHP](vserver-linux-php.md)指南。

:::warning 缺少 PHP 组件
如果缺少必要的 PHP 组件，phpMyAdmin 的 PHP 文件将无法正确处理和显示。 
:::

## 安装

准备工作完成后，就可以开始安装 phpMyAdmin 界面了。首先打开你想安装 phpMyAdmin 的目录。

使用命令 `cd /usr/share` 进入对应目录。然后用 `wget` 下载最新版本的 phpMyAdmin 到安装目录：

```
wget https://www.phpmyadmin.net/downloads/phpMyAdmin-latest-all-languages.zip -O phpmyadmin.zip
```

:::warning
如果系统找不到 `wget` 命令，可以用 `sudo apt install wget -y` 安装该服务。 
:::

下载完成后，使用以下命令解压 ZIP 文件：

```
unzip phpmyadmin.zip
```
:::warning
如果系统找不到 `unzip` 命令，可以用 `sudo apt install unzip -y` 安装该服务。 
:::

解压后，将解压出的文件夹重命名为更简单的名字，删除 ZIP 文件，并设置必要权限：

```
mv phpMyAdmin-*-all-languages phpmyadmin
rm phpmyadmin.zip; chmod -R 0755 phpmyadmin
```

## 配置

###  Web 服务器配置文件

现在需要将 phpMyAdmin 添加到 Web 服务器配置中。使用 `nano /etc/apache2/conf-available/phpmyadmin.conf` 创建一个新的虚拟主机配置文件，并填入以下内容：

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

填好配置后，按 `CTRL+X` 保存并退出，按 `Y` 确认，然后回车。

接着激活并加载新建的虚拟主机配置，执行以下命令：

```
a2enconf phpmyadmin
systemctl reload apache2
```

### 创建必需的临时目录

为了确保 phpMyAdmin 正常运行，需要创建一个临时目录并设置相应权限。执行以下命令：

```
mkdir /usr/share/phpmyadmin/tmp/
chown -R www-data:www-data /usr/share/phpmyadmin/tmp/
```

## 总结

恭喜你，phpMyAdmin 已成功安装并配置完成。你可以通过服务器的 IP 地址加路径访问网页界面（`http://IP-Address/phpmyadmin`）。如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂
