---
id: palworld-troubleshooting
title: "Palworld: Troubleshooting"
description: "Fix common Palworld server issues such as Palworld Steam update problems, connection timeouts, and Steam errors on your game server. -> Learn more now"
sidebar_label: Palworld: Troubleshooting
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld dedicated servers can occasionally run into update, startup, and connection problems, especially after a Palworld Steam update or when third-party modifications are installed. In this guide, you will learn how to identify common issues, which files or settings to check in your ZAP-Hosting game server administration, and what actions are required to restore normal operation.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin troubleshooting, make sure you have access to your Palworld game server administration and can open the server console and the `Configs` area.

:::info Required Access
You need access to the ZAP-Hosting web interface for your Palworld server so you can stop, start, reinstall, and edit configuration files if required.
:::

:::note About Configuration Files
Most of the issues in this guide are not fixed by changing gameplay settings alone. However, if you need to review or manually adjust Palworld server settings, the relevant file is usually available under the `Configs` section in your game server administration.
:::

## Find the Relevant Configuration File

For Palworld dedicated servers, the main server settings are typically stored in the following file:

```ini
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

In the ZAP-Hosting game server administration, you can usually access this file through the `Configs` section.

### What This File Is Used For

`PalWorldSettings.ini` contains the main `OptionSettings` line with server values such as:

- server name
- password
- admin password
- player limits
- gameplay multipliers
- PvP and raid settings

A typical structure looks similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="[your_server_name]",ServerDescription="[your_server_description]",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]")
```

:::caution Edit Syntax Carefully
Palworld uses a single `OptionSettings=(...)` structure for many settings. If you remove a comma, quotation mark, or bracket by mistake, your server may fail to start correctly.
:::

### When You Need to Edit It

You should only edit `PalWorldSettings.ini` when:

- you need to correct a wrong server password or admin password
- you want to remove invalid values after a failed manual change
- you are testing whether a startup problem is caused by a broken configuration entry

After saving changes to this file, you should restart the server so the new settings are applied.

## Troubleshoot Update Errors

One of the most common Palworld game server problems is a failed Steam update.

### Error: `app '2394010' state is 0x6 after update job`

This error usually indicates that the game files were not updated correctly through Steam.

### How to Fix the Error

1. Stop your Palworld server completely.
2. Open your game server administration in the ZAP-Hosting web interface.
3. Go to the area where reinstall or repair actions are available.
4. Start a reinstall or integrity verification of the server files.
5. Wait until the process finishes completely.
6. Start the server again.

:::info Why This Helps
A file verification or reinstall forces the server to re-download missing or damaged Palworld Steam files. This is the most reliable fix for the `0x6` update state error.
:::

### Do You Need to Edit a Config File?

No configuration change is normally required for this error.

| Issue | Config file required | Additional action |
| --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | No | Stop server, verify or reinstall files, then start server again |

## Troubleshoot Connection Timeouts

If players see `Connection timed out`, the cause is usually either a startup failure, a broken mod setup, or a connection method issue.

### Check Whether the Server Is Actually Running

First, confirm that the server has started successfully.

You can check this by:

- viewing the server status in the ZAP-Hosting web interface
- opening the console and looking for normal startup output
- checking whether the server responds to console commands if available

If the server shows very low activity and does not respond normally, it may have crashed during startup.

### Review Recent Configuration Changes

If you edited `PalWorldSettings.ini` shortly before the issue started, open the file again in `Configs` and check for:

- missing commas
- broken quotation marks
- duplicated values
- invalid IP or password values

Example entries to review:

```ini
ServerName="[your_server_name]"
ServerPassword="[your_server_password]"
AdminPassword="[your_admin_password]"
PublicPort=8211
PublicIP="[your_server_ip]"
```

If you are unsure whether the problem is caused by the configuration, revert the most recent changes and restart the server.

### Check for Mod or UE4SS Problems

If Palworld has just received an update and you use mods or `UE4SS`, the server may no longer be compatible.

In this case, you should:

1. Stop the server.
2. Create a backup if available in your product management.
3. Remove or update the installed mods.
4. Start the server again and test the connection.

:::caution Mod Compatibility After Updates
Palworld Steam update releases can break server-side modifications. If the problem started immediately after an update, mods are one of the first things you should check.
:::

### Use Direct IP Instead of Recent Servers

Palworld clients may fail to connect correctly through the in-game `Recent Servers` list.

Instead, connect directly using your server IP and port.

Use the following format:

```text
[your_server_ip]:8211
```

Replace `[your_server_ip]` with the actual IP address of your game server.

### Guild-Related World Issues

A timeout can also happen in some world-state situations, for example if a guild member leaves while other guild members are offline.

Possible fixes include:

- having the affected player rejoin the guild
- restarting the world
- restoring from a backup if the world remains unusable

:::danger World Data Risk
If you suspect world or save corruption, avoid repeated manual changes without a backup. Create or restore a backup before making destructive changes.
:::

## Troubleshoot Steam Connectivity Errors

Steam-related connectivity issues can prevent your Palworld server from updating or becoming reachable.

### Error: `Connecting anonymously to Steam Public...Retrying`

This message is commonly related to a temporary Steam service issue rather than a broken Palworld configuration.

### What You Should Do

- wait `5` to `10` minutes and try again
- check whether Steam is experiencing maintenance or an outage
- avoid repeated restarts during a temporary Steam outage

Steam maintenance often happens on Tuesdays, so short interruptions are possible.

### Automatic Updates During Steam Outages

If your server repeatedly tries to update during a Steam outage, it may remain unavailable until Steam responds normally again.

If your product includes an automatic update setting in the administration interface, you can temporarily disable it until the outage ends.

:::tip Temporary Steam Outage Handling
If the server was working before and suddenly shows Steam connection retries, it is often best to wait briefly instead of changing configuration files immediately.
:::

### Do You Need to Edit a Config File?

No configuration file change is normally required for this issue.

| Issue | Config file required | Additional action |
| --- | --- | --- |
| `Connecting anonymously to Steam Public...Retrying` | No | Wait, check Steam status, optionally disable automatic updates temporarily |

## Troubleshoot Version Mismatch Errors

If you see a message that the match is running an incompatible version of the game, the server version and client version do not match.

### How to Fix It

1. Restart the Palworld server.
2. Wait for the server to complete startup.
3. Update your local Palworld game client through Steam if required.
4. Try connecting again.

If the server still reports an incompatible version, the update may not have been applied correctly. In that case, repeat the file verification or reinstall process described earlier.

### Check Server Settings After an Update

A version mismatch is usually not caused by `PalWorldSettings.ini`, but if the server fails after updating, it is still worth confirming that the configuration file is valid and unchanged.

## Understand Normal Steam Startup Messages

Some startup messages look critical even though they are expected behavior.

### Message: `steamclient.so: cannot open shared object file: No such file or directory`

This message is commonly reported during startup and is generally harmless for Palworld dedicated servers in this context.

You do not usually need to edit any file or run any extra command for this message alone.

:::note Safe to Ignore in Most Cases
If the server otherwise starts normally and players can connect, this Steam library message can usually be ignored.
:::

## Configuration Reference

The table below summarizes the most relevant troubleshooting checks for Palworld.

| Problem | File to check | Path in server files | Manual changes required | Restart required |
| --- | --- | --- | --- | --- |
| Update error `0x6` | None normally | Not required | No | Yes |
| Connection timed out after config edit | `PalWorldSettings.ini` | `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini` | Yes, review `OptionSettings` values | Yes |
| Connection timed out after mod update | Mod files, not standard config | Varies | Remove or update incompatible mods | Yes |
| Steam retry loop | None normally | Not required | No | Sometimes, but waiting is recommended first |
| Incompatible game version | None normally | Not required | No | Yes |
| `steamclient.so` warning | None | Not required | No | No, if server works normally |

## Recommended Troubleshooting Order

If you are not sure where to begin, use this order:

1. Confirm the server is online.
2. Try connecting with direct IP instead of `Recent Servers`.
3. Check whether Palworld or Steam had a recent update.
4. Remove or update mods if you use them.
5. Review `PalWorldSettings.ini` in `Configs` for invalid syntax.
6. Restart the server.
7. Verify or reinstall the game files if update errors continue.

This approach helps you rule out the most common causes first without making unnecessary changes.

## Conclusion

Congratulations, you have successfully troubleshooted common Palworld server issues. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!