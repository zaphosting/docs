---
id: terraria-tshock-add-admin
title: "Terraria：成为服务器管理员（tShock）"
description: "了解如何在你的 Terraria 服务器上分配管理员权限，实现全面控制和管理 → 立即了解"
sidebar_label: 成为管理员（tShock）
services:
  - gameserver-terraria
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松且全面地管理服务器，拥有完全控制权。作为管理员，你可以直接在游戏内使用游戏提供的所有选项和功能。下面会详细介绍如何为你的服务器分配管理员权限的所有步骤。  
<InlineVoucher />

## 获取 Token

要在你的 Terraria 服务器上注册为管理员，你需要你的专属 token。  
这个 token 会在你首次启动服务器时生成，然后你打开实时控制台就能找到它：

![](https://screensaver01.zap-hosting.com/index.php/s/5cEQYgBgxAYQRcx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/HEYwEWe5c3DPZ6E/preview)

这里的 token 是 **4914096**。

## 在游戏中输入 Token

想要注册为管理员，先加入你的 Terraria 服务器，然后在游戏中输入命令 **/setup 4914096**。  
当然，你要把 **4914096** 替换成你自己的 token。

![](https://screensaver01.zap-hosting.com/index.php/s/tadkJkQf5cE3dTB/preview)

### 聊天框会显示以下消息：

![](https://screensaver01.zap-hosting.com/index.php/s/JDfKNpaeB63pCeB/preview)


## 添加管理员

现在你可以用命令 **/user add USERNAME PASSWORD owner** 添加新的管理员。  
把 **USERNAME** 替换成你的用户名，**PASSWORD** 可以设置成你喜欢的任意密码，  
以后你就用这个密码登录服务器管理员账号。

![](https://screensaver01.zap-hosting.com/index.php/s/iX62CLtn577NfFQ/preview)  
![](https://screensaver01.zap-hosting.com/index.php/s/xeP8Y8sx66LkSJQ/preview)

:::info
注意：密码长度至少要 4 个字符哦！
:::

## 管理员登录

注册完成后，你可以用下面的命令登录管理员账号：  
**/login USERNAME PASSWORD**

同样，把 **USERNAME** 替换成你的用户名，**PASSWORD** 替换成之前设置的密码。

![](https://screensaver01.zap-hosting.com/index.php/s/ewTra2Fi2yia9jS/preview)

现在你已经以管理员身份登录服务器，可以用各种命令来管理它啦。

<InlineVoucher />