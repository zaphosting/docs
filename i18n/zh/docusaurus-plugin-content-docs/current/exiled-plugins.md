---
id: exiled-plugins
title: "SCP EXILED：安装插件"
description: "了解如何通过可信赖的插件扩展和个性化你的服务器，实现更多功能和定制 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/scp-plugins.json';


## 介绍

插件让你可以更进一步扩展和个性化你的服务器。接下来，我们会告诉你在哪里找到最常用的插件，以及如何设置它们。

<InlineVoucher />

## 准备工作

首先，你需要下载想要安装到服务器上的插件。大量 EXILED 插件都可以在它们的官方 GitHub 页面找到。选定插件仓库后，你会看到一个 Releases（发布）区域，可以下载最新版本。下面会详细说明具体步骤。

虽然插件可以从各种渠道下载，但我们建议你坚持使用官方 GitHub 仓库这类可信平台，因为它们通常更安全。添加插件时务必保持警惕，确认来源、核实开发者，并完全了解插件功能后再安装。

从 GitHub 下载插件，先访问官方的 [EXILED GitHub 页面](https://github.com/Exiled-Team)，然后选择你想用的插件仓库。  
![](https://screensaver01.zap-hosting.com/index.php/s/6cCEZGEBKNnJ4o4/preview)  

进入插件仓库后，找到右侧的 **Releases**（发布）部分。  
![](https://screensaver01.zap-hosting.com/index.php/s/fteeKrPYmRZknBq/preview)  

在 Releases 区域，你会看到可下载的 **.dll** 文件，点击它开始下载。  
![](https://screensaver01.zap-hosting.com/index.php/s/WzB3qHEb37kkBKs/preview)  

就这么简单！下载完成后，往下看安装步骤，教你如何把 **.dll** 文件装到服务器上。


## 安装

下载好想要的插件后，就可以开始安装了。安装过程通过 **FTP** 完成，所以你需要一个 FTP 客户端把文件上传到服务器。如果你还不熟悉 FTP 是怎么回事，可以参考这篇指南：[通过 FTP 访问](gameserver-ftpaccess.md)。

![](https://screensaver01.zap-hosting.com/index.php/s/pr5s8ySnpBN7qjC/preview)

正确的插件目录是：```/gXXXXXX/.config/EXILED/Plugins```。只要把下载好的 **.dll** 插件文件上传到这个文件夹就行。上传后应该长这样：  

![](https://screensaver01.zap-hosting.com/index.php/s/MRJHcdGpwSb2agK/preview)

完成这一步，插件就安装好了。最后，打开 **实时控制台**，确认插件已经成功编译并加载。控制台里的确认信息应该像这样：  

![](https://screensaver01.zap-hosting.com/index.php/s/NtN6T5fPif3ngEW/preview)



## 热门插件

还在找适合你服务器的完美插件？浏览我们精心挑选的最热门和强烈推荐插件列表，提升你的游戏体验，让你的服务器更有特色。快来找找灵感，找到最适合你项目的插件吧！

<SearchableItemList items={items} />


## 总结

只要你按照步骤操作，插件应该已经成功安装了。如果还有疑问或需要帮助，别犹豫，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />