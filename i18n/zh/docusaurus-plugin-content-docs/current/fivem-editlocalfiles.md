---
id: fivem-editlocalfiles
title: "FiveM：本地化文件（语言变量）"
description: "了解如何自定义并为你的资源添加更多语言，实现个性化体验 → 立即了解更多"
sidebar_label: 本地化文件（语言）
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## 介绍

想要更改资源的语言变量，或者为资源添加尚不存在的语言吗？本地化文件让你可以调整所需资源的语言变量。

<InlineVoucher />



## 找到本地化文件

本地化文件需要通过 FTP 客户端进行编辑。如果你是 FTP 新手，建议先阅读我们的 [FTP 访问](gameserver-ftpaccess.md) 指南。连接成功后，进入你想编辑的资源的 ESX 资源目录，打开资源目录下的 locales 文件夹。

![img](https://screensaver01.zap-hosting.com/index.php/s/wZmADsGGNzEseH4/download)

在 locales 文件夹内，你会看到该资源所有现有的语言文件。你可以直接编辑已有文件，或者复制一个已有文件并重命名为新语言，然后进行编辑。

![img](https://screensaver01.zap-hosting.com/index.php/s/5GxWeFRZSxRDn3w/preview)

## 编辑本地化文件

打开本地化文件后，你可以调整各个语言变量的内容。语言变量的内容位于等号后、引号内。根据你的需求修改内容，最后保存更改。

![img](https://screensaver01.zap-hosting.com/index.php/s/FBDP2rBKabx3NEF/preview)



## 设置语言

使用的语言可以通过资源目录下的配置文件 `config.lua` 来定义。只需调整 `Config.Locale = GetConvar('esx:locale', 'en')` 中的值即可。

![img](https://screensaver01.zap-hosting.com/index.php/s/b3HkR9Qez5Pb7re/preview)



## 总结

恭喜你！只要按照步骤操作，你就成功编辑了资源的本地化文件。如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />