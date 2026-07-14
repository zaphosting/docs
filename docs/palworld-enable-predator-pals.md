---
id: palworld-enable-predator-pals
title: "Palworld: Enable Predator Pals"
description: "Learn how to enable or disable predator pals on your Palworld server, fix predator pals not spawning, and configure the correct setting manually. -> Learn more now"
sidebar_label: Palworld: Enable Predator Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

*Predator Pals* are powerful boss-type Pals that can spawn throughout the world in Palworld. In this guide, you will learn how to enable or disable predator pals on your ZAP-Hosting Palworld server by manually editing the correct configuration file.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to manage its configuration files.

:::info Configuration File Access
For this setup, you need to edit your server configuration manually through the **Configs** section of your game server administration.
:::

## Open the Palworld Configuration

To change whether predator pals can spawn, you need to edit the `PalWorldSettings.ini` file.

### Find the correct file in the ZAP interface

First, open your Palworld game server in the ZAP-Hosting web interface. Then navigate to the **Configs** area of your server administration and open the `PalWorldSettings.ini` file.

This is the main configuration file used for gameplay-related server settings, including predator boss pal behavior.

:::note Manual Editing Required
This setting must be changed manually in the configuration file. If your interface does not show a dedicated toggle for this option, editing `PalWorldSettings.ini` directly is the correct method.
:::

## Edit the Predator Pals Setting

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section. The relevant configuration key is `EnablePredatorBossPal`.

### Configuration value

Use one of the following values depending on the result you want:

| Setting | Value | Result |
| --- | --- | --- |
| Enable predator pals | `True` | Predator boss Pals can spawn in the world |
| Disable predator pals | `False` | Predator boss Pals will not spawn in the world |

### Example entry

If the setting already exists, change its value. If it is missing, add it inside the `OptionSettings` configuration list.

```ini
EnablePredatorBossPal=True
```

To disable predator pals instead, use:

```ini
EnablePredatorBossPal=False
```

:::tip Check Existing Syntax First
Palworld server settings are commonly stored as part of a longer `OptionSettings` line in `PalWorldSettings.ini`. If your file already contains this structure, add or modify `EnablePredatorBossPal=True` or `EnablePredatorBossPal=False` within that existing settings list instead of creating a separate unrelated section.
:::

## Save and Apply the Changes

After editing the file, save your changes in the **Configs** section.

### Restart the server

Once the file has been saved, restart your Palworld server so the new setting can be loaded properly.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Additional console command | No |

:::caution Restart Required
The new predator pals setting will not apply until your server has been restarted. If predator pals are not spawning after the change, confirm that the file was saved correctly and that the server restart completed successfully.
:::

## Verify the Setting

After the restart, join your server and check whether predator pals are behaving as expected.

If you enabled them and predator pals are not spawning, review the `PalWorldSettings.ini` entry again and make sure the value is written exactly as `True` or `False`. Also confirm that the setting is placed correctly within the existing server configuration syntax.

:::note Spawn Behavior
This setting controls whether predator boss Pals are allowed to spawn in the world. It does not provide a predator pals location map, change individual spawn points, or guarantee immediate encounters in a specific area.
:::

## Configuration Reference

| File | Location in ZAP-Hosting | Key | Possible values | Default behavior | Restart required |
| --- | --- | --- | --- | --- | --- |
| `PalWorldSettings.ini` | Game server administration → **Configs** | `EnablePredatorBossPal` | `True`, `False` | `True` | Yes |

## Conclusion

Congratulations, you have successfully enabled or disabled predator pals on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!