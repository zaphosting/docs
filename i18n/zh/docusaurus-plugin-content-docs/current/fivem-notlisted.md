---
id: fivem-notlisted
title: "FiveM：服务器未出现在服务器列表中"
description: "了解如何排查服务器列表问题，确保你的服务器正确显示 → 立即了解更多"
sidebar_label: 服务器未出现在列表中
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

如果服务器没有出现在服务器列表中，可能有多种原因。如果本指南无法解决问题，请联系我们的[客服支持](https://zap-hosting.com/en/customer/support/)。

<InlineVoucher />

## 配置错误

通常是简单的配置错误导致这个问题，首先我们要检查服务器是否禁用了列表显示，方法是查看 `sv_master1` 这一行：

![](https://screensaver01.zap-hosting.com/index.php/s/KBH8deTbXxfrWtB/preview)

:::info
这行**必须始终**用 # 注释掉，如果没有注释，服务器将不会被列出。
:::

同时也要检查服务器名称（`sv_hostname`）：

![](https://screensaver01.zap-hosting.com/index.php/s/9KyEj4tNQWRYxdB/preview)

这里行尾缺少了引号，有些服务器名称因为格式问题也可能导致问题，建议去掉类似 [DE] 这种标签，以及 ä、ü、ö 这类特殊字符。

## 有问题的资源

也有可能是某些资源阻止了服务器被列出，这种情况下建议删除最近安装的资源，然后让服务器在线运行大约1小时，大多数情况下服务器会重新显示。

## 重新安装

如果以上方法都无效，建议重新安装，这会将所有服务器文件重置为默认状态。

:::info
重新安装前务必备份，否则服务器上的数据将会丢失。
:::

<InlineVoucher />