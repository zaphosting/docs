---
id: dedicated-linux-javascript
title: "在 Linux 服务器上设置 JavaScript 运行环境 - 启用现代 Web 应用执行"
description: "了解如何在服务器上安装和配置 Node.js、Deno 和 Bun，实现高效的 JavaScript 运行管理 → 立即了解更多"
sidebar_label: 安装 JavaScript
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南提供了安装 Node.js、Deno 和 Bun 的步骤。这些命令必须通过 SSH 执行，如果你不知道如何通过 SSH 连接服务器，请查看我们的[初始访问（SSH）](vserver-linux-ssh.md)。

## 准备工作

在服务器上安装任何东西之前，建议先运行与你的操作系统对应的更新命令，以保持服务器安全。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="ubuntu-debian" label="Ubuntu & Debian" default>

```
  sudo apt update
```

</TabItem>
<TabItem value="centos" label="CentOS">

```
  sudo yum update
```

</TabItem>
<TabItem value="opensuse" label="OpenSUSE">

```
  sudo zypper update
```

</TabItem>
<TabItem value="fedora" label="Fedora">

```
  sudo dnf update
```

</TabItem>
</Tabs>

## 安装

首先，你需要决定安装哪个 JavaScript 运行时。网上有大量资源详细介绍每个运行时，但你也可以阅读本指南，因为它包含了基本使用命令和代码示例。我们推荐使用 NodeJS，因为它是最广泛使用且非常受欢迎的选择之一。

<Tabs>
<TabItem value="NodeJS Runtime" label="NodeJS" default>

## 安装 Node.js 运行时

你可以通过 Linux 发行版的包管理器或使用 nvm 来安装 Node.js。我们推荐使用 apt，因为通常更简单。

<Tabs>
<TabItem value="apt" label="包管理器" default>

运行以下命令，通过包管理器开始安装 Node.js。

```
apt install nodejs -y
```

为了安装项目所需的 Node.js 包，你还需要安装 npm 包管理器。

```
apt install npm
```

### 更新 Node.js 到最新版本

运行 `node -v` 会显示已安装的 Node.js 版本。通常这不是最新版本，因此你需要更新以获得最新功能。幸运的是，npm 包 `n` 提供了非常简单的更新方式。

首先，运行 `npm install -g n` 安装它，然后运行 `n [version]`，将 `[version]` 替换为你想安装的版本号，即可安装任意版本的 Node.js。

:::tip
通常建议保持安装在最新的长期支持版本（LTS）。你可以通过运行 `n lts` 来实现。
:::

</TabItem>
<TabItem value="nvm" label="nvm">

通过 nvm 安装 Node.js 可以更细粒度地管理不同版本的 Node.js 及其各自的包。

首先，确保系统已安装 curl，然后运行以下命令。

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```

该命令会从 GitHub 获取并执行 nvm 安装脚本。

:::note
如果安装后运行 nvm 命令无效，请执行 `source ~/.bashrc` 重新加载 bash 配置文件。
:::

和之前的方法类似，你可以运行命令（`nvm install v[version]`）安装任意 Node.js 版本。若想查看所有可下载版本，运行 `nvm list-remote`；查看已安装版本，运行 `nvm list`。

:::tip
安装长期支持版本可以使用 `nvm install --lts`
:::

</TabItem>
</Tabs>

### 运行 Node.js & npm

Npm 是 Node.js 的官方包管理器，用于安装网络上的各种包。

:::note
你可以在他们的[官网](https://www.npmjs.com/)找到所有 npm 包。
:::

### 创建新项目

每次想开始一个新的 Node.js 项目时，需要新建一个目录（`mkdir [项目名]`）或进入一个空文件夹，然后运行 `npm init` 命令开始配置。它会询问一些基本信息，用于创建 `package.json` 文件，这个文件是 Node.js 的“配置”文件。

初始化项目后，可以新建一个名为 `index.js` 的文件并写入代码。举个例子，我们创建一个监听默认端口 80 的简单 HTTP 服务器，当通过 localhost 访问时返回测试消息，代码如下。

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

现在你可以用 `node .` 命令运行这段代码，并通过浏览器访问 `localhost:80` 查看效果。

:::tip
安装 npm 外部包使用命令 `npm install [包名]`
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## 安装 Deno 运行时

安装 Deno 非常简单，只需在终端输入 `curl -fsSL https://deno.land/install.sh | sh`。

:::tip
查看当前安装版本，可以运行 `deno --version`。
:::

### 更新 Deno 到最新版本

更新 Deno 只需运行 `deno upgrade`。

### 运行 Deno

开始运行 Deno 需要新建一个 `index.ts` 文件并写入代码。举例，我们创建一个监听默认端口 80 的简单 HTTP 服务器，当通过 localhost 访问时返回测试消息，代码如下。

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

然后用命令 `deno run --allow-net index.ts` 运行代码，通过浏览器访问 `localhost:80` 查看结果。

:::info
Deno 设计更安全，因此需要像 `--allow-net` 这样的权限参数来访问某些模块。
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## 安装 Bun 运行时

Bun 提供两种官方安装方式：curl 或 npm。

<Tabs>
<TabItem value="curl" label="curl" default>

运行 `curl -fsSL https://bun.sh/install | bash` 即可在服务器上安装 Bun。

:::tip
安装其他版本的 Bun，可以运行 `curl -fsSL https://bun.sh/install | bash -s "bun-v[版本号]"`
:::

</TabItem>
<TabItem value="npm" label="npm">

如果你已经安装了 npm，可以运行 `npm install -g bun`。

</TabItem>
</Tabs>

### 运行 Bun

Bun 设计目标是比其他 JavaScript 引擎更快，同时拥有类似 Node.js 的使用体验。运行 Bun，打开一个空目录，执行 `bun init`。

:::note
根据选择的语言（JS 或 TS），Bun 会创建相应的配置文件（jsconfig.json 或 tsconfig.json）。
:::

开始运行 Bun，需要新建一个 `index.ts` 文件并写入代码。举例，我们创建一个监听默认端口 80 的简单 HTTP 服务器，当通过 localhost 访问时返回测试消息，代码如下。

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

然后用命令 `bun index.ts` 运行代码，通过浏览器访问 `localhost:80` 查看效果。

</TabItem>
</Tabs>

按照本指南操作，你就能在 Linux 服务器上成功安装并运行主流的 JavaScript 运行时环境。