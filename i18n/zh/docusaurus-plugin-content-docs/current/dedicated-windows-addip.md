---
id: dedicated-windows-addip
title: "独立服务器：在 Windows 上配置额外的 IP 地址"
description: "了解如何通过有效使用多个 IP 地址来优化服务器性能和安全 → 立即了解更多"
sidebar_label: 额外的 IP 地址
services:
  - dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在服务器上拥有多个 IP 地址有很多好处，尤其是在复杂的网络环境中，或者为了满足网络性能、安全性和管理的特定需求。给同一台服务器上的不同服务或应用分配不同的 IP 地址，可以实现更好的隔离效果。




## 准备工作

使用多个 IP 地址的前提是你的服务器套餐中包含了这些 IP。如果你默认没有预订额外的 IP 地址，需要先通过升级来添加。然后，通过 [RDP](dedicated-windows-userdp) 连接到你的服务器。




## 配置



### 收集信息

首先，你需要了解可用的 IP 地址。额外的 IP 地址可以在服务器管理后台的 IP 地址栏目查看。

![img](https://screensaver01.zap-hosting.com/index.php/s/zAfKskX42rMSRmb/preview)





### 访问网络配置

在 Windows 服务器上，有多种方式可以访问网络配置。比如，你可以通过控制面板进入 **网络和共享中心**。

打开 **控制面板**，点击 **网络和 Internet**，然后进入 **网络和共享中心**。接着，点击“更改适配器设置”，双击网络适配器（Ethernet 2）。这会打开网络适配器窗口，接下来需要进入属性设置。

在网络适配器的 **属性** 中，选择 **Internet 协议版本 4 (TCP/IPv4)**。这里你可以看到主 IP 地址、子网掩码、默认网关和 DNS 服务器的信息。点击 **高级** 按钮，添加额外的 IP 地址。

![](https://screensaver01.zap-hosting.com/index.php/s/KtBawR89RASs4Jc/preview)



### 添加 IP 地址

现在，通过 **高级 TCP/IP 设置** 添加额外的 IP 地址。点击 IP 地址下的 **添加** 按钮，填写 **IP 地址** 和 **子网掩码**。IP 地址栏输入你的额外 IP，子网掩码一般使用 255.255.255.0。

![](https://screensaver01.zap-hosting.com/index.php/s/gsaceiYPqdiMC7x/preview)



## 总结

IP 地址已成功配置并添加完成。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂


