---
id: palworld-pal-spawn-rate
title: "Palworld: Pal Spawn Rate"
description: "Learn how to change the Palworld pal spawn rate by editing the spawn setting for Pal frequency on your server -> Learn more now"
sidebar_label: "Pal Spawn Rate"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how frequently Pals spawn in your world through a server configuration setting. In this guide, you will learn how to edit the correct configuration file in the ZAP-Hosting game server administration and apply a new Pal spawn rate safely.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you start, make sure that:

- you have access to your Palworld game server in the ZAP-Hosting web interface
- your server is offline or you are prepared to restart it after making changes
- you understand that higher spawn values can increase server load and reduce performance

:::info Manual Configuration Required
This change is performed manually by editing the server configuration file under **Configs** in your game server administration. There is no separate in-panel slider documented for ZAP-Hosting for this specific setting.
:::

## Open the Palworld Configuration File

To change the Pal spawn rate, you need to edit the `PalWorldSettings.ini` file.

In your ZAP-Hosting game server administration:

1. Open your **Palworld** server.
2. Navigate to **Configs**.
3. Open the file `PalWorldSettings.ini`.

This file contains the main gameplay-related server settings, including the Pal spawn multiplier.

:::note Configuration File Location
For ZAP-Hosting Palworld servers, the relevant file is available directly through the **Configs** section in the game server administration, as provided in the server setup.
:::

## Change the Pal Spawn Rate

The setting you need is `PalSpawnNumRate`.

### What `PalSpawnNumRate` Does

`PalSpawnNumRate` controls the Pal spawn frequency multiplier on your server.

| Config key | Default value | Description |
| --- | --- | --- |
| `PalSpawnNumRate` | `1.000000` | Controls how many Pals spawn in the world. Higher values increase spawn frequency. |

In Palworld, this value is typically part of the `OptionSettings` line inside `PalWorldSettings.ini`.

### Edit the Setting

Open `PalWorldSettings.ini` and look for the `OptionSettings=` section. Inside that section, find the `PalSpawnNumRate` entry.

If the entry already exists, change its value. For example:

```ini
PalSpawnNumRate=1.000000
```

You can increase it like this:

```ini
PalSpawnNumRate=2.000000
```

This example doubles the Pal spawn multiplier compared to the default value.

:::tip Recommended Starting Values
Start with small increases such as `1.500000` or `2.000000` and test server performance before using more aggressive values.
:::

### Example Configuration Snippet

Depending on your existing file content, the setting may appear inside a long `OptionSettings` line similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=2.000000)
```

:::caution Preserve Existing Syntax
Do not remove commas, brackets, or other existing values from the `OptionSettings` line. Incorrect formatting in `PalWorldSettings.ini` can prevent the server from loading the configuration correctly.
:::

## Recommended Values and Performance Impact

You can use different values depending on the gameplay experience you want.

| Value | Effect |
| --- | --- |
| `1.000000` | Default Pal spawn rate |
| `1.500000` | Slightly increased spawn frequency |
| `2.000000` | Noticeably more Pals in the world |
| `3.000000` or higher | Heavy increase in spawns, may affect performance |

Higher values can make the world feel more active, but they also increase the number of entities the server must process.

:::danger High Spawn Values Can Reduce Stability
Very high spawn settings can negatively impact server performance, especially on busy servers or when combined with other demanding world settings. If you notice lag, lower the value again and restart the server.
:::

## Save and Restart the Server

After editing the file:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server from the ZAP-Hosting game server administration.

A restart is required for the new Pal spawn rate to take effect.

## Verify the Change

Once the server is back online, join your Palworld server and observe the world activity in areas where Pals normally appear.

If the spawn rate does not seem to have changed:

- reopen `PalWorldSettings.ini` and confirm that `PalSpawnNumRate` is present
- make sure the value is inside the correct `OptionSettings` section
- verify that the file was saved successfully
- restart the server again after confirming the change

## Configuration Reference

| Item | Value |
| --- | --- |
| Configuration file | `PalWorldSettings.ini` |
| ZAP-Hosting location | Game server administration → `Configs` |
| Setting name | `PalSpawnNumRate` |
| Default value | `1.000000` |
| Restart required | Yes |

## Conclusion

Congratulations, you have successfully changed the Pal spawn rate on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!