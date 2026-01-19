---
id: fivem-mods-installaddon
title: "FiveM：在服务器上安装附加车模"
description: "了解如何轻松下载并转换FiveM车模，提升你的游戏体验，附详细步骤指导 → 立即了解"
sidebar_label: 安装附加车模
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## 通过FTP连接

首先，你需要通过FTP连接到你的服务器，可以使用我们的[FTP访问指南](gameserver-ftpaccess.md)。

## 准备工作

本教程将使用[rpf2fivem](https://github.com/Avenze/rpf2fivem-repository/releases/latest)工具，这大大简化了流程。我们需要从“Releases”版块下载“NConvert.zip”和“rpf2fivem.zip”两个压缩包：

![](https://screensaver01.zap-hosting.com/index.php/s/7o2JCm3SdMz5Gga/preview)

接着，将rpf2fivem解压到一个空文件夹中：

![](https://screensaver01.zap-hosting.com/index.php/s/czBs5E82SpPa2Px/preview)

然后打开NConvert压缩包，将里面的“NConvert”文件夹复制到同一个文件夹里：

![](https://screensaver01.zap-hosting.com/index.php/s/8qNGTCMLjgZNTbK/preview)

现在就可以打开 `rpf2fivem.exe` 了！


## 下载车模

要通过rpf2fivem安装车模，我们需要添加直接下载链接，比如来自 gta5-mods.com。只需选择你想要的车模，点击“Download”下载。

然后右键点击下载按钮，选择“复制链接地址”，将链接粘贴到rpf2fivem左上角的输入框中：

![](https://screensaver01.zap-hosting.com/index.php/s/T6ksM4qmfodiy8s/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/cdNmSztB69TN74T/preview)

这里你可以输入自定义的资源名，然后点击“Add to queue”添加到下载队列。

如果要下载更多车模，可以用同样的方法继续添加，支持同时安装多个车模：

## 转换车模

当车模列表准备好后，直接点击“Start”按钮开始转换。

:::info
注意：务必勾选“compress/downsize textures”，这样可以避免FiveM中车模出现贴图错误。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/BrFZWJkMaryLrzg/preview)

现在车模已经下载并转换成FiveM可用格式。

## 上传资源

rpf2fivem完成后，车模资源会保存在“rpf2fivem”文件夹中：

![](https://screensaver01.zap-hosting.com/index.php/s/yPCK5nwFa9Xscif/preview)

接下来，你可以通过[安装资源](fivem-installresources.md)功能上传这些文件。rpf2fivem文件夹内还会生成一个 `servercfg.txt`，里面包含了直接添加车模到server.cfg的配置条目，直接复制粘贴即可。

搞定！车模现在已经安装到你的服务器上，重启服务器后即可使用。

<InlineVoucher />