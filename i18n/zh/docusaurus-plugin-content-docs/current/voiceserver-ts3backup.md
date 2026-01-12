---
id: voiceserver-ts3backup
title: "语音服务器：创建、下载和导入备份"
description: "了解如何轻松创建和管理备份，享受免费存储和升级选项，保障数据安全 → 立即了解更多"
sidebar_label: 备份
services:
  - voiceserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

我们提供一键创建个性化备份的功能。这样你就能轻松无压力地创建备份，并随时导入。所有备份都会存储在你的存储服务器上，默认包含10GB免费存储空间。如果你需要更多空间，也可以升级到高级存储。

<InlineVoucher />

## 创建备份

<Tabs>

<TabItem value="Webinterface" label="TeamSpeak 服务器产品" default>

要在我们的网站上创建备份，你需要打开你的语音服务器服务的网页管理界面，进入管理中的 **快照（Snapshots）**。进入后，点击绿色的 **创建快照（Create snapshot）** 按钮即可生成备份。

![img](https://screensaver01.zap-hosting.com/index.php/s/G2EfYtMnqGzrjpC/download)

:::warning 外部备份
出于安全考虑，不支持导入外部备份（快照）。不接受任何例外情况。
:::

</TabItem>
<TabItem value="self_hosted" label="自托管（VPS/独服）">

和 TeamSpeak 服务器产品一样，如果你使用 GS/TS3 界面，可以通过 TeamSpeak 服务器服务管理一键创建备份（快照）。当然，你也可以使用 TeamSpeak 实例（Query）的登录信息和外部工具 YatQA 手动创建备份。

![](https://screensaver01.zap-hosting.com/index.php/s/GNak6s26sFcX4bA/preview)

在 YatQA 中创建快照，需要点击应用顶部的 **杂项（Miscellaneous）**，然后选择 **创建并保存快照（Create and save snapshot）**。

![](https://screensaver01.zap-hosting.com/index.php/s/CZWZRYSXpCTi4j3/preview)

</TabItem>
</Tabs>

## 下载备份

已创建的备份（快照）可以通过 FTP 从你的存储服务器下载。登录信息可在网页管理界面的存储服务器服务中找到。如果你不熟悉 FTP，我们推荐你参考我们的通用 [FTP 访问指南](gameserver-ftpaccess.md)。

![img](https://screensaver01.zap-hosting.com/index.php/s/NTR5oygagD6M6mY/preview)

![img](https://screensaver01.zap-hosting.com/index.php/s/MiX4GG2zoe5mkSc/preview)

## 总结

只要你按照以上步骤操作，就已经成功创建了备份。如果你有任何疑问或需要帮助，随时联系在线客服，我们每天都在这里为你服务！🙂

<InlineVoucher />