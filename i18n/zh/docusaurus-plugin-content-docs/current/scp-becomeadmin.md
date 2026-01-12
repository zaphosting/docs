---
id: scp-becomeadmin
title: "SCP Secret Laboratory：如何在自己的服务器上成为管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制，并有效管理游戏服务器中的角色 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## 介绍
分配管理员权限让你可以轻松全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有选项和功能。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

:::info
由于最近的 SCP 更新，密码登录功能已失效。请按照以下指南通过 SteamID 直接添加你的角色。 
:::


## 远程管理员配置设置

### 准备工作

首先，你需要找到你的 Steam64ID。  
你可以使用这个工具：[SteamID 查询](https://steamid.io/lookup)。  
稍后你会在配置文件中输入这个 ID。

下面是一个示例，展示如何通过输入你的个人资料链接来获取 SteamID：

![](https://screensaver01.zap-hosting.com/index.php/s/k4EEWwFQB3xAxA2/preview)

## 添加管理员

现在打开并编辑配置文件。  
它位于“**Configs**”文件夹下的“**Settings**”目录中。

![](https://screensaver01.zap-hosting.com/index.php/s/NSFrZG3SX6ZaQgb/preview)

打开“**config_remoteadmin.txt**”，在里面修改必要的行。

![](https://screensaver01.zap-hosting.com/index.php/s/KM6YpQwGC4n8rZW/preview)

在这里创建并分配角色。  
将“**SomeSteamId64**”替换为你之前通过“**steamid 查询**”获得的 SteamID64，紧跟在“**@steam: owner**”前面。

![](https://screensaver01.zap-hosting.com/index.php/s/HC4Z2s9wPgdJjXT/preview)

你可以为每个需要权限的用户重复这个操作。  
在我们的示例中，我们给三个用户设置权限，其中一个是“**owner**”，另外两个是“**admin**”。

![](https://screensaver01.zap-hosting.com/index.php/s/9e7YWoMHAxn3z3b/preview)

## 添加更多角色以覆盖密码登录

如果你想让多个角色绕过远程管理员密码，可以在以下文件中调整这行配置：  
“**config_remoteadmin.txt**”

找到以下部分：

![](https://screensaver01.zap-hosting.com/index.php/s/HoGJ7X2ZEWW34bH/preview)

要添加更多角色，只需用逗号分隔写入你想要的角色。  
例如，添加 admin 和 moderator 来绕过密码：

![](https://screensaver01.zap-hosting.com/index.php/s/PFLFiG9W3kScZ3d/preview)

:::info
登录服务器后，按“**M**”键即可打开游戏内远程管理员控制台。  
如果服务器正在运行，需要重启服务器才能生效；如果服务器处于关闭状态，直接开服后即可在游戏内打开远程管理员控制台。
:::


## 总结

恭喜你，管理员权限配置成功！如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />