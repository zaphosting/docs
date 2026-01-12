---
id: ark-savegame
title: ARK 生存进化 导入自己的存档文件
description: "了解如何使用官方或个人备份存档恢复你的 Ark: Survival Evolved 服务器，实现无缝游戏体验 → 立即了解更多"
sidebar_label: 导入存档文件
services:
  - gameserver-ark
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

想把自己的存档或者官方备份存档导入到你的 Ark: Survival Evolved 服务器吗？别找了，这篇指南会教你如何把常规的个人存档或官方备份存档导入到你的新服务器。

<YouTube videoId="lvIIVOhAUjo" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/riyYaWCc4562mTS/preview" title="如何用官方服务器备份获取 ARK:SE 服务器" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定一切。不管你是赶时间还是喜欢用最酷的方式吸收信息！"/>

<InlineVoucher />

## 准备你的存档文件

### 官方备份存档文件

你需要先下载你的官方服务器存档文件。你可以直接从 [ARK 官网](https://survivetheark.com/index.php?/server-backups/) 下载，或者用 [社区开发的工具](https://arkutils.netlify.app/tools/officialdownload) 来更方便地搜索你的服务器。

:::note
如果你是 Xbox 或 Playstation 玩家，很遗憾你无法下载官方服务器文件。开发者只允许 Steam 和 Epic 平台的世界存档自由下载。
:::

目前有两个快照，分别是 2023 年 8 月 25 日和 2023 年 9 月 30 日。你需要找到你的服务器并下载对应的存档文件。

:::note
使用官方备份存档只支持 **ARK - SE（官方备份存档兼容）** 这款游戏服务器版本。如果你用的是其他版本，可以在游戏服务器的网页面板的 **games** 版块里切换版本，或者参考我们的 [游戏切换指南](gameserver-gameswitch.md)。
  
![](https://screensaver01.zap-hosting.com/index.php/s/Kwjyx4sDSHLTFZJ/preview)
:::

### 自己的常规存档文件

如果你想导入自己的非官方存档，需要准备存档文件夹里的所有文件。它们通常保存在 **SavedArks** 文件夹里，路径是 **Shootergame/Saved**。找到这些文件，保存好，准备导入。

:::note
这时候建议使用普通的 **Ark: SE** 游戏服务器版本（不带官方备份存档支持），因为你导入的是普通存档，不是官方备份。

![](https://screensaver01.zap-hosting.com/index.php/s/FCMPjApJBjZxdR2/preview)
:::

## 上传存档到服务器

下载好 `.zip` 存档文件后，用 7zip 或 Winrar 解压。无论是哪个游戏服务器版本，上传流程都是一样的。

接下来你需要通过 FTP 访问你的服务器，把存档文件上传上去。如果你需要帮助登录 FTP 或传输文件，可以参考我们的 [FTP 访问指南](gameserver-ftpaccess.md)。

打开 FTP 客户端后，进入游戏服务器的以下子目录：
```
/gxxxxx/ark/ShooterGame/Saved/SavedArks
```

![](https://screensaver01.zap-hosting.com/index.php/s/YXFcNPMgtbmRJJj/preview)

删除当前存档的所有文件（如果你想以后继续玩当前存档，记得先备份）。然后把刚解压的所有文件拖进这个目录（包括 .ark、.arktribe 和 .arkprofile 文件）。上传可能需要点时间，取决于存档文件的大小，请耐心等待。

上传完成后，重启服务器，新的存档文件就会被加载。恭喜你，官方备份存档已经成功上传到你的 Ark: Survival Evolved 服务器啦！

<InlineVoucher />