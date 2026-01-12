---
id: vserver-windows-supabase
title: "VPS：在 Windows 上安装 Supabase"
description: "了解如何设置和配置 Supabase，打造一个可靠的开源 Postgres 平台，支持身份验证和实时功能 → 立即了解更多"
sidebar_label: 安装 Supabase
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Supabase 是一个开源的 Postgres 开发平台，提供完整的 Postgres 数据库加上身份验证、即时 API、实时和存储功能，是 Firebase 的开源替代方案。

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

想自己托管这个服务？我们会一步步带你完成安装和配置，同时告诉你所有需要注意的事项。

<InlineVoucher />

## 前提条件

在安装 **Supabase** 之前，请确保你的主机环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 个 vCPU 核心 | 4 个 vCPU 核心             |
| 内存       | 4 GB        | 8 GB                       |
| 硬盘空间   | 25 GB       | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** `Git`、`Docker（引擎和 Compose）`

**操作系统：** 支持 Docker 2 的最新版本 Ubuntu/Debian

确保所有依赖已安装且操作系统版本正确，以避免安装 Supabase 时出现兼容性问题。

## 准备工作

在搭建 **Supabase** 之前，你需要先准备好系统，包括将操作系统更新到最新版本并安装所有必需依赖。这些准备工作能确保环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。这样可以保证系统拥有最新的安全修复和软件版本。

### 安装依赖
更新完成后，就可以安装依赖了。

#### Git
Supabase 的数据将通过 GitHub 下载，因此需要先安装 Git。请在服务器上安装 [Windows 版 Git](https://git-scm.com/downloads/win)。

#### Docker

Supabase 会通过 Docker 容器部署和运行，因此需要先安装 Docker。请在服务器上安装 [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)。

我们在 [Docker 指南](vserver-windows-docker.md) 中提供了完整的安装流程和 Docker 使用教程。

## 安装
满足所有要求并完成准备后，就可以开始安装 Supabase 了。打开命令提示符，克隆 Supabase 仓库，创建专用项目目录，并复制 Docker 资源和示例环境文件。

```
git clone --depth 1 https://github.com/supabase/supabase
mkdir .\supabase-project

Copy-Item .\supabase\docker\* -Destination .\supabase-project -Recurse -Force
Copy-Item .\supabase\docker\.env.example -Destination .\supabase-project\.env -Force
```

进入项目目录，拉取最新容器镜像，并以后台模式启动服务。

```
cd supabase-project
docker compose pull
docker compose up -d
```

现在你可以通过 `http://<your-ip>:8000` 访问 Supabase Studio。系统会提示输入用户名和密码，默认凭据为：

- 用户名：`supabase`
- 密码：`this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning 默认凭据
你的应用当前使用默认凭据运行。请尽快按照下面的说明保护你的服务安全。
:::

## 配置
切勿使用默认或示例值部署。请替换所有占位符为强壮且唯一的密钥，检查配置是否符合你的安全需求，并重启所有服务以应用更改。

在暴露任何服务前，先生成安全的 API 密钥。首先选择一个 40 字符的 JWT 密钥。你可以使用示例值，也可以自定义。将此密钥安全地保存在本地，切勿泄露或提交到版本控制。使用该密钥生成 JWT，然后根据 Supabase 文档中的表单生成 anon 和 service API 密钥：https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

运行该表单两次以生成两个密钥。更新你的 `./docker/.env` 文件：

- `ANON_KEY`：anon 密钥
- `SERVICE_ROLE_KEY`：service 密钥

更新 `./docker/.env` 中的必填密钥。以下值必须设置才能正常部署：

- `POSTGRES_PASSWORD`：`postgres` 角色密码
- `JWT_SECRET`：PostgREST 和 GoTrue 使用的密钥
- `SITE_URL`：你站点的基础 URL
- `SMTP_*`：邮件服务器凭据
- `POOLER_TENANT_ID`：Supavisor 连接池使用的租户 ID

上线前请用新凭据保护 Dashboard。编辑 `./docker/.env`：

- `DASHBOARD_USERNAME`：Dashboard 用户名
- `DASHBOARD_PASSWORD`：Dashboard 密码

你也可以在 `./docker/volumes/api/kong.yml` 中定义多个 Dashboard 用户：

```
basicauth_credentials:
  - consumer: DASHBOARD
    username: user_one
    password: password_one
  - consumer: DASHBOARD
    username: user_two
    password: password_two
```

如果想在 `localhost` 以外访问 Dashboard，需在 `./docker/.env` 中设置 `SUPABASE_PUBLIC_URL` 为你访问 Dashboard 的 URL 或 IP。

应用配置更改后，重启服务：

```
docker compose down
docker compose up -d
```

## 总结及更多资源

恭喜你！现在已经成功在 VPS 上安装并配置了 Supabase。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Supabase.com](https://Supabase.com/) - 官方网站
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase 官方文档

有具体问题这里没覆盖？欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />