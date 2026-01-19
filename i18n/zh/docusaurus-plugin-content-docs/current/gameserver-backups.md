---
id: gameserver-backups
title: '游戏服务器：创建、下载和导入备份'
description: "了解如何轻松创建和恢复手动或自动备份，保护你的游戏服务器数据 → 立即了解更多"
sidebar_label: 备份
services:
  - gameserver
  - premium-storage
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
我们提供一键创建个性化备份的功能。这样你就能轻松、无压力地创建备份，并随时导入恢复。这个功能适用于你的游戏服务器文件以及相关数据库。所有备份都会存储在你的存储服务器上，默认包含10GB免费存储空间。如果需要更多空间，你也可以升级到高级存储（Premium Storage）。

除了手动创建备份外，还可以设置自动备份。备份可以按天或按周在指定时间自动生成。恢复备份后，服务器会回到备份创建时的状态。

<YouTube videoId="yUDAcfyDELc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/CTWHD2Lq4QqFWQw/preview" title="如何为你的服务器创建备份！" description="觉得看视频更容易理解？我们懂你！快来看看这段视频，帮你轻松搞定备份。不管你是赶时间还是喜欢用最酷的方式学习，这里都有你想要的！"/>

<InlineVoucher />

## 手动创建备份

点击备份列表旁的绿色 **+** 按钮即可手动创建备份。备份过程随后会启动，  

:::info
备份创建过程可能需要几分钟，具体取决于你服务器文件的大小！
:::

## 自动创建备份

页面底部有更多选项，包括自动备份的设置。需要启用 **自动创建备份** 选项，才能激活此功能。同时还需设置备份间隔。

![](https://screensaver01.zap-hosting.com/index.php/s/gB9n6JspdNW73bj/preview)

根据不同游戏，备份数据库通常也是个好主意，因为重要数据如分数、权限等通常都存储在数据库里。

>⚠️ 定期备份需要足够的存储空间。请确保你的存储空间始终充足。

## 下载/删除备份

如果你想下载或删除备份，需要通过FTP连接到存储服务器。这里有使用FTP的说明：[通过FTP访问](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/tfJoBpaELEPKMij/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/q3E8XTX8gRQoasY/preview)

在这里，你可以查看存储服务器的用户凭证和当前使用的存储空间。连接FTP后，就可以下载或删除备份文件。

<InlineVoucher />