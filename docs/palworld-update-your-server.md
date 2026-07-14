---
id: palworld-update-your-server
title: "Palworld: Update Your Server"
description: "Learn how to update your Palworld server, check the current version update status, and manually trigger an update if needed. -> Learn more now"
sidebar_label: Palworld: Update Your Server
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld server updates are required to keep your server compatible with the latest Palworld game version. In this guide, you will learn how to update your Palworld server on ZAP-Hosting, where to check relevant settings, and what to do if the update does not apply correctly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to your Palworld game server through the ZAP-Hosting web interface and that your server is currently offline or can be restarted safely.

:::info Server Access Requirement
You need access to your Palworld server administration panel to restart the server, review the console, and access the `Configs` area if you want to verify related configuration files.
:::

## Understand How Palworld Updates Work on ZAP-Hosting

On ZAP-Hosting, Palworld server updates are generally handled through the server startup process. In practice, this means a restart is usually enough to trigger an update check and install the latest available server version.

:::note No Manual Game File Command Normally Required
For standard Palworld server updates, you usually do not need to manually enter SteamCMD commands or edit a game update script yourself in the ZAP-Hosting interface. The update process is typically tied to the server restart and installation management handled by the game server system.
:::

If your server does not update automatically after a Palworld release, you should manually restart it first. If that still does not work, you can use the reinstall or file verification function in the server administration.

## Check Whether a Configuration File Must Be Edited

For this specific task, updating the Palworld server itself does **not normally require editing a gameplay configuration file** such as `PalWorldSettings.ini`.

The `Configs` section in your ZAP-Hosting game server administration is primarily used for server configuration files, for example gameplay or world settings. These files are not usually responsible for downloading or applying a Palworld version update.

### Relevant File Information

The following table explains which file is commonly associated with Palworld settings and whether you need to change it for a server update:

| File | Typical Purpose | Update Required? |
| --- | --- | --- |
| `PalWorldSettings.ini` | Stores Palworld server gameplay and world configuration | No, not for a normal server version update |
| Other files in `Configs` | Additional service or game-related configuration files depending on template | Only if your specific setup includes a custom auto-update setting |

:::caution Do Not Change Gameplay Settings Unnecessarily
Do not modify `PalWorldSettings.ini` or other configuration files unless you specifically need to change server behavior. Editing gameplay configuration values will not normally force a Palworld server update.
:::

### Where to Find the File in the ZAP Interface

If you want to review your Palworld configuration files, you can open them in the ZAP-Hosting web interface:

1. Open your Palworld game server in the ZAP-Hosting panel.
2. Go to the `Configs` section in the game server administration.
3. Select the relevant configuration file, such as `PalWorldSettings.ini`.

If your server template includes an update-related setting in a config file, review it carefully before making changes. Exact file names and available entries can vary depending on the current server template.

:::info If You Cannot Find an Update Setting
If there is no visible update-related option or file entry in `Configs`, this usually means the update behavior is managed by the server system rather than by a manually editable config file.
:::

## Update Your Palworld Server

The safest and most common way to update your Palworld server is to restart it so the system can check for a newer version.

### Restart the Server to Trigger the Update

1. Open your Palworld server in the ZAP-Hosting panel.
2. Restart the server.
3. Wait for the startup process to complete.
4. Review the console output for update or startup messages.

This restart is often enough to apply the latest Palworld version update after a new release.

### Verify the Running Version

After the server has restarted, check the console if your setup provides an `info` command.

| Command | Purpose |
| --- | --- |
| `info` | Displays server information and can help confirm the running version if supported by the current server environment |

Enter the following command in the server console:

```text
info
```

:::note Command Availability
The `info` command may depend on the current Palworld server environment or management layer. If the command is not accepted, review the startup logs instead to confirm whether the update was applied successfully.
:::

## What to Do If the Server Did Not Update

If the restart did not apply the latest Palworld update, continue with the following checks.

### Check Auto-Update Behavior

Some server environments may support an automatic update option. If such an option is available in your ZAP-Hosting server administration, make sure it is enabled.

Because interface labels can change over time, you should look for an update-related setting in your server administration rather than relying on outdated naming.

:::tip Automatic Update Recommendation
If your server provides an automatic update option, keeping it enabled helps ensure that each Palworld game update is installed with less manual work.
:::

If automatic updates are disabled, you may need to manually restart the server after every Palworld patch so the update check can run.

### Reinstall or Verify Integrity

If a normal restart does not update the server, stop the server completely and use the reinstall or integrity verification feature in the ZAP-Hosting server administration if it is available for your product.

This process rechecks or re-downloads the server files and can repair incomplete or outdated installations.

| Action | When to Use It | Result |
| --- | --- | --- |
| Restart | First update attempt | Triggers a normal update check |
| Stop and reinstall | If restart fails | Reinstalls server files |
| Verify integrity | If available and restart fails | Checks and repairs missing or outdated files |

:::caution Save Data Precaution
Before using reinstall-related functions, verify whether your current action affects only game files or also includes user data. If this is not clearly stated in the interface, create a backup first if possible.
:::

## Optional Review of Config Files

Although a Palworld update usually does not require config edits, you may still want to review your files after a major version update.

### Check for Template Changes

After an update, confirm that your existing settings in `PalWorldSettings.ini` still match your intended server setup. Some game updates can introduce new configuration options or change how older values behave.

### Save and Restart After Config Changes

If you manually edit any file in `Configs`, save the file and restart the server afterward so the changes are loaded.

| Step | Required? |
| --- | --- |
| Edit config file | Only if you want to change server settings |
| Save file | Yes, after editing |
| Restart server | Yes, to apply config changes |

## Troubleshooting

### The Server Starts but Seems Outdated

If players still see a version mismatch after your restart:

- confirm the server fully restarted
- review the console for update-related messages
- run `info` if supported
- perform a reinstall or integrity verification if needed

### The Update Option Is Not Visible

If you cannot find an automatic update or verification option in the panel, this may depend on your exact product template or current panel version. In that case, use a normal restart first and contact support if the server still does not update.

### Configs Are Available but No Update Entry Exists

This is expected in many cases. Palworld server updates are usually not controlled through `PalWorldSettings.ini`, so no manual config entry may be required for the update process.

## Conclusion

Congratulations, you have successfully updated your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!