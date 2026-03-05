---
id: csgo-plugins
title: "CS:GO：插件安装指南"
description: "探索不断发展的CS:GO插件和社区项目，提升你的反恐体验 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## 介绍

CS:GO 延续了社区驱动服务器定制的传统。插件让服务器管理员能够扩展游戏玩法，添加便利功能，实现自定义规则，甚至打造全新游戏模式。

随着向 Source 2 引擎的过渡，插件生态发生了重大变化。对于 CS:GO 来说，**CounterStrikeSharp** 已经成为主要且持续维护的服务器端插件开发框架。

<InlineVoucher />



## 安装 Metamod:Source

Metamod 是必须先安装的，因为 CounterStrikeSharp 依赖它。下载 [Metamod:Source 2.x 开发版](https://www.metamodsource.net/downloads.php?branch=dev) 后，解压压缩包。压缩包内包含一个 `addons` 文件夹，该文件夹必须通过 [FTP](gameserver-ftpaccess.md) 直接上传到 CS:GO 游戏目录。

```
../game/csgo/
```

复制文件后，找到 `/game/csgo/` 目录下的 `gameinfo.gi` 文件，用文本编辑器打开。找到包含 `Game_LowViolence csgo_lv` 的那一行，在它下面添加以下内容：

```
Game csgo/addons/metamod
```

<Button label="下载 Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## 安装 CounterStrikeSharp

确认 Metamod 正常运行后，即可安装 CounterStrikeSharp。CounterStrikeSharp 通过其官方 GitHub 仓库发布，提供预编译的发行包。下载包含运行时的 CounterStrikeSharp 版本，解压后将其中的 `addons` 文件夹通过 [FTP](gameserver-ftpaccess.md) 上传到同样的 CS:GO 游戏目录。

```
/game/csgo/
```

请勿手动合并或重命名目录，必须保持压缩包内的目录结构完整。上传完成后重启服务器，启动时 Metamod 会自动加载 CounterStrikeSharp。验证安装是否成功，请打开服务器控制台执行：

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="下载 CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## 安装插件

CounterStrikeSharp 的插件以编译好的 `.dll` 文件形式提供。将这些文件放入 CounterStrikeSharp 安装路径下的 `plugins` 文件夹。

将插件复制到该目录并重启服务器后，CounterStrikeSharp 会自动加载所有可用插件。如果插件加载失败，请查看服务器日志，关注与 CounterStrikeSharp 或插件相关的错误信息。




## 热门插件

<SearchableItemList items={items} />



## 总结

只要按照以上步骤操作，你就成功安装了 Metamod/CounterStrikeSharp 以及你想要的插件。如有任何疑问或需要帮助，欢迎随时联系在线客服，我们每天都在线为你服务！🙂




<InlineVoucher />