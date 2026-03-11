---
id: vintagestory-mods
title: "Vintage Story：安装 Mods"
description: "了解如何在你的 Vintage Story 服务器上安装 Mods，添加全新功能和游戏机制 → 立即了解更多"
sidebar_label: 安装 Mods
services:
- gameserver-vintagestory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Mods 是 Vintage Story 体验的核心部分，允许服务器拥有者通过新增机制、物品、世界生成特性或生活质量改进来扩展游戏。在服务器上安装 Mods，确保所有连接的玩家都能享受到相同的游戏增强内容。

Vintage Story 提供了庞大的社区 Mods 库，涵盖从小调整到完整游戏玩法大改的各种内容。许多 Mods 可以在官方 Vintage Story Mod 数据库或社区论坛中找到。

<InlineVoucher />

## 准备工作

在你的 Vintage Story 服务器上安装 Mods 之前，请确保完成以下步骤：

- 从可信来源（如 Vintage Story Mod 数据库）下载所需的 Mod  
- 确认 Mod 版本与你服务器的游戏版本匹配  
- 上传新文件前先停止服务器  

大多数 Vintage Story Mods 以 `.zip` 格式分发，安装前不要解压。



## 安装步骤

Vintage Story 服务器 Mods 必须直接上传到服务器文件系统。通过 [FTP](gameserver-ftpaccess.md) 连接服务器来完成。首先，使用 FTP 客户端连接服务器，并使用服务器的 FTP 凭据登录。

连接成功后，进入以下目录：

```
/gxxxxxx/VintagestoryData/
```

如果目录中还没有以下两个文件夹，需要手动创建：

```
VintagestoryData
├── Mods
└── ModConfigs
```

- **Mods** – 存放所有已安装的服务器 Mods  
- **ModConfigs** – 存储已安装 Mods 生成的配置文件

创建好文件夹后，将下载好的 Mod 文件上传到 **Mods** 文件夹。示例结构：

```
VintagestoryData
└── Mods
    ├── examplemod.zip
    ├── anothermod.zip
```

Vintage Story 会在服务器启动时自动加载放在该文件夹内的所有 Mod 文件。



## 验证安装

上传完所有 Mod 文件后，回到服务器管理面板，重新启动服务器。启动过程中，服务器会检测 `Mods` 文件夹中的 Mods 并自动加载。如果 Mod 需要配置，首次启动后可能会在 `ModConfigs` 文件夹生成新的配置文件。

服务器成功启动后，连接服务器确认 Mod 是否生效。启动日志中会显示加载的 Mods。如果某个 Mod 加载失败，请检查：

- Mod 版本是否与服务器版本匹配  
- 所有必需的依赖是否已安装  
- `.zip` 文件是否放在正确的 `Mods` 文件夹内



## 总结

恭喜你！你已经成功在 Vintage Story 服务器上安装了 Mods。Mods 让你能扩展游戏玩法，加入新机制，打造专属社区的个性化体验。

如有任何疑问或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />