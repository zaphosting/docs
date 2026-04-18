---
id: software-yet-another-rclone-dashboard-linux-windows
title: "软件 - Yet Another Rclone Dashboard（Linux/Windows）"
description: "学习如何设置 Yet Another Rclone Dashboard，这是一款适用于 Linux 和 Windows 的现代 rclone GUI 和 rclone 浏览器，使用 rclone rcd 及 rclone GitHub 发布文件 -> 立即了解更多"
sidebar_label: 软件 - Yet Another Rclone Dashboard（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Yet Another Rclone Dashboard 是一个基于 `rclone rcd` 的现代网页仪表盘，提供图形界面用于浏览文件、查看远程存储和管理传输。通过本指南，你将了解该软件的功能、需求，以及如何在 Linux 或 Windows 上使用支持的部署方式运行它。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，你需要先安装好 [Rclone](https://rclone.org/)，因为 Yet Another Rclone Dashboard 只是 Rclone 远程控制守护进程的前端界面。

### 需求

以下需求基于项目公开信息和安装草案整理。

| 需求 | 详情 |
| --- | --- |
| 操作系统 | Linux 或 Windows |
| 必需软件 | `rclone` |
| 推荐 Rclone 版本 | `v1.72.0` 或更高 |
| 可选软件 | 根据部署方式选择 `Docker`、`Nginx` 或 `Caddy` |
| 默认端口 | `5572/tcp` |
| 网络访问 | 如果需要下载发布版本或使用网页抓取方式，则必须联网 |

### 仪表盘依赖项

Yet Another Rclone Dashboard 不替代 Rclone，而是连接到 Rclone 的 *远程控制守护进程* 模式 `rclone rcd`。

| 组件 | 作用 |
| --- | --- |
| Yet Another Rclone Dashboard | 网页前端 |
| `rclone rcd` | 后端 API 和文件操作 |
| Rclone 远程存储 | 你配置的云存储连接，如 Google Drive |

:::info 需要安装 Rclone
该仪表盘无法单独使用。你必须安装 `rclone` 并以启用远程控制接口的守护进程模式运行它。
:::

### 本指南中使用的占位符

本指南中的多个命令使用了占位符。请在执行命令前替换为你自己的实际值。

| 占位符 | 含义 |
| --- | --- |
| `[your_user]` | Rclone 远程控制认证用户名 |
| `[your_password]` | Rclone 远程控制认证密码 |
| `[your_server_ip]` | 服务器的公网或内网 IP 地址 |
| `[your_domain]` | 用于反向代理访问的域名 |
| `[your_build_path]` | 解压仪表盘文件的路径 |

## 可用的部署方式

你可以根据访问需求选择不同方式运行 Yet Another Rclone Dashboard。

| 方式 | 适用场景 | 备注 |
| --- | --- | --- |
| `--rc-files` | 手动部署 | 使用解压后的静态构建文件 |
| `--rc-web-gui` 配合 `--rc-web-fetch-url` | 快速部署 | 让 Rclone 自动抓取最新仪表盘版本 |
| 使用 Nginx 或 Caddy 等网页服务器 | 自定义托管 | 单独提供静态前端服务 |
| 反向代理加外部认证 | 高级部署 | 适合集中认证管理 |

## 下载仪表盘发布包

如果你想用手动的 `--rc-files` 方式或用自己的网页服务器托管前端，先从项目 GitHub 发布页面下载最新发布包。

官方项目地址：[Yet Another Rclone Dashboard on GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)

截至本指南参考的版本，最新发布为 `v0.3.8`，包含文件 `yet-another-rclone-dashboard-v0.3.8.zip`。

### Linux 下载示例

```bash
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip -d [your_build_path]
```

### Windows 下载示例

在 Windows 上，从 GitHub 发布页面下载 `.zip` 文件并解压到如下文件夹：

```text
C:\yet-another-rclone-dashboard
```

:::note 发布版本说明
发布版本会随时间更新。如果有更新版本，请使用项目 GitHub 页面上的最新发布文件，而不是本示例中的版本。
:::

## 使用 Rclone rc-files 运行仪表盘

如果你已经下载并解压了前端文件，这是最直接的运行方式。

### Linux 示例

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows 示例

```powershell
rclone rcd `
  --rc-files="C:\yet-another-rclone-dashboard" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### 本地桌面示例

如果你只想在本机本地使用仪表盘，可以绑定到 `127.0.0.1`。

```bash
rclone rcd \
  --rc-files="[your_build_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

:::caution 不要暴露无认证的 Rclone
仅在本地测试时使用 `--rc-no-auth` 并绑定到 `127.0.0.1`。如果绑定到 `0.0.0.0`，必须使用认证或配置好反向代理保护。
:::

## 使用 Rclone web fetch 运行仪表盘

Rclone 支持自动抓取网页 GUI，如果你的环境支持，这可以简化部署。

### Linux 示例

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_user]" \
  --rc-pass="[your_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows 示例

```powershell
rclone rcd `
  --rc-web-gui `
  --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" `
  --rc-web-gui-no-open-browser `
  --rc-user="[your_user]" `
  --rc-pass="[your_password]" `
  --rc-addr=0.0.0.0:5572 `
  --rc-allow-origin=http://[your_server_ip]:5572
```

### 重要参数说明

| 参数 | 作用 |
| --- | --- |
| `--rc-web-gui` | 启用 Rclone 的网页 GUI 支持 |
| `--rc-web-fetch-url` | 指定最新发布版本的元数据地址 |
| `--rc-user` | 设置登录用户名 |
| `--rc-pass` | 设置登录密码 |
| `--rc-addr` | 定义监听的 IP 和端口 |
| `--rc-allow-origin` | 允许浏览器从指定 URL 访问 |
| `--rc-web-gui-no-open-browser` | 禁止自动打开浏览器 |

:::tip 精确匹配 Origin
`--rc-allow-origin` 必须设置为你浏览器访问时使用的完整 URL，包括协议（如 `http://` 或 `https://`）。使用反向代理时尤其重要。
:::

## 使用网页服务器托管仪表盘

Yet Another Rclone Dashboard 是静态网页应用，也可以用标准网页服务器如 Nginx 或 Caddy 托管。

这种方式适合你想在一个端口或域名提供前端，而 Rclone 在后台独立运行。

### Nginx 示例

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_build_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy 示例

```caddy
[your_domain] {
    root * [your_build_path]
    file_server
}
```

### 注意事项

如果前端单独托管，Rclone 仍需在后台运行并启用兼容的 `rc` 设置。你还必须确保浏览器请求允许来自你的前端 URL。

| 设置 | 示例 |
| --- | --- |
| 前端 URL | `https://[your_domain]` |
| Rclone 绑定地址 | `127.0.0.1:5572` 或 `0.0.0.0:5572` |
| 允许的 Origin | `https://[your_domain]` |

## 反向代理认证的高级配置

在高级环境中，你可以将仪表盘放在反向代理后面，使用外部认证网关。示例中提到使用 Rclone 的 `--rc-user-from-header` 选项实现此功能。

### Rclone 示例

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_build_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy 示例

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

:::info 高级认证配置说明
此方法依赖你的反向代理和认证栈。具体配置如 `caddy-security` 超出本指南范围，但上例展示了仪表盘如何接收认证用户头。
:::

## 配置访问和安全

开始使用仪表盘前，请检查以下关键访问设置。

### 推荐配置值

| 选项 | 建议 |
| --- | --- |
| `--rc-user` | 设置专用用户名，如 `zaphosting` |
| `--rc-pass` | 使用强密码 |
| `--rc-addr` | 尽量在反向代理后使用 `127.0.0.1:5572` |
| `--rc-allow-origin` | 精确匹配浏览器访问的 URL |
| 防火墙 | 仅在需要直接访问时开放 `5572/tcp` |

### 安全最佳实践

- 网络暴露时务必启用认证
- 公网访问优先使用带 HTTPS 的反向代理
- 尽量限制直接访问 `5572/tcp`
- 如果使用 Rclone 访问云存储（如 Google Drive），请保持 Rclone 更新

:::danger 公网暴露风险
Rclone 远程控制接口拥有强大的文件和远程管理权限。切勿在无认证和无网络限制的情况下公开暴露。
:::

## 启动并验证仪表盘

完成配置后，启动 `rclone rcd` 并在浏览器打开仪表盘。

### 访问示例

| 场景 | URL |
| --- | --- |
| 本地访问 | `http://127.0.0.1:5572` |
| 服务器直接访问 | `http://[your_server_ip]:5572` |
| 反向代理访问 | `https://[your_domain]` |

### 你应该看到的内容

如果配置正确，Yet Another Rclone Dashboard 界面会加载，并允许你：

- 连接到 Rclone 守护进程
- 查看已配置的远程存储
- 浏览文件
- 查看传输状态
- 检查设置和系统信息

如果页面无法加载，请检查以下内容：

| 检查项 | 重要性 |
| --- | --- |
| Rclone 进程是否运行 | 仪表盘需要后台守护进程支持 |
| 端口 `5572` 是否可达 | 直接访问必需 |
| `--rc-allow-origin` 是否正确 | 防止浏览器访问问题 |
| 用户名和密码是否正确 | 认证访问必需 |
| 反向代理头部配置是否正确 | 高级认证配置关键 |

## 故障排查

### 浏览器无法连接

如果浏览器打不开仪表盘，确认 Rclone 是否监听了预期的地址和端口。

Linux 下可用命令：

```bash
ss -tulpn | grep 5572
```

Windows 下可用命令：

```powershell
netstat -ano | findstr 5572
```

### 认证失败

登录失败时：

- 确认 `--rc-user` 和 `--rc-pass` 的值正确
- 确保反向代理没有剥离必要的头部
- 避免在远程或公网接口使用 `--rc-no-auth`

### 前端加载但操作失败

通常是 Origin 或后端通信问题。

请仔细检查：

- `--rc-allow-origin`
- `--rc-addr`
- 反向代理目标地址
- 浏览器访问的 URL

:::tip 利用日志快速定位问题
如果仪表盘表现异常，优先查看 Rclone 控制台输出。认证、绑定和 Origin 问题通常能立即发现。
:::

## 软件参考

### 项目详情

| 项目 | 内容 |
| --- | --- |
| 名称 | Yet Another Rclone Dashboard |
| 类型 | 前端 |
| 源码 | [GitHub 仓库](https://github.com/outlook84/yet-another-rclone-dashboard) |
| 参考版本 | `v0.3.8` |
| 发布包 | `yet-another-rclone-dashboard-v0.3.8.zip` |
| 推荐后端 | `rclone v1.72.0` 或更高 |

### 项目页面已知功能

根据仓库信息，仪表盘支持以下功能：

- 多连接配置文件管理
- Rclone 系统信息和状态汇总
- 远程存储查看
- Rclone 配置导入导出
- 文件浏览和筛选
- 传输相关视图

:::note 功能可用性说明
功能可能随版本变化。如需最新版本的具体功能详情，请查阅上游项目的 GitHub 更新日志和发布说明。
:::

## 结论

恭喜你，已成功在 Linux 或 Windows 上设置 Yet Another Rclone Dashboard。若有任何疑问或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂