---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Configure Round Settings"
description: "Learn how to configure round duration and match flow on your Over the Top WWI server → Learn more now"
sidebar_label: Round Settings
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Round settings in **Over the Top WWI** define how long matches last and how gameplay progresses. Adjusting these values allows you to control match pacing, round length, and overall session flow.

This is especially important for balancing quick matches versus longer, more strategic battles.

<InlineVoucher />

## Configuration

Round settings are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```


- `MaxAmountofRounds` defines how many rounds are played per match
- `MaxMapTime` sets the maximum duration of a map in minutes
- `FinalRecapTimer2` controls how long the end-of-round recap is displayed

- `PersistentMatch` determines whether time and score continue across rounds

  - `0` → Disabled
  - `1` → Enabled


Adjust these values to create shorter matches with faster rotations or longer sessions with extended gameplay.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The updated round settings will be applied automatically.

## Conclusion

Congratulations! You have successfully configured round settings on your **Over the Top WWI server**. This allows you to control match duration and improve the flow of gameplay on your server.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />