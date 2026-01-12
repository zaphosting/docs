---
id: pathoftitans-becomeadmin
title: 成为管理员
description: "了解如何为你的游戏服务器分配和管理管理员权限，实现对服务器的全面控制 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-pathoftitans
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器，拥有对服务器的完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 准备工作

管理员权限的配置是通过服务器的配置文件完成的。进入你的游戏服务器面板，导航到 **Configs**，然后打开 Game.ini 配置文件。

## 配置

在 [/Script/PathOfTitans.IGameSession] 这一节下，必须填写管理员的 Alderon Games ID（AGID）。对应的配置项是 `ServerAdmins=`，后面跟上 AGID。如果你想添加多个管理员，每个管理员需要单独占一行。假设你想给三位玩家分配管理员权限，配置示例如下：

![](https://screensaver01.zap-hosting.com/index.php/s/TwZyRsEoeATM3By/preview)

```
[/Script/PathOfTitans.IGameSession]
ServerAdmins=XXX-XXX-XXX # 1. 管理员账号
ServerAdmins=XXX-XXX-XXX # 2. 管理员账号
ServerAdmins=XXX-XXX-XXX # 3. 管理员账号
```

点击保存，然后重启服务器。管理员权限就设置成功啦！拥有管理员权限后，你可以通过聊天命令任命其他玩家为管理员，或者撤销他们的管理员身份。只要服务器在线，这些功能都可以使用。更多命令详情请查看官方的 [GitHub Wiki](https://github.com/Alderon-Games/pot-community-servers/wiki/Admin-Chat-Commands#admin-tools)。

## 总结

恭喜你，管理员权限配置完成！如果你有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />