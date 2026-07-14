---
id: palworld-enable-hardcore-mode
title: "Palworld: Enable Hardcore Mode"
description: "Learn how to enable hardcore mode in Palworld by editing the correct server config, setting True or False values, and applying permadeath options safely. -> Learn more now"
sidebar_label: Palworld: Enable Hardcore Mode
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

*Hardcore mode* in Palworld enables permanent death rules for players and, optionally, for Pals. In this guide, you will learn how to manually enable hardcore mode on your ZAP-Hosting Palworld server by editing the correct configuration file and restarting the server afterward.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to your Palworld game server in the ZAP-Hosting web interface. You also need permission to edit server configuration files through the **Configs** section of your game server administration.

:::danger Permanent Data Loss Warning
When hardcore settings are enabled, characters can be permanently lost on death. If you also enable Pal loss, your Pals can be permanently lost as well.
:::

:::tip Create a Backup First
Before changing gameplay settings such as hardcore mode, it is recommended to create a backup of your server or save data if a backup option is available for your service.
:::

## Open the Palworld Configuration File

To enable hardcore mode, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Go to **Configs**.
3. Open the file `PalWorldSettings.ini`.

:::info Correct Configuration File
The hardcore settings are stored in `PalWorldSettings.ini`. If you edit a different file, the changes will not apply to your Palworld server.
:::

## Edit the Hardcore Settings

Palworld stores many gameplay settings inside the `OptionSettings` configuration entry in `PalWorldSettings.ini`. You need to set the relevant hardcore values there manually.

### Required Configuration Keys

The following configuration keys control hardcore behavior:

| Config key | Value | Effect |
| --- | --- | --- |
| `bHardcore` | `True` or `False` | Enables or disables permanent player death |
| `bPalLost` | `True` or `False` | Enables or disables permanent Pal loss on death |
| `bCharacterRecreateInHardcore` | `True` or `False` | Allows creating a new character after a hardcore death |

### Recommended Value Overview

| Scenario | `bHardcore` | `bPalLost` | `bCharacterRecreateInHardcore` |
| --- | --- | --- | --- |
| Player permadeath only | `True` | `False` | `False` or `True` |
| Full hardcore with Pal loss | `True` | `True` | `False` or `True` |
| Disable hardcore mode | `False` | `False` | `False` |

:::note True and False Values
These settings use boolean values, which means you must enter either `True` or `False` exactly as supported by the configuration format.
:::

### Example Configuration

If the keys are already present in your `OptionSettings`, change their values as needed. If they are missing, add them inside the same `OptionSettings` line.

Example:

```ini
OptionSettings=(bHardcore=True,bPalLost=True,bCharacterRecreateInHardcore=True)
```

If your `OptionSettings` line already contains many other settings, do not remove them. Instead, add or adjust only the hardcore-related entries within the existing parentheses.

:::caution Preserve Existing Settings
`PalWorldSettings.ini` often contains many active server settings in one `OptionSettings` entry. Deleting other values by mistake can reset unrelated gameplay options on your server.
:::

## Save and Apply the Changes

After editing the file:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server from the ZAP-Hosting game server administration.

A restart is required so the server can load the updated hardcore configuration.

## Verify That Hardcore Mode Is Active

After the restart, join your server and confirm that the hardcore rules are active.

### What to Check

| Setting | Expected behavior |
| --- | --- |
| `bHardcore=True` | Players cannot continue normally after death |
| `bPalLost=True` | Pals are permanently lost on death |
| `bCharacterRecreateInHardcore=True` | A new character can be created after a hardcore death |

:::info Important Behavior Note
The exact in-game result depends on which of the three hardcore settings you enabled. If you want permanent player death but still want users to start over with a new character, enable `bCharacterRecreateInHardcore=True`.
:::

## Troubleshooting

If hardcore mode does not work as expected, check the following points.

### Confirm the File Was Edited Correctly

Make sure you edited `PalWorldSettings.ini` in the **Configs** area of your ZAP-Hosting Palworld server and not another file.

### Check the Syntax

The hardcore keys must be placed inside the `OptionSettings=(...)` entry. Incorrect punctuation, missing commas, or placing the values outside the correct section can prevent the server from reading them.

Example valid syntax:

```ini
OptionSettings=(bHardcore=True,bPalLost=False,bCharacterRecreateInHardcore=True)
```

### Restart the Server Again

If the server was not restarted after saving the file, the new settings will not be loaded. Perform a full restart and test again.

## Conclusion

Congratulations, you have successfully enabled hardcore mode on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!