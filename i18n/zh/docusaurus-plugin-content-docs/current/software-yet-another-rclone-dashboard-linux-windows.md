---
id: software-yet-another-rclone-dashboard-linux-windows
title: "软件 - Yet Another Rclone Dashboard（Linux/Windows）"
description: "了解如何在 Linux 和 Windows 上使用 Yet Another Rclone Dashboard 作为 rclone GUI，包括 rclone 下载和基于浏览器的仪表盘访问 -> 立即了解更多"
sidebar_label: 软件 - Yet Another Rclone Dashboard（Linux/Windows）
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Yet Another Rclone Dashboard 是一个现代化的网页仪表盘，用于通过浏览器界面管理 `rclone rcd`。本指南将介绍该软件的功能、需求，以及如何在 Linux 或 Windows 上配合 Rclone 进行设置。

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## 准备工作

开始之前，你需要先安装好 [Rclone](https://rclone.org/)，因为该仪表盘设计为连接到 `rclone rcd`，而不是作为独立后端运行。

### 需求

以下需求基于项目公开信息和提供的安装草案。

| 需求 | 详情 |
| --- | --- |
| 操作系统 | Linux 或 Windows |
| 必需软件 | `rclone` |
| 推荐 Rclone 版本 | `v1.72.0` 或更高 |
| 可选软件 | 如果想单独托管静态文件，可使用 `Nginx`、`Caddy` 或其他网页服务器 |
| 可选构建依赖 | 如果计划从源码构建项目，需要 `Node.js` |
| 默认 RC 端口 | `5572/tcp` |

:::info 需要 Rclone 运行环境
Yet Another Rclone Dashboard 是 `rclone rcd` 的前端界面，必须有正在运行的 Rclone 远程控制实例才能使用。
:::

### 访问和网络注意事项

如果你想远程访问仪表盘，确保运行 Rclone 的系统允许访问配置的端口。

| 场景 | 推荐绑定地址 | 示例 URL |
| --- | --- | --- |
| 仅本地访问 | `127.0.0.1:5572` | `http://127.0.0.1:5572` |
| 网络内远程访问 | `0.0.0.0:5572` | `http://[your_server_ip]:5572` |
| 反向代理设置 | `127.0.0.1:5572` | `https://[your_domain]` |

:::caution 安全暴露仪表盘
如果将 Rclone 绑定到 `0.0.0.0`，服务可能会被其他系统访问。建议使用认证，并且如果可能，配合带 HTTPS 的反向代理。
:::

## 关于 Yet Another Rclone Dashboard

Yet Another Rclone Dashboard 是基于网页的 Rclone 守护进程模式前端。根据项目仓库，它支持连接 `rclone rcd`，多连接配置文件，远程检查，配置导入导出，文件浏览和传输管理。

这意味着你可以用它作为 `rclone gui` 或 `rclone browser`，完成通常需要命令行操作的常见任务。

### 项目详情

| 项目 | 内容 |
| --- | --- |
| 名称 | Yet Another Rclone Dashboard |
| 分类 | 前端界面 |
| 源码 | [GitHub 仓库](https://github.com/outlook84/yet-another-rclone-dashboard) |
| 最新参考版本 | `v0.3.8` |
| 版本包 | `yet-another-rclone-dashboard-v0.3.8.zip` |
| 推荐后端 | `rclone rcd` |

### 支持的使用模式

项目资料确认该仪表盘设计用于配合 Rclone 的远程控制模式。具体操作系统的打包方式未在公开资料中详细说明，因此本指南重点介绍仓库草案中验证过的部署方法。

## 安装方法

你可以根据访问需求选择不同方式部署 Yet Another Rclone Dashboard。最直接的方法是让 Rclone 自身托管仪表盘文件。

### 方法一：用 `--rc-files` 直接托管仪表盘

此方法使用解压后的仪表盘文件，告诉 `rclone rcd` 直接托管它们。

#### 下载版本文件

从项目 GitHub 发布页面下载最新版本压缩包：

- [Yet Another Rclone Dashboard 版本发布](https://github.com/outlook84/yet-another-rclone-dashboard/releases)

参考时最新版本包为：

- `yet-another-rclone-dashboard-v0.3.8.zip`

将压缩包解压到服务器或本地系统的某个文件夹。

:::note 替换占位路径
以下命令中的 `[your_dashboard_path]` 替换为解压后仪表盘构建文件所在的文件夹路径。
:::

#### Linux 示例

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows 示例

```powershell
rclone rcd --rc-files="[your_dashboard_path]" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### 远程服务器示例（带认证）

无头服务器建议使用认证，并且仅在需要时绑定外部可访问地址。

```bash
rclone rcd \
  --rc-files="[your_dashboard_path]" \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

### 方法二：使用 Rclone 内置的网页 GUI 获取器

安装草案还提到 Rclone 自带的网页 GUI 获取器，可以自动下载并托管仪表盘，无需手动解压。

#### Linux 示例

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-no-auth \
  --rc-serve \
  --rc-addr=127.0.0.1:5572 \
  --rc-allow-origin=http://127.0.0.1:5572
```

#### Windows 示例

```powershell
rclone rcd --rc-web-gui --rc-web-fetch-url="https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest" --rc-no-auth --rc-serve --rc-addr=127.0.0.1:5572 --rc-allow-origin=http://127.0.0.1:5572
```

#### 远程服务器示例

```bash
rclone rcd \
  --rc-web-gui \
  --rc-web-fetch-url='https://api.github.com/repos/outlook84/yet-another-rclone-dashboard/releases/latest' \
  --rc-web-gui-no-open-browser \
  --rc-user="[your_rclone_user]" \
  --rc-pass="[your_rclone_password]" \
  --rc-addr=0.0.0.0:5572 \
  --rc-allow-origin=http://[your_server_ip]:5572
```

:::tip 使用获取器简化更新
如果想让仪表盘文件的 `rclone 下载` 流程更简单，使用获取器方法比手动下载版本包更方便。
:::

### 方法三：用网页服务器托管静态文件

由于 Yet Another Rclone Dashboard 是静态网页应用，你也可以用标准网页服务器单独托管前端文件，比如 [Nginx](https://nginx.org/) 或 [Caddy](https://caddyserver.com/)。

此时 Rclone 仍通过 `rclone rcd` 提供后端，网页服务器负责前端文件。

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

:::note 前后端分离注意事项
如果使用独立网页服务器，确保前端仍能访问 Rclone RC 接口，此时 `--rc-allow-origin` 参数尤为重要。
:::

## 重要的 Rclone 参数

配置 Yet Another Rclone Dashboard 时，以下参数最为关键。

| 参数 | 作用 |
| --- | --- |
| `--rc-files` | 从本地目录托管静态仪表盘文件 |
| `--rc-web-gui` | 启用 Rclone 的网页 GUI 机制 |
| `--rc-web-fetch-url` | 定义获取仪表盘版本的源 URL |
| `--rc-serve` | 通过 HTTP 托管 RC 接口 |
| `--rc-addr` | 设置监听的 IP 地址和端口 |
| `--rc-no-auth` | 禁用认证 |
| `--rc-user` | 设置 RC 用户名 |
| `--rc-pass` | 设置 RC 密码 |
| `--rc-allow-origin` | 允许指定来源的浏览器访问 |
| `--rc-web-gui-no-open-browser` | 禁止自动打开浏览器 |
| `--rc-user-from-header` | 从可信反向代理头部接受用户名 |

### 选择正确的 `--rc-allow-origin`

`--rc-allow-origin` 应设置为你浏览器中访问的完整 URL。

| 访问方式 | 示例值 |
| --- | --- |
| 本地访问 | `http://127.0.0.1:5572` |
| 直接 IP 访问 | `http://[your_server_ip]:5572` |
| 反向代理 HTTPS | `https://[your_domain]` |

:::caution 来源不匹配会导致仪表盘连接失败
如果 `--rc-allow-origin` 与浏览器实际访问 URL 不匹配，浏览器安全策略会阻止仪表盘连接 Rclone。
:::

## 高级反向代理设置

如果想把仪表盘放在认证网关后面，安装草案提供了使用反向代理和 `--rc-user-from-header` 的高级示例。

### Rclone 示例

```bash
rclone rcd \
  --rc-serve \
  --rc-files='[your_dashboard_path]' \
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

:::danger 仅信任来自你代理的头部
只有当 Rclone 绑定在可信的本地接口（如 `127.0.0.1`）且只能通过反向代理访问时，才应使用 `--rc-user-from-header`，否则客户端可能伪造头部。
:::

## 首次启动与验证

选定部署方式后，可以验证仪表盘是否正常工作。

### 启动服务

用选定命令启动 `rclone rcd`，保持进程运行。

### 打开仪表盘

在浏览器中打开对应 URL：

- `http://127.0.0.1:5572`
- `http://[your_server_ip]:5572`
- `https://[your_domain]`

### 确认访问成功

配置正确时，你会看到 Yet Another Rclone Dashboard 界面，并能连接到 Rclone 后端。

之后可以用它查看远程端、浏览文件和管理传输，具体取决于你的 Rclone 配置。

## 故障排查

如果仪表盘无法加载或连接失败，请检查以下内容。

### 常见问题

| 问题 | 可能原因 | 建议操作 |
| --- | --- | --- |
| 浏览器打不开页面 | Rclone 未运行 | 重新启动 `rclone rcd` 并检查终端输出 |
| 仪表盘加载但无法连接 | `--rc-allow-origin` 设置错误 | 设置为浏览器实际访问的 URL |
| 远程访问失败 | 端口 `5572` 被阻塞 | 在防火墙开放端口或使用反向代理 |
| 认证失败 | `--rc-user` 或 `--rc-pass` 错误 | 核实认证信息 |
| 反向代理配置失败 | 头部或来源不匹配 | 检查代理头部和 `--rc-allow-origin` 设置 |

### 日志查看

建议优先查看 Rclone 控制台输出。项目资料未提供 Yet Another Rclone Dashboard 专用日志路径，因此最可靠的第一步是检查正在运行的 Rclone 进程输出。

:::tip 远程访问建议使用 HTTPS
如果想通过互联网访问仪表盘，建议放在带 TLS 的反向代理后面，而非直接暴露 HTTP。
:::

## 额外说明

安装草案提到可选的 Docker 和源码构建方案，但获取的项目资料中未包含经过验证的 Docker 部署指令，因此本指南未提供 Docker 命令以避免记录未经验证的操作。

同样，具体的内部构建目录名称可能因版本包结构不同而异，建议先确认解压文件夹内容后再设置 `[your_dashboard_path]`。

## 结论

恭喜你，已成功在 Linux 或 Windows 上配合 Rclone 设置 Yet Another Rclone Dashboard。若有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂