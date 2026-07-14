---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop Settings"
description: "Learn how to change Palworld supply drop settings by editing the Palworld game server configuration and adjusting the supply interval manually. -> Learn more now"
sidebar_label: Palworld: Supply Drop Settings
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld includes timed supply drops that appear across the map and can provide useful loot during gameplay. In this guide, you will learn how to manually change the supply drop frequency on your ZAP-Hosting Palworld game server by editing the correct configuration file.

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit server configuration files.

:::info Manual Configuration Required
This setup is performed by manually editing the Palworld server configuration. The relevant file is available in your game server administration under `Configs`.
:::

## Open the Palworld Configuration File

To change the supply drop interval, you need to edit the `PalWorldSettings.ini` file.

### Find the file in the ZAP-Hosting interface

Open your Palworld game server administration and navigate to the `Configs` section. There, locate and open the file named `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Configuration File Location
On ZAP-Hosting, the required Palworld settings are typically managed through the `Configs` area in the web interface rather than by direct filesystem access.
:::

## Edit the Supply Drop Setting

The supply drop frequency is controlled by the `SupplyDropSpan` configuration key. This value is measured in **minutes**.

### Locate the setting

Search inside `PalWorldSettings.ini` for `SupplyDropSpan`.

If the setting is already present, change its value to your preferred interval. If it is missing, you need to add it within the existing `OptionSettings` configuration line.

A typical entry looks similar to this:

```ini
OptionSettings=(...,SupplyDropSpan=180,...)
```

### Change the value

Set `SupplyDropSpan` to the number of minutes you want between supply drops.

| Setting | Description |
| --- | --- |
| `SupplyDropSpan=180` | Default interval, equal to 3 hours |
| `SupplyDropSpan=60` | Supply drops every 1 hour |
| `SupplyDropSpan=360` | Supply drops every 6 hours |
| `SupplyDropSpan=30` | Very frequent supply drops |

Example:

```ini
OptionSettings=(...,SupplyDropSpan=60,...)
```

:::tip Choosing a Good Interval
Lower values make supply drops appear more often, which can increase loot availability and change the balance of your Palworld game. Higher values make drops rarer and can preserve a more survival-focused experience.
:::

## Save the Changes

After adjusting the value, save the `PalWorldSettings.ini` file in the `Configs` section.

:::caution Keep Existing Syntax Intact
Make sure you only change the `SupplyDropSpan` value and do not remove commas, brackets, or other existing settings in the `OptionSettings` line. Incorrect formatting can prevent the server from loading the configuration correctly.
:::

## Restart the Server

After saving the configuration, you need to restart your Palworld server so the new setting is applied.

### Apply the new configuration

Use the restart function in your ZAP-Hosting game server administration panel. No additional in-game or console command is required for this specific setting.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional command | No |

:::info Restart Required
Changes to `PalWorldSettings.ini` are not applied immediately while the server is running. You must restart the server after editing the file.
:::

## Verify the New Supply Drop Frequency

Once the server is back online, the new supply drop interval will be used for future events in your Palworld world.

Because `SupplyDropSpan` is time-based, you may need to wait for the configured interval before you can fully confirm the change in-game.

## Conclusion

Congratulations, you have successfully changed the supply drop settings on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!