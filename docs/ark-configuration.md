---
id: ark-configuration
title: "ARK: Server configuration"
description: "Discover how to optimize your ARK game server settings for better gameplay and customization → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Server Configuration

The configuration of an **ARK game server** may cause confusion and helplessness for some people. However, there is a reason for this. ARK provides a lot of configuration options for the game. Additionally, the configuration takes place in different configuration files, where you also have to pay attention to which commands belong in which file. In this guide we would like to give you a better overview of how the configuration of an ARK game server works. 

![](https://screensaver01.zap-hosting.com/index.php/s/oQ5BbazkfD3PjgK/preview)

<InlineVoucher />

## Differences between configuration files 

The configuration of the **ARK game server** takes place via the configuration files **GameUserSettings.ini** and **Game.ini**. You can modify them either via our **Webinterface** under **Configs** or via **FTP**. 


| Configuration file   | Webinterface                                                 | FTP                                     |
| -------------------- | ------------------------------------------------------------ | --------------------------------------- |
| GameUserSettings.ini | `Gameserver Administration -> Configs ->GameUserSettings.ini` | `ShooterGame/Saved/Config/LinuxServer/` |
| Game.ini             | `Gameserver Administration -> Configs ->Game.ini`            | `ShooterGame/Saved/Config/LinuxServer/` |

The **GameUserSettings.ini** configuration file contains options for both the game client and the server. Options for the game client are not used by the server. Server options are specified in the **[ServerSettings]** section, which are usually located at the end of the file. For advanced modifications, such as changing engram points or XP rewarded per level, disabling certain content, or customizing player tastes, the **Game.ini** configuration file is used.



## Configuration

In the following we explain the two configuration files. We will explain the most common commands and how they work. 



## Configuration: Map

ARK offers different maps that can be played on the server. You can choose which map you want to play in the webinterface under settings. 

| Maps           | Published  | Command name      |
| -------------- | ---------- | ----------------- |
| The Island     | 02.06.2015 | `TheIsland`       |
| The Center     | 17.05.2016 | `TheCenter`       |
| Scorched Earth | 01.09.2016 | `ScorchedEarth_P` |
| Ragnarok       | 12.06.2017 | `Ragnarok`        |
| Aberration     | 12.12.2017 | `Aberration_P`    |
| Extinction     | 06.11.2018 | `Extinction`      |
| Valguero       | 18.06.2019 | `Valguero_P`      |
| Genesis        | 25.02.2020 | `Genesis`         |
| Crystal Isles  | 11.06.2020 | `CrystalIsles`    |



Simply enter the command name of the map in the **Map** field and it will be loaded the next time you start your server. 



![](https://screensaver01.zap-hosting.com/index.php/s/93JNW5Hbpf35RTJ/preview)







## Configuration: Gameusersettings.ini



### [ServerSettings]



**allowThirdPersonPlayer**

This command defines whether the 3rd person perspective should be activated or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**AllowCaveBuildingPvE**

This command defines whether to allow building structures in caves (when PVE mode is active) or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**alwaysNotifyPlayerJoined**

This command defines whether players will receive a notification when a player enters the server. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**alwaysNotifyPlayerLeft**

This command defines whether players will receive a notification when a player leaves the server. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**bAllowFlyerCarryPvE**

This command defines whether players are allowed to pick up dinosaurs with a flying dinosaur or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**bDisableStructureDecayPvE**

This command disables the progressive decay of player buildings.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**DayCycleSpeedScale**

This command defines the scaling factor for the time lapse in ARK and controls how often day turns into night and night into day. The default value of 1 provides the same cycle speed as in single player mode (and on the official public servers). Values lower than 1 slow down the cycle, higher values speed it up. 1 minute of real time means about 28 minutes of game time. So for an approximate 24-hour day/night cycle in the game, the value .035 should be used.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DayTimeSpeedScale**

This command defines the scaling factor for the elapsing of time in ARK during the day. Determines the scaling factor for the passage of time in ARK during the day. The value determines the length of each day, relative to the length of each night (as determined by NightTimeSpeedScale. Decreasing this value increases the length of each day.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**NightTimeSpeedScale**

This command defines the scaling factor for the time passing in ARK during the night time. The value determines the length of each night, relative to the length of each day (as determined by DayTimeSpeedScale. Decreasing this value increases the length of each night.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCharacterFoodDrainMultiplier**

This command defines the food consumption of a dinosaur.  A higher value increases the food consumption (the dinosaurs become more hungry). It also affects the taming times. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCharacterHealthRecoveryMultiplier**

This command defines the health regeneration of a dinosaur. A higher value increases the speed of regeneration and a lower value makes it slower.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCharacterStaminaDrainMultiplier**

This command defines how fast a dinosaur gets tired. A higher value increases the speed of regeneration and a lower value makes it slower.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoCountMultiplier**

This command defines how many dinosaurs should spawn. A higher value will increase the chance of dinosaurs spawning on the map and a lower value will decrease the chance of dinosaurs spawning. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoDamageMultiplier**

This command defines how much damage a dinosaur does. A higher value increases the damage and a lower value again does less damage.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**DinoResistanceMultiplier**

This command defines the resistance of a dinosaur. A higher value increases the resistance of a dinosaur.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**globalVoiceChat**

This command defines whether the global voice chat should be enabled on the server or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**HarvestAmountMultiplier**

This command defines the amount of resources that are farmed during harvesting. A higher value means more farmed resources and a lower value means less. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**HarvestHealthMultiplier**

This command defines the health of resources, that can be harvested. Higher values increase the amount of materials harvested with each strike.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**HarvestAmountMultiplier**

This command defines the amount of resources that can be farmed during harvesting. A higher value means more farmed resources and a lower value means less. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**noTributeDownloads**

This command allows to forbid downloading game characters from the server. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PreventDownloadSurvivors**

This command allows to prevent downloading survivor characters from the server. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PreventDownloadItems**

This command allows to prevent downloading items from the server. 


| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PreventDownloadDinos**

This command allows to prevent downloading dinosaur of the server.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterFoodDrainMultiplier**

This command defines how fast a player gets hungry. Increasing the value makes the player become more hungry faster, and decreasing the value makes the player become hungrier slower. A value of 2.0 doubles the default value, a value of 0.5 halves the default value.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterHealthRecoveryMultiplier**

This command defines how fast a player heals. Increasing the value makes healing faster, and decreasing makes healing slower. A value of 2.0 doubles the default value, a value of 0.5 halves the default value.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterStaminaDrainMultiplier**

This command defines how fast players get tired. Increasing the value causes faster tiredness and decreasing makes the player more slowly tired. A value of 2.0 doubles the default value, a value of 0.5 halves the default value.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerCharacterWaterDrainMultiplier**

This command defines how quickly a player becomes thirsty. Increasing the value makes players thirsty faster, and decreasing the value makes them thirsty slower. A value of 2.0 doubles the default value, a value of 0.5 halves the default value.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerDamageMultiplier**

This command defines how much damage a player does. Increasing the value causes more damage and decreasing it causes less damage. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PlayerResistanceMultiplier**

This command defines the resistance power of a player. Increasing the value will increase the resistance and decreasing the value will decrease the resistance. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**proximityChat**

This command defines whether the local chat on the server should be enabled or not. 

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**ResourceNoReplenishRadiusPlayers**

This command defines the distance between players and resources, in which no more resources should regrow. Increasing the value will increase the radius and decreasing the value will decrease the radius. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**ResourceNoReplenishRadiusStructures**

This command defines the distance between structures and resources in which no more resources should regrow. Increasing the value will increase the radius and decreasing the value will decrease the radius. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**ResourcesRespawnPeriodMultiplier**

This command defines the distance between players and resources, in which no more resources should regrow. Increasing the value will increase the radius and decreasing the value will decrease the radius. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**ServerAdminPassword**

This command defines the password to log in as an admin. You can find more information about this in our guide: [Become admin](ark-becomeadmin.md)

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  String   |      N/A      |  Beliebig   |

**ServerCrosshair**

This command defines whether a crosshair should be displayed to the player or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (disabled)  |     0/1     |

**serverForceNoHud**

This command defines whether in-game controls should be displayed to the player or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (disabled)  |     0/1     |

**serverHardcore**

This command defines whether the hardcore mode ( if a player dies, he has to restart from the beginning) should be activated or not.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (disabled)  |     0/1     |

**ServerPassword**

This command sets the password to log in to the server. If only certain people should have access, then you have the option to set a password. By default, the option is disabled and becomes active by setting a password. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  String   |      N/A      |  Beliebig   |

**serverPVE**

This command defines whether PVP should be enabled on the server or not. If PVP is disabled, then only PVE is possible. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (disabled)  |     0/1     |

**ShowMapPlayerLocation**

This command defines whether players should be displayed on the map through markers or not. - [Example](https://screensaver01.zap-hosting.com/index.php/s/XgKByRZpzgqCZif/preview)

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (disabled)  |     0/1     |

**StructureDamageMultiplier**

This command defines how much resistance strength a structure has. Increasing the value will increase the resistance and decreasing the value will decrease the resistance. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**StructureResistanceMultiplier**

This command defines how much damage a structure receives when it is attacked. Increasing the value causes more damage and decreasing it causes less damage. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**TamedDinoDamageMultiplier**

This command defines the damage of a tamed dino when it attacks. Increasing the value causes more damage and decreasing it causes less damage. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**TamedDinoResistanceMultiplier**

This command defines the resistance strength of a tamed dinosaur. Increasing the value will increase the resistance and decreasing the value will decrease the resistance. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**TamingSpeedMultiplier**

This command defines the speed of taming. Increasing the value provides a faster taming speed and decreasing it provides a slower taming speed. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**XPMultiplier**

This command defines the experience points a player receives. Increasing the value gives more experience points and decreasing it gives less experience points. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**EnablePVPGamma**

This command defines whether the use of gamma is allowed on a PVP server or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (disabled)  |     0/1     |

**EnablePVEGamma**

This command defines whether the use of Gamma is allowed on a PVE server or not. 

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**SpectatorPassword**

This command defines the password that a non-admin must enter to be able to enter the watch mode.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  String   |      N/A      |  Beliebig   |

**DifficultyOffset**

This command defines the difficulty level of the server. To calculate the maximum creature level for a given difficulty value, simply multiply by 30 (this works because the maximum creature level scales linearly with the difficulty value, and a difficulty value of 1.0 gives a maximum creature level of 30). To calculate a difficulty offset for a maximum creature value, use this expression: 

```
DifficultyOffset = (Maximum Creature Level / 30 - 0.5) / (Official Difficulty - 0.5)
```

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  String   |    0.50000    |  Beliebig   |

**PvEStructureDecayPeriodMultiplier**

This command defines the time period in which buildings start to decay. Increasing the value causes a longer decay time and decreasing it causes a slower decay time. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PvEStructureDecayDestructionPeriod**

This command defines when structures can be destroyed by other players on a PVE server. Increasing the value results in a longer waiting time and decreasing the value results in a smaller waiting time. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PvEStructureDecayDestructionPeriod**

This command defines when structures can be destroyed by other players on a PVE server. Increasing the value results in a longer waiting time and decreasing the value results in a smaller waiting time. A value of 2.0 doubles the default value, a value of 0.5 halves the default value. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**PvPStructureDecay**

This command defines whether to enable or disable the automatic decay of buildings on a PVP server.  

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**DisableDinoDecayPvE**

This command disables (true) or enables (false) automatic unclaiming of dinos.

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**PvEDinoDecayPeriodMultiplier**

This command defines the multiplier value for the speed till a dino is unclaimed (higher = faster, lower = slower).

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**AdminLogging**

This command enables the output of admin cheat commands in the chat if they are used by an admin in the game.

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**MaxTamedDinos**

This command defines the value of the maximum tamable dinosaurs on the island. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |     8300      |      ∞      |

**MaxNumbersofPlayersInTribe**

This command defines the maximum number of players per tribe.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |       2       |      ∞      |

**KickIdlePlayersPeriod**

This command defines the time span until an inactive player will be kicked from the server. 

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Integer  | 1800 (Sekunden) |      ∞      |

**PerPlatformMaxStructuresMultiplier**

This command defines the multiplicator for structures on saddle plattforms. Please use with caution - too high values may lead to a massive lack of performance).

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |    1.00000    |      ∞      |

**StructureDamageRepairCooldown**

This command defines the time period before a previously damaged structure may be repaired again. (0 allows repair without countdown)

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |      180      |      ∞      |

**bForceAllStructureLocking**

This command defines whether all types of containers can be made lockable. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**bUseVSync**

This command defines whether VSync should be enabled or not (may minimize problems with some graphics cards).

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       0       |     0/1     |

**MaxPlatformSaddleStructureLimit**

This command defines the maximum number of structures on top of the saddle platform.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |      100      |      ∞      |

**RCONPort**

This command defines the RCON port to be used to log in via RCON console. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |      100      |      ∞      |

**AutoSavePeriodMinutes**

This command defines the interval (in minutes) when the server should automatically save.

:::info
This value is set to 30 minutes and cannot be changed. 
:::

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |      30       |      ∞      |

**RCONServerGameLogBuffer**

This command defines how many chat lines should be listed in RCON tools.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |      600      |      ∞      |

**PreventOfflinePvPInterval**

This command defines how many seconds a player has to be disconnected to be marked as actually disconnected.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  | 60 (Sekunden) |      ∞      |

**bPvPDinoDecay**

This command defines whether the dinosaurs of the tribe/player are also protected in the activated offline raid protection.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**bPvPStructureDecay**

This command defines whether the structures of the tribe/player are protected when offline raid protection is enabled.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**DisableImprintDinoBuff**

This command defines whether the additional bonus value should be deactivated, which you get as a player, if you have raised a Dinobaby yourself.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**AllowAnyoneBabyImprintCuddle**

This command defines whether each player can cuddle baby dinosaurs. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  |       1       |     0/1     |

**OverrideOfficialDifficulty**

This command overrides the difficulty level.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |       1       |     0/1     |

**TheMaxStructuresInRange**

This command defines the maximum allowed number of structures in close range.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |     10500     |      ∞      |

**PvEAllowStructuresAtSupplyDrops**

This command defines whether building structures near supply crates are allowed or not.

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**AutoDestroyDecayedDinos**

This command defines if dinos should be destroyed directly instead of becoming claimable.

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**ClampItemSpoilingTimes**

This command defines all expiration times of the items and will be set to the maximum expiration times. 

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**AllowCrateSpawnsOnTopOfStructures**

This command defines whether supply crates can land on structures.

| Data type |  Default value  | Value range |
| :-------: | :-------------: | :---------: |
|  Boolean  | 0 (Deaktiviert) |     0/1     |

**PreventOfflinePvP**

This command defines whether the "Offline Raid Protection" should be activated on PVE/PVP servers or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 1 (Aktiviert) |     0/1     |

**AllowMultipleAttachedC4**

This command allows to attach C4 explosives to dinosaurs multiple times.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 1 (Aktiviert) |     0/1     |

**bPvEDisableFriendlyFire**

This command defines if friendly fire should be disabled in PVE or not. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 1 (Aktiviert) |     0/1     |

**ServerAutoForceRespawnWildDinosInterval**

This command defines the time in seconds until a respawn of all wild dinos is forced. For example, a value of 86400 means a forced respawn after one day.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Integer  |     86400     |     0/1     |

**DisableWeatherFog**

This command defines whether the fog on the map should be activated or deactivated. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  Boolean  | 0 (Aktiviert) |     0/1     |



### **[/script/engine.gamesession]**

**MaxPlayers**

This command defines how many players can play on the server at the same time. 

| Data type |                        Default value                        | Value range |
| :-------: | :---------------------------------------------------------: | :---------: |
|   Float   | Depending on the slot selection when ordering (Fixed Slots) |   10-130    |



### **[SessionSettings]**

**SessionName**

This command sets the server name which will be displayed in the server browser, game, etc. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |  ARK #XXXXXX  |      ∞      |



### **[**MessageOfTheDay]

**Duration**

This command defines how long the welcome message should be displayed after connecting.

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|  integer  |    1.00000    |     X-X     |

**Message**

This command defines the welcome message that will be displayed when a player connects to the server. 

| Data type | Default value | Value range |
| :-------: | :-----------: | :---------: |
|   Float   |     "..."     |      /      |



## Configuration: Game.ini

As already mentioned earlier, more extensive modifications can be made via the Game. ini. This includes, for example, changing engram points or XP rewarded per level.

### Level limit

There is a way to increase the maximum level of players and dinosaurs that can be reached. For this purpose the function `LevelExperienceRampOverrides` is used. It was implemented with the v194 version. More detailed information and examples about this can be found in the Steam forum:  [Extended Game Options: How to Configure your Custom ARK server](https://steamcommunity.com/app/346110/discussions/10/530646715633129364/).

The command is applied twice. The first is for the player level and the second is for the dinosaur level. The syntax for this looks like this:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=(
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>,
ExperiencePointsForLevel[<LEVELVALUE>]=<Points>)
```

The square brackets define the respective levels (**LEVELVALUE**) and behind the equal sign the amount of XP (**Points**) needed to reach the respective level is defined.

So, for example, if you want to have 500 levels as the level limit, then this would look like this:

```
[/script/shootergame.shootergamemode]
LevelExperienceRampOverrides=( 
ExperiencePointsForLevel[0]=100, 
ExperiencePointsForLevel[1]=200, 
ExperiencePointsForLevel[2]=300, 
ExperiencePointsForLevel[3]=400, 
ExperiencePointsForLevel[4]=500, 
ExperiencePointsForLevel[5]=600,
... // Shortened for illustrative purposes
ExperiencePointsForLevel[499]=50000)
```



### Engram points

With each **level-up** you get **Engram points**. The number of **Engram points** you get per level can also be changed since the v193 version. The syntax for this looks like this:

```
OverridePlayerLevelEngramPoints=
```

For each level you must add a command line. For example, if you define 10 levels and get **5 engram points** more for every level, then it would look like this:

```
OverridePlayerLevelEngramPoints=5
OverridePlayerLevelEngramPoints=10
OverridePlayerLevelEngramPoints=15
OverridePlayerLevelEngramPoints=20
OverridePlayerLevelEngramPoints=25
OverridePlayerLevelEngramPoints=30
OverridePlayerLevelEngramPoints=35
OverridePlayerLevelEngramPoints=40
OverridePlayerLevelEngramPoints=45
OverridePlayerLevelEngramPoints=50
```

The number of command lines depends generally on the previously defined level limit. 

:::info
Ark is a fast-moving game and therefore also includes many changes at regular intervals. This also affects the server configuration. We therefore recommend to have a look at the official documentation for further and more detailed information: https://ark.fandom.com/wiki/Server_configuration
:::

<InlineVoucher />
