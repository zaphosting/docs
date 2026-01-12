---
id: dedicated-linux-lemp-stack
title: "独立服务器：搭建 LEMP 环境 - Linux、Nginx、MySQL、PHP"
description: "了解如何在 Linux 服务器上搭建 LEMP 环境以托管动态 PHP 网站，附实用示例 → 立即学习"
sidebar_label: Web LEMP 环境
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**LEMP** 堆栈是一套流行的开源软件组合，专为简化动态网站托管而设计，特别适合 PHP 网站和应用。这个缩写代表：操作系统使用 **L**inux，Web 服务器使用 "**E**ngine x"（nginx），数据库使用 **M**ySQL，最后用 **P**HP 进行处理。本指南将带你一步步在 Linux 独立服务器上搭建 LEMP 环境，并通过一个待办事项网站示例详细讲解。

## 准备工作

首先通过 SSH 连接到你的服务器。如果你还不会操作，可以参考我们的[初次访问（SSH）](vserver-linux-ssh.md)指南。

本指南使用 Ubuntu 作为 Linux 发行版。Debian 也适用，其他发行版命令语法可能略有差异。确保你已经安装好操作系统并通过 SSH 连接服务器。

安装前，务必先更新所有软件包，命令如下：
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

## 安装步骤

安装过程分为 LEMP 的核心组件：先安装 Nginx Web 服务器，再安装 MySQL 数据库，最后安装 PHP。安装过程中，我们会搭建一个用 PHP 编写、访问 MySQL 数据库的测试网站。所有请求最终通过 Nginx 处理和响应。

### 安装 Nginx

Nginx 是用来处理网页请求并返回响应的 Web 服务器。用下面命令安装：
```
sudo apt install nginx
```

安装完成后，确保防火墙规则允许外网访问 Web 服务器。这里示例使用 **UFW 防火墙**，因为 Nginx 已注册了对应的应用配置。

如果你用的是其他防火墙，确保放行 80 端口（HTTP）。更多防火墙管理请看我们的[防火墙管理](vserver-linux-firewall.md)指南。

启用 UFW 防火墙并允许 SSH 连接：
```
# 允许 SSH 连接
sudo ufw allow OpenSSH

# 启用 UFW 防火墙
sudo ufw enable
```

:::caution
如果你用 UFW 防火墙，务必先设置允许 SSH 的规则！否则断开当前连接后将无法再次通过 SSH 登录服务器！
:::

接着允许 Nginx 访问，并检查规则是否生效：
```
# 允许 Nginx
sudo ufw allow in "Nginx Full"

# 查看 UFW 防火墙状态
sudo ufw status
```

:::tip
运行 `ufw app list` 可以查看可用的应用配置。这里用的 `Nginx Full` 会同时放行 HTTP（80端口）和 HTTPS（443端口）。
:::

你应该能看到 `Nginx` 和 `Nginx (v6)` 规则状态为 `ALLOW`，表示防火墙配置正确。还会显示之前设置的其他规则，包括 SSH。

![](https://screensaver01.zap-hosting.com/index.php/s/A36rfRzL3gFGq9x/preview)

防火墙配置好后，打开浏览器访问你的服务器 IP 地址，格式为 `http://[你的IP地址]`。

如果正常，会看到默认欢迎页面。若无法访问，用命令检查 Nginx 状态：`systemctl status nginx`

![](https://screensaver01.zap-hosting.com/index.php/s/EqFoyXMJMaHc3dc/preview)

### 安装 MySQL

接下来安装 MySQL 数据库，用于关系型数据的持久存储。安装命令：
```
sudo apt install mysql-server
```

安装完成后，建议运行安全配置脚本，增强 MySQL 实例安全性。虽然可选，但强烈推荐。执行：
```
sudo mysql_secure_installation
```

按提示操作。首先会询问密码验证策略，建议选择 `Y` 启用，然后选择 `MEDIUM`（输入 `1`）或 `STRONG`（输入 `2`）级别。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

接着询问是否删除匿名用户和禁止远程 root 登录，出于安全考虑，建议都选择 `Y`。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最后询问是否删除测试数据库并重新加载权限表，也建议选择 `Y`。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

确认 MySQL 正常运行，尝试登录：
```
sudo mysql -u root
```

成功后会显示欢迎信息，输入 `quit` 退出。

### 安装 PHP

LEMP 的最后一环是 PHP。Nginx 需要通过 `php-fpm`（PHP FastCGI 进程管理器）来处理 PHP 请求。安装最新版本的 php-fpm 和 PHP MySQL 插件：
```
sudo apt install php-fpm php-mysql
```

安装完成后，检查 PHP 版本确认安装成功：
```
php -v
```

:::tip PHP 扩展
高级用例可能需要额外的 PHP 扩展。运行 `apt search php- | less` 查看可用扩展列表。

用方向键滚动，按 `Q` 退出。安装扩展示例：
```
sudo apt install [php_extension] [...]
```
多个扩展用空格分隔，一次安装更快。
:::

### 创建测试网站

LEMP 环境搭建完成后，我们来创建一个测试网站，演示 LEMP 如何协同工作打造动态网站。完全可选，但有助于理解。

示例是一个简单的 PHP 待办事项网站，从 MySQL 数据库读取并显示任务列表，通过 Nginx 提供服务。

示例中使用测试域名 `zapdocs.example.com`，实际使用时请确保为该域名设置了指向服务器 IP 的 `A` 记录。需要帮助请看我们的[域名记录](domain-records.md)指南。

:::note
你也可以不使用域名，直接用 IP 访问。此时创建服务器块时请删除 `server_name` 参数。
:::

#### 配置 Nginx

一般网站文件存放在 `/var/www` 目录。默认 Nginx 会有一个 `html` 文件夹存放默认页面。为了管理多个网站，建议为每个网站单独创建文件夹。

创建网站目录：
```
sudo mkdir /var/www/[your_domain]
```

为该域名创建 Nginx 服务器块配置文件：
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
请将 `[your_phpversion]` 替换为你安装的 PHP 版本号。运行 `php -v` 查看版本，例如 `PHP 8.3.6`，则填写 `8.3`，即：
```
fastcgi_pass unix:/var/run/php/php8.3-fpm.sock;
```
:::

该配置监听 80 端口，匹配指定域名，并将网站根目录指向你刚建的文件夹。

保存并退出 nano，按 `CTRL + X`，然后 `Y` 确认，最后回车。

启用配置：
```
sudo ln -s /etc/nginx/sites-available/[your_domain].conf /etc/nginx/sites-enabled/
```

:::note 无域名使用
如果不使用域名，请删除或注释掉 `server_name` 行（加 `#`），并禁用默认服务器块：
```
sudo unlink /etc/nginx/sites-enabled/default
```
:::

用命令检查配置语法：
```
sudo nginx -t
```

无误后重载 Nginx：
```
sudo systemctl reload nginx
```

#### 创建网站内容

现在配置好了 Nginx，文件夹是空的，网站还没内容。我们来创建一个简单的待办事项网站。

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

创建专用用户：
```
# 创建用户，替换 [your_password] 为你的密码
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# 授权用户权限（整行复制）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# 刷新权限
FLUSH PRIVILEGES;
```

完成后输入 `quit` 退出 MySQL。

##### PHP 网站文件

在 `/var/www/[your_domain]` 目录创建 `index.php` 文件：
```
sudo nano /var/www/[your_domain]/index.php
```

复制以下代码，注意替换 `[your_password]` 为你刚才设置的密码：

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

// 执行 SQL 查询，获取待办事项，按创建时间倒序
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
                  // 显示名称，防止 XSS 攻击
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
              // 无数据时显示提示
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

保存并退出 nano。

#### 测试网站

恭喜！你已经成功搭建了一个利用 LEMP 堆栈的测试待办事项网站！

现在可以通过之前配置的域名（HTTP 80 端口）访问，比如示例中的 `zapdocs.example.com`。页面效果大致如下：

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## 总结

恭喜你成功安装并配置了 LEMP 环境！下一步，我们**强烈建议**为网站配置域名和**SSL 证书**，确保数据传输安全。请查看我们的[Certbot 指南](vserver-linux-certbot.md)，重点关注 **Nginx 插件**，按照交互式步骤快速为你的域名申请证书。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂