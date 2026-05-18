---
id: csgo-plugins
title: "CS:GO：插件安装指南"
description: "了解如何在你的CS:GO服务器上安装Sourcemod插件，通过自定义功能扩展游戏体验 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver-csgo
---

import Button from '@site/src/components/Button';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/csgo-plugins.json';



## 介绍

CS:GO 延续了社区驱动服务器定制的传统。插件让服务器管理员能够扩展游戏玩法，添加便利功能，实现自定义规则，甚至打造全新的游戏模式。

对于CS:GO服务器来说，**Sourcemod** 是最广泛使用的服务器端插件框架。Sourcemod 依赖于 **Metamod:Source**，后者作为基础层让插件能够挂钩游戏引擎。安装这两个组件后，服务器管理员可以轻松管理插件，扩展服务器功能。

<InlineVoucher />



## 安装 Metamod:Source

Metamod:Source 必须先安装，因为 Sourcemod 依赖它。首先从官网下载安装最新版本的 Metamod:Source。下载后在本地解压压缩包。

压缩包内有一个 `addons` 文件夹。通过 [FTP](gameserver-ftpaccess.md) 上传该文件夹到你的 CS:GO 服务器，确保它与游戏目录 `../csgo/` 合并。


上传完成后，重启服务器。打开服务器控制台，执行以下命令确认 Metamod 是否正常运行：

```
meta version
```


如果安装成功，控制台会显示已安装的 Metamod 版本和相关信息。

<Button label="下载 Metamod:Source" link="https://www.metamodsource.net/downloads.php" block />



## 安装 Sourcemod

Metamod:Source 安装完成后，就可以安装 Sourcemod 了。从官网下载安装最新稳定版 Sourcemod 并解压。将解压后的 `addons` 和 `cfg` 文件夹通过 [FTP](gameserver-ftpaccess.md) 上传到 CS:GO 游戏目录 `../csgo/`。上传完成后重启服务器，Sourcemod 会通过 Metamod 自动加载。

打开服务器控制台，运行以下命令确认 Sourcemod 是否正常：

```
sm version
```


如果安装成功，服务器会返回当前 Sourcemod 版本和构建信息。

<Button label="下载 Sourcemod" link="https://www.sourcemod.net/downloads.php" block />



## 安装插件

Sourcemod 插件通常以 `.smx` 文件形式分发。这些编译好的插件文件需要上传到 Sourcemod 的 `plugins` 目录：

```
../csgo/addons/sourcemod/plugins/
```


上传插件后，重启服务器或通过服务器控制台直接加载插件，命令如下：

```
sm plugins load <pluginname>
```


如果插件加载失败，检查 Sourcemod `logs` 目录下的服务器日志，查找错误信息。

部分插件还会附带额外的配置文件，通常放在：

```
../csgo/addons/sourcemod/configs/
```


务必按照插件开发者提供的安装说明操作，确保插件正常运行。



## 热门插件

<SearchableItemList items={items} />



## 总结

只要按照以上步骤操作，你就成功在你的 CS:GO 服务器上安装了 Metamod:Source、Sourcemod 以及你想要的插件。如果有任何疑问或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />