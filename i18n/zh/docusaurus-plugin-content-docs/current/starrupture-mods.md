---
id: starrupture-mods
title: "StarRupture：安装 Mods"
description: "了解如何在你的 StarRupture 服务器和客户端安装 Mods，提升游戏体验 → 立即了解更多"
sidebar_label: 安装 Mods
services:
- gameserver-starrupture
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Mods 让你可以通过添加社区制作的新机制、内容、生活质量改进或游戏调整，来扩展 StarRupture 的玩法。许多 StarRupture Mods 都通过社区平台如 NexusMods 发布，可以安装在服务器端和本地客户端。

在服务器上安装 Mods 确保服务器环境加载了修改后的内容，而本地安装则让你的游戏客户端在连接带有 Mods 的服务器时使用相同的文件。

<InlineVoucher />

## 在服务器上安装 Mods

要在你的 StarRupture 服务器上安装 Mods，首先从可信来源（比如 **NexusMods**）下载你想要的 Mod 文件。

![img](https://screensaver01.zap-hosting.com/index.php/s/rM4WR4gW2KLyzxz/preview)

上传 Mod 之前，确保你的服务器已停止运行，避免安装时文件冲突。然后，使用 FTP 客户端通过 [FTP](gameserver-ftpaccess.md) 连接到你的服务器。连接后，进入服务器上的以下目录：

```
/gxxxxxxx/StarRupture/Content/Paks
```
将下载好的 `.zip` Mod 文件上传到这个文件夹。上传完成后，直接在 `Paks` 目录内解压压缩包内容。解压完成后，回到你的服务器管理面板，重新启动服务器。

启动时，服务器会自动检测并加载已安装的 Mods。

## 在客户端安装 Mods

部分 StarRupture Mods 也需要在客户端本地安装。大多数本地安装的 Mods 在连接服务器时都会保持激活。首先，从可信来源如 NexusMods 下载你想要的 Mod。

接着，打开你的 **Steam 库**，右键点击 **StarRupture**，悬停到 **管理**，选择 **浏览本地文件**。在游戏安装目录中，找到以下路径：

```
StarRupture/StarRupture/Content/Paks
```

将下载的 `.zip` Mod 文件复制到此文件夹。复制完成后，直接在 `Paks` 目录内解压压缩包。解压后，下次启动游戏时，Mod 会自动加载。

## 总结

恭喜你！你已经成功在 StarRupture 的服务器和客户端安装了 Mods。安装 Mods 后，你可以通过社区制作的新功能、机制和改进，极大丰富你的游戏体验。

如果有任何问题或需要帮助，随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />