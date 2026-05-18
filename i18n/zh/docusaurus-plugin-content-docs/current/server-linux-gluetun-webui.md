---
id: server-linux-gluetun-webui
title: "在 Linux 服务器上安装 Gluetun WebUI - 轻松管理你的 VPN 容器"
description: "学习如何在你的 Linux VPS 上安装并运行 Gluetun WebUI，实时监控和管理你的 Gluetun VPN 容器 → 立即了解更多"
sidebar_label: 安装 Gluetun WebUI
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

[Gluetun WebUI](https://github.com/Sir-Scuzza/gluetun-webui) 是一个轻量级的网页界面，专为简化 Gluetun VPN 容器的管理而设计。Gluetun 本身是一个非常流行的 Docker 容器，用于通过安全的 VPN 连接路由其他应用流量。

这个 WebUI 提供了一个方便的仪表盘，让你无需手动操作 Docker 命令或配置文件，就能实时监控 VPN 状态、管理连接和控制容器行为。

![img](https://screensaver01.zap-hosting.com/index.php/s/PL3rDEKy2xA36CP/preview)

在你自己的服务器上自托管 Gluetun WebUI，能为你的 VPN 设置提供一个集中管理界面，特别适合运行多个依赖 Gluetun VPN 连接的容器时使用。

打算在 VPS 上运行 Gluetun WebUI？本指南将一步步带你完成安装和配置。

<InlineVoucher />



## Gluetun WebUI 的使用场景

Gluetun WebUI 非常适合任何在 VPN 后运行容器化应用的用户。典型的使用场景包括：

- 实时监控 VPN 连接状态
- 管理通过 Gluetun VPN 路由流量的容器
- 简化 VPN 容器的配置和故障排查
- 无需复杂 Docker 命令即可控制 VPN 服务
- 为自托管环境提供集中化的 VPN 管理界面

这个 WebUI 在家庭实验室或 VPS 环境中尤为实用，尤其是当多个应用依赖同一个 VPN 容器时。



## 安装前准备

安装 Gluetun WebUI 之前，请确保你的服务器满足以下要求。

| 硬件 | 最低配置 | 推荐配置 |
|----------|---------|-------------|
| CPU | 1 核 | 2 核 |
| 内存 | 1 GB | 4 GB |
| 硬盘空间 | 5 GB | 10 GB |

必备软件：

- Docker
- Docker Compose

如果你还没安装 Docker，请先参考我们的 Docker 安装指南再继续操作。

<InlineServiceLink />

## 准备工作

安装 Gluetun WebUI 前，确认服务器已安装 Docker 和 Docker Compose。运行以下命令检查 Docker 是否可用：

```
docker --version
docker compose version
```
接着创建一个目录用于 Gluetun WebUI 的安装。
```
mkdir gluetun-webui
cd gluetun-webui
```
这个目录将存放用于运行 WebUI 的 Docker Compose 配置文件。

## 安装步骤

创建 Gluetun WebUI 的 Docker Compose 文件。
```
nano compose.yaml
```
粘贴以下配置：

```yaml
services:
  gluetun-webui:
    image: ghcr.io/sir-scuzza/gluetun-webui:latest
    container_name: gluetun-webui
    restart: unless-stopped
    ports:
      - "8000:8000"
    environment:
      - GLUETUN_API_URL=http://gluetun:8000
    volumes:
      - ./data:/app/data
```

该配置将会：

- 部署 Gluetun WebUI 容器
- 连接到 Gluetun API
- 通过 8000 端口暴露 WebUI
- 将持久化配置数据存储在 `data` 目录

保存文件并退出编辑器。

## 启动 Gluetun WebUI

使用 Docker Compose 启动容器。

```
docker compose up -d
```

Docker 会下载所需镜像并启动 WebUI 容器。确认容器运行状态：

```
docker ps
```

## 访问 Web 界面

容器启动后，在浏览器打开 WebUI：

```
http://YOUR_SERVER_IP:8000
```

将 `YOUR_SERVER_IP` 替换成你的 VPS IP 地址。打开后你可以：

- 监控 VPN 连接状态
- 管理 Gluetun 容器行为
- 查看 VPN 配置信息
- 控制通过 VPN 容器路由的服务



## 总结

恭喜你！你已经成功在 Linux 服务器上安装了 **Gluetun WebUI**。现在你可以轻松通过网页界面监控和管理你的 Gluetun VPN 容器，无需手动操作 Docker 命令。

将 Gluetun WebUI 和 VPN 容器一起运行，能大大简化管理流程，让你清晰掌握 VPN 连接状态和配置。

如果有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />