---
id: palworld-building-limits
title: "Palworld: Building Limits"
description: "Learn how to change Palworld building limits, base building rules, and area restrictions by editing your server configuration manually. -> Learn more now"
sidebar_label: Palworld: Building Limits
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control several building limits and restrictions through the server configuration. In this guide, you will learn how to manually edit the correct config file in the ZAP-Hosting web interface, change the relevant building values, and apply the changes correctly.



## Preparation

Before you begin, make sure that:

- you have access to your Palworld game server in the ZAP-Hosting game server administration
- your server is currently offline or you are prepared to restart it after making changes
- you know that this guide covers general building limits and area restrictions, not guild-specific base limits

:::info Manual Configuration Required
These settings must be changed manually in the configuration file. The relevant file can be accessed in your ZAP-Hosting game server administration under `Configs`.
:::

:::note Guild Base Limits
If you want to change the number of bases per guild instead of the general building limits covered here, you should use the separate guild base limit guide if available in ZAP-Docs.
:::

## Open the configuration file

To change building limits, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Navigate to `Configs`.
3. Open the file `PalWorldSettings.ini`.

This file contains the main world and gameplay settings for your Palworld server, including several building-related configuration entries.

## Edit the building limit settings

The relevant values are stored inside the `OptionSettings` section in `PalWorldSettings.ini`.

### Relevant configuration keys

Use the following settings to control building limits and area restrictions:

| Config key | Description | Example value |
| --- | --- | --- |
| `MaxBuildingLimitNum` | Sets the maximum number of buildings per player. `0` disables the limit. | `0` |
| `BaseCampMaxNum` | Sets the maximum number of base camps allowed on the entire server. | `128` |
| `bBuildAreaLimit` | Controls whether building restrictions near certain structures are enabled. | `False` |

### Example configuration

Depending on your current file content, these values are usually part of the `OptionSettings=(...)` line.

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=128,bBuildAreaLimit=False)
```

If your file already contains a longer `OptionSettings` line, do not remove the other existing values. You only need to change or add the relevant entries inside that same settings block.

### What each value does

| Setting | Effect |
| --- | --- |
| `MaxBuildingLimitNum=0` | Removes the per-player building limit |
| `MaxBuildingLimitNum=[your_number]` | Limits each player to the specified number of buildings |
| `BaseCampMaxNum=[your_number]` | Sets the total number of base camps allowed server-wide |
| `bBuildAreaLimit=True` | Prevents building near restricted structures such as fast travel points |
| `bBuildAreaLimit=False` | Disables that area restriction |

:::caution Keep Existing Syntax Intact
`PalWorldSettings.ini` is sensitive to formatting. Make sure you only change the values you need and keep the existing commas, brackets, and overall `OptionSettings=(...)` structure intact.
:::

## Save your changes

After editing the values:

1. Save the file in the `Configs` section.
2. Review the line once more for formatting mistakes.

If the syntax is incorrect, the server may ignore the changed settings or fail to apply them properly.

### Example custom values

Here is an example that limits each player to `5000` buildings, allows up to `20` base camps on the server, and keeps restricted building zones enabled:

```ini
OptionSettings=(MaxBuildingLimitNum=5000,BaseCampMaxNum=20,bBuildAreaLimit=True)
```

Here is another example that removes the player building limit and disables area restrictions:

```ini
OptionSettings=(MaxBuildingLimitNum=0,BaseCampMaxNum=20,bBuildAreaLimit=False)
```

## Restart the server

After saving the configuration, you need to restart your Palworld server so the new settings are loaded.

In the ZAP-Hosting game server administration:

1. stop the server if it is still running
2. start the server again

A full restart is required for changes in `PalWorldSettings.ini` to take effect.

:::tip Apply Changes Reliably
If you are making several config changes at once, it is a good idea to save all edits first and then perform one restart afterward. This helps avoid unnecessary downtime.
:::

## Verify the new limits

Once the server is back online, join the server and test the new building behavior.

You should verify:

- whether players can place more or fewer structures than before
- whether the total number of base camps matches your configured value
- whether building near restricted structures is allowed or blocked according to `bBuildAreaLimit`

If the changes do not appear to apply, reopen `PalWorldSettings.ini` and confirm that:

- the values were saved correctly
- the keys are inside the `OptionSettings` block
- the server was fully restarted after the edit

## Configuration reference

| File | Location in ZAP-Hosting | Required action after editing |
| --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` in your game server administration | Restart the server |

| Setting | Recommended use |
| --- | --- |
| `MaxBuildingLimitNum` | Use this to control per-player building limits |
| `BaseCampMaxNum` | Use this to control the total number of base camps on the server |
| `bBuildAreaLimit` | Use this to allow or restrict building near protected map structures |

## Conclusion

Congratulations, you have successfully changed the building limits on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!