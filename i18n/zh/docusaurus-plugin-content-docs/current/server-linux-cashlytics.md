---
id: server-linux-cashlytics
title: "在 Linux 服务器上安装 Cashlytics - 自托管你的 AI 驱动财务管家"
description: "学习如何使用 Docker 在你的 Linux VPS 上安装并运行 Cashlytics，借助 AI 助力管理个人财务和预算 → 立即了解更多"
sidebar_label: 安装 Cashlytics
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

[Cashlytics](https://github.com/aaronjoeldev/cashlytics-ai) 是一款现代化的**个人财务和预算管理平台**，帮助你追踪支出、管理预算，并深入了解你的财务习惯。通过分析交易数据和支出类别，Cashlytics 帮助你清楚知道钱花到哪里了，以及如何优化你的财务规划。

该平台还可选集成**AI 助手**，让你分析财务数据、识别消费模式，并获得智能化的预算行为洞察。

![img](https://screensaver01.zap-hosting.com/index.php/s/W46gYzqdiPrBDsE/preview)

自托管 Cashlytics 在你自己的服务器上，意味着你可以**完全掌控你的财务数据**，同时通过网页界面随时随地访问你的预算工具。想自己托管 Cashlytics？本指南将带你通过 Docker 在 Linux VPS 上完成安装。

<InlineVoucher />

## Cashlytics 的使用场景

Cashlytics 适用于各种需要财务管理和预算规划的个人和专业场景。典型用例包括：

- 追踪个人开销和每月预算
- 监控消费模式和财务习惯
- 管理多重收入来源和财务类别
- 生成 AI 驱动的智能预算洞察
- 搭建私有且自控的财务仪表盘

由于是自托管，Cashlytics 非常适合追求隐私保护、想要替代云端财务工具的用户。

## 安装前准备

安装 Cashlytics 前，请确保你的 VPS 满足以下要求。

| 硬件 | 最低配置 | 推荐配置 |
|----------|---------|-------------|
| CPU | 1 核 | 2 核 |
| 内存 | 2 GB | 4 GB |
| 硬盘空间 | 10 GB | 20 GB |



此外，需安装以下软件：

- Docker
- Docker Compose

如果你还没安装 Docker，请先参考我们的 [Docker 安装指南](dedicated-linux-docker.md)。



<InlineServiceLink />



## 准备工作

首先为 Cashlytics 创建一个项目目录。

```bash
mkdir cashlytics && cd cashlytics
```

接着下载官方 Cashlytics Docker 配置文件。

```
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/docker-compose.selfhost.yml
curl -O https://raw.githubusercontent.com/aaronjoeldev/cashlytics-ai/main/.env.example
```

通过复制示例文件创建你的环境配置文件。

```
cp .env.example .env
```

`.env` 文件包含运行 Cashlytics 所需的配置变量。



## 安装步骤



### 打开 `.env` 文件

打开 `.env` 文件，配置必需的环境变量。

```
nano .env
```



### 配置数据库密码

为 Cashlytics 使用的 PostgreSQL 数据库设置一个安全密码。

```
POSTGRES_PASSWORD=your_secure_password_here
```



### 配置数据库连接

更新数据库连接字符串，使用上面设置的同一密码。

```
DATABASE_URL=postgresql://cashlytics:your_secure_password_here@postgres:5432/cashlytics
```



### 可选 AI 助手

Cashlytics 支持可选的 AI 助手，能分析财务数据并提供预算建议。启用此功能需添加你的 OpenAI API 密钥。

```
OPENAI_API_KEY=sk-your-openai-key
```

如果不想使用 AI 助手，可以将此变量留空。



## 启动 Cashlytics

配置完成后，使用 Docker Compose 启动应用。

```
docker compose -f docker-compose.selfhost.yml up -d
```

Docker 会下载所需的容器镜像并启动 Cashlytics 服务。你可以用以下命令确认容器是否运行：

```
docker ps
```



## 访问 Cashlytics

容器启动成功后，打开浏览器访问 Cashlytics 网页界面：

```
http://YOUR_SERVER_IP:3000
```

将 YOUR_SERVER_IP 替换为你的 VPS IP 地址。界面加载后，即可开始配置财务、预算和分类。

## 总结

恭喜你！你已成功在 Linux 服务器上安装了 Cashlytics。现在可以开始使用这个平台追踪开销、管理预算，并深入洞察你的财务数据。

在自己的 VPS/独服上运行 Cashlytics，确保你的财务信息完全掌控在自己手中，同时享受现代预算工具和可选 AI 分析的便利。

如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />