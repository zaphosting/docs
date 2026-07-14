---
id: palworld-structure-damage-rate
title: "Palworld: Structure Damage Rate"
description: "Learn how to change Palworld structure damage and structure decay rates by editing the server configuration safely and correctly. -> Learn more now"
sidebar_label: Palworld: Structure Damage Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how much damage structures take and how quickly they decay over time. In this guide, you will learn how to manually edit the correct configuration file in your ZAP-Hosting game server administration and apply the new structure damage settings.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that your Palworld server is already installed and that you can access its web administration.

:::info Required Access
You need access to your ZAP-Hosting game server administration panel and the `Configs` area for your Palworld server.
:::

:::note Manual Configuration
This setup is performed by manually editing the Palworld configuration file. The exact settings are not changed through a separate one-click toggle in this guide.
:::

## Open the correct configuration file

To change structure damage and decay, you need to edit the `PalWorldSettings.ini` file.

In your ZAP-Hosting game server administration:

1. Open your **Palworld** server.
2. Navigate to **Configs**.
3. Open the file `PalWorldSettings.ini`.

This file contains the main gameplay configuration values for your server, including structure-related multipliers.

## Edit the structure damage settings

The relevant values are stored in the server settings entries inside `PalWorldSettings.ini`.

### Relevant configuration keys

Use the following settings to control structure damage behavior:

| Config key | Description | Default value |
| --- | --- | --- |
| `BuildObjectDamageRate` | Controls how much damage structures take | `1.0` |
| `BuildObjectDeteriorationDamageRate` | Controls how quickly structures decay over time | `1.0` |

A value of `1.0` is the normal default rate. Lower values reduce the effect, while higher values increase it.

### Example configuration

Depending on your current file content, these values are typically part of the server option list in `PalWorldSettings.ini`.

```ini
BuildObjectDamageRate=1.0
BuildObjectDeteriorationDamageRate=1.0
```

If your configuration uses a combined option string, make sure you only change the values and keep the surrounding syntax intact.

For example:

```ini
OptionSettings=(BuildObjectDamageRate=1.0,BuildObjectDeteriorationDamageRate=1.0)
```

:::caution Keep Existing Syntax Intact
`PalWorldSettings.ini` may contain many settings in a single `OptionSettings=(...)` line. If this is the case on your server, do not remove commas, brackets, or other existing entries when editing the file.
:::

## Choose suitable values

You can adjust the multipliers based on how durable you want player-built structures to be.

### Structure damage multiplier

`BuildObjectDamageRate` changes how much direct damage a structure receives.

| Value | Effect |
| --- | --- |
| `0.5` | Structures take half damage |
| `1.0` | Default structure damage |
| `2.0` | Structures take double damage |

### Structure decay multiplier

`BuildObjectDeteriorationDamageRate` changes how quickly structures deteriorate over time.

| Value | Effect |
| --- | --- |
| `0.1` | Very slow decay |
| `1.0` | Default decay speed |
| `2.0` | Faster decay |

:::tip Recommended Decay Minimum
It is recommended to keep `BuildObjectDeteriorationDamageRate` at `0.1` or higher. Very low or disabled decay can leave unused structures behind for longer, which may negatively affect cleanup and server performance over time.
:::

## Save the file and restart the server

After editing the values in `PalWorldSettings.ini`, save the file in the `Configs` section.

You then need to restart the Palworld server so the new structure damage settings are loaded.

### Required action after editing

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Additional console command | No verified command required |

:::info Restart Required
Changes to `BuildObjectDamageRate` and `BuildObjectDeteriorationDamageRate` are not applied reliably until the server has been restarted.
:::

## Verify the changes

Once the server is back online, join your Palworld server and test the new behavior.

You can verify the changes by checking whether:

- structures take more or less direct damage than before
- abandoned or exposed structures decay at the expected rate

If the changes do not appear to apply, reopen `PalWorldSettings.ini` and confirm that:

- the setting names are written exactly as `BuildObjectDamageRate` and `BuildObjectDeteriorationDamageRate`
- the values are placed in the correct section or `OptionSettings` line
- the server was restarted after saving

## Conclusion

Congratulations, you have successfully changed the structure damage and decay rates on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!