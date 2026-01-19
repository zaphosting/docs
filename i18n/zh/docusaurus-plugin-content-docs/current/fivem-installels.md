---
id: fivem-installels
title: "FiveM：在你的服务器上安装 ELS"
description: "了解如何设置并启用带有车载改装的 ELS-FiveM，提升你的服务器游戏体验 → 立即了解"
sidebar_label: 安装 ELS
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 连接到 FTP

要安装资源，首先需要配置好[FTP 访问权限](gameserver-ftpaccess.md)。

## 准备工作

首先下载最新的 [ELS-FiveM 版本](https://github.com/MrDaGree/ELS-FiveM/releases/latest)，在“Assets”里可以找到。

下载完成后，解压文件并打开“ELS-FiveM”文件夹。

## 配置

接下来配置 ELS-FiveM，复制一份 `vcf.default.lua`，重命名为 `vcf.lua`。

:::info
注意：不要删除原始的 `vcf.default.lua` 文件。
:::

其他设置也可以在“config.lua”里调整，不过我们这里保持默认即可。

## 上传资源

通过拖拽方式将文件上传到服务器的“resources”文件夹，就能安装 ELS-FiveM。

上传完成后，打开服务器数据文件夹里的 server.cfg：

![](https://screensaver01.zap-hosting.com/index.php/s/6AfsTS6wyy9REFB/preview)

在已有的资源启动条目中，添加 ELS-FiveM 的启动项。

然后重启服务器，游戏内就能使用 ELS-FiveM 了！

## 车载改装配置

要给 ELS-FiveM 添加新的车载改装，首先需要 ELS 配置文件，通常在下载的车载改装文件夹里能找到。一般叫 `autoname.xml`，我们这里是 `scpdvic.xml`。

通过 FTP 上传到 ELS-FiveM 文件夹里的“vcf”文件夹。

上传完成后，打开 ELS-FiveM 文件夹里的 `vcf.lua` 文件。

:::info
确保前一行代码末尾总是以逗号结尾。
:::

搞定！重启服务器后，你的车载改装就支持 ELS 功能并能正常使用啦。

<InlineVoucher />