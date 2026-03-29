---
id: over-the-top-wwi-configure-bots
title: "Over the Top WWI: Configure Bots"
description: "Learn how to configure bot settings on your Over the Top WWI server → Learn more now"
sidebar_label: Bots
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Bots can be used on an **Over the Top WWI** server to fill empty slots, simulate large-scale battles, and maintain activity even with low player counts. By adjusting bot settings, you can control difficulty, behavior, and the overall intensity of matches.

This allows you to create anything from small controlled skirmishes to large chaotic battles with many AI-controlled units.

<InlineVoucher />

## Configuration

Bot settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
AttackerBots = 45
DefenderBots = 45
AutoAssignBots = 0
BotCallinMulti = 250
SubBotForPlayer = 1
```


- `AttackerBots` defines the number of bots on the attacking team
- `DefenderBots` defines the number of bots on the defending team
- `AutoAssignBots` automatically distributes bots across teams
- `0` → Disabled
- `1` → Enabled

- `BotCallinMulti` controls how frequently bots are spawned or reinforced
- `SubBotForPlayer` replaces bots with real players when they join
- `1` → Enabled
- `0` → Disabled

### Advanced bot configuration

You can further customize bot behavior using additional parameters:

```
BotWeightOff = 8
BotWeightRankers = 40
BotWeightHeavys = 20
BotWeightSnipers = 10
BotWeightStormTroops = 20
BotWeightSappers = 20
BotWeightSpecialists = 10
BotWeightMech = 10
BotWeightZombies = 0
```


These values control how frequently certain unit types are selected when bots are spawned. Increasing a value will result in more bots of that type appearing in matches.

### Wave and scaling settings

```
WaveLegnth = 300
WaveBuildUpTime = 90
AutoAssignBotsScaleMulti = 100
```


- `WaveLegnth` controls how long a bot wave lasts
- `WaveBuildUpTime` defines how long it takes for a wave to fully build up
- `AutoAssignBotsScaleMulti` scales bot count depending on player numbers

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new bot settings will be applied during gameplay.

## Conclusion

Congratulations! You have successfully configured bots on your **Over the Top WWI server**. Adjusting these settings allows you to control match intensity, improve player experience, and keep your server active at all times.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />