---
id: redm-steam-web-api-key
title: "RedM：Steam Web API Key 设置指南"
description: "了解如何获取并激活 RedM 的 Steam Web API Key，实现身份验证并优化你的服务器配置 → 立即了解"
sidebar_label: Steam Web API Key
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Steam Web API Key 对 RedM 非常重要。它用于通过 API Key 进行身份验证，尤其是在不同脚本和/或资源中使用 Steam 作为身份标识时。

<InlineVoucher />

## 准备工作

你需要一个非受限的 Steam 账号才能申请 API Key。受限的 Steam 账号对 Steam 功能的访问有限，没有完全权限就无法申请 API Key。你必须在 Steam 商店消费至少 **5.00 美元**，才能解锁账号及其功能。

## 申请 API Key

准备好 Steam 账号后，你就可以申请自己的 Steam Web API Key。访问 [Steam 官网](https://steamcommunity.com/dev/apikey)，用你的 Steam 账号名和密码登录。

![](https://screensaver01.zap-hosting.com/index.php/s/Wm8rdwwFPbt7D5W/preview)

登录后，你需要填写一个域名，确认 Steam Web API 的使用条款，然后点击 **Register** 按钮。域名应填写你的 **服务器 IP**（*不带端口*），直接输入即可。

![](https://screensaver01.zap-hosting.com/index.php/s/GNmZXzTn9JJ8cBo/preview)

如果操作成功，你就能看到属于你的 Steam Web API Key，如下图所示。

![](https://screensaver01.zap-hosting.com/index.php/s/m8WoXg3WcjeaQrW/preview)

## 激活 API Key

拿到 Steam Web API Key 后，你需要把它放进你的 RedM 游戏服务器配置文件（`server.cfg`）里。通过 **txAdmin 界面** 的 **CFG Editor** 访问你的 `server.cfg`。找到已有的相关行，或者新建一行，添加以下内容，记得把 `YOUR_KEY_HERE` 替换成你生成的 Key：

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/Rw48iY5FGCfP5s9/preview)

## 总结

最后，重启你的服务器。服务器启动完成后，Steam Web API Key 就会被加载。你已经成功将 Steam Web API Key 添加到你的 RedM 游戏服务器中。如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />