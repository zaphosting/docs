---
id: dedicated-linux-ubuntu
title: "独服教程：Ubuntu 24.04 安装指南"
description: "教你如何在独服上安装并配置 Ubuntu，确保性能和稳定性 → 立即了解更多"
sidebar_label: Ubuntu 24.04
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

下面会一步步教你如何在独服上安装和配置 Ubuntu 操作系统。认真跟着操作，确保系统顺利安装并发挥最佳性能。



## 准备工作

安装和配置操作系统，首先要挂载对应的 ISO 镜像。挂载方式有几种：

1. 通过初始设置挂载
2. 通过 iLO（虚拟光驱）挂载
3. 通过 iLO（远程控制台）挂载

如果你还不熟悉 ISO 挂载，建议先看看我们的[初始设置](dedicated-setup.md)或[自定义 ISO](dedicated-iso.md)教程。



## 安装步骤

ISO 挂载并加载成功后，服务器会进入安装流程。首先选择你想用的系统语言，选中后按 `Enter` 确认。

![](https://screensaver01.zap-hosting.com/index.php/s/yrHMNzstM23XZH6/preview)

接着选择适合你的键盘布局，设置语言对应的键盘。

![](https://screensaver01.zap-hosting.com/index.php/s/x9kYGEWS5fy7Wjp/preview)

然后是网络配置，默认通过 DHCP 自动获取，默认网卡是 `eno1`。确认默认设置，继续下一步。

![](https://screensaver01.zap-hosting.com/index.php/s/6mr5kAKJQ39iJt5/preview)

可选地，你可以配置代理服务器，但不是必须的。不需要的话直接跳过。

![](https://screensaver01.zap-hosting.com/index.php/s/tz97Ee8ZQkxAGGb/preview)

接下来选择 Ubuntu 软件包下载镜像。我们的独服在德国，建议选德国镜像，保证最快下载速度。

![](https://screensaver01.zap-hosting.com/index.php/s/xNknNyWAbd5DnsZ/preview)

现在进入存储分区配置。你可以用一个大分区，也可以细分。如果想用整个 SSD 作为一个分区，选“使用整个磁盘”，然后继续。

![](https://screensaver01.zap-hosting.com/index.php/s/2dJ9oeMGjpWn6cZ/preview)

安装程序会自动创建卷，选择“完成”继续。

![](https://screensaver01.zap-hosting.com/index.php/s/WXfzt57Rtm2SQLD/preview)

开始写入前会提醒你所有数据将被清空，确认无误后选择“继续”。

![](https://screensaver01.zap-hosting.com/index.php/s/L3YcGNbYWpMmaDj/preview)

配置你的用户账号，最后你也可以通过修改密码使用 root 账号。用 Tab 或方向键切换选项，完成后选“完成”。

![](https://screensaver01.zap-hosting.com/index.php/s/mqrjmF2ZmA2Qj9z/preview)

推荐安装 SSH 服务，如果想远程管理服务器，选择安装并确认。

![](https://screensaver01.zap-hosting.com/index.php/s/Xz3zzMdZ6C523ip/preview)

Ubuntu 默认提供一些 snap 应用，喜欢的话可以勾选安装。

![](https://screensaver01.zap-hosting.com/index.php/s/wcGiSwX935jXeex/preview)

安装完成后，记得弹出 ISO 镜像，避免重启时再次加载。重启服务器完成整个流程。

![](https://screensaver01.zap-hosting.com/index.php/s/SzrxCtJTx2S8Nef/preview)



![](https://screensaver01.zap-hosting.com/index.php/s/x3BRLSepSDFnYGA/preview)



## 配置



### 修改 root 用户密码

修改 root 密码超简单。先执行 `sudo su`，输入你的密码切换到 root。然后执行 `sudo passwd`，输入新密码即可。完成后你就能用 root 账号登录了。



## 总结

恭喜你，Ubuntu 24.04 已成功安装到你的独服上！如果有任何问题或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂



