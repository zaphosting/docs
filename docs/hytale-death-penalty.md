---
id: hytale-death-penalty
title: "Hytale: Change Death Penalty"
description: "Discover how death penalties work on your Hytale server → Learn more now"
sidebar_label: Change Death Penalty
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduction

On a Hytale server the **death penalty** determines how players are affected when they die.  This setting controls the extent to which player progress, items, durability, or other gameplay consequences are applied after a death event. 

:::info Early Access Notice

Hytale released on January 13th, 2026 and is currently available in Early Access. As the game is still in an active development phase, server software, configuration files, modding support, and installation workflows may continue to change over time.

:::

<InlineVoucher />


## Available Death Penalty Settings
The death penalty settings control how player deaths affect inventory contents and item durability. These options allow you to define whether items are kept, partially lost, or fully dropped, as well as how much wear items receive upon death.

The following configuration options are available:

**ItemsLossMode**
 This setting defines the overall behavior of item loss when a player dies.
 It supports the following values:

- `None` – Players keep their entire inventory after death
- `All` – All items are dropped on death
- `Configured` – Item loss is determined by percentage-based settings

**ItemsAmountLossPercentage**
 This value is only applied when `ItemsLossMode` is set to `Configured`.
 It defines how much of each item stack is removed upon death, expressed as a percentage.
 For example, a value of `50.0` means that half of each stack is lost.

**ItemsDurabilityLossPercentage**
 This setting controls how much durability items lose when a player dies.
 The value is defined as a percentage of the item’s current durability and allows death to have consequences without fully removing items.

Together, these settings provide fine-grained control over how forgiving or punishing death should be on the server.
 Careful adjustment ensures a balanced experience that aligns with the server’s intended difficulty and playstyle.



## Death penalty configuration

The death penalty settings are located within your server’s main `config.json`. These values are read when the server starts and apply globally to all players.

Within the configuration file, the death-related settings are part of the gameplay configuration.  To add or modify the death penalty, locate the following line inside `config.json`:

```
"GameplayConfig": "Default",
```

This entry defines the active gameplay configuration profile.  The death penalty configuration is placed directly below this line as a new block. Once located, add the death configuration block to define how respawning and item loss are handled:

```
"Death": {
   "RespawnController": {
     "Type": "HomeOrSpawnPoint"
   },
   "ItemsLossMode": "Configured",
   "ItemsAmountLossPercentage": 50.0,
   "ItemsDurabilityLossPercentage": 25.0
 },
```

The following example shows a typical configuration where item loss and durability loss are partially applied on death:

```
{
  "ItemsLossMode": "Configured",
  "ItemsAmountLossPercentage": 50.0,
  "ItemsDurabilityLossPercentage": 25.0
}
```

In this configuration, the server uses the `Configured` loss mode, meaning item loss is controlled by percentages.
 When a player dies, half of each item stack is removed and items lose 25 percent of their current durability.

If no item loss should occur at all, the loss mode can be set to `None`, in which case the percentage values are ignored:

```
{
  "ItemsLossMode": "None"
}
```

For a more punishing experience where all items are dropped on death, the configuration can be set to:

```
{
  "ItemsLossMode": "All"
}
```

After modifying the `config.json`, the server must be restarted for the changes to take effect.
 It is recommended to verify the behavior in-game after restarting to ensure the death penalty matches the intended difficulty.



## Conclusion

With the death penalty configured, you now have a clear overview of how player deaths are handled on your Hytale server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂



<InlineVoucher />
