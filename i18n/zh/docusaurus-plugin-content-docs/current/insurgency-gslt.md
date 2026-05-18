---
id: insurgency-gslt
title: "Insurgency：创建 GSLT（Steam 游戏服务器登录令牌）"
description: "了解如何通过 Steam 游戏服务器登录令牌保护和认证你的专用游戏服务器，实现更好的可见性和安全 → 立即了解更多"
sidebar_label: 创建 GSLT
services:
  - gameserver-insurgency
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

**GSLT（游戏服务器登录令牌）** 是 Steam/Valve 要求运行某些游戏专用服务器时必须使用的登录令牌。它绑定到一个 Steam 账号，确保服务器经过正确认证。

没有有效的 GSLT，相关服务器可能不会出现在公共服务器列表中，或者无法使用 VAC 防作弊保护。

<InlineVoucher />



## 要求

要使用游戏服务器登录令牌（GSLT），你的 Steam 账号必须没有限制、封禁或社区排除。账号需绑定已验证的手机，并且你必须拥有想要托管的游戏。每个账号最多可创建 1000 个令牌。

请注意，你对自己的令牌负全部责任。如果令牌被滥用或封禁，你可能会永久失去该令牌绑定游戏的访问权限。切勿分享你的令牌，如果不慎泄露，请立即删除。当你重置 Steam 密码时，所有令牌会自动重新生成。长时间未使用的令牌会过期，但你随时可以重新创建。



## 创建 GSLT
要创建游戏服务器登录令牌，请使用你的 Steam 账号登录并访问 [Steam 游戏服务器账号管理](https://steamcommunity.com/dev/managegameservers) 页面。


![img](https://screensaver01.zap-hosting.com/index.php/s/WaMsyscboqCtNHA/preview)

登录后，你可以通过页面上的表单创建新令牌。在 **App ID** 字段中输入 App ID `17700`，这是 **Insurgency** 的专属 ID。务必输入正确的 ID，否则令牌无法生效。

在 **Memo** 字段中，你可以添加自定义描述，方便以后识别令牌用途，比如服务器名称或角色。填写完毕后，点击 **Create** 生成令牌。生成的令牌会显示出来，可用于服务器启动配置中。

![img](https://screensaver01.zap-hosting.com/index.php/s/mc5ZdTGiPWbSRdB/preview)

## 服务器配置

现在需要将登录令牌添加到你的服务器配置中。打开游戏服务器管理界面，进入 **设置** 页面。在标有 **GSL Token** 的字段中输入令牌，然后保存。

![img](https://screensaver01.zap-hosting.com/index.php/s/tzJiT4nTZo2nWMz/preview)

:::info 多台 Insurgency 服务器运营
如果你运营多台 **Insurgency** 服务器，每台服务器都需要单独的 GSLT。<u>**不支持**</u>用一个 GSLT 运营多台游戏服务器。
:::



## 总结

GSLT 已成功创建并应用到你的服务器配置中。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />