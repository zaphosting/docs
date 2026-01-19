---
id: cs2-plugins
title: "CS2：插件安装指南"
description: "探索不断发展的 CS2 插件和社区项目，提升你的反恐体验 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver-cs2
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/cs2-plugins.json';



## 介绍

反恐精英 2 延续了社区驱动服务器定制的传统。插件让服务器管理员可以扩展玩法，增加便利功能，实现自定义规则，甚至打造全新游戏模式。

随着转向 Source 2 引擎，插件生态发生了重大变化。对于 CS2，**CounterStrikeSharp** 已经成为服务器端插件开发的主要且持续维护的框架。

<InlineVoucher />



## 安装 Metamod:Source

Metamod 是必须先安装的，因为 CounterStrikeSharp 依赖它。下载 [Metamod:Source 2.x 开发版](https://www.metamodsource.net/downloads.php?branch=dev) 后，解压压缩包。压缩包内有一个 `addons` 文件夹，需要通过 [FTP](gameserver-ftpaccess.md) 直接上传到 CS2 游戏目录。

```
../game/csgo/
```

复制文件后，找到 `/game/csgo/` 目录下的 `gameinfo.gi` 文件，用文本编辑器打开。找到包含 `Game_LowViolence csgo_lv` 的那一行，在它下面添加：

```
Game csgo/addons/metamod
```

<Button label="下载 Metamod:Source" link="https://www.metamodsource.net/downloads.php?branch=dev" block />





## 安装 CounterStrikeSharp

确认 Metamod 正常运行后，就可以安装 CounterStrikeSharp 了。CounterStrikeSharp 通过官方 GitHub 仓库发布，提供预编译的发行包。下载包含运行时的 CounterStrikeSharp 版本，解压后将其中的 `addons` 文件夹通过 [FTP](gameserver-ftpaccess.md) 上传到同样的 CS2 游戏目录。

```
/game/csgo/
```

不要手动合并或重命名文件夹，保持压缩包内的目录结构完整。上传完成后重启服务器，启动时 Metamod 会自动加载 CounterStrikeSharp。验证安装是否成功，在服务器控制台输入：

```
meta list
Listing 1 plugin:
  [01] CounterStrikeSharp (0.1.0) by Roflmuffin
```

<Button label="下载 CounterStrikeSharp" link="https://github.com/roflmuffin/CounterStrikeSharp/releases/tag/v1.0.354" block />



## 安装插件

CounterStrikeSharp 的插件以编译好的 `.dll` 文件形式提供。将这些文件放入 CounterStrikeSharp 安装路径下的 `plugins` 文件夹。

复制插件到该目录后重启服务器，CounterStrikeSharp 会自动加载所有可用插件。如果插件加载失败，请查看服务器日志，关注与 CounterStrikeSharp 或插件相关的错误信息。




## 热门插件

<SearchableItemList items={items} />



## 总结

只要按照步骤操作，你就成功安装了 Metamod/CounterStrikeSharp 以及你想要的插件。如果有任何疑问或需要帮助，随时联系我们的客服团队，我们每天都在线为你服务！🙂




<InlineVoucher />