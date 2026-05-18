---
id: unturned-becomeadmin
title: "Unturned：成为服务器管理员"
description: "了解如何分配管理员权限，实现对服务器的全面控制和更强大的游戏内管理 → 立即了解更多"
sidebar_label: 成为管理员
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
分配管理员权限让你可以轻松全面地管理服务器。作为管理员，你可以直接在游戏内使用游戏提供的所有可用选项和功能。下面将详细介绍为你的服务器分配管理员权限所需的所有步骤。  
<InlineVoucher />

## 准备工作

要在服务器上添加管理员，必须编辑配置文件。为了避免应用更改时出现问题，请务必先停止你的服务器！

此外，还需要对应的 Steam ID（64位）以便服务器识别玩家。你可以使用这个[工具](https://steamidfinder.com/)作为示例。  
进入该工具页面后，通常只需输入玩家名称即可获取所需信息。

![](https://screensaver01.zap-hosting.com/index.php/s/72YkRLBXE77NJQ5/preview)

## 打开配置文件

编辑服务器文件有两种方式。  
一种是通过[FTP访问](gameserver-ftpaccess.md)进行操作。

另一种是直接使用网页面板内置的配置编辑器。  
这里我们使用网页面板自带的编辑器。打开服务器左侧边栏“设置”标签下的“配置”菜单项即可。  
![](https://screensaver01.zap-hosting.com/index.php/s/x872MGFpMLbTBj2/preview)

系统会加载所有可用的配置文件并列出，加载过程通常需要几秒钟，请耐心等待。加载完成后，找到并编辑“commands.dat”文件。点击蓝色的“打开文件”按钮，文件将在网页编辑器中打开。

![](https://screensaver01.zap-hosting.com/index.php/s/9mZyJKX6xCTeDeA/preview)

## 添加管理员

现在可以在配置中指定管理员或拥有者。请注意，拥有者权限只能分配一次！

为分配拥有者权限，请在新的一行输入：

`owner Steam64IDReplacedHere //<-- 这里替换成你的Steam64-ID`

如果要添加管理员，只需将“owner”替换为“admin”即可：

`admin Steam64IDReplacedHere //<-- 这里替换成你的Steam64-ID`

![](https://screensaver01.zap-hosting.com/index.php/s/i6PpdsfK6spBECj/preview)

配置中所有权限设置完成后，点击“保存”按钮保存配置。然后重启服务器，配置中所有玩家将自动获得对应权限。

## 总结

恭喜你，管理员权限配置成功！如果有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />