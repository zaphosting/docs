---
id: software-yet-another-rclone-dashboard-linux-windows
title: "软件 - Yet Another Rclone Dashboard（Linux/Windows）"
description: "了解如何在 Linux 和 Windows 系统上设置 Yet Another Rclone Dashboard，作为现代的 rclone GUI 和 rclone 浏览器。-> 立即了解更多"
sidebar_label: 软件 - Yet Another Rclone Dashboard（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Yet Another Rclone Dashboard 是一个现代化的基于 `rclone rcd` 的网页仪表盘，提供图形界面来浏览文件、检查远程存储并管理你的 Rclone 配置。通过本指南，你将学会如何在 Linux 或 Windows 上部署它，并安全地连接到已有的 Rclone 守护进程。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你的系统满足基本要求，并且已经安装好 Rclone。

### 要求

| 要求 | 详情 |
|---|---|
| 操作系统 | Linux 或 Windows |
| Rclone 版本 | 推荐使用 `v1.72.0` 或更高版本 |
| 访问方式 | 本地控制台、SSH 或 RDP |
| 网络 | 浏览器可访问仪表盘 URL |
| 默认端口 | `5572/tcp` |

### 你需要先了解的内容

Yet Another Rclone Dashboard 不是独立的存储服务。它是 `rclone rcd` 的前端界面，`rclone rcd` 是 Rclone 的远程控制守护进程模式。这意味着你必须用正确的 web 选项启动 `rclone rcd`，仪表盘才能加载并与后台通信。

:::info 需要安装 Rclone
使用此仪表盘前，你需要有一个正常工作的 [Rclone](https://rclone.org/) 安装环境。如果尚未安装，请先安装并配置 Rclone。
:::

### 推荐的准备清单

| 任务 | 重要性说明 |
|---|---|
| 安装 Rclone | 运行 `rclone rcd` 的前提 |
| 配置至少一个远程存储 | 如果想浏览云存储（如 `rclone google drive`）必需 |
| 开放或转发所需端口 | 远程浏览器访问必需 |
| 决定本地或远程访问 | 决定是否需要身份验证 |

## 理解仪表盘的工作原理

Yet Another Rclone Dashboard 是一个静态网页应用，连接到 Rclone 的远程控制 API。你可以通过 Rclone 直接提供仪表盘文件，也可以用 Nginx、Caddy 等网页服务器单独托管前端。

### 主要功能

根据项目公开信息，仪表盘支持以下功能：

| 功能 | 描述 |
|---|---|
| 多连接配置文件 | 连接不同的 `rclone rcd` 实例 |
| 系统信息 | 查看 Rclone 状态和环境详情 |
| 远程存储检查 | 查看可用远程存储和配置数据 |
| 文件浏览器 | 浏览目录和管理文件 |
| 媒体预览 | 预览支持的内容 |
| 传输视图 | 监控传输活动 |
| 设置界面 | 调整仪表盘相关选项 |

### 何时使用此仪表盘

如果你想要一个轻量级的 `rclone gui` 或 `rclone browser`，而不是仅在终端操作，这个项目非常适合。尤其适合从 VPS、独服或本地 Windows 系统管理云端远程存储。

## 安装方式

你可以通过多种方式部署 Yet Another Rclone Dashboard。选择哪种方式取决于你想要最简单的设置、手动管理安装，还是在服务前面使用反向代理。

### 方式一：用本地文件提供仪表盘

此方法使用解压后的仪表盘构建文件，配合 Rclone 的 `--rc-files` 选项。

#### 下载发布版本

从项目的 GitHub 发布页面下载最新版本压缩包：

- GitHub 项目：[Yet Another Rclone Dashboard](https://github.com/outlook84/yet-another-rclone-dashboard)
- 本文提供的已验证最新版本：`v0.3.8`
- 发布压缩包：`yet-another-rclone-dashboard-v0.3.8.zip`

将压缩包解压到你选择的位置。

示例路径：

| 平台 | 示例路径 |
|---|---|
| Linux | `/opt/yet-another-rclone-dashboard` |
| Windows | `C:\yet-another-rclone-dashboard` |

#### 在 Linux 上启动 Rclone

如果你在同一台机器本地运行仪表盘，只需要本地浏览器访问，可以绑定到 `127.0.0.1`。

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

如果你想从其他设备远程访问，请使用身份验证并监听所有接口。

```bash
rclone rcd \
  --rc-files="/opt/yet-another-rclone-dashboard" \
  --rc-web-gui-no-open-browser \
  --rc-user=[your_rc_username] \
  --rc-pass=[your_rc_password] \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

#### 在 Windows 上启动 Rclone

打开 `命令提示符` 或 `PowerShell`，运行：

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user=[your_rc_username] `
  --rc-pass=[your_rc_password] `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

将占位符替换为你的实际值：

| 占位符 | 含义 |
|---|---|
| `[your_rc_username]` | 用于登录 Rclone API 的用户名 |
| `[your_rc_password]` | 用于保护 Rclone API 的密码 |
| `[your_server_ip]` | 你用来访问仪表盘的公网或内网 IP 地址 |

:::caution 切勿暴露无认证的 Rclone API
不要在可被互联网访问的服务器上，将 `--rc-no-auth` 与 `0.0.0.0:5572` 一起使用。这会让你的 Rclone 控制接口无保护地暴露。
:::

### 方式二：使用 Rclone 的 WebGUI 自动获取功能

此方法让 Rclone 自动获取仪表盘，而无需手动下载构建文件。适合想快速部署的用户。

#### 本地访问示例

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### 远程访问示例

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

:::note 自动获取行为说明
Rclone 存储自动获取的 Web GUI 资源的具体路径取决于你的 Rclone 环境。如果你需要完全控制文件和更新，手动使用 `--rc-files` 方法通常更易管理。
:::

### 方式三：用网页服务器托管前端

因为项目是静态网页应用，你可以用网页服务器单独托管前端，同时让 `rclone rcd` 在后台运行。

#### Nginx 示例

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

#### Caddy 示例

```caddy
[your_domain] {
    root * /path/to/extracted/build
    file_server
}
```

如果你已经使用反向代理栈，想用自定义域名访问仪表盘，这种方式很有用。

:::tip 反向代理最佳实践
如果使用域名或反向代理，`--rc-allow-origin` 应设置为你浏览器打开的准确 URL，比如 `https://[your_domain]`。
:::

### 方式四：高级反向代理与外部认证

高级配置可以使用外部认证网关，并通过请求头传递认证用户给 Rclone。适合有经验的用户。

#### Rclone 示例

```bash
rclone rcd \
  --rc-serve \
  --rc-files='/path/to/extracted/build' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

#### Caddy 示例

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

:::danger 高级认证配置风险
基于请求头的认证只能在可信反向代理后使用。配置错误可能导致未授权访问你的 Rclone 实例。
:::

## 重要的 Rclone 选项

部署 Yet Another Rclone Dashboard 时，以下选项最为关键。

| 选项 | 作用 |
|---|---|
| `--rc-files` | 通过 Rclone 提供解压后的仪表盘文件 |
| `--rc-web-gui` | 启用 Rclone 的网页 GUI 支持 |
| `--rc-web-fetch-url` | 从远程源获取 GUI 发布元数据 |
| `--rc-user` | 设置 API 用户名 |
| `--rc-pass` | 设置 API 密码 |
| `--rc-no-auth` | 禁用身份验证 |
| `--rc-addr` | 定义监听地址和端口 |
| `--rc-allow-origin` | 允许指定来源的浏览器访问 |
| `--rc-web-gui-no-open-browser` | 禁止自动打开浏览器 |
| `--rc-user-from-header` | 从反向代理请求头接受认证用户 |

## 配置指导

选择安装方式后，首次使用前请检查主要配置项。

### 身份验证设置

如果仪表盘仅在本机使用，允许无认证的本地访问可能没问题。任何远程或公网访问都应启用身份验证。

| 访问类型 | 推荐设置 |
|---|---|
| 仅本地 | 绑定 `127.0.0.1`，可选 `--rc-no-auth` |
| 局域网或互联网访问 | 绑定 `0.0.0.0`，并使用 `--rc-user` 和 `--rc-pass` |
| 反向代理加域名 | 绑定 `127.0.0.1` 或私有地址，配合代理认证 |

### 允许的来源

`--rc-allow-origin` 必须与浏览器加载仪表盘的 URL 完全匹配。

示例：

| 访问 URL | 匹配的 `--rc-allow-origin` |
|---|---|
| `http://127.0.0.1:5572` | `http://127.0.0.1:5572` |
| `http://[your_server_ip]:5572` | `http://[your_server_ip]:5572` |
| `https://[your_domain]` | `https://[your_domain]` |

如果不匹配，浏览器可能阻止请求，导致仪表盘加载失败。

## 启动并验证仪表盘

命令运行后，在浏览器打开配置的地址。

### 预期效果

如果配置正确，你应看到 Yet Another Rclone Dashboard 界面，并能连接到配置的 Rclone 守护进程。

常见示例：

| 场景 | URL |
|---|---|
| 本地 Linux 或 Windows 访问 | `http://127.0.0.1:5572` |
| 远程 IP 访问 | `http://[your_server_ip]:5572` |
| 反向代理访问 | `https://[your_domain]` |

### 基础验证步骤

1. 用选定方式启动 `rclone rcd`。
2. 在浏览器打开仪表盘 URL。
3. 如果启用身份验证，登录。
4. 确认远程存储、文件浏览器功能或状态信息可见。
5. 测试简单的读取操作，比如打开目录。

## 故障排查

如果仪表盘无法加载或连接失败，请检查以下常见原因。

### 连接被拒绝

收到连接拒绝错误时，请确认：

- `rclone rcd` 正在运行
- 使用了正确的端口 `5572`
- 服务监听了预期的接口
- 防火墙允许必要的入站访问

### 浏览器来源或登录问题

页面加载但 API 请求失败时：

- 核实 `--rc-allow-origin`
- 确认浏览器 URL 与允许的来源完全匹配
- 核实 `--rc-user` 和 `--rc-pass`
- 确保反向代理正确转发请求

### 文件路径问题

使用 `--rc-files` 时界面不显示：

- 确认解压后的仪表盘文件在正确目录
- 核实 Linux 或 Windows 的路径语法
- 确保解压了压缩包内容，而非仅下载压缩包

:::tip 查看 Rclone 控制台输出
Rclone 通常会在终端打印有用的启动和错误信息。如果仪表盘、`rclone download` 或远程浏览功能异常，优先查看这些输出。
:::

## 安全建议

仪表盘可控制 Rclone，访问配置的远程存储和文件操作，安全性非常重要。

| 建议 | 原因 |
|---|---|
| 远程访问启用身份验证 | 保护 Rclone API |
| 尽可能绑定到 `127.0.0.1` | 减少暴露面 |
| 反向代理后使用 HTTPS | 保护传输中的凭据 |
| 限制防火墙暴露 | 减少攻击面 |
| 使用强密码 | 防止未授权访问 |

:::caution 敏感远程存储风险
如果你的 Rclone 配置包含 Google Drive 等云存储，非安全暴露仪表盘可能导致远程存储和数据泄露。
:::

## 额外项目信息

该项目托管在 GitHub，并于 2026 年 4 月 10 日被 Self-Host Weekly 推荐。

| 项目 | 内容 |
|---|---|
| 项目名称 | Yet Another Rclone Dashboard |
| 分类 | 前端 |
| 源码 | [GitHub 仓库](https://github.com/outlook84/yet-another-rclone-dashboard) |
| 周刊推荐 | [Self-Host Weekly (2026-04-10)](https://selfh.st/weekly/2026-04-10/) |
| 本文验证版本 | `v0.3.8` |

## 结论

恭喜你，已成功在 Linux 或 Windows 上设置 Yet Another Rclone Dashboard。如有更多问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂