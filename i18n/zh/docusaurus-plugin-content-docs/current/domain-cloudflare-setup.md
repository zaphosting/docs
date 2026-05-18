---
id: domain-cloudflare-setup
title: "域名：使用 Cloudflare 设置域名"
description: "了解如何通过 Cloudflare 提升你的网站安全性和性能，配合 ZAP-Hosting 域名 → 立即了解更多"
sidebar_label: Cloudflare 设置
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Cloudflare 是一个超受欢迎的 CDN（内容分发网络）服务商，能帮你的网站提升安全防护、抵御 DDoS 攻击，还能通过它们的控制面板轻松管理。这个指南会告诉你如何通过 ExpertDNS 以及调整域名服务器，把你的 ZAP-Hosting 域名和 Cloudflare 结合起来。

<InlineVoucher />

## 准备工作
要跟着本指南操作，你需要：
- 一个在你 ZAP-Hosting 账户下的域名
- 一个 Cloudflare 账户
  
## 第一步：启用 ExpertDNS 选项

先登录你的 ZAP-Hosting 账户，进入你选定域名的网页面板。找到 **ExpertDNS** 选项，勾选启用它，然后点击保存按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/ZdJDTfAtjQe5Xgt/preview)

## 第二步：在 Cloudflare 上设置你的域名

接下来要用到 Cloudflare，先登录你的 Cloudflare 账户。登录后，按照 Cloudflare 提供的步骤把你的网站添加到他们的控制面板。

![](https://screensaver01.zap-hosting.com/index.php/s/aSFWP63XsHZsKk9/preview)

当你进行到第 4 步时，Cloudflare 会给你一组域名服务器（nameservers），你需要设置它们。

![](https://screensaver01.zap-hosting.com/index.php/s/mN7gHoEZWjz7FJG/preview)

回到你的域名网页面板，进入 **ExpertDNS** 区域。把默认的 ZAP-Hosting 域名服务器删除，换成 Cloudflare 给你的那组。

![](https://screensaver01.zap-hosting.com/index.php/s/cqboxyTns4o8B5j/preview)

完成后别忘了保存更改。

## 第三步：在 Cloudflare 完成设置

回到 Cloudflare 控制面板。在你刚才设置域名的页面上，会有个按钮让你强制 Cloudflare 重新检测你的域名服务器。

:::info
域名服务器的更改可能需要最长 24 小时才能生效，但通常会快得多。
:::

一旦 Cloudflare 识别到你的域名服务器更改，你会收到一封邮件通知你设置完成。你也可以在 Cloudflare 控制面板查看，成功的话你设置的域名下会显示 **Active**。

恭喜你，成功把域名和 Cloudflare 集成了！现在你的网站性能、安全性和管理体验都大大提升了。

<InlineVoucher />