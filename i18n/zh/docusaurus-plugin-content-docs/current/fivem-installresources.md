---
id: fivem-installresources
title: "FiveM：资源安装指南"
description: "了解如何通过热门资源扩展你的 FiveM 服务器，适合大型项目如角色扮演服务器 → 立即了解更多"
sidebar_label: 安装资源
services:
  - gameserver-fivem
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/fivem-resources.json';

## 介绍

资源可以用来为你的 FiveM 服务器添加更多功能。如果你打算启动大型项目，比如角色扮演服务器或类似项目，这尤其有用。没有这些额外资源，很多功能是实现不了的。

FiveM 及其社区提供了丰富多样的资源。你可以在 Cfx.re 论坛上找到最受欢迎资源的汇总：https://forum.cfx.re/c/development/releases/7



<InlineVoucher />

## 准备工作

资源的安装是通过 FTP 完成的。你需要一个 FTP 客户端来上传文件到服务器。如果你不熟悉 FTP 的使用，建议先看看我们的 [FTP 访问](gameserver-ftpaccess.md) 指南。

下载的资源通常是压缩包格式，这意味着你需要用解压软件（比如 7Zip、Winrar 或 WinZip）解压。解压后的资源文件夹至少应该包含以下文件：`__resource.lua` 或 `fxmanifest.lua`，以及相关的脚本文件。

:::info
如果这些文件没有直接出现在文件夹里，可能它们在资源文件夹的子目录中。
:::

## 安装步骤

### 上传文件

你现在需要将之前解压的文件作为一个独立文件夹上传（如果还没这样做的话）。你的文件夹必须上传到服务器的 `resources` 目录。目录结构通常是：`/gXXXXXX/fivem/YOUR_TEMPLATE/resources`

![img](https://screensaver01.zap-hosting.com/index.php/s/9ZEX32BSrwGDjEc/preview)



某些资源会与数据库配合使用，因此通常会包含需要导入数据库的 SQL 文件。如果有这类文件，请查看我们的 [SQL 文件导入](fivem-sql-file-import.md) 指南，了解具体操作。

### 激活资源

为了确保服务器启动时加载你安装的资源，必须先在服务器的 `server.cfg` 文件中激活它。激活方式是使用 `start [资源名]` 命令。

举个例子，如果你上传的资源文件夹名是 `eup-ui`，那么配置文件中的启动命令应该是：
```
start eup-ui
```

你可以通过 txAdmin 界面的 CFG 编辑器访问并编辑你的 `server.cfg` 文件。

:::info
请确保你创建的文件夹名称和启动命令中的名称完全一致，包括大小写。
:::


## 热门资源推荐

还在找适合你服务器的完美资源吗？浏览我们精心挑选的最受欢迎且强烈推荐的资源列表，提升你的游戏体验，为你的服务器增添亮点。快来获取灵感，找到最适合你项目的资源吧！

<SearchableItemList items={items} />


## 总结
最后，重启你的服务器。下次服务器完全启动时，安装的资源就会被加载。恭喜你，成功将资源安装到你的 FiveM 游戏服务器中！如果有任何问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />