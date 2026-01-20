---
id: hytale-change-day-night-duration
title: "Hytale: Change Day/Night Duration"
description: "Discover how to teleport between Worlds on a Hytale server → Learn more now"
sidebar_label: Change Day/Night Duration
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The day and night cycle on a Hytale server defines how long daylight and nighttime phases last within a world.  By adjusting the duration of these cycles, server owners can influence gameplay pacing, atmosphere and difficulty.

Shorter nights may create a more relaxed environment, while longer nights can increase challenge and tension.  Customizing the day and night length allows you to adapt the world to the intended playstyle of your server.

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

<InlineVoucher />



## Configuration

To change the day and night duration, the configuration must be adjusted directly in the world’s `config.json` file which is located under: 

```
/gXXXXXXX/hytale/universe/worlds/<world_name>/config.json
```

If the configuration entries for daytime and nighttime duration do not yet exist, they must be added manually.  Scroll through the file until you find the following line:

```
"GameplayConfig":
```

Directly below this line, insert the day and night duration settings:

```
"DaytimeDurationSeconds": 1800,
"NighttimeDurationSeconds": 1000,
```

These values define the length of daytime and nighttime in seconds.  For example, a daytime value of `1800` results in a longer day phase, while a nighttime value of `1000` controls how long night lasts before the cycle resets. After making the changes, save the `config.json` file and start the server again.  




## Conclusion

After completing this configuration, you have full control over how long day and night last in each world on your Hytale server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂


<InlineVoucher />
