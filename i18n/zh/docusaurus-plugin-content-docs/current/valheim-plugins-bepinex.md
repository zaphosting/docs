---
id: valheim-plugins-bepinex
title: "Valheim：服务器上安装插件（BepInEx）"
description: "了解如何通过 BepInEx 插件提升你的 Valheim 游戏体验，解锁更多模组可能 → 立即了解"
sidebar_label: 安装插件（BepInEx）
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/valheim-plugins.json';

## 介绍
BepInEx 是一个非常受欢迎的开源插件和模组框架，允许玩家为一系列传统上不支持官方模组的游戏添加模组。在本指南中，我们将展示如何通过 BepInEx 在 Valheim 上安装插件。

<InlineVoucher />

## BepInEx 游戏版本

要在 Valheim 中使用 **BepInEx** 兼容插件，首先需要在你的服务器上安装 **Valheim Plus** 游戏版本。我们也提供独立的 **Valheim BepInEx** 游戏版本，但推荐安装 Valheim Plus，因为它包含了所有必要内容。你可以通过我们的游戏服务器切换功能轻松完成安装，详细内容请查看我们的[游戏切换](gameserver-gameswitch.md)指南。

:::info
Valheim Plus 也必须在你的本地电脑上安装。这里是 Valheim Plus 的下载链接：[Valheim Plus 下载](https://www.nexusmods.com/valheim/mods/4)。
:::

## 上传插件

首先，找到与你的 BepInEx 兼容且想要添加到服务器的模组。通常在对应的下载页面上可以看到插件的兼容性信息。

:::important
使用的插件必须是 **BepInEx** 兼容的，否则无法正常运行！
:::

准备好模组后，先通过 FTP 连接到你的游戏服务器。想了解如何操作，请阅读我们的[FTP 访问](gameserver-ftpaccess.md)指南。

打开 FTP 客户端后，进入以下目录：
```
../valheim-linux-plus/BepInEx/plugins
```

将你下载的模组文件放入此文件夹。通常这些文件是 `.dll` 格式。

:::note
添加或修改模组前，服务器必须先停止，否则修改可能不会生效。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/d8gTeFiGXTsxHwz/preview)

## 启动服务器

上传完插件后，重新启动你的服务器即可。

:::info
部分插件可能还需要在你的本地客户端安装。请查看插件官网信息确认是否需要客户端安装。
:::

恭喜你，已成功为你的 Valheim 服务器安装了新的 BepInEx 插件！

## 热门插件

还在找适合你服务器的完美插件吗？

浏览我们精心挑选的最受欢迎和强烈推荐的插件列表，提升你的游戏体验，为你的服务器增添完美的点睛之笔。快来寻找最适合你项目的插件吧！

<SearchableItemList items={items} />

<InlineVoucher />