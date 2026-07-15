---
id: palworld-hunger-and-stamina
title: "Palworld: Hunger and Stamina"
description: "Learn how to adjust Palworld hunger and stamina depletion rates for players and Pals by editing your server configuration. -> Learn more now"
sidebar_label: "Hunger and Stamina"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how quickly hunger and stamina drain for both players and Pals. In this guide, you will learn how to edit the correct server configuration file in the ZAP-Hosting web interface and apply custom depletion rates safely.

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting game server administration.

:::info Configuration Access Requirement
You need access to the server administration panel and the `Configs` section to edit Palworld configuration files manually.
:::

## Open the Palworld Configuration File

To change hunger and stamina behavior, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Go to the `Configs` section.
3. Open the `PalWorldSettings.ini` file.



:::note File Used for Gameplay Multipliers
The hunger and stamina settings are stored in `PalWorldSettings.ini`. These values are typically part of the main option string used by the dedicated server.
:::

## Change Hunger and Stamina Values

Inside `PalWorldSettings.ini`, look for the gameplay settings section that contains your server option values. You need to add or adjust the following configuration keys.

:::caution Important Spelling in Palworld
Palworld uses the spelling `Decreace` in these configuration entries. This is intentional in the server configuration format, so you must use the keys exactly as shown below.
:::

### Available Configuration Keys

| Config key | Description | Default value |
| --- | --- | --- |
| `PlayerStomachDecreaceRate` | Controls player hunger depletion rate | `1.0` |
| `PlayerStaminaDecreaceRate` | Controls player stamina depletion rate | `1.0` |
| `PalStomachDecreaceRate` | Controls Pal hunger depletion rate | `1.0` |
| `PalStaminaDecreaceRate` | Controls Pal stamina depletion rate | `1.0` |

### How the Values Work

Lower values reduce how quickly hunger or stamina is consumed.

| Value | Effect |
| --- | --- |
| `1.0` | Default depletion rate |
| `0.5` | Half depletion rate |
| `0.0` | Disables depletion entirely |

:::tip Choosing Balanced Settings
If you want a more relaxed survival experience without removing the mechanic completely, `0.5` is a practical starting point for both hunger and stamina.
:::

## Example Configuration

Add or edit the following values in `PalWorldSettings.ini` depending on the gameplay experience you want:

```ini
PlayerStomachDecreaceRate=0.5
PlayerStaminaDecreaceRate=0.5
PalStomachDecreaceRate=0.5
PalStaminaDecreaceRate=0.5
```

This example reduces hunger and stamina drain to half of the default rate for both players and Pals.

If you want to disable hunger and stamina completely, use:

```ini
PlayerStomachDecreaceRate=0.0
PlayerStaminaDecreaceRate=0.0
PalStomachDecreaceRate=0.0
PalStaminaDecreaceRate=0.0
```

:::note Placement of Settings
Depending on how your `PalWorldSettings.ini` is structured, these values may need to be included within the existing option list rather than placed as separate standalone lines. If your file already contains a long `OptionSettings` entry, make sure you preserve the existing formatting and only change or insert the relevant keys.
:::

## Save and Restart the Server

After editing the file:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server from the ZAP-Hosting game server administration.

A restart is required before the new hunger and stamina settings take effect.

:::caution Restart Required
If you do not restart the server, the updated configuration values will not be loaded by the game server.
:::

## Verify the Changes In-Game

Once the server is back online, join your server and test the new settings.

### What to Check

- Whether player hunger drains more slowly
- Whether player stamina lasts longer during movement and actions
- Whether Pal hunger decreases at the expected rate
- Whether Pal stamina usage matches your configured values

If the values do not appear to apply, reopen `PalWorldSettings.ini` and verify that:

- the config keys are spelled exactly as shown
- the values are valid decimal numbers such as `1.0`, `0.5`, or `0.0`
- the settings were saved correctly
- the server was fully restarted after editing

## Conclusion

Congratulations, you have successfully changed the hunger and stamina depletion rates on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!