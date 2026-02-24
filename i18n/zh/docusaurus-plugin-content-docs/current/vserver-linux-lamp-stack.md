---
id: vserver-linux-lamp-stack
title: "在 Linux 服务器上搭建 LAMP 环境 - 驱动经典 PHP 应用"
description: "了解如何高效搭建 LAMP 环境以托管动态 PHP 网站 → 立即学习"
sidebar_label: Web LAMP 堆栈
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

**LAMP** 堆栈是一套流行的开源软件组合，通常一起安装以便轻松托管动态网站，特别是针对 PHP 网站和应用。这个缩写代表：**L**inux 作为操作系统，**A**pache 作为网页服务器，**M**ySQL 作为数据库，最后是 **P**HP 负责处理。在本指南中，我们将介绍如何在 Linux VPS 上搭建 LAMP 堆栈，并通过一个待办事项网站的示例详细讲解。

<InlineVoucher />

## 准备工作

首先通过 SSH 连接到你的服务器。如果你还不会操作，可以查看我们的[初始访问（SSH）](vserver-linux-ssh.md)指南。

本指南使用 Ubuntu 作为 Linux 发行版。Debian 的操作相同，其他发行版可能略有差异，尤其是命令语法。确保你已经安装好操作系统并通过 SSH 连接到服务器。

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

安装过程可以分为 LAMP 的核心组件，先安装 Apache 网页服务器，再安装 MySQL 数据库，最后安装 PHP。安装过程中，我们会搭建一个用 PHP 编写的测试网站，并访问 MySQL 数据库。所有网页请求最终通过 Apache 处理和响应。

### 安装 Apache

Apache 是用来处理网页请求并返回响应的服务器。用下面命令安装：
```
sudo apt install apache2
```

安装完成后，确保防火墙规则允许外网访问网页服务器。这里我们用 **UFW 防火墙**，因为 Apache 在 UFW 中有注册的应用配置。

如果你用的是其他防火墙，确保放行 80 端口（HTTP）。想了解 Linux 防火墙，可以看我们的[防火墙管理](vserver-linux-firewall.md)指南。

确保 UFW 防火墙已启用，并且有 SSH 规则：
```
# 允许 SSH 连接
sudo ufw allow OpenSSH

# 启用 UFW 防火墙
sudo ufw enable
```

:::caution
如果你用 UFW 防火墙，务必先设置 SSH 规则！否则断开当前连接后将无法再次通过 SSH 登录服务器！
:::

接着创建允许 Apache 的规则，并检查规则是否生效：
```
# 允许 Apache
sudo ufw allow in "Apache Full"

# 查看 UFW 防火墙规则
sudo ufw status
```

:::tip
运行 `ufw app list` 可以查看可用的应用配置。这里用的 `Apache Full` 会同时放行 HTTP（80端口）和 HTTPS（443端口）。
:::

你应该能看到 `Apache` 和 `Apache (v6)` 的规则状态为 `ALLOW`，说明防火墙配置正确。还会显示你之前设置的其他规则，包括 SSH。

![](https://screensaver01.zap-hosting.com/index.php/s/o8NDBppnTwHdSgf/preview)

防火墙放行后，确认 Apache 是否正常运行。用浏览器访问你的 IP 地址，格式为：`http://[your_ipaddress]`

如果正常，你会看到默认欢迎页面。如果打不开，运行命令检查服务状态：`systemctl status apache2`

![](https://screensaver01.zap-hosting.com/index.php/s/irmnDDNi436HH4c/preview)

### 安装 MySQL

接下来安装 MySQL 服务器，作为关系型数据库存储数据：
```
sudo apt install mysql-server
```

安装完成后，建议运行安全配置脚本，提升 MySQL 实例安全性。虽然可选，但强烈推荐。执行：
```
sudo mysql_secure_installation
```

这个脚本会引导你完成交互式设置。首先会询问密码验证策略，建议选择 `Y` 开启，然后选择 `MEDIUM`（输入 1）或 `STRONG`（输入 2）。

![](https://screensaver01.zap-hosting.com/index.php/s/YF6N3iPaDWD4sgX/preview)

接着会询问是否删除匿名用户和禁止 root 远程登录，建议都选择 `Y`，这样更安全。确保 root 只能本地通过 SSH 使用。

![](https://screensaver01.zap-hosting.com/index.php/s/ka6GKkojRPRycZB/preview)

最后询问是否删除测试数据库并重新加载权限表，建议选择 `Y`，因为测试数据库没用，且需要刷新权限。

![](https://screensaver01.zap-hosting.com/index.php/s/42cYTkPaEfo3Jbq/preview)

完成后，尝试登录 MySQL 确认运行正常：
```
sudo mysql -u root
```
成功后会显示欢迎信息，输入 `quit` 退出。

### 安装 PHP

最后安装 PHP，命令如下，会同时安装 Apache 的 PHP 模块和 MySQL 支持：
```
sudo apt install php libapache2-mod-php php-mysql
```

安装完成后，检查 PHP 版本确认安装成功：
```
php -v
```

:::tip PHP 扩展
如果需要更多功能，可以安装额外的 PHP 扩展。运行 `apt search php- | less` 查看可用扩展。

用方向键滚动，按 `Q` 退出。安装扩展用：
```
sudo apt install [php_extension] [...]
```
多个扩展用空格分开，一次装完更快。
:::

建议调整 Apache 的目录索引优先级，让 `index.php` 优先于默认的 `.html`。编辑配置文件：
```
sudo nano /etc/apache2/mods-enabled/dir.conf
```

在 nano 编辑器中，将 `index.php` 移到最前面，改成这样：
```
DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm
```

保存退出（`CTRL + X`，然后 `Y`，最后回车），重启 Apache 使配置生效：
```
sudo systemctl restart apache2
```

### 创建测试网站

LAMP 环境搭建完成后，我们来创建一个测试网站，演示 LAMP 如何协同工作。完全可选，但能帮你理解如何用这些工具搭建自己的网站。

本例中，我们用 PHP 创建一个简单的待办事项网站，读取并显示存储在 MySQL 数据库中的待办条目，通过 Apache 提供服务。

我们用测试域名 `zapdocs.example.com`，实际使用时你需要为域名设置指向服务器 IP 的 `A` 记录。需要帮助请看我们的[域名记录](domain-records.md)指南。

:::note
你也可以不用域名，直接用 IP 访问。此时把文中 `[your_domain]` 替换成任意名字即可。但创建虚拟主机配置时，记得删除 `ServerName` 参数。
:::

#### 配置 Apache

通常网站文件都放在 `/var/www` 目录下。默认 Apache 会有一个 `html` 文件夹，里面是默认页面。为了管理多个网站，建议为每个网站单独建文件夹。

比如为本例创建目录：
```
sudo mkdir /var/www/[your_domain]
```

然后为该域名创建 Apache 虚拟主机配置文件：
```
sudo nano /etc/apache2/sites-available/[your_domain].conf
```

复制下面模板，替换 `[your_domain]` 为你的域名：
```
<VirtualHost *:80>
    ServerName [your_domain]
    ServerAlias www.[your_domain]
    ServerAdmin webmaster@localhost
    DocumentRoot /var/www/[your_domain]
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

这个配置监听 80 端口，匹配你的域名请求，指定网站根目录为刚建的文件夹。

保存退出后，建议用命令检查配置语法：
```
sudo apache2ctl configtest
```

启用新虚拟主机：
```
sudo a2ensite [your_domain]
```

:::note 无域名情况
如果不用域名，删除或注释掉 `ServerName` 行（加 `#`），并禁用默认虚拟主机：
```
sudo a2dissite 000-default
```
:::

重启 Apache 使配置生效：
```
sudo systemctl restart apache2
```

#### 创建网站内容

配置好 Apache 后，网站目录目前是空的，访问时不会显示内容。我们来创建一个简单的待办事项网站。

##### 准备数据库

先登录 MySQL：
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
# 把 [your_password] 替换成你自己的密码
CREATE USER todo@localhost IDENTIFIED BY '[your_password]';

# 授权用户权限（复制为一条命令）
GRANT SELECT,INSERT,UPDATE,DELETE,CREATE,DROP,ALTER
ON todowebsite.*
TO todo@localhost;

# 刷新权限
FLUSH PRIVILEGES;
```

完成后输入 `quit` 退出 MySQL。

##### PHP 网站文件

最后创建 PHP 网站文件，放在 `/var/www/[your_domain]/index.php`。打开编辑器：
```
sudo nano /var/www/[your_domain]/index.php
```

复制下面代码，注意替换 `[your_password]` 为你刚才设置的密码。

```php
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
      <p>For our awesome ZAP-Hosting guide: <a href="https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack">https://zap-hosting.com/guides/docs/vserver-linux-lamp-stack</a></p>
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

                  // 显示创建日期
                  echo " - Creation Date: " . htmlspecialchars($entry['creation_date']);
                  echo "</li>";
              }
          } else {
              // 没有数据时显示提示
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

复制完成后保存退出（`CTRL + X`，`Y`，回车）。

#### 测试网站

恭喜你，已经成功搭建了一个利用 LAMP 堆栈的测试待办事项网站！

现在可以通过之前配置的域名（HTTP 80端口）访问网站，比如本例的 `zapdocs.example.com`。页面应该类似这样：

![](https://screensaver01.zap-hosting.com/index.php/s/NgK2n8xN3wZPLeP/preview)

## 总结

恭喜你成功安装并配置了 LAMP 堆栈！下一步，我们**强烈建议**设置域名和**SSL 证书**，确保网站数据传输安全。请查看我们的[Certbot 指南](dedicated-linux-certbot.md)，重点关注 **Apache 插件**，按照交互式步骤快速轻松地为你的域名配置证书。

如有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />