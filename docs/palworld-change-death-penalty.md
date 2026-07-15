---
id: palworld-change-death-penalty
title: "Palworld: Change Death Penalty"
description: "Learn how to change the Palworld death penalty by editing the server config, including DeathPenalty values and restart steps. -> Learn more now"
sidebar_label: "Change Death Penalty"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control what players lose on death by changing the `DeathPenalty` server setting. In this guide, you will learn how to edit the correct configuration file in the ZAP-Hosting web interface and apply the change properly.



## Preparation

Before you begin, make sure that:

- you have access to your Palworld game server in the ZAP-Hosting web interface
- your server is offline or you are prepared to restart it after making changes
- you understand which death behavior you want to use for your players

:::info Configuration File Access
For Palworld servers on ZAP-Hosting, the relevant settings can be edited through your game server administration under **Configs**.
:::

## Open the Palworld Configuration File

To change the death penalty, you need to edit the `PalWorldSettings.ini` file.

### Find the file in the ZAP-Hosting interface

First, log in to the ZAP-Hosting web interface and open your Palworld game server. Then navigate to the **Configs** section in the game server administration and open the file named `PalWorldSettings.ini`.

This file contains the main gameplay configuration values for your Palworld server, including the death penalty behavior.

:::note Manual Configuration Changes
The death penalty setting is stored in the configuration file itself. You need to edit the value manually rather than relying on a separate quick setting unless your current interface explicitly provides one.
:::

## Change the DeathPenalty Value

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section where gameplay settings are defined. You need to find the `DeathPenalty` entry and change its value to the option you want.

### Supported DeathPenalty values

The following values are currently used by Palworld for the `DeathPenalty` setting:

| Value | Effect |
| --- | --- |
| `None` | Players do not drop anything on death |
| `Item` | Players drop items, but keep equipment |
| `ItemAndEquipment` | Players drop items and equipment |
| `All` | Players drop items, equipment, and all Pals in their team |

:::tip Choosing the Right Setting
If you want a more casual server experience, `None` or `Item` is usually the best choice. If you want the default survival experience, use `All`.
:::

### Example configuration entry

In most Palworld server configurations, the setting appears as part of a longer `OptionSettings` line. For example:

```ini
OptionSettings=(DeathPenalty=All)
```

To disable the death penalty completely, change it to:

```ini
OptionSettings=(DeathPenalty=None)
```

If your file already contains many settings in the same `OptionSettings=(...)` block, only change the `DeathPenalty` value and leave the other entries unchanged. For example:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DeathPenalty=ItemAndEquipment,bEnablePlayerToPlayerDamage=False)
```

In this case, you would only replace `ItemAndEquipment` with your preferred value.

:::caution Preserve Existing Syntax
Do not remove commas, brackets, or other existing settings from the `OptionSettings=(...)` block. Incorrect syntax can prevent the server from loading the configuration correctly.
:::

## Save and Apply the Changes

After editing the `DeathPenalty` value, save the changes to `PalWorldSettings.ini`.

### Restart the server

Once the file has been saved, restart your Palworld server from the ZAP-Hosting web interface. A restart is required so the server can load the updated configuration.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional console commands | No |

:::info Restart Required
Palworld reads this setting from the server configuration. The new death behavior will only take effect after a full server restart.
:::

## Verify the New Death Setting

After the server has restarted, join the server and test the behavior in-game if you want to confirm the change.

### What to check

Depending on the value you selected, verify whether players:

- keep all items after death
- lose only inventory items
- lose inventory items and equipment
- lose inventory items, equipment, and team Pals

If the setting does not appear to have changed, reopen `PalWorldSettings.ini` and confirm that:

- the `DeathPenalty` value is spelled exactly correctly
- the change was saved successfully
- the server was restarted after the edit

:::danger Use Exact Value Names
The `DeathPenalty` setting is case-sensitive in practice when written as a config value. Always use the exact value names `None`, `Item`, `ItemAndEquipment`, or `All`.
:::

## Conclusion

Congratulations, you have successfully changed the Palworld death penalty. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!