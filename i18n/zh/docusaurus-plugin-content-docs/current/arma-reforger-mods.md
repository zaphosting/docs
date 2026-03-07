---
id: arma-reforger-mods
title: "Arma Reforger：通过工作坊安装Mods"
description: "了解如何在你的服务器上安装并启用Arma Reforger工作坊Mods → 立即了解更多"
sidebar_label: 安装Mods
services:
  - gameserver-arma-reforger
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Mods在扩展**Arma Reforger**的游戏体验中扮演着重要角色。通过**Arma Reforger工作坊**，玩家和创作者发布自定义任务、玩法改动、地图以及额外内容，这些都可以在服务器上使用。

安装Mods让服务器拥有者能够定制玩法，引入新机制，或者为社区提供独特的任务。一旦安装，加入服务器的玩家会在连接前自动下载所需的Mods。

<InlineVoucher />

## 查找Mods

首先你需要想安装的Mod的**工作坊ID**。打开**Arma Reforger工作坊**，找到你想要的Mod。每个工作坊条目都有一个唯一的标识符，服务器会用它来自动下载Mod。

![img](https://screensaver01.zap-hosting.com/index.php/s/jMNGbRAQdjKcDyn/preview)

## 配置

要在你的服务器上安装工作坊Mods，打开你的**游戏服务器管理面板**，进入**设置**。找到名为**Workshop-Mods**的配置字段。在这里输入你想安装的Mod的**工作坊ID**。单个Mod的示例配置：

```
1234567890
```
如果想安装多个Mods，输入每个工作坊ID并用**逗号**分隔。多个Mods的示例配置：

```
1234567890,9876543210,1357924680
```
输入完想要的Mod ID后，**保存设置**并重启服务器。启动时，服务器会自动从Arma Reforger工作坊下载列出的Mods并加载它们。

## 总结

恭喜你！你已经成功在服务器上安装了**Arma Reforger工作坊Mods**。如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />