---
id: vserver-linux-nextcloud
title: "在 Linux 服务器上安装 Nextcloud - 搭建你的私人云存储"
description: "了解如何在 Linux 上搭建高性能 Nextcloud 服务器，实现最佳云托管体验 → 立即了解"
sidebar_label: 安装 Nextcloud
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Nextcloud 是一个开源云解决方案，是 Owncloud 的分支项目，由前 Owncloud 创始人 Frank Kalitschek 于 2016 年创立。

![](https://screensaver01.zap-hosting.com/index.php/s/kCndbKaFAaktERk/preview)

为了实现最佳性能、稳定性和功能，推荐以下配置来托管 Nextcloud 服务器。Nextcloud 服务器不兼容 Windows 和 MacOS，除非通过虚拟化或类似的解决方案。

## 使用一键应用安装器安装 Nextcloud

你可以通过我们的 **一键应用安装器** 在 VPS 网页界面直接安装 **Nextcloud**。完成初始应用设置后，打开应用目录，搜索 **Nextcloud**，并根据你的项目、环境和域名偏好开始部署。这为你提供了快速且用户友好的部署和管理方式，无需手动命令行操作，同时享受集成的网页管理、自定义域名支持和可用的 SSL 证书配置。

<InlineVoucher />

## 准备工作

以下需求由开发者推荐，并结合我们自身经验总结。如果不满足这些前提条件，可能会遇到问题。

#### 硬件

| 组件           | 最低要求               | 推荐配置                   |
| -------------- | ---------------------- | -------------------------- |
| CPU            | 2核 1 GHz              | 4核 2 GHz 以上             |
| 内存           | 512 MB                 | 4 GB 以上                  |
| 存储           | 10 GB                  | 50 GB 以上                 |
| 带宽           | 100 Mbit/s（上下行）   | 500 Mbit/s（上下行），多用户使用时推荐 |

#### 软件

| 平台             | 选项                                                         |
| ---------------- | ------------------------------------------------------------ |
| 操作系统         | Ubuntu (14.04, 16.04, 18.04), Debian(8,9,10), CentOS 6.5/7   |
| 数据库           | 推荐 MySQL 或 MariaDB 5.5+，SQLite 仅适合测试和极简实例       |
| Web 服务器       | 推荐 Apache 2.4，使用 `mod_php` 或 `php-fpm`                 |
| PHP              | 5.6，推荐 7.0、7.1、7.2                                      |

需要通过 SSH 客户端连接 Linux 服务器来安装云服务。如果你不熟悉 SSH 使用方法，可以参考这篇指南：[初始访问（SSH）](vserver-linux-ssh.md)

连接成功后，可以开始安装 Nextcloud 所需的基础软件包，包括 Web 服务器和 PHP。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Debian" label="Debian" default>

<br/>

**Apache（Web 服务器）**

🗄️ Debian 8/9/10:
```
sudo apt update && sudo apt -y upgrade
sudo apt -y install apache2
```

**PHP（超文本预处理器）**

🗄️ Debian 8:
```
# 第一步：添加 PHP 7.3 PPA 源
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# 第二步：安装 PHP 7.3
sudo apt -y install php7.3

# 第三步：安装 PHP 7.3 扩展
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 9:
```
# 第一步：添加 PHP 7.3 PPA 源
sudo apt -y install lsb-release apt-transport-https ca-certificates 
sudo wget -O /etc/apt/trusted.gpg.d/php.gpg https://packages.sury.org/php/apt.gpg
echo "deb https://packages.sury.org/php/ $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/php7.3.list

# 第二步：安装 PHP 7.3
sudo apt -y install php7.3

# 第三步：安装 PHP 7.3 扩展
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Debian 10:
```
# 第一步：安装 PHP 7.3
sudo apt -y install php php-common

# 第二步：安装 PHP 7.3 扩展
sudo apt -y install php-cli php-fpm php-json php-pdo php-mysql php-zip php-gd  php-mbstring php-curl php-xml php-pear php-bcmath
```

检查 PHP 版本确认功能正常
```
php -v
```

</TabItem>
<TabItem value="Ubuntu" label="Ubuntu">

<br/>

**Apache（Web 服务器）**

🗄️ Ubuntu 16.X/18.X/19.X:
```
sudo apt update && sudo apt -y upgrade
sudo apt-get -y install apache2
```

**PHP（超文本预处理器）**

🗄️ Ubuntu 16.X:
```
# 第一步：添加 PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# 第二步：安装 PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# 第三步：安装 PHP 7.3 扩展
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 18.X:
```
# 第一步：添加 PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# 第二步：安装 PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# 第三步：安装 PHP 7.3 扩展
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

🗄️ Ubuntu 19.X:
```
# 第一步：添加 PHP 7.3 PPA
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php

# 第二步：安装 PHP 7.3
sudo apt-get update
sudo apt-get install -y php7.3

# 第三步：安装 PHP 7.3 扩展
sudo apt install php7.3-cli php7.3-fpm php7.3-json php7.3-pdo php7.3-mysql php7.3-zip php7.3-gd  php7.3-mbstring php7.3-curl php7.3-xml php7.3-bcmath php7.3-json
```

检查 PHP 版本确认功能正常
```
php -v
```

</TabItem>
<TabItem value="CentOS" label="CentOS">
<br/>

**Apache（Web 服务器）**

🗄️ CentOS 6:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd.service
```

🗄️ CentOS 7:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

🗄️ CentOS 8:
```
sudo yum -y update
sudo yum -y install httpd
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
sudo systemctl start httpd
sudo systemctl enable httpd
```

**PHP（超文本预处理器）**

🗄️ CentOS 6:
```
# 第一步：设置 Yum 仓库
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-6.rpm

# 第二步：安装 PHP 7.3
yum --enablerepo=remi-php73 install php

# 第三步：安装 PHP 7.3 扩展
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 7:
```
# 第一步：设置 Yum 仓库
yum install epel-release
rpm -Uvh http://rpms.famillecollet.com/enterprise/remi-release-7.rpm

# 第二步：安装 PHP 7.3
yum --enablerepo=remi-php73 install php

# 第三步：安装 PHP 7.3 扩展
yum --enablerepo=remi-php73 install php-xml php-soap php-xmlrpc php-mbstring php-json php-gd php-mcrypt
```

🗄️ CentOS 8:
```
# 第一步：设置 Yum 仓库
dnf install dnf-utils http://rpms.remirepo.net/enterprise/remi-release-8.rpm

# 第二步：安装 PHP 7.3
dnf module reset php
dnf module enable php:remi-7.3
dnf install php
```

检查 PHP 版本确认功能正常
```
php -v
```

</TabItem>
</Tabs>

下一步是定义数据库类型，用于存储相关信息。你可以选择以下几种数据库：

<Tabs>

<TabItem value="MariaDB" label="MariaDB" default>

<br/>
如果你选择使用 MariaDB，请按照以下步骤操作：

安装软件包：
```
sudo apt-get install mariadb-server php-mysql
```

安装过程中会提示设置 root 密码。如果没有提示，默认密码为空，这不安全，务必立即修改！

接下来连接数据库服务器并创建所需数据库：

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

然后创建一个用户，赋予访问 Nextcloud 数据库的权限：

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
不要跳过这一步使用 root 用户！这不安全，会让你的数据处于风险中！
:::

最后赋予新用户权限：

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

完成后，按 Ctrl-D 退出数据库，继续后续步骤。

</TabItem>
<TabItem value="MySQL" label="MySQL">

<br/>
如果你选择使用 MySQL，请按照以下步骤操作：

安装软件包：
```
sudo apt-get install mysql-server php-mysql
```

安装过程中会提示设置 root 密码。如果没有提示，默认密码为空，这不安全，务必立即修改！

接下来连接数据库服务器并创建所需数据库：

```sql
mysql -u root -p
CREATE DATABASE nextcloud;
```

然后创建一个用户，赋予访问 Nextcloud 数据库的权限：

```sql
CREATE USER 'nc_user'@'localhost' IDENTIFIED BY 'YOUR_PASSWORD_HERE';
```

:::info
不要跳过这一步使用 root 用户！这不安全，会让你的数据处于风险中！
:::

最后赋予新用户权限：

```SQL
GRANT ALL PRIVILEGES ON nextcloud.* TO 'nc_user'@'localhost';
FLUSH PRIVILEGES;
```

完成后，按 Ctrl-D 退出数据库，继续后续步骤。

</TabItem>
<TabItem value="PostgreSQL" label="PostgreSQL">
<br/>
如果你选择使用 PostgreSQL，请按照以下步骤操作：

安装软件包：
```
sudo apt-get update
sudo apt-get install postgresql postgresql-contrib
```

安装过程中会提示设置 root 密码。如果没有提示，默认密码为空，这不安全，务必立即修改！

接下来连接数据库服务器并创建所需数据库：

```sql
sudo -u postgres psql
CREATE DATABASE nextcloud;
```

然后创建一个用户，赋予访问 Nextcloud 数据库的权限：

```sql
CREATE USER nextcloud with encrypted password 'YOUR_PASSWORD_HERE';
```

:::info
不要跳过这一步使用 root 用户！这不安全，会让你的数据处于风险中！
:::

最后赋予新用户权限：

```SQL
grant all privileges on database mydb to myuser;
FLUSH PRIVILEGES;
```

完成后，按 Ctrl-D 退出数据库。之后你可以通过网页安装器或 **config.php** 配置文件修改 PostgreSQL 数据库设置。

```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "pgsql",
  "dbname"        => "nextcloud",
  "dbuser"        => "username",
  "dbpass"        => "password",
  "dbhost"        => "localhost",
  "dbtableprefix" => "",
);
```

</TabItem>
<TabItem value="SQLite" label="SQLite">

<br/>
如果你选择使用 SQLite，请按照以下步骤操作：

安装软件包：
```
apt-get install sqlite3 php-sqlite3
```

创建新的 SQLite 3 数据库
```
sqlite3 DatabaseName.db
```

之后你可以通过网页安装器或 **config.php** 配置文件修改 SQLite 3 数据库设置。
```
<?php
$AUTOCONFIG = array(
  "dbtype"        => "sqlite",
  "dbname"        => "nextcloud",
  "dbtableprefix" => "",
);
```
</TabItem>
</Tabs>

## 安装

现在可以开始正式安装 Nextcloud。需要下载并解压软件包：
```
cd /var/www/
wget https://download.nextcloud.com/server/releases/latest.zip
apt-get install unzip
unzip latest.zip
chown -R www-data:www-data nextcloud
rm latest.zip
```

完成后，打开浏览器访问以下地址运行安装脚本：

:::info
**http://domain.tld/nextcloud/** 
:::

安装脚本界面会出现，创建管理员账户并填写数据库信息：

![](https://screensaver01.zap-hosting.com/index.php/s/79kgamkS36Dgi9x/preview)


![](https://screensaver01.zap-hosting.com/index.php/s/qJs3Sd8TiYAg6mB/preview)


## 安全与防护

**安装警告**

![](https://screensaver01.zap-hosting.com/index.php/s/nat3Fekj6MRP8Nw/preview)



**数据目录**

强烈建议将数据目录放置在 Web 根目录之外（即 /var/www 之外）。最简单的方式是在新安装时定义目录。目录必须先创建并设置相应权限。比如可以在家目录下创建一个名为 Cloud 的目录存储数据。

```
mkdir /home/cloud/
chown -R www-data:www-data /home/cloud/
```



**通过 SSL 证书实现 HTTPS（Let's Encrypt）**

一个优秀的云解决方案应只通过 SSL 连接访问。没有 SSL 加密，数据和信息将以明文传输，极易被截获和读取。

```
<IfModule mod_ssl.c>
<VirtualHost *:443>
 DocumentRoot "/var/www/nextcloud"
 ServerName domain.tld

 ErrorLog ${APACHE_LOG_DIR}/error.log
 CustomLog ${APACHE_LOG_DIR}/access.log combined

<Directory /var/www/nextcloud/>
 Options +FollowSymlinks
 AllowOverride All

 <IfModule mod_dav.c>
 Dav off
 </IfModule>

 SetEnv HOME /var/www/nextcloud
 SetEnv HTTP_HOME /var/www/nextcloud
 Satisfy Any

</Directory>

SSLCertificateFile /etc/letsencrypt/live/domain.tld/fullchain.pem
SSLCertificateKeyFile /etc/letsencrypt/live/domain.tld/privkey.pem
</VirtualHost>
</IfModule>

<IfModule mod_headers.c>
     Header always set Strict-Transport-Security "max-age=15768000; preload"
 </IfModule>
```



此外，所有 HTTP 流量应通过 301 永久重定向跳转到 HTTPS。Apache 配置示例如下：

```
<VirtualHost *:80>
   ServerName domain.tld
   Redirect permanent / https://domain.tld/
</VirtualHost>
```


## 管理 Nextcloud

你可以通过浏览器访问 Nextcloud，也可以通过手机和电脑上的客户端 App 访问。客户端下载地址：https://nextcloud.com/install/#install-clients

![](https://screensaver01.zap-hosting.com/index.php/s/aw6qpNE7TkwQeaP/preview)

在设置中，你可以在安装后调整更多选项，查看日志、活动等重要信息。包括额外的安全设置（双因素认证、加密等）、界面设计（Logo、颜色、标语、页眉）、访问权限等。

**应用**

此外，你还可以安装除默认应用外的更多应用，入口在菜单项 **Apps**。

![](https://screensaver01.zap-hosting.com/index.php/s/wKERd24E25668kt/preview)

通过这些 **Apps**，你可以根据需求进一步个性化你的 Nextcloud。


## 总结

恭喜你，Nextcloud 安装成功！如果有任何问题或疑问，欢迎随时联系我们的支持团队，我们每天都在线为你服务！

<InlineVoucher />