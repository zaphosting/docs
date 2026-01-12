---
id: voiceserver-voicebot-connection
title: "语音服务器：将你的语音机器人连接到语音服务器"
description: "了解如何将你的语音机器人连接到 TeamSpeak 和 Discord 服务器，实现无缝沟通与控制 → 立即了解更多"
sidebar_label: 连接到语音服务器
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## 介绍

想把你的语音机器人连接到 TeamSpeak 服务器，但还不知道怎么操作？别担心，接下来我们会详细教你怎么做！



## 将机器人连接到你的 TeamSpeak

要把你的语音机器人连接到 TeamSpeak 3 服务器，先在控制面板里打开它。然后，点击左侧的 **Server**，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

现在你可以在 **Server** 下选择一个 TeamSpeak（前提是你账号里也有预订这个服务）。如果服务器是外部托管的，也可以选择 **Custom Teamspeak Server**。

接着在下面输入相关数据，保存后语音机器人就会连接到你的 TeamSpeak 3 服务器，示例如下：

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## 将机器人连接到你的 Discord

要把语音机器人连接到 Discord，先点击 **Server**，然后选择 **Discord**。

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

接着输入 **Discord Bot Token** 和 **Discord Bot Client ID**，语音机器人就会连接到你的 Discord 服务器。


## 获取你的 Discord Bot Token 和 Client ID

因为 Discord 服务器没有直接的 IP 地址或端口，所以在使用机器人之前，需要先做一些准备工作。


### 创建 Discord 应用

第一步是创建一个 Discord 应用。你的机器人会被绑定到这个应用，并以它的名义运行。要创建应用，请访问 [Discord 开发者门户](https://discord.com/developers/applications/)。

点击 **New Application** 创建一个新应用，然后给它起个名字，如下图：

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

点击 **Create** 创建应用。接下来请记下应用的 ID：

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### 配置机器人并获取 Token

创建应用时会自动生成一个机器人。点击 **Reset Token** 就能获取 Token，记得保存好这个用户令牌：

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
千万别把机器人 Token 泄露给别人，这样你的机器人才能正常运行，避免安全风险。Token 就像是你的秘密钥匙，绝对不能分享。
:::

在同一页面往下滚动，启用 **Presence Intent**、**Server Members Intent** 和 **Message Content Intent**，然后保存更改：

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### 邀请机器人加入你的 Discord

把之前记下的 Client ID 填入下面链接中的对应位置，然后在浏览器打开这个链接，把机器人添加到你的 Discord 服务器。示例链接如下：
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### 配置机器人的控制面板

最后，把之前记下的 Token 和 Client ID 填入 ZAP-Hosting 控制面板对应的字段，点击底部的 **保存**：

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

然后启动机器人，大约 10 秒内它就会连接到你的 Discord 服务器。


## 总结

语音机器人是个非常实用又有趣的产品，适合用在 TeamSpeak 或 Discord 服务器上。如果你有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />