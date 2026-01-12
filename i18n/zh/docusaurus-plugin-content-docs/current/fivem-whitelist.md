---
id: fivem-whitelist
title: "FiveM：白名单"
description: "了解如何通过白名单限制服务器访问，提升安全性并控制玩家入场 → 立即了解更多"
sidebar_label: 白名单
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
你不想让你的服务器对所有人开放？有很多方法可以限制服务器的可见性和访问权限。其中一种方式就是使用白名单，下面会详细讲解。

白名单是一份允许特定人员访问的名单。也就是说，只有名单上的玩家才能连接服务器。未在白名单上的玩家将无法进入，并且在尝试连接时会收到未被允许的提示。

![](https://screensaver01.zap-hosting.com/index.php/s/TCYYodZW2XN6FYk/preview)

<InlineVoucher />

## 配置

要管理 FiveM 的白名单功能，你需要打开 txAdmin 界面。然后进入 **Settings（设置）** 菜单，打开 **Whitelist（白名单）** 标签页。

![img](https://screensaver01.zap-hosting.com/index.php/s/WJBH63dWtyWWYQ6/download)

选择你想启用的白名单模式。管理界面提供以下选项：

- 仅管理员（维护模式）
- Discord 服务器成员
- Discord 服务器角色
- 已批准的 License

本例中选择并启用了 **已批准的 License** 选项，之后可以通过玩家的 License 来批准他们。

![img](https://screensaver01.zap-hosting.com/index.php/s/dzTZLTczjWjorkf/download)

玩家的 License 标识符必须由 txAdmin 管理员加入白名单。可以通过 **Whitelist 页面** 或者使用 `/whitelist` 命令完成。

## 总结

只要你按照以上步骤操作，就成功开启并配置了服务器的白名单功能。如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />