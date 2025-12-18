---
id: gmod-ttt
title: "Garry's Mod: Configuration"
description: "Discover how to optimize your TTT server settings for better gameplay and rounds management → Learn more now"
sidebar_label: Garry's Mod TTT Configuration
services:
  - gameserver-gmod
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## The Configuration of your TTT-Server

**Important: Turn off your server for all changes.**

The Basic-Configuration can be done easily in our Webinterface, as example Servername, Rcon- and Serverpassword.

![](https://screensaver01.zap-hosting.com/index.php/s/6TACDQ4QGXkRfrX/preview)

When you have configured the server as desired, we can proceed with configuring the specific settings of the TTT-Gamemode. You can use for that our Webinterface, or change the file by ftp.

You can find the Configuration Editor in our Webinterface in the tab "Configs" open there the server.cfg file.
In unserem Webinterface findest du diese Funktion unter "Configs" dort öffnest du die server.cfg

![](https://screensaver01.zap-hosting.com/index.php/s/MjC5XoBCzc2tsMo/preview)

You'll find there the values to modify the gameplay on your TTT-Server, the important variables explained quickly: 

<InlineVoucher />

## Rounds and Mapchange.

ttt_round_limit 
:::info
The max number of rounds until the map is switched. (Default: 6)
:::

ttt_time_limit_minutes
:::info
The max number of minutes until the map is switched or a vote is started (Default: 75)
:::

ttt_postround_dm
:::info
Enables damage after a round has ended. Kills are not recorded for scoring purposes, so it's a free for all. (Default: 1)
:::

ttt_ragdoll_pinning_innocents 
:::info
Lets non-traitor players pin corpses as well. (Default: 1)
:::

## Gameplay
ttt_traitor_pct
:::info
Percentage of total players that will be a traitor. The number of players will be multiplied by this number, and then rounded down. If the result is less than 1 or more than the player count, it is clamped to those values. (Default: 0.25)
:::

ttt_traitor_max
:::info
Maximum number of traitors. (Default: 32)
:::

ttt_detective_pct 
:::info
Percentage of total players that will be a detective (Default: 0.13)
:::

ttt_detective_max
:::info
Maximum number of detectives. Can be used to cap or disable detectives. (Default: 32)
:::

ttt_detective_min_players
:::info
Minimum number of players before detectives enter play. (Default: 5)
:::

ttt_detective_karma_min
:::info
If a player's Karma falls below this point, his chances of being selected as detective are reduced. (Default: 600)
:::

ttt_minimum_players
:::info
Number of players that must be present before the round begins. This is checked before the preparation phase starts, and before the actual round begins. (Default: 2)
:::

## DNA
ttt_killer_dna_range
:::info
Maximum range within which a DNA sample of the killer is planted on the corpse of the victim. (Default: 300)
:::

## Karma

ttt_karma
:::info
AEnables the karma system. Players start with a certain amount of karma, and lose it when they damage/kill "teammates" (ie. innocent if they're innocent, traitor if traitor). The amount you lose is dependent on the karma of the person you hurt or killed. (Default: 1)
:::

ttt_karma_strict
:::info
If enabled, the damage penalty increases more quickly as karma goes down. When strict is off, the damage penalty is very low when people stay above 800. (Default: 1)
:::

ttt_karma_starting
:::info
Karma players start out with. If you want players to be able to "earn" a damage bonus, you could set this to 850 or so. Playing clean rounds will let them increase it to a 1000 and do a few percent more damage than a new player. (Default: 1000)
:::

ttt_karma_max
:::info
Maximum karma a player can have. Note that increasing it above 1000 does not mean players with 1100 karma will get a damage bonus. It would just give them a "buffer" before they get a damage penalty. (Default: 1000)
:::

ttt_karma_ratio
:::info
The ratio of the damage that is used to compute how much of the victim's karma is subtracted from the attacker's. (Default: 0.001)
:::

ttt_karma_kill_penalty
:::info
All karma penalties are based on damage dealt. The kill penalty is just an extra amount of "damage" dealt when you kill someone. So if this was 100, and you headshot someone with a rifle, it would penalise you as if you dealt 200 damage. (Default: 15)
:::

ttt_karma_round_increment
:::info
The base amount by which everyone's karma is "healed" at the end of every round. (Default: 5)
:::

ttt_karma_clean_bonus
:::info
If a player has not hurt or killed a teammate this round, he will be "healed" an extra 30 karma (Default: 30)
:::

ttt_karma_traitordmg_ratio 
:::info
Like ttt_karma_ratio, but for the karma reward for damaging a traitor. By default damaging a traitor is rewarded roughly 1/4th of the penalty you'd get if it were a full-karma innocent. (Default: 30)
:::

ttt_karma_traitorkill_bonus
:::info
Bonus karma for killing a traitor. (Default: 40)
:::

ttt_karma_low_autokick
:::info
Automatically kick players who get a low karma level at the end of a round. (Default: 1)
:::

ttt_karma_low_amount
:::info
The karma level at which players get kicked at the end of the round. (Standardmäßig: 300)
:::

ttt_karma_low_ban
:::info
If low_autokick is enabled, it also ban players if this is enabled. No effect if autokick is off. (Default: 1)
:::

ttt_karma_low_ban_minutes
:::info
Minutes to ban players. (Default: 60)
:::

ttt_karma_persist
:::info
Stores the karma of a player in persistent storage, at the end of the round or if they disconnect. Then upon reconnection it will be loaded. This means the karma will persist even when the map changes. (Default: 1)
:::

ttt_karma_clean_half
:::info
When a player's Karma is above the starting level (meaning the karma max has been configured to be higher than that), all his karma increases will be reduced based on how far his karma is above that starting level. So it goes up slower the higher it is. (Default 0.25)
:::

When you have changed all variables as desired, the next Step is to save your changes.

![](https://screensaver01.zap-hosting.com/index.php/s/LyEsQQ8Af8AwWj9/preview)

After that, you're able to start your server!

<InlineVoucher />
