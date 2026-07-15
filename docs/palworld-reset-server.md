---
id: palworld-reset-server
title: "Palworld: Reset Server"
description: "Learn how to reset your Palworld server in the ZAP web interface, understand which settings are removed, and restore default server data safely. -> Learn more now"
sidebar_label: "Reset Server"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld stores your world, player progress, and server settings on the game server. In this guide, you will learn how to fully reset your Palworld server on ZAP-Hosting and start again with a fresh default installation.

:::danger Full Data Deletion Warning
A full reset permanently deletes your existing save data, configuration changes, and any other server files stored on the current installation. You should only use this as a last resort.
:::

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to your Palworld game server in the ZAP-Hosting web interface and that you no longer need the current world data.

:::info Back Up Important Data First
If you want to keep a copy of your current world or configuration, create a backup before continuing. Once the reset has been completed, the deleted data cannot normally be restored.
:::

## Understand what a Palworld server reset does

A full Palworld reset is not the same as changing a single setting in the configuration file. Instead, it reinstalls the entire server and removes the current server data.

The reset process typically removes the following:

| Data type | Removed during reset |
| --- | --- |
| World save data | Yes |
| Player progress | Yes |
| Server configuration changes | Yes |
| Installed mods or custom files | Yes |
| Default game files | Reinstalled automatically |

After the reset, your server starts with a fresh installation and default settings.

## Check the configuration location first

For normal Palworld configuration changes, you can access the relevant files in your game server administration under `Configs`. The main Palworld settings are commonly stored in the following file:

| File | Purpose |
| --- | --- |
| `PalWorldSettings.ini` | Main Palworld server configuration file |

In the ZAP-Hosting interface, you can usually access this through your Palworld server administration under `Configs`.

:::note Reset Does Not Require Manual Config Editing
A full server reset does not require you to manually edit `PalWorldSettings.ini`. This file is relevant for normal setting changes, but a complete reset is performed by reinstalling or formatting the server so that all files are recreated with default values.
:::

If your goal is only to change gameplay settings instead of deleting the entire server, you should edit the configuration file in `Configs` rather than performing a full reset.

## Stop the server

Before starting the reset, you need to fully stop the Palworld server.

1. Log in to the ZAP-Hosting web interface.
2. Open your Palworld game server.
3. Stop the server using the server administration controls.
4. Wait until the server status confirms that it is offline.

:::caution Do Not Reset While the Server Is Running
If you start a reset while the server is still active, files may not be removed cleanly and save data can become inconsistent.
:::

## Reinstall and reset the server

A full reset on Palworld is performed by reinstalling the server with formatting or reset options in the ZAP interface.

### Open the reinstall function

In your Palworld server administration, look for the reinstall or reset function in the server management area.

Because interface labels can vary between panel versions, the exact wording may differ slightly. On ZAP-Hosting, this function is generally located in the server administration area where reinstall or format actions are available.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Start the full reset

Use the available reinstall option that performs a full format or reset of the server data.

During this step, confirm the action if the panel asks for confirmation.

:::danger This Action Wipes All Server Data
A full reinstall or format reset deletes saves, configs, and custom server files. Only continue if you are certain that you want to reset everything.
:::

### Wait for the installation to finish

After confirming the reset, wait until the reinstall process has completed. Depending on the panel state and server size, this may take a few minutes.

Do not interrupt the process while the server is being reinstalled.

## Start the fresh Palworld server

Once the reinstall has finished, start the Palworld server again from the server administration.

After startup:

- a new world save will be created
- default server settings will be used
- previous player and world progress will no longer be present

If needed, you can now return to `Configs` and adjust your Palworld settings again in `PalWorldSettings.ini`.

## Verify the reset result

After the server has started, connect to the server and confirm that the reset was successful.

You should verify the following:

| Check | Expected result |
| --- | --- |
| World state | Fresh new world |
| Player data | No previous progress |
| Server settings | Default values unless changed again |
| Custom files or mods | Removed unless reinstalled manually |

If the old world still appears, stop the server and review whether the reinstall process completed successfully in the ZAP panel. If the panel did not perform a full format reset, you may need to repeat the process carefully.

## Reconfigure server settings after the reset

After a successful reset, your Palworld server will use default configuration values. If you want to customize the server again, open the `Configs` section in your game server administration and edit `PalWorldSettings.ini`.

Typical post-reset tasks may include:

- changing the server name
- setting a password
- adjusting difficulty or gameplay values
- reapplying custom configuration changes
- reinstalling supported mods or additional files if required

:::tip Reapply Settings Carefully
If a previous configuration caused problems, avoid copying all old settings back immediately. Reapply only the settings you actually need so you can identify problematic changes more easily.
:::

## Configuration reference

The following table summarizes the relevant file and the reset behavior:

| Item | Details |
| --- | --- |
| Main config file | `PalWorldSettings.ini` |
| ZAP location for config editing | `Configs` in the game server administration |
| Manual config change required for full reset | No |
| Required action for full reset | Reinstall or format/reset the server |
| Restart required afterward | Yes, start the server again after reinstall |
| Additional commands required | None confirmed |

:::note Interface Naming May Vary
The exact wording of the reinstall or format option can differ depending on the current ZAP web interface version. If you cannot find the reset function, contact support before attempting alternative file deletion methods.
:::

## Conclusion

Congratulations, you have successfully reset your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!