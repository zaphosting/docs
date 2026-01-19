---
id: hytale-obtain-uuid
title: "Hytale：获取 UUID"
description: "了解如何查找或获取玩家的 UUID，用于服务器配置和权限管理 → 立即了解更多"
sidebar_label: 获取 UUID
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

每个 Hytale 服务器上的玩家都会被内部识别为一个 UUID，也就是通用唯一标识符。这个标识符是永久的，即使玩家后来更改了用户名也不会改变。

UUID 在各种管理任务中必不可少，比如权限管理、分配组别，或者在服务器命令和配置文件中引用玩家。

:::info 早期访问提示

Hytale 于 2026 年 1 月 13 日发布，目前处于早期访问阶段。由于游戏仍在积极开发中，服务器软件、配置文件、模组支持和安装流程可能会持续变化。

:::

<InlineVoucher />


## 获取 UUID

玩家的 UUID 可以直接通过游戏内服务器自带的聊天命令获取。当玩家已经在线且需要立即获得 UUID 时，这种方法特别实用。

确保你拥有足够权限登录游戏，打开游戏内聊天，执行以下查询指定玩家 UUID 的命令：

```
/whoami <playername>
```

执行命令后，服务器会直接在聊天中回复该玩家对应的 UUID。返回的 UUID 是该玩家的唯一标识，可以复制用于权限管理、组别分配、白名单条目或其他服务器端操作。



![img](https://screensaver01.zap-hosting.com/index.php/s/E7QrJGn3q79Kzm6/preview)



## 总结

获取玩家的 UUID 是在 Hytale 服务器上进行高级管理操作的关键步骤。如有更多疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂


<InlineVoucher />