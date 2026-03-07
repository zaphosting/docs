---
id: 7d2d-crossplay
title: "7 Days to Die：开启主机与PC玩家跨平台联机"
description: "了解如何配置你的7 Days to Die服务器，实现PC与主机玩家跨平台联机 → 立即了解"
sidebar_label: 开启跨平台联机
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在新版的 **7 Days to Die** 中，跨平台联机允许来自 **PC和支持的主机平台** 的玩家加入同一服务器。这样，无论使用什么平台，社区玩家都能一起玩。

要实现跨平台联机，服务器必须配置特定设置。这些设置确保服务器兼容主机连接，并通过Epic Online Services正确注册。

<InlineVoucher />



## 配置

跨平台联机的配置位于 `serverconfig-zap.xml` 文件中。要编辑该文件，打开你的 **游戏服务器管理面板**，进入 **配置**，找到并打开 `serverconfig-zap.xml` 配置文件。

确保文件中以下配置项设置正确：

```
<property name="ServerMaxPlayerCount" value="8"/> 
<property name="ServerAllowCrossplay" value="true"/> 
<property name="EACEnabled" value="true"/> 
<property name="IgnoreEOSSanctions" value="false"/> 
```

这些参数是跨平台联机的必备条件。`ServerMaxPlayerCount` 不得超过 **8名玩家**，因为主机跨平台联机目前最多支持8名玩家。`ServerAllowCrossplay` 必须开启，允许主机玩家加入服务器。

此外，`EACEnabled` 必须保持开启，因为跨平台联机依赖 **Epic Online Services 和 Easy Anti-Cheat** 进行身份验证和匹配。`IgnoreEOSSanctions` 必须保持为 `false`，以确保EOS的限制在跨平台会话中得到正确执行。

修改配置后，保存文件并 **重启服务器**，使新设置生效。



## 重要提示

跨平台联机要求所有玩家使用兼容的游戏版本。使用不支持的MOD或高度自定义配置的服务器可能会导致主机玩家无法连接。如果主机玩家找不到或无法加入服务器，请检查跨平台设置是否正确，且服务器运行的是最新支持版本。



## 总结

恭喜你！你已成功配置好 **7 Days to Die 服务器的跨平台联机**，让PC和主机玩家能在同一个世界中畅玩。只要服务器设置正确，你的社区就能跨平台一起游戏。

如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />