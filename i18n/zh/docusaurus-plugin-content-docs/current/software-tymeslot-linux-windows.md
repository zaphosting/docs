---
id: software-tymeslot-linux-windows
title: "软件 - Tymeslot（Linux/Windows）"
description: "了解如何使用 Docker 部署 Tymeslot，管理 Docker 容器，并查看 Linux 和 Windows 托管环境的关键配置细节。 -> 立即了解更多"
sidebar_label: 软件 - Tymeslot（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Tymeslot 是一个基于 Elixir 和 Phoenix LiveView 构建的开源会议和预约调度平台。在本指南中，您将了解 Tymeslot 的需求，如何在 Linux 或 Windows 上使用 Docker 部署它，以及在投入生产前应检查的配置要点。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，您需要一台能够稳定运行 Docker 并通过网络暴露 Tymeslot 的系统。

### 需求

| 需求 | 推荐配置 |
| --- | --- |
| CPU | 1 个虚拟 CPU 或更多 |
| 内存 | 至少 2 GB |
| 磁盘空间 | 至少 10 GB |
| 操作系统 | Linux 或 Windows |
| 容器平台 | [Docker](https://www.docker.com/) |
| 网络端口 | `4000/tcp` |

### 您需要准备的内容

| 项目 | 作用 |
| --- | --- |
| 一台 Linux 服务器或 Windows 系统 | 用于托管应用 |
| 已安装 Docker | Tymeslot 仓库中包含 Docker 相关文件 |
| 开放 `4000` 端口的网络访问或反向代理 | 用于访问 Web 界面 |
| 一个主机名，如 `[your_domain]` | 生产环境推荐使用 |
| 一个强随机生成的密钥 | 用于会话和应用安全 |

:::info Docker 安装要求
本指南重点介绍 Docker 部署，因为 Tymeslot 仓库包含 `Dockerfile.docker` 和 `docker-compose.yml` 等 Docker 相关文件。虽然可能支持使用 Elixir 和 Phoenix 进行原生安装，但提供的源码材料中未能完全验证生产环境的具体步骤。
:::

### Windows 注意事项

在 Windows 上，通常需要一个可用的 Docker 环境，如 Docker Desktop。如果您使用 Docker for Windows，请确保已启用虚拟化且 Docker Desktop 正在运行，然后再继续操作。

## 关于 Tymeslot

Tymeslot 在其项目仓库中被描述为一个基于 Elixir 和 Phoenix LiveView 的开源会议调度平台。它适合自托管，也可以通过项目的托管云服务使用。

### 已验证的项目详情

| 属性 | 值 |
| --- | --- |
| 名称 | Tymeslot |
| 分类 | 调度 |
| 源代码仓库 | `https://github.com/tymeslot/tymeslot` |
| 周报提及 | Self-Host Weekly，2026 年 4 月 10 日 |
| 技术栈 | Elixir / Phoenix LiveView |
| 支持自托管 | 是 |

:::note 源码验证
仓库确认了项目名称、用途和技术栈。但部分运行时细节，如确切的官方 Docker 镜像名称、完整环境变量列表和官方生产端口映射，在提供的源码快照中未完全可见，建议在生产部署前直接在上游仓库中核实这些内容。
:::

## 部署方式

对于大多数用户来说，Docker 是最简单的部署方式，因为它能隔离依赖并简化更新管理。

### 为什么推荐 Docker

| 优点 | 说明 |
| --- | --- |
| 更简单的安装 | 无需手动安装 Elixir、Erlang 和 Phoenix |
| 更干净的更新 | 可直接替换 Docker 镜像，无需重建宿主环境 |
| 更好的可移植性 | 同一容器配置可在 Linux 和 Windows 上使用 |
| 更简单的回滚 | 需要时可回退到之前的镜像版本 |

### 重要限制

:::caution Docker 镜像名称必须核实
示例中使用了 `youruser/tymeslot:latest` 作为镜像名称，但这只是占位符，不是官方验证的镜像名。部署前请查阅 Tymeslot 仓库、`README-Docker.md` 或项目容器注册说明，确认正确的镜像来源。
:::

## 使用 Docker 安装 Tymeslot

本节展示基于 Docker 的部署流程，示例中使用占位镜像名。请将 `[your_tymeslot_image]` 替换为官方项目确认的镜像名称。

### 拉取镜像

```bash
docker pull [your_tymeslot_image]
```

### 生成密钥

在 Linux 上，您可以使用以下命令生成强随机密钥：

```bash
openssl rand -base64 64 | tr -d '\n'
```

请安全保存输出内容，作为 `[your_secret_key_base]` 使用。

在 Windows 上，如果 shell 环境中没有 `openssl`，可以使用其他可信方法生成安全随机值。

### 运行容器

```bash
docker run -d \
  --name tymeslot \
  -p 4000:4000 \
  -e SECRET_KEY_BASE='[your_secret_key_base]' \
  -e PHX_HOST='[your_domain_or_ip]' \
  -v tymeslot_data:/app/data \
  -v tymeslot_pg:/var/lib/postgresql/data \
  [your_tymeslot_image]
```

### 参数说明

| 参数 | 含义 |
| --- | --- |
| `-d` | 后台模式启动容器 |
| `--name tymeslot` | 指定容器名称 |
| `-p 4000:4000` | 映射宿主机端口 `4000` 到容器端口 `4000` |
| `-e SECRET_KEY_BASE=...` | 设置应用密钥 |
| `-e PHX_HOST=...` | 设置 Phoenix 使用的主机名 |
| `-v tymeslot_data:/app/data` | 持久化应用数据 |
| `-v tymeslot_pg:/var/lib/postgresql/data` | 持久化 PostgreSQL 数据（如果容器内使用） |

:::caution 请先核实卷路径
上述卷路径来自草稿材料，未在上游官方文档快照中完全确认。生产环境使用前，请查阅官方 Tymeslot Docker 文档核实路径准确性。
:::

### 检查容器状态

```bash
docker ps
```

查看日志：

```bash
docker logs tymeslot
```

如果启动遇到问题，日志是首要排查点。

## 可选 Docker Compose 部署

如果您喜欢用 Compose 管理容器，可以在 `docker-compose.yml` 文件中定义服务。相比长命令行，这种方式更易维护。

### Compose 示例文件

```yaml
services:
  tymeslot:
    image: [your_tymeslot_image]
    container_name: tymeslot
    ports:
      - "4000:4000"
    environment:
      SECRET_KEY_BASE: "[your_secret_key_base]"
      PHX_HOST: "[your_domain_or_ip]"
    volumes:
      - tymeslot_data:/app/data
      - tymeslot_pg:/var/lib/postgresql/data
    restart: unless-stopped

volumes:
  tymeslot_data:
  tymeslot_pg:
```

启动服务：

```bash
docker compose up -d
```

:::tip Compose 管理优势
使用 Compose 让更新、重启和备份更简单，因为容器配置集中在一个文件中。特别适合在同一主机管理多个 Docker 镜像时使用。
:::

## 配置 Tymeslot

容器运行后，请检查最重要的配置项。

### 核心环境变量

| 变量 | 作用 |
| --- | --- |
| `SECRET_KEY_BASE` | 保护会话和应用密钥 |
| `PHX_HOST` | 定义公开的主机名或 IP 地址 |

占位符说明：

- `[your_secret_key_base]` 是您生成的安全密钥
- `[your_domain_or_ip]` 是公开的主机名或服务器 IP，例如 `schedule.[your_domain]` 或 `[your_server_ip]`

### SMTP 配置

草稿材料显示，SMTP 可在 `config/prod.exs` 中配置邮件通知。示例：

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
上述示例来自草稿，反映了典型的 Elixir 邮件配置。建议对照当前上游 Tymeslot 配置文件核实，因为邮件设置可能随版本变化。
:::

## 网络与访问

Tymeslot 运行后，确保您能从浏览器访问它。

### 访问 Web 界面

在浏览器中打开：

```text
http://[your_server_ip]:4000
```

如果配置了反向代理和 DNS，您也可以使用：

```text
https://[your_domain]
```

### 端口说明

| 端口 | 协议 | 用途 |
| --- | --- | --- |
| `4000` | TCP | 草稿设置中的默认 Web 访问端口 |

### 防火墙注意事项

如果直接访问 Tymeslot，需允许入站流量通过 `4000/tcp`。

:::caution 公开暴露风险
如果直接将 Tymeslot 暴露到互联网，强烈建议放置在带 HTTPS 的反向代理后面。这能提升安全性，并提供更整洁的域名访问方式。
:::

## 反向代理建议

如果想使用域名和 TLS 证书，建议配置反向代理。

### 使用反向代理的好处

| 优点 | 说明 |
| --- | --- |
| 支持 HTTPS | 加密用户与服务间的流量 |
| 域名访问 | 使用 `[your_domain]` 替代裸端口访问 |
| 证书管理更简便 | 兼容 Let's Encrypt 等工具 |
| 更整洁的公网访问 | 隐藏内部应用端口 |

### 需要核实的内容

具体反向代理配置取决于您使用的是 Nginx、Apache 还是其他服务器。由于提供的源码材料中未包含完整官方代理示例，建议部署前在上游 Tymeslot 文档中核实所需的请求头和 websocket 处理方式。

## 原生安装说明

Tymeslot 基于 Elixir 和 Phoenix LiveView 构建，可能支持在 Linux 或 Windows 开发环境中原生安装。草稿中包含以下命令：

```bash
git clone https://github.com/tymeslot/tymeslot.git
cd tymeslot
mix deps.get
mix ecto.create
mix ecto.migrate
mix phx.server
```

### 注意事项

| 主题 | 说明 |
| --- | --- |
| Elixir 和 Erlang | 需安装兼容版本 |
| Phoenix 依赖 | 可能需要额外构建工具 |
| 数据库设置 | 迁移前必须正确配置 |
| 生产环境加固 | 通常比 Docker 更复杂 |

:::danger 原生生产部署需核实
上述原生安装步骤来自草稿，未在提供的上游仓库快照中完全确认。生产环境使用前，请务必查阅最新官方 Tymeslot 文档和仓库文件。
:::

## 验证安装

部署后，确认应用正常运行。

### 基本检查

| 检查项 | 预期结果 |
| --- | --- |
| `docker ps` | `tymeslot` 容器正在运行 |
| `docker logs tymeslot` | 无重复启动或数据库错误 |
| 浏览器访问 | Tymeslot 界面正常加载 |
| 端口测试 | 服务器 `4000` 端口响应 |

### 常见问题

| 问题 | 可能原因 |
| --- | --- |
| 页面无法加载 | 端口 `4000` 被阻塞或容器未运行 |
| 容器立即退出 | 环境变量错误或依赖缺失 |
| 日志中数据库错误 | 数据库初始化失败或存储路径错误 |
| 主机名异常 | `PHX_HOST` 设置不正确 |

## 更新 Tymeslot

有新版本时，请谨慎更新部署。

### Docker 更新流程

1. 拉取新镜像：
   ```bash
   docker pull [your_tymeslot_image]
   ```
2. 停止当前容器：
   ```bash
   docker stop tymeslot
   ```
3. 删除旧容器：
   ```bash
   docker rm tymeslot
   ```
4. 使用相同配置启动新容器。

如果使用 Compose，通常可执行：

```bash
docker compose pull
docker compose up -d
```

:::tip 更新前备份
更新前请备份持久卷和相关数据库数据，以防新版本引入迁移或兼容性问题时能恢复。
:::

## 额外参考资料

| 资源 | 链接 |
| --- | --- |
| 官方 Tymeslot 仓库 | [GitHub - Tymeslot](https://github.com/tymeslot/tymeslot) |
| Docker 官方网站 | [Docker](https://www.docker.com/) |
| Self-Host Weekly 提及 | [Self-Host Weekly - 2026 年 4 月 10 日](https://selfh.st/weekly/2026-04-10/) |

## 结论

恭喜，您已成功使用 Docker 在 Linux 或 Windows 上查看并部署了 Tymeslot。如有更多问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为您服务！🙂