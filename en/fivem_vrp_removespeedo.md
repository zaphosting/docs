---
id: fivem_vrp_removespeedo
title: FiveM VRP Server: Remove Speedometer
description: Information on how to remove the speedometer from your FiveM server with VRP from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Remove Speedometer
---

> Force overwrite must be disabled to edit the scripts, otherwise all changes will be overwritten with the official version.

## Connect to FTP

First the [FTP access](gameserver_ftpaccess.md) must be set up:

![](https://screensaver01.zap-hosting.com/index.php/s/spb2ZfNNS9e5Dia/preview)

After this has been set up, you can now connect and open the server folder:

![](https://screensaver01.zap-hosting.com/index.php/s/QoXf3iSZirN7Ndy/preview)

Here we open the following path: `gta5-fivem/server-data/resources/CustomScripts/cfg/config.lua`


## Config Edit

In the config.lua, to disable the speedometer we can edit the following line:

`cfg.speedometer = true`

Here we simply set "true" to "false" and save the file.

After a server restart the Speedometer Ingame will be disabled.
