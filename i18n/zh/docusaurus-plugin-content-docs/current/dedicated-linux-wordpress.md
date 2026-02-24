---
id: dedicated-linux-wordpress
title: "在 Linux 服务器上安装 WordPress - 启动你自己的官网或博客"
description: "了解如何使用 LAMP 堆栈在 Linux 服务器上安装 WordPress，高效搭建和管理你的网站 → 立即了解"
sidebar_label: 安装 WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

WordPress 是一款流行的网页内容管理系统，用于管理和发布网站。如今，WordPress 已扩展到邮件、论坛、商店等多个领域。得益于活跃的社区，WordPress 拥有丰富的插件生态和模板，极大简化了终端用户的搭建流程。在本指南中，我们将介绍如何在 Linux 服务器上安装 WordPress CMS。

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## 准备工作

首先通过 SSH 连接到你的服务器。如果你还不会操作，可以查看我们的[初始访问（SSH）](dedicated-linux-ssh.md)指南。

:::info
本指南使用的是 Ubuntu 发行版，搭配 Apache 作为 Web 服务器，MySQL 作为数据库，PHP 作为核心依赖。这就是著名的 LAMP 堆栈：Linux、Apache、MySQL 和 PHP。
:::

登录后，先执行更新命令。
```
sudo apt update
```

接着安装所有必要的依赖。直接复制下面整条命令粘贴执行，一次性安装所有依赖。安装过程可能稍长，请耐心等待。
```
sudo apt install apache2 \
                 ghostscript \
                 libapache2-mod-php \
                 mysql-server \
                 php \
                 php-bcmath \
                 php-curl \
                 php-imagick \
                 php-intl \
                 php-json \
                 php-mbstring \
                 php-mysql \
                 php-xml \
                 php-zip
```

依赖安装完成后，建议进行一些小的配置步骤，确保 LAMP 堆栈的核心组件都能正常运行。

### Apache & 防火墙

首先需要配置防火墙，允许 Apache Web 服务器与互联网通信，确保其正常工作。务必创建合适的防火墙规则，保证 Web 服务器对外可访问。

本例中我们使用 **UFW 防火墙**，因为 Apache 已注册了对应的应用配置。如果你用的是其他防火墙，请确保放行 80 端口（HTTP）。想了解更多 Linux 防火墙知识，可以参考我们的[防火墙管理](vserver-linux-firewall.md)指南。

确保 UFW 防火墙已启用，并且已创建 SSH 规则。
```
# 创建允许 SSH 的规则
sudo ufw allow OpenSSH

# 启用 UFW 防火墙
sudo ufw enable
```

:::caution
如果你使用 UFW 防火墙，务必先创建 SSH 规则！否则断开当前连接后将无法再次通过 SSH 登录服务器！
:::

接着创建允许 Apache 的规则，并检查规则是否生效。
```
# 创建允许 Apache 的规则
sudo ufw allow in "Apache Full"

# 查看 UFW 防火墙规则
sudo ufw status
```

:::tip
你可以通过 `ufw app list` 查看可用的应用配置。上面示例中使用的 `Apache Full` 会同时放行 HTTP（80端口）和 HTTPS（443端口）。
:::

你应该能看到 `Apache` 和 `Apache (v6)` 规则状态为 `ALLOW`，这表示防火墙配置正确。同时也会显示之前设置的其他规则，包括 SSH。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

防火墙放行 Apache 后，确认 Apache 是否正常运行。打开浏览器访问你的 IP 地址，格式为：`http://[your_ipaddress]`

如果正常，会看到默认欢迎页面。如果打不开，使用命令检查服务状态：`systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL 设置

接下来进行 MySQL 的首次配置。建议运行安全安装脚本，确保 MySQL 服务器安全。虽然可选，但强烈推荐。执行命令：
```
sudo mysql_secure_installation
```

这会启动交互式配置。首先会询问密码验证策略，建议选择 `Y`，然后选择 `MEDIUM`（输入 `1`）或 `STRONG`（输入 `2`）以确保密码安全。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

接着会询问是否删除匿名用户和禁止 root 远程登录，强烈建议都选择 `Y`，这样能提升安全性。确保测试用户被移除，root 账户只能本地通过 SSH 使用，降低风险。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最后询问是否删除测试数据库并重新加载权限表，同样建议选择 `Y`，测试数据库没用且需要刷新权限表使配置生效。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

现在用以下命令尝试登录 MySQL，确认数据库运行正常：`sudo mysql -u root`。成功后会显示欢迎信息，输入 `quit` 退出。

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### 测试 PHP

最后确认 PHP 是否正常工作。创建一个 `info.php` 文件到 Apache 的 `/var/www/html/` 目录，内容调用 `phpinfo()` 函数。
```
# 使用 nano 编辑器打开新文件
nano /var/www/html/info.php

# 粘贴以下内容
<?php
phpinfo();
?>
```

保存文件，按 `CTRL+X`，然后按 `Y`，回车确认。

访问以下地址，如果显示 PHP 信息页面，说明 PHP 正常：
```
http://[your_ipaddress]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

核心 LAMP 组件测试通过后，就可以开始安装 WordPress 了。

## 安装

WordPress 安装分三步：先准备 MySQL 数据库，再安装 WordPress，最后通过安装向导完成配置。

### MySQL 数据库

安装前先创建一个新的 MySQL 数据库。后续 WordPress 安装向导会用到这些信息，建议直接用我们的示例。

复制以下命令创建数据库、用户和权限。
```
# 登录 MySQL
sudo mysql -u root

# 创建数据库
CREATE DATABASE wordpress;

# 创建专用 wordpress 用户
# 将 [your_password] 替换成你自己的密码
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# 授权用户权限（整条复制）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# 刷新权限表
FLUSH PRIVILEGES;
```

创建完成后输入 `quit` 退出 MySQL。现在可以开始安装 WordPress。

### 安装 WordPress

我们推荐直接从 **wordpress.org** 下载官方最新版，而非使用 APT 包，因为官方建议这样能避免潜在问题。

用下面命令下载最新版本到临时目录：
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

解压压缩包，会得到一个 `wordpress` 文件夹，里面包含所有文件。
```
tar -xvf latest.tar.gz
```

解压后，将文件夹复制到 Apache 的 `/var/www/html/` 目录，确保网页能访问。执行以下命令，复制文件夹、创建上传目录并调整权限，确保 `www-data` 用户组有访问权限。
```
# 复制 wordpress 文件夹并修改所有权
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# 创建上传目录
mkdir /var/www/html/wordpress/wp-content/uploads

# 修改文件权限
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

完成后，WordPress 就安装好了。通过访问 `http://[your_ipaddress]/wordpress` 进入安装向导。

### 安装向导

安装向导是最后一步配置 WordPress。首先选择语言。

接着配置数据库信息。之前已经创建了数据库和用户，安装时填入相应信息即可。如果用我们的示例，填写如下，密码替换成你之前设置的：

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

完成后，点击继续，会提示开始安装。

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

下一页填写网站标题、邮箱、WordPress 管理员用户名和密码。还可以选择搜索引擎是否索引你的网站。

:::tip
一定要设置强密码并保存好登录信息，避免丢失 WordPress 面板访问权限！
:::

准备好后，点击 **安装 WordPress** 按钮完成安装。

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

安装成功后会跳转到登录页面，使用刚才的账号密码登录 WordPress 面板。

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

登录成功后，你就进入了完整安装好的 WordPress 后台。

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## 总结

恭喜你，WordPress 已成功安装并配置完成！下一步，我们**强烈建议**你绑定域名并配置**SSL 证书**，保障数据传输安全，同时让 WordPress 面板访问更方便。请查看我们的[Certbot 指南](dedicated-linux-certbot.md)，重点关注 **Apache 插件**，按照交互式步骤快速轻松地为你的域名配置证书。

后续可以浏览我们的[WordPress 插件](webspace-wordpress-plugins.md)和[WordPress Elementor](webspace-wordpress-elementor.md)指南，了解如何安装插件和使用流行的用户友好页面构建器 Elementor。

有任何问题或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂