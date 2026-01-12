---
id: tf2-plugins
title: "Team Fortress 2：在你的服务器上安装插件"
description: "了解如何通过Sourcemod和Metamod插件自定义和增强你的游戏服务器，实现更好的管理和功能 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver-tf2
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/tf2-plugins.json';


## 介绍

了解如何安装Sourcemod和Metamod，以及如何为你的服务器使用插件。这两个扩展允许你自定义CS:S、CS:GO、DoD:S或TF2等游戏，并大幅扩展服务器管理选项。

通过Sourcemod和Metamod，你可以添加插件，启用特殊功能，完全按照你的喜好定制服务器。

<InlineVoucher />



## Sourcemod / Metamod 安装

### 准备工作

所需的扩展可以从 [Sourcemod](https://sourcemod.net/) 和 [Metamod](https://www.sourcemm.net/downloads.php?branch=stable) 下载。务必使用最新的**稳定版**，以确保完整功能和兼容性。

![img](https://screensaver01.zap-hosting.com/index.php/s/STp7pRgjYS4c4yg/preview)

你需要Linux版本的**Sourcemod**和**Metamod**。从指定来源下载后，你会得到两个压缩文件。将它们解压到电脑上，会得到一个addons目录，里面包含`sourcemod`和`metamod`文件夹。

![img](https://screensaver01.zap-hosting.com/index.php/s/WbxyRK8FM7GKxqt/preview)

### 安装步骤

完成上述准备后，就可以开始安装了。使用FTP客户端通过FTP上传文件到你的服务器。如果你不熟悉FTP及其使用方法，可以参考这篇指南：[通过FTP访问](gameserver-ftpaccess.md)

接着，将**addons**文件夹上传到服务器的主目录。文件夹结构应如下所示：

```
/gxxxxxx/dods/dod/addons
```

![img](https://screensaver01.zap-hosting.com/index.php/s/JzWxPT3yP4zAsHz/preview)

现在，**Sourcemod**和**Metamod**的安装就完成了。你可以在游戏中连接服务器，并在控制台输入``sm version``命令，检查Sourcemod和Metamod是否成功安装。输出应类似如下：

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

当Sourcemod和Metamod安装并正常运行后，你就可以开始添加插件了。从 [Sourcemod](https://sourcemod.net/) 下载你想安装到服务器的插件，这里有大量且不断增长的插件库。确保为每个插件获取对应的 .smx 文件。

### 安装步骤

下载好插件后，通过FTP将插件文件上传到目录：

```
../addons/sourcemod/plugins/
```


![img](https://screensaver01.zap-hosting.com/index.php/s/A6E4cQCwQnoqTKc/preview)



## 热门插件
还在找适合你服务器的完美插件？浏览我们精心挑选的最受欢迎和高度推荐的插件列表，提升你的游戏体验，为你的服务器增添完美的点睛之笔。快来获取灵感，找到最适合你项目的插件吧！
<SearchableItemList items={items} />


## 总结

只要你按照步骤操作，就能成功安装Sourcemod/Metamod和你想要的插件。如有任何疑问或需要帮助，别犹豫，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />