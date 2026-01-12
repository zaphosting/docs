---
id: gmod-ttt
title: "Garry's Mod：配置指南"
description: "了解如何优化你的TTT服务器设置，提升游戏体验和回合管理 → 立即了解更多"
sidebar_label: Garry's Mod TTT 配置
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## 你的TTT服务器配置指南

**重要提示：所有更改前请先关闭服务器。**

基础配置可以直接在我们的网页面板中完成，比如服务器名称、Rcon密码和服务器密码。

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

当你完成服务器的基础配置后，就可以开始调整TTT游戏模式的具体设置了。你可以通过网页面板操作，也可以用FTP修改配置文件。

在我们的网页面板中，找到“Configs”标签，打开server.cfg文件。
在我们的网页面板中，这个功能在“Configs”标签下，打开server.cfg即可。

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

这里你会看到可以修改的数值，用来调整你的TTT服务器的游戏体验，下面快速介绍几个重要变量：

<InlineVoucher />

## 回合与地图切换

ttt_round_limit  
:::info  
最大回合数，达到后地图切换。（默认值：6）  
:::

ttt_time_limit_minutes  
:::info  
最大分钟数，达到后地图切换或发起投票。（默认值：75）  
:::

ttt_postround_dm  
:::info  
回合结束后是否开启自由伤害。击杀不会计入得分，纯自由混战。（默认值：1）  
:::

ttt_ragdoll_pinning_innocents  
:::info  
允许非叛徒玩家也能固定尸体。（默认值：1）  
:::

## 游戏玩法

ttt_traitor_pct  
:::info  
叛徒占总玩家的比例。玩家数乘以此比例后向下取整，结果小于1或大于玩家数时会自动限制在范围内。（默认值：0.25）  
:::

ttt_traitor_max  
:::info  
叛徒最大数量。（默认值：32）  
:::

ttt_detective_pct  
:::info  
侦探占总玩家的比例。（默认值：0.13）  
:::

ttt_detective_max  
:::info  
侦探最大数量。可用来限制或禁用侦探。（默认值：32）  
:::

ttt_detective_min_players  
:::info  
进入游戏的最少玩家数，低于此数侦探不会出现。（默认值：5）  
:::

ttt_detective_karma_min  
:::info  
玩家的Karma低于此值时，成为侦探的概率会降低。（默认值：600）  
:::

ttt_minimum_players  
:::info  
开始回合前必须在线的最少玩家数。此条件在准备阶段和回合开始前都会检查。（默认值：2）  
:::

## DNA系统

ttt_killer_dna_range  
:::info  
杀手DNA样本能被植入尸体的最大距离。（默认值：300）  
:::

## Karma系统

ttt_karma  
:::info  
启用Karma系统。玩家初始有一定Karma，伤害或击杀“队友”（无辜者伤害无辜者，叛徒伤害叛徒）会扣除Karma。扣除量取决于被伤害者的Karma值。（默认值：1）  
:::

ttt_karma_strict  
:::info  
开启后，Karma越低，伤害惩罚增长越快。关闭时，玩家Karma高于800时伤害惩罚很低。（默认值：1）  
:::

ttt_karma_starting  
:::info  
玩家初始Karma值。如果想让玩家能“赚取”伤害加成，可以设置为850左右。干净的游戏表现能让Karma升到1000，造成比新玩家稍高的伤害。（默认值：1000）  
:::

ttt_karma_max  
:::info  
玩家最大Karma值。超过1000不会直接带来伤害加成，只是增加缓冲，避免过早受到伤害惩罚。（默认值：1000）  
:::

ttt_karma_ratio  
:::info  
计算从受害者Karma扣除多少转移到攻击者的比例。（默认值：0.001）  
:::

ttt_karma_kill_penalty  
:::info  
所有Karma惩罚基于造成的伤害。击杀惩罚是额外的“伤害”值，比如设为100，狙击头部击杀会被视为造成200伤害。（默认值：15）  
:::

ttt_karma_round_increment  
:::info  
每回合结束时，所有玩家Karma恢复的基础值。（默认值：5）  
:::

ttt_karma_clean_bonus  
:::info  
如果玩家本回合没有伤害或击杀队友，将额外恢复30点Karma。（默认值：30）  
:::

ttt_karma_traitordmg_ratio  
:::info  
类似ttt_karma_ratio，但用于伤害叛徒时的Karma奖励。默认伤害叛徒的奖励约为伤害满Karma无辜者惩罚的1/4。（默认值：30）  
:::

ttt_karma_traitorkill_bonus  
:::info  
击杀叛徒的Karma奖励。（默认值：40）  
:::

ttt_karma_low_autokick  
:::info  
自动踢出回合结束时Karma过低的玩家。（默认值：1）  
:::

ttt_karma_low_amount  
:::info  
回合结束时触发踢出的Karma阈值。（默认值：300）  
:::

ttt_karma_low_ban  
:::info  
开启自动踢出时，是否同时封禁玩家。关闭自动踢出则无效。（默认值：1）  
:::

ttt_karma_low_ban_minutes  
:::info  
封禁时长（分钟）。（默认值：60）  
:::

ttt_karma_persist  
:::info  
在回合结束或玩家断线时保存Karma，下次连接时加载。意味着地图切换时Karma依然保留。（默认值：1）  
:::

ttt_karma_clean_half  
:::info  
当玩家Karma高于起始值（即最大Karma被设置得更高时），所有Karma增长都会根据超出起始值的程度被降低。Karma越高，增长越慢。（默认值：0.25）  
:::

当你调整完所有变量后，下一步就是保存你的更改。

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

完成后，就可以启动你的服务器啦！

<InlineVoucher />