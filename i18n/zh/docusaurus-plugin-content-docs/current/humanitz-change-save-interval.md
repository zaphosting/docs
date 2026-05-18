---
id: humanitz-change-save-interval
title: "HumanitZ：更改自动保存间隔"
description: "了解如何调整你的 HumanitZ 服务器自动世界保存间隔 → 立即了解更多"
sidebar_label: "更改保存间隔"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

保存间隔决定了你的 HumanitZ 服务器多久自动保存一次世界状态。定期保存可以防止崩溃或意外关机时的数据丢失，而延长保存间隔则能稍微减少磁盘活动。

<InlineVoucher />

## 配置

世界保存间隔由 `GameServerSettings.ini` 文件控制。你可以在服务器管理面板的 **配置** 里找到这个文件。在配置文件中，找到以下参数：

```
;服务器保存世界的时间间隔（秒）。设置为 0 则禁用自动保存。
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – 服务器每 300 秒（5 分钟）保存一次世界。  
- `SaveIntervalSec=0` – 关闭自动世界保存。  

数值单位是 **秒**。举例：

- `600` = 10 分钟
- `900` = 15 分钟

如果你想把保存间隔改成 10 分钟：

```
SaveIntervalSec=600
```

编辑完文件后，保存更改并重启服务器，新设置才会生效。

## 总结

恭喜你！通过修改 `GameServerSettings.ini` 里的 `SaveIntervalSec`，你已经成功调整了 HumanitZ 服务器的自动世界保存间隔。

如果有任何问题或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />