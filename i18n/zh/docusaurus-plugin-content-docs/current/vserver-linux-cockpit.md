---
id: vserver-linux-cockpit
title: "在 Linux 服务器上安装 Cockpit - 通过网页界面管理你的服务器"
description: "了解如何使用 Cockpit 的网页界面高效管理 Linux 服务器，适合新手和高手 → 立即了解更多"
sidebar_label: 安装 Cockpit
services:
  - vserver
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Cockpit 是一个用于管理一台或多台 Linux 服务器（集群）的网页界面。从简单的日志输出到 RAID 管理，Cockpit 提供了丰富的功能。  
Cockpit 既适合新手，也适合想快速查看/管理所有重要内容的高级用户。此外，它几乎可以从任何设备访问。  
项目官网地址：https://cockpit-project.org/ 。

:::info
本指南讲解的是 Debian（从 Buster 版本起）和 Ubuntu（从 Bionic Beaver 版本起）的安装方法。项目页面上也提供了 Fedora、Red Hat、Fedora CoreOS、CentOS、Clear Linux、Arch Linux 和 Tumbleweed 的安装教程。  
:::

<InlineVoucher />

## 安装

首先，更新服务器：
```
// 更新
sudo apt update; sudo apt upgrade -y
```
然后进行安装：
```
// 安装 Cockpit
sudo apt install cockpit -y
```
安装完成后，可以通过 IP:9090 访问 Cockpit 面板。  
登录时使用服务器/用户的常规登录凭据。

![cockpit](https://screensaver01.zap-hosting.com/index.php/s/2iDf3zFfAxCwkCc/preview)


## 总结

恭喜你，Cockpit 已成功安装并配置完成！如果你有任何疑问或遇到问题，欢迎随时联系我们的支持团队，我们每天都在线为你服务！

<InlineVoucher />