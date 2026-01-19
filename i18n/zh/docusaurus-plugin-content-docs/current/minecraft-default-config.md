---
id: minecraft-default-config
title: "Minecraft：服务器配置设置"
description: "探索如何优化 Minecraft 服务器设置以提升性能和稳定性，同时自定义游戏体验 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-minecraft
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 这个配置能设置什么？

Minecraft 自带一个叫做 *server.properties* 的小配置文件。
服务器的基本配置都在这里。我们会说明每个选项的作用以及修改时需要注意的事项。有些设置需要**谨慎**对待，因为它们有时会极大影响服务器性能，甚至导致服务器不稳定。

<InlineVoucher />

### view-distance

这个设置决定了服务器的*最大可视距离*。无论客户端设置了多远的视距，服务器都只会发送这里指定范围内的区块数据。你也可以调低这个值来保护服务器性能。即使设置为 5，游戏体验也不会受影响。低于 5 的值不推荐，且极少情况下可能引发问题。  
**重要提示：** 除非绝对必要，千万不要把这个值调高，否则可能导致严重的性能问题。

:::info
这个设置只对 Vanilla 或 Forge 服务器生效。

Bukkit、Spigot 和 Paper Spigot 需要在它们自己的配置文件中设置该值。
:::

### max-build-height

这个参数决定了玩家能建造或拆除的最高高度（Y 坐标）。大于 256 的值**不允许**，服务器会忽略。这个设置很适合想限制最大建造高度的服务器。

### server-ip

如果你为你的 Root 或 VPS 预订了多个 IP，可以在这里指定使用哪个 IP。如果只有一个 IP，这里可以留空，游戏服务器同理。

### level-seed

默认情况下，世界生成器会随机生成一个 [种子](https://minecraft.fandom.com/wiki/Seed_(level_generation))，从而生成一个完全随机的世界。  
你也可以在这里定义自己的种子（由**字母或数字**组成），服务器会根据这个种子生成对应的世界。最大长度不超过**32 个字符**。

:::info
有些种子生成器可以让你根据自己的想法配置世界。

[这个](https://minecraft.tools/en/custom.php) 生成器是最棒的之一，几乎能满足各种需求。
:::

### gamemode

这个选项允许你设置服务器的默认游戏模式。每个玩家第一次进入服务器时都会被赋予这个模式，之后可以通过 [/gamemode](https://minecraft.fandom.com/wiki/Gameplay) 命令随时切换。

如果你不清楚各游戏模式的 ID，下面是列表：

| 值 | 游戏模式 |
|--|--|
| 0 | 生存模式 |
| 1 | 创造模式 |
| 2 | 冒险模式 |
| 3 | 旁观者模式 |

### server-port

你可以为服务器指定一个固定端口，结合 IP 访问。如果你想在同一台服务器上运行多个游戏服，每个服必须定义不同端口。通常这个选项可以保持默认，主要用于 BungeeCord 网络。

### enable-command-block

开启后，服务器允许使用 [命令方块](https://minecraft.fandom.com/wiki/Command_Block)。如果不需要，建议设为 *false*，因为命令方块存在被利用破坏服务器的风险。

### allow-nether

这个选项控制地狱维度是否开启。关闭后，玩家无法通过传送门进入地狱，但仍可通过插件如 [Multiverse Core](https://www.spigotmc.org/resources/multiverse-core.390/) 访问。

### enable-rcon

启用后，可以通过 RCON 从任何地方远程执行控制台命令。需要设置密码和独立端口。建议关闭 RCON 以防止未授权入侵。

### op-permission-level

这里设置新 OP 的默认权限等级。具体等级和每个玩家的权限分配，我们在[这里](minecraft-addop.md)有详细说明。

### enable-query

开启后，外部服务（比如网站）可以获取服务器的独立数据，比如当前在线人数或玩家列表。部分服务器列表依赖此功能来正确显示服务器信息。

### prevent-proxy-connections

控制玩家是否能通过 VPN / 代理连接。VPN 常被用来绕过 IP 封禁，这个选项非常实用。但有时会误判正常连接导致阻断。

:::info
想要更强的 VPN / 代理控制，建议安装专门插件。

市面上有很多免费插件，我们最推荐这个（付费）[插件](https://www.spigotmc.org/resources/antibotdeluxe-%E2%80%BA-the-most-advanced-antibot-spigot-bungee-1500-purchases-1-7-1-15.31700/updates)，能有效防护服务器免受各种机器人攻击。
:::

### generator-settings

和单人模式一样，服务器可以根据特定配置生成世界。类似种子，但生成的世界仍是随机的，因此不会和其他世界完全一样。

一个平坦地图的生成代码示例：

`{"biome":"minecraft:plains","layers":[{"block":"minecraft:bedrock","height":1},{"block":"minecraft:dirt","height":2},{"block":"minecraft:grass_block","height":1}],structures:{"village":{}}}`

### resource-pack

如果服务器想使用特定材质包，可以在这里填写**直接下载链接**。玩家确认后，材质包会自动加载并启用。

### player-idle-timeout

设置玩家空闲多少秒后自动踢出。服务器满员时，这个功能很实用，可以踢掉不活跃玩家给活跃玩家腾位置。

### level-name

默认世界名为 "world"。这里可以改成其他名字。若已有世界且改名，服务器会自动创建一个新世界，旧世界文件夹依然保留。

### motd

这里可以定义服务器列表显示的消息（MOTD）。直连时默认不显示，除非客户端装了特殊 Mod。消息支持 Minecraft 所有颜色和格式。

:::info
你可以用这个[工具](https://minecraft.tools/en/motd.php)快速制作 MOTD。
:::

### force-gamemode

决定玩家进入服务器时是否强制切换到默认游戏模式。不管之前是什么模式，都会被重置。

### hardcore

开启硬核模式，玩家死亡后会被封禁或切换到旁观者模式。开启后**必须新建世界**，因为硬核模式会影响世界生成。

### white-list

启用白名单，只有名单上的玩家能进服。相关添加、移除白名单的命令详见[这里](https://minecraft.fandom.com/wiki/Commands/whitelist)。

### broadcast-console-to-ops

决定是否让 OP 在游戏内收到控制台命令执行的聊天通知。

### pvp

控制服务器是否开启 PVP。关闭后玩家无法互相伤害，但不阻止玩家通过放置岩浆等方式间接攻击。

### spawn-npcs

控制村庄中是否生成村民。设为 *false* 时，整个服务器都不会生成村民。适合只想让玩家间交易、强化经济的服务器。

### generate-structures

影响世界生成器，决定是否生成结构物，比如村庄、神庙等。

### spawn-animals

控制服务器是否生成动物。所有动物列表见  
[这里](https://minecraft.fandom.com/wiki/Animal)。

### snooper-enabled

开启后，服务器会向 Mojang 发送匿名数据，用于游戏优化和开发。不会影响服务器性能。

### difficulty

设置服务器的整体难度，影响怪物伤害等。详细信息和选项见[这里](https://minecraft.fandom.com/wiki/Difficulty)。

### network-compression-threshold

定义客户端和服务器之间数据压缩的阈值大小。默认 256 时，数据交换约每秒 20 次。建议设置为 512 以减轻服务器负担，且无负面影响。**千万别超过 1024。**

**此设置需谨慎，错误数值可能导致玩家严重问题甚至世界损坏。**

### level-type

决定世界类型，影响世界生成器生成的世界。改动后建议**新建世界**，否则会出现世界断层，新区块会重新生成。

| 值 | 含义 |
|--|--|
| DEFAULT | 普通世界，有山脉、山谷、村庄等 |
| FLAT | 完全平坦世界，仅包含村庄 |
| LARGEBIOMES | 类似普通世界，但生物群系更大 |
| AMPLIFIED | 类似普通世界，但地形极其崎岖高低差大 |
| BUFFET | 自定义世界，配合 *generator-settings* 使用 |

### spawn-monsters

控制服务器是否生成怪物。所有怪物列表见  
[这里](https://minecraft.fandom.com/wiki/Mob)。

### max-tick-time

控制服务器每个 tick 的最大执行时间。默认超过 60 秒服务器会自动关闭。

Forge 服务器中，部分 Mod 需求较高，可能导致 tick 超时。此时可设置为 *-1* 关闭自动关闭功能。

### max-players

设置服务器最大玩家数量和可用槽位数。

### enforce-whitelist

开启后，白名单的更改会立即生效。默认需要重载白名单才能生效。

### online-mode

决定玩家是否必须使用正版账号登录。公共服务器建议开启正版验证，否则玩家可通过假冒 OP 名称获得权限。  
建议在支持插件的服务器（如 Spigot）上安装密码插件防止权限滥用。

### allow-flight

控制 Minecraft 自带的飞行反作弊功能开关。多数情况下，外挂客户端能让玩家非法飞行。

:::info
不过我们强烈建议安装插件形式的 AntiCheat！
:::

### function-permission-level

指定执行命令所需的 OP 等级。等级 4 可以执行停止服务器、踢人、封禁等高权限操作。

<InlineVoucher />