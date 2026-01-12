---
id: minecraft-custom-seed
title: "Minecraft：自定义世界种子"
description: "了解如何通过设置自定义种子来创造独一无二的Minecraft世界，开启全新冒险和世界生成 → 立即了解更多"
sidebar_label: 自定义世界种子
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Minecraft中的种子是由数字或字母组成的特定代码，用来决定你的游戏世界如何生成。它决定了地形、生物群系、建筑和资源的分布。使用相同的种子、相同的游戏版本和设置，总是会生成相同的世界布局，这让你可以轻松地与他人分享独特的世界。

请注意，已经存在的世界无法更改种子。种子只影响新世界的生成。要使用不同的种子，你必须在设置后创建一个新世界。

<InlineVoucher />

## 配置

要配置自定义种子，首先停止你的服务器以避免数据冲突。接着，打开你的 `server.properties` 文件。你可以在服务器管理面板的 **配置** 里找到这个配置文件。

![img](https://screensaver01.zap-hosting.com/index.php/s/XBKN9r3CAweP9RG/download)

找到以 `level-seed=` 开头的那一行。在这里输入你想要的种子值。例如：

```
level-seed=12345
```

将 `12345` 替换成你自己的种子代码，可以是任意数字或文本字符串。设置好自定义种子后，你需要生成一个新世界才能生效。

最简单的方法是在 **设置** 中将 `level-name` 改成一个新的、未使用过的名字，比如 `world1`。这样Minecraft会创建一个带有你新种子的全新世界文件夹。

如果你想了解更多关于如何重现已有世界的内容，可以查看我们的[重建世界](minecraft-worlds.md)指南，里面有详细的操作说明。最后，重新启动你的服务器。Minecraft现在会用你的自定义种子生成一个新世界。

## 总结

通过以上步骤，你已经成功为新世界设置了新的种子。重启服务器，探索你新生成的世界，享受专属于你的Minecraft冒险吧！如果有任何问题或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />