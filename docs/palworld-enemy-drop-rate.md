---
id: palworld-enemy-drop-rate
title: "Palworld: Enemy Drop Rate"
description: "Learn how to change the Palworld enemy drop rate on your Palworld game server by editing the correct config value for better loot balance. -> Learn more now"
sidebar_label: Palworld: Enemy Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

`EnemyDropItemRate` controls how much loot enemies drop in Palworld. In this guide, you will learn how to manually edit the correct configuration file in your ZAP-Hosting game server administration and apply the new enemy drop rate successfully.



## Preparation

Before you start, make sure that you have access to your Palworld game server administration panel and permission to edit server configuration files.

:::info Manual Configuration Required
This setup is performed by manually editing the server configuration. The relevant file is available in your ZAP-Hosting game server administration under `Configs`.
:::

## Locate the Configuration File

To change the enemy drop rate, you need to edit the `PalWorldSettings.ini` file.

### Open the Configs Section

Log in to your ZAP-Hosting game server administration and open your Palworld server. Then navigate to the `Configs` section, where the available configuration files are listed.

### Select `PalWorldSettings.ini`

Open the `PalWorldSettings.ini` file from the `Configs` area. This file contains the main gameplay configuration values for your Palworld game server, including loot and drop-related settings.

:::note Configuration File Overview
On Palworld dedicated servers, gameplay settings are typically stored in `PalWorldSettings.ini`. The enemy loot multiplier is configured there through the `EnemyDropItemRate` entry.
:::

## Edit the Enemy Drop Rate

Now that you have opened the correct file, you can adjust the loot drop multiplier.

### Find the Correct Setting

Search inside `PalWorldSettings.ini` for the `OptionSettings` line and locate the following key:

```ini
EnemyDropItemRate=1.000000
```

If the key is already present, change its value to your preferred multiplier.

### Set Your Desired Multiplier

`EnemyDropItemRate` uses a numeric multiplier:

| Config key | Default value | Example value | Effect |
| --- | --- | --- | --- |
| `EnemyDropItemRate` | `1.000000` | `2.000000` | Enemies drop twice as many items |
| `EnemyDropItemRate` | `1.000000` | `0.500000` | Enemies drop fewer items |
| `EnemyDropItemRate` | `1.000000` | `3.000000` | Enemies drop three times as many items |

For example, to double loot drops from defeated enemies, wild Pals, and bosses, set:

```ini
EnemyDropItemRate=2.000000
```

If you are editing the full `OptionSettings` entry, it may look similar to this snippet:

```ini
OptionSettings=(EnemyDropItemRate=2.000000)
```

:::caution Keep Existing Settings Intact
In many Palworld server configurations, `OptionSettings` contains many values in a single line. Only change the `EnemyDropItemRate` value and avoid removing commas, brackets, or other existing settings, as this can cause the configuration to fail.
:::

## Review Related Drop Limits

Higher loot multipliers can increase the number of dropped items on the ground. This may affect server performance, especially during heavy combat or boss fights.

### Check `DropItemMaxNum`

If your server already has a high number of simultaneous dropped items, review the `DropItemMaxNum` setting in the same configuration file.

| Config key | Purpose |
| --- | --- |
| `EnemyDropItemRate` | Multiplies loot dropped by defeated enemies |
| `DropItemMaxNum` | Limits how many dropped items can exist at once |

:::tip Balance Loot and Performance
If you increase `EnemyDropItemRate` significantly, consider keeping `DropItemMaxNum` at a reasonable value to reduce the risk of unnecessary item buildup and performance issues.
:::

## Save and Apply the Changes

After editing the configuration, save the `PalWorldSettings.ini` file in the `Configs` section.

### Restart the Server

Once the file has been saved, restart your Palworld server so the new setting is loaded.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Additional console command | No verified command required |

:::info Restart Required
Changes to `PalWorldSettings.ini` are not applied immediately during runtime. You need to restart the server after saving the file.
:::

## Verify the New Drop Rate

After the restart is complete, join your Palworld server and defeat enemies to confirm that the new loot multiplier is working as expected.

If the drop amount does not appear to change, reopen `PalWorldSettings.ini` and verify that:

- `EnemyDropItemRate` is spelled correctly
- the value is inside the correct `OptionSettings` configuration
- the file was saved successfully
- the server was restarted after the change

## Conclusion

Congratulations, you have successfully changed the enemy drop rate on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!