---
id: palworld-spectate-mode
title: "Palworld: Spectate Mode"
description: "Learn how to use spectate mode in Palworld, set the required admin password, and enter spectate mode on your server. -> Learn more now"
sidebar_label: Palworld: Spectate Mode
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Spectate mode in Palworld allows you to observe players on your server without actively participating. In this guide, you will learn how to prepare admin access, where to check the required configuration in the ZAP-Hosting interface, and how to enter and exit spectate mode in-game.

## Preparation

Before you can use spectate mode, you need administrator access on your Palworld server. This requires a valid `AdminPassword` to be set in your server configuration.

If you have not configured this yet, make sure you first review your Palworld server settings and admin setup.

:::info Admin Access Required
Spectate mode is only available to administrators. If you do not log in as an admin first, the spectate command will not work.
:::

## Check the required server configuration

Although spectate mode itself does not require a dedicated setting to be enabled, your server must have an admin password configured so that you can authenticate as an administrator.

### Open the configuration file in the ZAP interface

In your ZAP-Hosting game server web interface, open the **Configs** section. The relevant Palworld configuration is stored in the file:

`PalWorldSettings.ini`

Depending on the server template and game version, this file contains the main server options including the admin password entry.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

### Verify the admin password entry

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section and verify that the `AdminPassword` value is set.

A typical example looks like this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(AdminPassword="[your_admin_password]")
```

If your file already contains many options in a single `OptionSettings=(...)` line, you only need to make sure that the `AdminPassword` entry exists and contains your chosen password.

:::caution Preserve Existing Syntax
Do not remove other existing values from the `OptionSettings` line. Palworld commonly stores multiple settings in the same entry, so you should only add or edit the `AdminPassword` value carefully.
:::

### Configuration reference

| File | Location in ZAP interface | Required key | Purpose |
| --- | --- | --- | --- |
| `PalWorldSettings.ini` | `Configs` | `AdminPassword` | Allows you to authenticate as an admin and use spectate mode |

## Save changes and restart the server

If you changed the `AdminPassword` in `PalWorldSettings.ini`, save the file and restart your Palworld server from the ZAP-Hosting web interface.

A restart is required so the updated configuration is loaded by the server.

:::note Restart Requirement
If you did not make any changes to the configuration file and the admin password was already set correctly, no additional configuration restart is needed for spectate mode itself.
:::

## Log in as an administrator

Once the server is online, connect to your Palworld server in-game as usual. To use spectate mode, you must authenticate with the admin password configured earlier.

The exact admin login command can vary depending on the current Palworld implementation and interface behavior. If your server requires manual admin authentication after joining, use the configured admin password in the appropriate in-game admin command or admin login prompt supported by your current server version.

:::info About Admin Authentication
Current third-party references consistently confirm that spectate mode requires admin privileges and that `AdminPassword` must be configured. However, if your current server build uses a specific admin login command, you should follow the command format supported by your installed Palworld version.
:::

## Enter spectate mode

After you are connected as an administrator, you can enable spectate mode in one of the following ways.

### Use the keyboard shortcut

Press the `\` key to enter spectate mode.

### Use the command

Alternatively, use the following in-game command:

```text
/togglespectate
```

This command toggles spectate mode on or off for your current character session, provided that you are authenticated as an admin.

### Spectate mode command reference

| Action | Method | Requirement |
| --- | --- | --- |
| Enter spectate mode | Press `\` | Admin privileges |
| Toggle spectate mode | `/togglespectate` | Admin privileges |
| Exit spectate mode | Press `Esc` | Active spectate mode |

:::tip When to Use Spectate Mode
Spectate mode is useful if you want to monitor players, investigate reports, or observe activity on your server without interfering with gameplay.
:::

## Exit spectate mode

To leave spectate mode and return to normal gameplay, press `Esc`.

If needed, you can also use `/togglespectate` again to toggle the mode off, depending on your current server behavior.

## Troubleshooting

If spectate mode does not work, check the following points.

### Confirm that the admin password is set

Open `PalWorldSettings.ini` again through **Configs** and make sure `AdminPassword` is present and not empty.

### Restart after changing the configuration

If you recently edited the config file, restart the server before testing again.

### Make sure you are authenticated as admin

Having an `AdminPassword` configured is not always enough by itself. You also need to be recognized by the server as an active administrator during your session.

### Verify your key input

On some keyboard layouts, the `\` key can be placed differently. If the shortcut does not respond, use `/togglespectate` instead.

:::caution Version Differences
Palworld is still subject to gameplay and server changes. If spectate mode or admin behavior differs on your server, verify that your server is updated and check whether the current game version has changed the related commands or permissions.
:::

## Conclusion

Congratulations, you have successfully used spectate mode on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!