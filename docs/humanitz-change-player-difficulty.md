---
id: humanitz-change-player-difficulty
title: "HumanitZ: Change Player Difficulty"
description: "Learn how to adjust player difficulty and survival settings on your HumanitZ server → Learn more now"
sidebar_label: "Change Player Difficulty"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Player difficulty in HumanitZ determines how punishing the survival experience is. From permanent death to vital drain speed and bandit strength, these settings directly impact how challenging your server feels.

<InlineVoucher />

## Configuration

Player difficulty settings are controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameters:

````
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false

;0=Lose nothing, 1=Lose backpack and weapon in hand, 2=Previous + pockets and backpack, 3=All previous + Equipment
OnDeath=2

;Sleep deprivation effect false=Disabled true=Enabled
Sleep=true

;How fast your vitals drain 0=Slow, 1=Normal, 2=Fast
VitalDrain=1

;Dog companion health 0=Low 1=Default 2=High
CompanionHealth=1

;Dog companion damage 0=Low 1=Default 2=High
CompanionDmg=1

;The time in minutes it takes for human bandits to respawn, set to 0 to disable human bandit respawning.
HumanRespawnTimer=90

;Human bandit difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
HumanHealth=2

;Human bandit speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
HumanSpeed=2

;Human bandit damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
HumanDamage=2
````

Below is a breakdown of what each setting controls:

- `PermaDeath` – When set to `true`, players permanently lose their character upon death and must create a new one  
- `OnDeath` – Defines how much inventory is lost when a player dies  
- `Sleep` – Enables or disables sleep deprivation effects  
- `VitalDrain` – Controls how quickly hunger, thirst, and other vitals decrease  
- `CompanionHealth` – Sets the health level of the dog companion  
- `CompanionDmg` – Sets the damage level of the dog companion  
- `HumanRespawnTimer` – Determines how long it takes for human bandits to respawn (0 disables respawning)  
- `HumanHealth` – Adjusts bandit health difficulty  
- `HumanSpeed` – Adjusts bandit movement speed difficulty  
- `HumanDamage` – Adjusts bandit damage difficulty  

Modify the values according to your desired difficulty level. After editing the file, save your changes and restart the server for the new settings to take effect.



## Example Difficulty Presets

### Easy Survival Setup

This setup creates a more relaxed experience with slower vital drain, weaker enemies, and no permanent death.

```
PermaDeath=false
OnDeath=1
Sleep=false
VitalDrain=0
CompanionHealth=2
CompanionDmg=2
HumanRespawnTimer=180
HumanHealth=1
HumanSpeed=1
HumanDamage=1
```



### Hard Survival Setup

This setup increases survival pressure with permanent death, faster vital drain, and stronger bandits.

```
PermaDeath=true
OnDeath=3
Sleep=true
VitalDrain=2
CompanionHealth=0
CompanionDmg=0
HumanRespawnTimer=60
HumanHealth=4
HumanSpeed=4
HumanDamage=4
```



## Conclusion

Congratulations! By adjusting the difficulty-related values in the `GameServerSettings.ini`, you have successfully customized the player difficulty settings on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

