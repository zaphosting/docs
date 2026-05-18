---
id: humanitz-change-day-night-length
title: "HumanitZ: Change the Day/Night Length"
description: "Discover how to adjust the day and night duration on your HumanitZ server → Learn more now"
sidebar_label: "Change Day/Night Length"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Introduction

The day and night cycle in HumanitZ directly affects gameplay, visibility, survival difficulty, and overall pacing. Shorter days can create a more intense survival experience, while longer daylight periods allow players more time to explore, build, and gather resources.

<InlineVoucher />



## Configuration

The day and night duration are controlled in the `GameServerSettings.ini` file. You can access this file in your server management panel under **Configs**. Inside the config file, locate the following parameters:

```
;Day duration in minutes
DayDur=40
;Night duration in minutes
NightDur=20
```

The values are defined in minutes:

- `DayDur` – Controls how long the daytime lasts  
- `NightDur` – Controls how long the nighttime lasts  

To change the cycle length, simply adjust the numbers to your desired duration. Example for longer days and shorter nights:

```
DayDur=60
NightDur=15
```

After editing the file, save the changes and restart the server for the new settings to take effect.



## Conclusion

Congratulations! By modifying the `DayDur` and `NightDur` values in the `GameServerSettings.ini`, you have successfully adjusted the day and night cycle on your HumanitZ server. For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />