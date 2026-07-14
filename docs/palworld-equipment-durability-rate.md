---
id: palworld-equipment-durability-rate
title: "Palworld: Equipment Durability Rate"
description: "Learn how to change equipment durability and adjust the equipment durability rate on your Palworld server by editing the correct config value. -> Learn more now"
sidebar_label: Palworld: Equipment Durability Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In Palworld, the equipment durability rate controls how quickly your tools, weapons, and armor lose durability during use. In this guide, you will learn how to manually change the `EquipmentDurabilityDamageRate` setting in your ZAP-Hosting Palworld server configuration and apply the change correctly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to your Palworld game server administration in the ZAP-Hosting web interface. You also need permission to edit your server configuration files under **Configs**.

:::info Manual Configuration Required
This setting must be changed manually in the Palworld configuration file. There is no separate command that needs to be executed in-game for this specific change.
:::

## Understanding the durability setting

Palworld stores many gameplay settings in the `PalWorldSettings.ini` configuration file. The setting relevant for equipment durability is:

- `EquipmentDurabilityDamageRate`

This value acts as a multiplier for durability loss:

| Config key | Description | Default value |
| --- | --- | --- |
| `EquipmentDurabilityDamageRate` | Controls how quickly equipment loses durability | `1.000000` |

Lower values reduce durability loss, which means your equipment lasts longer. A value of `0.000000` disables durability loss entirely for equipment.

:::note What this setting affects
This setting changes the durability loss rate for equipment such as tools, weapons, and armor. It does not increase item damage, repair speed, or item quality.
:::

## Open the Palworld configuration file

To change the setting, you need to edit the main Palworld server configuration file from your ZAP-Hosting game server administration.

### Find the file in the ZAP-Hosting interface

1. Log in to the ZAP-Hosting website.
2. Open your **Palworld** game server administration.
3. Go to **Configs**.
4. Open the file `PalWorldSettings.ini`.

This is the file where Palworld gameplay values such as durability, stamina, damage, and other world settings are stored.

## Edit the equipment durability rate

Once you have opened `PalWorldSettings.ini`, look for the `OptionSettings` line. Palworld typically stores gameplay settings as comma-separated entries inside this section.

### Add or change the config entry

You need to make sure the following entry exists inside `OptionSettings`:

```ini
EquipmentDurabilityDamageRate=1.000000
```

If the key is already present, replace its current value with your preferred one. If it is missing, add it inside the existing `OptionSettings=(...)` block.

### Example values

You can use the following values depending on the result you want:

| Value | Effect |
| --- | --- |
| `1.000000` | Default durability loss |
| `0.500000` | Equipment lasts about twice as long |
| `0.250000` | Equipment lasts about four times as long |
| `0.000000` | Equipment becomes indestructible |

### Example configuration snippet

The exact contents of your `OptionSettings` line may differ depending on your server setup, but the durability setting should appear in the same comma-separated list, for example:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,EquipmentDurabilityDamageRate=0.500000)
```

:::caution Preserve existing formatting
Do not remove other values from the `OptionSettings` line when editing the file. Palworld expects these settings to remain in the correct comma-separated format.
:::

## Save and apply the changes

After editing the configuration file, save your changes in the ZAP-Hosting interface.

### Restart the server

To apply the new durability setting, restart your Palworld server from the game server administration.

Without a restart, the updated configuration will usually not be loaded by the server.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run an in-game command | No |
| Reinstall the server | No |

:::tip Test changes with a small adjustment first
If you are unsure which durability value fits your gameplay style, start with `0.500000`. This gives a noticeable durability improvement without fully disabling the mechanic.
:::

## Troubleshooting

If the new equipment durability behavior does not apply after restarting, check the following points.

### Verify the config key

Make sure the key is written exactly as:

```ini
EquipmentDurabilityDamageRate
```

Palworld configuration keys are case-sensitive in practice for reliable administration, so you should copy the name exactly as shown.

### Check the placement in `OptionSettings`

The value must be inside the `OptionSettings=(...)` section of `PalWorldSettings.ini`. If you place it outside this block, the server may ignore it.

### Confirm the file was saved

After editing in **Configs**, verify that your changes are still present when reopening `PalWorldSettings.ini`. If not, the file may not have been saved successfully.

### Restart again if needed

If players were online during the change or the server did not restart cleanly, perform another full restart from the server administration panel.

## Conclusion

Congratulations, you have successfully changed the equipment durability rate on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!