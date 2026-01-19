---
id: soulmask-configuration
title: "Soulmask：服务器配置"
description: "探索如何自定义 Soulmask 服务器设置并优化游戏配置，打造专属游戏体验 → 立即了解"
sidebar_label: 服务器配置
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Soulmask 服务器提供了丰富的配置参数，供你自由定制。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明。

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑参数。你可以通过网页面板调整服务器设置，通过 FTP 修改游戏玩法设置。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过网页面板" default>

#### 通过网页面板

访问服务器配置的主要方式是进入游戏服务器网页面板的 **设置** 部分，找到对应的设置项，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置前必须先停止服务器，编辑配置后重启服务器，否则更改将不会生效。
:::

访问游戏玩法配置文件的主要方式是通过 FTP。如果你不熟悉 FTP 的使用，建议先查看我们的[通过 FTP 访问](gameserver-ftpaccess.md)指南。

</TabItem>
</Tabs>

## 服务器配置选项
接下来，我们将介绍如何访问配置选项，并探索服务器和游戏玩法设置中部分可用的配置参数。

### 重要服务器设置

目前，调整服务器设置的唯一途径是通过游戏服务器网页面板的 **设置** 部分。在这里，你可以调整以下内容：

| 参数名称             | 示例                   | 说明                                                     |
| -------------------- | ---------------------- | -------------------------------------------------------- | 
| Servername           | ZAP-Hosting Docs Test  | 设置你的服务器名称                                       |
| Game server password | iLoveZAP!2024          | 设置服务器密码，留空则无密码                             |
| Admin password       | iLoveZAP!2024          | 设置管理员访问密码                                       |
| Gamemode             | PVE/PVP                | 选择游戏模式，PVE 或 PVP                                 |

完成后，记得点击页面底部的保存按钮，并重启服务器。

### 游戏玩法配置设置

目前，访问配置文件的唯一方式是通过 FTP。编辑前务必先停止服务器，否则更改可能不会生效。

进入以下路径，打开 **GameXishu.json** 文件：
```
../soulmask/WS/Saved/GameplaySettings
```

该文件包含大量可调节的游戏玩法配置参数，供你根据喜好进行调整。

修改完成后，保存文件并重启服务器。服务器下次启动时将应用你设置的配置。

<InlineVoucher />