---
id: humanitz-change-zombie-difficulty
title: "HumanitZ: Change Zombie Difficulty"
description: "Learn how to adjust zombie and AI difficulty settings on your HumanitZ server → Learn more now"
sidebar_label: "Change Zombie Difficulty"
services:
  - gameserver-humanitz

---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

Zombie difficulty plays a major role in shaping the survival experience in HumanitZ. From zombie strength and speed to spawn multipliers and AI raid events, these settings determine how dangerous the world becomes.

All zombie and AI-related difficulty options are configured inside the `GameServerSettings.ini` file and allow you to fully control the intensity of PvE encounters on your server.

<InlineVoucher />

## Configuration

Zombie difficulty settings are controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameters:

```
;Health difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffHealth=1

;Speed difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffSpeed=2

;Damage difficulty where 0=Very Easy, 1=Easy, 2=Default, 3=Hard, 4=Very Hard, 5=Nightmare
ZombieDiffDamage=3

;Zombie amount multiplier 2 for example would mean twice as many zombies. 0.5 would mean half as many zombies.
ZombieAmountMulti=1

;Human bandit amount multiplier 2 for example would mean twice as many human bandits. 0.5 would mean half as many human bandits.
HumanAmountMulti=1

;Zombie dog mainly appear at night. 2 for example would mean twice as many zombie dogs. 0.5 would mean half as many zombie dogs.
ZombieDogMulti=1

;The time in minutes it takes for zombies to respawn, set to 0 to disable zombie respawning.
ZombieRespawnTimer=90

;The game will sometimes spawn AI events such as zombies or humans raiding your location. 0 = Disabled, 1 = Low, 2 = Default, 3 = High, 4 = Insane
AIEvent=2
```

Below is a breakdown of what each setting controls:

- `ZombieDiffHealth` – Controls zombie health difficulty  
- `ZombieDiffSpeed` – Controls zombie movement speed  
- `ZombieDiffDamage` – Controls zombie damage output  
- `ZombieAmountMulti` – Multiplies the total number of zombies spawning  
- `HumanAmountMulti` – Multiplies the number of human bandits spawning  
- `ZombieDogMulti` – Multiplies the number of zombie dogs spawning  
- `ZombieRespawnTimer` – Defines how long it takes for zombies to respawn (0 disables respawning)  
- `AIEvent` – Controls the frequency of AI raid events  

After making changes, save the file and restart the server for the new settings to take effect.



## Example Difficulty Presets

### Easy Zombie Setup

This configuration creates a more forgiving PvE experience with fewer enemies and reduced threat levels.

```
ZombieDiffHealth=1
ZombieDiffSpeed=1
ZombieDiffDamage=1
ZombieAmountMulti=0.75
HumanAmountMulti=0.75
ZombieDogMulti=0.5
ZombieRespawnTimer=180
AIEvent=1
```



### Hard Zombie Setup

This configuration increases enemy strength, spawn rates, and event frequency for a much more dangerous world.

```
ZombieDiffHealth=4
ZombieDiffSpeed=4
ZombieDiffDamage=4
ZombieAmountMulti=1.5
HumanAmountMulti=1.5
ZombieDogMulti=2
ZombieRespawnTimer=60
AIEvent=3
```



## Conclusion

Congratulations! By adjusting the zombie-related values in the `GameServerSettings.ini`, you have successfully customized the zombie difficulty settings on your HumanitZ server.  For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />

