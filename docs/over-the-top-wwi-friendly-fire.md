---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Configure Friendly Fire"
description: "Learn how to enable or adjust friendly fire settings on your Over the Top WWI server → Learn more now"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Friendly fire determines whether players can damage their own teammates during gameplay. Adjusting these settings allows you to control how realistic or forgiving combat should be on your **Over the Top WWI** server.

Enabling friendly fire can increase realism and tactical gameplay, while disabling or reducing it can create a more casual and accessible experience.

<InlineVoucher />

## Configuration

Friendly fire settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```


- `EnableFriendlyMeleeFire` enables or disables melee damage against teammates.
- `EnableFriendlyRangeFire` enables or disables ranged damage against teammates.
- `FriendlyFireAtRoundStart` defines a delay in seconds before friendly fire becomes active.
- `FriendlyFirePercent` controls how much melee damage is applied to teammates
- `RangeFriendlyFirePercent` controls how much ranged damage is applied to teammates
- `ExplosionFf` enables or disables explosive damage to teammates
- `FriendlyFireReflectPercent` reflects a percentage of damage back to the attacker instead of the teammate

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new friendly fire settings will be applied immediately.

## Conclusion

Congratulations! You have successfully configured the friendly fire settings on your **Over the Top WWI server**. Adjusting these values allows you to balance realism and gameplay experience for your community.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />