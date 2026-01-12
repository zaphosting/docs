---
id: redm-gamebuild
title: "RedM：启用DLC内容"
description: "了解如何在你的RedM服务器上强制使用特定DLC版本，畅玩最新地图、载具和内容 → 立即了解更多"
sidebar_label: 启用DLC游戏版本
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

强制游戏版本让你可以为服务器指定特定的DLC版本，畅玩最新地图、服装、载具等内容！

<InlineVoucher />

## 可用游戏版本

以下是所有可用DLC及其版本ID一览：

| 版本ID |                          版本名称                          |
| :----: | :--------------------------------------------------------: |
|  1311  | 2020年中更新，不兼容Red Dead Online授权。                |
|  1355  | 2020年12月更新，支持新版游戏版本如RDO。                   |
|  1436  | 2021年7月更新，包含Blood Money DLC的新内容。              |
|  1491  | 2022年9月更新，内容/改动有限。                             |


## 启用游戏版本

如果你想使用像Blood Money这样的额外DLC内容，必须在服务器配置文件中设置对应版本。打开你的txAdmin面板，进入CFG编辑器。然后通过`sv_enforceGameBuld`命令，选择表格中你想启用的游戏版本即可。

![img](https://screensaver01.zap-hosting.com/index.php/s/YoRFMoHxdSNydoD/preview)


## 总结

选定版本后，重启你的RedM服务器。服务器将以指定的DLC版本启动。你已成功为你的RedM游戏服务器设置了游戏版本。如有任何疑问或需要帮助，欢迎随时联系每日在线的客服团队！🙂

<InlineVoucher />