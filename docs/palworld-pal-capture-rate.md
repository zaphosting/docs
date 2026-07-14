---
id: palworld-pal-capture-rate
title: "Palworld: Pal Capture Rate"
description: "Learn how to change the Palworld Pal capture rate by editing the PalCaptureRate setting for easier capture results on your server. -> Learn more now"
sidebar_label: Palworld: Pal Capture Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to adjust the Pal capture rate on your server through its main world configuration. In this guide, you will learn where to find the correct config file in the ZAP-Hosting interface, which value to change, and how to apply the new capture rate.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server through the ZAP-Hosting web interface and that the server is currently set up and running.

:::info Configuration File Access
For Palworld servers on ZAP-Hosting, the relevant settings can be edited through the game server administration under `Configs`.
:::

## Locate the Palworld Configuration File

To change the Pal capture rate, you need to edit the `PalWorldSettings.ini` file.

### Open the Configs Section

First, log in to the ZAP-Hosting web interface and open your Palworld game server. In the game server administration, navigate to `Configs`.

There, look for the file named:

```ini
PalWorldSettings.ini
```

### Identify the Correct Setting

Inside `PalWorldSettings.ini`, Palworld stores many gameplay settings in the `OptionSettings` section. The setting relevant for Pal capture is:

```ini
PalCaptureRate=[your_value]
```

The default value is typically:

```ini
PalCaptureRate=1.000000
```

A higher rate makes capturing Pals easier, while a lower rate makes capture attempts more difficult.

## Edit the Pal Capture Rate

Now that you have opened the correct file, you can adjust the capture rate to match your preferred gameplay balance.

### Change the Configuration Value

Search within `PalWorldSettings.ini` for the `PalCaptureRate` entry and replace its value with your preferred multiplier.

For example:

```ini
PalCaptureRate=2.000000
```

This would double the capture rate compared to the default setting.

### Example Values

Use the following table as a general reference:

| Value | Effect |
| --- | --- |
| `1.000000` | Default Pal capture rate |
| `1.500000` | Slightly easier capture |
| `2.000000` | Noticeably easier capture |
| `3.000000` | Much easier capture |

:::tip Balanced Configuration
If you want easier captures without making them feel guaranteed, a value between `1.500000` and `2.000000` is usually a reasonable starting point.
:::

## Save and Apply the Changes

After editing the `PalCaptureRate` value, save the changes in the ZAP-Hosting config editor.

### Restart the Server

Palworld does not apply this setting live. After saving the file, you need to restart your game server from the ZAP-Hosting server administration so the new capture rate is loaded.

:::caution Restart Required
If you do not restart the server after editing `PalWorldSettings.ini`, the new capture rate will not take effect.
:::

## Configuration Reference

The following table summarizes the setting used for this change:

| File | Config key | Default value | Purpose | Restart required |
| --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | `PalCaptureRate` | `1.000000` | Controls the Pal capture rate multiplier | Yes |

## Troubleshooting

If the new capture rate does not seem to work, check the following points.

### Verify the Setting Format

Make sure the line is written correctly and uses a numeric value, for example:

```ini
PalCaptureRate=2.000000
```

Avoid adding extra characters or changing unrelated entries in the file.

### Confirm the File Was Saved

After editing, verify that the changes were actually saved in `PalWorldSettings.ini` through the `Configs` section.

### Restart Again if Needed

If the server was not properly restarted after the change, perform another restart from the server administration.

:::note Server-Side Gameplay Setting
`PalCaptureRate` is a server gameplay setting, so players will only notice the new rate after the server has reloaded the updated configuration.
:::

## Conclusion

Congratulations, you have successfully changed the Pal capture rate on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!