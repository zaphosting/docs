---
id: vserver-windows-javascript
title: 'VPS：JavaScript 安装指南'
description: "了解如何在 Windows 上安装 Node.js、Deno 和 Bun，快速搭建你的 JavaScript 运行环境 → 立即学习"
sidebar_label: 安装 JavaScript
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

本指南将教你如何在 Windows 上安装 Node.js、Deno 和 Bun。以下步骤需通过 RDP 执行，如果你还不知道如何通过 RDP 连接服务器，请查看我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。
<InlineVoucher />

## 安装

首先，你需要决定安装哪个 JavaScript 运行时。网上有很多详细介绍每个运行时的资源，但你也可以看这篇指南，因为它包含了基础使用命令和代码示例。我们推荐使用 Node.js，因为它是最广泛使用且非常受欢迎的选择。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Node.js Runtime" label="Node.js" default>

## 安装 Node.js 运行时

### 第一步：下载文件
打开你喜欢的浏览器（本指南用的是 Chrome），访问 [https://Node.js.org/en](https://Node.js.org/en)

![](https://screensaver01.zap-hosting.com/index.php/s/FXEML6xiCedS7Nq/preview)

点击 `Download Node.js (LTS)` 按钮，等待下载完成。

![](https://screensaver01.zap-hosting.com/index.php/s/EwjMejMYykPCQRQ/preview)

:::tip
建议始终安装最新的长期支持版本（LTS）。
:::

### 第二步：安装 Node.js
双击运行安装程序。安装向导会提示你设置一些选项。在“欢迎”页面点击 `Next`。

![](https://screensaver01.zap-hosting.com/index.php/s/4kZo7AFbMk58c2E/preview)

阅读并勾选同意 Node.js 许可协议，然后点击 `Next`。

![](https://screensaver01.zap-hosting.com/index.php/s/sDNjGj7fCqHRFGp/preview)

接下来选择 Node.js 的安装路径。

:::note
建议使用默认安装路径。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/L2wNRLFfEo3H6wn/preview)

下一页可以选择是否安装部分 Node.js 核心组件。推荐保持默认，直接点击 `Next`。你也可以选择是否安装 Chocolatey，但这不是必须的。

![](https://screensaver01.zap-hosting.com/index.php/s/y6ssQbn2psE5sFt/preview)

### 第三步：完成安装
点击 `Install` 开始安装，耐心等待完成，可能需要一点时间。:)

![](https://screensaver01.zap-hosting.com/index.php/s/Bdr4pfwS2HRoaS2/preview)

安装完成后，点击 `Finish`，即可开始在服务器上使用 Node.js。

### 更新 Node.js 到最新版本

运行 `node -v` 查看当前安装的 Node.js 版本。建议定期检查是否为最新 LTS 版本。更新时请重新按照本指南的[安装部分](vserver-windows-javascript.md)操作。

### 运行 Node.js 和 npm

npm 是 Node.js 的官方包管理器，用于安装网络上的各种包。

:::tip
所有 npm 包都可以在他们的[官网](https://www.npmjs.com/)找到。
:::

### 创建新项目

每次想开始一个新的 Node.js 项目时，先用文件资源管理器新建一个文件夹，打开命令提示符或 PowerShell 进入该目录，运行 `npm init` 命令开始初始化。它会询问一些基础信息，用来生成 `package.json` 配置文件。

:::tip
在 Windows 上，点击资源管理器地址栏，输入 `cmd` 并回车，可以直接在当前目录打开命令提示符，超级方便。
:::

初始化完成后，新建一个 `index.js` 文件，写入代码。下面是一个示例：创建一个监听默认 80 端口的简单 HTTP 服务器，访问 localhost 时返回测试消息。

```js
const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello from ZAP-Hosting Docs =)')
})

server.listen(80)
```

运行 `node .` 命令启动服务器，然后在浏览器访问 `localhost:80` 查看效果。

![](https://screensaver01.zap-hosting.com/index.php/s/kWRi9agrzkWc4rw/preview)

:::tip
安装外部 npm 包用命令 `npm install [包名]`。
:::

</TabItem>

<TabItem value="Deno Runtime" label="Deno" default>

## 安装 Deno 运行时

安装 Deno 非常简单，只需在 PowerShell 中输入 `irm https://deno.land/install.ps1 | iex`。在 Windows 搜索栏输入 `Powershell`，以管理员身份打开，运行上述命令，按提示操作即可。

![](https://screensaver01.zap-hosting.com/index.php/s/jTdDo6c2Kx42o8B/preview)

:::tip
查看当前安装版本，运行 `deno --version`。
:::

### 更新 Deno 到最新版本

更新 Deno 只需运行 `deno upgrade`。

### 运行 Deno

新建一个 `index.ts` 文件，写入代码。示例：创建一个监听默认 80 端口的简单 HTTP 服务器，访问 localhost 时返回测试消息。

```js
Deno.serve({ port: 80 }, (_req: Request) => {
  return new Response('Hello from ZAP-Hosting Docs =)')
})
```

运行 `deno run --allow-net index.ts` 启动服务器，浏览器访问 `localhost:80` 查看效果。

![](https://screensaver01.zap-hosting.com/index.php/s/rswYFXWM9D5grpS/preview)

:::info
Deno 设计更安全，运行时需要指定权限，比如 `--allow-net` 允许网络访问。
:::

</TabItem>

<TabItem value="Bun Runtime" label="Bun" default>

## 安装 Bun 运行时

Bun 也提供了非常简单的一键安装命令，同时如果你之前用过 Node.js，也可以通过 npm 安装。

<Tabs>
<TabItem value="command" label="命令" default>

在 PowerShell 中运行 `irm bun.sh/install.ps1|iex` 即可安装 Bun。

![](https://screensaver01.zap-hosting.com/index.php/s/65oooTQRGQPW8DS/preview)

:::info
如果服务器缺少某些必需文件，Bun 会提示并提供下载链接。

![](https://screensaver01.zap-hosting.com/index.php/s/kZsc5DF3BAiQ2fF/preview)
:::

</TabItem>
<TabItem value="npm" label="npm">

如果你已经安装了 npm，可以运行 `npm install -g bun` 来安装 Bun。

![](https://screensaver01.zap-hosting.com/index.php/s/cejbBAQdHxkrm2A/preview)

</TabItem>
</Tabs>

### 运行 Bun

Bun 设计目标是比其他 JavaScript 引擎更快，同时使用方式类似 Node.js。打开一个空目录，在命令提示符运行 `bun init`。

:::note
根据你选择的语言（JS 或 TS），Bun 会生成对应的配置文件（jsconfig.json 或 tsconfig.json）。
:::

新建一个 `index.ts` 文件，写入代码。示例：创建一个监听默认 80 端口的简单 HTTP 服务器，访问 localhost 时返回测试消息。

```js
const server = Bun.serve({
  port: 80,
  fetch(req) {
    return new Response('Hello from ZAP-Hosting Docs =)')
  },
})
```

运行 `bun index.ts` 启动服务器，浏览器访问 `localhost:80` 查看效果。

![](https://screensaver01.zap-hosting.com/index.php/s/oTco7F65bZbSGP9/preview)

</TabItem>
</Tabs>



## 结语

恭喜你，已经成功在 VPS 上安装并配置了 JavaScript 运行环境！如果有任何问题或疑问，欢迎随时联系我们的支持团队，我们每天都在线帮你解决！

<InlineVoucher />