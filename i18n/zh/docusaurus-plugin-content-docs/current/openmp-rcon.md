---
id: openmp-rcon
title: "Open.mp：使用 RCON 管理服务器"
description: "了解如何通过 RCON 远程管理游戏服务器，实现高效的服务器控制和安全 → 立即了解更多"
sidebar_label: RCON
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 什么是 RCON？

RCON 是各种程序（比如游戏服务器）中的一个接口，可以用来进行远程维护和远程管理。通过这个接口，你可以管理已经运行且可访问的服务器。只需使用特定的远程维护程序连接该接口，就能对服务器进行操作。

<InlineVoucher />

## 访问你的配置文件

要使用 RCON，首先需要进入服务器配置并启用此功能。你可以通过服务器的网页面板或直接通过 FTP 编辑配置文件。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="configs" label="通过网页面板配置文件">

#### 通过网页面板配置文件

我们推荐使用此方法，因为它最简单。

:::note
编辑配置文件前，服务器必须先停止。编辑配置后重启服务器，否则更改将不会生效。
:::

直接进入游戏服务器网页面板的 **Configs**（配置）部分，点击蓝色的编辑文件按钮，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

会打开一个文本编辑器，允许你直接编辑文件。在文件中搜索 `rcon` 部分。在这里，将 `enable` 参数设置为 `true`，例如：`"enable":true`。建议使用 `CTRL+F` 调出浏览器搜索功能，方便查找。

同一部分中，还需要设置 RCON 接口访问密码，调整 `password` 参数。这样可以防止未授权访问，密码请务必保密。

![](https://screensaver01.zap-hosting.com/index.php/s/WPPbd6C7k6m5Ja7/preview)

</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置文件前，服务器必须先停止。编辑配置后重启服务器，否则更改将不会生效。
:::

另一种编辑配置文件的方法是通过 FTP。如果你不熟悉 FTP，建议先查看我们的[FTP 访问指南](gameserver-ftpaccess.md)。不过这个方法相对耗时，如果你想直接编辑文件内容，还是推荐使用游戏服务器网页面板的 **Configs** 部分。

连接到服务器 FTP 后，进入以下目录：
```
..g[zap_id]/gta-openmp/
```

在该路径下找到 `config.json` 文件并打开，这就是服务器的配置文件。

在文件中搜索 `rcon` 部分。将 `enable` 参数设置为 `true`，并通过 `password` 参数设置 RCON 接口密码。

</TabItem>
</Tabs>

:::info
调整完配置后，记得重启服务器使更改生效。
:::

## 使用 RCON

启用 RCON 后，你就可以通过配置文件中定义的端口访问 Open.mp 的 RCON 接口。

你需要使用一个 RCON 客户端程序来连接它。我们推荐使用开源的 [RCON Console](https://sourceforge.net/projects/rconconsole/)。

在你选择的 RCON 程序中，输入服务器的 IP 地址和端口。确保你的游戏服务器在线且正在运行。

连接成功后，你就可以通过所选的 RCON Console 程序向你的 Palworld 服务器发送命令了。

:::tip
查看我们的[服务器命令](openmp-server-commands.md)，了解所有可通过 RCON 执行的命令。
:::

你已经成功在 Palworld 服务器上启用了 RCON。

<InlineVoucher />