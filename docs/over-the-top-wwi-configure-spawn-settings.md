---
id: over-the-top-wwi-configure-spawn-settings
title: "Over the Top WWI: Configure Spawn Settings"
description: "Learn how to configure spawn behavior on your Over the Top WWI server → Learn more now"
sidebar_label: Spawn Settings
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Spawn settings in **Over the Top WWI** control how and when players re-enter the battlefield. These settings directly impact pacing, fairness, and overall match flow.

By adjusting spawn timers, grace periods, and respawn behavior, you can create faster-paced gameplay or more tactical and punishing combat scenarios.

<InlineVoucher />

## Configuration

Spawn settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
SpawnGracePeriod = 15
AttackerRespawnTime = 8
DefenderRespawnTime = 8
WaveSpawning = 0
WaveLegnth = 300
WaveBuildUpTime = 90
```


- `SpawnGracePeriod` defines how long players can spawn without penalties or restrictions at the start
- `AttackerRespawnTime` sets the respawn delay for the attacking team
- `DefenderRespawnTime` sets the respawn delay for the defending team

- `WaveSpawning` enables or disables wave-based spawning

- `WaveLegnth` defines how long a spawn wave lasts
- `WaveBuildUpTime` controls how long it takes for a wave to fully form

Adjusting these values allows you to control whether players spawn individually or in coordinated waves, and how quickly they can return to the battlefield.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new spawn behavior will be applied automatically.

## Conclusion

Congratulations! You have successfully configured spawn settings on your **Over the Top WWI server**. These adjustments allow you to fine-tune gameplay pacing and improve the overall player experience.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />