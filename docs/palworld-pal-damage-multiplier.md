---
id: palworld-pal-damage-multiplier
title: "Palworld: Pal Damage Multiplier"
description: "Learn how to change the Palworld pal damage multiplier by editing Pal damage settings for attack and defense values on your server. -> Learn more now"
sidebar_label: "Pal Damage Multiplier"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to adjust how much damage your Pals deal and receive by changing the server's damage multiplier settings. In this guide, you will learn which configuration file to edit in the ZAP-Hosting interface, which values to change, and how to apply the new settings correctly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server through the ZAP-Hosting game server administration panel.

:::info Manual Configuration Required
This setup is performed by manually editing the Palworld configuration file. There is no separate in-game command required for this change.
:::

## Open the correct configuration file

To change the Pal damage multiplier, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration, open the `Configs` section and locate the `PalWorldSettings.ini` file there. This file contains the main world and gameplay configuration values for your Palworld server.

:::note Configuration Location
The relevant file for this guide is `PalWorldSettings.ini`, available through your game server administration under `Configs`.
:::

## Edit the Pal damage multiplier values

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section. The Pal damage multiplier settings are stored as configuration keys within this section.

You need to adjust the following entries:

| Config key | Default value | Purpose |
| --- | --- | --- |
| `PalDamageRateAttack` | `1.000000` | Controls how much damage your Pals deal |
| `PalDamageRateDefense` | `1.000000` | Controls how much damage your Pals receive |

### Example configuration

If the keys already exist, change their values to the multiplier you want. If they are missing, add them inside the `OptionSettings` entry.

```ini
PalDamageRateAttack=1.500000
PalDamageRateDefense=0.800000
```

### What the values mean

Use the following behavior as a reference when choosing your multiplier values:

| Value change | Effect |
| --- | --- |
| Higher `PalDamageRateAttack` | Your Pals deal more damage |
| Lower `PalDamageRateAttack` | Your Pals deal less damage |
| Higher `PalDamageRateDefense` | Your Pals receive less favorable defense balancing and effectively take damage according to the increased multiplier |
| Lower `PalDamageRateDefense` | Your Pals receive more damage |

:::caution Check Your Multiplier Values Carefully
Palworld server settings use numeric multiplier values. Enter only valid decimal numbers such as `0.500000`, `1.000000`, or `2.000000`. Invalid formatting can prevent the server from loading the configuration correctly.
:::

## Save the changes

After editing the values in `PalWorldSettings.ini`, save the file in the ZAP-Hosting configuration editor.

If you are adjusting balance for PvE or cooperative gameplay, it is recommended to change one multiplier at a time first. This makes it easier to test how much the damage output or damage taken has changed.

:::tip Start With Small Adjustments
A small increase such as `1.200000` for `PalDamageRateAttack` is often easier to balance than a large jump like `3.000000`.
:::

## Restart the server

Once you have saved the updated configuration, restart your Palworld server so the new damage multiplier settings are loaded.

No additional console commands are required after editing the file. A full server restart is sufficient to apply the changes.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Run extra commands | No |
| Restart server | Yes |

## Verify the new damage settings

After the server restarts, join your Palworld server and test combat with your Pals. Check whether:

- your Pals deal the expected amount of damage
- your Pals receive the expected amount of damage
- the gameplay balance still fits your server setup

If the result is too strong or too weak, return to `PalWorldSettings.ini`, adjust the multiplier values again, save the file, and restart the server once more.

## Conclusion

Congratulations, you have successfully changed the Pal damage multiplier on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!