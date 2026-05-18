---
id: beammp-authkey
title: "BeamMP：创建认证密钥"
description: "了解如何生成并应用认证密钥，让你的服务器公开显示并有效管理访问权限 → 立即了解"
sidebar_label: 创建认证密钥
services:
  - gameserver-beammp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 为什么我需要密钥？

如果想让服务器出现在服务器列表中，就必须有认证密钥，否则只能通过直连访问。

<InlineVoucher />

## 准备工作
要创建自己的认证密钥，首先登录 `https://beammp.com/keymaster`，需要一个 Discord 账号。
登录后，点击左侧的“Keys”，进入许可证密钥概览页面：

![](https://screensaver01.zap-hosting.com/index.php/s/Zp72q2WR85pxJgq/preview)

接着点击蓝色的“here”来创建密钥：

![](https://screensaver01.zap-hosting.com/index.php/s/ARqCQyEbF6BYnH4/preview)


## 填写信息

现在我们可以按以下方式填写信息：

- **服务器名称：** 你的服务器名称，不必和设置里的名字完全一样。
- **服务器IP：** 服务器的IP地址，不带端口号。


### 填写IP

IP必须不带端口号，可以在我们的面板顶部找到：

![](https://screensaver01.zap-hosting.com/index.php/s/8MJeXxm87EdLykg/preview)

## 创建密钥

点击“Create”，系统会生成一个密钥。

![](https://screensaver01.zap-hosting.com/index.php/s/Ebyk5tPCHnppcWC/preview)

## 设置密钥

打开游戏服务器的设置页面，往下滚动，在“Auth Key”栏填写刚才生成的密钥，最终效果应该是这样：

![](https://screensaver01.zap-hosting.com/index.php/s/5p7LdSDCJzrxKDy/preview)

保存设置并重启服务器。

搞定！密钥已生效，服务器很快就会出现在列表里。

<InlineVoucher />