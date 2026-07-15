---
id: palworld-enable-raids
title: "Palworld: Enable Raids"
description: "Learn how to enable or disable raids on your Palworld server by editing the correct configuration setting for invader enemy attacks. -> Learn more now"
sidebar_label: Palworld: Enable Raids
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld raids are invader enemy attacks that can target player bases on your server. In this guide, you will learn how to enable or disable raids by manually editing the correct configuration file in the ZAP-Hosting game server administration.



## Preparation

Before you start, make sure that you have access to your Palworld game server through the ZAP-Hosting web interface and permission to edit server configuration files.

:::info Manual Configuration Required
This setup is performed by manually editing the Palworld server configuration under **Configs** in your game server administration. After saving your changes, you need to restart the server for the new setting to take effect.
:::

## Locate the Correct Configuration File

To enable or disable raids, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your **Palworld** game server.
2. Navigate to **Configs**.
3. Open the file named `PalWorldSettings.ini`.

This file contains the main gameplay configuration values for your Palworld server, including the setting that controls whether raids are enabled.

## Edit the Raid Setting

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section. The relevant configuration key is:

```ini
bEnableInvaderEnemy=True
```

This setting controls whether invader enemy raids are active on the server.

### Enable Raids

If you want raids enabled, set the value to `True`:

```ini
bEnableInvaderEnemy=True
```

With this value, periodic enemy attacks on player bases can occur during gameplay.

### Disable Raids

If you want to disable raids, set the value to `False`:

```ini
bEnableInvaderEnemy=False
```

This disables invader enemy attacks completely, which can create a more peaceful building experience and may slightly reduce server load.

## Configuration Reference

Use the following table as a quick reference for the raid setting:

| Config file | Config key | Value | Effect |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `True` | Enables raids and invader enemy attacks |
| `PalWorldSettings.ini` | `bEnableInvaderEnemy` | `False` | Disables all raids and invader enemy attacks |

:::note Default Behavior
The default Palworld server behavior is generally `bEnableInvaderEnemy=True`, which means raids are enabled unless you change the setting manually.
:::

## Save and Apply the Changes

After editing the value in `PalWorldSettings.ini`, save the file in the ZAP-Hosting **Configs** section.

You then need to restart your Palworld server so the updated configuration is loaded.

### Restart the Server

Use the restart function in your ZAP-Hosting game server administration after saving the file.

:::caution Restart Required
If you do not restart the server, the changed raid setting may not be applied. Editing the file alone is not enough.
:::

## Verify the Setting

After the restart is complete, your new raid configuration should be active.

- If `bEnableInvaderEnemy=True`, raids are enabled.
- If `bEnableInvaderEnemy=False`, raids are disabled.

If the setting does not seem to apply, reopen `PalWorldSettings.ini` and confirm that the value was saved correctly without formatting errors.

:::tip Peaceful Base Building
Disabling raids can be useful if you want to focus on exploration, base building, or lower-pressure cooperative gameplay without periodic enemy attacks.
:::

## Conclusion

Congratulations, you have successfully enabled or disabled raids on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!