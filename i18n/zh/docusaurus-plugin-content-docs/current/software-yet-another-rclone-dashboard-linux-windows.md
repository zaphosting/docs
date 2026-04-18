---
id: software-yet-another-rclone-dashboard-linux-windows
title: "软件 - Yet Another Rclone Dashboard（Linux/Windows）"
description: "设置 Yet Another Rclone Dashboard，一款适用于 Linux 和 Windows 的现代 rclone GUI 和浏览器，安全管理你的 rclone 守护进程 -> 立即了解更多"
sidebar_label: 软件 - Yet Another Rclone Dashboard（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Yet Another Rclone Dashboard 是一个现代化的 `rclone rcd` 网页仪表盘，提供图形界面来管理远程端、浏览文件和查看传输情况。在本指南中，你将学习如何在 Linux 或 Windows 上部署它，并连接到你现有的 Rclone 配置。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，请确保你的系统满足基本要求，并且已经安装了 Rclone。

### 要求

| 组件 | 要求 |
| --- | --- |
| 操作系统 | Linux 或 Windows |
| Rclone 版本 | 推荐使用 `v1.72.0` 或更高版本 |
| 访问方式 | 本地终端、SSH 或 RDP |
| 默认端口 | `5572/tcp` |
| 可选 | 反向代理，如 Nginx 或 Caddy |

### 安装前需要准备的内容

你需要准备以下内容：

- 已安装并可正常使用的 [Rclone](https://rclone.org/)
- 至少配置了一个 Rclone 远程端，如果你想访问云存储（例如 *rclone Google Drive*）
- 如果需要远程连接，确保端口 `5572` 已开放或已转发
- 用于访问仪表盘的浏览器

:::info Rclone 必须先安装
Yet Another Rclone Dashboard 只是 `rclone rcd` 的前端界面，不替代 Rclone 本身，因此你必须先安装并配置好 Rclone。
:::

### 本指南中使用的重要占位符

以下命令中使用的占位符需要替换成你自己的实际值。

| 占位符 | 含义 |
| --- | --- |
| `[your_dashboard_path]` | 仪表盘文件存放路径 |
| `[your_server_ip]` | 服务器的公网或内网 IP 地址 |
| `[your_domain]` | 用于反向代理访问的域名 |
| `[your_rc_user]` | Rclone RC 认证用户名 |
| `[your_rc_password]` | Rclone RC 认证密码 |

## 关于 Yet Another Rclone Dashboard

Yet Another Rclone Dashboard 是一个静态网页前端，托管在 [GitHub](https://github.com/outlook84/yet-another-rclone-dashboard)。根据项目 README，它专为 `rclone rcd` 设计，支持以下功能：

- 连接到守护进程模式的 Rclone
- 管理多个连接配置文件
- 查看系统信息和状态
- 浏览目录
- 操作远程端和配置数据

由于它是前端界面，实际的文件操作仍由 Rclone 处理，这意味着仪表盘依赖于正在运行的 `rclone rcd` 实例。

## 安装方式

你可以根据访问需求选择多种部署方式。最常用的方法是直接用 Rclone 搭配静态文件，或者让 Rclone 自动获取网页 GUI。

### 安装方式概览

| 方法 | 适用场景 | 备注 |
| --- | --- | --- |
| `--rc-files` | 手动部署 | 你自行下载并解压仪表盘文件 |
| `--rc-web-gui` 配合 `--rc-web-fetch-url` | 快速安装 | Rclone 自动获取最新仪表盘版本 |
| 外部 Web 服务器 | 自定义托管 | 适合搭配 Nginx 或 Caddy |
| 带认证网关的反向代理 | 高级配置 | 适合安全的远程访问 |

## 手动下载仪表盘

如果你想完全掌控部署版本，可以从项目 GitHub 发布页面手动下载最新版本。

### Linux

创建仪表盘目录，下载最新版本压缩包并解压。

```bash
mkdir -p [your_dashboard_path]
cd [your_dashboard_path]
wget https://github.com/outlook84/yet-another-rclone-dashboard/releases/download/v0.3.8/yet-another-rclone-dashboard-v0.3.8.zip
unzip yet-another-rclone-dashboard-v0.3.8.zip
```

### Windows

在 Windows 上，从官方 GitHub 发布页面下载压缩包，解压到类似以下文件夹：

```text
C:\rclone-dashboard
```

:::note 版本说明
撰写本文时，最新验证版本为 `v0.3.8`。如果有更新版本，你也可以使用最新版本。
:::

## 使用 Rclone 启动仪表盘

文件准备好后，你可以启动 `rclone rcd`，通过 Rclone 自身提供仪表盘服务。

### Linux 本地访问

如果只想在本机访问仪表盘，使用此方法。

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### Linux 远程访问

如果想从其他设备远程访问仪表盘，使用此方法。

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### Windows 本地访问

打开命令提示符或 PowerShell，运行：

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

### Windows 远程访问

远程访问时，运行：

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-web-gui-no-open-browser --rc-user="[your_rc_user]" --rc-pass="[your_rc_password]" --rc-addr=0.0.0.0:5572 --rc-allow-origin=http://[your_server_ip]:5572
```

:::caution 切勿暴露无保护的 Rclone GUI
如果你将 Rclone 绑定到 `0.0.0.0`，请不要使用 `--rc-no-auth`。远程访问必须通过认证或反向代理保护。
:::

## 使用 Rclone WebGUI 自动获取功能

Rclone 也可以自动从 GitHub 获取仪表盘文件，适合不想手动下载解压的用户。

### 本地模式

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

### 远程模式

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rc_user]" \
  --rc-pass="[your_rc_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip 自动更新
如果你想让 Rclone 自动获取最新仪表盘版本，这种方法非常方便。通常也是测试新 rclone GUI 部署最快捷的方式。
:::

## 使用 Web 服务器托管仪表盘

由于 Yet Another Rclone Dashboard 是静态前端，你也可以用标准 Web 服务器托管它，同时让 `rclone rcd` 在后台独立运行。

### Nginx 示例

```nginx
server {
    listen 80;
    server_name [your_domain];

    location / {
        root [your_dashboard_path];
        index index.html;
        try_files $uri $uri/ /index.html;
    }
}
```

### Caddy 示例

```caddy
[your_domain] {
    root * [your_dashboard_path]
    file_server
}
```

如果你已经使用反向代理，或者想用域名更干净地访问仪表盘，这种方法很实用。

## 高级反向代理配置

如果想通过外部认证层保护访问，可以在 Rclone 前面使用反向代理，并通过请求头转发认证用户。

### Rclone 命令

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
  --rc-user-from-header X-Remote-User \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=https://[your_domain]
```

### Caddy 示例，转发用户头

```caddy
@rclone host [your_domain]
handle @rclone {
    reverse_proxy 127.0.0.1:5572 {
        header_up X-Remote-User {http.auth.user.id}
        header_up -Authorization
    }
}
```

:::info 高级认证说明
具体的认证网关实现取决于你的环境。上面示例仅展示了 Rclone 与反向代理的集成模式。如果你使用身份提供商或 Caddy 插件，请根据对应软件的官方文档进行配置。
:::

## 配置参考

以下是与仪表盘配合使用的主要 Rclone RC 选项。

| 选项 | 作用 |
| --- | --- |
| `--rc-files` | 提供解压后的仪表盘文件 |
| `--rc-web-gui` | 启用 Rclone WebGUI 支持 |
| `--rc-web-fetch-url` | 从 GitHub 获取仪表盘发布元数据 |
| `--rc-no-auth` | 禁用认证，仅适合本地使用 |
| `--rc-user` | 设置 Rclone RC 用户名 |
| `--rc-pass` | 设置 Rclone RC 密码 |
| `--rc-addr` | 定义监听地址和端口 |
| `--rc-allow-origin` | 允许指定 URL 的浏览器访问 |
| `--rc-web-gui-no-open-browser` | 禁止自动打开浏览器 |
| `--rc-user-from-header` | 从代理请求头接受认证用户 |

### 选择正确的 `--rc-allow-origin`

`--rc-allow-origin` 必须设置为你浏览器中使用的准确 URL。

| 访问类型 | 示例值 |
| --- | --- |
| 本地访问 | `http://127.0.0.1:5572` |
| 基于 IP 的远程访问 | `http://[your_server_ip]:5572` |
| 反向代理 HTTPS 访问 | `https://[your_domain]` |

:::caution Origin 必须匹配
如果 `--rc-allow-origin` 与浏览器访问的 URL 不匹配，仪表盘可能因浏览器安全限制无法正确加载。
:::

## 访问并验证仪表盘

启动 `rclone rcd` 后，在浏览器中打开仪表盘。

### 常用访问 URL

| 场景 | URL |
| --- | --- |
| 本机访问 | `http://127.0.0.1:5572` |
| 远程 IP 访问 | `http://[your_server_ip]:5572` |
| 反向代理访问 | `https://[your_domain]` |

### 启动后检查内容

打开页面后，请确认：

- Yet Another Rclone Dashboard 界面正常加载
- 你配置的远程端显示正常
- Rclone 浏览器视图中的文件浏览功能可用
- 传输和系统信息面板响应正常

如果页面无法加载，先检查 Rclone 控制台输出。认证错误、Origin 不匹配和端口绑定问题是最常见原因。

## 安全建议

运行云存储仪表盘时，尤其是公开暴露时，需要谨慎配置安全设置。

### 推荐安全措施

| 建议 | 原因 |
| --- | --- |
| 远程访问使用 `--rc-user` 和 `--rc-pass` | 防止未授权访问 |
| 优先通过反向代理使用 HTTPS | 保护传输中的凭据 |
| 尽可能绑定到 `127.0.0.1` | 降低暴露风险 |
| 限制防火墙只开放 `5572/tcp` | 减少攻击面 |
| 公网环境避免使用 `--rc-no-auth` | 防止 Rclone 实例被公开访问 |

:::danger 公开暴露风险
暴露且无保护的 `rclone rcd` 实例可能导致远程端和文件被访问。如果你在问“rclone 安全么”，答案很大程度上取决于你如何安全地暴露和认证该服务。
:::

## 故障排查

如果仪表盘无法正常工作，请参考以下检查项。

### 仪表盘页面打不开

可能原因：

- `rclone rcd` 未运行
- 端口 `5572` 被防火墙阻挡
- 服务绑定在 `127.0.0.1`，但你尝试远程连接

### 界面加载但操作失败

可能原因：

- `--rc-user` 或 `--rc-pass` 错误
- `--rc-allow-origin` 设置不正确
- Rclone 远程端配置缺失或损坏

### 通过反向代理无法加载仪表盘

可能原因：

- 代理目标指向错误的后端
- HTTPS URL 与 `--rc-allow-origin` 不匹配
- 必需的请求头未正确传递

### 有用的检查命令

Linux：

```bash
ss -tulpn | grep 5572
```

Windows PowerShell：

```powershell
netstat -ano | findstr 5572
```

测试本地端点：

```bash
curl http://127.0.0.1:5572
```

:::tip 优先查看 Rclone 日志
大多数启动和连接问题都能直接在运行 `rclone rcd` 的终端或服务日志中看到。修改配置前请先查看日志。
:::

## 额外说明

Yet Another Rclone Dashboard 曾于 2026 年 4 月 10 日在 Self-Host Weekly 中介绍，项目托管在 GitHub。撰写时，该项目主要是一个前端解决方案，旨在通过浏览器仪表盘提升 Rclone 的用户体验。

某些自定义环境可能支持 Docker 部署，但官方资料中未提供验证的 Docker 部署说明。因此本指南仅涵盖项目官方支持的设置方法。

## 结论

恭喜，你已成功在 Linux 或 Windows 上安装并配置了 Yet Another Rclone Dashboard。若有任何问题或需要帮助，请随时联系我们的支持团队，我们每天都在线为你服务！🙂