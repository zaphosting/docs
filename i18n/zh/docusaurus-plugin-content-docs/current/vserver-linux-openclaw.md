---
id: vserver-linux-openclaw
title: "VPS：在 Linux 上安装 OpenClaw - 打造你的专属 AI 助手！"
description: "了解如何设置和配置 OpenClaw 自托管，打造一个强大且开源的个人 AI 助手 → 立即了解更多"
sidebar_label: 安装 OpenClaw
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

[OpenClaw](https://openclaw.ai/) 是一个基于 AI 的自动化和控制平台，允许你通过浏览器界面与软件交互。它能替代手动点击菜单、浏览用户界面或重复执行相同流程的繁琐操作，OpenClaw 可以通过编程方式执行任务，并通过其网页仪表盘提供远程控制功能。

![img](https://screensaver01.zap-hosting.com/index.php/s/XQkk46EnKzxxWrK/preview)

OpenClaw 的革命性之处在于它为应用和系统提供了现代化的“控制层”。它不再局限于本地桌面会话，而是可以运行在远程机器（如 VPS）上，并且可以从任何地方完全管理。这使得它成为想要可靠自动化、远程控制和集中管理的用户的强大工具，无需本地持续运行电脑。

想自己托管这个服务？我们会一步步带你完成安装和配置，并告诉你所有需要注意的事项。

<InlineVoucher />


## OpenClaw 的使用场景

OpenClaw 适用于各种日常场景，适合任何想要自动化任务、集中管理 AI 使用，或运行一个始终在线的持久助手的用户。

一个常见的用例是整合多个平台的 AI 交互。与其为不同的聊天应用使用多个工具，OpenClaw 可以作为一个统一助手，保持一致的上下文和配置，无论从哪里访问都一样。

OpenClaw 也非常适合自动化。它能帮你减少重复的手动工作，处理周期性任务、整理信息、总结内容并提供结构化回复。

另一个重要用例是网页自动化。通过控制专用的 Chrome 或 Chromium 浏览器实例，OpenClaw 即使在没有直接 API 集成的情况下，也能与网页界面交互。

为支持这些场景，OpenClaw 提供了丰富的功能，包括多渠道消息支持（如 WhatsApp、Telegram、Slack 和 Discord）、基于网关的会话和频道管理架构、可选语音功能、交互式画布界面、可扩展技能平台、支持多家 AI 提供商（包括 OpenAI 和 Anthropic）、移动设备节点、API 密钥认证，以及持久化工作区和配置管理。

![img](https://screensaver01.zap-hosting.com/index.php/s/7A5eiaMSE8FFQRs/download)


## 前置条件

根据你计划如何使用 **OpenClaw**，资源消耗可能会迅速增加。基础配置（例如仅使用 Web UI 和最小自动化）在较小的 VPS 方案上运行良好，但更高级的用例，如运行多个频道、启用大量技能或使用浏览器自动化，资源需求会显著提升。

为了保证稳定性能，我们建议选择 CPU 和内存充足的 VPS 方案，尤其是当 OpenClaw 需要持续后台运行时。

| 硬件       | 最低要求    | ZAP-Hosting 推荐配置       |
| ---------- | ---------- | -------------------------- |
| CPU        | 1 vCPU 核心 | 8 vCPU 核心               |
| 内存       | 4 GB       | 16 GB                      |
| 硬盘空间   | 25 GB      | 50 GB                      |




## 安装
安装从在你的 Linux VPS 上运行官方 OpenClaw 安装脚本开始。通过 SSH 连接服务器，执行以下命令：

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

执行命令后，会自动启动交互式安装脚本，引导你完成设置。安装程序会检查环境，安装缺失的依赖，然后启动 OpenClaw 的引导流程。

![img](https://screensaver01.zap-hosting.com/index.php/s/DJcT4NrJ7ts8Gqn/download)



### 平台检测与依赖检查

安装程序会自动检测你的操作系统，并在需要时安装所需依赖。
例如，如果缺少 Node.js，会自动安装，无需手动操作。



### 安装所需软件包

OpenClaw 会通过系统包管理器安装所需软件包，无需手动操作。所有必需软件包安装完成后，安装程序会自动继续。

### 安装 OpenClaw

依赖准备好后，安装程序会下载并安装 OpenClaw 版本。完成后，你会看到类似的确认信息：

![img](https://screensaver01.zap-hosting.com/index.php/s/NwTqC997KQ23Htr/preview)



### OpenClaw 引导流程

OpenClaw 安装完成后，引导向导会自动启动。完成初始配置并使 OpenClaw 可用必须经过此流程。



首先，阅读显示的安全提示并确认继续。接着选择引导模式。大多数用户推荐选择 **快速启动（QuickStart）**。

![img](https://screensaver01.zap-hosting.com/index.php/s/ZQXSmmwQ29yk374/preview)

然后，选择模型/认证提供商。此示例中选择了 **OpenAI**。输入你的 OpenAI API 密钥。OpenClaw 会将密钥本地保存以便后续使用。保存后，选择 OpenClaw 默认使用的模型。

![img](https://screensaver01.zap-hosting.com/index.php/s/HQ5MNqCxdd5EY8Q/preview)

最后几步，你可以选择配置频道（如 Telegram、Discord 或 Slack）、技能和钩子。如果暂时不想配置，可以跳过，之后再设置。

![img](https://screensaver01.zap-hosting.com/index.php/s/xFnb3GNSiSZBPnD/preview)

如果想通过 Telegram 使用 OpenClaw，首先需要创建一个 Telegram 机器人并获取它的 API 令牌。这需要在 Telegram 里通过官方 **BotFather** 账号完成。

打开与 **BotFather** 的聊天，发送 `/newbot` 开始创建流程，按照提示操作。  
BotFather 会先询问显示名称，再询问用户名。用户名必须以 `bot` 结尾。

对话通常如下：

```
用户: /newbot 

BotFather: 好的，新机器人。我们给它取个名字吧。  

用户: ZAP DOCS EXAMPLE

BotFather: 好的。现在给你的机器人选个用户名。必须以 `bot` 结尾。比如：TetrisBot 或 tetris_bot。 

用户: ZAP_DOCS_EXAMPLE_BOT 

BotFather: 完成！恭喜你有了新机器人。访问地址是 t.me/ZAP_DOCS_EXAMPLE_BOT。你可以为机器人添加描述、关于信息和头像，查看 /help 获取命令列表。顺便说一句，创建好酷炫机器人后，如果想要更好的用户名，可以联系 Bot 支持。确保机器人完全可用后再联系。

使用此令牌访问 HTTP API：
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
请妥善保管令牌，任何人拿到它都能控制你的机器人。

Bot API 说明见：https://core.telegram.org/bots/api
```

BotFather 确认机器人创建后，复制显示的 **令牌** 并妥善保存。后续在 OpenClaw 引导或配置中连接 Telegram 频道时需要用到。此令牌非常敏感，切勿公开。

![img](https://screensaver01.zap-hosting.com/index.php/s/JHTxW7Pi4SRsoe7/preview)

创建 Telegram 机器人并保存令牌后，继续 OpenClaw 引导。接下来可以安装 **技能** 和启用 **钩子**。推荐配置，但也可以跳过，之后在配置界面设置。

引导完成后，OpenClaw 会自动安装 **网关服务**。最后选择 **Web UI** 选项，OpenClaw 会打印仪表盘链接，方便你通过浏览器访问控制界面，继续管理设置。

引导结束时，OpenClaw 还会提示安装 **shell 自动补全脚本**。这是可选但推荐的，能提升命令行体验，支持 OpenClaw 命令自动补全。按提示操作即可。

![img](https://screensaver01.zap-hosting.com/index.php/s/xWNpjYj2XeKgK4J/preview)





## 配置

我们的 VPS 默认不带图形界面。因此 OpenClaw 以无头模式运行，控制界面仅在服务器本地的 `18789` 端口开放。

安装和引导完成后，OpenClaw 会在控制台输出仪表盘信息：

```
仪表盘链接（含令牌）：
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

复制粘贴此 URL 到本机浏览器以控制 OpenClaw。
未检测到 GUI。请从你的电脑打开：
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111

然后打开：
http://localhost:18789/
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

由于网页界面绑定在 `127.0.0.1`，无法直接从互联网访问。要安全访问，请在你的电脑上创建 SSH 隧道，将 VPS 上的 OpenClaw 端口转发到本地。

在你的电脑打开终端，执行：

```bash
ssh -N -L 18789:127.0.0.1:18789 root@92.42.46.111
```

只要此 SSH 会话保持打开，你就可以在浏览器访问 OpenClaw 控制界面：

```
http://localhost:18789/
```

如果 OpenClaw 需要认证，请使用输出中带令牌的链接：

```
http://127.0.0.1:18789/?token=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```



:::tip 使用图形界面（桌面环境）

如果你喜欢用图形界面操作 OpenClaw，可以在 VPS 上安装桌面环境，比如 **XFCE**。安装 GUI 和远程桌面方案（如 RDP 或 VNC）后，你可以直接通过 VPS 桌面访问和控制 OpenClaw，无需 SSH 端口转发。

:::



![img](https://screensaver01.zap-hosting.com/index.php/s/FscTYx36eWeHHca/download)



### 安装技能

技能为 OpenClaw 增加额外功能和集成。
OpenClaw 自带 50 多个技能。你可以在仪表盘的 **技能** 区域直接安装并启用想要的技能。

![img](https://screensaver01.zap-hosting.com/index.php/s/gXxs6j9WHtxPYAQ/preview)



### 启用钩子

钩子允许 OpenClaw 在特定事件发生或特定命令使用时自动执行动作。
这对自动化重复任务、保存上下文或触发工作流非常有用，无需手动干预。

![img](https://screensaver01.zap-hosting.com/index.php/s/KYSWM4cFcDp45F6/preview)



### 配置频道

频道让你通过消息平台使用 OpenClaw。
在仪表盘中可以配置并连接支持的频道，如 Telegram、Discord、Slack 等。

![img](https://screensaver01.zap-hosting.com/index.php/s/Le38gZXf2BDintr/preview)

根据所选平台，你需要提供额外的令牌或凭证（比如安装流程中通过 BotFather 创建的 Telegram 机器人令牌）。

频道连接成功后，OpenClaw 可以通过该平台接收和回复消息。通过 Telegram 与 AI 助手对话示例如下：

![img](https://screensaver01.zap-hosting.com/index.php/s/oFRZCEPFyyMmsG4/preview)



## 安全注意事项

OpenClaw 是个强大工具，使用时务必做好安全防护。网关仪表盘受令牌保护，令牌相当于密码，能访问你的 OpenClaw 实例。切勿公开分享此令牌（例如截图、工单或聊天记录），任何拿到令牌的人都能控制仪表盘。

建议将 OpenClaw 放在防火墙后，避免直接暴露网关接口到公网。默认情况下，OpenClaw 绑定网关服务到 `127.0.0.1`，阻止外部访问，是最安全的配置。远程访问仪表盘时，请使用 SSH 端口转发，并限制访问权限给可信用户。



## 总结与更多资源

恭喜你！现在已经成功在 VPS 上安装并配置了 OpenClaw。我们还推荐你查看以下资源，能为你的服务器配置提供更多帮助和指导：

- [openclaw.ai](https://https://openclaw.ai/) - 官方网站
- [docs.openclaw.ai](https://docs.openclaw.ai/start/getting-started) - OpenClaw 文档
- [clawhub.com](https://clawhub.com/) - ClawHub - 社区技能库

有具体问题这里没覆盖？欢迎随时联系我们的支持团队，我们每天在线，随时为你服务！🙂

<InlineVoucher />