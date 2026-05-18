---
id: vserver-windows-supabase
title: "Windows 上安装 Supabase"
description: "了解如何设置和配置 Supabase，打造一个可靠的开源 Postgres 平台，支持身份验证和实时功能 → 立即了解更多"
sidebar_label: 安装 Supabase
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Supabase 是一个开源的 Postgres 开发平台，提供完整的 Postgres 数据库加上身份验证、即时 API、实时功能和存储，是 Firebase 的开源替代方案。

![img](https://screensaver01.zap-hosting.com/index.php/s/gE9NRSMr22oZaCx/preview)

想自己托管这个服务？我们会一步步带你完成安装和配置，同时告诉你所有需要注意的事项。

## 通过一键应用安装器安装 Supabase

你可以直接通过我们 VPS 网页界面的**一键应用安装器**安装 **Supabase**。完成初始应用设置后，打开应用目录，搜索 **Supabase**，选择你喜欢的项目、环境和域名设置，开始部署。这样你就能快速且轻松地部署和管理 **Supabase**，无需手动命令行操作，同时还能享受集成的网页管理、自定义域名支持和可用的 SSL 证书配置。

<InlineVoucher />

## 安装前准备

在安装 **Supabase** 之前，请确保你的托管环境满足以下要求，以保证安装顺利且性能最佳。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ----------- | -------------------------- |
| CPU        | 1 个 vCPU 核心 | 4 个 vCPU 核心             |
| 内存       | 4 GB        | 8 GB                       |
| 硬盘空间   | 25 GB       | 25 GB                      |

软件要求所有必要依赖已安装，并运行在支持的操作系统上。请确保你的服务器满足以下条件后再继续安装：

**依赖项：** `Git`、`Docker（引擎和 Compose）`

**操作系统：** 支持 Docker 2 的最新 Ubuntu/Debian 版本

确保所有依赖已安装且操作系统版本正确，以避免安装 Supabase 时出现兼容性问题。

## 准备工作

在设置 **Supabase** 之前，你需要先准备好系统，包括更新操作系统到最新版本并安装所有必需依赖。这些准备工作能保证环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行最新的软件和安全补丁，建议先执行系统更新。这能保证系统拥有最新的安全修复和软件版本。

### 安装依赖
更新完成后，就可以安装依赖了。

#### Git
Supabase 的数据将通过 GitHub 下载，因此需要先安装 Git。请在服务器上安装 [Git for Windows](https://git-scm.com/downloads/win)。

#### Docker
Supabase 会通过 Docker 容器部署和运行，因此需要先安装 Docker。请在服务器上安装 [Docker Desktop](https://docs.docker.com/desktop/setup/install/windows-install/)。

我们在 [Docker 指南](vserver-windows-docker.md) 中提供了完整的安装流程和 Docker 使用教程。

## 安装步骤
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

现在你可以通过 `http://<your-ip>:8000` 访问 Supabase Studio。系统会要求输入用户名和密码，默认凭据是：

- 用户名：`supabase`
- 密码：`this_password_is_insecure_and_should_be_updated`

![img](https://screensaver01.zap-hosting.com/index.php/s/oBpk2K3S46gETHf/preview)

:::warning 默认凭据
你的应用当前使用默认凭据运行。请尽快按照下面的说明保护你的服务。
:::

## 配置
切勿使用默认或示例值部署。请替换所有占位符为强壮且唯一的密钥，检查配置是否符合你的安全需求，并重启所有服务以应用更改。

在暴露任何服务之前，先生成安全的 API 密钥。首先选择一个 40 字符的 JWT 密钥。你可以使用示例值，也可以自定义。将此密钥安全地保存在本地，切勿分享或提交到版本控制。使用该密钥生成 JWT，然后根据 Supabase 文档中的表单生成 anon 和 service API 密钥：https://supabase.com/docs/guides/self-hosting/docker#generate-api-keys

运行表单两次以生成两个密钥。更新你的 `./docker/.env` 文件：

- `ANON_KEY`：anon 密钥
- `SERVICE_ROLE_KEY`：服务密钥

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

如果想让 Dashboard 在非 `localhost` 环境下完全可用，请在 `./docker/.env` 中设置 `SUPABASE_PUBLIC_URL` 为你访问 Dashboard 的 URL 或 IP。

修改配置后，重启服务应用更改：

```
docker compose down
docker compose up -d
```

## 总结及更多资源

恭喜！你已经成功在 VPS/独立服务器上安装并配置了 Supabase。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Supabase.com](https://Supabase.com/) - 官方网站
- [Supabase.com/docs/guides/self-hosting](https://supabase.com/docs/guides/self-hosting) - Supabase 官方文档

有具体问题没在这里找到答案？欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂