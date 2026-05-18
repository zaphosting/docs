---
id: minecraft-worlds
title: "Minecraft：管理世界存档"
description: "了解如何跨平台管理、转换和备份 Minecraft 世界，确保游戏进度安全无忧 → 立即了解更多"
sidebar_label: 管理世界
services:
  - gameserver-minecraft
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Minecraft 的核心是将游戏存档以**世界**的形式保存，每个世界都是一个独立的存档。在本指南中，我们将探索如何管理你的 Minecraft 游戏服务器上的世界，包括跨平台转换世界、重新生成世界、备份本地和服务器上的世界，以及上传世界到服务器。

<InlineVoucher />

## 准备工作

要管理你的世界，首先需要通过 FTP 访问你的 Minecraft 游戏服务器。如果你不熟悉 FTP 的使用，请查看我们的[通过 FTP 访问](gameserver-ftpaccess.md)指南。

## 平台差异对比

一个关键区别是，原版服务器（vanilla server）将普通世界、下界和末地维度合并为一个整体存档。

而其他服务器平台（如 Spigot、PaperMC 和 Bukkit）则将每个维度分开保存为独立的世界存档。下面的表格展示了名为 **zapdocs** 的示例世界在两种服务器平台上的存档结构对比。

| 世界维度         | 原版服务器（合并）       | 服务器平台（独立）           |
| ---------------- | ------------------------- | ---------------------------- |
| 普通/主世界      | zapdocs                   | zapdocs                      |
| 下界             | zapdocs                   | zapdocs_nether               |
| 末地             | zapdocs                   | zapdocs_the_end              |

## 世界转换

当你在原版服务器和服务器平台之间切换时，可能想保留你的世界存档。由于上述差异，你需要调整文件结构，提取或合并下界和末地的独立世界文件夹。

:::info
只有在你想保留并迁移现有世界时，才需要在原版和服务器平台之间转换。如果只是单纯在原版服务器之间或服务器平台之间迁移，则无需转换。
:::

:::note
操作前请务必关闭服务器，避免冲突或存档回滚。
:::

<Tabs>
<TabItem value="converting-from-vanilla" label="从原版转换" default>

要将世界从原版格式转换为服务器平台格式，需要提取特定文件夹，为每个维度创建独立的世界文件夹。通常你会将所有世界文件迁移到运行 Spigot、PaperMC 或 Bukkit 等服务器平台的新服务器上。

通过 FTP 访问服务器，进入路径 `../vanilla/[你的世界名]`，找到你想转换的世界存档。定位 **DIM1** 和 **DIM-1** 文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/FKiFmjYQembZ7qQ/preview)

**DIM1** 文件夹存放末地数据，**DIM-1** 文件夹存放下界数据。

你需要将这两个文件夹分别移动到新的独立世界文件夹中，操作如下：
- 对于下界，在根目录下创建一个新的 `[你的世界名]_nether` 文件夹，将 **DIM-1** 文件夹移动进去。
- 对于末地，在根目录下创建一个新的 `[你的世界名]_the_end` 文件夹，将 **DIM1** 文件夹移动进去。

:::info
可能需要覆盖已有的 `DIM` 文件夹，这很正常，因为服务器平台默认会立即生成所有维度。
:::

本例中，世界名为 `world`，因此在根目录下创建了 `world_nether` 和 `world_the_end` 文件夹，并将对应的 `DIM` 文件夹移动进去。

![](https://screensaver01.zap-hosting.com/index.php/s/CSgKsHj6fnxZCgy/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/iYKHiQNzwmgQaz7/preview)

现在这三个独立的世界文件夹就可以在服务器平台上使用了。

</TabItem>

<TabItem value="converting-to-vanilla" label="转换为原版">

将世界从服务器平台格式转换回原版格式，过程基本相同但反向操作。你需要从下界和末地的独立世界文件夹中提取数据，合并到一个单一的世界文件夹中。通常你会将合并后的世界迁移到运行原版服务器的新服务器上。

通过 FTP 访问服务器根目录，找到三个独立的世界文件夹，分别是 `[你的世界名]`、`[你的世界名]_nether` 和 `[你的世界名]_the_end`，其中 `[你的世界名]` 替换为你的世界名称。

打开 `[你的世界名]_nether` 文件夹，将 `DIM-1` 文件夹移动到主世界 `[你的世界名]` 文件夹中。本例中默认世界名为 `world`。

![](https://screensaver01.zap-hosting.com/index.php/s/3tAijYDAbymJcrC/preview)

同样操作 `[你的世界名]_the_end` 文件夹，将 `DIM1` 文件夹移动到主世界 `[你的世界名]` 文件夹中。

![](https://screensaver01.zap-hosting.com/index.php/s/ao663qGk9Sz3WNt/preview)

合并后的世界现在可以在原版服务器上使用了。

</TabItem>
</Tabs>

## 生成世界

生成世界很简单，你可以选择生成全新世界，或者重新生成当前世界。Minecraft 使用**种子（seed）**系统，每个世界都有唯一的种子，凭借种子可以精确重现世界的起始状态。

<Tabs>
<TabItem value="generating-new" label="生成新世界" default>

要生成新世界，先关闭服务器并通过 FTP 连接。打开 `server.properties` 配置文件，可以通过服务器面板的 **配置** 区域或 FTP 访问。

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

生成新世界的方法有两种：
- 通过 FTP 删除与配置文件中 `level-name` 参数同名的世界文件夹。
- 修改配置文件中的 `level-name` 参数为新名称并保存。

如果想保留旧存档，推荐使用第二种方法，这样旧世界仍保留在服务器上，但处于“非激活”状态。

重新启动服务器后，服务器会发现 `level-name` 指定的世界不存在，自动生成一个带有新种子的全新世界。

</TabItem>

<TabItem value="regenerating-current" label="重新生成当前世界">

重新生成当前世界前，需要记录当前世界的种子。你可以在服务器面板的 **控制台** 区域或游戏内执行此操作，游戏内需要拥有 OP 权限。

执行 `/seed` 命令，控制台或游戏内会返回当前世界的**种子**值，记下它。

![](https://screensaver01.zap-hosting.com/index.php/s/6s3fWaPMrDGSLrz/preview)

知道种子后，修改 `server.properties` 配置文件中的 `level-seed` 参数为该种子值。可通过服务器面板的 **配置** 区域或 FTP 访问。

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

:::note
操作前请务必关闭服务器，确保文件正确保存。
:::

保存后，通过 FTP 连接服务器。

重新生成世界的方法有两种：
- 通过 FTP 删除与配置文件中 `level-name` 参数同名的世界文件夹。
- 修改配置文件中的 `level-name` 参数为新名称并保存。

如果想保留旧存档，推荐使用第二种方法，这样旧世界仍保留在服务器上，但处于“非激活”状态。

![](https://screensaver01.zap-hosting.com/index.php/s/Z7GwpKo8tQjk3cb/preview)

重新启动服务器后，服务器会发现 `level-name` 指定的世界不存在，自动使用 `level-seed` 参数指定的种子重新生成当前世界。

</TabItem>
</Tabs>

## 备份世界存档

### 本地存档

本地世界存档是你在单人模式下创建的存档，存放在 Windows 的 AppData 目录，路径如下：
```
../AppData/Roaming/.minecraft/saves
```

:::tip
你可以同时按下 `CTRL` + `R`，在运行对话框中输入 `%appdata%/.minecraft/saves/`，点击 **确定**，即可快速打开该文件夹。

![](https://screensaver01.zap-hosting.com/index.php/s/jfrnkXX6XtwniEL/preview)
:::

在这里，你可以看到所有本地世界存档。

![](https://screensaver01.zap-hosting.com/index.php/s/Li7Qn23Ej6Yiomc/preview)

### 通过 FTP 访问存档

备份服务器上的世界存档也很简单。连接游戏服务器的 FTP 客户端后，进入你所使用的服务器平台根目录，世界存档就直接放在这里，默认世界名为 `world`。

![](https://screensaver01.zap-hosting.com/index.php/s/X2FQLSrC5QgrexQ/preview)

### 自动备份

我们还提供通过网页面板自动备份世界存档（及配置文件）的功能。进入游戏服务器的网页面板，打开 **工具->备份** 区域，你可以配置多种自动备份选项。我们为你提供 10GB 免费备份存储空间，备份文件将存放于此。更多备份相关信息，请查看我们的专门[备份](gameserver-backups.md)指南。

## 上传世界存档

上传世界存档同样简单。首先通过 FTP 客户端连接游戏服务器，进入你所使用的服务器平台根目录。

:::info 原版 & 服务器平台世界格式
请记住，原版服务器和服务器平台的世界存档格式略有不同。

如果你要将存档从原版迁移到服务器平台（如 PaperMC），或反向迁移，请查看本指南的世界转换部分。
:::

直接将你的世界存档文件夹拖拽到根目录，FTP 客户端会自动上传到服务器。

:::tip
建议复制你上传的游戏存档文件夹名称，后续激活时会用到。
:::

## 激活世界存档

要使用特定的世界存档，需要编辑 `server.properties` 配置文件中的 `level-name` 参数。

你可以通过服务器面板的 **配置** 区域或 FTP 访问该文件。

![](https://screensaver01.zap-hosting.com/index.php/s/ziTZ3Jax8CD3jg6/preview)

找到 `level-name` 参数，将其修改为你想激活的世界存档文件夹名称。如果你使用的是服务器平台，填写主世界文件夹名称，不要填写 `_nether` 或 `_the_end` 文件夹。





## 总结

现在你已经掌握了如何自信地管理 Minecraft 世界。从原版与服务器平台之间转换存档，到生成新世界、用种子重新生成旧世界，制作可靠备份，上传自定义世界并激活它们。凭借这些知识，你可以轻松管理你的世界，确保冒险旅程安全有序。

如有更多问题或需要帮助，欢迎随时联系我们的支持团队，我们每天都在线为你服务！🙂

<InlineVoucher />