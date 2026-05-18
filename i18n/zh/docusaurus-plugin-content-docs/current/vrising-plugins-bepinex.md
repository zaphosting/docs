---
id: vrising-plugins-bepinex
title: "V Rising：服务器端安装插件（BepInEx）"
description: "了解如何通过 BepInEx 模组提升你的 V Rising 游戏体验，打造更个性化的服务器 → 立即了解"
sidebar_label: 安装插件（BepInEx）
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';



:::warning 已归档指南
本文档已归档。文档归档通常是因为内容不再适用、错误或过时。归档原因如下：

**原因**：V Rising 的 BepInEx 版本已不再可用，因此已从商店下架。 
::::

## 介绍
BepInEx 是一个非常受欢迎的开源插件和模组框架，允许玩家为一系列原本不支持官方模组的游戏添加模组。在本指南中，我们将演示如何通过 BepInEx 在 V Rising 服务器上安装插件。
<InlineVoucher />

## BepInEx 游戏版本

要在 V Rising 中使用 **BepInEx** 兼容的插件，首先需要在你的服务器上安装 **V Rising BepInEx** 游戏版本。你可以通过我们的游戏服务器切换功能轻松完成，详细操作请参考我们的[游戏切换](gameserver-gameswitch.md)指南。

## 上传插件

首先，找到与你的 BepInEx 兼容且想添加到服务器的模组。通常在模组的下载页面会标明兼容性信息。

:::important
插件必须是 **BepInEx** 兼容的，否则无法正常运行！
:::

准备好模组后，先通过 FTP 连接到你的游戏服务器。具体操作请参考我们的[FTP 访问](gameserver-ftpaccess.md)指南。

连接成功后，进入以下目录：
```
../vrising/BepInEx/plugins
```

将你下载的模组文件放入此文件夹，通常是 `.dll` 格式的文件。这里以上传一个用于创建指令的框架模组为例。

:::note
添加或修改模组前，务必先停止服务器，否则修改可能不会生效。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/9xkrPmPMp7YZYWQ/preview)

## 启动服务器

上传完插件后，重新启动服务器即可。

:::info
部分插件可能还需要在你的客户端（PC）上安装。请查看插件官网信息确认是否需要客户端安装。
:::

你已成功为你的 V Rising 游戏服务器安装了新的 BepInEx 插件！

<InlineVoucher />