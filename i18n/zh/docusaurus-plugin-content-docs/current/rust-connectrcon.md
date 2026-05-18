---
id: rust-connectrcon
title: "Rust：通过 RCON 连接服务器"
description: "了解如何使用 RCON 远程管理你的服务器，实现高效的命令执行和控制 → 立即了解更多"
sidebar_label: 通过 RCON 连接
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 什么是 RCON？

RCON 是一种协议，可以让你在没有直接访问控制台的情况下执行服务器命令。

<InlineVoucher />

### 启用 WebRCON

首先，在连接之前，你必须确保已启用 Web RCON。
要启用它，请进入 **设置** 标签页。

![](https://screensaver01.zap-hosting.com/index.php/s/RqpZcnBcEHY3gN2/preview)

然后直接在此页面启用它。
![](https://screensaver01.zap-hosting.com/index.php/s/wJ5psnbAneZ6rMD/preview)

:::info
启用后需要重启服务器才能生效。 
:::

### 安装 RCON 客户端

你需要通过一个 RCON 客户端程序来连接服务器。市面上有很多不同的客户端可供选择。
这里推荐你使用 [RustAdmin](https://www.rustadmin.com/)。

你可以直接在他们官网用按钮下载安装。
![](https://screensaver01.zap-hosting.com/index.php/s/zNtESocaQPFwzCg/preview)

## 通过 RCON 连接

打开 WebAdmin 后，点击顶部的 **Server**，然后点击 **Connect**。

:::info
你的服务器必须处于完全 **在线** 状态，RCON 才能连接成功。 
:::

![](https://screensaver01.zap-hosting.com/index.php/s/bHLwGDCqH52Bye8/preview)

接着你会被跳转到配置页面。
在这里填写你的服务器相关信息。

![](https://screensaver01.zap-hosting.com/index.php/s/qmQFd7S79EpYWTE/preview)

:::info
小贴士：你的 RCON 端口和 RCON 密码可以在你启用 WebRCON 的 **设置** 标签页找到。 
:::

填写完信息后，保存配置。

![](https://screensaver01.zap-hosting.com/index.php/s/FDMqdsfAHrbiTpt/preview)

然后点击 Server -> Connect。

![](https://screensaver01.zap-hosting.com/index.php/s/4DLGZiQ5X6WJrzA/preview)

如果连接成功，底部会显示绿色的 **Connected** 字样。

![](https://screensaver01.zap-hosting.com/index.php/s/qzq68ENHzXGK69T/preview)

现在你就可以用 RCON 来管理你的服务器啦！:)

<InlineVoucher />