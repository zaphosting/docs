---
id: vserver-linux-lemp-stack
title: "VPS：搭建 LEMP 环境 - Linux、Nginx、MySQL、PHP"
description: "了解如何在 Linux VPS 服务器上搭建 LEMP 环境以托管动态 PHP 网站 → 立即学习"
sidebar_label: Web LEMP 环境
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**LEMP** 环境是一套流行的开源软件组合，通常一起搭建，用于轻松托管动态网站，特别是针对 PHP 网站和应用。这个缩写代表：操作系统使用 **L**inux，Web 服务器使用 "**E**ngine x"（即 nginx），数据库使用 **M**ySQL，最后用 **P**HP 进行处理。在本指南中，我们将介绍如何在 Linux VPS 上搭建 LEMP 环境，并通过一个待办事项网站示例详细讲解。

<InlineVoucher />

## 准备工作

首先通过 SSH 连接到你的服务器。如果你还不会操作，请查看我们的[初次访问（SSH）](vserver-linux-ssh.md)指南。

本指南使用 Ubuntu 作为 Linux 发行版。Debian 的操作相同，其他发行版可能略有差异，命令语法可能稍有不同。确保你已经安装了操作系统并通过 SSH 连接到服务器。

和往常一样，安装前请确保所有软件包都是最新的，执行以下命令：
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

## 安装过程

安装过程可以分为 LEMP 的核心组件，先安装 Nginx Web 服务器，再安装 MySQL 数据库，最后安装 PHP。安装过程中，我们会搭建一个用 PHP 编写的测试网站，它会访问 MySQL 数据库，所有请求最终通过 Nginx 处理和响应。

### 安装 Nginx

Nginx 是用来处理网页请求并返回响应的 Web 服务器。用下面命令安装：
```
sudo apt install nginx
```

安装完成后，确保防火墙规则允许 Web 服务器对外访问。这里我们使用 **UFW 防火墙**，因为 Nginx 已经注册了对应的应用配置。

如果你使用其他防火墙，请确保开放端口 80（HTTP）。更多防火墙相关内容请参考我们的[管理防火墙](vserver-linux-firewall.md)指南。

确保 UFW 防火墙已启用，并且已创建 SSH 规则：
```
# 允许 SSH 连接
sudo ufw allow OpenSSH

# 启用 UFW 防火墙
sudo ufw enable
```

:::caution
如果你使用 UFW 防火墙，务必先创建 SSH 规则！否则断开当前连接后将无法再次通过 SSH 登录服务器！
:::

接着创建允许 Nginx 的规则，并检查规则是否生效：
```
# 允许 Nginx
sudo ufw allow in "Nginx Full"

# 查看 UFW 防火墙规则
sudo ufw status
```

:::tip
运行 `ufw app list` 可以查看可用的应用配置。这里使用 `Nginx Full` 会同时开放 HTTP（80端口）和 HTTPS（443端口）。
:::

你应该能看到 `Nginx` 和 `Nginx (v6)` 规则状态为 `ALLOW`，表示防火墙配置正确。还会显示之前设置的其他规则，包括 SSH。

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

防火墙开放后，确认 Nginx 是否正常运行。打开浏览器访问你的 IP 地址，格式为：`http://[your_ipaddress]`

如果正常，会看到默认欢迎页面。若无法访问，使用命令检查服务状态：`systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### 安装 MySQL

接下来安装 MySQL 服务器，作为关系型数据库存储数据：
```
sudo apt install mysql-server
```

安装完成后，建议运行安全配置脚本，增强 MySQL 实例安全性。虽然可选，但强烈推荐。执行：
```
sudo mysql_secure_installation
```

该脚本会引导你完成交互式设置。首先会询问密码验证策略，建议选择 `Y` 启用，然后选择 `1`（中等）或 `2`（强）安全级别。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

接着会询问是否删除匿名用户和禁止 root 远程登录，建议都选择 `Y`，以提升安全性。这样测试用户会被删除，root 只能本地通过 SSH 使用，降低风险。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最后询问是否删除测试数据库并重新加载权限表，建议选择 `Y`，因为测试数据库不需要，且需要刷新权限表使改动生效。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

完成后，尝试登录 MySQL 检查是否运行正常：
```
sudo mysql -u root
```
成功登录后会显示欢迎信息，输入 `quit` 退出。

### 安装 PHP

LEMP 最后一个核心组件是 PHP。Nginx 需要借助 `php-fpm`（PHP FastCGI 进程管理器）来处理 PHP 请求。Nginx 会将请求转发给 `php-fpm`，然后再响应客户端。

安装最新的 php-fpm 及 MySQL PHP 插件，确保 Nginx 能与 PHP 和 MySQL 配合：
```
sudo apt install php-fpm php-mysql
```

安装完成后，检查 PHP 版本确认安装成功：
```
php -v
```

:::tip PHP 扩展
如果需要更多功能，可以安装额外的 PHP 扩展。运行 `apt search php- | less` 查看可用扩展。

用方向键滚动，按 `Q` 退出。安装扩展示例：
```
sudo apt install [php_extension] [...]
```
多个扩展用空格分隔，一次安装更快。
:::

### 创建测试网站

所有 LEMP 组件安装完成后，我们来创建一个测试网站，演示 LEMP 如何协同工作搭建动态网站。完全可选，但有助于理解如何用这些工具搭建自己的网站。

本例中，我们用 PHP 创建一个简单的待办事项网站，从 MySQL 数据库读取并显示待办条目，通过 Nginx 提供服务。

示例中使用测试域名 `zapdocs.example.com`，实际使用时你需要为域名设置指向服务器 IP 的 `A` 记录。需要帮助请看我们的[域名记录](domain-records.md)指南。

:::note
你也可以不使用域名，直接用 IP 访问。此时请在后续创建服务器块时删除 `server_name` 参数。
:::

#### 配置 Nginx

一般网站文件都存放在 `/var/www` 目录。默认 Nginx 会有一个 `html` 文件夹存放默认页面。为了管理多个网站，建议为每个网站单独创建文件夹。

创建网站文件夹：
```
sudo mkdir /var/www/[your_domain]
```
本例为 `/var/www/zapdocs.example.com`。

接着在 `sites-available` 目录创建 Nginx 服务器块配置文件：
```
sudo nano /etc/nginx/sites-available/[your_domain].conf
```

复制以下模板，替换 `[your_domain]` 为你的域名：
```
server {
    listen 80;
    server_name [your_domain] www.[your_domain];
    root /var/www/[your_domain];

    index index.php index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }

    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php[your_phpversion]-fpm.sock;
     }

    location ~ /\.ht {
        deny all;
    }
}
```

:::important PHP 版本
请将 `[your_phpversion]` 替换为当前安装的 PHP 版本。运行 `php -v` 查看版本，例如 `PHP 8.3.6`，则填写 `8.3`，即：
```
fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
```
:::

该配置监听 80 端口，匹配指定域名，网站根目录指向你刚建的文件夹。

保存并退出 nano（`CTRL + X`，然后 `Y`，最后回车）。

激活配置，创建软链接到 `sites-enabled`：
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note 无域名使用
如果不使用域名，删除或注释掉 `server_name` 行（加 `#`），并禁用默认服务器块：
```
sudo unlink /etc/nginx/sites-enabled/default
```
:::

建议用命令检查配置语法：
```
sudo nginx -t
```

最后重载 Nginx 使配置生效：
```
sudo systemctl reload nginx
```

#### 创建网站内容

配置完成后，网站目录为空，访问时不会显示内容。我们将创建一个简单的待办事项网站。

##### 准备数据库

登录 MySQL：
```
sudo mysql -u root
```

创建数据库和表：
```
# 创建数据库
CREATE DATABASE todowebsite;

# 选择数据库
USE todowebsite;

# 创建待办事项表
CREATE TABLE todoitems (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

插入几条示例数据：
```
INSERT INTO todoitems (name, is_completed) VALUES ('Create ZAP-Docs Guide', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Buy a ZAP-Hosting Server', 1);
INSERT INTO todoitems (name, is_completed) VALUES ('Join ZAP-Hosting Discord', 0);
INSERT INTO todoitems (name, is_completed) VALUES ('Have a great day!', 0);
```

创建专用用户 `todo`，用于网站访问数据库：
```
# 创建用户
# 将 [your_password] 替换为你的密码
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# 授权用户权限（复制为一条命令）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# 刷新权限
FLUSH PRIVILEGES;
```

准备完成后，输入 `quit` 退出 MySQL。

##### PHP 网站文件

最后，创建网站的 PHP 文件。打开编辑器：
```
sudo nano /var/www/[your_domain]/index.php
```

复制以下代码，替换 `[your_password]` 为你刚才设置的密码。该代码连接数据库，查询待办事项，并显示在网页上。

:::important
务必将 `[your_password]` 替换为你为 `todo` 用户设置的密码。
:::

```
<?php
// 准备 MySQL 连接
$servername = "localhost";
$username = "todo";
$password = "[your_password]";
$dbname = "todowebsite";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检查连接是否成功，失败则报错
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 执行 SQL 查询，获取待办事项，按创建时间倒序排列
$sql = "SELECT id, name, is_completed, creation_date FROM todoitems ORDER BY creation_date DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF--8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-Do List</title>
  </head>
  <body>
      <h1>Awesome To-Do List :D</h1>
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lemp-stack</a></p>
      <ul>
          <?php
          // 判断是否有结果
          if ($result->num_rows > 0) {
              // 遍历结果数组
              foreach ($result as $entry) {
                  echo "<li>";
                  // 显示名称，使用 htmlspecialchars 防止 XSS 攻击
                  echo htmlspecialchars($entry["name"]);

                  // 显示完成状态
                  if ($entry["is_completed"]) {
                      echo " <strong>(Completed)</strong>";
                  } else {
                      echo " <strong>(Incomplete)</strong>";
                  }

                  // 显示创建时间
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // 无数据时显示默认信息
              echo "<li>No to-do items found.</li>";
          }
          ?>
      </ul>
  </body>
</html>

<?php
// 关闭数据库连接
$conn->close();
?>
```

保存并退出 nano（`CTRL + X`，`Y`，回车）。

#### 测试网站

恭喜！你已经成功搭建了一个利用 LEMP 环境的测试待办事项网站！

现在可以通过之前配置的域名（HTTP 80端口）访问网站，本例是 `zapdocs.example.com`。页面效果大致如下：

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## 总结

恭喜你成功安装并配置了 LEMP 环境！下一步，我们**强烈建议**为网站配置域名和**SSL 证书**，确保数据传输安全。请查看我们的[Certbot 指南](vserver-linux-certbot.md)，重点关注 **Nginx 插件**，按照交互式步骤快速轻松地为你的域名配置证书。

如有任何问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />