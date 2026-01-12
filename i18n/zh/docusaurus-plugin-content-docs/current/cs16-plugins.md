---
id: cs16-plugins
title: "CS 1.6：在你的服务器上安装插件"
description: "了解如何通过 AMXmodX 和 Metamod 来增强你的 Counter-Strike 1.6 服务器，实现高级定制和管理 → 立即了解"
sidebar_label: 安装插件
services:
  - gameserver-cs16

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs16-plugins.json';

## 介绍

**AMXmodX** 和 **Metamod** 是在 Counter-Strike 1.6 服务器上使用插件的必备扩展。这两个 Half Life 的扩展让你可以比平时更深入地定制服务器，比如使用各种插件和扩展服务器管理功能。

<InlineVoucher />

## AMXmodX / Metamod 安装

### 准备工作

首先，你需要下载这两个扩展。可以从 [amxmodx.org](https://amxmodx.org/downloads-new.php) 获取。请务必使用最新的 **稳定版**，确保功能完整且兼容性最佳。

![img](https://screensaver01.zap-hosting.com/index.php/s/SxJaFb7Cz79c7ER/preview)

你需要下载 Linux 版本的 **AMX Mod X Base、Counter-Strike Addon 和 Metamod**。下载后会得到三个压缩包，解压到电脑上。解压后会得到一个 **addons** 文件夹，里面包含 **amxmodx** 和 **metamod** 两个文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/LQdb93T39YApA6B/preview)

### 安装步骤

完成上述准备后，就可以开始安装了。需要通过 FTP 把文件上传到你的服务器。你需要一个 FTP 客户端来上传文件。如果你还不熟悉 FTP 是什么以及怎么用，可以先看看这篇指南：[通过 FTP 访问](gameserver-ftpaccess.md)

现在，把 **addons** 文件夹上传到服务器的主目录。上传后，文件结构应该是这样的：

![](https://screensaver01.zap-hosting.com/index.php/s/A5zqJ9GxL47tCrW/preview)

AMXmodX 和 Metamod 的安装就完成了。你可以进入游戏连接服务器，在控制台输入 ``amxx version`` 来检查 AMX 是否安装成功。正确的话会显示类似下面的信息：

```
AMX Mod X 1.8.2
Authors: ....
Compiled: Feb 14 2013, 00:56:31
URL:http://www.amxmodx.org/
Core mode: JIT
```

如果显示 **Unknown command**，说明安装过程中出现了问题。

## 插件安装

### 准备工作

AMXmodX 和 Metamod 安装并正常运行后，就可以开始安装插件了。首先你需要下载想要安装的插件。大量插件可以在 [amxmodx.org](https://www.amxmodx.org/compiler.php) 找到。这里有多年来发布的各种插件，而且还在不断更新。你需要下载对应插件的 **.amxx** 文件。

### 安装步骤

下载好插件后，就可以开始安装了。插件同样通过 FTP 上传，上传到服务器目录下的 ``../addons/amx/plugins`` 文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/FG2ocNpWCRManSd/preview)

下次服务器启动时，上传的插件会自动加载。

## 热门插件推荐

还在找适合你服务器的完美插件吗？  
浏览我们精心挑选的热门且高评价插件列表，提升你的游戏体验，让你的服务器更具特色。快来找找灵感，找到最适合你项目的插件吧！

<SearchableItemList items={items} />

## 总结

只要按照步骤操作，你就能成功安装 AMXmodX / Metamod 以及你想要的插件。如果还有疑问或需要帮助，随时联系在线客服，我们每天都在线为你服务！🙂

<InlineVoucher />