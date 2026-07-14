---
id: palworld-enable-fast-travel
title: "Palworld: Enable Fast Travel"
description: "Learn how to configure fast travel on your Palworld server, including base-only fast travel settings and manual config changes. -> Learn more now"
sidebar_label: Palworld: Enable Fast Travel
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how players use fast travel on your server through the main server configuration. In this guide, you will learn how to edit the correct config file in the ZAP-Hosting interface, adjust the fast travel settings, and apply the changes properly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit its configuration files.

:::info Manual Configuration Required
This setup is performed by manually editing the Palworld server configuration. You can access the required file through your game server administration under `Configs`.
:::

## Locate the Configuration File

To change fast travel behavior, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Navigate to `Configs`.
3. Open the file `PalWorldSettings.ini`.

This file contains the server's gameplay-related settings, including fast travel options.

:::note Configuration Location
Depending on the current panel layout, the file is managed through the `Configs` area in your server administration. If the exact underlying path is not shown in the interface, you can still safely edit the required values directly in `PalWorldSettings.ini`.
:::

## Understand the Fast Travel Settings

Palworld provides two relevant configuration keys for fast travel behavior.

| Config key | Value type | Default value | Function |
| --- | --- | --- | --- |
| `bEnableFastTravel` | `True` / `False` | `True` | Enables or disables fast travel entirely |
| `bEnableFastTravelOnlyBaseCamp` | `True` / `False` | `False` | Restricts fast travel so players can only travel between bases |

These values are part of the server's option string inside `PalWorldSettings.ini`.

:::tip Choose the Right Setup
If you want a more immersive travel game experience and more exploration, you can disable fast travel entirely. If you want to keep travel available but reduce how freely players move around the map, base-only fast travel is usually the better option.
:::

## Edit the Fast Travel Values

Open `PalWorldSettings.ini` and look for the `OptionSettings=` section. In Palworld, many server settings are stored as comma-separated values inside this entry.

### Enable Normal Fast Travel

To allow standard fast travel, ensure the following value is present:

```ini
bEnableFastTravel=True
```

If you want players to use all normal fast travel options, also make sure this value is set as follows:

```ini
bEnableFastTravelOnlyBaseCamp=False
```

### Disable All Fast Travel

To disable fast travel completely, set:

```ini
bEnableFastTravel=False
```

When this is disabled, players must travel manually across the world.

### Restrict Fast Travel to Bases Only

If you want to allow fast travel only between base camps, use this combination:

```ini
bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True
```

This setup is commonly preferred for PvP-focused servers because it still allows limited travel without giving players unrestricted movement.

:::caution Keep Existing Syntax Intact
Do not remove other existing values from the `OptionSettings=` line unless you intentionally want to change them. Palworld stores many settings in a single comma-separated entry, so incorrect formatting can cause settings to fail to load.
:::

## Example Configuration

Below is an example showing how the relevant part of the configuration may look inside `PalWorldSettings.ini`:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,bEnableFastTravel=True,bEnableFastTravelOnlyBaseCamp=True)
```

Replace the fast travel values in your existing configuration according to the setup you want to use.

:::note Existing Server Configurations
Your `OptionSettings=` line will usually contain many more values than the example above. You only need to adjust `bEnableFastTravel` and `bEnableFastTravelOnlyBaseCamp` while preserving the rest of the line.
:::

## Recommended Configurations

You can use the following combinations depending on the type of server you want to run:

| Server style | `bEnableFastTravel` | `bEnableFastTravelOnlyBaseCamp` | Result |
| --- | --- | --- | --- |
| Default gameplay | `True` | `False` | Full fast travel enabled |
| Exploration-focused | `False` | `False` | All fast travel disabled |
| PvP or restricted travel | `True` | `True` | Fast travel only between bases |

## Apply the Changes

After saving your changes in `PalWorldSettings.ini`, you need to restart the server so the new settings are loaded.

### Restart the Server

Use the restart function in your ZAP-Hosting game server administration after saving the file.

No additional in-game or console commands are normally required for this change. The new fast travel configuration is applied when the server starts again.

:::info Restart Required
Changes to `PalWorldSettings.ini` will not reliably apply until the Palworld server has been restarted.
:::

## Verify the Result

Once the server is back online, join the server and test the fast travel behavior in-game.

You should verify that:

- full fast travel works if enabled
- no fast travel options are available if disabled
- only base-to-base travel works if you enabled base-only travel

:::tip Troubleshooting Incorrect Behavior
If the setting does not apply, re-open `PalWorldSettings.ini` and check for formatting errors in the `OptionSettings=` line, especially missing commas, duplicated keys, or invalid `True` / `False` values.
:::

## Conclusion

Congratulations, you have successfully enabled or configured fast travel on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!