---
id: conan-becomeadmin
title: "Conan Exiles：如何成为自己服务器的管理员"
description: "了解如何赋予管理员权限，实现对服务器的全面控制，轻松管理游戏功能 → 立即了解"
sidebar_label: 成为管理员
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
赋予管理员权限让你可以轻松全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有选项和功能。下面将详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

## 配置
要给自己或其他玩家赋予管理员权限，首先需要设置一个服务器管理员密码。这个密码可以在你的服务器**设置**中定义，登录后台界面即可找到。

![](https://screensaver01.zap-hosting.com/index.php/s/gpHQXB9tk46RpLL/preview)

进入**设置**页面后，找到“Admin Password”，随意更改为你喜欢的密码。

![](https://screensaver01.zap-hosting.com/index.php/s/bKWx4qCj3aj6agA/preview)

密码设置完成后，保存更改并重启服务器。然后连接服务器，按下 ESC 键打开服务器设置，在那里输入管理员密码即可成为管理员。

![](https://screensaver01.zap-hosting.com/index.php/s/giLP794irsw8bjK/preview)

成为管理员后，你就可以执行所有管理员命令。下面是一些常用命令的汇总。

## 常用命令

| 命令                                                    | 说明                                                         |
| ------------------------------------------------------- | ------------------------------------------------------------ |
| MakeMeAdmin [AdminPassword]                             | 启用管理员模式                                               |
| MakeMeNormal                                           | 关闭管理员模式                                               |
| LearnEmote [emote]                                     | 在聊天框输入 /emote [emote] 或长按 R 键打开表情菜单。需管理员模式 |
| God                                                    | 开启/关闭上帝模式                                            |
| PlayerCanBuildEverywhere [PlayerName]                  | 允许指定玩家在禁建区域建造                                  |
| Teleport                                               | 传送到地面或空中                                            |
| TeleportPlayer X[float] Y[float] Z[float]              | 传送你或其他玩家到指定坐标                                  |
| TeleportToPlayer [PlayerName]                          | 传送到指定玩家位置                                          |
| Fly                                                    | 开启飞行模式                                                |
| Ghost                                                  | 开启幽灵模式（隐身，无碰撞）                                |
| SetServerSetting serverSetting[FString] Value[FString] | 游戏中修改 ServerSettings.ini 里的服务器设置               |

更多游戏相关的管理员命令可以在 Conan Exiles 的 [Gamepedia](https://conanexiles.gamepedia.com/Admin_Panel) 上找到。

## 总结

恭喜你，管理员权限配置成功！如果有任何问题或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />