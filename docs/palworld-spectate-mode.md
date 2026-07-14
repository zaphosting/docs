---
id: palworld-spectate-mode
title: "Palworld: Spectate Mode"
description: "Learn how to use spectate mode in Palworld, configure admin access, and enter spectate mode on your server safely. -> Learn more now"
sidebar_label: Palworld: Spectate Mode
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Spectate mode in Palworld allows you to observe players on your server without actively participating. In this guide, you will learn how to verify the required admin configuration, where to find the relevant file in the ZAP-Hosting interface, and how to enter and exit spectate mode in-game.

## Preparation

Before you can use spectate mode, you need administrator access on your Palworld server.

:::info Admin Access Required
Spectate mode is only available to players with admin privileges. If you have not configured admin access yet, you need to set an `AdminPassword` first.
:::

You need the following before continuing:

| Requirement | Purpose |
| --- | --- |
| Access to your ZAP-Hosting game server web interface | To edit the Palworld configuration |
| A Palworld game server | To use spectate mode in-game |
| Admin password configured | Required to authenticate as an administrator |

If you still need to configure administrator access, follow the relevant admin setup guide if available in your documentation collection.

## Verify the admin configuration

Spectate mode itself does not require a dedicated spectate setting in the Palworld configuration. However, you must make sure that administrator access is configured correctly in the server settings.

### Open the configuration file in the ZAP interface

In the ZAP-Hosting game server administration, open the `Configs` section. The relevant Palworld server settings are stored in the following file:

```ini
PalWorldSettings.ini
```

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Configuration Location
The task reference indicates that configuration files can be accessed through the game server administration under `Configs`. The exact folder structure may vary depending on the server template, but the required file to edit is `PalWorldSettings.ini`.
:::

### Check the `AdminPassword` value

Open `PalWorldSettings.ini` and look for the `AdminPassword` entry in the server option settings.

A typical example looks similar to this:

```ini
OptionSettings=(AdminPassword="[your_admin_password]",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575)
```

Replace `[your_admin_password]` with the password you want to use for administrator login.

| Config key | Required | Description |
| --- | --- | --- |
| `AdminPassword` | Yes | Defines the password used to authenticate as an admin in-game |

:::caution Edit Existing Syntax Carefully
`PalWorldSettings.ini` uses a single `OptionSettings` line with multiple comma-separated values. Make sure you only change the `AdminPassword` value and do not remove commas, quotation marks, or brackets, as this can break the configuration.
:::

## Save and restart the server

After updating the configuration, save the file in the `Configs` section.

To ensure the new admin password is applied, restart your Palworld server from the ZAP-Hosting web interface.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the game server | Yes |
| Run additional console commands on the server | No |

:::tip Restart Required
If you change the `AdminPassword`, the new value will usually only take effect after a server restart.
:::

## Authenticate as an admin in-game

Once the server has restarted, join your Palworld server in-game and authenticate as an administrator using the password you configured.

The exact admin login command can vary depending on the current Palworld server implementation and client behavior. If your server does not accept admin-only actions immediately after joining, verify that the `AdminPassword` is set correctly and that you are using the current in-game admin authentication method supported by Palworld.

:::info Important Verification
The referenced source confirms that spectate mode requires admin privileges, but it does not document the full in-game admin authentication command flow. If admin actions do not work, you should verify the current Palworld admin login procedure against the official game documentation or current server release notes.
:::

## Use spectate mode

After you have administrator access in-game, you can enter spectate mode.

### Enter spectate mode with a key press

Press the backslash key:

```text
\
```

This should switch you into spectate mode so you can observe players without normal gameplay interaction.

### Enter spectate mode with a command

As an alternative, you can use the following in-game command:

```text
/togglespectate
```

| Method | Input |
| --- | --- |
| Keyboard shortcut | `\` |
| In-game command | `/togglespectate` |

### Exit spectate mode

To leave spectate mode and return to normal gameplay, press:

```text
Esc
```

:::note Spectate Mode Behavior
Spectate mode is intended for observation. If the mode does not activate, first confirm that your admin privileges are active and that the server is running with the expected configuration.
:::

## Troubleshooting

### Spectate mode does not work

If spectate mode does not activate, check the following:

| Check | What to verify |
| --- | --- |
| Admin password configured | `AdminPassword` exists in `PalWorldSettings.ini` |
| File saved correctly | Your changes were saved in the ZAP `Configs` section |
| Server restarted | The server was restarted after editing the config |
| Admin privileges active | You successfully authenticated as an admin in-game |
| Correct input used | You pressed `\` or used `/togglespectate` |

### Configuration changes are ignored

If your changes do not seem to apply:

1. Reopen `PalWorldSettings.ini` in the `Configs` section.
2. Confirm that the `AdminPassword` value is still present.
3. Check for broken syntax in the `OptionSettings` line.
4. Save the file again.
5. Restart the server once more.

:::danger Avoid Invalid Configuration Edits
Do not remove or accidentally overwrite other values in `PalWorldSettings.ini`. Incorrect formatting can prevent the server from loading settings properly.
:::

## Conclusion

Congratulations, you have successfully configured admin access and used spectate mode on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!