---
id: 7d2d-mods
title: "7 Days to Die：安装 Mods"
description: "了解如何用热门 Mods 自定义你的服务器，提升游戏体验，打造独一无二的玩法 → 立即了解"
sidebar_label: 安装 Mods
services:
  - gameserver-7d2d
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

通过 Mods，你可以更自由地定制你的服务器。接下来，我们会告诉你在哪里能找到最受欢迎的服务器 Mods，以及如何安装它们。自 Alpha 17 Experimental 版本起，引入了 Modlets 的概念。Modlets 是一些较小的 Mods，它们不会覆盖原版的 XML 文件，而是直接从 mods 文件夹加载。

![](https://screensaver01.zap-hosting.com/index.php/s/McQLetfwmEMbo6N/preview)

<InlineVoucher />

## 准备工作

首先，你需要下载想要安装到服务器上的 Mods。你可以在 [7daystodiemods.com](https://7daystodiemods.com/) 找到海量 Mods，超过1000个，而且还在不断更新。如果你下载了一个 Mod，里面应该包含以下文件结构：

```
  Config/
  ItemIcons/
  Resources/
  ModInfo.xml
```

## 安装步骤

下载好想要的 Mods 后，就可以开始安装了。Mods 的安装是通过 FTP 完成的。你需要一个 FTP 客户端来上传文件到你的服务器。如果你还不清楚 FTP 是什么，或者怎么用，可以先看看这篇指南：[通过 FTP 访问](gameserver-ftpaccess.md)

![](https://screensaver01.zap-hosting.com/index.php/s/9Q86iArComw55cH/preview)

在 ``/gXXXXX4/7dtd-linux-exp/`` 目录下，你需要新建一个名为 **Mods** 的文件夹。右键点击，选择 **创建目录** 即可。

![](https://screensaver01.zap-hosting.com/index.php/s/RE2n6WodsWq38Pr/preview)

然后，把 Mod 的文件上传到这个 Mods 文件夹里：

![](https://screensaver01.zap-hosting.com/index.php/s/WjNY5tMnAt7jfga/preview)

这样，Mod 的安装就完成啦。下次启动服务器时，Mods 会自动加载。

<InlineVoucher />