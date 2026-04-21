---
id: dedicated-linux-wordpress
title: "在 Linux 服务器上安装 WordPress - 启动你自己的官网或博客"
description: "了解如何使用 LAMP 堆栈在 Linux 服务器上安装 WordPress，高效构建和管理你的网站 → 立即了解更多"
sidebar_label: 安装 WordPress
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

WordPress 是一个流行的网页内容管理系统，用于管理和发布网站。如今，WordPress 已扩展到邮件、论坛、商店等多个领域。这得益于一个活跃的社区，建立了强大的插件生态系统和模板，使终端用户轻松搭建各种网站。在本指南中，我们将介绍如何在 Linux 服务器上安装 WordPress CMS。

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)



## 使用一键应用安装器安装 WordPress

你可以通过我们的 **一键应用安装器** 在 VPS 网页界面直接安装 **WordPress**。完成初始应用设置后，打开应用目录，搜索 **WordPress**，并根据你的项目、环境和域名偏好开始部署。这为你提供了一个快速且用户友好的方式来部署和管理 **WordPress**，无需手动命令行设置，同时还能享受集成的网页管理、自定义域名支持和可用的 SSL 证书配置。

## 准备工作

首先通过 SSH 连接到你的服务器。如果你不知道如何操作，请查看我们的 [初始访问（SSH）](dedicated-linux-ssh.md) 指南。

:::info
本指南中，我们将使用 Ubuntu 发行版，搭配 Apache 作为网页服务器，MySQL 作为数据库，PHP 作为核心依赖。这就是所谓的 LAMP 堆栈：Linux、Apache、MySQL 和 PHP。
:::

登录后，先运行更新命令。
```
sudo apt update
```

接着你可以安装所有必要的依赖。直接复制下面整条命令粘贴执行，一次性安装所有依赖。安装过程可能需要一些时间，请耐心等待。
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

依赖安装完成后，建议进行一些小的设置步骤，确保 LAMP 堆栈的核心依赖都能正常工作。

### Apache 与防火墙

首先，你需要配置防火墙，允许 Apache 网页服务器与互联网通信，确保其正常运行。务必创建合适的防火墙规则，保证网页服务器对外可访问。

本例中，我们使用 **UFW 防火墙**，因为 Apache 已注册了对应的应用配置。如果你使用其他防火墙，请确保开放端口 80（HTTP）。想了解更多 Linux 防火墙知识，请参考我们的 [管理防火墙](vserver-linux-firewall.md) 指南。

确保 UFW 防火墙已启用，并且已创建 SSH 规则。
```
# 创建允许 SSH 的规则
sudo ufw allow OpenSSH

# 启用 UFW 防火墙
sudo ufw enable
```

:::caution
如果你使用 UFW 防火墙，务必先创建 SSH 规则！否则一旦断开当前连接，将无法再次通过 SSH 登录服务器！
:::

接着创建允许 Apache 的规则，并检查规则是否生效。
```
# 创建允许 Apache 的规则
sudo ufw allow in "Apache Full"

# 查看 UFW 防火墙规则
sudo ufw status
```

:::tip
你可以通过运行 `ufw app list` 查看可用的配置文件。上面示例中使用的 `Apache Full` 会同时开放 HTTP（80端口）和 HTTPS（443端口）。
:::

你应该能看到 `Apache` 和 `Apache (v6)` 规则状态为 `ALLOW`，这说明防火墙配置正确。同时也会显示你之前设置的其他规则，包括 SSH。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

防火墙开放 Apache 后，确认 Apache 是否正常运行。你可以在浏览器访问你的 IP 地址，格式为：`http://[your_ipaddress]`

如果正常，你会看到默认的欢迎页面。如果无法访问，使用命令检查服务状态：`systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### MySQL 设置

接下来进行 MySQL 的首次配置。建议运行安全安装脚本，确保你的 MySQL 服务器实例安全。此步骤可选，但强烈推荐。运行命令：
```
sudo mysql_secure_installation
```

这会引导你完成交互式设置。首先会询问密码验证策略，建议选择 `Y`，确保未来只允许安全密码，然后选择 `MEDIUM`（输入 `1`）或 `STRONG`（输入 `2`）。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

接着会询问是否删除匿名用户和禁止 root 远程登录。出于安全考虑，强烈建议选择 `Y`。这样测试用户会被移除，root 用户只能本地通过 SSH 使用，降低风险。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最后会询问是否删除测试数据库并重新加载权限表。建议选择 `Y`，因为测试数据库不需要，且需要重新加载权限表使改动生效。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

现在用以下命令检查 MySQL 是否运行正常，尝试登录：
```
sudo mysql -u root
```
如果成功，会显示欢迎信息。完成后输入 `quit` 退出。

![](https://screensaver01.zap-hosting.com/index.php/s/gFKBAZyaFiHgrCz/preview)

### 测试 PHP

最后确认 PHP 是否正常工作。你需要在 Apache 的 `/var/www/html/` 目录下创建一个 `info.php` 文件，内容调用 `phpinfo()` 函数。
```
# 用 nano 编辑器打开新文件
nano /var/www/html/info.php

# 粘贴以下内容
<?php
phpinfo();
?>
```

保存文件，按 `CTRL+X`，然后按 `Y`，回车确认。

然后访问以下网址，如果 PHP 正常，会显示 PHP 信息页面：
```
http://[your_ipaddress]/info.php
```

![](https://screensaver01.zap-hosting.com/index.php/s/bSg3nHaKRatBxFR/preview)

核心 LAMP 依赖测试无误后，就可以开始安装 WordPress CMS 了。

## 安装

WordPress 安装分为三部分：先准备 MySQL 数据库，再安装 WordPress，最后通过安装向导完成配置。

### MySQL 数据库

安装前，你需要创建一个新的 MySQL 数据库。记住这些信息，后续 WordPress 安装向导会用到。建议参考我们的示例。

复制以下命令创建数据库、表和用户。
```
# 登录 MySQL
sudo mysql -u root

# 创建数据库
CREATE DATABASE wordpress;

# 创建专用 wordpress 用户
# 将 [your_password] 替换为你自己的密码
CREATE USER wordpress@localhost IDENTIFIED BY '[your_password]';

# 授权用户权限（复制为一条命令）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON wordpress.*
TO wordpress@localhost;

# 刷新权限表
FLUSH PRIVILEGES;
```

创建完成后，输入 `quit` 退出。现在准备安装 WordPress。

### 安装 WordPress

我们推荐直接使用 **wordpress.org** 的官方发布版本，而非 APT 包，因为 WordPress 官方建议这样做以避免潜在问题。

用下面命令下载最新版本到临时目录：
```
cd /tmp && wget https://wordpress.org/latest.tar.gz
```

解压文件，会得到一个 `wordpress` 文件夹，里面包含所有必要文件。
```
tar -xvf latest.tar.gz
```

解压后，将文件夹复制到 Apache 的 `/var/www/html/` 目录，使其通过网页访问。执行以下命令，复制文件夹，创建上传目录，并调整权限，确保 `www-data` 组（网页服务器用户）有访问权限。
```
# 复制 wordpress 文件夹并更新所有权
cp -R wordpress /var/www/html/
chown -R www-data:www-data /var/www/html/wordpress/

# 创建上传目录
mkdir /var/www/html/wordpress/wp-content/uploads

# 调整文件权限
chmod -R 755 /var/www/html/wordpress/
chown -R www-data:www-data /var/www/html/wordpress/wp-content/uploads/
```

完成后，WordPress 应该已安装。通过访问 `http://[your_ipaddress]/wordpress` 进入安装向导。

### 安装向导

安装向导引导你完成 WordPress 配置，这是安装的最后一步。首先选择语言。

接着配置数据库设置。你之前已经在 MySQL 中准备好了数据库和用户，安装向导中填写相同的凭据。如果你按照示例操作，填写如下，记得将 `[your_password]` 替换成之前设置的密码。

![](https://screensaver01.zap-hosting.com/index.php/s/4ZmA43WMjf2bBxB/preview)

完成后，点击运行安装，这是最后一步。

![](https://screensaver01.zap-hosting.com/index.php/s/7kfjz8p2cCzoD8S/preview)

接下来页面会让你填写网站标题、邮箱地址、WordPress 管理员用户名和密码。你还可以选择搜索引擎可见性，决定是否允许网站被索引。

:::tip
务必设置强密码并保存好凭据，避免丢失 WordPress 面板访问权限！
:::

准备好后，点击 **安装 WordPress** 按钮完成安装。

![](https://screensaver01.zap-hosting.com/index.php/s/BZwxEpQAs3sKcc7/preview)

安装成功后会跳转到登录页面。点击登录，使用刚才的账号密码首次登录 WordPress 面板！

![](https://screensaver01.zap-hosting.com/index.php/s/qEGcRQFWBcLDosj/preview)

登录成功后，你就进入了完整安装好的 WordPress 面板。

![](https://screensaver01.zap-hosting.com/index.php/s/r26L7xASWY3d5Z5/preview)

## 总结

恭喜你，WordPress 已成功安装并配置完成！下一步，我们**强烈建议**你设置域名和 **SSL 证书**，确保数据安全传输，同时让 WordPress 面板访问更方便。请查看我们的 [Certbot 指南](dedicated-linux-certbot.md)，重点关注 **Apache 插件**，按照交互式步骤快速轻松地为你的域名配置证书。

后续你可以浏览我们的 [WordPress 插件](webspace-wordpress-plugins.md) 和 [WordPress Elementor](webspace-wordpress-elementor.md) 指南，了解如何安装插件和使用流行且易用的页面构建器 Elementor。

如有任何疑问或需要帮助，欢迎随时联系在线支持团队，我们每天都在这里为你服务！🙂