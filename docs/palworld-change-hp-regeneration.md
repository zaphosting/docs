---
id: palworld-change-hp-regeneration
title: "Palworld: Change HP Regeneration"
description: "Learn how to change HP regeneration in Palworld by editing player and Pal regeneration settings on your server for faster, slower, or disabled healing -> Learn more now"
sidebar_label: "Change HP Regeneration"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to change regeneration settings for both players and Pals through the main server configuration. In this guide, you will learn how to edit the correct config file in the ZAP-Hosting web interface, adjust HP regeneration values, and apply the changes properly.



## Preparation

Before you begin, make sure that your Palworld server is online and that you can access its web administration through the ZAP-Hosting panel.

:::info Configuration Access Requirement
You need access to your game server administration and the `Configs` area to edit the Palworld configuration files manually.
:::

## Open the Palworld Configuration File

To change HP regeneration, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Navigate to `Configs`.
3. Open the file `PalWorldSettings.ini`.

This file contains the main gameplay configuration values for your server, including player and Pal health regeneration multipliers.

:::note Manual Configuration Changes
Depending on your current configuration, settings may appear in a long parameter line within the `OptionSettings` section. You should edit the existing values carefully and keep the formatting intact.
:::

## Change HP Regeneration Values

The HP regeneration settings are stored as numeric multipliers. A value of `1.0` uses the default regeneration speed.

### Supported Regeneration Settings

Use the following configuration keys in `PalWorldSettings.ini`:

| Config key | Description | Default value |
| --- | --- | --- |
| `PlayerAutoHPRegeneRate` | Player natural HP regeneration rate | `1.0` |
| `PlayerAutoHpRegeneRateInSleep` | Player HP regeneration while sleeping | `1.0` |
| `PalAutoHPRegeneRate` | Pal natural HP regeneration rate | `1.0` |
| `PalAutoHpRegeneRateInSleep` | Pal HP regeneration while sleeping in the Palbox | `1.0` |

### Value Behavior

You can use the following value logic when you change regeneration:

| Value | Effect |
| --- | --- |
| `1.0` | Default regeneration speed |
| Greater than `1.0` | Faster healing |
| Less than `1.0` | Slower healing |
| `0.0` | Disables regeneration |

:::tip Choosing Good Regeneration Values
If you want a slightly easier survival experience, try values such as `1.5` or `2.0`. If you want a more challenging setup, use values below `1.0` or disable regeneration entirely with `0.0`.
:::

## Edit the Configuration Entries

In most Palworld server setups, these values are located inside the `OptionSettings=(...)` line of `PalWorldSettings.ini`.

### Example Configuration

Add the entries if they are missing, or change the existing values if they are already present:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=1.0,PlayerAutoHpRegeneRateInSleep=1.0,PalAutoHPRegeneRate=1.0,PalAutoHpRegeneRateInSleep=1.0)
```

For example, if you want faster natural healing for players and Pals, you could use:

```ini
OptionSettings=(PlayerAutoHPRegeneRate=2.0,PlayerAutoHpRegeneRateInSleep=2.0,PalAutoHPRegeneRate=2.0,PalAutoHpRegeneRateInSleep=2.0)
```

If you only want to change specific values, adjust only those entries and leave the rest of your existing `OptionSettings` values unchanged.

:::caution Preserve Existing OptionSettings Values
Do not delete unrelated entries from the `OptionSettings` line. This section usually contains many gameplay settings, and removing them can unintentionally reset other parts of your server configuration.
:::

## Save and Apply the Changes

After editing the file, save your changes in the ZAP-Hosting `Configs` area.

To apply the new regeneration settings, restart your Palworld server.

### Restart the Server

1. Save the edited `PalWorldSettings.ini` file.
2. Return to your server administration.
3. Restart the server.

A restart is required because Palworld reads these gameplay settings during server startup.

:::info Restart Required
The HP regeneration changes will not take effect immediately while the server is running. You must restart the server after saving the configuration.
:::

## Verify the New Regeneration Settings

After the server has restarted, join your server and test the new healing behavior in-game.

You can verify the change by checking:

- player natural HP recovery
- player healing while sleeping
- Pal natural HP recovery
- Pal healing behavior in the Palbox while sleeping

If the regeneration does not behave as expected, reopen `PalWorldSettings.ini` and confirm that:

- the config keys are spelled exactly correctly
- the values use valid decimal numbers such as `1.0` or `2.0`
- the entries remain inside the `OptionSettings` section
- the server was restarted after saving

## Conclusion

Congratulations, you have successfully changed HP regeneration in Palworld. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!