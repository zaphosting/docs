---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Configure Class Limits"
description: "Learn how to configure class limits on your Over the Top WWI server → Learn more now"
sidebar_label: Class Limits
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Class limits in **Over the Top WWI** control how many players can use specific unit types such as snipers, sappers, or heavy units. Adjusting these limits helps balance gameplay and prevents certain classes from becoming overused.

By configuring class limits, you can ensure fair team compositions and create a more structured and tactical gameplay experience.

<InlineVoucher />

## Configuration

Class limits are configured inside the server configuration file. You can access and edit this file in your **gameserver management panel** under **Configs**. Locate and open the `ServerConfiguration.ini` configuration file. Inside this file, find the following parameters:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```


- `EnableClassLimits` enables or disables class restrictions
- `0` → Disabled
- `1` → Enabled

- `PercentofCavPerTeam` defines the percentage of cavalry units allowed per team

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` define how many players can use each class

- `NumberofInfOfficers` controls the number of officer roles available

- `MinimumNumOfPlayerForClassLimits` defines how many players must be on the server before class limits are applied

Adjust these values to control how many players can select each class and to balance your server according to your preferred gameplay style.

After modifying the `ServerConfiguration.ini`, save the file and restart your server. The new class limits will be applied automatically.

## Conclusion

Congratulations! You have successfully configured class limits on your **Over the Top WWI server**. This allows you to balance team compositions and improve the overall gameplay experience.

For further questions or assistance, please don’t hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />