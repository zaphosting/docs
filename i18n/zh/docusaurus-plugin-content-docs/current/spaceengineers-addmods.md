---
id: spaceengineers-addmods
title: "Space Engineers：安装 Mod"
description: "了解如何安全配置并添加 Mod 到你的 Space Engineers 服务器，打造专属定制的游戏体验 → 立即了解更多"
sidebar_label: 安装 Mod
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

### 准备工作

要在服务器上添加 Mod，必须先编辑配置文件。为了避免应用更改时出现问题，请务必先停止你的服务器！

为了确保后续处理的是正确的配置文件，必须先确认存档名称。如果没有调整过相关设置，默认名称是 "zap001"。不过，为了保险起见，请按照下面的方法确认：

进入服务器设置，点击左侧列表中的“设置”选项卡下的“设置”项。

![](https://screensaver01.zap-hosting.com/index.php/s/Begs32xtfWitRDA/preview)

存档名称可以在该页面的第一个输入框中查看或修改。记住这个名称，后面编辑正确的配置文件时会用到。

![](https://screensaver01.zap-hosting.com/index.php/s/DHs7JGyxRMSfDKN/preview)

本教程还需要安装 **Notepad++**，这样才能完全按照步骤操作！

## 挑选 Mod

Space Engineers 的 Mod 大多集中在 Steam 创意工坊。工坊入口在这里：[https://steamcommunity.com/workshop/about/?appid=244850](https://steamcommunity.com/workshop/about/?appid=244850)。

找到感兴趣的 Mod 后，点击进入查看详细信息。如果喜欢这个 Mod，记下它的 Mod ID。Mod ID 通常会以粗体显示在侧边栏或 URL 地址栏顶部：

![](https://screensaver01.zap-hosting.com/index.php/s/k6WKbbZEizX7TpR/preview)

## 打开配置文件

编辑服务器文件有两种方式：一种是通过 [FTP 访问](gameserver-ftpaccess.md)，另一种是通过网页面板内置的配置编辑器。

这里我们选择通过 FTP 手动编辑配置，避免配置语法错误。具体如何通过 FTP 连接，详见上面链接的教程。

连接成功后，进入以下目录：

``/gXXXXXX/space-engineers/DedicatedServer64/config/Saves``

这个文件夹里列出了服务器上所有创建过的存档。要修改对应存档的配置，打开对应的文件夹。示例中是 "zap001" 文件夹：

![](https://screensaver01.zap-hosting.com/index.php/s/cLT8FLSnQE42ZwN/preview)

接下来编辑该文件夹中的 sandbox 文件。一定要打开如截图所示的配置文件！

![](https://screensaver01.zap-hosting.com/index.php/s/bKrCK6LcCMbkwbb/preview)

## 添加 Mod

配置文件末尾已经有一个 Mod 区域。用鼠标选中这部分内容并删除。然后添加以下内容：

`<Mods></Mods>`

插入后，将光标放在 “&gt;” 和 “&lt;” 之间，按一次回车键。这样会自动生成正确的语法格式，方便继续编辑。

![](https://screensaver01.zap-hosting.com/index.php/s/JbTqfX455XbffRs/preview)

接下来添加第一个 Mod。使用一个 “ModItem” 标签来表示一个 Mod。复制以下内容，粘贴到配置文件中，如 GIF 演示：

```xml
	<ModItem>
		<Name>12345.sbm</Name>
		<PublishedFileId>12345</PublishedFileId>
		<PublishedServiceName>Steam</PublishedServiceName>
	</ModItem>
```

![](https://screensaver01.zap-hosting.com/index.php/s/FkgJmMTBAp8SLzp/preview)

:::info
这里的 12345 要替换成你选中 Mod 的 Mod ID！
:::

如 GIF 所示，重复以上步骤即可添加更多 Mod。添加完所有想要的 Mod 后，按 **CTRL+S** 保存配置文件并关闭。然后正常启动服务器，Mod 会自动安装。

<InlineVoucher />