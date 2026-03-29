---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Configure Build Points and Resources"
description: "Learn how to configure build points, cannons, and resource limits on your Over the Top WWI server → Learn more now"
sidebar_label: Build Points & Resources
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Build points and resource settings in **Over the Top WWI** control how many structures, defenses, and equipment players can deploy during a match. These values directly affect gameplay balance, especially in modes where building and fortifications play a key role.

By adjusting these settings, you can create more defensive gameplay with extensive fortifications or limit resources for faster and more aggressive matches.

<InlineVoucher />

## Configuration

Build and resource settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```


- `AttackerBuildPoints` and `DefenderBuildPoints` define how many build points each team has available

- `AttackerCannonPoints` and `DefenderCannonPoints` control how many cannons or artillery units can be deployed

- `SapperBPRegenAmount` defines how many build points are regenerated over time

- `SapperCannonPRegenAmount` controls how quickly cannon points regenerate

- `SapperPropBPRegenTime` and `CannonPropPRegenTime` define the time in seconds between regeneration ticks

Adjust these values to control how many structures and defenses players can create and how quickly resources are replenished during gameplay.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The updated resource settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured build points and resource settings on your **Over the Top WWI server**. This allows you to control fortifications, balance gameplay, and shape the overall battle experience.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />