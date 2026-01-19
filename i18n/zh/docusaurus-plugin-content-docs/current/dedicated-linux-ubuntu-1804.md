---
id: dedicated-linux-ubuntu-1804
title: "独立服务器：Ubuntu 18.04 安装指南"
description: "了解如何在你的独立服务器上安装和配置 Ubuntu，实现最佳性能和长期支持 → 立即了解更多"
sidebar_label: Ubuntu 18.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

接下来我们将一步步教你如何在独立服务器上安装并配置 Ubuntu 操作系统。请仔细按照这些步骤操作，确保成功安装系统并充分发挥其性能。



:::warning 有更新版本 / 版本终止支持信息

Ubuntu 最新版本是 [24.04](dedicated-linux-ubuntu.md)。我们建议长期项目使用最新版本。

旧版 Ubuntu 支持会逐步停止。18.04 版本的支持截止时间如下：

- 标准支持结束：2023年3月1日
- Ubuntu Pro 支持结束：2028年4月1日
- 传统支持结束：2030年4月1日

更多信息请访问 [官方页面](https://ubuntu.com/about/release-cycle)。
:::




## 准备工作

安装和配置操作系统时，首先需要挂载对应的操作系统 ISO 镜像。挂载方式有几种：

1. 通过初始设置挂载
2. 通过 iLO（虚拟介质）挂载
3. 通过 iLO（远程控制台）挂载

如果你还不熟悉 ISO 挂载，建议先参考我们的[初始设置](dedicated-setup.md)或[自定义 ISO](dedicated-iso.md)指南。



## 安装过程

ISO 成功挂载并加载后，服务器会进入安装流程。安装开始时需要选择操作系统语言。选中你想用的语言后，按 `Enter` 确认。

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

接着选择适合你语言的键盘布局。

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

然后进行网络配置。服务器默认通过 DHCP 获取网络配置，默认网卡是 `eno1`。确认默认设置继续。

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

可选地，你可以配置代理服务器。如果不需要，直接跳过这步。

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

接下来选择 Ubuntu 软件包下载镜像。我们的独立服务器位于德国，建议选择德国镜像以获得最佳下载速度。

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

现在进入存储分区配置。你可以选择使用整个硬盘作为一个大分区，或者根据需求划分多个分区。如果想用整个 SSD 作为一个分区，选择“使用整个磁盘”继续。

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

安装程序会自动创建分区，确认后选择“完成”。

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

开始写入数据前，会提示所有现有数据将被删除。确认无误后选择“继续”。

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

请设置你的用户账户信息，当然你也可以通过修改密码来使用 root 账户。用 Tab 或方向键切换选项，完成后选择“完成”。

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

推荐安装 SSH 服务。如果你想通过 SSH 管理服务器，选择安装并确认。

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu 默认提供一些 snap 应用，如果你想使用，勾选你喜欢的即可。

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

安装完成后，必须弹出 ISO 镜像，防止重启时再次加载。重启服务器完成安装。

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## 配置



### 修改 root 用户密码

你可以轻松修改 root 用户密码。执行 `sudo su` 并输入你的密码，然后执行 `sudo passwd` 来更改密码。输入你想设置的新密码即可。完成后，你就可以用 root 用户登录了。



## 总结

恭喜你，已成功在独立服务器上安装 Ubuntu 18.04 操作系统。如有任何疑问或需要帮助，欢迎随时联系全天候在线的客服团队！🙂