---
id: palworld-technology-ids
title: "Palworld: Technology IDs"
description: "Learn how to use Palworld technology IDs in the DenyTechnologyList setting to disable specific technology examples on your server and manage technology information correctly -> Learn more now"
sidebar_label: Palworld: Technology IDs
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld uses *technology IDs* to identify unlockable technologies and certain item-based settings in the server configuration. In this guide, you will learn how to disable specific technologies on your ZAP-Hosting Palworld server by editing the correct configuration entry manually.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit its configuration files.

:::info Configuration File Access
For this setup, you need to edit the `PalWorldSettings.ini` file through your game server administration under **Configs**.
:::

## Understanding technology IDs

In Palworld, each technology has its own internal ID string. These IDs are used by the server to identify which technology should be allowed, denied, or referenced in certain settings.

For disabling technologies, the relevant configuration key is `DenyTechnologyList`.

### What `DenyTechnologyList` does

`DenyTechnologyList` lets you block selected technologies from being used or unlocked on your server. You must enter one or more valid technology IDs as a comma-separated list.

For example:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

### Example technology IDs

The following table shows some commonly referenced technology IDs:

| Technology ID | Technology Name |
|---|---|
| `AIcore` | AI Core |
| `GrapplingGun` | Grappling Gun |
| `GrapplingGun2` | Mega Grappling Gun |
| `GrapplingGun3` | Giga Grappling Gun |
| `GrapplingGun4` | Hyper Grappling Gun |
| `GrapplingGun5` | Ultra Grappling Gun |
| `SkillUnlock_JetDragon` | Jetragon mount skill unlock |
| `SkillUnlock_IceHorse` | Frostallion mount skill unlock |
| `PALBOX` | Palbox |
| `RepairBench` | Repair Bench |

:::note Valid ID Format
Technology IDs are case-sensitive strings. You should enter them exactly as listed in a reliable technology information source, otherwise the setting may not work as expected.
:::

## Open the Palworld configuration file

You now need to access the correct file in your ZAP-Hosting server administration.

1. Log in to the ZAP-Hosting web interface.
2. Open your **Palworld** game server.
3. Go to **Configs** in the game server administration.
4. Open the file `PalWorldSettings.ini`.

This is the configuration file that contains the world and gameplay settings used by your Palworld server.

## Edit the `DenyTechnologyList` setting

Once you have opened `PalWorldSettings.ini`, look for the `OptionSettings=` section. The `DenyTechnologyList` entry is stored inside this settings block.

### Add or change the technology IDs

If the key already exists, replace its value with your own list of IDs. If it does not exist, add it inside the `OptionSettings=(...)` section.

Use this format:

```ini
DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon"
```

### Configuration format reference

| Setting | Purpose | Required format |
|---|---|---|
| `DenyTechnologyList` | Disables specific technologies | Comma-separated technology ID strings inside quotation marks |

### Example configuration

The exact contents of your `OptionSettings` block may differ, but the relevant entry should look similar to this:

```ini
OptionSettings=(DenyTechnologyList="GrapplingGun,GrapplingGun2,SkillUnlock_JetDragon")
```

If your file already contains many other settings, only add or modify the `DenyTechnologyList` part without removing the existing entries.

:::caution Preserve Existing Settings
Do not overwrite the full `OptionSettings` block unless you are sure that you have copied all existing values correctly. Removing other entries accidentally can reset or break unrelated server settings.
:::

## Save and apply the changes

After editing the configuration, save the file in the ZAP-Hosting interface.

Palworld requires a server restart for this change to take effect.

### Restart the server

After saving `PalWorldSettings.ini`:

1. Return to your game server administration.
2. Restart the Palworld server.

This reloads the updated configuration and applies the denied technology list.

:::info Restart Required
Changes to `DenyTechnologyList` are not applied instantly. You must restart the server after saving the configuration file.
:::

## Verify that the setting works

Once the server has restarted, join your server and test whether the selected technology is unavailable as intended.

If the technology is still available, check the following:

| Check | What to verify |
|---|---|
| Technology ID spelling | Make sure the ID is written exactly and uses the correct capitalization |
| Comma-separated format | Ensure IDs are separated only by commas, with no invalid characters |
| Quotation marks | Confirm the value is enclosed in quotation marks if required in your current config format |
| Placement | Verify the entry is inside the `OptionSettings=(...)` block |
| Restart | Make sure the server was fully restarted after saving |

:::tip Use Reliable Technology ID Lists
Because Palworld receives updates over time, technology IDs and available technology examples may change. Always compare your IDs against a current and reliable reference before applying them.
:::

## Related use of technology IDs

Technology IDs are also used in other Palworld settings. One known example is `AdditionalDropItemWhenPlayerKillingInPvPMode`, which can reference an item or technology-related ID for PvP drop behavior depending on the server feature being configured.

If you plan to use PvP-related settings as well, make sure you verify the exact supported value type for your current Palworld server version before applying changes.

:::note Version Compatibility
Some configuration behaviors can change between Palworld updates. If a setting does not behave as expected, check whether the server version and the available config keys still match the current game version.
:::

## Conclusion

Congratulations, you have successfully disabled specific technologies on your Palworld server using technology IDs. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!