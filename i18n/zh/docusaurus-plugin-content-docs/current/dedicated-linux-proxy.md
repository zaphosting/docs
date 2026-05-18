---
id: dedicated-linux-proxy
title: "独立服务器：在 Linux 上使用 nginx 设置反向代理"
description: "了解如何为网站和游戏服务器设置安全高效的反向代理，提升访问速度和保护 → 立即学习"
sidebar_label: 反向代理
services:
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

反向代理服务器是介于终端用户和另一台服务器之间的中间服务器。网站和游戏服务器是实现反向代理的热门场景，各自带来安全性、便捷访问和保护等多种优势。

本指南将带你了解如何搭建通用的反向代理用于网站，以及专门针对游戏服务器的反向代理设置。

## 准备工作

要搭建反向代理，你需要一台 **Linux 服务器** 来承载代理服务。本例中我们使用 Ubuntu 作为 Linux 发行版，但安装步骤对大多数 Linux 发行版来说都非常相似。

:::tip 推荐 VPS 配置
针对游戏服务器的反向代理，我们强烈建议购买更高的网络带宽，尤其是当服务器拥有大量玩家时。因为你的 VPS 会直接在客户端（玩家）和游戏服务器之间传输原始 TCP/UDP 流量。否则，基础配置且稍作升级的服务器就足够应付网页相关的代理了。:)
:::

建议使用你拥有的 **域名** 来搭建代理。对于你计划使用的每个子域名，都应创建一个 `A` 记录（例如 `zapdocs.example.com`），指向你的 __Linux VPS__ 的 IP 地址。用户将通过这个域名访问你的网站或游戏服务器。

### 连接 VPS

Linux VPS 准备好后，你需要连接它。请参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南，了解如何连接。

### 安装 Nginx

我们将使用 Nginx 来搭建反向代理服务器，因为它是高性能且流行的开源 Web 服务器。

连接 VPS 后，执行以下命令安装 Nginx：

```
sudo apt install nginx
```

安装完成后，需要调整防火墙，确保服务能被互联网访问。本指南使用 **UFW 防火墙**，因为 Nginx 会注册为一个应用，方便调整设置。你可以通过我们的 [Linux 安全技巧](vserver-linux-security-tips.md) 了解更多 UFW 防火墙内容。

:::note
如果你使用其他防火墙（如 Iptables），请确保开放 Nginx 所用的 80 和 443 端口。
:::

运行 `sudo ufw app list` 查看 Nginx 配置文件列表。这里我们选择 **Nginx Full**，它允许 HTTP 测试和 HTTPS 生产环境访问。

```
sudo ufw allow 'Nginx Full'
```

Nginx 设置完成后，尝试用浏览器访问确认是否正常。如果测试页面正常显示，就可以继续下一步了。

```
http://[你的服务器IP]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## 网站反向代理

网站反向代理有很多好处，比如重定向到内部服务器资源（如 vaultwarden 实例，无需在 URL 中显示端口），或者转发用户到外部内容，方便负载均衡和保护。

最大优势之一是你的服务器可以处理来自多个来源/域名的请求，而不是单一 Web 服务器只能监听 80/443 端口。

### Nginx 配置

首先，在 Nginx 目录下为你之前选定的域名创建一个配置文件，通常是子域名，比如示例中的 `zapdocs.example.com`。

:::important
确保你已为该域名设置了指向代理服务器 IP 的 `A` 记录，否则域名和后续步骤将无法正常工作。
:::

进入服务器块目录：

```
cd /etc/nginx/sites-available/
```

用以下命令创建新配置文件。建议用域名作为文件名，方便识别（例如 zapdocs.example.com）。将 `[your_filename]` 替换为你想用的文件名。

```
sudo nano [your_filename]
```

打开 nano 编辑器后，复制以下模板。将 `[your_domain]` 替换为你想代理的域名，`[your_target_server]` 替换为目标服务器地址。

```
upstream targetServer {
    # 添加你想访问的目标服务器，可以是：
    # 内部“localhost”重定向（例如 127.0.0.1:9090）
    # 外部服务器（例如 103.146.43.52:9000）
    server [your_target_server];
}

server {
    listen 80;
    listen [::]:80;

    # 需要处理的域名（例如 zapdocs.example.com）
    server_name [your_domain];

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_pass_request_headers on;
        proxy_http_version 1.1;
        proxy_pass http://targetServer;
    }
}
```

修改完毕后，按 `CTRL + X`，然后按 `Y` 确认保存，最后按 `ENTER` 退出 nano。

接着创建软链接激活该配置：

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

检查配置语法是否正确：

```
sudo nginx -t
```

如果显示成功，重启 Nginx 使配置生效：

```
systemctl reload nginx.service
```

重启后，在浏览器中访问你设置的域名，应该能加载你配置的 `targetServer` 内容。如果遇到问题，建议用以下命令查看日志排查：

```
journalctl -f -u nginx.service
```

## 游戏服务器反向代理

游戏服务器反向代理同样有很多好处，比如增加安全层，提升抗攻击能力，限制对主机的直接访问，提高稳定性。

:::tip
大多数独立游戏服务器都能很好地配合你将要搭建的原始 TCP/UDP 端口代理。但少数游戏（如 BeamMP）可能不太兼容 VPN 和代理，需要你针对具体游戏测试。
:::

### Nginx 配置

这需要用到 **Nginx Stream** 模块，默认 Nginx 不包含该模块。

#### 安装 Nginx stream 模块

<Tabs>

<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>
```bash
sudo apt install -y libnginx-mod-stream
```
</TabItem>

<TabItem value="centos-fedora" label="CentOS & Fedora">
```bash
sudo dnf -y install nginx-mod-stream 
```
</TabItem>

</Tabs>

#### 配置 Nginx stream

你需要在主配置文件 `nginx.conf` 中添加一个新的 `stream` 块，定义上游服务器和代理监听端口。

用以下命令打开配置文件：

```
sudo nano /etc/nginx/nginx.conf
```

复制以下模板到文件中，替换 `[your_target_server]` 为目标服务器地址和端口（例如 FiveM 的 `:30120`），将 `[your_port_listener]` 替换为你希望代理监听的端口。

```
stream {
    upstream targetServer {
        # 添加你想访问的目标服务器（例如 103.146.43.52:30120）
        server [your_target_server];
    }

    server {
        # 监听端口，接受并转发连接（例如 30120）
        listen [your_port_listener];
        proxy_pass targetServer;
    }
}
```

修改完成后，按 `CTRL + X`，然后按 `Y` 保存，最后按 `ENTER` 退出。

检查配置语法：

```
sudo nginx -t
```

确认无误后，重启 Nginx 使配置生效：

```
systemctl reload nginx.service
```

重启后，尝试通过代理域名连接游戏服务器。成功的话，你就能连接到你设置的 `targetServer`。遇到问题时，建议查看日志：

```
journalctl -f -u nginx.service
```

## SSL 证书

反向代理搭建完成后，强烈建议为你使用的域名添加 SSL 证书，确保网站通过 HTTPS 安全传输数据。请查看我们的 [安装 Certbot](dedicated-linux-certbot.md) 指南，涵盖申请和自动续期 SSL 证书的全过程。

## 总结

恭喜你成功搭建了网站或游戏服务器的反向代理（甚至两者都有 :）！这将为你带来安全性、稳定性和性能上的多重提升。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂