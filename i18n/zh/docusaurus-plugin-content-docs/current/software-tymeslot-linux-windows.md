---
id: software-tymeslot-linux-windows
title: "软件 - Tymeslot（Linux/Windows）"
description: "了解如何使用 Docker、Docker 容器以及 Linux 或 Windows 上的 Docker 安装基础来部署 Tymeslot，实现自托管的日程安排。-> 立即了解更多"
sidebar_label: 软件 - Tymeslot（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Tymeslot 是一个基于 Elixir 和 Phoenix LiveView 构建的开源会议和预约日程安排平台。在本指南中，您将了解 Tymeslot 是什么，运行它需要什么，以及如何使用 Docker 在 Linux 或 Windows 上部署它。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

在部署 Tymeslot 之前，请确保您的系统满足基本要求并且已安装 Docker。

### 要求

以下要求基于可用的项目资料和提供的安装草案：

| 要求 | 建议 |
|---|---|
| CPU | 至少 `1` 个虚拟 CPU |
| 内存 | 至少 `2 GB` |
| 磁盘空间 | 至少 `10 GB` |
| 操作系统 | Linux 或 Windows |
| 容器运行时 | Docker |
| 网络 | 访问端口 `4000` |

### 已验证与未验证内容

:::info 来源可用性
Tymeslot 仓库确认该项目是一个基于 Elixir 和 Phoenix LiveView 的开源会议日程安排平台，且仓库中存在与 Docker 相关的文件，如 `Dockerfile.docker` 和 `docker-compose.yml`。

然而，确切的生产部署步骤、镜像名称以及所有必需的环境变量无法从此处提供的源码材料中完全验证。因此，本指南使用可用的草案信息，并明确标注您应在生产使用前对照官方仓库核实的值。
:::

### 安装 Docker

运行 Tymeslot 容器前，您需要先安装 Docker。

- 在 Linux 上，请根据官方 [Docker 文档](https://docs.docker.com/engine/install/) 安装 Docker 引擎
- 在 Windows 上，请安装 [Docker Desktop](https://www.docker.com/products/docker-desktop/)

:::tip Windows 上的 Docker
如果您使用的是 Windows 版 Docker，请确保已启用虚拟化并且 Docker Desktop 正在运行，然后再继续操作。
:::

## 软件概览

Tymeslot 属于*日程安排*类别，专为自托管的预约和会议管理设计。

| 属性 | 值 |
|---|---|
| 名称 | `Tymeslot` |
| 类别 | `Scheduling` |
| 源码 | `https://github.com/tymeslot/tymeslot` |
| 技术栈 | `Elixir`，`Phoenix LiveView` |
| 部署方式 | 自托管，支持 Docker |
| 周报提及 | Self-Host Weekly，2026 年 4 月 10 日 |

### 为什么选择 Tymeslot

如果您想要：

- 自己托管日程安排平台
- 将预约数据保存在自己的基础设施上
- 管理预约而不依赖第三方 SaaS 平台
- 使用 Docker 容器部署现代 Web 应用

那么 Tymeslot 会很适合您。

## 部署选项

根据现有信息，有两种可能的部署方式：

| 方法 | 状态 |
|---|---|
| Docker 部署 | 推荐 |
| 原生 Elixir/Phoenix 安装 | 可行，但更高级 |

对于大多数用户，Docker 是更好的选择，因为它简化了安装、更新和服务管理。

## 使用 Docker 安装 Tymeslot

这是 Linux 和 Windows 系统最实用的方法。

### 拉取 Docker 镜像

草案中使用的镜像引用如下：

```bash
docker pull youruser/tymeslot:latest
```

:::caution 请先核实 Docker 镜像
仓库内容未确认具体的公开镜像名称。请在生产环境使用此命令前，务必在官方 Tymeslot 仓库、发布说明或 Docker Hub 页面（如果有）核实正确的镜像名称。
:::

### 启动容器

您可以使用草案中提供的命令启动 Tymeslot：

```bash
docker run --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE="$(openssl rand -base64 64 | tr -d '\n')" \
  -e PHX_HOST=localhost \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  youruser/tymeslot:latest
```

如果您使用的是 Windows PowerShell，默认可能没有 `openssl` 命令。此时，请单独生成安全随机值，并手动替换 `SECRET_KEY_BASE`。

### 命令示例说明

| 选项 | 作用 |
|---|---|
| `--name tymeslot` | 设置容器名称 |
| `-p 4000:4000` | 将端口 `4000` 映射到主机，供 Tymeslot 访问 |
| `-e SECRET_KEY_BASE=...` | 定义应用的加密和会话密钥 |
| `-e PHX_HOST=localhost` | 设置 Phoenix 使用的主机名 |
| `-v tymeslot_data:/app/data` | 持久化应用数据 |
| `-v tymeslot_pg:/var/lib/postgresql/data` | 持久化 PostgreSQL 数据 |
| `youruser/tymeslot:latest` | 草案中的 Docker 镜像名称 |

### 在 Linux 上生成密钥

如果已安装 `openssl`，可用以下命令生成密钥：

```bash
openssl rand -base64 64 | tr -d '\n'
```

### 在 Windows PowerShell 上生成密钥

您可以用 PowerShell 生成一个占位密钥：

```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

:::danger 请使用您自己的密钥
切勿在生产环境中重复使用示例密钥。务必生成您自己的 `SECRET_KEY_BASE` 并妥善保存。
:::

## 配置 Tymeslot

首次使用前，建议您检查最重要的运行时设置。

### 环境变量

草案确认了以下环境变量：

| 变量 | 示例 | 作用 |
|---|---|---|
| `SECRET_KEY_BASE` | `[your_secret_key]` | 保护会话和加密相关功能 |
| `PHX_HOST` | `[your_domain]` 或 `[your_server_ip]` | 定义应用使用的公开主机名 |

占位符说明：

- `[your_secret_key]` 是您生成的安全密钥
- `[your_domain]` 是您使用的公开域名（如果有）
- `[your_server_ip]` 是服务器的 IP 地址，用于直接访问

### SMTP 配置

草案中还提到在 `config/prod.exs` 中配置 SMTP，用于邮件通知：

```elixir
config :tymeslot, Tymeslot.Mailer,
  adapter: Bamboo.SMTPAdapter,
  server: "smtp.example.com",
  port: 587,
  username: "your_email@example.com",
  password: "your_password",
  tls: :if_available,
  auth: :always
```

:::note SMTP 配置验证
邮件配置格式可能会随版本更新而变化，建议您在生产环境应用前，核对当前 Tymeslot 仓库中的配置。
:::

## 访问 Tymeslot

容器启动后，您可以测试 Web 界面。

### 本地访问

如果在本地测试，请打开：

```text
http://localhost:4000
```

### 远程访问

如果 Tymeslot 运行在远程服务器，请打开：

```text
http://[your_server_ip]:4000
```

如果您配置了域名和反向代理，也可以通过以下地址访问：

```text
https://[your_domain]
```

## 防火墙与网络

Tymeslot 需要开放 Docker 映射的端口以供网络访问。

### 必需端口

| 端口 | 协议 | 作用 |
|---|---|---|
| `4000` | TCP | 访问 Tymeslot Web 应用 |

### 防火墙注意事项

请确保：

- 服务器防火墙已开放端口 `4000`，以便直接访问
- 云服务或提供商的防火墙也允许该端口
- 如果使用域名，反向代理正确转发流量

:::caution 公开暴露风险
如果您直接将端口 `4000` 暴露到互联网，请务必了解相关安全风险。生产环境通常建议通过带 HTTPS 的反向代理进行访问。
:::

## 可选的原生安装

如果您不想使用 Docker，也可以尝试原生安装，但这更复杂，需要兼容 Elixir 和 Phoenix 的环境。

### 基本原生步骤

根据草案，流程如下：

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### 原生部署说明

原生部署还需要：

- Elixir
- Erlang/OTP
- Phoenix 依赖
- 支持的数据库环境
- 生产配置检查

:::info 原生安装复杂度
目前获取的源码材料未提供足够详细信息，无法安全地完整记录 Linux 或 Windows 原生生产环境部署步骤。如果您想使用此方法，请直接查阅官方仓库文档后再部署。
:::

## 维护与故障排除

部署后，您应确保服务持续可用且数据持久化。

### 检查容器状态

```bash
docker ps
```

### 查看日志

```bash
docker logs tymeslot
```

### 重启容器

```bash
docker restart tymeslot
```

### 常见问题

| 问题 | 可能原因 | 建议操作 |
|---|---|---|
| 网页无法加载 | 端口 `4000` 被阻塞 | 检查防火墙和 Docker 端口映射 |
| 容器立即退出 | 环境变量配置错误 | 检查 `SECRET_KEY_BASE` 和镜像设置 |
| 数据库相关错误 | 持久化存储或数据库初始化问题 | 查看日志并确认卷挂载 |
| 链接中的主机名错误 | `PHX_HOST` 配置不正确 | 设置 `PHX_HOST` 为 `[your_domain]` 或 `[your_server_ip]` |

## 最佳实践

### 使用持久化卷

务必为应用和数据库数据使用持久化 Docker 卷，避免容器重建时丢失数据。

### 使用反向代理

生产环境通常建议将 Tymeslot 放在 Nginx 或 Apache 等反向代理后面，并启用 HTTPS。

### 核查上游变更

由于 Tymeslot 持续开发，更新前请务必查看官方仓库，特别关注：

- Docker 镜像变更
- 环境变量更新
- 数据库迁移
- 邮件配置变更

## 额外参考资料

| 资源 | 链接 |
|---|---|
| Tymeslot GitHub 仓库 | [官方 Tymeslot 仓库](https://github.com/tymeslot/tymeslot) |
| Self-Host Weekly 提及 | [Self-Host Weekly - 2026 年 4 月 10 日](https://selfh.st/weekly/2026-04-10/) |
| Docker 文档 | [Docker 文档](https://docs.docker.com/) |
| Docker Desktop 下载 | [Docker Desktop](https://www.docker.com/products/docker-desktop/) |

## 结论

恭喜，您已成功学习如何使用 Docker 在 Linux 或 Windows 上查看和部署 Tymeslot。如有更多问题或需要帮助，请随时联系我们的支持团队，我们每天都在这里为您服务！🙂