---
id: source-gsltoken
title: 使用游戏服务器登录令牌
description: "了解 GSL 令牌如何通过将封禁绑定到账户来保护 Steam 游戏服务器，确保更安全、更合规的服务器托管 → 立即了解更多"
sidebar_label: GSL-Token
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## ❓ 什么是 GSL 令牌？

游戏服务器登录令牌（GSLTs）是 Steam 推出的一项安全措施。要运行某些 Steam 游戏（主要是 Source 引擎游戏）的游戏服务器，必须生成一个令牌。

<InlineVoucher />

## ❓ GSL 令牌的作用是什么？

过去，Valve 对游戏服务器托管规则做了一些调整，但并非所有服务器运营商都遵守这些规定。结果，游戏服务器的 IP 地址被封禁了。

不过，这种方法效果不佳，因为换个新 IP 就能轻松绕过，而且对游戏服务器提供商来说也很麻烦。原因是封禁 IP 会影响到其他客户。

所以 Valve 推出了这个系统，改为封禁令牌，并阻止关联的 Steam 账号继续运营游戏服务器。

## ➕ 创建令牌

要创建游戏服务器登录令牌，你需要先登录 Steam 网站。令牌可以在这里创建：[Steam 游戏服务器账户管理](https://steamcommunity.com/dev/managegameservers)

![](https://screensaver01.zap-hosting.com/index.php/s/an5ySHwzSZmEwep/preview)

进入页面后，你需要填写 App ID 和备注（随便写个名字作为备注）。App ID 取决于游戏，下面是几个常用的 App ID：

|              游戏               | App ID |
| :------------------------------: | :----: |
| 反恐精英：全球攻势 (CS:GO)       |  730   |
|      反恐精英：起源 (CS:S)        |  240   |
|         战争机器 2 (TF2)          |  440   |
|            加里模组 (Garry's Mod) |  4000  |

GSL 令牌可以在面板的设置里填写。

![](https://screensaver01.zap-hosting.com/index.php/s/jqkbkXG2YQLatw2/preview)

完成这一步并重启服务器后，服务器就会出现在公共服务器列表里。

## ⁉ 常见问题

**GSL 令牌有什么前提条件？**

Steam 账号不能有社区封禁等限制，并且必须绑定一个有效的手机号。

**我可以用一个 GSL 令牌管理多个服务器吗？**

每个游戏服务器都需要单独的令牌。

**有什么情况会导致我的 GSL 令牌被封禁？**

尤其是 CS:GO 服务器，有些插件是不允许使用的。官方没有公布完整名单，但包括修改玩家库存（武器皮肤）、等级等的插件都可能被封禁。

**如果我的 GSL 令牌被封禁，会发生什么？**

令牌被封禁后，关联的账号和所有令牌都会被封禁，服务器将无法公开访问。该账号也不能再用来运营其他游戏服务器。不过，Steam 账号仍然可以用来玩游戏，不会有额外处罚。

<InlineVoucher />