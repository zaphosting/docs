---
id: vserver-windows-manage-users
title: "VPS：管理 Windows 服务器上的用户"
description: "了解如何管理 Windows 服务器上的多个用户账户，实现安全的同时远程访问和个性化桌面 → 立即了解更多"
sidebar_label: 添加 & 管理用户
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Windows 操作系统内置了用户管理功能，让你轻松管理额外用户。使用独立用户的好处包括通过各自的凭据实现同时（最多2个）远程桌面访问、独立的桌面和文件访问，以及简单的权限系统。在本指南中，我们将介绍如何管理你的 Windows 服务器上的用户。

<InlineVoucher />

## 准备工作

首先通过 RDP 连接到你的 Windows 服务器。如果你需要帮助，请参考我们的[初始访问（RDP）](vserver-windows-userdp.md)指南。

:::important 管理员权限
确保你使用的是 **Administrator** 用户或任何具有管理员权限的用户登录 Windows 服务器，否则你将无法管理用户。
:::

你在 Windows 服务器上创建的每个用户，都可以使用自己的凭据通过远程桌面连接服务器。每个用户都有自己独立的桌面、文件和程序，彼此互不干扰，只有具有管理员权限的用户才能查看所有内容。专门为所有用户安装的程序则是全局可用的。

使用普通的 Windows Server 许可证，**2** 个账户可以同时登录并使用服务器。如果超过这个数量，后连接的用户会将先连接的用户踢出。除此之外，用户账户的创建数量没有限制。

## 访问用户管理

用户账户管理通过控制面板的设置完成。首先打开 Windows 服务器上的开始菜单，选择 **控制面板**。然后选择 **用户账户**，进入子菜单。

![](https://screensaver01.zap-hosting.com/index.php/s/zePaY2rcCwTgaCo/preview)

再次选择菜单中的 **用户账户**，进入概览页面。

![](https://screensaver01.zap-hosting.com/index.php/s/rafwZP8rDnycjpa/preview)

在概览页面，选择 **管理其他账户**，进入主要用于管理用户的 **管理账户** 区域。

![](https://screensaver01.zap-hosting.com/index.php/s/iyQ9ZXoFLdMTNSZ/preview)

现在你可以开始管理 Windows 服务器上的用户了，根据你想执行的操作，继续阅读以下章节。

## 创建新用户

开始创建用户流程，选择 **管理账户** 区域中的 **添加用户账户**。

![](https://screensaver01.zap-hosting.com/index.php/s/x4EpREF5FJoLycw/preview)

屏幕会弹出一个提示，要求填写账户的用户名、密码和密码提示。确保密码足够强，否则可能会出现验证错误。

![](https://screensaver01.zap-hosting.com/index.php/s/dAyCkyAA2BLwNNe/preview)

填写完成后，点击下一步按钮，新用户就会被创建。

![](https://screensaver01.zap-hosting.com/index.php/s/zEZGXQH9ErcCbgD/preview)

最后，你需要将新用户添加到远程桌面连接列表，确保服务器接受该用户的 RDP 连接。进入 **控制面板**，打开 **系统和安全**。

![](https://screensaver01.zap-hosting.com/index.php/s/NtNg7sRRgDdnffr/preview)

找到并选择 **允许远程访问**，会打开一个新菜单。

![](https://screensaver01.zap-hosting.com/index.php/s/diBL57HtffpNAGX/preview)

在菜单底部点击 **选择用户...**，会显示当前拥有远程桌面访问权限的用户列表。

![](https://screensaver01.zap-hosting.com/index.php/s/TP7LW2pWboFKixy/preview)

在显示的菜单中，点击 **添加...** 打开用户选择提示，然后点击 **高级...**。

![](https://screensaver01.zap-hosting.com/index.php/s/MTinLT9PDA45TAS/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/SNd89fxNXKbfBBt/preview)

窗口会展开，方便你查找用户。点击 **立即查找**，返回用户列表，找到你刚创建的新用户，这里示例是 `ZAP-Docs`。

![](https://screensaver01.zap-hosting.com/index.php/s/spQL9fTNd778bry/preview)

选中用户，点击 **确定**，关闭所有菜单并确认更改。

你已经成功创建了一个拥有远程桌面访问权限的新用户。建议使用新用户的凭据通过 RDP 连接服务器，确保一切正常。

## 管理用户

你可以通过 **管理账户** 区域轻松管理所有用户。只需选择你想管理的用户。

:::important 管理员权限
要管理用户，你必须使用主 **Administrator** 账户或具有管理员账户类型的用户，这些账户拥有所有必要权限。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/yJPTWKieZNZXifH/preview)

在该页面，你可以使用多种功能管理用户，包括修改用户名、密码、账户类型以及删除用户。

![](https://screensaver01.zap-hosting.com/index.php/s/tkPtbrmfsnK3TcG/preview)

<InlineVoucher />