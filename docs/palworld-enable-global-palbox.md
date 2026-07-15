---
id: palworld-enable-global-palbox
title: "Palworld: Enable Global Palbox"
description: "Learn how to enable the Palworld global palbox server setting for global palbox import and export on your dedicated server. -> Learn more now"
sidebar_label: "Enable Global Palbox"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

The *Global Palbox* in Palworld allows players to transfer Pals between servers by using Palworld's global cloud-based Pal storage system. In this guide, you will learn how to enable Global Palbox import and export on your ZAP-Hosting Palworld server by editing the correct configuration file manually.



## Preparation

Before you begin, make sure that:

- you have access to your Palworld game server in the ZAP-Hosting web interface
- your server is currently stopped or can be restarted after the changes
- you can access the `Configs` section in your game server administration

:::info Configuration File Access
For ZAP-Hosting Palworld servers, the relevant settings can be edited through the game server administration under `Configs`. You do not need external file access if the configuration editor is available there.
:::

## Open the Palworld Configuration File

To enable the Global Palbox feature, you need to edit the `PalWorldSettings.ini` file.

### Find the Config File in the ZAP Interface

1. Log in to the [ZAP-Hosting website](https://zap-hosting.com).
2. Open your Palworld game server administration.
3. Navigate to the `Configs` section.
4. Open the file named `PalWorldSettings.ini`.

This file contains the main server settings used by Palworld, including the Global Palbox options.

:::note Manual Configuration Required
The Global Palbox setting is configured manually through the server configuration file. If you do not see a separate toggle for this feature in the interface, editing `PalWorldSettings.ini` directly is the correct method.
:::

## Enable Global Palbox Import and Export

Once you have opened `PalWorldSettings.ini`, you need to locate the server option list and adjust the Global Palbox entries.

### Required Configuration Keys

The following settings control Global Palbox behavior:

| Config key | Value | Function |
| --- | --- | --- |
| `bAllowGlobalPalboxImport` | `True` or `False` | Allows players to import Pals from the Global Palbox |
| `bAllowGlobalPalboxExport` | `True` or `False` | Allows players to export Pals to the Global Palbox |

According to current third-party reference material, `bAllowGlobalPalboxImport` is disabled by default with `False`, while `bAllowGlobalPalboxExport` is enabled by default with `True`. If your file already contains these values, you only need to adjust them as required.

### Set the Values

To fully enable Global Palbox transfers between servers, set both values to `True`.

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

If these options already exist in the file, replace the existing values. If they are not present, add them to the server settings section in `PalWorldSettings.ini`.

:::caution Keep Existing Syntax Intact
Palworld configuration files are sensitive to formatting. Only change the required values and avoid removing commas, brackets, or other existing entries if these options are part of a larger settings line in your file.
:::

## Save the Changes

After editing the file:

1. Save the changes in the `PalWorldSettings.ini` editor.
2. Confirm that both Global Palbox values are present and set correctly.

If your server panel offers a save button only, use that first before restarting the server in the next step.

## Restart the Server

After changing the Global Palbox settings, you need to restart the Palworld server so the new configuration is loaded.

### Apply the New Settings

Restart your server from the game server administration after saving the file.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional console commands | No |

No additional commands are required after editing the configuration file. A normal server restart is sufficient to apply the new Palworld global palbox server setting.

:::tip Verify the Feature In-Game
After the restart, join your server and test whether players can import and export Pals through the Global Palbox. This is the easiest way to confirm that the setting was applied successfully.
:::

## Troubleshooting

If the Global Palbox does not work after the restart, check the following points.

### Confirm the Values Were Saved Correctly

Open `PalWorldSettings.ini` again and verify that these values are still present:

```ini
bAllowGlobalPalboxImport=True
bAllowGlobalPalboxExport=True
```

If the values reverted, the file may not have been saved correctly.

### Check for Formatting Problems

If you inserted the values into an existing settings block, make sure the surrounding syntax is still valid. Incorrect formatting in `PalWorldSettings.ini` can cause Palworld to ignore settings or fail to load them properly.

### Restart the Server Again

If you saved the file while the server was running, perform another full restart to make sure the new configuration is applied.

:::danger Feature Availability Depends on Game Version
Global Palbox is a game feature provided by Palworld itself. If the setting does not work even though the configuration is correct, the feature may depend on the current Palworld server version or temporary game-side limitations. In that case, check whether your server is fully up to date.
:::

## Conclusion

Congratulations, you have successfully enabled Global Palbox import and export on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!