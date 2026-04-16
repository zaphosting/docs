---
id: software-yet-another-rclone-dashboard-linux-windows
title: "软件 - Yet Another Rclone Dashboard（Linux/Windows）"
description: "了解如何使用 Yet Another Rclone Dashboard 作为 Linux 和 Windows 的现代 rclone GUI，包括 rclone 浏览器访问和使用 rclone rcd 的守护进程设置。-> 立即了解更多"
sidebar_label: 软件 - Yet Another Rclone Dashboard（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Yet Another Rclone Dashboard 是一个现代的网页仪表盘，用于通过浏览器界面管理 `rclone rcd`。本指南将介绍该软件的功能、需求，以及如何在 Linux 或 Windows 上使用支持的部署方式进行设置。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你的系统满足基本要求，并且已经安装了 `rclone`。

### 需求

根据项目仓库，Yet Another Rclone Dashboard 设计用于 `rclone rcd`，并推荐使用 **Rclone `v1.72.0` 或更高版本**。

| 需求 | 详情 |
|---|---|
| 操作系统 | Linux 或 Windows |
| 主要依赖 | `rclone` |
| 推荐 Rclone 版本 | `v1.72.0` 或更高 |
| 访问方式 | 网页浏览器 |
| 默认 RC 端口 | `5572/tcp` |
| 可选软件 | 根据设置可选 `Docker`、`Nginx` 或 `Caddy` |

### 仪表盘功能

上游项目将 Yet Another Rclone Dashboard 描述为 `rclone rcd` 的前端。根据可用的源码信息，它包含以下功能：

| 功能 | 描述 |
|---|---|
| 多连接配置文件 | 连接不同的 `rclone rcd` 实例 |
| 系统信息 | 查看 Rclone 系统和状态信息 |
| 远程管理 | 检查远程端并导入或导出 Rclone 配置 |
| 文件浏览器 | 通过仪表盘浏览目录和管理文件 |

:::info Rclone 需求说明
该软件不是独立的存储服务器。你需要一个正常工作的 `rclone` 安装，并且必须以守护进程模式运行 `rclone rcd`。
:::

### 下载源码

官方项目源码托管在 GitHub：

- [Yet Another Rclone Dashboard GitHub 仓库](https://github.com/outlook84/yet-another-rclone-dashboard)

截至本文档提供时，最新版本为 `v0.3.8`，包含资产 `yet-another-rclone-dashboard-v0.3.8.zip`。

## 了解仪表盘工作原理

Yet Another Rclone Dashboard 是一个静态网页前端，连接到由 `rclone rcd` 提供的 *Rclone 远程控制 API*。这意味着仪表盘本身不替代 `rclone`，而是在浏览器中为你提供更简洁的 `rclone gui` 风格体验。

实际上，你有几种使用方式：

| 方法 | 使用场景 | 备注 |
|---|---|---|
| `--rc-files` | 手动本地或服务器部署 | 通过 `rclone rcd` 直接提供解压后的仪表盘文件 |
| `--rc-web-gui` + fetch URL | 通过 Rclone 自动下载 | 让 Rclone 自动获取最新仪表盘版本 |
| 反向代理 | 基于域名访问 | 适合通过 `Nginx` 或 `Caddy` 发布仪表盘 |
| 外部 Web 服务器 | 静态文件托管 | 分开托管前端，连接到 `rclone rcd` |

:::note 浏览器访问说明
由于这是网页仪表盘，启动并正确配置 `rclone rcd` 后，你将通过浏览器访问它。
:::

## 下载仪表盘文件

如果你选择手动部署方式，先从项目的 GitHub 发布页面下载最新版本压缩包，并在服务器或本地系统解压。

### Linux 示例

你可以用 `wget` 下载当前版本压缩包：

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
```

然后解压：

```bash
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_dashboard_directory]
```

将 `[your_dashboard_directory]` 替换为你想存放解压文件的文件夹，例如 `/opt/yet-another-rclone-dashboard`。

### Windows 示例

在 Windows 上，从 GitHub 发布页面下载 `.zip` 压缩包，解压到如下文件夹：

```text
C:\yet-another-rclone-dashboard
```

:::tip 保持文件在固定位置
不要将仪表盘解压到临时文件夹。如果使用 `--rc-files` 方法，`rclone rcd` 需要持续访问这些文件。
:::

## 启动 Rclone 并加载仪表盘

文件准备好后，你可以启动 `rclone rcd` 并暴露仪表盘。

### 方法一：使用 `--rc-files` 手动设置

此方法直接使用解压的仪表盘文件。

#### Linux 本地示例

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Linux 服务器示例

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### Windows 示例

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### 方法二：使用 `--rc-web-gui` 自动设置

此方法让 Rclone 自动从 GitHub 发布 API 获取仪表盘。

#### 本地示例

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### 远程服务器示例

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution 切勿暴露无保护的 RC 接口
如果你将 `rclone rcd` 绑定到 `0.0.0.0`，服务可能会被其他系统访问。请使用 `--rc-user` 和 `--rc-pass` 认证，或将其放置在配置正确的反向代理后面。
:::

## 重要的 Rclone 选项

以下选项是设置仪表盘时最相关的。

| 选项 | 作用 |
|---|---|
| `--rc-files` | 从本地目录提供静态仪表盘文件 |
| `--rc-web-gui` | 启用 Rclone 的网页 GUI 获取机制 |
| `--rc-web-fetch-url` | 指定仪表盘的发布 API 端点 |
| `--rc-no-auth` | 禁用认证，仅适合可信本地使用 |
| `--rc-user` | 设置 RC 用户名 |
| `--rc-pass` | 设置 RC 密码 |
| `--rc-addr` | 定义监听地址和端口 |
| `--rc-allow-origin` | 允许指定来源的浏览器访问 |
| `--rc-web-gui-no-open-browser` | 防止无头系统自动打开浏览器 |
| `--rc-user-from-header` | 从反向代理头部接受认证用户 |

### 占位符说明

示例中使用的占位符含义如下：

| 占位符 | 含义 |
|---|---|
| `[your_dashboard_directory]` | 解压仪表盘文件的文件夹 |
| `[your_rc_username]` | `rclone rcd` 认证用户名 |
| `[your_rc_password]` | `rclone rcd` 认证密码 |
| `[your_server_ip]` | 服务器的公网或内网 IP 地址 |

## 配置浏览器访问

启动 `rclone rcd` 后，在浏览器中打开仪表盘 URL。

### 本地访问

如果你在本机启动服务，打开：

```text
http://127.0.0.1:5572
```

### 远程访问

如果你在远程 Linux 或 Windows 服务器启动服务并允许外部访问，打开：

```text
http://[your_server_ip]:5572
```

如果你使用域名和反向代理，打开你配置的 URL，例如：

```text
https://[your_domain]
```

:::info 允许的来源必须匹配
`--rc-allow-origin` 使用的值应与浏览器中实际访问的地址匹配，否则仪表盘可能无法正确连接。
:::

## 使用反向代理

反向代理适合需要更简洁 URL、HTTPS 或额外访问控制的场景。

### Nginx 示例

下面示例通过 `Nginx` 提供解压后的静态仪表盘文件：

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root /path/to/extracted/build;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy 示例

下面示例通过 `Caddy` 提供静态仪表盘文件：

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

:::note 静态前端托管说明
这些示例仅提供前端文件。你仍然需要一个可用的 `rclone rcd` 后端供仪表盘连接。
:::

## 反向代理的高级认证

项目还记录了一个高级设置，认证由外部网关处理，并通过 `--rc-user-from-header` 传递给 Rclone。

### Rclone 示例

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy 反向代理示例

```caddy
@rclone host [your_domain]
handle @rclone {
        authorize with admins_policy
        reverse_proxy 127.0.0.1:5572 {
                header_up X-Remote-User {http.auth.user.sub}
                header_up -Authorization
        }
}
```

:::caution 高级认证需谨慎测试
此设置依赖反向代理和认证网关正确转发头部。如果头部缺失或配置错误，访问可能失败或异常。
:::

## 验证安装

一切运行后，确认仪表盘能正常加载。

### 基础检查

确认以下内容：

| 检查项 | 预期结果 |
|---|---|
| `rclone rcd` 进程运行中 | 控制台或服务日志无启动错误 |
| 端口 `5572` 正在监听 | 服务本地或远程可达 |
| 浏览器打开配置的 URL | 加载 Yet Another Rclone Dashboard 界面 |
| 认证正常 | 如果启用 RC 认证，能成功登录 |

### 常见问题

| 问题 | 可能原因 | 建议操作 |
|---|---|---|
| 仪表盘无法加载 | URL 错误或服务未运行 | 检查 `--rc-addr` 值和进程状态 |
| 浏览器连接错误 | 端口被防火墙阻挡 | 如有需要，允许入站访问 `5572/tcp` |
| 登录失败 | `--rc-user` 或 `--rc-pass` 错误 | 使用正确凭据重启 `rclone rcd` |
| 前端打开但 API 调用失败 | `--rc-allow-origin` 不匹配 | 设置为浏览器访问的准确来源 |
| 远程访问不可用 | 服务仅绑定到 `127.0.0.1` | 如果需要远程访问，使用 `0.0.0.0:5572` |

:::danger 公开暴露无保护风险
切勿在没有认证或安全反向代理的情况下直接将仪表盘暴露到互联网。如果你计划远程使用 `rclone browser` 或管理 `rclone google drive` 远程端，请先确保端点安全。
:::

## Linux 和 Windows 的额外说明

### Linux

Linux 通常是运行长期 `rclone rcd` 服务的最简环境。你可以手动运行命令，通过终端复用器，或根据系统设计作为服务运行。

### Windows

在 Windows 上，确保 `--rc-files` 指向解压的仪表盘目录，并且防火墙允许配置的端口以支持远程访问。

### Docker 说明

提供的源码材料提到 Docker 作为可选依赖，但未包含该项目的验证 Docker 部署流程。如果你想使用 `rclone docker` 工作流，建议先查看上游仓库，而非直接假设容器配置。

## 结论

恭喜，你已成功在 Linux 或 Windows 上设置 Yet Another Rclone Dashboard。若有任何问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂