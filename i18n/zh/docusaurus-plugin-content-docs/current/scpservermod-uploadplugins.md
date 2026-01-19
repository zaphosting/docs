---
id: scpservermod-uploadplugins
title: "SCP秘密实验室：服务器插件安装指南"
description: "了解如何为你的SCP服务器安装和配置SMOD插件，提升游戏体验和服务器功能 → 立即了解更多"
sidebar_label: 安装插件
services:
  - gameserver-scp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::warning 归档指南
本文档已被归档。文档归档通常是因为内容不再相关、错误或过时。归档原因如下：

原因：SCP的Servermod扩展已被废弃，不再维护。我们推荐你改用 **[SCP:EXILED](exiled-plugins.md)**。
::::

<InlineVoucher />

## 连接FTP

在安装插件之前，必须先设置好[FTP访问权限](gameserver-ftpaccess.md)。

设置完成后，你可以连接并打开以下服务器文件夹：
`/g#####/scp/sm_plugins`

![](https://screensaver01.zap-hosting.com/index.php/s/2Fid5MKq57YDCNj/preview)

## 安装插件

### 寻找插件

首先，你需要找到可用的SMOD兼容插件。

获取这些插件的最佳途径是直接加入它们的[Discord服务器](https://discord.gg/T9aurNf)。

:::info
这只是获取插件的一个渠道，插件也可能在其他地方找到。务必确认插件与你的SMOD版本兼容。
:::

本例中，我们将获取以下插件：

![](https://screensaver01.zap-hosting.com/index.php/s/bEEQP3cm33fgMFi/preview)

### 上传插件

拿到想要的插件后，接下来将它们上传到你的服务器FTP。你可以通过**拖拽**方式上传到**sm_plugins文件夹**。

![](https://screensaver01.zap-hosting.com/index.php/s/HzRKJXFyENqK4N8/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/kSSMs23E6g4PfwN/preview)

:::info
注意：安装任何插件后，你都需要**重启服务器**，插件才能生效。
:::

### 配置插件

根据不同插件，可能需要你在config_gameplay.txt中添加各种配置。

以本例插件为例，定义了以下配置项。

![](https://screensaver01.zap-hosting.com/index.php/s/5PrLzeCQaFamGRn/preview)

要添加这些配置，我们需要编辑config_gameplay.txt。

你可以通过左侧的**配置（Configs）**标签找到它。

![](https://screensaver01.zap-hosting.com/index.php/s/mMck39x2mEnLtLY/preview)

然后找到**config_gameplay.txt**

![](https://screensaver01.zap-hosting.com/index.php/s/SGLpBYM5DAWRRzN/preview)

:::info
配置内容其实可以写在任何位置。最佳实践是将它们写在config_gameplay.txt文件中的“#Misc gameplay settings”部分下。
:::

![](https://screensaver01.zap-hosting.com/index.php/s/JMK542jpCj472ag/preview)

:::info
注意：不同插件的配置会有所不同。务必仔细阅读插件附带的说明，确保正确添加配置。
:::

配置完成后，重启（或启动）服务器，然后直接在游戏内检查效果！

<InlineVoucher />