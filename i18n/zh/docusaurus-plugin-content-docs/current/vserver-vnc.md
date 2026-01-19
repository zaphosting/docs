---
id: vserver-vnc
title: "VPS：VNC（虚拟网络计算）控制台"
description: "了解如何在启动或网络故障时远程访问和控制你的服务器，实现无缝管理 → 立即了解更多"
sidebar_label: VNC 控制台
services:
  - vserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

VNC（虚拟网络计算）是一款软件，可以将远程计算机的屏幕内容显示在本地计算机上，同时将本地计算机的键盘和鼠标操作传送给远程计算机。这样，即使服务器未正常启动，你也能远程访问它。

遇到启动或网络问题时，你依然可以访问系统并采取相应措施。

<InlineVoucher />


## VNC 的使用
VNC 网页客户端可以在 VPS 控制面板中找到。操作步骤是在管理工具区点击“串口控制台”选项，然后通过点击 **启动 VNC 隧道** 按钮打开 VNC 连接。

![](https://screensaver01.zap-hosting.com/index.php/s/AgSL8QcynHSfXFA/preview)



随后，VNC 控制台的网页客户端会打开。在这里，你可以查看服务器当前提供的信息，比如启动过程、登录界面或操作系统的图形界面。

下面的示例展示了一个 Windows VPS。该服务器已成功启动，因此 VNC 控制台显示的是登录界面。即使服务器没有活动的网络连接，你也可以在这里登录。点击“发送 CtrlAltDel”按钮，然后使用你的用户名和密码登录。



![](https://screensaver01.zap-hosting.com/index.php/s/XTFS35AJBJaS86r/preview)

<InlineVoucher />