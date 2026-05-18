---
id: dedicated-linux-certbot
title: "在 Linux 服务器上设置 Certbot - 使用 Let's Encrypt SSL 保护你的网站"
description: "了解如何使用 Certbot 和 Let's Encrypt 免费 SSL 证书保护你的网站，实现安全数据传输 → 立即了解更多"
sidebar_label: 安装 Certbot
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

SSL 证书是互联网的重要组成部分，确保数据能在客户端和主机之间安全传输。在本指南中，我们将探索如何设置开源工具 [**Certbot**](https://certbot.eff.org/) 来向非营利证书机构 **Let's Encrypt** 申请免费 SSL 证书。

## 准备工作

要使用 Certbot，你需要一台 Linux 服务器和一个你拥有的 **域名**。你必须能访问该域名的 DNS 设置，并且**必须**为你计划使用的每个根域名或子域名创建一个指向你的 __Linux 服务器__ IP 地址的 `A` 记录。

Certbot 还提供了额外的插件，支持“一键”为域名设置证书，兼容多种 Web 服务器，如 Nginx 或 Apache。我们推荐使用 Nginx，因为它是一款高性能且流行的开源 Web 服务器。有关设置帮助，请参考我们的 [Linux 反向代理](dedicated-linux-proxy.md) 指南。

## 安装

首先安装开源的 [**Certbot**](https://certbot.eff.org/) 软件包，用于向 **Let's Encrypt** 申请免费 SSL 证书。

```
sudo apt install certbot
```

安装完成后，你就可以开始为你的域名申请证书了。Let's Encrypt 和 Certbot 提供多种 ACME 挑战方式来验证域名所有权。

我们强烈推荐使用默认的 **HTTP-01** 方法，因为它支持自动续期。如果遇到问题，也可以尝试使用 **DNS-01** 方法，但该方法是手动的，不支持自动续期，因为它依赖于验证 **TXT** DNS 记录。

:::tip 利用 Web 服务器插件
如果你使用的是 Nginx、Apache 或其他 Web 服务器，建议直接跳转到下面的 **Web 服务器插件** 部分，了解如何使用 Certbot 的插件实现“一键”安装证书，并且无需关闭 Web 服务器。
:::

### HTTP-01 挑战

Certbot 安装完成后，你可以开始为域名申请证书。这里以独立模式（standalone）为例，Certbot 会启动一个临时 Web 服务器来完成验证。这意味着你必须在防火墙规则中开放 80 端口，并且确保没有其他 Web 服务器或服务占用该端口，以便临时服务器能启动并完成挑战验证（这也是挑战名称中带有 `HTTP` 的原因）。

下面的命令中，使用 `--standalone` 参数告诉 Certbot 使用临时 Web 服务器模式。

```
# 根域名示例
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot certonly --standalone -d [your_domain]

# 交互式设置
certbot certonly --standalone
```

运行命令后，可能会进入首次交互式设置，要求输入用于证书通信的邮箱地址，接着是可选的邮件列表订阅，以及必须接受的条款和条件。

Certbot 会生成 ACME 挑战并通过临时 Web 服务器托管。Let's Encrypt 服务器会尝试从你的服务器获取挑战内容，验证成功后，证书会生成并保存在 `/etc/letsencrypt/live/[your_domain]` 路径下。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

你现在可以在任何需要的地方使用这些 SSL 证书，只需提供证书的本地路径即可。

### TXT DNS 记录

如果你在使用 **HTTP-01** 方法验证域名时遇到困难，可以尝试使用 **DNS-01** 方法。该方法需要你在 DNS 中创建一个由 Let's Encrypt 提供的特定值的 **TXT** 记录。

如前所述，该方法不支持自动续期，除非你自己搭建管理基础设施。因此，强烈建议尽可能使用 **HTTP-01** 方法。

下面命令中，使用 `--preferred-challenges` 参数指定使用 `DNS-01` 方法。

```
# 根域名示例
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# 子域名示例
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 交互式设置
certbot certonly --preferred-challenges dns-01
```

运行命令后，可能会进入首次交互式设置，要求输入用于证书通信的邮箱地址，接着是可选的邮件列表订阅，以及必须接受的条款和条件。

Certbot 会给出创建 **TXT** 记录的具体指示，通常目标记录名是以 `_acme-challenge.` 为前缀加上你的域名（例如 `_acme-challenge.zapdocs.example.com`），值会在控制台显示。

创建好记录后，按回车继续。如果一切正确且 DNS 记录已生效，证书会生成并保存在 `/etc/letsencrypt/live/[your_domain]` 路径下。

:::note
请耐心等待，DNS 记录的生效可能需要一些时间。通常几分钟内即可生效，但极少数情况下可能更久。
:::

你现在可以在任何需要的地方使用这些 SSL 证书，只需提供证书的本地路径即可。

## Web 服务器插件

Certbot 提供多种 Web 服务器插件，能让证书管理更简单，插件会自动修改相关服务器配置块。使用插件时，只需在 `certbot` 命令中添加对应参数即可。

这两种方法都使用 **HTTP-01** 挑战，工作原理基本相同。插件会先查找包含请求域名的 `server_name` 配置块，找到后生成 ACME 挑战，并在配置中临时添加 `location /.well-known/acme-challenge/...` 路径。

Let's Encrypt 服务器会尝试从你的服务器获取挑战内容，验证成功后，证书生成，插件会自动修改服务器配置，启用 HTTPS（443 端口）并指向新证书路径。

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx 插件

使用插件前，确保已安装。

```
sudo apt install python3-certbot-nginx
```

使用 Nginx 插件时，在命令中添加 `--nginx` 参数，如下：

```
# 根域名示例
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot --nginx -d [your_domain]

# 交互式设置
certbot --nginx
```

:::tip
如果你想关闭 Certbot 自动“一键”修改服务器配置的功能，可以在命令中加上 `certonly` 参数，比如 `certbot certonly`。
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache 插件

使用插件前，确保已安装。

```
sudo apt install python3-certbot-apache
```

使用 Apache 插件时，在命令中添加 `--apache` 参数，如下：

```
# 根域名示例
certbot --apache -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot --apache -d [your_domain]

# 交互式设置
certbot --apache
```

:::tip
如果你想关闭 Certbot 自动“一键”修改服务器配置的功能，可以在命令中加上 `certonly` 参数，比如 `certbot certonly`。
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot 插件

如果你运行的是非传统软件的本地 Web 服务器，可能想用 webroot 方法，这样就不用停止服务器。

使用 Webroot 插件时，在命令中添加 `--webroot` 参数，并且加上 `-w [your_webserver_path]`（即 `--webroot-path`），指定你的 Web 服务器根目录路径。

```
# 根域名示例
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 交互式设置
certbot --webroot -w [your_webserver_path]
```

:::tip
最常见的 Web 根目录是 `/var/www/html`。你也可以用这个方法给 Nginx 或 Apache 申请证书，但不让 Certbot 自动修改服务器配置。
:::

</TabItem>
</Tabs>

## 自动续期

大多数情况下，Certbot 会自动通过 cron 任务或 systemd 定时器设置证书续期。你可以用下面命令测试续期流程（使用 `--dry-run` 参数）：

```
certbot renew --dry-run
```

:::tip
如前所述，**DNS-01** 方法不支持 Certbot 自动续期，除非你自己搭建管理基础设施。因此强烈建议使用 **HTTP-01** 方法。
:::

如果一切正常，测试会成功。如果你想查看或修改自动续期设置，相关命令可能在 `/etc/crontab/`、`/etc/cron.*/*` 或通过 `systemctl list-timers` 查看。

### 手动设置 Cron 任务

如果自动续期没设置，你可以自己添加 cron 任务。用 `crontab -e` 打开编辑器。首次使用时，选择第一个编辑器选项 `/bin/nano`。

打开后，添加以下行，每天早上 6 点执行续期命令：

```
0 6 * * * certbot renew
```

保存并退出 nano，按 `CTRL + X`，然后按 `Y` 确认，最后按 `ENTER`。

## 总结

你已经成功通过多种方式（独立模式、webroot 或插件）为你的域名设置了 Certbot，确保你的网站通过 HTTPS 实现安全数据传输。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂