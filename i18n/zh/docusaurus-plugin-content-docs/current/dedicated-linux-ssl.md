---
id: dedicated-linux-ssl
title: "独立服务器：为 Linux 服务器创建 SSL 证书（Let's Encrypt）"
description: "了解如何使用 Certbot 和 Let's Encrypt 免费 SSL 证书保护您的网站，实现安全数据传输 → 立即了解更多"
sidebar_label: 安装 SSL 证书（Let's Encrypt）
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

SSL 证书是互联网的重要组成部分，确保数据能在客户端和主机之间安全传输。在本指南中，我们将介绍如何使用开源工具 [**Certbot**](https://certbot.eff.org/) 向非营利证书颁发机构 **Let's Encrypt** 申请免费 SSL 证书。

## 准备工作

要使用 Certbot，您需要一台 Linux 服务器和一个您拥有的 **域名**。您必须能够访问该域名的 DNS 设置，并且**必须**为您计划使用的每个根域名或子域名创建一个指向您 __Linux 服务器__ IP 地址的 `A` 记录。

Certbot 还提供了额外的插件，支持“一键”为域名设置证书，兼容多种 Web 服务器，如 Nginx 或 Apache。我们推荐使用 Nginx，因为它是一款高性能且流行的开源 Web 服务器。有关设置帮助，请参阅我们的 [Linux 反向代理](dedicated-linux-proxy.md) 指南。

## 安装

首先安装开源的 [**Certbot**](https://certbot.eff.org/) 软件包，用于向 **Let's Encrypt** 申请免费 SSL 证书。

```
sudo apt install certbot
```

安装完成后，您就可以开始为您的域名申请证书了。Let's Encrypt 和 Certbot 提供多种 ACME 挑战方式来验证域名所有权。

我们强烈推荐使用默认的 **HTTP-01** 方法，因为它支持自动续期。如果遇到问题，也可以尝试使用 **DNS-01** 方法，但该方法是手动的，不支持自动续期，因为它依赖于验证 **TXT** DNS 记录。

:::tip 利用 Web 服务器插件
如果您使用的是 Nginx、Apache 或其他 Web 服务器，建议直接跳转到下方的 **Web 服务器插件** 部分，了解如何使用 Certbot 的插件实现“一键”安装证书，无需关闭 Web 服务器。
:::

### HTTP-01 挑战

安装 Certbot 后，您可以使用独立模式（standalone）申请证书，这意味着 Certbot 会启动一个临时的 Web 服务器来完成验证。您需要确保防火墙开放 80 端口，并且该端口没有被其他 Web 服务占用，以便临时服务器能正常运行并完成挑战（这也是挑战名称中带有 `HTTP` 的原因）。

以下命令中，`--standalone` 参数告诉 Certbot 使用临时 Web 服务器模式。

```
# 根域名示例
certbot certonly --standalone -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot certonly --standalone -d [your_domain]

# 交互式设置
certbot certonly --standalone
```

执行命令后，首次使用时会进入交互式设置，要求输入用于证书通信的邮箱地址，接着是可选的邮件订阅和必须接受的条款。

Certbot 会生成 ACME 挑战并通过临时 Web 服务器托管。Let's Encrypt 服务器会尝试从您的服务器获取挑战内容，验证成功后，证书将生成并保存在 `/etc/letsencrypt/live/[your_domain]` 路径下。

![](https://screensaver01.zap-hosting.com/index.php/s/7oGcQotKaowaDzM/preview)

您可以在需要的地方直接使用这些 SSL 证书，只需提供证书的本地路径即可。

### TXT DNS 记录

如果您在使用 **HTTP-01** 方法验证域名时遇到困难，可以尝试使用 **DNS-01** 方法。该方法需要您在 DNS 中创建一个由 Let's Encrypt 提供的特定值的 **TXT** 记录。

如前所述，该方法不支持自动续期，除非您自行搭建管理系统。因此，建议优先使用 **HTTP-01** 方法。

以下命令中，`--preferred-challenges` 参数指定使用 `DNS-01` 方法。

```
# 根域名示例
certbot certonly --preferred-challenges dns-01 -d [your_root_domain] -d www.[your_root_domain] --manual -m [your_root_domain] -m www.[your_root_domain]

# 子域名示例
certbot certonly --preferred-challenges dns-01 -d [your_domain] --manual -m [your_domain]

# 交互式设置
certbot certonly --preferred-challenges dns-01
```

执行命令后，首次使用时会进入交互式设置，要求输入用于证书通信的邮箱地址，接着是可选的邮件订阅和必须接受的条款。

Certbot 会给出创建 **TXT** 记录的具体说明，通常记录名为 `_acme-challenge.` 加上您的域名（例如 `_acme-challenge.zapdocs.example.com`），值会在控制台显示。

创建好记录后，按回车继续。如果一切正确且 DNS 记录已生效，证书将生成并保存在 `/etc/letsencrypt/live/[your_domain]` 路径下。

:::note
请耐心等待，DNS 记录生效可能需要一些时间。通常几分钟内完成，但极少数情况下可能更久。
:::

您可以在需要的地方直接使用这些 SSL 证书，只需提供证书的本地路径即可。

## Web 服务器插件

Certbot 提供多种 Web 服务器插件，能自动帮您修改服务器配置，简化证书管理。使用插件时，只需在 `certbot` 命令中添加对应参数即可。

这两种插件都使用 **HTTP-01** 挑战，工作原理类似。插件会先查找包含请求域名的 `server_name` 配置块，生成 ACME 挑战并临时添加 `location /.well-known/acme-challenge/...` 配置。

Let's Encrypt 服务器验证成功后，证书生成，插件会自动修改服务器配置，启用 HTTPS（443 端口）并指向新证书。

<Tabs>
<TabItem value="nginx" label="Nginx" default>

### Nginx 插件

使用前请确保已安装插件：

```
sudo apt install python3-certbot-nginx
```

使用时，在命令中添加 `--nginx` 参数：

```
# 根域名示例
certbot --nginx -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot --nginx -d [your_domain]

# 交互式设置
certbot --nginx
```

:::tip
如果不想让 Certbot 自动修改服务器配置，可以加上 `certonly` 参数，例如 `certbot certonly`。
:::

</TabItem>

<TabItem value="apache" label="Apache">

### Apache 插件

使用前请确保已安装插件：

```
sudo apt install python3-certbot-apache
```

使用时，在命令中添加 `--apache` 参数：

```
# 根域名示例
certbot --apache -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot --apache -d [your_domain]

# 交互式设置
certbot --apache
```

:::tip
如果不想让 Certbot 自动修改服务器配置，可以加上 `certonly` 参数，例如 `certbot certonly`。
:::

</TabItem>

<TabItem value="webroot" label="Webroot">

### Webroot 插件

如果您运行的是非传统软件的本地 Web 服务器，想在不停止服务器的情况下申请证书，可以使用 Webroot 方法。

使用时，在命令中添加 `--webroot` 参数，并指定 `-w [your_webserver_path]`（即 `--webroot-path`），这是您 Web 服务器的顶级目录路径。

```
# 根域名示例
certbot --webroot -w [your_webserver_path] -d [your_root_domain] -d www.[your_root_domain]

# 子域名示例
certbot --webroot -w [your_webserver_path] -d [your_domain]

# 交互式设置
certbot --webroot -w [your_webserver_path]
```

:::tip
常见的 Web 根目录是 `/var/www/html`。您也可以用此方法为 Nginx 或 Apache 申请证书，但不会自动修改服务器配置。
:::

</TabItem>
</Tabs>

## 自动续期

大多数情况下，Certbot 会通过 cron 任务或 systemd 计时器自动设置证书续期。您可以用以下命令测试续期流程（使用 `--dry-run` 参数）：

```
certbot renew --dry-run
```

:::tip
如前所述，**DNS-01** 方法不支持 Certbot 自动续期，除非您自行搭建管理系统。因此，强烈建议使用 **HTTP-01** 方法。
:::

如果测试成功，说明自动续期正常。自动续期命令通常位于 `/etc/crontab/`、`/etc/cron.*/*` 或通过 `systemctl list-timers` 查看。

### 手动设置 Cron 任务

如果自动续期未设置，您可以手动添加。运行 `crontab -e` 打开编辑器，首次使用时选择第一个编辑器选项 `/bin/nano`。

在打开的文件中添加以下行，每天凌晨 6 点执行续期命令：

```
0 6 * * * certbot renew
```

保存并退出 nano，按 `CTRL + X`，然后按 `Y` 确认，最后按 `ENTER`。

## 结语

您已成功通过多种方式（独立模式、Webroot 或插件）为您的域名配置了 Certbot，保障网站通过 HTTPS 实现安全数据传输。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为您服务！🙂