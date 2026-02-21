---
id: cs2-configuration
title: "CS2: Server configuration"
description: "Explore how to configure Counter-Strike servers with gamemodes, mapgroups, and GSL tokens for optimized gameplay → Learn more now"
sidebar_label: Server Configration
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Counter-Strike servers can be configured widely. Basic settings can be configured via the **server.cfg** config file and via the settings page in the web interface. The advanced configuration is carried out via the gamemode config files such as gamemode_competitive.cfg, gamemode_custom.cfg, gamemode_casual.cfg, gamemode_cooperative.cfg and so on. 

Under the settings you can choose the gamemode you want to use. The commands of this Config are then accordingly loaded. These can be managed either in the game server administration or manually via FTP under **gXXXXXX/cs2/game/csgo/cfg/**. 

<InlineVoucher />

## Configuration



### Configuration via the interface (Settings)

At the settings page you can adjust basic settings for the GSL token, gametype/gamemode, mapgroup and more.  

![](https://screensaver01.zap-hosting.com/index.php/s/eafHZL86Zr6QyGk/preview)



**GSL Token**

Gameserver Login Tokens (GSLTs) is a procedure that Steam has implemented as a protective measure. To run gameservers of certain Steam Games (mainly source games) it is necessary to generate a token. More detailed information can be found here:

[GSL-Token](source-gsltoken.md)



**Gametype**

There are different gamemodes. In the following you see a list of all available options:

- Classic Casual
- Classic Competitive
- Deathmatch
- Wingman



**Mapgroup**

Mapgroups are groups of maps which normally correspond to a certain category. By default there are the **mg_active, mg_allclassic** groups. Optionally you can create your own. This has to be added to the **gamemodes_server.txt**. The structure of such a mapgroup is easy to build and looks like this:

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



**Startmap**

The start map is used to determine which map should be loaded during the startup process. It is important that the name of the map is written completely and correctly. The file extension is not necessary. 



**Pingboost**

Pingboost is a way to change the feel of the game by various methods to achieve the lowest possible ping.



### Configuration via server.cfg

In the **server.cfg** you can change the settings for server name, rcon password and server password. 

![](https://screensaver01.zap-hosting.com/index.php/s/9k98oi89CeEB3ka/preview)



**hostname**

The host name defines the name of the server. The name will be displayed in the server list and in scoreboard.



**rcon_password **

The rcon_password is needed to execute server commands in the game or via Rcon tools like HLSW. This can be done with the following commands:

```
rcon_password YourPassword
rcon command // For example: rcon changelevel de_dust2
```



**sv_password**

If you want to use your server privately or if you only want certain people to have access to it, you can set a server password. You will be prompted for the password when you connect to the server.



**sv_cheats**

Certain commands are protected and can therefore only be used if cheats are enabled. The command can be enabled or disabled with the value 0 (disabled) or 1 (enabled). Protected commands include, for example:

- god, sv_infinite_ammo, noclip, r_drawothermodels 2, mat_wireframe 2, enable_skeleton_draw 1, mat_fullbright 3 and a few more.



### Gamemode specific configuration

As described at the beginning you can define the gamemode/gametype you want to use in the interface at the settings page. After that you have to adjust your settings and modify the corresponding config file. In the gamemode-configs you can make detailed changes to the gameplay, bot behaviour etc.



#### Bot Commands



**bot_chatter**
This command defines what the bots are allowed to say in the game. It can be set either to off, radio, minimal or normal.



**bot_difficulty**
This command defines how difficult bots are. The following values can be set:  

- 0 - easy
- 1 - normal
- 2 - hard
- 3 - expert



**bot_quota**
This command defines the maximum number of bots you can have on your server. The default value is 10.



**bot_quota_mode**
This command defines the mode that is used to control the amount of bots. The options are: normal, fill and match. Normal is normal behavior. Fill fills the server with as many bots as is set for "bot_quota". Match fills player slots. For example, if 3 players are connected and 10 bots are set, then only 7 bots are used.




#### Money Commands

**cash_player_bomb_defused**
This command defines how much money a player earns for defusing a bomb. You can' t give more than the maximum amount of money you can get on the server.



**cash_player_bomb_planted**
This command defines how much money a player receives for planting the bomb.



**cash_player_damage_hostage**
This command defines how much money is deducted or earned for the injury of a hostage. By default the player is charged $30 for each time the hostage gets injured.



**cash_player_interact_with_hostage**
This command defines the money earned or lost for interaction with a hostage.



**cash_player_killed_enemy_default**
This command defines how much money is earned or lost by killing an enemy player with a default weapon.



**cash_player_killed_enemy_factor**
This command defines how much money is earned by killing an enemy player with one of the main weapons (standard pistols, primary rifles like the AK/M4 etc.).



**cash_player_killed_hostage**
This command defines how much money is earned or lost when a player kills a hostage.



**cash_player_killed_teammate**
This command defines how much money is earned or lost for killing a teammate.



**cash_player_rescued_hostage**
This command defines how much money is earned or lost for safely rescuing a hostage in Hostage Mode.



**cash_team_elimination_bomb_map**
This command defines how much money each team member earns if all 5 enemies on a bomb defusing map like Mirage or Dust II get killed.



**cash_team_elimination_hostage_map_t**
This command defines how much money each terrorist earns for winning a round in a hostage map by elimination.



**cash_team_elimination_hostage_map_ct**
This command defines how much money each team member earns on the CT side if they eliminate all 5 terrorists on a hostage map.



**cash_team_hostage_alive**
This command defines how much money is earned or lost if a hostage survives the round. 



**cash_team_hostage_interaction**
This command defines how much money is earned or lost for a player interacting with a hostage.



**cash_team_loser_bonus**
This command defines the initial money a team earns for losing a round. This increases in fixed steps, which is controlled by a separate command.



**cash_team_loser_bonus_consecutive_rounds**
This command defines how much money should be increased for a sequence of losses. If this value is $500 (default setting), this means that each successive round of losses will give the losing team $500 more than the previous one. This applies to up to 5 successive rounds of losses.



**cash_team_planted_bomb_but_defused**
This command defines the amount of money the Terrorist team earns for planting a bomb that is ultimately defused. This **stacks along with the round loss bonus**. The default value is $800.



**cash_team_rescued_hostage**
This command defines the amount of money that **the whole team** earns for one player rescuing the hostage.



**cash_team_terrorist_win_bomb**
This command defines the amount of cash won by each player on the Terrorist team when they win a round by the bomb exploding.



**cash_team_win_by_defusing_bomb**
This command defines the amount of money the CT team earns for winning a round by defusing the bomb.



**cash_team_win_by_hostage_rescue**
This cheat command defines the amount of money won by team members when they win a round by rescuing a hostage.



**cash_team_win_by_time_running_out_hostage**
This command defines the amount of money won by the team guarding the hostages if they win the round by not allowing any hostages to be rescued within the time limit.



**cash_team_win_by_time_running_out_bomb**
This command defines how much money the players of the counter-terrorists earn by winning a round when time expires. This means that the terrorists have not placed a bomb or eliminated all counter-terrorists in the required time.



#### Gameplay Befehle



**mp_afterroundmoney**
This command defines how much money is paid to each player of each team at the end of a round, regardless of victory or defeat. The default value is 0 (the win/loss bonus is set with another command).



**mp_buytime**
This command defines the time (in seconds) that players have to buy equipment after the start of a round. 



**mp_buy_anywhere**
This command defines whether players can access the buy menu outside of the buy zone. Keep in mind that the buy time still applies. 



**mp_death_drop_defuser**
This command defines if defuse kits are dropped on death or not. 



**mp_death_drop_grenade**
This command defines which grenade (if any) is dropped when a player is killed:

- Value: 0 - Drop no grenades on death
- Value: 1 - Drop the best most valueable grenade on death 



**mp_death_drop_gun**
This command defines which weapon should be dropped when a player is killed. The default setting is 1 ( the best ). Choose one of the following options:

- Value: 0 - Drop no guns on death
- Value: 1 - Drop the best gun on death
- Value: 2 - If there is a gun in the hand of the player at the time of death, drop that, if not, drop their most valuable gun



**mp_defuser_allocation**
This command defines whether players should receive a defuser for free at the beginning of the round or not, and if so, who should receive the defusers:

- Value: 1 - No free defusers
- Value: 2 - Random players receive a defuser
- Value: 3 - All players receive a defuser



**mp_force_pick_time** 

This command defines the duration in seconds that a player has to select a team. After this time a team is automatically selected. The default duration is 15 seconds.



**mp_forcecamera**

This command sets the scope spectators have (i.e. who players can spectate when they die). See argument information for scopes:

- Value: 0 - Dead players can watch every player
- Value: 1 - Dead players can watch their teammates
- Value: 2 - The screen turns black until the next round.



**mp_free_armor**

This command defines whether a player receives free armour and helmet at the beginning of the round:

- Value: 0 - Disabled
- Value: 1 - Enabled



**mp_freezetime**

This command defines how long players are frozen for at the start of each the round. This freeze time allows players to buy their gear and discuss tactics before the round begins. Default is 15 seconds.



**mp_friendlyfire**

This command defines whether friendly fire is enabled or disabled. When friendly fire is activated, players can cause damage to their own teammates. The default setting for this command depends on the game mode. In competitive game modes, friendly fire is activated, but not in casual games.



**mp_win_panel_display_time**

This command defines the time (in seconds) in which the scoreboard is to be displayed between rounds. The default setting is 3 seconds.



**mp_respawn_immunitytime**

This command defines how many seconds players are immune after their respawn. This command is used for the Deathmatch game mode.



**mp_halftime**

This command defines whether the teams are changed at half time or not. The default value is set to 1.



**mp_maxmoney**

This command defines the maximum amount of money a player can have.



**mp_maxrounds**

This command defines the maximum amount of rounds that the server will play for.



**mp_roundtime**

This command defines the maximum number of minutes a round lasts before it is won/lost. If the round is abandoned after this time, the victory of the round is handed over to the counter-terrorists. The seconds are given in decimal digits, 1.92 = 1m55s.



**mp_solid_teammates**

This command defines whether you can collide with your teammates or not:

- Value: 0 - Collision disabled
- Value: 1: Collision enabled



**mp_startmoney**

This command defines how much money a player receives at the beginning of a half. The default value is $800.



**mp_timelimit**

This command defines the maximum duration of each game in minutes. By default this is disabled (set to 0).



**mp_warmuptime**

This command defines how long the warm-up period lasts before the actual game starts. The time is defined in seconds.



**sv_allow_votes**

This command defines whether voting (e.g. timeout voting) is allowed or not:

- Value: 0 - Disabled
- Value: 1 - Enabled



**sv_infinite_ammo**

This command defines whether players get unlimited ammunition or not:

- Value: 1 - Infinite ammunition that can be fired without reloading.
- Value: 2 -  Infinite number of ammunition magazines. However, the magazine must be reloaded when it's empty.



**ammo_grenade_limit_flashbang**

This command defines how many flash grenades a player can carry.



**ammo_grenade_limit_total**

This command defines how many grenades a player can carry in total.

<InlineVoucher />
