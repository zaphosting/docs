---
id: valheim-backup-schedule
title: "Valheim：为服务器启用自动备份"
description: "了解如何通过定时重启实现 Valheim 备份自动化，保障数据安全与服务器管理 → 立即了解"
sidebar_label: 自动备份
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

遗憾的是，Valheim 并没有提供直接的自动备份功能，所以我们需要用点小技巧。

在你的控制面板中，找到“重启计划”。

![](https://screensaver01.zap-hosting.com/index.php/s/FspW5eG7XJNqE4k/preview)

点击“+”号，会弹出一个新窗口，在这里我们可以设置想要的重启时间。

![](https://screensaver01.zap-hosting.com/index.php/s/me5tSbwc8YWT7me/preview)

首先选择“每日”，这意味着每天都会在你设定的时间创建一次备份。
接着设定你想要的重启时间。

:::info
启动离线服务器 - 意味着如果服务器处于离线状态，当到达重启时间时，服务器会自动启动。
:::

然后点击“保存”。

:::info
你可以设置每 6 小时重启一次，这样每 6 小时就会自动创建一次备份。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/rFPWnSH7EkHxoN9/preview)

<InlineVoucher />