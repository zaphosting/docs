---
id: ark-serverlisting
title: "ARK：使用 Steamworks 的 Steam 游戏服务器列表问题"
description: "了解为什么热门游戏因 Steamworks 限制导致服务器列表问题，以及这如何影响你的多人游戏体验 → 立即了解更多"
sidebar_label: 服务器列表问题
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

遗憾的是，像 ARK 或 Valheim 这样的大热游戏在游戏内服务器列表中显示所有服务器时遇到了巨大问题。

这是因为这些游戏使用了“Steamworks”软件来进行服务器列表管理。

Steamworks 最多只能列出 4880 台服务器。如果游戏的活跃服务器数量超过这个数字，玩家只能看到其中一小部分活跃服务器。

玩家 1 是否能看到服务器 Y 是非常随机的。
因此，也会出现玩家 1 能看到服务器 Y，但玩家 2 看不到的情况。玩家 3 又能看到服务器 Y，但看不到玩家 1 能看到的另一个服务器。

为了排除服务器提供商的问题，你可以通过“Steam” - “查看” - “服务器”使用 IP 和端口搜索服务器。如果能找到，说明玩家和服务器之间的连接是正常的。这是因为玩家进行了直接查询。

一个验证问题的好例子是，特别是通过 Steam 启动游戏的 ARK 玩家找不到服务器。如果他们通过 Epic Games 启动 ARK，服务器就能完美显示。这里没有使用 Steamworks。

还有不少游戏开发者也对这个问题发表过看法。比如 Garrysmod 的 Garry Newman 曾以为问题出在他的服务器提供商 OVH，但事实并非如此。这个问题同样存在于 ZAP-Hosting 和其他所有服务器提供商，因为问题直接出在 Steamworks：

![](https://screensaver01.zap-hosting.com/index.php/s/M6DkmBYCjLsPBeW/preview)

来源：https://x.com/garrynewman/status/1334446218437681152?s=20

甚至 Rust 也在他们的博客中写道：

```
当你突然爆红时，事情并非全是美好和阳光。
你会开始看到基础出现裂痕，对我们来说最明显的是服务器浏览器从未设计成能处理如此庞大的服务器数量。
不谈技术细节，这导致很多服务器无法显示给用户，给服务器拥有者带来了极大挫败感。
我们正在努力寻找解决方案，请大家耐心等待。
```

来源：https://rust.facepunch.com/blog/

我们会持续关注这个问题，并在有解决方案时第一时间在这里通知大家。

<InlineVoucher />