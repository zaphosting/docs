---
id: fivem-mastodon
title: "FiveM：为你的服务器设置活动动态"
description: "了解如何将 Mastodon 活动动态集成到你的服务器，实现实时更新和增强社区互动 → 立即了解更多"
sidebar_label: 配置活动动态
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 准备工作

要在我们的服务器上设置活动动态，首先需要在 Mastodon 上注册一个账号。

## 设置步骤

现在打开你的 Mastodon 个人资料，复制你的用户名，我们这里的示例是 `zaphosting@mstdn.instance`

接着打开 FiveM 服务器的“Configs”，编辑 server.cfg 文件。

在文件最底部插入以下一行：

```
sets activitypubFeed username
```

其中的 "username" 替换成你的 Mastodon 用户名。

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

保存文件并重启服务器，约 20 分钟后，打开服务器就能看到新增的“Feed”标签页了。


<InlineVoucher />