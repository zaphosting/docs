---
id: minecraft-bedrock-add-world
title: "Minecraft Bedrock：导入自定义世界"
description: "了解如何将你自定义的 Minecraft Bedrock 世界导入服务器，实现无缝多人游戏体验 → 立即了解更多"
sidebar_label: 导入自定义世界
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
Minecraft Bedrock 版允许你创建自己的世界并在服务器上使用。在本指南中，我们将向你展示如何将自定义世界导入你的 Minecraft: Bedrock 服务器，与好友共享。

<InlineVoucher />

## 准备工作

要将世界导入你的 Minecraft Bedrock 服务器，你需要通过 FTP 连接。如果你不熟悉这部分，建议先看看我们的[FTP 访问](gameserver-ftpaccess.md)指南。

确保你已经将想要导入的世界保存在电脑上。该世界应存放在包含相应文件的文件夹中。  
如果你想上传 Minecraft: Bedrock 单人游戏中的世界，可以在以下路径找到它：
```
C:\Users\%userprofile%\AppData\Local\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\minecraftWorlds
```

## 安装步骤

### 停止服务器

开始导入前，先停止你的 Minecraft Bedrock 服务器。这样可以确保数据不会丢失，导入过程更顺畅。

### 上传世界

通过 FTP 进入服务器存放世界的目录，路径通常是：

```
/gXXXXXX/minecraft-bedrock/worlds
```

这里会显示服务器上所有已存储世界的文件夹，每个世界都有唯一的名称。

将你想导入的世界文件夹上传到该目录。请确保文件夹名称保持不变，否则 Minecraft 无法识别该世界。

接着打开服务器主目录下的 `server.properties` 文件，将以下设置中的 `level-name` 值改为你上传的世界文件夹名称：

```
level-name=Bedrock level
```
:::tip
如果你想恢复使用默认世界，只需将该值改回 `Bedrock level`，然后重启服务器即可！
:::

### 启动服务器

成功上传世界后，重新启动服务器。导入的世界应该会自动加载。

### 验证更改

连接到服务器，确认导入的世界已正确加载。现在你就可以在新世界中畅玩了。如果遇到问题，检查步骤是否正确，确保世界文件夹名称和位置无误。

## 总结

将世界导入 Minecraft Bedrock 服务器是个简单的过程，让你能轻松分享自己的创作。如果有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />