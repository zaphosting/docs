---
id: software-zublo-linux-windows
title: "软件 - Zublo（Linux/Windows）"
description: "了解如何使用 Docker 部署 Zublo，实现安全的订阅数据管理、周期性付款跟踪和自托管数据洞察 -> 立即了解更多"
sidebar_label: 软件 - Zublo（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Zublo 是一个开源的自托管订阅跟踪器，帮助你将周期性付款及相关数据集中管理。通过本指南，你将学会如何在 Linux 或 Windows 服务器上使用 Docker 部署 Zublo，并验证其网页界面是否正常运行。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你的服务器满足基本要求并已安装 Docker。

### 要求

| 组件 | 推荐最低配置 |
| --- | --- |
| CPU | 1 个虚拟核心 |
| 内存 | 512 MB |
| 存储 | 1 GB 可用磁盘空间 |
| 操作系统 | 支持 Docker 的 Linux 或 Windows |
| 网络 | 允许访问端口 `9597` |

### 必需软件

你需要安装以下软件：

| 软件 | 用途 |
| --- | --- |
| [Docker](https://www.docker.com/) | 运行 Zublo 容器 |
| Docker Compose | 启动和管理容器堆栈 |

:::info Docker 要求
本指南基于项目仓库推荐的 Docker 部署方式。如果尚未安装 Docker，请先完成安装后再继续。
:::

:::caution 端口访问
Zublo 默认使用端口 `9597`。确保该端口未被其他服务占用，并且防火墙允许通过此端口，以便远程访问网页界面。
:::

## 关于 Zublo

Zublo 旨在通过自托管的网页应用跟踪订阅、周期性付款及相关支出数据。根据项目仓库介绍，它以 Docker 为首选部署方式，适合希望掌控自己数据的自托管用户。

### 应用功能

根据项目公开信息，Zublo 主要聚焦以下方面：

| 功能领域 | 描述 |
| --- | --- |
| 订阅跟踪 | 管理周期性服务和付款 |
| 自托管 | 将订阅数据保存在自己的服务器上 |
| 网页界面 | 通过浏览器访问应用 |
| API 访问 | 使用内置 API 端点 |
| 管理后台 | 访问 PocketBase 管理界面 |

:::note 功能可用性
部分第三方介绍中提及的高级功能（如 AI 辅助分析）可能依赖于当前项目版本。如果你的安装中未见相关功能，请查看官方仓库获取版本特定信息：[Zublo GitHub 仓库](https://github.com/danielalves96/zublo)
:::

## 创建 Zublo 项目目录

首先，为你的 Zublo 部署创建一个专用目录，以便配置和持久化数据保持有序。

### Linux

在终端执行以下命令：

```bash
mkdir -p zublo-data
cd zublo-data
```

### Windows

如果使用 PowerShell，执行：

```powershell
mkdir zublo-data
cd zublo-data
```

该文件夹将包含你的 `docker-compose.yml` 文件和持久化应用数据目录。

## 创建 Docker Compose 配置

接下来，在项目目录内创建一个 `docker-compose.yml` 文件。

### 示例配置

使用以下配置：

```yaml
services:
  zublo:
    image: ghcr.io/danielalves96/zublo:latest
    container_name: zublo
    restart: unless-stopped
    ports:
      - "9597:9597"
    environment:
      PB_ENCRYPTION_KEY: "[your_secure_encryption_key]"
    volumes:
      - ./zublo-data:/pb/pb_data
```

### 配置说明

| 键 | 示例值 | 作用 |
| --- | --- | --- |
| `image` | `ghcr.io/danielalves96/zublo:latest` | 拉取最新的 Zublo 容器镜像 |
| `container_name` | `zublo` | 设置易识别的容器名称 |
| `restart` | `unless-stopped` | 容器异常或重启后自动重启 |
| `ports` | `9597:9597` | 将网页应用暴露在端口 `9597` |
| `PB_ENCRYPTION_KEY` | `[your_secure_encryption_key]` | 保护存储的敏感数据 |
| `volumes` | `./zublo-data:/pb/pb_data` | 在服务器上持久化应用数据 |

:::danger 使用强加密密钥
切勿使用弱或默认值作为加密密钥。请在生产环境启动容器前，将 `[your_secure_encryption_key]` 替换为一串长且随机的密钥。
:::

### 保存文件

将文件保存为当前目录下的 `docker-compose.yml`。保存后，即可准备启动服务。

## 启动 Zublo

创建 Compose 文件后，启动容器堆栈。

```bash
docker compose up -d
```

如果你的环境使用旧版 Docker Compose 语法，可能需要执行：

```bash
docker-compose up -d
```

### 验证容器运行状态

使用以下命令检查容器状态：

```bash
docker ps
```

你应能看到名为 `zublo` 的容器在运行列表中。

### 查看日志（如有需要）

若服务未正常启动，查看日志以排查问题：

```bash
docker logs zublo
```

这有助于识别配置错误、端口冲突或持久化数据权限问题。

## 访问网页界面

容器启动后，你可以在浏览器中打开 Zublo。

### 应用访问地址

将 `[your_server_ip]` 替换为你的服务器公网 IP 或局域网 IP。

| 界面 | URL |
| --- | --- |
| 主应用 | `http://[your_server_ip]:9597` |
| PocketBase 管理后台 | `http://[your_server_ip]:9597/_/` |
| API 端点 | `http://[your_server_ip]:9597/api/` |

:::info 本机访问与远程访问
如果你直接在安装 Zublo 的同一台机器上操作，也可以使用 `http://localhost:9597`。远程访问时，请使用实际服务器 IP 或已配置的域名。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 配置安全访问

确认 Zublo 可访问后，应检查其对外暴露方式。

### 防火墙设置

若无法从其他设备访问应用，请确认防火墙已开放端口 `9597`。

| 端口 | 协议 | 用途 |
| --- | --- | --- |
| `9597` | TCP | Zublo 网页界面、管理面板及 API |

### 反向代理使用

如果想通过域名如 `[your_domain]` 访问 Zublo，可以将其置于 Nginx 或其他支持的反向代理后端。代理会将请求转发至 `http://127.0.0.1:9597` 或 Docker 内部主机地址。

:::tip 互联网访问请使用 HTTPS
若计划公开暴露 Zublo，建议使用带 SSL 的反向代理，确保订阅数据传输加密。
:::

## 管理持久化数据

Zublo 的持久化应用数据存储在 Compose 文件中定义的挂载目录。

### 数据存放位置

本指南使用的卷映射为：

```yaml
volumes:
  - ./zublo-data:/pb/pb_data
```

这意味着应用数据保存在项目目录下的本地 `zublo-data` 文件夹中。

### 持久化的重要性

持久化存储确保应用数据在以下情况下依然可用：

- 容器重启
- 服务器重启
- 镜像更新
- 维护操作

:::caution 备份建议
由于 Zublo 存储重要的个人订阅数据，建议在进行重大更改或更新前，定期备份 `zublo-data` 目录。
:::

## 基础维护

Zublo 运行后，你可能需要偶尔更新或重启它。

### 重启容器

```bash
docker restart zublo
```

### 停止部署

```bash
docker compose down
```

### 更新到最新镜像

拉取最新镜像并重建容器：

```bash
docker compose pull
docker compose up -d
```

### 常用命令参考

| 命令 | 作用 |
| --- | --- |
| `docker compose up -d` | 后台启动 Zublo |
| `docker ps` | 查看运行中的容器 |
| `docker logs zublo` | 查看容器日志 |
| `docker restart zublo` | 重启容器 |
| `docker compose down` | 停止并移除容器 |
| `docker compose pull` | 下载最新镜像 |

## 故障排除

如果 Zublo 未按预期工作，请检查以下常见原因。

### 端口 `9597` 已被占用

如果 Docker 报告端口绑定错误，说明已有服务占用 `9597`。你需要停止冲突服务或更改主机端口映射。

示例：使用不同的外部端口

```yaml
ports:
  - "9600:9597"
```

此时，你应通过 `http://[your_server_ip]:9600` 访问应用。

### 容器启动但页面无法加载

请检查：

- 使用 `docker ps` 确认容器正在运行
- 使用 `docker logs zublo` 查看日志
- 防火墙是否允许所选端口通过
- 是否使用了正确的 IP 地址或主机名

### 加密密钥问题

如果在初次设置后更改了 `PB_ENCRYPTION_KEY`，现有加密数据可能无法读取。若需更换密钥，请先查阅项目官方文档，因为提供的资料中未详细说明迁移行为。

:::note 行为细节缺失
提供的资料未完整记录首次运行的管理员步骤、账户创建流程或高级配置选项。如需详细信息，请查阅上游项目文档：[Zublo GitHub 仓库](https://github.com/danielalves96/zublo)
:::

## 结论

恭喜，你已成功使用 Docker 在 Linux 或 Windows 上安装并配置了 Zublo。若有任何疑问或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂