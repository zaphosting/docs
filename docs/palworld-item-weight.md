---
id: palworld-item-weight
title: "Palworld: Item Weight"
description: "Learn how to change the Palworld item weight multiplier by editing the item weight setting in your server configuration for better carry weight balance. -> Learn more now"
sidebar_label: Palworld: Item Weight
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to adjust item weight on your server by changing a configuration value in the main server settings file. In this guide, you will learn where to find the correct file in the ZAP-Hosting web interface, which `item weight` setting to edit, and how to apply the change properly.



## Preparation

Before you begin, make sure that your Palworld game server is online and that you can access its web administration.

:::info Required Access
You need access to your Palworld server administration panel in the ZAP-Hosting web interface to edit configuration files under **Configs**.
:::

## Open the Palworld Configuration File

To change the item weight multiplier, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Go to **Configs**.
3. Open the file `PalWorldSettings.ini`.

This file contains the main gameplay configuration values used by your Palworld server.

:::note Configuration File Purpose
`PalWorldSettings.ini` stores multiple gameplay modifiers, including rates for damage, stamina, drops, and `item weight`.
:::

## Edit the Item Weight Setting

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section and find the `ItemWeightRate` entry.

If the entry already exists, change its value. If it is missing, add it inside the `OptionSettings` parameter list.

### Configuration Key

Use the following setting:

```ini
ItemWeightRate=1.000000
```

### What the Value Means

`ItemWeightRate` controls the weight multiplier for items on your server.

| Config key | Default value | Effect |
|---|---:|---|
| `ItemWeightRate` | `1.000000` | Standard item weight |
| `ItemWeightRate` lower than `1.0` | Example: `0.500000` | Items weigh less, so players can carry more |
| `ItemWeightRate` higher than `1.0` | Example: `2.000000` | Items weigh more, so players can carry less |

### Example Values

You can use one of the following examples depending on the gameplay balance you want:

| Desired result | Value |
|---|---:|
| Default item weight | `1.000000` |
| Half item weight | `0.500000` |
| Very light items | `0.250000` |
| Double item weight | `2.000000` |

:::tip Choosing a Good Multiplier
If you want a more relaxed survival experience, a lower `item weight` value such as `0.5` is often a practical starting point. This reduces inventory pressure without completely removing weight management.
:::

## Example Configuration

In Palworld, these gameplay values are typically stored inside the `OptionSettings=(...)` line of `PalWorldSettings.ini`. Your file may already contain many other settings.

A simplified example looks like this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ItemWeightRate=0.500000)
```

On many servers, `OptionSettings` already includes multiple values separated by commas. In that case, only add or edit the `ItemWeightRate` part instead of removing the other entries.

Example:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,ItemDropRate=1.000000,ItemWeightRate=0.500000)
```

:::caution Keep Existing Settings Intact
Do not delete other values from the `OptionSettings` line unless you intentionally want to reset them. Removing commas, brackets, or existing entries can cause configuration errors.
:::

## Save and Apply the Changes

After editing the file:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server.

A restart is required because the server reads this gameplay configuration during startup. The new `item weight` value will not apply fully until the server has restarted.

## Verify the New Item Weight

After the restart, join your server and test item carry behavior in-game.

You should notice that:

- lower values reduce the effective weight of items
- higher values increase the effective weight of items
- inventory capacity feels different depending on the multiplier you selected

If the change does not seem to apply, reopen `PalWorldSettings.ini` and confirm that:

| Check | What to verify |
|---|---|
| Correct file | You edited `PalWorldSettings.ini` |
| Correct location | The file was opened through **Configs** in the server administration |
| Correct key | `ItemWeightRate` is present |
| Correct syntax | The value is inside the `OptionSettings=(...)` line if your file uses that format |
| Restart completed | The server was restarted after saving |

## Conclusion

Congratulations, you have successfully changed the item weight setting on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!