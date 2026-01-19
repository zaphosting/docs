---
id: fivem-serverbanner
title: "FiveM：配置你的专属服务器横幅"
description: "了解如何通过自定义横幅提升你的 FiveM 服务器外观，打造独一无二且专业的形象 → 立即了解"
sidebar_label: 配置服务器横幅
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

自定义服务器横幅是让你的 FiveM 服务器脱颖而出的简单又有效的方式。它能让你的服务器在服务器列表中独树一帜，并在玩家连接时增添专业感。

无论你是用游戏内截图还是设计图形，设置横幅都能帮助你的社区一眼认出你的服务器，留下深刻的第一印象。

<InlineVoucher />



## 配置

要为你的 FiveM 服务器设置自定义横幅，首先需要一张合适的图片。我们建议你在游戏内截取一张能代表你服务器特色的截图。你可以在游戏中按 **F8** 键快速打开控制台，输入 `screenshot` 命令来截取。

截好图后，上传到支持**直链访问**的图床（比如链接以 `.jpg` 或 `.png` 结尾的图片）。确保图片能通过直接 URL 访问。

![img](https://screensaver01.zap-hosting.com/index.php/s/4sCEeKkyGEm3EXd/preview) 

接着，打开你的 txAdmin 面板，进入服务器配置设置，找到 **Server banner URL** 字段，把你的图片直链粘贴进去。保存更改后，当玩家在服务器列表看到你的服务器时，自定义横幅就会显示出来。

```
# 设置可选的服务器信息和连接时的横幅图片 URL。
# 图片尺寸不限，任何横幅尺寸的图片都可以。
sets banner_detail "https://url.to/image.png"
sets banner_connecting "https://url.to/image.png"
```

把示例 URL 替换成你上传图片的直链，保存 CFG 编辑器里的文件，重启服务器以应用更改。



## 总结

现在你的自定义横幅会在服务器列表和连接界面显示，让你的服务器看起来更独特、更专业。如果你有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />