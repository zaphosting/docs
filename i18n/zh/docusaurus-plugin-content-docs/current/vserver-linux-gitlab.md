---
id: vserver-linux-gitlab
title: "在 Linux 服务器上安装 GitLab - 搭建属于你的 DevOps 平台"
description: "了解如何高效地在 Linux 上安装 GitLab，优化 DevOps 工作流程，提升团队协作 → 立即了解更多"
sidebar_label: 安装 GitLab
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

GitLab 是一个全面的 DevOps 平台，帮助团队协作编写代码、自动化工作流程，并高效管理整个软件开发生命周期。本指南将讲解如何在 Linux 服务器上安装 GitLab。

![](https://screensaver01.zap-hosting.com/index.php/s/ZWMPsLzrXZjnqEE/preview)

<InlineVoucher />

## 准备工作

以下要求由官方 [GitLab 团队](https://docs.gitlab.com/ee/install/requirements.html) 推荐，强烈建议遵循这些前置条件，以避免后续出现不便和问题。

#### 硬件

| 组件           | 最低配置               | 推荐配置                   |
| -------------- | ---------------------- | -------------------------- |
| CPU            | 2x 2 GHz               | 4x 2.6+ GHz                |
| 内存           | 4 GB                   | 8 GB                       |
| 存储           | 10 GB                  | 50+ GB                     |
| 带宽           | 100 mbit/s（上下行）   | 100 mbit/s（上下行）       |

#### 软件

| 平台             | 选项                                                        |
| ---------------- | ------------------------------------------------------------ |
| 操作系统         | Ubuntu (20.04, 22.04, 24.04), Debian(10, 11, 12), OpenSUSE (15.5) |
| 数据库           | PostgreSQL 14.9+                                             |
| Web 服务器       | NGINX（随 GitLab 捆绑），Puma 6.4.2+                         |
| 其他             | Redis 7.x+, Sidekiq 7.3.2+, Prometheus 2.54.1+               |

:::info
想获取最准确、最新的规格信息，请参考 GitLab 官方的 [硬件要求](https://docs.gitlab.com/ee/install/requirements.html) 文档。
:::

安装 GitLab 之前，需要通过 SSH 客户端连接到你的 Linux 服务器。请查看我们的 [初始访问（SSH）](vserver-linux-ssh.md) 指南了解详情。

连接成功后，即可开始安装 GitLab 所需的依赖包。

## 第一步：安装依赖

首先，你需要安装一些依赖来运行 GitLab 安装程序。使用以下命令在你的 Linux 服务器上安装所需依赖。

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

更新软件包列表至最新版本，并安装 OpenSSH Server 及其依赖。GitLab 的 Web 界面就是通过它来托管的。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates tzdata perl
```

如果你希望 GitLab 能发送邮件通知，可以选择安装 Postfix（SMTP 服务器）。这是**可选**的。

想使用邮件通知的话，运行以下命令安装 Postfix：
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="debian" label="Debian">

更新软件包列表至最新版本，并安装 OpenSSH Server 及其依赖。GitLab 的 Web 界面就是通过它来托管的。

```
sudo apt update
sudo apt-get install -y curl openssh-server ca-certificates perl
```

如果你希望 GitLab 能发送邮件通知，可以选择安装 Postfix（SMTP 服务器）。这是**可选**的。

想使用邮件通知的话，运行以下命令安装 Postfix：
```
sudo apt-get install -y postfix
```

</TabItem>

<TabItem value="opensuse" label="OpenSUSE">

安装 OpenSSH Server 及其依赖。GitLab 的 Web 界面就是通过它来托管的。

```
sudo zypper install curl openssh perl
```

接着，确保 OpenSSH 守护进程已启用，运行以下命令：
```
sudo systemctl status sshd
sudo systemctl enable sshd
sudo systemctl start sshd
```

如果你使用 `firewalld`，请确保防火墙开放了必要端口。

先运行以下命令确认是否启用了 `firewalld`：

```bash
sudo systemctl status firewalld
```

如果启用了，请确保开放默认端口（80 和 443）：

```
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo systemctl reload firewalld
```

如果你希望 GitLab 能发送邮件通知，可以选择安装 Postfix（SMTP 服务器）。这是**可选**的。

想使用邮件通知的话，运行以下命令安装并启动 Postfix：
```
sudo zypper install postfix
sudo systemctl enable postfix
sudo systemctl start postfix
```

</TabItem>
</Tabs>

:::info
安装 Postfix 时可能会弹出配置界面，选择“Internet Site”并按回车。邮件名称填写你的 Linux 服务器外部 DNS，继续按回车接受默认设置即可。

如果你想用其他方案发送邮件，请跳过此步骤，安装完 GitLab 后按照官方 GitLab 团队提供的指南 [配置外部 SMTP 服务器](https://docs.gitlab.com/omnibus/settings/smtp)。
:::

## 第二步：安装 GitLab

安装完所有依赖后，就可以安装 GitLab 了。

本指南将直接从官方软件源安装 GitLab。

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
以下脚本会将 GitLab 仓库添加到 apt 包管理器：

```
curl https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.deb.sh | sudo bash
```

完成后，安装 `gitlab-ee` 包：

```bash
sudo apt-get install -y gitlab-ee
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
以下脚本会将 GitLab 仓库添加到 Zypper 包管理器：

```
curl -sS https://packages.gitlab.com/install/repositories/gitlab/gitlab-ee/script.rpm.sh | sudo bash
```

完成后，安装 `gitlab-ee` 包：

```bash
sudo zypper install gitlab-ee
```
</TabItem>

</Tabs>

安装完成后，你的 Linux 服务器上就有了 GitLab。接下来配置一些关键设置，确保服务器正常运行。

## 第三步：配置 GitLab

为了确保一切正常，需要修改配置文件。用你喜欢的文本编辑器打开 GitLab 配置文件。这里以自带的 `nano` 为例：
```
sudo nano /etc/gitlab/gitlab.rb
```

找到 `external_url` 行，填写你的域名，或者如果没有域名，填写 Linux 服务器的 IP 地址。

<!-- 以下代码来自 /etc/gitlab/gitlab.rb 文件 -->
```
## GitLab URL
##! GitLab 可访问的 URL。
##! 更多关于配置 external_url 的信息请参考：
##! https://docs.gitlab.com/omnibus/settings/configuration.html#configuring-the-external-url-for-gitlab
##!
##! 注意：安装/升级时，环境变量 EXTERNAL_URL 的值会用来填充/替换此值。
##! 在 AWS EC2 实例上，还会尝试从 AWS 获取公共主机名/IP。
##! 详情见：
##! https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
external_url 'http`s`://`你的域名或 Linux 服务器 IPv4 地址`'
```

建议在 `letsencrypt['contact_emails']` 行填写你的邮箱，这样 Let's Encrypt 会给你发送自动免费 SSL 证书的通知。

:::note
如果想用 Let's Encrypt 免费 SSL 证书，必须使用域名，不能直接用 IP 地址申请。
:::

<!-- 以下代码来自 /etc/gitlab/gitlab.rb 文件 -->
```
################################################################################
# Let's Encrypt 集成
################################################################################
# letsencrypt['enable'] = nil
# letsencrypt['contact_emails'] = [`你的邮箱`] # 这里是一个邮箱数组，用于联系
# letsencrypt['group'] = 'root'
# letsencrypt['key_size'] = 2048
# letsencrypt['owner'] = 'root'
# letsencrypt['wwwroot'] = '/var/opt/gitlab/nginx/www'
# 更多设置请参考 https://docs.gitlab.com/omnibus/settings/ssl/index.html#renew-the-certificates-automatically
# letsencrypt['auto_renew'] = true
# letsencrypt['auto_renew_hour'] = 0
# letsencrypt['auto_renew_minute'] = nil # 可以是数字或 cron 表达式
# letsencrypt['auto_renew_day_of_month'] = "*/4"
# letsencrypt['auto_renew_log_directory'] = '/var/log/gitlab/lets-encrypt'
# letsencrypt['alt_names'] = []
```

:::tip
你可以用 `CTRL+W` 搜索 `letsencrypt['contact_emails']`，这样不用手动翻找整个文件。
:::

修改完成后，按 `CTRL+X`，然后按 `Y`，最后按回车保存退出。

最后，运行以下命令应用新配置：
```
sudo gitlab-ctl reconfigure
```

这个过程可能需要一些时间，会根据新配置初始化 GitLab，自动处理相关流程。如果使用了域名，SSL 证书也会自动签发。

## 第四步：访问 Web 界面

初始化完成后，你可以通过浏览器访问服务器。输入你的域名或 IP 地址：
```
https://[你的域名] 或 http://[你的 IP 地址]
```

首次访问时，会看到登录页面。

![](https://screensaver01.zap-hosting.com/index.php/s/E46E3qS32GKFfk3/preview)

首次登录使用 `root` 用户名获取管理员权限。

密码存储在服务器上的一个文件里，运行以下命令查看 `Password` 字段：
```
sudo nano /etc/gitlab/initial_root_password
```

<!-- 以下代码来自 /etc/gitlab/initial_root_password 文件 -->
```
# 警告：此密码仅在以下条件下有效

# 1. 如果手动提供（通过 `GITLAB_ROOT_PASSWORD` 环境变量或 `gitlab_rails['initial_root_password']` 设置），且在数据库初始化前提供。

# 2. 密码未被手动更改（无论是通过 UI 还是命令行）。

#

# 如果此密码无效，请按照 https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password 重置管理员密码。

Password: `[你的密码]`

# 注意：此文件将在首次重新配置运行后 24 小时内自动删除。
```

用用户名和密码登录，即可进入你的 GitLab 仪表盘。

![](https://screensaver01.zap-hosting.com/index.php/s/AqPHoEmY2Q2nFCF/preview)

强烈建议创建新用户和/或修改 `root` 用户密码。进入左下角的 **Admin**，选择 **Overview->Users**，即可管理 GitLab 用户。

## 可选：使用 ufw 设置防火墙

如果你不想配置防火墙，或者已经在 OpenSUSE 上使用 `firewalld`，可以跳过此步骤。

确保允许端口 80/443 和 22。

### 安装 ufw

如果你已经安装了 `ufw`，可以跳过此步骤。

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt-get install -y ufw
```
</TabItem>

<TabItem value="opensuse" label="OpenSUSE" default>
```bash
sudo zypper install ufw
```
</TabItem>

</Tabs>

### 开放必要端口

```
sudo ufw allow http
sudo ufw allow https
sudo ufw allow OpenSSH
```

### 启用防火墙

:::warning
默认情况下，这会阻止除允许端口外的所有访问。启用前请确保白名单配置正确。
:::

启用防火墙：
```
sudo ufw enable
```

## 总结

恭喜你，GitLab 安装成功！如果有任何问题，欢迎随时联系我们的支持团队，我们每天都在线帮你解决！

如果想做更多配置，推荐阅读 [官方 GitLab 文档](https://docs.gitlab.com/ee/install/next_steps.html) 了解后续步骤。

<InlineVoucher />