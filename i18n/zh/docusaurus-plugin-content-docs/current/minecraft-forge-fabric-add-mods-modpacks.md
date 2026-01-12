---
id: minecraft-forge-fabric-add-mods-modpacks
title: "Minecraft：安装 Mods / Modpacks"
description: "了解如何下载并安装 Minecraft Mods 和 Modpacks，提升你的服务器游戏体验 → 立即了解更多"
sidebar_label: 安装 Mods / Modpacks
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import mods from '@site/data/lists/minecraft-mods.json';
import modpacks from '@site/data/lists/minecraft-modpacks.json';


## 介绍

你将学会如何在你的 Minecraft 服务器上下载并安装 Mod / Modpack。

<InlineVoucher />

## 准备工作

- 一台游戏服务器（[这里可以购买](https://zap-hosting.com/en/gameserver-hosting/)）
- 一个 FTP 客户端（例如 WinSCP、FileZilla）
- 通过 FTP 连接你的服务器：（[FTP 访问指南](gameserver-ftpaccess.md)）



## 查找并下载 Mods 或 Modpacks

网上有很多地方可以找到 Mods / Modpacks。最大的 Mods 和 Modpacks 平台是 CurseForge。几乎 99% 的 Minecraft Mods / Modpacks 都能在那里找到，并且只需几次点击即可下载。本指南将重点介绍如何使用 CurseForge。你可以在[这里](https://www.curseforge.com/minecraft/mc-mods)搜索 Mods，在[这里](https://curseforge.com/minecraft/modpacks)搜索 Modpacks。

:::note
Mods 只兼容特定版本的 Modloader。你需要查看 Mod 页面确认所需版本。如果安装多个 Mods，确保它们使用的是同一版本。此外，Forge Mods 与 Fabric Mods 不兼容，反之亦然。
:::

进入你选择的 Mod / Modpack 页面，点击“Files”标签。

![](https://screensaver01.zap-hosting.com/index.php/s/abryep5KdQcqpAi/preview)


找到你想要的版本，点击进入“File Details”部分。

:::tip
你可以通过“Files”标签顶部的下拉菜单筛选版本和 Modloader。

![](https://screensaver01.zap-hosting.com/index.php/s/HoJYzW7bkC4Z6oL/preview)

:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="Mods" label="Mods 专用" default>
在“File Details”部分，点击“Download”按钮。将文件保存到某个位置，后面会用到。

![](https://screensaver01.zap-hosting.com/index.php/s/7ZcEHsmmqZWdZB5/preview)

</TabItem>

<TabItem value="Modpacks" label="Modpacks 专用">
在“File Details”部分，向下滚动到“Additional Files”，点击右侧的三个点，选择“Download file”。将文件保存到某个位置，后面会用到。

![](https://screensaver01.zap-hosting.com/index.php/s/YzH5Gz4w3yJZjx3/preview)

</TabItem>
</Tabs>

## 第 2 步 - 解压下载文件（仅限 Modpacks）

在电脑上找到下载的文件，右键点击，选择“全部解压...”。选择一个文件夹来存放解压后的文件，记住路径！

![](https://screensaver01.zap-hosting.com/index.php/s/y9SWDpX2HYgekbQ/preview)

![解压文件示例（德语版）](https://screensaver01.zap-hosting.com/index.php/s/iE9XFMmrjj7b7ST/preview)

解压后的文件夹应包含 mods、config 和 defaultconfig 文件夹。可能还会有其他文件夹。

:::note
某些 Modpacks 需要额外步骤，比如 AllOfFabric6。对于 AllOfFabric6，你需要运行 "startserver.bat"（Windows）或 "startserver.sh"（Linux / MacOS）来生成上述文件夹。该脚本会帮你下载这些文件夹。但大多数情况下，文件夹会直接存在。如果解压文件夹里没有脚本，建议上网搜索如何获取该 Modpack 的服务器文件。
:::


## 第 3 步 - 安装正确的服务器版本

在 Zap-Hosting 控制面板，选择你的游戏服务器，进入设置中的“Games”选项。

![](https://screensaver01.zap-hosting.com/index.php/s/Ne5B9CnHrbwgmfW/preview)

展开“Available Games”部分，搜索你的 Modloader（Forge 用于 Forge Mods / Modpacks，Fabric 用于 Fabric Mods / Modpacks）。点击绿色下载按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/dnBCddmXGAMpMj8/preview)


点击“Game version”下拉菜单，选择与你的 Mod / Modpack 版本对应的 Minecraft 版本。Forge 允许你选择最新版本或推荐版本。建议先试最新版本，如果服务器运行不正常，再切换到推荐版本。点击“Accept and Install”按钮。

![](https://screensaver01.zap-hosting.com/index.php/s/gCdcwLzc4Hxptqp/preview)


:::tip
如果不确定需要哪个 Minecraft 版本，回到 CurseForge 的“File Details”页面。游戏手柄图标旁边会显示版本信息。

![](https://screensaver01.zap-hosting.com/index.php/s/9TsCBRP9PGQL2fC/preview)

:::

安装完成后，你会看到游戏名称旁边出现蓝色按钮（例如 Forge、Fabric）。点击该按钮激活游戏。

![](https://screensaver01.zap-hosting.com/index.php/s/YzzBzSJjnsaqKS2/preview)
![激活游戏示例（德语版）](https://screensaver01.zap-hosting.com/index.php/s/GiFsA7JmGPd4LCB/preview)


## 第 4 步 - 通过 FTP 连接并上传 Mods / Modpack

使用你选择的 FTP 客户端连接服务器。确保服务器处于停止状态。

### 上传 Mod

连接成功后，进入你的游戏文件夹（例如 minecraft-forge、minecraft-fabric）。打开 mods 文件夹，将下载好的 Mod 文件直接拖拽进去。

![](https://screensaver01.zap-hosting.com/index.php/s/Zwm9SYdgK6MKBdz/preview)

上传完成后即可启动服务器。

### 上传 Modpack

连接成功后，进入你的游戏文件夹（例如 minecraft-forge、minecraft-fabric）。删除服务器上的 world、mods、config 和 defaultconfig 文件夹。然后将之前解压的文件夹中除 jre、libraries 以外的所有文件夹上传到服务器目录。

![](https://screensaver01.zap-hosting.com/index.php/s/PEyqrSES4xPGaFz/preview)

上传完成后即可启动服务器。



## 热门 Mods

还在找适合你服务器的完美 Mods 吗？浏览我们精心挑选的最受欢迎和高度推荐的 Mods 列表，提升你的游戏体验，为你的服务器增添完美的点睛之笔。快来寻找最适合你项目的 Mods 吧！

<SearchableItemList items={mods} />

## 热门 Modpacks

还在找适合你服务器的完美 Modpacks 吗？浏览我们精心挑选的最受欢迎和高度推荐的 Modpacks 列表，提升你的游戏体验，为你的服务器增添完美的点睛之笔。快来寻找最适合你项目的 Modpacks 吧！

<SearchableItemList items={modpacks} />

<InlineVoucher />