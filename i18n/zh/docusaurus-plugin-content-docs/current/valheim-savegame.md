---
id: valheim-savegame
title: "Valheim：服务器上管理存档"
description: "了解如何使用存档管理器高效管理、下载和恢复你的Valheim存档 → 立即了解更多"
sidebar_label: 管理存档
services:
  - gameserver-valheim
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 下载存档

:::info
注意：下载存档前必须先停止服务器，以保存当前存档。停止服务器后，刷新页面一次，存档才会显示出来。
:::

你可以通过网页界面中的`存档管理器`下载存档：

![](https://screensaver01.zap-hosting.com/index.php/s/FryL7EXmEYBFBXD/preview)

点击绿色的“下载”按钮即可轻松下载存档：

![](https://screensaver01.zap-hosting.com/index.php/s/2o2gnQ3GKpwc22w/preview)

:::info
注意，你需要同时下载 `.db` **和** `.fwl` 两个文件。
:::

搞定！现在你可以用这个备份做其他用途，或者以后再上传恢复。

## 上传并激活存档

要上传自己的存档，先打开存档管理器。

这里可以通过拖拽上传自己的存档，上传成功后界面应该是这样：

![](https://screensaver01.zap-hosting.com/index.php/s/H2RJSyMGeiojfxD/preview)

:::info
注意，存档文件名必须和游戏创建时的名字保持一致。
:::

我们这边备份文件名是 `380622.fwl` 和 `380622.db`。

接着在上方的`存档（世界）`里输入备份的名字：

![](https://screensaver01.zap-hosting.com/index.php/s/Ggrys4xKjDm7inz/preview)

在`ZAP备份`里找到你的存档：

![](https://screensaver01.zap-hosting.com/index.php/s/beRMYmE4CicDNsz/preview)

然后分别点击两个文件旁边的黄色“恢复”按钮，确认操作，存档就会被加载。

加载完成后，右下角会弹出提示：

![](https://screensaver01.zap-hosting.com/index.php/s/Zs9F4rNRen4QMcs/preview)

现在可以启动服务器了，上传的存档会在服务器上生效。

## 自动保存

遗憾的是，Valheim目前不支持自动保存。要保存游戏进度，必须停止服务器。你可以用网页界面里的重启计划器，设置服务器在特定时间自动重启：

![](https://screensaver01.zap-hosting.com/index.php/s/gTp5yJDQyHKX7eF/preview)

这里可以轻松添加每日或每周的重启时间：

![](https://screensaver01.zap-hosting.com/index.php/s/nyqbMzjNL78qz9K/preview)

保存重启计划后，还能添加多个每日或每周重启时间。

![](https://screensaver01.zap-hosting.com/index.php/s/BddatyGLAZZWnCA/preview)

搞定！服务器会在设定时间自动重启，重启时存档会被保存。

<InlineVoucher />