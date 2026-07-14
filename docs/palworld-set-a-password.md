---
id: palworld-set-a-password
title: "Palworld: Set a Password"
description: "Learn how to set a Palworld server password, check password configuration, and complete a secure password change for your Palworld game server. -> Learn more now"
sidebar_label: Palworld: Set a Password
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld supports a server password that restricts who can join your game world. In this guide, you will learn how to manually set or change the password in the server configuration through the ZAP-Hosting game server administration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, you need access to your Palworld game server in the ZAP-Hosting web interface. You should also stop using special characters that may cause formatting issues unless you have verified they work correctly in your current Palworld version.

:::info Configuration Access Requirement
You need access to your game server administration and the `Configs` area, because the password must be set manually in the Palworld configuration file.
:::

## Open the Palworld Configuration File

To set a password, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting web interface:

1. Open your **Palworld** game server administration
2. Navigate to **Configs**
3. Open the file `PalWorldSettings.ini`

This file contains the main gameplay and server access settings for your Palworld server.

:::note File Location Information
Depending on the game server template and Palworld version, the underlying file path may vary internally. In the ZAP-Hosting interface, you should use the `Configs` section and edit `PalWorldSettings.ini` there instead of relying on a manual file path.
:::

## Edit the Password Setting

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section. The password is controlled with the `ServerPassword` configuration entry.

By default, it is usually set to an empty value:

```ini
ServerPassword=""
```

To require a password for players joining your server, replace the empty value with your own password:

```ini
ServerPassword="[your_password]"
```

Replace `[your_password]` with the password you want players to enter when connecting.

### Example Configuration

If you want to use `zaphosting123` as your server password, the entry would look like this:

```ini
ServerPassword="zaphosting123"
```

### Configuration Reference

| Setting | Description | Example |
| --- | --- | --- |
| `ServerPassword` | Password required for players to join the server | `ServerPassword="zaphosting123"` |

:::caution Keep the Existing Format Intact
Only change the value of `ServerPassword`. Do not remove quotation marks, commas, brackets, or other settings in the `OptionSettings` line, as incorrect formatting can prevent the server from loading the configuration properly.
:::

## Save the Changes

After editing the password entry, save the changes in `PalWorldSettings.ini`.

If you are also performing a password change, you only need to update the value inside the same `ServerPassword` entry and save the file again.

:::tip Choose a Practical Password
Use a password that is easy to share with trusted players but not easy for strangers to guess. A simple server password is usually enough for private sessions, but you should avoid reusing an important account password from other services.
:::

## Restart the Server

After saving the configuration, you need to restart your Palworld server so the new password can be applied.

1. Return to your game server administration
2. Restart the server

Palworld does not apply this configuration change instantly while the server is running, so a restart is required.

## Verify the Password

Once the server has restarted, ask a player to connect using the new password. This is the easiest way to check password functionality and confirm the configuration was applied correctly.

If players can still join without a password, check the following:

- `ServerPassword` is present in `PalWorldSettings.ini`
- the value is enclosed in quotation marks
- the file was saved successfully
- the server was restarted after the change

If you want to remove the password later, set the value back to an empty string:

```ini
ServerPassword=""
```

Then save the file and restart the server again.

## Conclusion

Congratulations, you have successfully set a password for your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!