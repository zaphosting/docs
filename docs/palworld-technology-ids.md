---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Learn how to manage Palworld technology IDs, disable specific technology entries, and understand the required config values on your server -> Learn more now"
sidebar_label: Palworld: Technology IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld uses *technology IDs* to identify unlockable technologies and certain related item-based settings. In this guide, you will learn how to disable specific technologies on your ZAP-Hosting Palworld server by editing the correct configuration entry manually.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit server configuration files.

:::info Required Access
You need access to your Palworld server administration and the `Configs` section in the ZAP-Hosting panel to complete this setup.
:::

:::note Technology ID Sources
Palworld technology IDs are game-defined internal strings, such as `GrapplingGun` or `SkillUnlock_JetDragon`. There is no official in-game list in the ZAP-Hosting panel, so you must use a reliable external reference for valid IDs.
:::

## Understanding technology IDs

Technology IDs are internal identifiers used by Palworld for unlockable technologies. Instead of using the visible in-game name, the server configuration expects the exact ID string.

For disabling technologies, Palworld uses the `DenyTechnologyList` setting. This value accepts a comma-separated list of technology IDs.

### What `DenyTechnologyList` does

When you add valid technology IDs to `DenyTechnologyList`, those technologies are blocked on your server. This is useful if you want to restrict progression, remove specific mobility tools, or customize gameplay rules for your community.

### Supported value format

The value must be entered as a comma-separated list without additional explanations.

| Config key | Purpose | Format | Example |
|---|---|---|---|
| `DenyTechnologyList` | Disables selected technologies | Comma-separated technology ID strings | `GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon` |

:::caution Exact ID Matching
Technology IDs must match the game's internal value exactly. If an ID is misspelled or no longer valid for the current Palworld version, the setting may not work as expected.
:::

## Open the correct configuration file

On ZAP-Hosting, this change is made by manually editing the Palworld configuration file.

### File to edit

You need to edit the following file:

```ini
PalWorldSettings.ini
```

### Where to find it in the ZAP-Hosting interface

Open your Palworld game server administration, then go to:

```text
Configs
```

From there, open `PalWorldSettings.ini`.

:::tip Config Location in ZAP-Hosting
If your server provides multiple editable files, make sure you select `PalWorldSettings.ini`, as this is the file used for gameplay-related server settings such as `DenyTechnologyList`.
:::

## Edit the technology ID setting

Once you have opened `PalWorldSettings.ini`, locate the server option list and add or modify the `DenyTechnologyList` entry.

### Add technology IDs to `DenyTechnologyList`

Use a comma-separated list of the technologies you want to disable.

Example:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

This example disables:

| Technology ID | Meaning |
|---|---|
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Higher-tier Grappling Gun variant |
| `SkillUnlock_JetDragon` | JetDragon-related unlock |

:::note Quotation Format
Depending on how your existing `PalWorldSettings.ini` entry is structured, the value may appear inside a larger option block. Keep the existing syntax style already used in your file and only change the value for `DenyTechnologyList`.
:::

### Example within an option block

On many Palworld servers, settings are stored inside a larger `OptionSettings` line. In that case, the entry may look similar to this:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

If `DenyTechnologyList` is not already present, add it inside the same `OptionSettings=(...)` block and separate it from other entries with a comma.

:::caution Preserve Existing Syntax
Do not remove other settings from `OptionSettings`. A missing comma, bracket, or quotation mark can cause the configuration to fail to load correctly.
:::

## Choose valid technology IDs

You must use valid internal technology IDs, not the display names shown in-game.

### Example technology IDs

The following are known examples of technology IDs used by Palworld:

| Technology ID | Example meaning |
|---|---|
| `AIcore` | AI Core |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Grappling Gun variant |
| `GrapplingGun3` | Grappling Gun variant |
| `GrapplingGun4` | Grappling Gun variant |
| `GrapplingGun5` | Grappling Gun variant |
| `SkillUnlock_JetDragon` | JetDragon unlock |
| `SkillUnlock_IceHorse` | Ice Horse unlock |
| `PALBOX` | Palbox-related technology |
| `RepairBench` | Repair Bench |

Because Palworld receives updates, the full list of IDs can change over time. If you need a broader reference list, verify the IDs against a current and reliable source before applying them.

### Related use of IDs in other settings

Technology-style internal IDs may also be used in other Palworld configuration options. One known example is:

| Config key | Purpose |
|---|---|
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Sets a custom item drop for PvP kills |

:::info Related PvP Setting
If you plan to use IDs for PvP item drop customization, confirm that the ID type required by `AdditionalDropItemWhenPlayerKillingInPvPMode` matches the item you want to use. This guide focuses specifically on `DenyTechnologyList`.
:::

## Save and restart the server

After editing the file, save your changes in the ZAP-Hosting interface.

To apply the new configuration, restart your Palworld server.

### Required action after editing

| Action | Required |
|---|---|
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional console commands | No confirmed command required |

A restart is required because Palworld reads these server settings during startup. Without a restart, your new technology restrictions may not take effect.

:::tip Test After Restart
After the server has restarted, join the server and verify that the selected technologies are no longer available as intended. This helps you confirm that the IDs and syntax were entered correctly.
:::

## Troubleshooting

If the technologies are still available after restarting, check the following points.

### Verify the ID spelling

Make sure each technology ID is written exactly as required, including capitalization.

### Check the config syntax

If you edited the `OptionSettings=(...)` block, confirm that:

- each setting is separated by a comma
- quotation marks are correctly opened and closed
- brackets are still complete
- `DenyTechnologyList` is inside the correct settings block

### Confirm the server restarted successfully

If the server did not restart properly, the updated configuration may not have been loaded.

:::danger Invalid Configuration Risk
An incorrectly formatted `PalWorldSettings.ini` can prevent settings from loading properly. If this happens, restore the previous working version of the file and reapply the change carefully.
:::

## Conclusion

Congratulations, you have successfully disabled specific technologies on your Palworld server using technology IDs. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!