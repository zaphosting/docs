---
id: abioticfactor-configuration
title: "Abiotic Factor：服务器配置"
description: "探索如何自定义 Abiotic Factor 服务器设置，优化你的游戏体验和服务器性能 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

Abiotic Factor 服务器提供了丰富的配置参数，供你根据喜好进行自定义。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明。

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑任何参数。编辑此文件有多种方式。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过网页面板" default>

#### 通过网页面板

最友好的方式是直接进入你的游戏服务器网页面板的 **设置** 部分，查找相应的设置，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="通过网页面板配置文件">

#### 通过网页面板配置文件

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

另外，如果你想直接编辑原始文件，可以进入游戏服务器网页面板的 **配置文件** 部分，点击蓝色的编辑文件按钮，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

这会在网页上打开一个文本编辑器，方便你直接编辑。

</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

最后一种访问原始文件的方法是通过 FTP。如果你不熟悉 FTP，建议先查看我们的[通过 FTP 访问指南](gameserver-ftpaccess.md)。不过这个方法相对耗时，如果你想直接编辑文件内容，推荐使用网页面板的 **配置文件** 部分。

</TabItem>
</Tabs>

## 服务器配置选项

下面的章节中，我们将通过表格展示 Abiotic Factor 专用服务器可用的各种配置选项。

### 重要服务器设置

这些设置只能通过游戏服务器网页面板的 **设置** 部分直接配置。

| 参数名称           | 示例                  | 说明                             |
| ------------------ | --------------------- | -------------------------------- |
| Server Name        | ZAP-Hosting Docs Test | 设置你的服务器名称               |
| Password           | iLoveZAP!2024         | 设置服务器密码，留空则无密码     |

完成修改后，记得保存并重启服务器。下次启动时，服务器将应用你设置的参数。

### 游戏玩法配置设置

Abiotic Factor 拥有丰富的游戏玩法配置选项，统称为 **Sandbox Settings**。通过 FTP 访问服务器时，主 `world` 文件夹中应包含一个名为 **SandboxSettings.ini** 的文件。

如果你没看到这个文件，可以在本地创建该文件，并复制以下内容：[Abiotic Factor 默认 SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini)。

你可以根据需要调整数值。准备好后，通过 FTP 上传此文件到主 `world` 文件夹，路径如下：
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

下面的表格总结了 **SandboxSettings.ini** 文件中的几个关键游戏设置。想查看全部选项，请访问[官方 GitHub 页面](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini)。

| 参数名称                   | 示例       | 说明                                               |
| -------------------------- | ---------- | -------------------------------------------------- |
| LootRespawnEnabled         | true/false | 控制地图上是否刷新战利品                           |
| PowerSocketsOffAtNight     | true/false | 控制夜晚是否关闭电源插座                           |
| DayNightCycleSpeedMultiplier | 1.0      | 设置昼夜循环速度倍数                               |
| EnemySpawnRate             | 1.0        | 设置敌人刷新频率                                   |
| EnemyHealthMultiplier      | 1.0        | 设置敌人生命值倍数                                 |
| EnemyPlayerDamageMultiplier| 1.0        | 设置敌人对玩家造成伤害的倍数                       |
| DetectionSpeedMultiplier   | 1.0        | 设置敌人发现玩家的速度倍数                         |
| PlayerXPGainMultiplier     | 1.0        | 设置玩家获得经验值的倍数                           |
| ItemStackSizeMultiplier    | 1.0        | 设置物品堆叠数量的倍数                             |
| ItemDurabilityMultiplier   | 1.0        | 设置物品耐久度的倍数                               |
| ShowDeathMessages          | true/false | 控制是否显示实体死亡消息                           |
| AllowRecipeSharing         | true/false | 控制玩家是否可以共享物品配方                       |

完成修改后，记得保存并重启服务器。下次启动时，服务器将应用你设置的参数。

<InlineVoucher />