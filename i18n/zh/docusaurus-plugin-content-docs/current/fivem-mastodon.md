---
id: fivem-mastodon
title: "FiveM：通过 Mastodon 设置活动动态"
description: "了解如何将 Mastodon 活动动态集成到你的服务器，实现实时更新和增强社区互动 → 立即了解更多"
sidebar_label: 配置活动动态
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

活动动态可以让玩家直接在你的 FiveM 服务器内获取最新信息。通过连接 Mastodon 账号，服务器更新、公告和简短消息可以实时显示，无需玩家去查看外部平台。

这种集成为服务器和社区之间建立了清晰的沟通渠道，确保重要信息始终集中展示，方便大家随时查看。

## 准备工作

在配置活动动态之前，你需要一个 Mastodon 账号。这个账号将用来发布更新，之后这些内容会显示在服务器上。

如果还没有账号，可以在你喜欢的 [Mastodon](https://joinmastodon.org/) 实例上注册。注册完成后，确保个人资料可访问且可以发布更新，因为这些帖子会显示在活动动态中。



## 设置步骤

打开你的 Mastodon 个人资料，复制完整的用户名。  
用户名通常格式如下：

```
username@instance.domain
```

举例来说，用户名是 `zaphosting@mstdn.instance`。接着，打开你的 FiveM 服务器的 **Configs** 部分，编辑 `server.cfg` 文件。滚动到文件最底部，添加以下一行：

```
sets activitypubFeed username
```

将 `username` 替换成你自己的 Mastodon 用户名。

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

保存文件并重启服务器。重启后，活动动态可能需要最多 20 分钟才能生效。生效后，打开服务器时会出现一个新的 **Feed** 标签页，显示关联 Mastodon 账号的帖子。



## 总结

配置好活动动态后，服务器更新和公告会直接以清晰易见的方式展示给玩家。这种设置提升了透明度，加强了社区互动，也提供了一种高效的方式分享新闻和信息，无需依赖外部链接或平台。



如果你有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂