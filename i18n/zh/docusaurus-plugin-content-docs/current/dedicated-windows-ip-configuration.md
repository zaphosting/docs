---
id: dedicated-windows-ip-configuration
title: "独立服务器：IP 配置（Windows）"
description: "了解如何在 Windows 独立服务器上配置 IP 设置 → 立即了解更多"
sidebar_label: 配置 IP 地址
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

在你的 Windows 独立服务器上配置 IP 地址，可以让你掌控服务器在网络中的通信方式。这包括分配 IP 地址、设置默认网关以及配置网络连接所需的 DNS 服务器。

正确的 IP 配置对运行游戏服务器、网页服务器、数据库或远程访问系统等服务的服务器来说非常重要，它能确保网络通信稳定且访问可靠。

:::warning 服务器因缺少网络连接而无法访问？
如果你的服务器因为网络配置错误或缺少互联网连接而无法访问，远程桌面（RDP）可能无法使用。请使用 [iLO HTML 控制台](dedicated-ilo.md#the-html5-console) 连接服务器并修复网络配置。
:::

<InlineVoucher />

## 准备工作

在配置 IP 地址之前，请确保你已准备好以下信息：

- 你想分配的 IP 地址
- 子网掩码
- 默认网关
- DNS 服务器

这些信息可以在管理面板中找到。打开你的 **独立服务器管理**，然后进入 **IP 地址** 页面查看。

## 配置步骤

使用 **远程桌面（RDP）** 连接到你的独立服务器。连接后，打开 **控制面板**。依次进入 **控制面板 → 网络和 Internet → 网络和共享中心**。

点击左侧的 **更改适配器设置**。你会看到可用的网络接口。右键点击你正在使用的网络适配器（通常是 **以太网**），选择 **属性**。在列表中找到 **Internet 协议版本 4 (TCP/IPv4)**，然后点击 **属性**。

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

选择 **使用下面的 IP 地址**，并填写以下内容：

- **IP 地址** → 你分配的 IP 地址
- **子网掩码** → 你的子网掩码
- **默认网关** → 你的网关地址
- **DNS 服务器 →** 1.1.1.1, 8.8.8.8

然后选择 **使用下面的 DNS 服务器地址**，输入你偏好的 DNS 服务器。填写完成后，点击 **确定** 保存配置，关闭剩余窗口。



## 验证

打开 **命令提示符**，运行以下命令：
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

该命令会显示所有网络接口及其当前的 IP 配置。找到你正在使用的网络适配器，确认 **IPv4 地址** 是否与你刚才配置的 IP 地址一致。如果显示正确，说明配置已成功应用。





## 总结

恭喜你！你已经成功配置了 Windows 独立服务器的 IP 设置。如果你有更多问题或需要帮助，我们的支持团队每天都在线为你服务。

<InlineVoucher />