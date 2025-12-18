---
id: conan-configuration
title: "Conan Exiles: Configure your own server"
description: "Discover how to customize your Conan Exiles server settings for optimal gameplay and security → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-conan
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server Configuration

Conan Exiles servers can be configured extensively. The configuration of the server takes place via the config files. You can find them in the webinterface in the game server administration under Configs. To do so, open the **ServerSettings.ini** config file.



![](https://screensaver01.zap-hosting.com/index.php/s/HSqXbCnS62s9mEx/preview)



In the following you will find a categorized overview of all relevant commands, which you can use to freely configure your server according to your wishes. Certain commands may not be present in the Config by default. Such commands can simply be added afterwards.

<InlineVoucher />

## General

In the general settings you will find all relevant commands to customize the server name, passwords, anti-cheat. 

| Option                             | Description                                                  | Config command                  |
| ---------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Server Name                        | Name of your server.                                         | ServerName="..."                |
| Number of players                  | Maximum number of players                                    | Paketabhängig                   |
| Message Of The Day                 | Message of the day                                           |                                 |
| Server password                    | The server password can be changed here                      | ServerMessageOfTheDay="..."     |
| Admin password                     | Access to become an admin. Read more about this in the Become an admin guide | AdminPassword="..."             |
| BattlEye Enabled                   | Enables BattlEye AntiCheat protection                        | IsBattlEyeEnabled=              |
| PVP Enabled                        | Enables or disables PVP. 1 = enabled, 0 = disabled           | PVPEnabled=                     |
| Time-Restrict PvP                  | When this option is enabled, then the fight between players is possible only within the specified time periods | RestrictPVPTime=                |
| PvP Blitz Enabled                  | Enables or disables PVPBlitz. 1 = enabled, 0 = disabled (default) | PVPBlitzServer=                 |
| Time-Restrict PvP Building Damage  | When this option is enabled, players can attack and destroy other players' structures only within the specified time periods | RestrictPVPBuildingDamageTime=  |
| Community                          | Defines the community style: 0=None 1=Purist 2=Relaxed 3=Hard Core 4=Role Playing 5=Experimental | ServerCommunity=                |
| Server Region                      | Selecting a server region affects the filtering of your server in the list. Please select your region so that players who are also from the same region can find the server. 0 = Europe, 1 = North America, 2 = Asia, 3 = Australia, 4 = South America, 5 = Japan | serverRegion=                   |
| No Ownership                       | If this option is enabled, then there are no ownership rules on the server. This means that all players can loot all chests, use all machines, mine all buildings, etc. 1 = enabled, 0 = disabled (default). | NoOwnership=                    |
| Containers Ignore Ownership        | If this option is enabled, then all containers are open for other players. 1 = enabled, 0 = disabled | ContainersIgnoreOwnership=      |
| Can damage player owned structures | If this option is enabled, then players can attack and destroy the structures of others. 1 = enabled, 0 = disabled | CanDamagePlayerOwnedStructures= |
| Can Damage players                 | If this option is enabled, then players can be injured by other players. 1 = enabled, 0 = disabled | bCanBeDamaged=                  |
| Enable Sandstorm                   | Flagging this allows sandstorms to periodically sweep across the Exiled Lands. | EnableSandStorm=                |
| Clan Max Size                      | This sets the maximum size of clans allowed on the server. Once a clan reaches the limit, no new members can join. | clanMaxSize=                    |
| Maximum Nudity                     | This option sets the maximum nudity on the server. This overrides the client option. So, if a server is set to "No Nudity", even if a player sets their client to "Full Nudity", they will not be able to see any nudity on that server. However, if the server allows full nudity and a player sets his client to partial nudity, the client correctly displays only partial nudity. 0 = none, 1 = partial, 2 = full | MaxNudity=                      |
| Server Voice Chat                  | Determines whether voice chat should be enabled in the game or not. 1 = enabled, 0 = disabled | serverVoiceChat=                |



## Progression

In the Progression Settings you will find all the relevant commands to customize the XP experience that players can receive.

| Option                       | Description                                                  | Config command             |
| ---------------------------- | ------------------------------------------------------------ | -------------------------- |
| Player XP Rate Multiplier    | This multiplier affects all types of XP that players receive. This allows player progress to be adjusted for all activities. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPRateMultiplier=    |
| Player XP Time Multiplier    | Conan Exiles gives players XP passively over time, just for surviving. This command multiplies the rate at which players receive this XP. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPTimeMultiplier=    |
| Player XP Kill Multiplier    | This multiplies the amount of XP players receive for killing monsters and players in Conan Exiles. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPKillMultiplier=    |
| Player XP Harvest Multiplier | This multiplies the amount of XP players receive for harvesting in Conan Exiles. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPHarvestMultiplier= |
| Player XP Craft Multiplier   | This multiplies the amount of XP players receive for crafting in Conan Exiles. 0.5 = 50 XP, 1.0 = 100 XP, 1.5 = 150 XP | PlayerXPCraftMultiplier=   |



## Time

In the Time settings you will find all relevant commands to adjust the time. This allows you to configure days and nights as long or short as you like.

| Option               | Description                                                  | Config command        |
| -------------------- | ------------------------------------------------------------ | --------------------- |
| Day Cycle Speed      | This multiplies the speed of the entire 24-hour day cycle. Individual parts of the day can be adjusted in the options below. Keep in mind that the multiplier is applied in addition to the option changes listed below. | DayCycleSpeedScale=   |
| Day Time Speed       | Day hours in Conan Exiles are between 7:00am and 4:59pm game time. Changing this multiplier will increase the time that lies between the daytime hours. | DayTimeSpeedScale=    |
| Night Time Speed     | Night hours in Conan Exiles are between 7:00pm and 4:59am game time. Changing this multiplier will increase the time that lies between the night hours. | NightTimeSpeedScale=  |
| Dawn/Dusk Time Speed | Dawn in Conan Exiles is between 5:00 am and 6:59 am. Dusk is between 5:00pm and 6:59pm. Changing this multiplier multiplies the time spent in the dawn and dusk period. | DawnDuskSpeedScale=   |
| Use Catch Up Time    | Enables or disables the use of catch-up timing mechanics on the server. true = enabled, false = disabled. | UseClientCatchUpTime= |
| Catch Up Time        | To give new players a smooth start, Conan Exiles has the option to force a client PC to start at a specific time of day, regardless of the server time. When this option is applied, new characters will start at the specified time and then play at that time of day until the server "catches up" with them. We recommend not to set this to the night hours. | ClientCatchUpTime=    |



## Survival

In the Survival settings you will find all the relevant commands to customize the survival settings. This includes, for example, how much life a player can have, how fast he regenerates and much more. 

| Option                                | Description                                                  | Config command                     |
| ------------------------------------- | ------------------------------------------------------------ | ---------------------------------- |
| Player Health Multiplier              | This multiplies directly the health value of the player. 0.5 = 50 HP, 1.0 = 100 HP (standard), 1.5 = 150 HP | PlayerHealthMultiplier=            |
| Player Health Regen Speed Scale       | Multiplies the player's passive health regeneration speed. 0.5 = 2.5 HP / second, 1.0 = 5.0 HP / second (default), 1.5 = 7.5 HP / second. | PlayerHealthRegenSpeedScale=       |
| Player Stamina Multiplier             | Multiplies the amount of stamina of the player. 0.5 = 50 stamina, 1.0 = 100 stamina (default), 1.5 = 150 stamina | PlayerStaminaMultiplier=           |
| Player Sprint Speed Scale             | Defines the sprint speed of the player. 0.5 = 1 m/s, 1.0 = 2 m/s (default), 1.5 = 3 m/s | PlayerSprintSpeedScale=            |
| Player Stamina Cost Multiplier        | Increases or decreases the amount of stamina players use per activity | PlayerStaminaCostMultiplier=       |
| Player Stamina Sprint Cost Multiplier | Increases or decreases the amount of stamina players use per sprint | PlayerStaminaCostSprintMultiplier= |
| Player Stamina Regen Speed Scale      | Multiplies the player's passive stamina regeneration speed. 0 = no loss, 0.5 = 1.0 water loss / second, 1.0 = 2.0 water loss / second (default), 1.5 = 3.0 water loss / second. | PlayerStaminaRegenSpeedScale=      |
| Spieler Aktiv-Durst-Multiplikator     | Scales the rate at which a player actively gains or loses water. 0 = no loss, 0.5 = 1.0 water loss / second, 1.0 = 2.0 water loss / second (default), 1.5 = 3.0 water loss / second. | PlayerActiveThirstMultiplier=      |
| Player Idle Thirst Multiplier         | Scales the rate at which a player passively gains or loses water. 0 = no loss, 0.5 = 1.0 water loss / second, 1.0 = 2.0 water loss / second (default), 1.5 = 3.0 water loss / second. | PlayerIdleThirstMultiplier=        |
| Player Offline Thirst Multiplier      | Scales the rate at which a player gains or loses water while they are offline. 0 = no loss, 0.5 = 1.0 water loss / second, 1.0 = 2.0 water loss / second (default), 1.5 = 3.0 water loss / second. | PlayerOfflineThirstMultiplier=     |
| Player Active Hunger Multiplier       | Scales the rate at which a player actively gains or loses food. 0 = no loss, 0.5 = 1.0 water loss / second, 1.0 = 2.0 water loss / second (default), 1.5 = 3.0 water loss / second. | PlayerActiveHungerMultiplier=      |
| Player Inactivity Hunger Multiplier   | Scales the rate at which a player passively gains or loses food. 0 = no loss, 0.5 = 1.0 water loss / second, 1.0 = 2.0 water loss / second (default), 1.5 = 3.0 water loss / second. | PlayerIdleHungerMultiplier=        |
| Player Offline Hunger Multiplier      | Scales the rate at which a player gains or loses food while they are offline. 0 = no loss, 0.5 = 1.0 water loss / second, 1.0 = 2.0 water loss / second (default), 1.5 = 3.0 water loss / second. | PlayerOfflineHungerMultiplier=     |
| Logged out characters remain in world | When set to True, player bodies remain in the world in an unaware state, and when set to False, player bodies are removed from the world when offline. (Default: True) | LogoutCharactersRemainInTheWorld=  |
| Drop Equipment on Death               | When set to True, players who are killed drop their equipped items when they respawn. If False, players who die are resurrected with all their equipment. (Default value True) | DropEquipmentOnDeath=              |
| Drop Shortcut Bar Items on Death      | If True, players who are killed lose the items on their quickbars when they respawn. If False, players who die will respawn with these items. (Default True) | DropShortcutbarOnDeath=            |
| Drop Backpack on Death                | If True, players who are killed lose the items in their backpack when they respawn. If False, players who die will respawn with the contents of their backpack. (Default True) | DropBackpackOnDeath=               |
| Everybody can loot corpse             | If True, then anyone can loot the corpse of a dead player. If False, only the player can loot items from his own corpse.   (Default value True) | EverybodyCanLootCorpse=            |
| Thrall Corruption Removal Multiplier  | Raising this increases the speed at which thrall entertainers remove player corruption. Lowering it decreases the speed. | ThrallCorruptionRemovalMultiplier= |
| Player Corruption Gain Multiplier     | Multiplies corruption given to players.                      | PlayerCorruptionGainMultiplier=    |



## Combat

In the Combat settings you will find all the relevant commands to adjust the damage. This includes how much damage a player can do, how much he can absorb and much more. 

| Option                          | Description                                                  | Config command                 |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------ |
| Player Damage Multiplier        | Multiplies the amount of damage that a player does. 0 = no damage dealt, 0.5 = 10 damage dealt, 1.0 = 20 damage dealt (default), 1.5 = 30 damage dealtSchaden | PlayerDamageMultiplier=        |
| Player Damage Taken Multiplier  | Multiplies the amount of damage that a player receives. 0 = no damage dealt, 0.5 = 10 damage dealt, 1.0 = 20 damage dealt (default), 1.5 = 30 damage dealt | PlayerDamageTakenMultiplier=   |
| Minion Damage Multiplier        | Multiplies the amount of damage that thralls and pets do. 0 = no damage dealt, 0.5 = 10 damage dealt, 1.0 = 20 damage dealt (default), 1.5 = 30 damage dealt | MinionDamageMultiplier=        |
| Minion Damage Taken Multiplier  | Multiplies the amount of damage that thralls and pets receive. 0 = no damage dealt, 0.5 = 10 damage dealt, 1.0 = 20 damage dealt (default), 1.5 = 30 damage dealt | MinionDamageTakenMultiplier=   |
| NPC Damage Multiplier           | Multiplies the amount of damage that NPCs and Monsters do. 0 = no damage dealt, 0.5 = 10 damage dealt, 1.0 = 20 damage dealt (default), 1.5 = 30 damage dealt | NPCDamageMultiplier=           |
| NPC Damage Taken Multiplier     | Multiplies the amount of damage that NPCs and Monsters receive. | NPCDamageTakenMultiplier=      |
| NPC Health Multiplier           | Increases the health of all NPCs.                            | NPCHealthMultiplier=           |
| NPC Respawn Multiplier          | Multiplies the speed at which NPCs respawn in the world after dying. Note that currently many NPCs *DO NoT* respect this value. 0 = Never respawn (Untested), 0.5 = 15 seconds, 1.0 = 30 seconds (Default), 1.5 = 45 seconds | NPCRespawnMultiplier=          |
| Durability Damage Multiplier    | Modifies the amount of durability damage that an item takes when used or damaged. Increasing or decreasing this directly affects how long weapons, tools and armor will last. 0= Invulnerable weapons/tools, 0.5 = 5 durability loss per hit, 1.0 = 10 durability loss per hit (default), 1.5 = 15 durability loss per hit. | DurabilityMultiplier=          |
| Shield Durability Multiplier    | Changes the amount of durability damage a shield takes while blocking. Increasing or decreasing this value directly affects the durability of shields. 0 = Invulnerable shields, 0.5 = 5 durability losses per hit, 1.0 = 10 durability losses per hit (default), 1.5 = 15 durability losses per hit. | ShieldDurabilityMultiplier=    |
| Thrall Wakeup Time              | Determines the amount of time a thrall remains unconscious. 0 = Thralls wake up immediately (untested), 300 = Wake up after 5 minutes, 600 = Wake up after 10 minutes (default), 900 = Wake up after 15 minutes. | UnconsciousTimeSeconds=        |
| Thrall Damage While Unconscious | Multiplies the amount of damage taken by a thrall while unconscious. | ConciousnessDamageMultiplier=  |
| Avatar Lifetime                 | This determines the length of time that an Avatar can remain alive in the world. | AvatarLifetime=                |
| Disable Avatars                 | True: Avatars cannot be summoned on this server, False: Avatars can be summoned on this server. | AvatarsDisabled=               |
| Avatar Summon Time              | The time required to summon an Avatar.                       | AvatarSummonTime=              |
| Avatar Dome Duration Multiplier | Determines how long avatar domes last for.                   | AvatarDomeDurationMultiplier=  |
| Disable Landclaim Notification  | Disable Landclaim Notification. True: Disables notifcations. False: Enables notifications. | DisableLandclaimNotifications= |



## Harvesting

In the Harvesting settings you will find all the relevant commands to customize the harvest. This includes how fast something can be farmed, how often resources respawn, etc.

| Option                            | Description                                                  | Config command                  |
| --------------------------------- | ------------------------------------------------------------ | ------------------------------- |
| Item Spoil Rate Scale             | Affects the length of time that foods will last before spoiling (smaller values means longer spoiling time). 0 = Never spoil, 0.5 = 4 minutes, 1.0 = 2 minutes (default), 1.5 = 1 minute | ItemSpoilRateScale=             |
| Harvest Amount Multiplier         | Multiplies the amount of resources gathered when harvesting.1.0 = 1 Resource (Default), 2.0 = 2 Resources | HarvestAmountMultiplier=        |
| Resource Respawn Speed Multiplier | Multiplies the speed at which resources respawn after being harvested. 0,5 = 7,5 Minuten, 1,0 = 15 Minuten (Default), 1,5 = 30 Minuten | ResourceRespawnSpeedMultiplier= |
| Land Claim Radius Multiplier      | This increases and decreases the radius at which land claim is applied. This affects the respawn of resources and NPCs as well as the ability of other players to claim nearby land. 0.5 = 10 meters, 1.0 = 20 meters (standard), 1.5 = 30 meters | LandClaimRadiusMultiplier=      |



## Crafting

In the Crafting settings you will find all the relevant commands to customize crafting. This includes how fast things can be crafted. 

| Option                                | Description                                                  | Config command                      |
| ------------------------------------- | ------------------------------------------------------------ | ----------------------------------- |
| Crafting Time Multiplier              | Raising this increases the duration it takes to craft items. Lowering it decreases crafting time. | CraftingTimeMultiplier=             |
| Thrall Crafting Time Multiplier       | Raising this increases the time it takes to train a thrall. Lowering it decreases training time. | ThrallCraftingTimeMultiplier=       |
| Fuel Burn Time Multiplier             | Raising this increases the time fuel units burn. Lowering it decreases fuel burn time. | FuelBurnTimeMultiplier=             |
| Crafting Speed Multiplier             | This multiplies the speed at which items can be crafted. Note that using a Wheel of Pain to convert Thralls is considered crafting.0 or less = Immediately, 0.5 = 10 seconds, 1.0 = 20 seconds (default), 1.5 = 30 seconds | ItemConvertionMultiplier=           |
| Structure Damage Multiplier           | Multiplies the amount of damage a defensive structure (ex Palisade) can give. 0 = no damage (untested), 0.5 = 10 damage, 1.0 = 20 damage (default), 1.5 = 30 damage | StructureDamageMultiplier=          |
| Structure Damage Taken Multiplier     | Multiplies the amount of damage a structure takes when attacked (walls/crafting stations extra). 0 = no damage (untested), 0.5 = 10 damage, 1.0 = 20 damage (default), 1.5 = 30 damage | StructureDamageTakenMultiplier=     |
| Structure Health Multiplier           | Multiplies the amount of Health a structure has. 0,5 = 500 HP, 1,0 = 1000 HP (Default), 1,5 = 1500 HP | StructureHealthMultiplier=          |
| Player Encumbrance Multiplier         | This multiplies the amount of encumbrance that an item adds to the player. (Setting to 0 does not disable) 0.5 = 2.5 weight added, 1.0 = 5.0 weight added (Default), 1.5 = 7.5 weight added | PlayerEncumbranceMultiplier=        |
| Player Encumbrance Penalty Multiplier | This multiplies the penalties that a player suffers when they are encumbered. (Setting to 0 does not disable) 0.5 = 35 Movement penalty at 99%, 1.0 = 70 Movement penalty at 99% (Default), 1.5 = 125 Movement penalty at 99% | PlayerEncumbrancePenaltyMultiplier= |



## Abandonment

In the Abanonment settings you will find all the relevant commands for adjusting the abanonment of buildings. 

| Option                         | Description                                                  | Config command               |
| ------------------------------ | ------------------------------------------------------------ | ---------------------------- |
| Disable Building Abandonment   | If flagged, disables decay on buildings over time.           | DisableBuildingAbandonment=  |
| Building Decay Time Multiplier | Raising this increases the time it takes for building pieces and structures to decay. Lowering it decreases the decay time. | BuildingDecayTimeMultiplier= |



## Chat

In the Chat settings you will find all relevant commands to customize the chat. This includes activating the chat, the chat radius and the maximum message length. 

| Option             | Description                                                  | Config command        |
| ------------------ | ------------------------------------------------------------ | --------------------- |
| Chat Local Radius  | Sets at what radius local chat will broadcast around a player in centimeters | ChatLocalRadius=      |
| Max Message Length | Sets the max number of characters in a chat message.         | ChatMaxMessageLength= |
| Chat Has Global    | Allows/disallows global chat. The in-game chat has a global channel all players can speak in. | ChatHasGlobal=        |



## Purge

In the Purge settings you will find all relevant commands for adjusting the purge, its purge steps etc.

| Option                           | Description                                                  | Config command                                               |
| -------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| Enable Purge                     | Das Deaktivieren dieser Option deaktiviert die Reinigungsereignisse vollständig | EnablePurge=                                                 |
| Purge Level                      | Durch Erhöhen des Wertes wird der Schwierigkeitsgrad der Bereinigung erhöht. Beispiel: 0 deaktiviert die Bereinigungen | PurgeLevel=                                                  |
| -                                | Durch Erhöhen des Wertes wird die Anzahl der Bereinigungsvorgänge innerhalb eines Tages erhöht. Die tatsächliche Anzahl der Bereinigungen ist auch von den verschiedenen Optionen unten abhängig | PurgePeriodicity=                                            |
| -                                | Wenn diese Option aktiviert ist, dann werden die Bereinigungen auf bestimmte Zeiten beschränkt | RestrictPurgeTime=                                           |
| -                                | The value 0000 means 00:00 oclock is the weekday end time    | PurgeTimeWeekdayEnd=                                         |
| -                                | The value 0000 means 00:00 oclock is the weekday start time  | PurgeTimeWeekdayStart=                                       |
| -                                | The value 0000 means 00:00 oclock is the weekend end time    | PurgeTimeWeekendEnd=                                         |
| -                                | The value 0000 means 00:00 oclock is the weekend start time  | PurgeTimeWeekendStart=                                       |
| -                                | The value 0830 means 08:30 oclock is the weekday start time  | PurgeRestrictionWeekdayEnd=                                  |
| -                                | The value 2200 means 22:00 oclock is the weekend end time    | PurgeRestrictionWeekdayStart=                                |
| -                                | The value 1800 means 18:00 oclock is the weekend start time  | PurgeRestrictionWeekendStart=                                |
| Purge Preparation Time           | Raising this increases the time in minutes between The Purge warning and the start of the purge. | Das Erhöhen des Wertes erhöht die Zeit in Minuten zwischen der Bereinigungswarnung und dem Start der Bereinigung.PurgePreparationTime= |
| Purge Duration                   | Raising this increases the maximum time The Purge will last. If you kill all of the waves a purge can complete sooner | PurgeDuration=                                               |
| Minimum Number of Online Players | Raising this will make purges only occur when the set number of players are online. If set to zero, the Purge will attack any clan above the Purge Meter threshold (offline Purges). | MinPurgeOnlinePlayers=                                       |
| Allow Building                   | If flagged, building is allowed during purges.               | AllowBuilding=                                               |
| Purge Meter Trigger Value        | Raising this increases the amount of different selected actions clans or players can do until they are eligible to be purged. In general, the higher the number, the longer a clan needs to be active in order to trigger The Purge. | ClanPurgeTrigger=                                            |
| Purge Meter Update Interval      | This is the interval that clan Purge events are aggregated, and the scores are added to the Purge Meter. Lower numbers will raise the clan meter more quickly. | ClanScoreUpateFrenquency=                                    |
| -                                | Raising this will increase damage inflicted by NPCs during a Purge. Examples: 5.000000, 10.000000, 15.000000, 20.000000, 25.000000 | PurgeNPCBuildingDamageMultiplier=                            |



## Pets and Hunger

In the Pets and Hunger settings you will find all the relevant commands about the hunger consumption of pets. This includes, for example, how much and how fast they consume it.

| Option                              | Description                                                  | Config command                   |
| ----------------------------------- | ------------------------------------------------------------ | -------------------------------- |
| Enable Hunger System: Thralls       | Toggles the hunger system for thralls.                       | ToggleHungerSystemThralls=       |
| Enable Hunger System: Pets          | Toggles the hunger system for pets.                          | ToggleHungerSystemPets=          |
| Food Nutrition Value                | The amount of nutrition the companion gain from eating food. | FoodNutritionValue=              |
| Starvation Time In Minutes          | The amount of minutes it takes for companion hunger gauges to go from 100 to 0. Default = 10080 | StarvationTimeInMinutes=         |
| Starvation Damage Penalty Cap       | When a companion's hunger gauge reaches 0, they start taking damage to their health. This value determines how much health can be removed in total, given in percent where 1 means 100% of the health. | StarvationDamagePenaltyCap=      |
| Animal Pen Crafting Time Multiplier | Multiplies the speed of crafting in animal pens.             | AnimalPenCraftingTimeMultiplier= |
| Food Container Range multiplier     | Multiplies the distance that Food Containers can feed your companions. | FeedBoxRangeMultiplier=          |
| Exclusive Diet                      | Determines whether companions exclusively eat items listed on their diet. Disabled means they will eat any food item, in addition to their diet. | ExclusiveDiet=                   |

<InlineVoucher />
