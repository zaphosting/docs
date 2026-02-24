---
id: dedicated-windows-nodejs
title: "在 Windows 服务器上安装 Node.js - 运行现代 JavaScript 应用"
description: "了解如何设置 Node.js 来构建可扩展的实时应用，使用简洁高效的环境 → 立即了解更多"
sidebar_label: 安装 Node.js
services:
  - vserver
  - dedicated
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Node.js 是一个跨平台、开源的 JavaScript 运行时环境，可以在浏览器外执行 JavaScript 代码，比如在服务器或命令行工具中。它基于 V8 引擎，支持异步、事件驱动的 I/O，使其非常适合构建可扩展的网络和实时应用。

“JavaScript 无处不在”的理念让开发者可以用同一门语言同时开发前端和后端。

## 准备工作

在安装 **Node.js** 之前，你需要先准备好系统环境。这包括将操作系统更新到最新版本，并安装所有必需的依赖。这样可以保证环境稳定，避免安装过程中或之后出现问题。

### 更新系统
为了确保系统运行的是最新的软件和安全补丁，建议先执行系统更新。运行以下命令：

```
sudo apt update && sudo apt upgrade -y
```
这会确保系统拥有最新的安全修复和软件版本，方便后续操作。

### 安装依赖
更新完成后，就可以安装依赖了。Node.js 会通过一系列 Docker 容器部署和运行，因此需要先安装 Docker。运行以下命令安装 Docker：

```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```

关于安装 Docker 及使用方法的完整教程，请参考我们的 [Docker](vserver-windows-docker.md) 指南。

## 安装

所有准备工作完成后，就可以开始安装 Node.js 了。

为了在隔离环境中使用 Node.js，首先需要下载官方基于 Alpine 的镜像。运行以下命令拉取最新的 Node.js 22 镜像到你的系统，方便后续容器部署：

```
docker pull node:22-alpine
```

接着，你可以基于该镜像启动一个容器，并进入交互式 shell。使用以下命令启动容器，`--rm` 参数确保退出后自动删除容器，保持宿主环境整洁：

```
docker run -it --rm --entrypoint sh node:22-alpine
```

进入容器后，运行 `node -v` 检查 Node.js 版本，应该显示 `v22.19.0`。你也可以用 `npm -v` 查看 npm 版本，预期输出为 `10.9.3`。这说明镜像内的 Node.js 和 npm 版本正确，可立即使用。

## 配置

启动 Node.js 容器后，建议在环境内配置一些关键设置。常见做法是定义环境变量，例如：

```
export NODE_ENV=production
```

这会启用生产模式，激活性能优化并调整日志行为。开发时可以设置 `NODE_ENV=development`，以获得详细的错误信息和调试功能。

项目结构也很重要，首先通过以下命令创建配置文件：

```
npm init -y
```

这会生成一个 `package.json` 文件，定义项目的依赖、脚本和元数据，是每个 Node.js 应用的核心配置文件。

接着可以用 `npm install <package>` 安装依赖，开发依赖则用 `npm install <package> --save-dev`。`package.json` 中的 `scripts` 部分允许你定义自定义命令，比如 `npm start` 或 `npm run build`，方便执行和管理项目。

更高级的配置可以通过 `.npmrc` 或 `.nvmrc` 文件实现，比如配置私有仓库、缓存选项或强制使用特定 Node.js 版本，确保应用在不同环境中一致运行。

## 总结与更多资源

恭喜你！现在已经成功在你的 VPS/独立服务器上安装并配置了 Node.js。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [Node.js.com](https://Node.js.com/) - 官方网站
- https://Node.js.com/help/ - Node.js 帮助中心（文档）

有具体问题这里没提到？需要更多帮助？随时联系在线客服，我们每天都在线为你服务！🙂