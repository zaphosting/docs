---
id: hl2-plugins
title: "Half-Life 2：在你的服务器上安装插件"
description: "了解如何通过Sourcemod和Metamod自定义和增强你的游戏服务器，实现更好的管理和功能 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver-hl2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/hl2-plugins.json';


## 介绍

了解如何安装Sourcemod和Metamod，以及如何为你的服务器使用插件。这两个扩展支持自定义CS:S、CS:GO、DoD:S或TF2等游戏，并大幅扩展服务器管理功能。

通过Sourcemod和Metamod，你可以添加插件，开启特殊功能，完全按照你的喜好定制服务器。

<InlineVoucher />



## Sourcemod / Metamod 安装

### 准备工作

所需扩展可从 [Sourcemod](https://sourcemod.net/) 和 [Metamod](https://www.sourcemm.net/downloads.php?branch=stable) 下载。务必使用最新的**稳定版**，以确保功能完整和兼容性。

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

你需要下载Linux版本的**Sourcemod**和**Metamod**。下载后，你会得到两个压缩包。解压后会得到一个addons目录，里面包含`sourcemod`和`metamod`文件夹。

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### 安装步骤

完成上述准备后，就可以开始安装了。通过FTP客户端将文件上传到你的服务器。如果你不熟悉FTP操作，可以参考这篇指南：[通过FTP访问](gameserver-ftpaccess.md)

接着，将**addons**文件夹上传到服务器的主目录。文件夹结构应如下所示：

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

现在，**Sourcemod**和**Metamod**的安装就完成了。你可以进入游戏连接服务器，在控制台输入``sm version``命令，检查Sourcemod和Metamod是否安装成功。输出应类似如下：

```
SourceMod Version Information:
             SourceMod Version: 1.9.0.6281
             SourcePawn Engine: 1.9.0.6281, jit-x86 (build 1.9.0.6281)
             SourcePawn API: v1 = 4, v2 = 12
             Compiled on: May 14 2019 16:03:05
             Built from: https://github.com/alliedmodders/sourcemod/commit/c5efe48
             Build ID: 6281:c5efe48
             http://www.sourcemod.net/
```
```             
Metamod:Source version 1.10.7-dev
         Built from: https://github.com/alliedmodders/metamod-source/commit/63da1c3
         Build ID: 970:63da1c3
         Loaded As: Valve Server Plugin
         Compiled on: Mar 28 2019
         Plugin interface version: 15:14
         SourceHook version: 5:5
         http://www.metamodsource.net/
```

如果显示**Unknown command**，说明安装过程中出现了问题。



## 插件安装

### 准备工作

确认Sourcemod和Metamod已正确安装并运行后，就可以开始添加插件了。你可以从 [Sourcemod](https://sourcemod.net/) 下载想要安装的插件，这里有大量且不断更新的插件资源。确保每个插件都获取对应的 .smx 文件。

### 安装步骤

下载好插件后，通过FTP将插件文件上传到以下目录：

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## 热门插件
还在找适合你服务器的完美插件吗？浏览我们精心挑选的最受欢迎和强烈推荐的插件列表，提升你的游戏体验，为你的服务器增添独特魅力。快来获取灵感，找到最适合你项目的插件吧！
<SearchableItemList items={items} />


## 总结

只要你按照步骤操作，就能成功安装Sourcemod/Metamod及你想要的插件。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />