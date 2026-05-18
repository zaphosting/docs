---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Optimize Server Performance"
description: "Learn how to optimize performance and server behavior on your Over the Top WWI server → Learn more now"
sidebar_label: Performance Settings
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Performance settings in **Over the Top WWI** influence how smoothly your server runs, especially under high player counts or heavy AI usage. Proper configuration can improve stability, reduce lag, and ensure a better gameplay experience for all players.

By adjusting these values, you can balance visual simulation, AI calculations, and server load.

<InlineVoucher />

## Configuration

Performance settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```


- `TargetFPS` defines the server performance profile

  - `0` → Default
  - `1` → Higher player count optimization
  - `2` → Very high player count optimization

- `NavCalcsPerFrame` controls how many navigation calculations are processed per frame
- `NavMeshFrames` defines how often navigation meshes are updated
- `NavMeshAutoSeed` influences how AI navigation paths are generated
- `ResetIfNoPlayers` automatically resets the server when no players are connected

  - `0` → Disabled
  - `1` → Enabled



Adjusting these settings can help improve server performance, especially when running many bots or hosting large battles.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new performance settings will be applied automatically.

## Conclusion

Congratulations! You have successfully optimized performance settings on your **Over the Top WWI server**. Proper tuning of these values helps maintain stability and ensures smooth gameplay even under heavy load.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />