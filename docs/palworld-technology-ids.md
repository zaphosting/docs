---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Learn how to manage Palworld technology IDs, disable specific technology entries, and edit the correct server configuration safely. -> Learn more now"
sidebar_label: "Technology IDs"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld uses *technology IDs* to identify unlockable technologies and certain item-related settings in the server configuration. In this guide, you will learn how to disable specific technologies by editing the `DenyTechnologyList` setting in your ZAP-Hosting Palworld server configuration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit its configuration files.

:::info Configuration Access Requirement
You need access to your game server administration and the `Configs` section in order to edit `PalWorldSettings.ini`.
:::

:::note Technology ID Source
Palworld technology IDs are string-based values, such as `GrapplingGun`, `GrapplingGun2`, or `SkillUnlock_JetDragon`. A current third-party reference list is available here: [Game Host Bros - Palworld Technology IDs](https://www.gamehostbros.com/guides/games/palworld/technology-ids).

Because Palworld updates can change available technologies, you should always verify that the IDs you plan to use still exist in the current game version.
:::

## Understanding technology IDs

Technology IDs are internal identifiers used by Palworld for unlockable technology entries. On dedicated servers, these IDs can be used in specific configuration options to control gameplay behavior.

The most relevant setting for this topic is `DenyTechnologyList`, which allows you to block selected technologies from being unlocked or used on your server.

### Supported configuration use

The following table shows the relevant configuration key covered in this guide:

| Config key | Purpose | Value format |
| --- | --- | --- |
| `DenyTechnologyList` | Disables specific technologies on the server | Comma-separated list of technology ID strings |

### Example technology IDs

The following IDs are examples that are commonly referenced:

| Technology ID | Example meaning |
| --- | --- |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Higher-tier Grappling Gun |
| `SkillUnlock_JetDragon` | Jetragon-related unlock |
| `SkillUnlock_IceHorse` | Frostallion-related unlock |
| `PALBOX` | Palbox-related technology |
| `RepairBench` | Repair Bench |
| `AIcore` | AI Core |

:::caution Use Exact ID Values
Technology IDs are case-sensitive string values. If you enter an incorrect ID, Palworld may ignore it, and the technology will not be disabled as intended.
:::

## Open the Palworld configuration file

To configure technology IDs on your ZAP-Hosting server, you need to edit the correct Palworld settings file manually.

### Find the file in the ZAP-Hosting interface

1. Log in to the ZAP-Hosting web interface.
2. Open your **Palworld** game server.
3. Go to **Configs** in the game server administration.
4. Open the file `PalWorldSettings.ini`.

This is the configuration file where the `DenyTechnologyList` setting is stored and edited.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Locate the relevant setting

Inside `PalWorldSettings.ini`, look for the server option block that contains your Palworld settings.

You need to find or add the `DenyTechnologyList` entry.

:::tip Search the File Quickly
Use your browser search function with `CTRL` + `F` and search for `DenyTechnologyList` to find the setting faster.
:::

## Configure `DenyTechnologyList`

You can now define which technologies should be blocked on your server.

### Value format

`DenyTechnologyList` uses a comma-separated list of technology IDs.

Example format:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon
```

Each entry must be a valid Palworld technology ID. Do not add descriptions, extra spaces in the ID itself, or unsupported characters.

### Add or edit the setting

If the setting already exists, replace its current value with your desired list.

If the setting does not exist yet, add it to the appropriate server settings section in `PalWorldSettings.ini`.

Example:

```ini
DenyTechnologyList=GrapplingGun,GrapplingGun2,GrapplingGun3,SkillUnlock_JetDragon,PALBOX,RepairBench
```

This example disables several technologies by their IDs.

### Configuration example reference

| Example entry | Result |
| --- | --- |
| `DenyTechnologyList=GrapplingGun` | Disables only the basic Grappling Gun technology |
| `DenyTechnologyList=GrapplingGun,GrapplingGun2` | Disables multiple Grappling Gun technology tiers |
| `DenyTechnologyList=SkillUnlock_JetDragon,SkillUnlock_IceHorse` | Disables selected special unlock technologies |

:::note Related Item ID Usage
Some Palworld item-related settings also use ID-based values. For example, third-party references indicate that `AdditionalDropItemWhenPlayerKillingInPvPMode` can also use Palworld ID values for PvP item drops. However, this guide focuses specifically on `DenyTechnologyList`.
:::

## Save and apply the changes

After editing the configuration, you need to save the file and restart the server so Palworld can load the updated settings.

### Save the file

After you finish editing `PalWorldSettings.ini`:

1. Save the changes in the `Configs` editor.
2. Review the entry once more to confirm that the IDs are spelled correctly.

### Restart the server

Once the file has been saved, restart your Palworld server from the ZAP-Hosting game server administration.

This restart is required because configuration changes in `PalWorldSettings.ini` are not applied reliably until the server starts again with the updated file.

:::info Restart Required
A server restart is required after changing `DenyTechnologyList`. No additional in-game command is generally required for this setting when using the configuration file method.
:::

## Verify that the technologies are disabled

After the restart, you should confirm that the configuration works as expected.

### What to check

You can verify the result by checking whether the selected technologies are still available in-game.

Use the following checklist:

| Check | Expected result |
| --- | --- |
| Server restarted successfully | Server comes back online normally |
| `PalWorldSettings.ini` saved correctly | Your `DenyTechnologyList` entry is still present |
| Disabled technology tested in-game | The selected technology is no longer available as expected |

### If the setting does not work

If the technologies are still available, check the following:

| Possible issue | What to verify |
| --- | --- |
| Invalid ID | Confirm the technology ID matches the current game version exactly |
| Formatting issue | Make sure the list is comma-separated and written as plain ID strings |
| File not saved | Reopen `PalWorldSettings.ini` and confirm the value is still present |
| Server not restarted | Restart the server again after saving changes |

:::caution Game Updates May Change IDs
Palworld receives ongoing updates, and technology information can change over time. If a previously valid ID no longer works, verify it against a current and reliable reference before troubleshooting further.
:::

## Conclusion

Congratulations, you have successfully disabled specific technologies on your Palworld server using technology IDs. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!