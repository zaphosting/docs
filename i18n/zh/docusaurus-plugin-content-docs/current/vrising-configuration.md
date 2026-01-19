---
id: vrising-configuration
title: "V Rising：服务器配置"
description: "探索如何自定义 V Rising 服务器设置，实现最佳游戏体验并掌控你的服务器环境 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

V Rising 服务器提供了丰富的配置参数，供你根据喜好自由调整。在本指南中，我们将详细介绍当前所有可用的配置参数，并逐一说明。

<InlineVoucher />

## 访问你的配置文件

首先，你需要访问配置文件才能编辑任何参数。编辑该文件有多种方式。

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
编辑配置文件前，服务器必须先停止。编辑配置后重启服务器，否则更改将不会生效。
:::

另外，如果你想直接编辑原始文件，可以进入游戏服务器网页面板的 **配置文件** 部分，点击蓝色的编辑文件按钮，如下图所示：

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

这会在网页上直接打开文本编辑器，方便你修改。

</TabItem>

<TabItem value="ftp" label="通过 FTP">

#### 通过 FTP

:::note
编辑配置文件前，服务器必须先停止。编辑配置后重启服务器，否则更改将不会生效。
:::

最后一种访问原始文件的方法是通过 FTP。如果你不熟悉 FTP，建议先查看我们的 [通过 FTP 访问](gameserver-ftpaccess.md) 指南。不过，这种方式相对耗时，如果你想直接编辑文件内容，推荐使用前面提到的游戏服务器网页面板的 **配置文件** 部分。

</TabItem>
</Tabs>

## 服务器配置选项

下面的章节中，我们将以表格形式展示可用的配置选项，涵盖服务器本身及游戏玩法相关的配置。

:::tip
我们不建议修改端口设置，因为这些端口由游戏服务器自动配置。擅自更改端口可能导致服务器无法正常运行！
:::

### 重要的服务器设置

本节总结了最关键的服务器设置，这些设置位于 **ServerHostSettings.json** 配置文件中。完整配置选项请参考 [游戏官方 GitHub 指南](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md)。

| 参数名称           | 示例                     | 说明                                                                 |
| ------------------ | ------------------------ | -------------------------------------------------------------------- | 
| Name               | ZAP-Hosting Docs Test    | 设置你的服务器名称                                                   |
| Description        | ZAP is the best!         | 设置服务器描述                                                       |
| Port               | 9876（默认）             | 设置游戏使用的网络端口                                               |
| QueryPort          | 9877（默认）             | 设置查询端口，用于服务器列表中返回服务器信息                         |
| MaxConnectedUsers  | 10                       | 设置服务器最大同时在线玩家数                                         |
| MaxConnectedAdmins | 4                        | 设置满员服务器时允许加入的管理员数量                                 |
| ServerFps          | 30（推荐默认）           | 设置服务器帧率，建议保持默认                                         |
| SaveName           | ZAPDocsTest              | 设置世界存档名称                                                     |
| Password           | iLoveZAP!2024            | 设置服务器密码，留空则无密码                                         |
| ListOnMasterServer | true/false               | 切换服务器是否在服务器列表中显示                                     |
| AutoSaveCount      | 15                       | 设置保留的旧存档数量                                                 |
| AutoSaveInterval   | 600                      | 设置自动存档间隔（秒）                                               |
| RCON Enabled       | true/false               | 切换是否启用 RCON                                                   |
| RCON Port          | 25575                    | 设置 RCON 端口                                                      |
| RCON Password      | iLoveZAP!2024            | 设置 RCON 连接密码                                                  |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将应用你设置的参数。

### 关键游戏玩法配置设置

V Rising 拥有大量参数和配置选项用于调整游戏玩法。本节总结了最重要的参数，这些参数位于 **ServerGameSettings.json** 配置文件中。

| 参数名称               | 示例                         | 说明                                                                                          |
| ---------------------- | ---------------------------- | --------------------------------------------------------------------------------------------- | 
| GameDifficulty         | Normal                       | 设置世界的游戏难度                                                                             |
| GameModeType           | PvP, PvE                     | 设置世界的游戏模式类型                                                                         |
| CastleDamageMode       | Always, Never, TimeRestricted | 设置城堡何时可被破坏，使用 VSCastle 参数选择“TimeRestricted”时的时间段                         |
| PlayerDamageMode       | Always, TimeRestricted        | 设置是否可以伤害其他玩家，使用 VSPlayer 参数选择“TimeRestricted”时的时间段                     |
| PvPProtectionMode      | Short, Medium, Long           | 设置新玩家无敌保护时间长度                                                                     |
| DeathContainerPermission | Anyone, ClanMembers         | 设置玩家死亡时谁可以掠夺掉落物品                                                             |
| CanLootEnemyContainers | true/false                   | 设置玩家是否可以掠夺非自己氏族的其他玩家的箱子                                               |
| BloodBoundEquipment    | true/false                   | 设置死亡后是否保留装备                                                                         |
| TeleportBoundItems     | true/false                   | 设置物品是否会阻止你通过吸血鬼传送门传送                                                     |
| AllowGlobalChat        | true/false                   | 切换是否允许全局聊天                                                                           |

完成修改后，记得保存文件并重启服务器。下次启动时，服务器将应用你设置的参数。

<InlineVoucher />