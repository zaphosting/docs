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

![image](https://user-images.githubusercontent.com/13604413/159166808-46b4c1fb-34e2-4fb4-b2bb-07de12285f38.png)

There we will remove the checkmark.


## Configs Setting

Now we open the "Configs" tab.

There we wait until all Configs have appeared, after all Configs are loaded we open either the `esx_policejob/config.lua` or `esx_ambulancejob/config.lua` file, depending on which job garage we want to change.

Here we look for the `Config.AuthorizedVehicles` line, here all cars are listed which are available for the different job ranks.

> Make sure that you have a comma at the end of the previous line when you add new vehicles, otherwise there may be problems.

Done! Now we can restart the server, and the change will appear ingame.
