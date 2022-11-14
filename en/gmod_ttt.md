---
id: gmod_ttt
title: Garry's Mod: TTT configuration
description: Information about the configuration options for your Garry's Mod TTT server from ZAP-Hosting -ZAP-Hosting.com documentation
sidebar_label: Garry's Mod TTT Configuration
---

## The Configuration of your TTT-Server

**Important: Turn off your server for all changes.**

The Basic-Configuration can be done easily in our Webinterface, as example Servername, Rcon- and Serverpassword.

![image](https://user-images.githubusercontent.com/26007280/189975998-d6cc350c-13a1-4ed4-b237-c5289e04a4db.png)

When you have configured the server as desired, we can proceed with configuring the specific settings of the TTT-Gamemode. You can use for that our Webinterface, or change the file by ftp.

You can find the Configuration Editor in our Webinterface in the tab "Configs" open there the server.cfg file.
In unserem Webinterface findest du diese Funktion unter "Configs" dort öffnest du die server.cfg

![image](https://user-images.githubusercontent.com/26007280/189976031-646a71bc-bfb1-4b67-af1e-f6616be77aa7.png)

You'll find there the values to modify the gameplay on your TTT-Server, the important variables explained quickly: 

## Rounds and Mapchange.

ttt_round_limit 
> The max number of rounds until the map is switched. (Default: 6)

ttt_time_limit_minutes
> The max number of minutes until the map is switched or a vote is started (Default: 75)

ttt_postround_dm
> Enables damage after a round has ended. Kills are not recorded for scoring purposes, so it's a free for all. (Default: 1)

ttt_ragdoll_pinning_innocents 
> Lets non-traitor players pin corpses as well. (Default: 1)

## Gameplay
ttt_traitor_pct
> Percentage of total players that will be a traitor. The number of players will be multiplied by this number, and then rounded down. If the result is less than 1 or more than the player count, it is clamped to those values. (Default: 0.25)

ttt_traitor_max
> Maximum number of traitors. (Default: 32)

ttt_detective_pct 
> Percentage of total players that will be a detective (Default: 0.13)

ttt_detective_max
> Maximum number of detectives. Can be used to cap or disable detectives. (Default: 32)

ttt_detective_min_players
> Minimum number of players before detectives enter play. (Default: 5)

ttt_detective_karma_min
> If a player's Karma falls below this point, his chances of being selected as detective are reduced. (Default: 600)

ttt_minimum_players
> Number of players that must be present before the round begins. This is checked before the preparation phase starts, and before the actual round begins. (Default: 2)

## DNA
ttt_killer_dna_range
> Maximum range within which a DNA sample of the killer is planted on the corpse of the victim. (Default: 300)

## Karma

ttt_karma
> AEnables the karma system. Players start with a certain amount of karma, and lose it when they damage/kill "teammates" (ie. innocent if they're innocent, traitor if traitor). The amount you lose is dependent on the karma of the person you hurt or killed. (Default: 1)

ttt_karma_strict
> If enabled, the damage penalty increases more quickly as karma goes down. When strict is off, the damage penalty is very low when people stay above 800. (Default: 1)

ttt_karma_starting
> Karma players start out with. If you want players to be able to "earn" a damage bonus, you could set this to 850 or so. Playing clean rounds will let them increase it to a 1000 and do a few percent more damage than a new player. (Default: 1000)

ttt_karma_max
> Maximum karma a player can have. Note that increasing it above 1000 does not mean players with 1100 karma will get a damage bonus. It would just give them a "buffer" before they get a damage penalty. (Default: 1000)

ttt_karma_ratio
> The ratio of the damage that is used to compute how much of the victim's karma is subtracted from the attacker's. (Default: 0.001)

ttt_karma_kill_penalty
> All karma penalties are based on damage dealt. The kill penalty is just an extra amount of "damage" dealt when you kill someone. So if this was 100, and you headshot someone with a rifle, it would penalise you as if you dealt 200 damage. (Default: 15)

ttt_karma_round_increment
> The base amount by which everyone's karma is "healed" at the end of every round. (Default: 5)

ttt_karma_clean_bonus
> If a player has not hurt or killed a teammate this round, he will be "healed" an extra 30 karma (Default: 30)

ttt_karma_traitordmg_ratio 
> Like ttt_karma_ratio, but for the karma reward for damaging a traitor. By default damaging a traitor is rewarded roughly 1/4th of the penalty you'd get if it were a full-karma innocent. (Default: 30)

ttt_karma_traitorkill_bonus
> Bonus karma for killing a traitor. (Default: 40)

ttt_karma_low_autokick
> Automatically kick players who get a low karma level at the end of a round. (Default: 1)

ttt_karma_low_amount
> The karma level at which players get kicked at the end of the round. (Standardmäßig: 300)

ttt_karma_low_ban
> If low_autokick is enabled, it also ban players if this is enabled. No effect if autokick is off. (Default: 1)

ttt_karma_low_ban_minutes
> Minutes to ban players. (Default: 60)

ttt_karma_persist
> Stores the karma of a player in persistent storage, at the end of the round or if they disconnect. Then upon reconnection it will be loaded. This means the karma will persist even when the map changes. (Default: 1)

ttt_karma_clean_half
> When a player's Karma is above the starting level (meaning the karma max has been configured to be higher than that), all his karma increases will be reduced based on how far his karma is above that starting level. So it goes up slower the higher it is. (Default 0.25)

When you have changed all variables as desired, the next Step is to save your changes.

![image](https://user-images.githubusercontent.com/26007280/189976092-c8d32408-af27-4bf1-aa25-4d226e1808e5.png)

After that, you're able to start your server!
