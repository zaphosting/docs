---
id: satisfactory-switchexperimental
title: "Satisfactory：实验版"
description: "了解使用 Satisfactory 实验版的优势和风险，抢先体验重大更新，提升你的游戏体验 → 立即了解更多"
sidebar_label: 实验版
services:
  - gameserver-satisfactory
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 什么是实验版？
Satisfactory 有两个版本，常规版和实验版。常规版更可靠、稳定，且更少出现漏洞，因为它是更为定型的版本。另一方面，实验版能让你抢先体验重大补丁更新，虽然更容易遇到 BUG，且更新频率更高，但你可以第一时间尝鲜重大内容！

:::info
注意：无论你选择哪个版本，服务器和游戏客户端必须保持相同的版本号才能连接。
:::

<InlineVoucher />

## 如何切换到实验版？
通过我们的游戏服务器系统，在网站上切换服务器版本非常简单。开始之前，建议先备份你的 Satisfactory 存档，因为切换版本会清除所有文件。

### 备份存档
备份整个游戏服务器或存档非常简单。进入 Satisfactory 产品页面，点击 `工具 -> 备份` 标签。

![Screenshot 2023-02-21 192618](https://screensaver01.zap-hosting.com/index.php/s/sMA9kQxoLoozsPa/preview)

在这里你可以执行多种操作，包括自动备份，详细说明见[备份](gameserver-backups.md)。这里我们重点讲手动备份。

页面顶部点击绿色的 + 图标，确认提示，即可将整个游戏服务器备份到你的 ZAP 备份存储。

![Screenshot 2023-02-21 193113](https://screensaver01.zap-hosting.com/index.php/s/Gf2XRLzz46WNHHE/preview)

备份完成后，你可以通过 FTP 访问，详见[FTP 访问](gameserver-ftpaccess.md)。

另外，你也可以直接从网页后台的 `存档管理器` 下载存档文件，详见[存档管理器](satisfactory-savegame.md)。

### 切换到实验版游戏服务器
首先，进入你的 Satisfactory 产品页面，点击 `设置 -> 游戏` 标签。

![Screenshot 2023-02-21 191212](https://screensaver01.zap-hosting.com/index.php/s/nyksz8LjPtRGq4w/preview)

你会看到 `已安装游戏` 区域，显示你已安装的游戏。如果之前切换过版本，这里会显示，你可以直接跳到最后一步激活游戏。

接着往下滚动，点击 `可用游戏` 下拉菜单，在搜索框输入 “Satisfactory”。

![Screenshot 2023-02-21 191713](https://screensaver01.zap-hosting.com/index.php/s/CPein9Qctkwp8Yd/preview)

点击绿色下载按钮，确认弹窗，服务器指定版本的下载就会开始。

![Screenshot 2023-02-21 191956](https://screensaver01.zap-hosting.com/index.php/s/C3zwiXf9THNpdDk/preview)

>下载可能需要几分钟，请耐心等待完成后再进行下一步。

下载完成后，两个版本都会显示在 `已安装游戏` 中，方便以后切换。

最后，在 `已安装游戏` 区域激活游戏，点击蓝色激活图标。

:::info
注意：重装游戏时会删除所有游戏数据，没备份的话请务必先返回上一步备份。
:::

![Screenshot 2023-02-22 020606](https://screensaver01.zap-hosting.com/index.php/s/nmJ56coL946CNBG/preview)

如果想切回常规版，按同样步骤操作，选择常规版 Satisfactory 服务器即可！

## 切换游戏客户端到实验版
:::info
注意：无论你选择哪个版本，服务器和游戏客户端必须保持相同的版本号才能连接。
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>

<TabItem value="Steam" label="Steam" default>
首先打开 Steam，进入游戏库。找到 “Satisfactory”，右键点击选择属性。

![Screenshot 2023-02-21 203108](https://screensaver01.zap-hosting.com/index.php/s/3iqTTQNQdNpX976/preview)

在新菜单中，切换到 `测试版` 标签，选择 `experimental`。

![Screenshot 2023-02-21 203435](https://screensaver01.zap-hosting.com/index.php/s/PnMTyGWqWd78iZa/preview)

就这样，等待 Steam 更新游戏到选定版本，更新完成后即可启动游戏，畅玩你的服务器！
</TabItem>
<TabItem value="Epic Games" label="Epic Games">
Epic Games 上切换实验版更简单。只需打开库，找到 “Satisfactory Experimental” 游戏。Epic Games 启动器中两个版本是独立的游戏。

就这样，等待 Epic Games 下载并安装游戏，完成后即可启动游戏，畅玩你的服务器！

</TabItem>
</Tabs>

<InlineVoucher />