---
id: fivem-mods-installreplace
title: "FiveM：在服务器上安装替换车辆MOD"
description: "了解如何为你的FiveM服务器设置并上传MOD，打造专属游戏体验 → 立即了解更多"
sidebar_label: 安装替换车辆MOD
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 连接FTP
首先，你需要通过FTP连接到你的服务器，可以参考我们的[通过FTP访问](gameserver-ftpaccess.md)指南。

## 准备工作

现在，在“resources”文件夹下创建一个用于存放MOD的文件夹。

:::info
文件夹名称可以随意，只要不包含特殊字符即可。我们示例中用的是“assets”。
:::

接着，在刚创建的“assets”文件夹里新建一个 fxmanifest.lua 文件。

在这个文件里输入以下内容：

```
fx_version 'cerulean'
games { 'gta5' }

```

然后保存并关闭 fxmanifest.lua 文件，后续不再需要修改它。

在你的 assets 文件夹里，再创建一个名为“stream”的文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/yZgpLTTPtpe2sXZ/preview)

## 上传MOD

打开这个 stream 文件夹，你可以通过拖拽的方式上传所有的 ytd 和 yft 文件：

![](https://screensaver01.zap-hosting.com/index.php/s/mxNAFtBHaAjeQYj/preview)

上传完所有MOD后，只需在服务器的 server.cfg 文件中添加你的资源名，server.cfg 文件位于你的 FiveM 服务器的“server-data”文件夹内。

用任意文本编辑器打开，找到“start”条目，在下面添加你的资源：

```
start assets
```

搞定！重启服务器后，你的车辆MOD就能在服务器里使用啦！

<InlineVoucher />