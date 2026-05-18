---
id: webspace-external-domain
title: "Webspace：绑定外部托管域名"
description: "了解如何将您的外部域名连接到 ZAP-Hosting Webspace，实现网站和邮件的无缝功能 → 立即了解更多"
sidebar_label: 绑定外部域名
services:
  - webspace
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

你已经在其他服务商注册了域名，想把它连接到你的 ZAP-Hosting Webspace 产品？没问题！你只需要在你的域名服务商那里调整 DNS 设置。本文将详细告诉你需要创建哪些 DNS 记录，确保你的域名正确指向你的 Webspace。

:::info 域名转移
把你的域名转移到 ZAP-Hosting，享受更便捷的管理体验。只需几步就能把域名绑定到你的 Webspace，还能享受更多附加功能。想知道怎么转移域名？请查看我们的[域名转移](domain-transfer.md)指南。
:::

<InlineVoucher />



## 在 Plesk 绑定域名

在把外部域名绑定到你的 Webspace 之前，先要在 **Plesk** 里添加域名。操作方法是在 **托管设置**（Hosting Settings）里添加你的域名。如果你还不太清楚怎么操作，可以参考我们详细的[添加域名](https://zap-hosting.com/guides/docs/webspace-adddomain)教程。

![img](https://screensaver01.zap-hosting.com/index.php/s/Kx7KDPEk3t6Tcbd/download)



## 配置 DNS 设置

要把外部域名连接到 ZAP-Hosting Webspace，首先得在你的域名注册商那里调整 DNS 设置。为了让你的网站和邮件正常运行，域名必须知道访问者和邮件流量该指向哪个服务器。这就需要创建相应的 DNS 记录。

设置 A 记录时，你需要用到你的 Webspace 实例的 IP 地址。这个信息可以直接在你的 ZAP Webspace 控制面板里找到。

![img](https://screensaver01.zap-hosting.com/index.php/s/DzpqenW4FwP6fbf/download)

拿到 IP 地址后，就可以在你的域名服务商处添加必要的 DNS 记录了。这包括指向 Webspace 的 A 记录，以及处理邮件投递和域名验证的 MX 和 TXT 记录。

想更深入了解各种 DNS 记录的作用和工作原理，强烈推荐看看我们的[域名记录](domain-records.md)指南。

下面是你需要设置的所有 DNS 记录一览表：

| 名称                           | 类型 | 值                              | TTL  | 优先级 |
| ------------------------------ | ---- | ------------------------------- | ---- | ------ |
| *                              | A    | Webspace 实例的 IP 地址          | 3600 | 0      |
| mail                           | A    | Webspace 实例的 IP 地址          | 3600 | 0      |
| www                            | A    | Webspace 实例的 IP 地址          | 3600 | 0      |
| domain.tld.                    | A    | Webspace 实例的 IP 地址          | 3600 | 0      |
| domain.tld.                    | MX   | v=DKIM1;k=rsa;p=MIIBIjA......    | 3600 | 10     |
| default._domainkey.domain.tld. | TXT  | plesk-steve.zap.cloud.           | 3600 | 0      |
| domain.tld.                    | TXT  | v=spf1 a mx ~all                 | 3600 | 0      |
| _dmarc.domain.tld.             | TXT  | v=DMARC1; p=none                 | 3600 | 0      |

:::warning DNS 变更可能需要时间生效

DNS 设置的变更可能需要最长 24 小时才能在全球范围内完全生效。在此期间，你的域名可能不会立即指向新的 Webspace 或邮件服务，请耐心等待变更生效。
:::




## 总结
按照以上步骤操作，就能成功配置并绑定你的域名到 Webspace。如果还有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂


<InlineVoucher />