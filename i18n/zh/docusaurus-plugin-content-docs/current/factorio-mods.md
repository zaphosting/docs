---
id: factorio-mods
title: "Factorio：在你的 Factorio 服务器上安装 Mod/DLC"
description: "了解如何通过启用 DLC 和添加 Mod 来提升你的 Factorio 游戏体验 → 立即了解更多"
sidebar_label: 安装 Mod/DLC
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';
import SearchableItemList from '@site/src/components/SearchableItemList/SearchableItemList';
import items from '@site/data/lists/factorio-mods.json';

## 介绍

Factorio 原生支持 Mod，允许你轻松为游戏和服务器添加各种 Mod，同时还能使用购买的游戏 DLC。本指南将带你了解如何启用 DLC 以及如何为客户端和 Factorio 服务器安装 Mod。

<InlineVoucher />

## 准备工作

你可以访问 [官方 Factorio Mod 网站](https://mods.factorio.com/) 浏览 Mod。在这里，你能找到社区制作的海量免费 Mod，涵盖各种类别。

:::tip
确保你浏览和下载的 Mod 支持你 Factorio 服务器的版本。
:::

## 启用 DLC

随着 Factorio 2.0 更新，首个 DLC “太空时代（Space Age）” 正式推出。为此，网页面板新增了一个配置选项，允许你切换是否激活该 DLC。

<YouTube videoId="i9CuAsCxUsk" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/BRa5saY3L76xe5F/preview" title="激活 Factorio 太空时代 DLC" description="想通过实际操作更好地理解？我们帮你搞定！快来看看我们的视频，带你一步步了解。无论你是赶时间还是喜欢用最有趣的方式吸收信息！"/>

打开你的产品网页面板，进入 **设置** 部分。向下滚动找到默认已启用的 **太空时代 DLC** 选项。

![](https://screensaver01.zap-hosting.com/index.php/s/T5G5GrEzwoxM3Xk/preview)

切换该功能，并点击页面底部绿色的 **保存** 按钮。恭喜，你已成功启用 Factorio DLC。

## 添加 & 上传 Mod

下载好你想要的 Mod 后，需要通过 FTP 上传到你的 Factorio 服务器。请参考我们的 [FTP 访问指南](gameserver-ftpaccess.md) 获取连接服务器的详细帮助。

:::note
添加或编辑 Mod 前，务必先停止服务器，否则修改可能不会生效。
:::

准备好后，进入以下目录，上传你下载的 `.zip` 格式 Mod 文件。

```
../factorio/saves/mods
```

![](https://screensaver01.zap-hosting.com/index.php/s/APFEnmg29jBCFKn/preview)

:::tip
Mod 需要在客户端和服务器之间保持同步。Factorio 让这件事超简单：当你调整 Mod 后首次加入服务器，游戏会自动提示你同步 Mod。
:::

最后，重启服务器，Mod 就会自动激活并安装到你的 Factorio 服务器上。如果遇到服务器自动关闭等错误，请在网页面板的 **信息->事件日志** 查看错误详情。通常是版本不匹配导致的问题。

## 热门 Mod

还在找适合你服务器的完美 Mod 吗？浏览我们精心挑选的热门和高评价 Mod 列表，提升你的游戏体验，让你的服务器更出彩。快来找灵感，找到最适合你项目的扩展吧！

<SearchableItemList items={items} />

## 结语

恭喜你，已成功为你的 Factorio 服务器安装 Mod。如有任何疑问或需要帮助，随时联系我们的支持团队，我们每天在线为你服务！🙂

<InlineVoucher />