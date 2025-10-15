---
id: fivem-qbcore-spawnpoints
title: "FiveM: Manage and customize spawnpoints with QbCore"
description: "Discover how to customize and add spawn points in the QBCore framework for enhanced gameplay experience → Learn more now"
sidebar_label: Spawnpoints
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Looking to change the default spawnpoints or add additional ones? The handling of spawnpoints in the **QBCore framework** is defined via the `qb-spawn` resource. The following will explain how you can customize these. 

<InlineVoucher />

## Configuration

The spawn points are adjusted through the `config.lua` configuration file from the `qb-spawn` resource. This file can be edited via FTP. If you don't know how to use FTP yet, we recommend having a look at the [FTP access](gameserver-ftpaccess.md) guide. 

The default configuration of the spawn points looks as follows: 

```
QB.Spawns = {
    ["legion"] = { -- Index for the table
        coords = vector4(195.17, -933.77, 29.7, 144.5), -- Where player spawns
        location = "legion", -- this is how the javascript knows which you picked
        label = "Legion Square", -- What the player sees in the menu
    },

    ["policedp"] = {
        coords = vector4(428.23, -984.28, 29.76, 3.5),
        location = "policedp",
        label = "Police Department",
    },

    ["paleto"] = {
        coords = vector4(80.35, 6424.12, 31.67, 45.5),
        location = "paleto",
        label = "Paleto Bay",
    },

    ["motel"] = {
        coords = vector4(327.56, -205.08, 53.08, 163.5),
        location = "motel",
        label = "Motels",
    },
```

Let's assume you want to add more spawn points, then you would have to add another record to the configuration file: 

```
["new_spawn_name"] = { -- Needs to be unique
    coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coords player will be spawned
    location = "new_spawn_name", -- Needs to be unique
    label = "New spawn name", -- This is the label which will show up in selection menu.
},
```

:::info Determine coordinates
A suitable resource is required to obtain the current coordinates. You will find several to choose from on the Internet and can decide which one suits you best. :)
:::

The end result would then be as follows: 

```
    QB.Spawns = {
    
        ["legion"] = { -- Index for the table
            coords = vector4(195.17, -933.77, 29.7, 144.5), -- Where player spawns
            location = "legion", -- this is how the javascript knows which you picked
            label = "Legion Square", -- What the player sees in the menu
        },
    
        ["policedp"] = {
            coords = vector4(428.23, -984.28, 29.76, 3.5),
            location = "policedp",
            label = "Police Department",
        },
    
        ["paleto"] = {
            coords = vector4(80.35, 6424.12, 31.67, 45.5),
            location = "paleto",
            label = "Paleto Bay",
        },
    
        ["motel"] = {
            coords = vector4(327.56, -205.08, 53.08, 163.5),
            location = "motel",
            label = "Motels",
        },
        
        ["new_spawn_name"] = { -- Needs to be unique
        coords = vector4(1.1, -1.1, 1.1, 180.0), -- Coords player will be spawned
        location = "new_spawn_name", -- Needs to be unique
        label = "New spawn name", -- This is the label which will show up in selection menu.
         },
    }
```




## Conclusion

You have successfully changed existing spawnpoints or added new ones by following this method. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
