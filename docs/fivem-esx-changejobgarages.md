---
id: fivem-esx-changejobgarages
title: "FiveM: Job Garages - Adding Cars"
description: Information on how to add cars to job garages on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add Job-Garage Cars
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
ESX must be installed
:::

<InlineVoucher />

## Preparations

First we have to make sure that "Force overwrite" is disabled.
To do this, we go to the Resources tab.

![](https://screensaver01.zap-hosting.com/index.php/s/rtFRtmGxJcrGGQj/preview)

There we will remove the checkmark.


## Configs Setting

Now we open the "Configs" tab.

There we wait until all Configs have appeared, after all Configs are loaded we open either the `esx_policejob/config.lua` or `esx_ambulancejob/config.lua` file, depending on which job garage we want to change.

Here we look for the `Config.AuthorizedVehicles` line, here all cars are listed which are available for the different job ranks.

:::info
Make sure that you have a comma at the end of the previous line when you add new vehicles, otherwise there may be problems.
:::

Done! Now we can restart the server, and the change will appear ingame.
