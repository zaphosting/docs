---
id: fivem-esx-spawnpoints
title: "FiveM: Manage and customize spawnpoints with ESX"
description: "Discover how to customize and expand spawn points in the ESX framework for enhanced gameplay experience → Learn more now"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Looking to change the default spawnpoints or add additional ones? The handling of spawnpoints in the **ESX framework** is defined in `es_extended`. The following will explain how you can customize these. 

<InlineVoucher />

## Configuration

The spawn points are adjusted through the `main.lua` configuration file from the `es_extended` (../es_extended/shared/config/). This file can be edited via FTP. If you don't know how to use FTP yet, we recommend having a look at the [FTP access](gameserver-ftpaccess.md) guide. 

The default configuration of the spawn points looks as follows: 

```
Config.DefaultSpawns = { -- If you want to have more spawn positions and select them randomly uncomment commented code or add more locations
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
}
```

Let's assume you want to add more spawn points, then you would have to add another record to the configuration file: 

```
Config.DefaultSpawns = { -- If you want to have more spawn positions and select them randomly uncomment commented code or add more locations
    { x = 222.2027, y = -864.0162, z = 30.2922, heading = 1.0 },
    --{x = 224.9865, y = -865.0871, z = 30.2922, heading = 1.0},
    --{x = 227.8436, y = -866.0400, z = 30.2922, heading = 1.0},
    --{x = 230.6051, y = -867.1450, z = 30.2922, heading = 1.0},
    --{x = 233.5459, y = -868.2626, z = 30.2922, heading = 1.0}
    --{x = 766.5239, y = -112.0400, z = 30.2922, heading = 1.0} // NEW SPAWN 
}
```

:::info Determine coordinates
A suitable resource is required to obtain the current coordinates. You will find several to choose from on the Internet and can decide which one suits you best. :)
:::




## Conclusion

You have successfully changed existing spawnpoints or added new ones by following this method. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
