---
id: dedicated-linux-ssl
title: "在 Linux 服务器上设置 Let's Encrypt SSL - 用 HTTPS 保护你的独服"
description: "了解如何使用 Certbot 和 Let's Encrypt 免费 SSL 证书保护你的网站，实现安全数据传输 → 立即了解"
sidebar_label: 安装 SSL 证书（Let's Encrypt）
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

SSL 证书是互联网的重要组成部分，确保客户端和主机之间的数据安全传输。在本指南中，我们将介绍如何使用开源工具 [**Certbot**](https://certbot.eff.org/) 从非营利证书机构 **Let's Encrypt** 申请免费 SSL 证书。

## 准备工作

要使用 Certbot，你需要一台 Linux 服务器和一个你拥有的 **域名**。你必须能访问该域名的 DNS 设置，并且**必须**为你计划使用的每个根域名或子域名创建一个指向你 __Linux 服务器__ IP 地址的 `A` 记录。

Certbot 还提供了额外的插件，可以让你轻松“一键”为域名设置证书，支持多种常见的 Web 服务器，如 Nginx 或 Apache。我们推荐使用 Nginx，因为它是高性能且流行的开源 Web 服务器。需要帮助搭建可参考我们的 [Linux 反向代理](dedicated-linux-proxy.md) 指南。

## 安装

首先安装开源的 [**Certbot**](https://certbot.eff.org/) 软件包，用于向 **Let's Encrypt** 申请免费 SSL 证书。

```
sudo apt install certbot
```

安装完成后，你就可以开始为你的域名申请证书了。Let's Encrypt 和 Certbot 提供多种 ACME 验证方式来确认域名所有权。

我们强烈推荐使用默认的 **HTTP-01** 方法，因为它支持自动续期。如果遇到问题，也可以尝试使用 **DNS-01** 方法，但它是手动的，不支持自动续期，因为它依赖于验证 **TXT** DNS 记录。

:::tip 利用 Web 服务器插件
如果你使用的是 Nginx、Apache 或其他 Web 服务器，建议直接跳转到下面的 **Web 服务器插件** 部分，了解如何利用 Certbot 的插件实现“一键”安装证书，并且无需关闭 Web 服务器。
:::

### HTTP-01 验证

Certbot 安装完成后，可以开始为域名申请证书。这里我们使用独立模式（standalone），即 Certbot 会启动一个临时的 Web 服务器来完成验证。这意味着你必须在防火墙规则中开放 80 端口，并且确保没有其他服务占用该端口，否则临时服务器无法启动，验证也无法完成（这也是验证方式名中带 HTTP 的原因）。

下面命令中使用了 `--standalone` 参数，告诉 Certbot 使用临时 Web 服务器。

```
# 根域名
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# 子域名
certbot certonly --standalone -d [your_domain]

# 交互式设置
certbot certonly --standalone
```

执行命令后，首次使用时会进入交互式设置，要求输入用于证书通信的邮箱地址，接着是可选的邮件列表订阅，最后需要同意服务条款。

Certbot 会生成 ACME 验证请求，并通过临时 Web 服务器托管验证文件。Let's Encrypt 服务器会尝试访问你的服务器，验证成功后，证书会生成并保存在 `/etc/letsencrypt/live/[your_domain]` 路径下。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

你可以在需要的地方直接使用这些证书，只需提供本地证书路径即可。

### TXT DNS 记录验证

如果你在使用 **HTTP-01** 验证时遇到困难，可以尝试使用 **DNS-01** 方法，这需要你在 DNS 中添加一个由 Let's Encrypt 提供的 **TXT** 记录。

如前所述，这种方法不支持自动续期，除非你自己搭建管理系统。因此，强烈建议优先使用 **HTTP-01** 方法。

下面命令中使用了 `--preferred-challenges` 参数，指定使用 `dns-01` 验证方式。

```
# 根域名
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# 子域名
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 交互式设置
certbot certonly --preferred-challenges dns-01
```

执行命令后，同样会进入交互式设置，输入邮箱、订阅邮件列表并同意条款。

Certbot 会给出创建 **TXT** 记录的具体指令，通常记录名是 `_acme-challenge.` 加上你的域名（例如 `_acme-challenge.zapdocs.example.com`），值会在控制台显示。

创建好记录后，按回车继续。如果一切正确且 DNS 解析生效，证书会生成并保存在 `/etc/letsencrypt/live/[your_domain]` 路径。

:::note
请耐心等待 DNS 记录生效，通常几分钟内完成，但极少数情况下可能需要更长时间。
:::

同样，你可以在任何需要的地方使用这些证书，只需提供本地路径。

## Web 服务器插件

Certbot 提供多种 Web 服务器插件，能自动帮你修改服务器配置，简化证书管理。使用插件时，只需在 `certbot` 命令中添加对应参数即可。

这两种插件都使用 **HTTP-01** 验证，工作原理类似。插件会先找到包含请求域名的服务器配置块（`server_name`），然后生成 ACME 验证请求，并在配置中临时添加 `location /.well-known/acme-challenge/...` 路径。

Let's Encrypt 服务器访问验证成功后，证书生成，插件会自动修改服务器配置，启用 HTTPS（443 端口）并指向新证书。

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx 插件

使用前确保已安装插件：

```
sudo apt install python3-certbot-nginx
```

使用时，在命令中添加 `--nginx` 参数：

```
# 根域名
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# 子域名
certbot --nginx -d [your_domain]

# 交互式设置
certbot --nginx
```

:::tip
如果你想关闭 Certbot 自动修改服务器配置的“一键”功能，可以加上 `certonly` 参数，比如 `certbot certonly`。
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache 插件

使用前确保已安装插件：

```
sudo apt install python3-certbot-apache
```

使用时，在命令中添加 `--apache` 参数：

```
# 根域名
certbot --apache -d [your_root_domain] -d www.[your_root_domain]

# 子域名
certbot --apache -d [your_domain]

# 交互式设置
certbot --apache
```

:::tip
如果你想关闭 Certbot 自动修改服务器配置的“一键”功能，可以加上 `certonly` 参数，比如 `certbot certonly`。
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot 插件

如果你运行的是非传统软件的本地 Web 服务器，想用自己的服务器且不想停止它，可以用 Webroot 方法。

使用时，在命令中添加 `--webroot` 参数，并用 `-w [your_webserver_path]` 指定 Web 服务器根目录路径。

```
# 根域名
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# 子域名
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 交互式设置
certbot --webroot -w [your_webserver_path]
```

:::tip
常见的 Web 根目录是 `/var/www/html`。你也可以用这个方法给 Nginx 或 Apache 申请证书，但不自动修改服务器配置。
:::

</TabItem>
</Tabs>

## 自动续期

大多数情况下，Certbot 会自动通过 cron 任务或 systemd 定时器帮你设置证书续期。你可以用下面命令测试续期流程（`--dry-run` 是模拟运行）：

```
certbot renew --dry-run
```

:::tip
如前所述，**DNS-01** 方法不支持 Certbot 自动续期，除非你自己搭建管理系统。因此强烈建议使用 **HTTP-01** 方法。
:::

如果一切正常，测试会成功。你可以通过查看 `/etc/crontab/`、`/etc/cron.*/*` 或运行 `systemctl list-timers` 来确认自动续期任务。

### 手动设置 Cron 任务

如果自动续期没设置好，你可以自己添加。用 `crontab -e` 打开编辑器，首次使用会让你选择编辑器，选第一个 `/bin/nano`。

在打开的文件中添加以下行，每天早上 6 点执行续期：

```
0 6 * * * certbot renew
```

保存并退出 nano，按 `CTRL + X`，然后按 `Y` 确认，最后按回车。

## 总结

你已经成功通过多种方式（独立模式、Webroot 或插件）为你的域名配置了 Certbot，确保网站通过 HTTPS 实现安全数据传输。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂