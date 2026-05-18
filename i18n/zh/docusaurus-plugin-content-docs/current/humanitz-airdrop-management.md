---
id: humanitz-airdrop-management
title: "HumanitZ：空投管理"
description: "了解如何在你的 HumanitZ 服务器上启用、禁用和配置空投 → 立即了解更多"
sidebar_label: "空投管理"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## 介绍

HumanitZ 中的空投提供了超值战利品，能极大影响玩家移动、冲突区域和整体服务器动态。根据你的服务器玩法风格，你可能想要频繁的补给空投来增加战斗刺激，或者完全关闭空投，打造更稀缺资源的生存体验。

<InlineVoucher />

## 配置

空投设置在 `GameServerSettings.ini` 文件中控制。你可以在服务器管理面板的 **配置** 里找到这个文件。打开配置文件，找到以下参数：

```
; 设置是否启用空投
AirDrop=true
; 每隔多少游戏天数触发一次空投
AirDropInterval=1
```

配置说明：

- `AirDrop=true` – 启用空投  
- `AirDrop=false` – 完全禁用空投  
- `AirDropInterval` – 定义每隔多少游戏天数触发一次空投  

举个例子，如果你想让空投每三天触发一次：

```
AirDrop=true
AirDropInterval=3
```

如果你想完全关闭空投：

```
AirDrop=false
```

编辑完文件后，保存更改并重启服务器，设置才会生效。

## 总结

恭喜你！通过修改 `GameServerSettings.ini` 中的 `AirDrop` 和 `AirDropInterval` 参数，你已经成功配置了 HumanitZ 服务器的空投行为。如有任何疑问或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />