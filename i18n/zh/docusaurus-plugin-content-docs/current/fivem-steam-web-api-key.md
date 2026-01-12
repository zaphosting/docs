---
id: fivem-steam-web-api-key
title: "FiveM：Steam Web API Key 设置指南"
description: "了解如何获取并激活 FiveM 的 Steam Web API Key，实现身份验证并提升服务器功能 → 立即了解更多"
sidebar_label: Steam Web API Key
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Steam Web API Key 对 FiveM 非常重要。它用于通过 API Key 进行身份验证，尤其是在不同脚本和资源使用 Steam 作为身份标识时。

<InlineVoucher />

## 准备工作

你需要一个非受限的 Steam 账号来申请 API Key。受限的 Steam 账号对 Steam 功能的访问有限，没有完全权限就无法申请 API Key。你必须在 Steam 商店消费至少 **5.00 美元**，才能解锁账号及其功能。

## 申请 API Key

准备好 Steam 账号后，你就可以申请自己的 Steam Web API Key。只需用你的 Steam 账号名和密码登录 [Steam 官网](https://steamcommunity.com/dev/apikey) 即可。

![](https://screensaver01.zap-hosting.com/index.php/s/jLiPP3NYDfc7S8z/preview)

登录后，输入一个域名，确认 Steam Web API 的使用条款，然后点击 **Register** 按钮。域名请填写你的 **服务器 IP** *(不带端口)*。

![](https://screensaver01.zap-hosting.com/index.php/s/PYec2E6ksaY39p9/preview)

如果一切顺利，你就能看到属于你的 Steam Web API Key，如下图所示。

![](https://screensaver01.zap-hosting.com/index.php/s/smYn5GbQj73etRt/preview)

## 激活 API Key

拿到 Steam Web API Key 后，需要把它放进你的 FiveM 游戏服务器的配置文件（`server.cfg`）里。你可以通过 **txAdmin 界面** 的 **CFG 编辑器** 访问 `server.cfg`。找到已有的相关行，或者新建一行，添加以下内容，记得把 `YOUR_KEY_HERE` 替换成你生成的 Key：

```
set steam_webApiKey "YOUR_KEY_HERE"
```

![img](https://screensaver01.zap-hosting.com/index.php/s/ED4QbkP8aaeF92B/preview)



## 总结

最后，重启你的服务器。服务器启动完成后，Steam Web API Key 就会被加载。你已经成功将 Steam Web API Key 添加到你的 FiveM 游戏服务器中。如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />