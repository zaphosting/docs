---
id: redm-txadmin-discord-bot
title: "RedM：txAdmin Discord 机器人"
description: "为你的 txAdmin RedM 服务器设置并集成 Discord 机器人，提升管理和沟通效率 → 立即了解更多"
sidebar_label: txAdmin Discord 机器人
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍
txAdmin 面板为你的 RedM 服务器带来了许多功能，其中就包括 Discord 机器人集成。
本指南将教你如何设置 Discord 机器人以及如何使用它。

<InlineVoucher />

## 准备工作

要为你的 txAdmin 服务器设置 Discord 机器人，首先需要登录你的 txAdmin 面板。
登录信息会显示在服务器概览页面，如下图所示：

![img](https://screensaver01.zap-hosting.com/index.php/s/6gJa3qsymE2kzCi/download)

:::info

本指南假设你已经完成了 txAdmin 的基础设置。如果还没设置，可以查看我们的[RedM：txAdmin 设置](redm-txadmin-setup.md)指南。

:::

## 设置步骤

### 创建 Discord 应用

要将机器人与 txAdmin 绑定，首先需要创建一个 Discord 应用。你的机器人会被分配到该应用下，并以应用名义运行。请访问[Discord 开发者门户](https://discord.com/developers/applications/)来创建应用。

点击 **New Application** 创建新应用，然后给它取个名字，如下图：

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

接着点击 **Create** 创建应用。接下来的步骤中，请记下应用 ID：

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### 配置机器人并获取 Token

创建应用时，系统会自动生成一个机器人。点击 **Reset Token** 即可获取机器人的 Token，请务必保存好：

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
千万别把机器人 Token 泄露给任何人！它就像你的密钥，泄露后可能导致安全问题，影响机器人正常运行。
:::

在同一页面往下滚动，启用“Server Members Intent”，然后保存更改：

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### 邀请机器人加入你的 Discord 服务器

将之前记录的客户端 ID 填入下面链接中的对应位置，然后在浏览器打开该链接，添加机器人到你的 Discord 服务器。示例链接如下：
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### 获取服务器和频道 ID

为了让机器人正常工作，你需要获取机器人所在服务器的 ID。
在 Discord 中，右键点击服务器图标，选择 **复制服务器 ID**，并保存该 ID。

示例截图如下：
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

你也可以选择设置一个频道，用于发布状态更新（比如重启计划）。同样右键点击频道，选择 **复制频道 ID**。别忘了确保机器人有权限在该频道读写消息。

:::info
如果你看不到复制服务器或频道 ID 的选项，需要先在 Discord 用户设置中开启开发者模式：
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### 在 txAdmin 中自定义设置

现在你可以在 txAdmin 中启用 Discord 机器人，并填写之前保存的所有 ID 和 Token：

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### 可选：发送状态消息

你可以选择发送一条状态消息，机器人会持续更新当前服务器状态、在线玩家等信息。
在你想要显示状态的 Discord 频道输入 `/status add`，确保机器人有权限发送消息。

机器人会生成类似这样的消息：

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

消息内容可以在 txAdmin 的 Discord 设置页面中自定义。

## 总结

为 txAdmin 设置 Discord 机器人，可以轻松在你的 Discord 服务器中展示 RedM 服务器状态及其他信息。如果有任何问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />