---
id: palworld-configuration
title: "Palworld：Palworld 服务器配置"
description: "探索如何自定义 Palworld 服务器设置，打造专属游戏体验并优化你的玩法 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍
Palworld 服务器提供了丰富的配置参数，供你根据喜好自由调整。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明它们的作用。
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="一分钟快速搭建 Palworld 服务器！" description="喜欢边看边学更容易理解？我们懂你！快来看看我们的视频，帮你轻松搞定一切。不管你是赶时间还是喜欢用最有趣的方式吸收信息，这里都有你想要的！"/>

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑参数。编辑配置文件有多种方式。

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="通过网页面板" default>

#### 通过网页面板

最友好的方式是直接进入游戏服务器的 **设置** 页面，找到对应的配置项，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="通过网页面板配置文件">

#### 通过网页面板配置文件

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

如果你想直接编辑原始文件，可以进入游戏服务器网页面板的 **配置文件** 页面，点击蓝色的编辑按钮，如下图：

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

这会在网页上打开一个文本编辑器，方便你直接修改。

</TabItem>

<TabItem value="ftp" label="通过 FTP">


#### 通过 FTP

:::note
编辑配置文件前必须先停止服务器，编辑后重启服务器，否则更改将不会生效。
:::

最后一种访问原始文件的方法是通过 FTP。如果你不熟悉 FTP，建议先查看我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。不过，这种方式相对耗时，如果你想直接编辑文件内容，推荐使用游戏服务器网页面板的 **配置文件** 功能。

</TabItem>
</Tabs>

## 服务器配置选项

### 启用跨平台联机支持

Palworld 专用服务器支持多平台联机，也就是跨平台游戏。默认使用 Steam 平台。如果你想启用 Xbox、PS5 和 Mac 支持，可以在游戏服务器管理后台的设置中开启。

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Steam 与 Microsoft Store/Xbox 版本之间的跨平台联机目前仍不可用。你的服务器只能设置为支持 Steam 或 Microsoft Store/Xbox 其中一个平台。
:::

:::info
Xbox 主机无法通过 IP 地址直接连接，因此如果你计划在 Xbox 上玩，必须将你的专用服务器设置为公开。

同时建议设置一个易于搜索的服务器名称，具体操作请参考我们的 [服务器配置](palworld-configuration.md) 指南。
:::

### 重要服务器设置

这些是定制服务器列表、密码保护及其他核心内部设置的关键配置选项。

:::tip
不建议修改端口或 IP 设置，这些会由游戏服务器自动配置。擅自更改 IP/端口可能导致服务器无法正常运行！
:::

| 参数名称                      | 示例                                   | 说明                                                         |
| ----------------------------- | ------------------------------------- | ------------------------------------------------------------ | 
| ServerPlayerMaxNum             | 4                                     | 服务器最大玩家数量（最多 32 人）                             |
| ServerName                    | ZAP-Hosting Docs Test                 | 服务器名称                                                   |
| ServerDescription             | This is a server that we are testing on | 服务器描述                                                   |
| AdminPassword                 | ctRQvhPAWVHq                         | 管理员密码，用于执行管理命令                                 |
| ServerPassword                | iLoveZAP!2024                       | 服务器密码，锁定服务器（私有）                              |
| PublicPort                   | 8211（默认）                        | 服务器对外开放的端口                                         |
| PublicIP                     | 123.123.123.123                     | 服务器对外的公网 IP                                          |
| RCONEnabled                  | true                                | 是否启用远程控制（RCON）                                    |
| RCONPort                    | 8222                                | 远程控制端口                                                |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将应用你设置的参数。

### 游戏玩法配置设置

这些配置项相对不那么关键，主要用于调整游戏玩法、进度，以及你所玩的地图和世界。

| 参数名称                       | 说明                                               | 
| ------------------------------ | -------------------------------------------------- | 
| DayTimeSpeedRate               | 白天时间流逝速度                                   |
| NightTimeSpeedRate             | 夜晚时间流逝速度                                   |
| ExpRate                      | 经验值（XP）获取倍率                               |
| PalCaptureRate               | 捕捉 Pal 的成功率                                  |
| PalSpawnNumRate              | Pal 出现频率                                       |
| PalDamageRateAttack          | Pal 造成伤害倍率                                   |
| PalDamageRateDefense         | Pal 受到伤害倍率                                   |
| PlayerDamageRateAttack       | 玩家造成伤害倍率                                   |
| PlayerDamageRateDefense      | 玩家受到伤害倍率                                   |
| PlayerStomachDecreaceRate    | 玩家饥饿值减少速度                                 |
| PlayerStaminaDecreaceRate    | 玩家耐力减少速度                                   |
| PlayerAutoHPRegeneRate       | 玩家自动回血速度                                   |
| PlayerAutoHpRegeneRateInSleep | 玩家睡眠时回血速度                                 |
| PalStomachDecreaceRate       | Pal 饥饿值减少速度                                 |
| PalStaminaDecreaceRate       | Pal 耐力减少速度                                   |
| PalAutoHPRegeneRate          | Pal 自动回血速度                                   |
| PalAutoHpRegeneRateInSleep   | Pal 在 Palbox 中睡眠时的回血速度                   |
| BuildObjectDamageRate        | 建筑物受损倍率                                     |
| BuildObjectDeteriorationDamageRate | 建筑物耐久度下降速度                             |
| CollectionDropRate           | 可采集物品掉落倍率                                 |
| CollectionObjectHpRate       | 可采集物品耐久倍率                                 |
| CollectionObjectRespawnSpeedRate | 可采集物品刷新间隔                               |
| EnemyDropItemRate            | 敌人掉落物品倍率                                   |
| DeathPenalty                 | 死亡惩罚（无/物品）                               |
| GuildPlayerMaxNum            | 公会最大玩家数                                     |
| PalEggDefaultHatchingTime   | 大型蛋孵化时间（小时）                             |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将应用你设置的参数。

<InlineVoucher />