---
id: palworld-change-day-night-speed
title: "Palworld: Change Day Night Speed"
description: "Learn how to change day and night speed in Palworld by editing the day cycle settings on your server. -> Learn more now"
sidebar_label: "Change Day Night Speed"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to adjust how quickly the day and night cycle passes on your server. In this guide, you will learn how to change day and night speed by editing the correct configuration file in your ZAP-Hosting game server administration and applying the changes properly.



## Preparation

Before you begin, make sure that you have access to your Palworld game server through the ZAP-Hosting web interface and permission to edit server configuration files.

:::info Manual Configuration Required
This setup is performed manually through the server configuration files. You need to edit the Palworld settings directly instead of using automated in-game commands.
:::

## Locate the Configuration File

To change the day and night speed, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration, you can access this file through the **Configs** section. Open your Palworld server in the web interface and navigate to the configuration file management area.

The relevant file is:

```ini
PalWorldSettings.ini
```

:::note Config File Location
Depending on the game server template and panel layout, the file is provided through the **Configs** area in the ZAP-Hosting administration. If the full internal path is shown in your interface, it is typically the Palworld server settings file used for gameplay configuration.
:::

## Edit the Day and Night Speed Settings

Inside `PalWorldSettings.ini`, look for the gameplay configuration entries for day and night speed.

You need to adjust the following values:

| Config key | Default value | Description |
| --- | --- | --- |
| `DayTimeSpeedRate` | `1.000000` | Controls how fast the day passes |
| `NightTimeSpeedRate` | `1.000000` | Controls how fast the night passes |

Higher values make time pass faster, while lower values make time pass slower.

### Example Configuration

If you want to make both day and night pass faster, you can set higher values like this:

```ini
DayTimeSpeedRate=2.000000
NightTimeSpeedRate=2.000000
```

If you want a longer day but a faster night, you can use different values, for example:

```ini
DayTimeSpeedRate=0.500000
NightTimeSpeedRate=2.000000
```

### Where to Place the Values

Palworld stores many gameplay settings inside the `OptionSettings` section of `PalWorldSettings.ini`. You should edit the existing `DayTimeSpeedRate` and `NightTimeSpeedRate` entries there rather than adding duplicate keys elsewhere.

A typical section can look similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

After editing, it could look like this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(DayTimeSpeedRate=2.000000,NightTimeSpeedRate=1.500000,ExpRate=1.000000,PalCaptureRate=1.000000)
```

:::caution Edit Existing Entries Carefully
Make sure you only change the value after `DayTimeSpeedRate=` and `NightTimeSpeedRate=`. Do not remove commas, brackets, or other existing settings in the `OptionSettings` line, as incorrect formatting can prevent the server from loading the configuration properly.
:::

## Save and Apply the Changes

Once you have updated the values in `PalWorldSettings.ini`, save the file in the ZAP-Hosting configuration editor.

After saving, restart your Palworld server so the new day cycle settings are loaded.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional console commands | No |

:::tip Restart Required
Configuration changes for Palworld world settings are not applied reliably until the server has been restarted. Always restart the server after you change the day or night speed.
:::

## Verify the New Day Cycle

After the restart is complete, join your server and observe the in-game time progression.

You should now notice that:

- the **day** passes faster or slower based on `DayTimeSpeedRate`
- the **night** passes faster or slower based on `NightTimeSpeedRate`

If the speed does not seem to change, re-open `PalWorldSettings.ini` and verify that:

- the values were saved correctly
- the formatting of the `OptionSettings` line is still valid
- the server was restarted after the change

## Configuration Reference

Use the following table as a quick reference when you want to change day settings again later.

| Setting | Example | Result |
| --- | --- | --- |
| `DayTimeSpeedRate=0.500000` | Slower day | Day lasts longer |
| `DayTimeSpeedRate=2.000000` | Faster day | Day passes more quickly |
| `NightTimeSpeedRate=0.500000` | Slower night | Night lasts longer |
| `NightTimeSpeedRate=2.000000` | Faster night | Night passes more quickly |

:::note Balanced Settings
If you want a more natural gameplay experience, avoid extremely high values. Very fast day and night changes can make farming, exploration, and base management harder to plan.
:::

## Conclusion

Congratulations, you have successfully changed the day and night speed on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!