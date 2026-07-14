---
id: palworld-troubleshooting
title: "Palworld: Troubleshooting"
description: "Fix common Palworld server issues, Palworld Steam update problems, and Steam connectivity errors on your game server. -> Learn more now"
sidebar_label: Palworld: Troubleshooting
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld dedicated servers can fail for several different reasons, including failed Steam updates, version mismatches, mod conflicts, and temporary Steam connectivity problems. In this guide, you will learn how to identify common Palworld server issues on ZAP-Hosting and apply the correct fix, including when you need to edit configuration files, verify files, or restart your server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin troubleshooting, make sure you have access to your Palworld game server administration and console in the ZAP-Hosting web interface.

You should also have the following ready:

| Requirement | Why it is needed |
| --- | --- |
| Access to your ZAP-Hosting game server panel | Required to stop, start, reinstall, and edit configuration files |
| Access to the server console | Useful for checking whether the server is responding |
| A recent backup | Recommended before changing files or removing mods |
| Direct server IP and port | Needed because the in-game Recent Servers list may not work reliably |

:::caution Create a Backup First
If you plan to remove mods, reinstall files, or reset parts of your Palworld server setup, you should create a backup first to avoid accidental data loss.
:::

## Accessing the Palworld Configuration Files

Some troubleshooting steps require manual changes to Palworld configuration files. On ZAP-Hosting, you can access these files through your game server administration under `Configs`.

For Palworld dedicated servers, the main server settings are typically stored in the following file:

```text
Pal/Saved/Config/LinuxServer/PalWorldSettings.ini
```

If your server runs on a different platform template, the exact folder naming may vary, but on hosted Linux-based Palworld servers the `LinuxServer` path is the standard location.

### Open the Config File in the ZAP Interface

To access the file:

1. Open your Palworld server in the ZAP-Hosting web interface.
2. Navigate to the `Configs` section.
3. Open `PalWorldSettings.ini`.
4. Review the `OptionSettings=(...)` line, which contains most gameplay and connection-related settings.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Main Configuration File
Most Palworld server options are stored in `PalWorldSettings.ini`, usually inside the `OptionSettings=(...)` section. If you need to adjust gameplay settings, passwords, player limits, or networking-related values, this is normally the file you will edit.
:::

### Save and Restart After Editing

After changing any configuration values:

1. Save the file in the `Configs` section.
2. Restart the Palworld server from the ZAP-Hosting interface.

Palworld does not reliably apply configuration changes live, so a restart is required after editing `PalWorldSettings.ini`.

## Fixing Failed Steam Update Jobs

A known update issue can appear with the following message:

```text
Error! app '2394010' state is 0x6 after update job
```

This usually indicates that the Palworld Steam server files were not updated correctly.

### Recommended Fix

To resolve this:

1. Stop your Palworld server.
2. Open the server management area in the ZAP-Hosting interface.
3. Use the reinstall or file verification function.
4. Select the option to verify integrity so the server files are checked and re-downloaded if needed.
5. Start the server again.

:::tip Verify Integrity for Corrupted Files
A file verification is usually the safest first step because it repairs missing or damaged Palworld game server files without requiring you to manually upload anything.
:::

### Do You Need to Edit a Config File?

No manual configuration file change is normally required for this specific error. The issue is usually related to damaged or incomplete game files rather than a wrong setting in `PalWorldSettings.ini`.

## Fixing "Connection Timed Out"

If you receive a `Connection timed out` error while joining your Palworld game server, several different causes are possible.

## Check Whether the Server Is Actually Running

First, confirm that the server has started correctly.

### Use the Console

Open the server console in the ZAP-Hosting interface and check for normal startup activity. If the console is available, try a simple command such as:

```text
info
```

If the server responds normally, it is likely running. If there is no useful response or the process repeatedly stops, the server may be crashing during startup.

### Check Resource Usage

If your CPU usage stays unusually low during startup and the server does not respond in the console, this can indicate that the Palworld server process has crashed or failed to initialize.

| Symptom | Likely cause | Recommended action |
| --- | --- | --- |
| No console response | Startup crash or hung process | Restart the server and review recent changes |
| Very low CPU usage during startup | Server not initializing correctly | Check mods, recent updates, and logs |
| Server starts but players time out | Connection method or version issue | Use direct IP and verify versions |

## Connect Using Direct IP Instead of Recent Servers

A common Palworld issue is that joining through the in-game `Recent Servers` tab may fail even when the server is online.

Use a direct connection instead:

1. Copy your server IP and port from the ZAP-Hosting interface.
2. In Palworld, connect directly using that address.
3. Avoid relying on the `Recent Servers` list for testing.

:::note Direct Connection Is More Reliable
If the Palworld Steam server browser or recent server list behaves inconsistently, direct IP connection is the best way to confirm whether your server is reachable.
:::

## Check for Mod or UE4SS Problems

If Palworld recently received an update and your server uses mods or `UE4SS`, the server may stop working until those modifications are updated.

### What to Check

Review whether you recently installed:

- gameplay mods
- custom server modifications
- `UE4SS`
- other third-party files that hook into the Palworld game server

If the issue started immediately after a Palworld Steam update, these files are a likely cause.

### Recommended Fix

1. Stop the server.
2. Create a backup.
3. Remove or disable recently added mods or `UE4SS`.
4. Start the server again.
5. Test the connection using direct IP.

:::caution Mod Compatibility After Updates
Palworld updates can break mods without warning. If your server worked before an update and stopped afterward, always test with mods removed before changing other settings.
:::

### Are Config Changes Required?

Usually not. Mod-related connection timeouts are generally caused by incompatible files rather than values inside `PalWorldSettings.ini`.

## Fixing Steam Connectivity Errors

You may see the following startup message:

```text
Connecting anonymously to Steam Public...Retrying
```

This is commonly related to temporary Steam connectivity problems rather than a broken Palworld configuration.

### What This Means

The Palworld dedicated server depends on Steam services for parts of the startup and update process. If Steam is having outages, heavy load, or scheduled maintenance, the server may temporarily fail to connect.

This is especially common during high-traffic periods or routine Steam maintenance, which often occurs on Tuesdays.

### Recommended Fix

Try the following:

1. Wait `5` to `10` minutes.
2. Restart the server.
3. Test again afterward.

If the problem happens during a broader Steam outage, you may need to wait until Steam services recover.

### Automatic Updates Consideration

If your server repeatedly runs into update-related startup problems during Steam outages, you can consider disabling automatic updates in your server settings until Steam becomes stable again.

:::tip Avoid Update Windows During Steam Maintenance
If possible, avoid forcing a Palworld Steam update during known Steam maintenance periods. This can reduce failed startup attempts and unnecessary troubleshooting.
:::

### Are Config Changes Required?

No. This issue is not normally fixed through `PalWorldSettings.ini` or another manual config file.

## Fixing "Incompatible Version of the Game"

If Palworld shows a message that the match is running an incompatible version of the game, your client version and server version do not match.

## Update the Server Version

Start by restarting the server from the ZAP-Hosting interface. In many cases, this allows the latest Palworld game server update to be applied.

If the version still does not match, use your normal server update workflow. If you need a dedicated update guide, follow the appropriate Palworld update documentation if available in ZAP-Docs.

### Confirm the Client Version

Make sure your local Palworld game installation is also fully updated through Steam.

| Component | What to check |
| --- | --- |
| Palworld server | Restarted and updated on ZAP-Hosting |
| Local Palworld game | Updated in Steam |
| Mods | Updated or removed if incompatible |

:::info Version Mismatches Affect Both Sides
This error does not always mean the server is outdated. Your local Palworld client can also be the older version, so always verify both before making deeper changes.
:::

### Are Config Changes Required?

No configuration file edits are normally required for a version mismatch.

## Understanding `steamclient.so` Startup Messages

During startup, you may see messages similar to:

```text
steamclient.so: cannot open shared object file: No such file or directory
```

In many Palworld hosting environments, these Steam-related messages appear even when the server starts normally.

### What You Should Do

If the server continues to start and becomes reachable, you can usually ignore this message.

### When It Becomes a Problem

Only investigate further if the server fails to start completely and this message appears together with additional fatal errors.

:::note Not Every Steam Error Line Is Critical
Startup logs often contain non-fatal warnings. Focus on whether the server finishes booting and accepts connections, not just whether a single warning appears in the console.
:::

## Troubleshooting World and Guild-Related Connection Problems

In some cases, players may experience connection issues related to world or guild state rather than the server process itself.

A reported example is when a guild member leaves while other guild-related player data is still tied to offline players. This can sometimes lead to join problems.

### Possible Fixes

Try the following in order:

1. Ask the affected player to rejoin the guild if possible.
2. Restart the Palworld server.
3. If the issue persists, restore a backup or investigate the affected save data carefully.

:::danger Save Data Changes Can Be Risky
If you suspect world or save corruption, avoid making random manual file changes unless you have a current backup. Incorrect edits can permanently damage your Palworld world data.
:::

## Configuration Values Worth Checking

While most issues in this guide are not caused directly by wrong settings, there are a few values in `PalWorldSettings.ini` that you may want to review if players cannot join as expected.

These values are typically found inside the `OptionSettings=(...)` section.

| Config key | Purpose | What to check |
| --- | --- | --- |
| `ServerName` | Public server name | Confirm it is set as intended |
| `ServerDescription` | Server description | Optional, but useful for identification |
| `AdminPassword` | Admin login password | Make sure it is set correctly if you use admin commands |
| `ServerPassword` | Join password | Remove or correct it if players cannot authenticate |
| `PublicPort` | Game connection port | Confirm it matches the port assigned to your service |
| `PublicIP` | Advertised public IP | Usually leave unchanged unless specifically required by your setup |
| `bIsMultiplay` | Multiplayer mode | Should remain enabled for normal dedicated server use |
| `bIsDedicated` | Dedicated server mode | Should remain enabled for hosted dedicated servers |

### Example Structure

The exact contents of your file may differ, but the relevant settings are typically stored in a line similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Palworld Server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="",bIsMultiplay=True,bIsDedicated=True)
```

Replace placeholders such as `[your_admin_password]` and `[your_server_password]` with your own values.

:::caution Do Not Change Unknown Values Randomly
Palworld stores many settings in a single `OptionSettings` line. If you remove commas, quotation marks, or brackets by mistake, the server may fail to read the configuration correctly.
:::

## Applying Configuration Changes Safely

If you do need to edit `PalWorldSettings.ini`, use this process:

1. Stop the server if you want to avoid conflicts while editing.
2. Open `Configs` in the ZAP-Hosting interface.
3. Edit `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`.
4. Save your changes.
5. Start or restart the server.
6. Test the server using a direct IP connection.

### No Additional Commands Required

For standard Palworld configuration changes, no extra in-console command is normally required after saving the file. A restart is the important final step.

## Quick Reference

| Issue | Config file edit needed | Restart required | Additional action |
| --- | --- | --- | --- |
| `app '2394010' state is 0x6 after update job` | No | Yes | Verify integrity or reinstall files |
| `Connection timed out` | Usually no | Often yes | Use direct IP, check mods, test console |
| `Connecting anonymously to Steam Public...Retrying` | No | Yes | Wait for Steam recovery |
| `Incompatible version of the game` | No | Yes | Update server and client |
| `steamclient.so` warning | No | No, if server starts normally | Usually safe to ignore |
| Join issues after guild changes | No | Yes | Rejoin guild or restore from backup if needed |

## Conclusion

Congratulations, you have successfully troubleshooted common Palworld server issues. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!