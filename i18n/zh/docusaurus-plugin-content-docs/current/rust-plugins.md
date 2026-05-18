---
id: rust-plugins
title: "Rust：插件安装指南"
description: "了解如何通过热门插件提升你的Rust服务器，实现个性化和更棒的游戏体验 → 立即了解"
sidebar_label: 安装插件
services:
  - gameserver-rust
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rust-plugins.json';

## 介绍

插件能让你的服务器功能更强大，个性化更突出。接下来，我们会告诉你在哪里找到最常用的插件，以及如何安装它们。

<InlineVoucher />


## 准备工作

首先，你需要下载想要安装到服务器上的插件。大量插件可以在 [umod.org（前身是 OXIDE）](https://umod.org/plugins) 找到。下载后你会得到一个 `.cs` 文件。

![](https://screensaver01.zap-hosting.com/index.php/s/BrQxNHwZqdpNGsp/preview)



## 安装步骤

插件下载完成后，就可以开始安装了。安装是通过 **FTP** 完成的，所以你需要一个FTP客户端来上传文件到服务器。如果你还不熟悉FTP及其使用方法，可以参考我们的 [FTP访问指南](gameserver-ftpaccess.md)。

插件的正确目录是：`/gXXXXXX/rust-oxide/oxide/plugins`。只需将下载好的 `.cs` 插件文件上传到这个文件夹。上传后目录结构大致如下：  


![img](https://screensaver01.zap-hosting.com/index.php/s/eE5gdLg4Na5nCKM/preview)

不需要做其他操作，安装就完成了。之后你可以在实时控制台查看插件是否成功编译并加载。输出信息应该类似这样：

```
AdminAutoTeams and AdminLogger were compiled successfully in 0ms
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)

Loaded plugin Admin Logger v2.3.4 by AK
(Filename: ./Runtime/Export/Debug/Debug.bindings.h Line: 35)
```



## 热门插件推荐

还在找适合你服务器的完美插件吗？

浏览我们精心挑选的最受欢迎和强烈推荐的插件列表，提升你的游戏体验，让你的服务器更具特色。快来获取灵感，找到最适合你项目的插件吧！

<SearchableItemList items={items} />


## 总结

只要你按照步骤操作，插件就应该成功安装了。如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />