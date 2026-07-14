---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop Settings"
description: "Learn how to change Palworld supply drop frequency on your Palworld game server by editing the SupplyDropSpan setting manually. -> Learn more now"
sidebar_label: Palworld: Supply Drop Settings
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld includes supply drops that appear at timed intervals and can provide useful resources during gameplay. In this guide, you will learn how to manually change the supply drop frequency on your ZAP-Hosting Palworld game server by editing the correct configuration file.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you start, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit server configuration files.

:::info Manual Configuration Required
This setup is performed manually through your server administration under **Configs**. After changing the setting, you need to restart the server so Palworld can load the updated configuration.
:::

## Locate the correct configuration file

To change the supply drop interval, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting web interface:

1. Open your Palworld game server administration.
2. Navigate to **Configs**.
3. Open the file `PalWorldSettings.ini`.

This file contains the main gameplay configuration values for your Palworld server, including the supply drop timer setting.

## Edit the supply drop setting

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section and locate the `SupplyDropSpan` entry.

The relevant configuration key is shown below:

| Setting | Description | Example |
| --- | --- | --- |
| `SupplyDropSpan` | Defines the interval between supply drops in minutes | `180` |

If the entry already exists, change its value to your preferred interval.

### Example values

You can use the following values as a reference:

| Value | Result |
| --- | --- |
| `30` | Very frequent supply drops |
| `60` | Supply drops every 1 hour |
| `180` | Default setting, every 3 hours |
| `360` | Supply drops every 6 hours |

### Example configuration

Depending on your current file content, the setting will appear as part of the larger `OptionSettings` line. For example:

```ini
OptionSettings=(SupplyDropSpan=180)
```

If your file already contains many settings in the same `OptionSettings=(...)` block, only change the `SupplyDropSpan` value and leave the rest of the existing entries unchanged.

For example:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,SupplyDropSpan=60)
```

:::caution Preserve Existing Settings
Do not remove other values from the `OptionSettings` block when editing `SupplyDropSpan`. If you accidentally delete commas, brackets, or other entries, your Palworld configuration may no longer load correctly.
:::

## Save and apply the changes

Once you have updated the `SupplyDropSpan` value:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server from the ZAP-Hosting server administration.

A restart is required because Palworld does not apply this setting live while the server is already running.

:::note No Additional Command Required
No extra in-game or console command is normally required for this change. Restarting the server is the necessary step to apply the updated supply drop interval.
:::

## Verify the new supply drop interval

After the restart, your server will use the new `SupplyDropSpan` value. You can verify the change by monitoring the time between supply drop events during gameplay.

If the change does not seem to apply, check the following:

| Check | What to verify |
| --- | --- |
| Correct file | You edited `PalWorldSettings.ini` |
| Correct location | The file was opened through **Configs** in your server administration |
| Correct syntax | `SupplyDropSpan` is written correctly and remains inside the `OptionSettings` block |
| Server restart | The server was fully restarted after saving |

:::tip Choose a Balanced Value
Very low values can make supply drops appear much more often than intended in normal Palworld gameplay. If you want more frequent events without making them excessive, `60` is usually a reasonable starting point.
:::

## Conclusion

Congratulations, you have successfully changed the supply drop frequency on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!