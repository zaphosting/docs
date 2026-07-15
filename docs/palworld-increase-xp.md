---
id: palworld-increase-xp
title: "Palworld: Increase XP"
description: "Learn how to increase XP in the Palworld game by editing the Palworld server configuration and adjusting the XP rate multiplier correctly. -> Learn more now"
sidebar_label: Palworld: Increase XP
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to adjust gameplay multipliers through its server configuration, including the amount of XP players gain. In this guide, you will learn how to increase the XP rate on your ZAP-Hosting Palworld server by editing the correct configuration file and applying the changes properly.



## Preparation

Before you begin, make sure you have access to your Palworld game server through the ZAP-Hosting web interface and permission to edit its configuration files.

:::info Configuration Access Requirement
You need access to your server's web administration to edit configuration files under the `Configs` section. If you cannot access the server administration, check your product access in the ZAP-Hosting panel first.
:::

## Locate the configuration file

To increase XP on your Palworld server, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Navigate to the `Configs` section.
3. Open the file `PalWorldSettings.ini`.

This file contains the main gameplay settings used by the Palworld dedicated server, including the XP multiplier.

## Edit the XP multiplier

The setting responsible for XP gain is `ExpRate`.

### Find the correct setting

Open `PalWorldSettings.ini` and look for the `OptionSettings` line or the section where gameplay multipliers are defined.

The relevant configuration entry is:

```ini
ExpRate=1.000000
```

### Change the value

Adjust the value of `ExpRate` to the multiplier you want to use.

| Config key | Default value | Example value | Effect |
| --- | --- | --- | --- |
| `ExpRate` | `1.000000` | `2.000000` | Double XP gain |
| `ExpRate` | `1.000000` | `3.000000` | Triple XP gain |

For example, to enable double XP, set:

```ini
ExpRate=2.000000
```

To enable triple XP, set:

```ini
ExpRate=3.000000
```

:::tip Recommended Value Format
Palworld server settings commonly use decimal values such as `1.000000` or `2.000000`. Using the same format helps keep the configuration consistent and easier to read.
:::

## Example configuration

Depending on your current file contents, the setting will usually appear inside the `OptionSettings` block. For example:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=2.000000,PalCaptureRate=1.000000)
```

If `ExpRate` is already present, only change its value. If it is missing, add `ExpRate=[your_value]` inside the existing `OptionSettings=(...)` block.

:::caution Edit the Existing OptionSettings Block Carefully
Do not create multiple `OptionSettings` entries unless your current configuration specifically requires it. In most cases, you should only edit the existing `OptionSettings=(...)` line and change the `ExpRate` value there.
:::

## Save and restart the server

After changing the XP multiplier:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server from the ZAP-Hosting server administration.

A restart is required because Palworld does not apply this gameplay setting change immediately while the server is already running.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional console commands | No |

:::note No Additional Commands Required
For this setting, no extra in-game command or console command is normally required. The new XP rate is applied after the server restart.
:::

## Verify the new XP rate

Once the server is back online, join the server and perform an action that grants XP, such as defeating enemies, capturing Pals, or completing normal gameplay activities.

If the XP gain does not seem to change:

- re-open `PalWorldSettings.ini`
- confirm that `ExpRate` is present in the `OptionSettings` block
- verify that the value is written correctly, such as `2.000000`
- make sure the server was fully restarted after saving

:::danger Avoid Invalid Configuration Syntax
If you accidentally remove commas, brackets, or other values from the `OptionSettings=(...)` line, the server may ignore the setting or fail to load the configuration correctly. Always review the full line before saving.
:::

## Conclusion

Congratulations, you have successfully increased the XP gain rate on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!