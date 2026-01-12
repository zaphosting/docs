---
id: gameserver-subdomain
title: '游戏服务器：ZAP 子域名'
description: "了解如何设置和管理游戏服务器子域名，实现更便捷的访问和个性化 → 立即了解更多"
sidebar_label: 游戏服务器子域名
services:
  - gameserver
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

我们的游戏服务器现在支持轻松快速地为你的服务器设置子域名。在本指南中，你将了解如何使用 DNS 子域名功能，为你的服务器生成 ZAP Cloud 子域名，或者设置你自己的域名来使用。

<YouTube videoId="1fFagkzOvfo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/bbTYcXxCWXEYNrQ/preview" title="游戏服务器的 ZAP Cloud 域名" description="喜欢通过实际操作来更好地理解吗？我们帮你搞定！快来看看我们的视频，帮你轻松掌握所有内容。不管你是赶时间还是喜欢用最有趣的方式吸收信息！"/>

![](https://screensaver01.zap-hosting.com/index.php/s/yJTBQ7oC926LfbT/preview)

<InlineVoucher />

## 可用性

子域名功能对新老客户均开放。新客户在安装过程中会自动设置一个 `xxx`**.zap.cloud** 子域名。老客户需要在游戏服务器的网页面板中，进入 **设置->DNS 设置** 手动启用该功能。接下来的章节会详细介绍如何使用这个功能。

目前并非所有游戏都支持，但我们已经在包括 FiveM、Minecraft 等多款热门游戏上启用了！未来，我们计划将此功能扩展到更多游戏。遗憾的是，某些游戏技术上无法支持该功能，这类游戏在网页面板中仍会显示普通的 IP 地址。

:::tip
如果你安装的游戏暂时不支持，欢迎随时[联系我们的客服团队](https://zap-hosting.com/en/customer/support/)，我们会尽力帮你添加支持 :)
:::

## 子域名管理（DNS）

管理游戏服务器的子域名功能非常简单。前往 **设置->DNS 设置** 页面开始操作。

在这里，你可以管理免费的 ZAP Cloud 子域名，也可以管理你在 ZAP-Hosting 账户中设置的自有域名。

![](https://screensaver01.zap-hosting.com/index.php/s/M6SMHKJcZ3GgXQd/preview)

:::info
目前每个产品最多可激活 3 个子域名（不包括随机生成的 ZAP Cloud 子域名）。
:::

### 随机 ZAP Cloud 子域名

要生成随机的 ZAP Cloud 子域名，请点击该设置页中的 **解析子域名** 按钮。

:::info
老客户首次生成随机 ZAP Cloud 子域名时，也请使用此按钮。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

### 自定义 ZAP Cloud 子域名

你可以根据需求创建专属的 ZAP Cloud 子域名，只需输入想要的子域名，并从下拉菜单中选择 **.zap.cloud**（默认选项）。

:::note
如果出现错误，可能是该子域名已被占用，或者你输入了禁止使用的词汇或字符，这些限制是为了保护我们的客户。
:::

点击 **创建条目** 后，你应该能在列表中看到新子域名。生效可能需要几分钟时间。

![](https://screensaver01.zap-hosting.com/index.php/s/odqKSyzXRLi5zRx/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/yWmt4j3nWEgbN6K/preview)

### 自有域名

:::info
要使用自己的域名创建子域名，请确保该域名已关联到你的 ZAP-Hosting 账户，可以通过[在我们网站购买](https://zap-hosting.com/en/shop/product/domain/)或从其他服务商转入域名实现。
:::

使用自有域名创建子域名的步骤与自定义 ZAP Cloud 子域名相同。输入想用的子域名，并从下拉菜单中选择你的域名。

:::note
如果出现错误，可能是该子域名已被占用，或者你输入了禁止使用的词汇或字符，这些限制是为了保护我们的客户。
:::

点击 **创建条目** 后，你应该能在列表中看到新子域名。生效可能需要几分钟时间。

![](https://screensaver01.zap-hosting.com/index.php/s/Xoe8c4T9TNpby27/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/AX9yFSb3nRNoKiF/preview)

## 故障排查

### ZAP Cloud 子域名

如果你遇到 ZAP Cloud 子域名相关问题，可以尝试自己解决：进入之前提到的 **设置->DNS 设置** 页面，点击底部的 **解析子域名** 按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/Lc5CCQwMtCK63nx/preview)

请等待几分钟后再检查子域名是否正常工作。

### 自有域名

如果在创建子域名时，无法在下拉菜单中看到你的域名，通常是因为该域名未关联到你的 ZAP-Hosting 账户。

请确保域名已激活并关联到你的账户，可能需要从其他服务商转入域名。

如果你在使用子域名功能时仍有问题，欢迎通过[在我们网站提交工单](https://zap-hosting.com/en/customer/support/)联系客户支持，我们会乐意帮你解决。

<InlineVoucher />