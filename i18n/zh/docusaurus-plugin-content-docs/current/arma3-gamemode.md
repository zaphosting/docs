---
id: arma3-gamemode
title: "Arma 3：更换游戏模式"
description: "了解如何在你的 Arma 3 服务器上设置和加载游戏模式，打造专属的游戏体验 → 立即了解"
sidebar_label: 更换游戏模式
services:
  - gameserver-arma3
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 设置游戏模式

想要更换 Arma 3 服务器的游戏模式，你需要上传对应游戏模式的任务文件到服务器。

我们目前提供以下任务文件，无需你自己上传：

- Arma 3 Wasteland

这些文件已经放在你的 **mpmissions** 目录里了。

<InlineVoucher />

## 上传任务文件

上传任务文件前，你需要先通过 FTP 连接到你的服务器：[通过 FTP 访问](gameserver-ftpaccess.md)。  
然后将对应的任务文件上传到你的 **mpmissions** 目录，路径一般是 **/gxxxxxx/arma3/**。  
这里以上传游戏模式 **King of the Hill** 为例。

![](https://screensaver01.zap-hosting.com/index.php/s/rDS7DsEfQskZ9Y3/preview)


## 在服务器上加载任务文件

要在服务器上加载任务文件，进入你的 Arma 3 服务器面板，点击左侧菜单的 **Configs** 标签：

![](https://screensaver01.zap-hosting.com/index.php/s/dxDWHiFJy5e4qYq/preview)

找到并编辑 **server.cfg** 文件，输入你的任务文件名，如图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/7JQED8wC9WGBdYB/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/7jtRK3YRD7wWiij/preview)

完成后点击 **保存**，然后启动服务器，新任务文件就会被加载。

<InlineVoucher />