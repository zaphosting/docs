---
id: fivem_esx_changejobgarages
title: FiveM ESX Server: Job Garages - Adding Cars
description: Information on how to add cars to job garages on your FiveM server with ESX from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Add Job-Garage Cars
---

> **Important**: ESX must be installed


## 📔 Preparations

First we have to make sure that "Force overwrite" is disabled.
To do this, we go to the Resources tab.

![](https://screensaver01.zap-hosting.com/index.php/s/6ZXxWHN4wCE6WcE/preview)

There we will remove the checkmark.

![](https://screensaver01.zap-hosting.com/index.php/s/KqWnnT98PB8W9QD/preview)


## Configs Setting

Now we open the "Configs" tab.

![](https://screensaver01.zap-hosting.com/index.php/s/4PbLXXsMFX4xq34/preview)

There we wait until all Configs have appeared, after all Configs are loaded we open either the `esx_policejob/config.lua` or `esx_ambulancejob/config.lua` file, depending on which job garage we want to change.

Here we look for the `Config.AuthorizedVehicles` line, here all cars are listed which are available for the different job ranks.

If we now want to add a new vehicle to the "doctor" rank, we can do this as follows:

![](https://screensaver01.zap-hosting.com/index.php/s/CR46LHJ5tScm9f9/preview)

> Make sure that you have a comma at the end of the previous line when you add new vehicles, otherwise there may be problems.

Done! Now we can restart the server, and the change will appear ingame.
