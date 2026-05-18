---
id: rimworldtogether-mods
title: "RimWorld Together：安装模组"
description: "了解如何为你的 RimWorld Together 服务器安装热门模组，实现无缝在线合作游戏体验 → 立即了解更多"
sidebar_label: 安装模组
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/rimworldtogether-mods.json';

## 介绍

RimWorld Together 是一个非常受欢迎的开源多人模组，由 RimWorld 社区全权运营，支持 RimWorld 游戏的在线合作玩法。在本指南中，我们将教你如何在 RimWorld Together 服务器上安装模组。

<InlineVoucher />

## 获取模组

你可以为你的 RimWorld Together 服务器安装各种不同的 RimWorld 模组。

模组分为三种类型：
- **强制模组**：必须安装，客户端必须拥有这些模组，否则无法连接。
- **可选模组**：非必需，客户端即使没有也能连接。
- **禁止模组**：禁止使用的模组，服务器会立即拒绝客户端连接。

在接下来的上传模组部分，你会看到这三种类型的文件夹，模组会根据类型分别放置。

### 核心文件 & DLC

RimWorld Together 支持你轻松下载核心文件和 DLC，这些文件和普通模组一样处理。

你可以直接从 [RimWorld Together GitHub 仓库](https://github.com/RimworldTogether/RimWorld-Together) 下载，特别是下载 **Extras.zip** 文件夹。

### 其他模组

你可以通过网络搜索找到大量 RimWorld 模组。我们强烈推荐使用 [RimWorld 的 Steam 创意工坊](https://steamcommunity.com/app/294100/workshop/) 页面，因为它非常受欢迎，模组数量也更多。

通过 Steam 创意工坊订阅的模组会通过你的 Steam 客户端下载到以下目录：`../steamapps/workshop/content/294100`。

:::tip
如果你没有通过 Steam 拥有 RimWorld，仍然可以用 SteamCMD 下载 Steam 创意工坊的文件和模组。首先从 [Valve 官方网站下载 SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD) 或直接点击 [这里](https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip)。运行 **steamcmd.exe**，等待安装完成。准备好后，在控制台输入 `login anonymous`。

然后你可以通过运行 `workshop_download_item 294100 [workshop_id]` 来下载模组，替换 `[workshop_id]` 为 Steam 创意工坊模组的 ID。模组 ID 可以从 URL 中找到，比如：`/?id=3230195082`。

通过 SteamCMD 下载的模组会放在路径：`../steamapps/workshop/content/294100`。
:::

模组下载完成后，就可以进入下一节，讲解如何上传到你的游戏服务器。

:::note
有些模组肯定和 RimWorld Together 不兼容。你可以查看确认的[不兼容模组列表](https://github.com/RimworldTogether/RimWorld-Together/blob/development/IncompatibilityList.md)。

此外，还有一些模组在 RimWorld Together 上可能无法正常运行，你可能需要自己测试和研究，确保模组能用。
:::

## 上传模组

模组准备好后，先通过 FTP 连接到你的游戏服务器。查看我们的 [FTP 访问指南](gameserver-ftpaccess.md) 学习如何操作。

FTP 客户端连接后，进入以下目录：
```
../rimworld-together/Mods
```

这里你会看到三个不同的文件夹，分别对应不同类型的模组。和前面介绍的模组分类对应。如果还没看过，建议回头看看，确保你知道每个模组该放在哪个文件夹。

接下来，打开你下载的模组文件夹，逐个上传到服务器对应的模组分类文件夹里。

:::note
上传或修改模组前，务必先停止服务器，否则修改可能不会生效。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/3TsB3wYFzoxK3NL/preview)

## 启动服务器

上传完想要的模组后，重新启动服务器。服务器下一次启动时，会加载你添加的所有模组。

恭喜你，成功为你的 RimWorld Together 服务器安装了新模组！

## 热门模组

还在找适合你服务器的完美模组？浏览我们精心挑选的热门和强烈推荐模组列表，提升你的游戏体验，让你的服务器更有特色。快来寻找最适合你项目的模组吧！

<SearchableItemList items={items} />

<InlineVoucher />