---
id: unturned-rocketmod-permissions
title: "Unturned：调整服务器权限"
description: "了解如何有效管理和自定义服务器权限，实现更好的控制和安全 → 立即了解更多"
sidebar_label: 调整权限
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 准备工作
为了让服务器生成必要的配置文件，必须先启动服务器。
服务器上线后，你可以再把它关闭。
因为所有我们或服务器需要的文件都会在这时被创建。

## 打开配置文件
权限设置保存在“Permissions.config.xml”文件中。
你可以通过我们的面板轻松查看和编辑这个文件。
只需点击服务器面板中的“Configs”标签：

![](https://screensaver01.zap-hosting.com/index.php/s/cGyn9Ry3jaekEdQ/preview)

这个配置文件叫做“Rocket Permissions”，点击蓝色的笔图标即可编辑：

![](https://screensaver01.zap-hosting.com/index.php/s/nLd2dHiPLn9eirH/preview)

## 理解配置文件
配置文件乍一看可能很复杂。
别担心，我们帮你搞懂它！
文件被分成不同的组。
所有组都显示在 <groups> </groups> 标签内。
以 "<groups>" 开始，以 "</groups>" 结束：

开始：

![](https://screensaver01.zap-hosting.com/index.php/s/jzKgXwCa3zkxNds/preview)

结束：

![](https://screensaver01.zap-hosting.com/index.php/s/apkYpiJjosJ4FCJ/preview)

组内容就在这两个标签之间。
比如，下面这个完整的区块就是一个组：

![](https://screensaver01.zap-hosting.com/index.php/s/ZKMeMb3twTBWrrx/preview)

组内会分配所有必要的参数。

## 调整权限
在组内你会找到“Permissions”类别。
看下面的截图：

![](https://screensaver01.zap-hosting.com/index.php/s/9cT46tzXYWp6Hrk/preview)

这里可以调整该组的权限，
以及设置命令的冷却时间（多久后可以再次使用）。
假设我们想给组赋予封禁用户的权限，
可以这样写：

![](https://screensaver01.zap-hosting.com/index.php/s/LDgWZxJ2YyCc6ac/preview)

这意味着该组现在可以在游戏内封禁玩家，
且因为冷却时间设为0秒，可以连续使用。

如果还想给组赋予自我治疗的权限，可以这样写：

![](https://screensaver01.zap-hosting.com/index.php/s/yjSDbMM9sn7236m/preview)

不过用户只能每3600秒使用一次该命令。
其他权限的设置方法类似。
不过部分权限需要对应的插件支持。

## 给组添加用户
组和权限都设置好了，
接下来要把用户分配到组里。
这需要用户的 Steam64ID。
你可以通过这个链接查到：
https://steamid.io/

拿到 Steam64ID 后，可以把它写进配置文件。
用 Member 参数来添加：

![](https://screensaver01.zap-hosting.com/index.php/s/WX2CxgZoQBCa4Lr/preview)

举个例子，配置看起来像这样：

![](https://screensaver01.zap-hosting.com/index.php/s/RqkCrB5gM4jHT2t/preview)

每个新用户都需要新起一行，分配到该组。
输入完所有用户后，点击“保存”按钮保存配置。
然后启动服务器，游戏内你就被分配到该组啦！

<InlineVoucher />