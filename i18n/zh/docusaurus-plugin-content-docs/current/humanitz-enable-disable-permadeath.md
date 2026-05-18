---
id: humanitz-enable-disable-permadeath
title: "HumanitZ：启用/禁用永久死亡"
description: "了解如何在你的 HumanitZ 服务器上启用或禁用永久死亡 → 立即了解更多"
sidebar_label: "启用/禁用永久死亡"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

永久死亡大幅提升了 HumanitZ 生存玩法的难度和紧张感。启用后，玩家死亡时角色会永久消失，必须重新创建新角色。这个设置通常用于硬核或高风险生存服务器。

<InlineVoucher />

## 配置

永久死亡设置在 `GameServerSettings.ini` 文件中控制。你可以在服务器管理面板的 **配置** 里找到这个文件。打开配置文件，找到以下参数：

```
;当设置为 true 时，死亡的玩家将失去他们的角色，必须创建新角色
PermaDeath=false
```

- `PermaDeath=true` – 启用永久死亡。玩家死亡后角色永久消失。  
- `PermaDeath=false` – 禁用永久死亡。玩家可以用现有角色复活。

如果你想启用永久死亡，把值改成：

```
PermaDeath=true
```

编辑完成后，保存文件并重启服务器，设置才会生效。

## 总结

恭喜！通过修改 `GameServerSettings.ini` 中的 `PermaDeath` 参数，你已经成功启用或禁用了 HumanitZ 服务器的永久死亡功能。如有任何疑问或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />