---
id: csgo-configuration
title: "CS:GO：服务器配置"
description: "了解如何通过游戏模式、地图组和GSL令牌配置反恐精英服务器，实现最佳游戏体验 → 立即了解更多"
sidebar_label: 服务器配置
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 介绍

反恐精英服务器的配置非常灵活。基础设置可以通过 **server.cfg** 配置文件和网页界面中的设置页面进行调整。高级配置则通过游戏模式配置文件完成，比如 gamemode_competitive.cfg、gamemode_custom.cfg、gamemode_casual.cfg、gamemode_cooperative.cfg 等。

在设置中，你可以选择想要使用的游戏模式。对应的命令会被加载。你可以通过游戏服务器管理界面管理这些配置，也可以通过 FTP 手动编辑 **gXXXXXX/CS:GO/game/csgo/cfg/** 目录下的文件。

<InlineVoucher />

## 配置



### 通过界面配置（设置）

在设置页面，你可以调整 GSL 令牌、游戏类型/游戏模式、地图组等基础设置。

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**GSL 令牌**

游戏服务器登录令牌（GSLT）是 Steam 实施的一种保护措施。要运行某些 Steam 游戏（主要是 Source 引擎游戏）的游戏服务器，必须生成一个令牌。详细信息请查看：

[GSL-Token](source-gsltoken.md)



**游戏类型**

游戏模式有多种，以下是所有可用选项列表：

- 经典休闲
- 经典竞技
- 死斗模式
- 双人对战



**地图组**

地图组是由一组地图组成，通常对应某个类别。默认有 **mg_active** 和 **mg_allclassic** 两个组。你也可以自定义地图组，需要将其添加到 **gamemodes_server.txt** 中。地图组结构简单，示例如下：

```
{	 	 	 	 
 	"mg_meine_mapgroup"	 	 	 
 	{	 	 	 
 	 	"name"	"mg_meine_mapgroup"	 
 	 	"maps"	 	 
 	 	{	 	 
 	 	 	"de_map1"	""
 	 	 	"de_map2"	""
 	 	 	"de_map3"	""
 	 	 	"de_map4"	""
 	 	}	 	 
 	}	 	 	 
}
```



**起始地图**

起始地图用于确定服务器启动时加载哪张地图。地图名称必须完整且正确，文件扩展名可省略。



**Pingboost**

Pingboost 是通过各种方法调整游戏体验，尽可能降低延迟的一种手段。



### 通过 server.cfg 配置

在 **server.cfg** 文件中，你可以修改服务器名称、rcon 密码和服务器密码等设置。

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

服务器名称，显示在服务器列表和记分板中。



**rcon_password**

rcon_password 用于在游戏内或通过 Rcon 工具（如 HLSW）执行服务器命令。示例命令：

```
rcon_password YourPassword
rcon command // 例如：rcon changelevel de_dust2
```



**sv_password**

如果你想让服务器私密，或者只允许特定玩家访问，可以设置服务器密码。连接时会提示输入密码。



**sv_cheats**

某些命令受保护，只有启用作弊时才能使用。该命令通过设置 0（禁用）或 1（启用）来控制。受保护的命令包括：

- god、sv_infinite_ammo、noclip、r_drawothermodels 2、mat_wireframe 2、enable_skeleton_draw 1、mat_fullbright 3 等。



### 游戏模式专属配置

如开头所述，你可以在界面设置页面定义想用的游戏模式/类型。之后需要调整对应的配置文件，详细修改游戏玩法、机器人行为等。



#### 机器人命令



**bot_chatter**

定义机器人在游戏中允许说什么。可设置为 off、radio、minimal 或 normal。



**bot_difficulty**

定义机器人难度，取值如下：

- 0 - 简单
- 1 - 普通
- 2 - 困难
- 3 - 专家



**bot_quota**

定义服务器上机器人最大数量，默认值为 10。



**bot_quota_mode**

定义控制机器人数量的模式，选项有 normal、fill 和 match。normal 是正常行为，fill 会填满机器人数量至 bot_quota，match 会填满玩家槽位。例如，3 名玩家在线且 bot_quota 设置为 10，则只会有 7 个机器人。



#### 金钱命令

**cash_player_bomb_defused**

玩家拆弹获得的金钱，不能超过服务器允许的最大金额。



**cash_player_bomb_planted**

玩家成功安放炸弹获得的金钱。



**cash_player_damage_hostage**

玩家伤害人质时扣除或获得的金钱，默认每次扣除 30 美元。



**cash_player_interact_with_hostage**

玩家与人质互动时获得或失去的金钱。



**cash_player_killed_enemy_default**

用默认武器击杀敌人获得或失去的金钱。



**cash_player_killed_enemy_factor**

用主武器（标准手枪、主武器如 AK/M4 等）击杀敌人获得的金钱。



**cash_player_killed_hostage**

玩家击杀人质时获得或失去的金钱。



**cash_player_killed_teammate**

击杀队友时获得或失去的金钱。



**cash_player_rescued_hostage**

在人质模式中安全救出人质时获得或失去的金钱。



**cash_team_elimination_bomb_map**

在炸弹地图（如 Mirage 或 Dust II）中，团队成员击杀全部 5 名敌人时获得的金钱。



**cash_team_elimination_hostage_map_t**

在人质地图中，恐怖分子通过击杀赢得回合时获得的金钱。



**cash_team_elimination_hostage_map_ct**

在人质地图中，反恐精英击杀全部 5 名恐怖分子时获得的金钱。



**cash_team_hostage_alive**

人质存活回合时团队获得或失去的金钱。



**cash_team_hostage_interaction**

玩家与人质互动时团队获得或失去的金钱。



**cash_team_loser_bonus**

输掉回合时团队获得的初始金钱，会按固定步长递增，由另一个命令控制。



**cash_team_loser_bonus_consecutive_rounds**

连续输掉回合时金钱递增的金额。默认 500 美元，意味着每连续输一回合，输家团队获得的金钱比上一回合多 500 美元，最多连续 5 回合。



**cash_team_planted_bomb_but_defused**

恐怖分子安放炸弹但被拆除时获得的金钱，会与输回合奖金叠加，默认 800 美元。



**cash_team_rescued_hostage**

一名玩家救出人质时，整个团队获得的金钱。



**cash_team_terrorist_win_bomb**

恐怖分子通过炸弹爆炸赢得回合时，每名玩家获得的金钱。



**cash_team_win_by_defusing_bomb**

反恐精英通过拆弹赢得回合时获得的金钱。



**cash_team_win_by_hostage_rescue**

通过救出人质赢得回合时，团队成员获得的金钱。



**cash_team_win_by_time_running_out_hostage**

守护人质的团队在时间耗尽且无人质被救出时赢得回合，获得的金钱。



**cash_team_win_by_time_running_out_bomb**

反恐精英在时间耗尽且恐怖分子未放置炸弹或未消灭所有反恐精英时赢得回合，获得的金钱。



#### 游戏玩法命令



**mp_afterroundmoney**

每回合结束时，无论胜负，每名玩家获得的金钱。默认值为 0（胜负奖金由其他命令控制）。



**mp_buytime**

回合开始后，玩家购买装备的时间（秒）。



**mp_buy_anywhere**

是否允许玩家在购买区外打开购买菜单。购买时间限制依然有效。



**mp_death_drop_defuser**

玩家死亡时是否掉落拆弹器。



**mp_death_drop_grenade**

玩家死亡时掉落的手雷类型：

- 0 - 不掉落手雷
- 1 - 掉落价值最高的手雷



**mp_death_drop_gun**

玩家死亡时掉落的武器。默认 1（掉落最好的武器）。选项：

- 0 - 不掉落武器
- 1 - 掉落最好的武器
- 2 - 如果死亡时手持武器，则掉落该武器，否则掉落最贵武器



**mp_defuser_allocation**

回合开始时是否免费发放拆弹器，以及发放给谁：

- 1 - 不免费发放
- 2 - 随机玩家获得拆弹器
- 3 - 所有玩家获得拆弹器



**mp_force_pick_time**

玩家选择队伍的时间（秒），超时自动分配队伍。默认 15 秒。



**mp_forcecamera**

设置观战视角（死后能看谁）：

- 0 - 死亡玩家可观看所有玩家
- 1 - 死亡玩家只能观看队友
- 2 - 屏幕变黑直到下一回合



**mp_free_armor**

回合开始时是否免费发放护甲和头盔：

- 0 - 关闭
- 1 - 开启



**mp_freezetime**

回合开始时冻结玩家的时间（秒），用于购买装备和战术讨论。默认 15 秒。



**mp_friendlyfire**

是否开启队友伤害。竞技模式默认开启，休闲模式默认关闭。



**mp_win_panel_display_time**

回合间记分板显示时间（秒），默认 3 秒。



**mp_respawn_immunitytime**

玩家重生后无敌时间（秒），用于死斗模式。



**mp_halftime**

是否在半场时交换队伍，默认开启（1）。



**mp_maxmoney**

玩家可持有的最大金钱。



**mp_maxrounds**

服务器最多进行的回合数。



**mp_roundtime**

回合最长时间（分钟），超过时间未分出胜负则反恐精英获胜。秒数可用小数表示，如 1.92 = 1 分 55 秒。



**mp_solid_teammates**

是否允许与队友碰撞：

- 0 - 禁止碰撞
- 1 - 允许碰撞



**mp_startmoney**

半场开始时玩家初始金钱，默认 800 美元。



**mp_timelimit**

每场游戏最大时长（分钟），默认禁用（0）。



**mp_warmuptime**

热身时间（秒），正式游戏开始前的准备时间。



**sv_allow_votes**

是否允许投票（如暂停投票）：

- 0 - 禁用
- 1 - 启用



**sv_infinite_ammo**

是否无限弹药：

- 1 - 无限弹药，无需换弹
- 2 - 无限弹夹数量，但弹夹空了需换弹



**ammo_grenade_limit_flashbang**

玩家可携带的闪光弹数量。



**ammo_grenade_limit_total**

玩家可携带的手雷总数。

<InlineVoucher />