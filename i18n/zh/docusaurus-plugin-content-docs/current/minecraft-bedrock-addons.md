---
id: minecraft-bedrock-addons
title: "Minecraft 基岩版：安装插件"
description: "了解如何通过插件增强你的 Minecraft 基岩版服务器，扩展玩法并自定义你的世界 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 介绍
Minecraft 基岩版原生支持模组，拥有庞大的社区，让你可以和朋友们一起扩展和增强游戏体验。在本指南中，我们将介绍如何在你的 Minecraft 基岩版服务器上安装并激活插件。

<InlineVoucher />

## 准备工作

要将插件地图安装到你的 Minecraft 基岩版服务器，你需要通过 FTP 连接服务器。如果你不熟悉这部分，建议先查看我们的[FTP 访问](gameserver-ftpaccess.md)指南。

在开始安装之前，你还需要找到想要安装到服务器上的插件。我们推荐你去 [CurseForge](https://www.curseforge.com/minecraft-bedrock) 浏览，这里有社区制作的大量插件和资源包。

## 安装方法

在 Minecraft 基岩版中安装插件有两种方式。你可以选择安装到一个新世界，这样过程非常简单；或者安装到已有世界，这样虽然更复杂，但可以保留已有进度。

## 使用新世界（简单）

要创建一个带插件的新世界，只需打开下载好的 `.mcaddon` 或 `.mcpack` 文件。
这会自动打开 Minecraft 基岩版并导入插件。

### 创建世界

点击 `Play`，然后选择 `Create new world` 来创建新世界。
接着你可以设置所有常规的世界选项：

![](https://screensaver01.zap-hosting.com/index.php/s/jtK2szxRNSSiea5/preview)

### 安装插件

在点击 `Create` 之前，进入 `Resource packs` 或 `Behavior packs`。
找到插件名称旁边的 `Activate` 并点击激活：

![](https://screensaver01.zap-hosting.com/index.php/s/ARnp4YFq5iZjxYZ/preview)

有些插件同时包含资源包和行为包，所以你需要两个都激活。激活完所有想要的插件后，点击 `Create`。

如果想导出世界并上传到服务器，可以参考我们的[导入自定义世界](minecraft-bedrock-add-world.md)指南。

## 使用已有世界（复杂）

将插件安装到已有世界更复杂，但好处是可以保留已有进度并体验插件内容。

### 安装 7-zip

要安装插件到已有 Minecraft 世界，你需要先安装 7-zip 来解压插件文件。
安装非常简单，访问 [7-zip 下载页面](https://www.7-zip.org/) 获取最新安装包：

![](https://screensaver01.zap-hosting.com/index.php/s/iRxwB5yTpbTYpbt/preview)

下载后打开安装包，点击 **Install**。

### 解压插件

下载好插件后，右键 `.mcaddon` 文件，选择 `7-zip`，然后点击 `Extract to FOLDERNAME` 解压：

![](https://screensaver01.zap-hosting.com/index.php/s/ZCPPNTLtErtEQWr/preview)

如果插件同时包含资源包和行为包，你还需要对解压出来的文件夹里的 `.mcpack` 文件重复同样操作：

![](https://screensaver01.zap-hosting.com/index.php/s/tpz8iJ4wymBo6ZF/preview)

资源包和行为包的区别可以从文件夹名称看出。资源包文件夹名中带有 `RP`，行为包文件夹名带有 `BP`。

<Tabs>
  <TabItem value="resource-pack" label="资源包" default>

### 上传资源包

用 FTP 客户端进入以下目录：

```
/gXXXXXX/minecraft-bedrock/resource_packs
```

然后将资源包（RP）文件夹拖拽上传到 FTP 客户端：

![](https://screensaver01.zap-hosting.com/index.php/s/5c3X4S9fNaXrJFs/preview)

:::caution
确保上传的是直接包含资源包内容的正确文件夹，而不是仅仅上传了子文件夹。
你上传的文件夹内容应该长这样：

![](https://screensaver01.zap-hosting.com/index.php/s/sRxmePLtSSsqmF3/preview)
:::

### 启用资源包

打开 RP 文件夹中的 `manifest.json`，然后在 FTP 客户端进入世界文件夹：

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

打开 `world_resource_packs.json` 文件。
如果你之前没安装过插件，需要新建这个文件，内容如下：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

将 `pack_id` 和 `version` 替换成你刚才打开的 `manifest.json` 里的对应值：

![](https://screensaver01.zap-hosting.com/index.php/s/ymXPZRT6jxtN77X/preview)

:::info
如果你要安装多个资源包，可以添加多条记录。
注意每条记录之间用逗号 `,` 分隔，但最后一条记录后不能加逗号：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::

</TabItem>
<TabItem value="behavior-pack" label="行为包">

### 上传行为包

用 FTP 客户端进入以下目录：

```
/gXXXXXX/minecraft-bedrock/behavior_packs
```

然后将行为包（BP）文件夹拖拽上传到 FTP 客户端：

![](https://screensaver01.zap-hosting.com/index.php/s/rT5s9ML82d3daeM/preview)

:::caution
确保上传的是直接包含行为包内容的正确文件夹，而不是仅仅上传了子文件夹。
你上传的文件夹内容应该长这样：

![](https://screensaver01.zap-hosting.com/index.php/s/3mAGW56C9TYNnmk/preview)
:::

### 启用行为包

打开 BP 文件夹中的 `manifest.json`，然后在 FTP 客户端进入世界文件夹：

```
/gXXXXXX/minecraft-bedrock/worlds/Bedrock level
```

打开 `world_behavior_packs.json` 文件。
如果你之前没安装过插件，需要新建这个文件，内容如下：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```

将 `pack_id` 和 `version` 替换成你刚才打开的 `manifest.json` 里的对应值：

![](https://screensaver01.zap-hosting.com/index.php/s/wLmeAwaE2D76N9N/preview)

:::info
如果你要安装多个行为包，可以添加多条记录。
注意每条记录之间用逗号 `,` 分隔，但最后一条记录后不能加逗号：

```
[
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  },
  {
    "pack_id" : "UUID HERE",
    "version" : [version, number, here]
  }
]
```
:::
</TabItem>
</Tabs>

### 验证修改

启动服务器，连接进去，确认插件是否正确安装。测试新功能或资源，确保一切正常。如果出现问题，检查步骤是否正确，确认文件是否上传完整，并查看服务器控制台是否有错误提示。

## 总结

在你的 Minecraft 基岩版服务器上安装插件，是扩展游戏体验和添加新内容的绝佳方式。通过本指南，你可以轻松安装插件，自定义你的服务器。如有任何疑问或需要帮助，欢迎随时联系我们的客服团队，我们每天都在线为你服务！🙂

<InlineVoucher />