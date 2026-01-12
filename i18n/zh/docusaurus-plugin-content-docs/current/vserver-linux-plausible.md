---
id: vserver-linux-plausible
title: "VPS：在操作系统上安装 Plausible"
description: "了解如何搭建一个注重隐私的网页分析平台，实现清晰洞察和极速性能 → 立即了解"
sidebar_label: 安装 Plausible
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Plausible 是一个轻量级、开源的网页分析平台，无需使用 Cookie，且完全遵守隐私法规。它通过简洁直观的仪表盘提供关键指标，如访客数量、页面浏览量和访问时长。凭借易用性、快速性能和基于欧盟的基础设施，Plausible 成为 Google Analytics 的现代且注重隐私的替代方案。

想自己托管这个服务？我们将带你一步步完成安装和配置，并告诉你所有需要注意的事项。

<InlineVoucher />

## 前提条件

在安装 **Plausible** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ---------- | -------------------------- |
| CPU        | 1 个 vCPU  | 4 个 vCPU                  |
| 内存       | 2 GB       | 4 GB                       |
| 硬盘空间   | 10 GB      | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** `Docker`

**操作系统：** 支持 Docker 26+ 的最新 Ubuntu/Debian 版本

确保所有依赖已安装且操作系统版本正确，以避免安装 Plausible 时出现兼容性问题。

## 准备工作

在搭建 **Plausible** 之前，你需要先准备好系统，包括将操作系统更新到最新版本并安装所有必需依赖。这些准备工作能确保环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```

这会确保系统拥有最新的安全补丁和软件版本，方便后续操作。

### 安装依赖
更新完成后，就可以安装依赖了。

#### Git
Plausible 的数据将通过 GitHub 下载，因此需要先安装 Git。运行：

```
sudo apt install git-all
```

#### Docker

Plausible 将通过 Docker 容器部署和运行，因此需要先安装 Docker。运行：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

关于 Docker 的完整安装流程和使用教程，请参考我们的 [Docker](vserver-linux-docker.md) 指南。

## 安装

满足所有要求并完成准备后，就可以开始安装 Plausible 了。

首先克隆 Community Edition 仓库，并创建必要的配置文件：

```
$ git clone -b v3.0.1 --single-branch https://github.com/Plausible/community-edition Plausible-ce
```

接着，创建环境文件（.env）并定义关键变量。`BASE_URL` 必须指向已配置 DNS 解析到你服务器的真实域名。还需要生成一个至少 64 字节的随机 `SECRET_KEY_BASE`：

```
touch .env
echo "BASE_URL=https://Plausible.example.com" >> .env
echo "SECRET_KEY_BASE=$(openssl rand -base64 48)" >> .env
echo "HTTP_PORT=80" >> .env
echo "HTTPS_PORT=443" >> .env
```

用 `cat .env` 检查文件内容，确认无误。输出应类似：

```
BASE_URL=https://Plausible.example.com
SECRET_KEY_BASE=As0fZsJlUpuFYSthRjT5Yflg/NlxkFKPRro72xMLXF8yInZ60s6xGGXYVqml+XN1
HTTP_PORT=80
HTTPS_PORT=443
```

这些默认端口允许 Let’s Encrypt 自动签发 TLS 证书。如果你打算在反向代理后运行 Plausible，可以调整这些端口。此外，创建一个 `compose.override.yml` 文件，暴露 Plausible 容器的正确端口：

```
cat > compose.override.yml << EOF
services:
  Plausible:
    ports:
      - 80:80
      - 443:443
EOF 
```

最后，使用 Docker Compose 启动服务：

```
docker compose up -d
```

容器启动后，打开浏览器访问 `BASE_URL` 指定的域名，创建第一个用户账号。

![img](https://screensaver01.zap-hosting.com/index.php/s/Sw34XkXeHaMf9RJ/download)

## 配置

Plausible 可以集成 Google Search Console，丰富你的分析数据，展示哪些关键词带来了流量，深入了解访客行为。

如果你已有 Google Cloud 账号并设置了 OAuth 客户端，只需将凭据（`GOOGLE_CLIENT_ID` 和 `GOOGLE_CLIENT_SECRET`）添加到 `.env` 文件，保存后用 `docker compose up -d` 重启 Docker 服务。在 Plausible 仪表盘中，进入 *站点设置 > 集成* 完成连接并按照提示进行认证。

如果你还没有 OAuth 客户端或不熟悉流程，官方 Plausible Wiki 提供了详细的分步指南，教你如何在 Google Cloud 创建项目、启用 API、配置 OAuth 客户端，并将凭据添加到 Plausible：[Plausible Wiki: Google Integration](https://github.com/Plausible/community-edition/wiki/google-integration)。

使用 Google Search Console 的话，配置 Google 集成后即可导入搜索词数据，超级实用。

已有 Google Cloud 账号和 OAuth 客户端的话，直接把 `GOOGLE_CLIENT_ID` 和 `GOOGLE_CLIENT_SECRET` 填入 `.env`，重启 Docker 服务，按 Plausible 站点设置 > 集成页面的提示操作即可。

## 总结与更多资源

恭喜你！现在已经成功在 VPS 上安装并配置了 Plausible。我们还推荐你看看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Plausible.io](https://Plausible.io/) - 官方网站
- [github.com/Plausible/analytics](https://github.com/Plausible/analytics) - 公告、讨论、问题反馈

有没覆盖到的问题？需要更多帮助？随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />