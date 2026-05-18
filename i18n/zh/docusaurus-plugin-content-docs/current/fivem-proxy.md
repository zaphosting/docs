---
id: fivem-proxy
title: "FiveM：设置反向代理"
description: "了解如何通过反向代理设置提升你的 FiveM 服务器安全性和稳定性，实现更好的 DDoS 防护和性能 → 立即了解"
sidebar_label: 反向代理
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

反向代理服务器是介于终端用户（你的玩家）和你的 FiveM 服务器之间的中间服务器。对于经常遭受 DDoS 攻击的服务器来说，这非常有用，因为它通过降低主机的可见性并提供额外的缓解措施，为服务器增加了一层安全和稳定保障。

本指南将带你了解如何为你的 FiveM 服务器设置反向代理。在这个场景中，有两种类型的反向代理：用于 connect 端点的 connect 代理，以及用于服务器端点的 server 代理，后者负责原始 TCP/UDP 的代理。两者可以独立设置。

<InlineVoucher />

## 准备工作

要设置反向代理，你需要一台 **Linux 服务器**（比如 VPS）来托管你的代理服务器。本例中我们使用 Ubuntu 作为 Linux 发行版，但大多数 Linux 发行版的安装步骤都非常相似。

:::tip 推荐的 VPS 配置
如果你计划设置 server 代理，尤其是服务器有大量玩家时，我们强烈建议购买更高的网络带宽。因为你的 VPS 会直接在客户端（玩家）和 FiveM 服务器之间传输原始 TCP/UDP 流量。否则，基础配置的服务器加上少量升级就足够了。:)
:::

我们还建议你使用自己拥有的 **域名** 来设置代理。你需要在你想用的域名（例如 `zapdocs.example.com`）上创建一个 `A` 记录，指向你的 __Linux VPS__ 的 IP 地址。玩家将通过这个域名连接服务器，当然你也可以直接用代理服务器的 IP 地址。

### 连接 VPS

准备好 Linux VPS 后，你需要连接它。请参考我们的 [SSH 初始访问](vserver-linux-ssh.md) 指南，了解如何操作。

### 安装 Nginx

我们将使用 Nginx 来搭建反向代理服务器，因为它是一个高性能且流行的开源 Web 服务器。

连接 VPS 后，运行以下命令安装 Nginx。

```
sudo apt install nginx
```

安装完成后，你需要调整防火墙，确保服务可以被外网访问。本指南使用 **UFW 防火墙**，因为 Nginx 会注册为一个应用，方便调整设置。你可以通过我们的 [Linux 安全技巧](vserver-linux-security-tips.md) 了解更多 UFW 防火墙内容。

:::note
如果你使用其他防火墙（比如 Iptables），请确保开放 Nginx 所用的 80 和 443 端口。
:::

你可以通过运行 `sudo ufw app list` 查看 Nginx 的配置文件。在这里，我们选择 **Nginx Full**，它允许 HTTP 测试和 HTTPS 生产环境访问。

```
sudo ufw allow 'Nginx Full'
```

Nginx 设置完成后，尝试用浏览器访问，确认它正常工作。如果测试页面正常显示，就可以继续下一步了。

```
http://[你的服务器IP]
```

![](https://screensaver01.zap-hosting.com/index.php/s/JaBgE4Cn73L5Xe8/preview)

## Connect 代理

Connect 代理用于代理 FiveM 服务器的 connect 端点。简单来说，就是你的代理服务器负责接收 connect 端点请求，并转发给你的主 FiveM 服务器。这能很好地隐藏真实的 FiveM 主机 IP，减少服务器列表中的曝光。

### Nginx 设置

首先，在 Nginx 目录下为你之前设置的域名创建一个配置文件。这里以 `zapdocs.example.com` 为例。

运行以下命令创建服务器块，替换 `[your_domain]` 为你的域名。

```
sudo nano /etc/nginx/sites-available/[your-domain]
```

复制以下模板到编辑器中，并根据你的实际情况修改。

```
upstream backend {
    # FiveM 服务器 IP 地址
    server [your_fivem_serverip]:30120;
}

proxy_cache_path /srv/cache levels=1:2 keys_zone=assets:48m max_size=20g inactive=2h;

server {
    listen 80;
    listen [::]:80;

    server_name [your_domain]; # 例如：zapdocs.example.com

    location / {
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $remote_addr;
        # 确保正确传递认证头
        proxy_pass_request_headers on;
        # 防止延迟关闭连接
        proxy_http_version 1.1;
        proxy_pass http://backend;
    }

    # 缓存代理的额外配置
    location /files/ {
        proxy_pass http://backend$request_uri;
        add_header X-Cache-Status $upstream_cache_status;
        proxy_cache_lock on;
        proxy_cache assets;
        proxy_cache_valid 1y;
        proxy_cache_key $request_uri$is_args$args;
        proxy_cache_revalidate on;
        proxy_cache_min_uses 1;
    }
}
```

修改完毕后，按 `CTRL + X`，然后按 `Y` 确认保存，最后按 `ENTER` 退出 nano。

接着，创建一个符号链接激活该配置文件。

```
sudo ln -s /etc/nginx/sites-available/[your_filename] /etc/nginx/sites-enabled/[your_filename]
```

为了确保配置语法正确，运行：

```
sudo nginx -t
```

如果显示成功，重启 Nginx 使配置生效：

```
systemctl reload nginx.service
```

重启后，尝试用浏览器访问你设置的域名，确认页面能正常加载。如果遇到问题，建议用以下命令查看日志排查：

```
journalctl -f -u nginx.service
```

### FiveM 配置

代理设置完成后，需要修改 FiveM 服务器的 `server.cfg` 配置文件。

添加以下内容，替换为你的实际配置。

```
# 防止服务器列表使用真实 IP 广告你的服务器
set sv_forceIndirectListing true

# 让服务器列表后台请求你的域名而非默认（例如：zapdocs.example.com）
set sv_listingHostOverride "[your_domain]"

# 允许 'X-Real-IP' 的 IPv4 网络列表（CIDR 格式），并绕过速率限制
set sv_proxyIPRanges "[your_proxy_serverip]/32"

# 服务器实际托管的端点，或一个或多个服务器端点代理
set sv_endpoints "[your_fivem_serverip]:30120"
```

保存文件并重启服务器。下次启动时，你的域名就会解析到你的 FiveM 服务器，可以用来连接。

你可以通过访问 `https://[your_domain]/info.json` 来验证代理是否正常工作。如果能正确加载，说明 connect 代理配置成功。

## Server 代理

Server 代理用于代理 FiveM 服务器的 server 端点，直接代理原始的 TCP/UDP 端点和流量。

### Nginx 设置

这部分需要用到 Nginx 的 **stream** 模块。用 nano 打开 `nginx.conf` 文件。

```
sudo nano /etc/nginx/nginx.conf
```

复制以下内容到文件根目录，替换为你的配置。

```
stream {
    upstream backend {
        server [your_fivem_serverip]:30120;
    }
    
    server {
		listen 30120;
		proxy_pass backend;
	}

	server {
		listen 30120 udp reuseport;
		proxy_pass backend;
	}
}
```

修改完成后，按 `CTRL + X`，然后按 `Y` 保存，最后按 `ENTER` 退出。

检查语法：

```
sudo nginx -t
```

如果成功，重启 Nginx：

```
systemctl reload nginx.service
```

重启后，尝试通过代理域名连接游戏服务器。成功的话，你就能连接到你设置的 `targetServer`。遇到问题时，建议查看日志：

```
journalctl -f -u nginx.service
```

### FiveM 配置

代理设置完成后，需要修改 FiveM 服务器的 `server.cfg` 文件。

:::tip
如果你之前已经通过 Connect 代理设置了 `set sv_endpoints`，这一步可以跳过。
:::

添加以下内容，替换为你的配置。

```
# 服务器实际托管的端点，或一个或多个服务器端点代理
set sv_endpoints "[your_fivem_serverip]:30120"
```

保存并重启服务器。下次启动时，原始的 TCP/UDP 端点流量将通过你的反向代理传输。

你可以通过观察玩家的 IP 地址来验证，所有玩家的 IP 应该都是你的代理服务器 IP，端口则是随机分配的。

## SSL 证书

反向代理设置完成后，我们强烈建议为你的域名添加 SSL 证书，确保网站通过 HTTPS 安全传输数据。

请查看我们的 [安装 Certbot](dedicated-linux-certbot.md) 指南，涵盖了申请和自动续期 SSL 证书的完整流程。

## 总结

恭喜你，成功为你的 FiveM 服务器搭建了反向代理，带来了多重安全、稳定和性能提升。如果有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />