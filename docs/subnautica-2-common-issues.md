---
id: subnautica-2-common-issues
title: "Subnautica 2: Common issues"
description: "Discover common Subnautica 2 game server issues, connection problems, and performance fixes to keep your game online and stable -> Learn more now"
sidebar_label: "Subnautica 2: Common issues"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Subnautica 2 server issues can range from startup failures and crashes to lag, connection problems, and poor in-game performance. In this guide, you will learn how to identify common problems on your Subnautica 2 gameserver and apply practical solutions to get your game online and running smoothly again.

:::info Early Access Changes
If Subnautica 2 server software is still actively changing, some behaviors, configuration files, or available features may differ between versions. If you notice differences in your server, always compare them with the currently installed version in your ZAP-Hosting web interface.
:::

<InlineVoucher />

## Issues and solutions

Server issues are not always caused by a single fault. In many cases, the problem is related to outdated files, incorrect settings, insufficient resources, or temporary network conditions. The sections below help you troubleshoot the most common issues step by step.

### General issues

General issues usually affect basic server availability, visibility, or startup behavior. These are often the first checks you should perform before investigating more advanced causes.

<details>
  <summary>Server not visible in the game</summary>

If your Subnautica 2 server is not visible, the server may not have started correctly or may not have completed its initialization process. This can happen because of invalid configuration values, incomplete installation files, or startup errors.

Start by checking the following:

- Verify that the server is shown as running in your ZAP-Hosting web interface
- Review the server console for startup errors
- Check the log files for missing files or failed initialization steps
- Confirm that you are using the correct search filters in the in-game server browser
- Wait a few minutes after startup, as some servers need additional time before they appear publicly

If the server still does not appear, restart it once and monitor the console from the beginning of the startup process.

</details>

<details>
  <summary>Server does not start</summary>

If the server does not start at all, the cause is usually related to corrupted files, an incomplete update, or an invalid configuration.

You should check these points:

| Check | Why it matters |
| --- | --- |
| Server console output | Shows the exact startup error if one is available |
| Recent configuration changes | A single invalid value can prevent startup |
| Recent file uploads or modifications | Manually changed files may be incomplete or incompatible |
| Current game version | Mismatched server files can cause immediate startup failure |

If you recently changed configuration files, revert the last changes and try again. If the issue started after an update or manual file modification, restoring a backup can save time.

:::tip Use Backups Before Major Changes
Before editing important files or updating your server, create a backup so you can quickly roll back if a new issue appears.
:::

</details>

<details>
  <summary>Server password or access settings do not work as expected</summary>

If players cannot join even though the server appears online, review your access-related settings carefully. A wrong password, outdated saved client information, or a mismatch between public and private server settings can block access.

You should verify:

- The password entered by players matches the current server password exactly
- The server was restarted after changing access settings
- No old client-side saved connection data is being reused
- Any private or whitelist-style settings are configured as intended, if available for your current server version

If you are unsure whether the issue is caused by configuration, temporarily simplify the setup and test with minimal restrictions.

</details>

### Crash issues

Unexpected crashes interrupt gameplay and can also lead to data loss if they happen repeatedly. The most common reasons are outdated server files, incompatible modifications, or overloaded resources.

<details>
  <summary>Keeping your server up to date</summary>

Running the latest available Subnautica 2 server version is important for stability, compatibility, and security. Older versions may contain bugs that have already been fixed or may no longer work correctly with the current game client.

An outdated server can cause:

- startup failures
- random crashes
- version mismatch errors
- unstable gameplay behavior

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

If your server started crashing after a game update, first check whether a newer server version is available in your web interface. After updating, restart the server and test again.

</details>

<details>
  <summary>Faulty or incompatible mods and additional content</summary>

If Subnautica 2 supports mods or other additional server-side content in your current version, these can be a common source of crashes. Incompatible or outdated content may still load partially, but trigger errors later during gameplay.

Typical signs include:

- the server crashes after startup
- the server crashes when a player joins
- the server freezes during world loading
- errors appear after adding new content

To isolate the cause, use this process:

1. Stop the server
2. Remove or disable recently added content
3. Start the server with the smallest possible setup
4. Test stability
5. Re-enable content one item at a time

This method helps you identify exactly which file or package is causing the issue.

:::caution Version Compatibility
Only use mods, frameworks, or other extensions that are confirmed to be compatible with your current Subnautica 2 server version. Even one outdated component can cause repeated crashes.
:::

</details>

<details>
  <summary>Corrupted world or save data</summary>

If the server crashes while loading the world or shortly after players connect, the save data may be damaged. This can happen after forced shutdowns, interrupted writes, or repeated crashes.

Possible indicators include:

- the server crashes at the same loading stage every time
- a new world starts correctly, but the existing one does not
- the console reports save or world loading errors

If you suspect save corruption, test with a backup or a fresh world if available. If a fresh world starts without problems, the issue is likely related to the existing save data.

:::danger Risk of Data Loss
Do not delete your existing world files immediately. First create a backup copy so you can attempt recovery later if needed.
:::

</details>

### Performance issues

Performance problems usually appear as lag, delayed actions, slow world loading, or unstable gameplay. These issues are often caused by configuration choices, insufficient hardware resources, or heavy additional content.

<details>
  <summary>Bad server configuration</summary>

Incorrect configuration values can increase CPU, memory, or storage load and reduce overall server performance. If your Subnautica 2 server feels slow or unstable, review your settings carefully.

In particular, check whether:

- player-related limits are realistic for your package
- world-related settings are not more demanding than necessary
- experimental or non-default settings were changed recently
- the server was restarted after applying changes

You can usually manage your configuration in the **Settings** section or through the available files in **Configs** in your ZAP-Hosting web interface.

</details>

<details>
  <summary>Server package does not meet the project requirements</summary>

A server that is too small for your project can lead to stuttering, long loading times, and instability. This becomes more noticeable when you increase the player count, use additional content, or run a large and active world.

ZAP-Hosting provides recommended configurations during the ordering process to help you choose suitable resources for your game.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Use the following table as a general troubleshooting reference:

| Symptom | Possible cause | Recommended action |
| --- | --- | --- |
| Frequent lag spikes | CPU resources are too limited | Reduce load or upgrade your package |
| Slow loading times | Storage or memory bottleneck | Review usage and consider more resources |
| Crashes under player load | Insufficient overall capacity | Lower load or scale the server |
| Good performance when empty, poor performance when populated | Package too small for active usage | Upgrade based on expected player activity |

:::note Minimum Recommendations
Recommended package sizes are only a starting point. If your Subnautica 2 game server uses a larger world, more players, or additional content, you may need more resources from the beginning.
:::

</details>

<details>
  <summary>High resource usage from mods or additional content</summary>

Even if additional content does not crash the server, it can still create serious performance issues. Poorly optimized content may increase CPU usage, consume too much memory, or trigger repeated background processing.

A good troubleshooting method is to compare performance with and without the added content. If the server performs normally on a minimal setup, reintroduce content gradually until the problem returns.

This approach is especially useful when:

- lag started after installing new content
- the server becomes unstable over time
- performance drops only in certain areas or situations
- usage increases without obvious configuration changes

</details>

<details>
  <summary>Large world or long-running save causes slowdown</summary>

As a server world grows and more player activity accumulates, performance can decline. This is common on long-running servers with a large amount of saved world data.

If you notice that performance was good at the beginning but worsened later, consider the following:

- test whether a newer backup performs better
- review whether too many players are active at the same time
- remove unnecessary additional content
- check whether the issue appears in one specific world only

If a fresh test world performs significantly better, the slowdown may be related to world size or save complexity.

</details>

### Network issues

Network-related issues affect how players connect to and interact with your server. These problems can appear as high ping, rubberbanding, disconnects, or complete unreachability.

<details>
  <summary>Ping spikes, lag, and network delay</summary>

Ping spikes and network delay are often caused by a mix of server load and routing conditions. Even if the game itself is online, overloaded hardware or long geographic distance can still create a poor experience.

Common causes include:

- server location is far from the player base
- the server is under high CPU or memory load
- many players are connected at the same time
- background tasks or other processes are consuming resources
- temporary routing or packet loss issues occur between players and the server

To improve network quality, check the following:

| Check | Result |
| --- | --- |
| Choose a location close to your players | Lower average latency |
| Reduce unnecessary server load | Fewer lag spikes during gameplay |
| Keep the server updated | Better stability and compatibility |
| Test at different times | Helps identify temporary routing issues |

If the problem affects only one player, the issue may be on that player's connection. If all players are affected, the cause is more likely server-side or route-related.

</details>

<details>
  <summary>Players disconnect randomly</summary>

Random disconnects can be caused by unstable routing, overloaded server resources, or temporary software instability. If players are removed from the server without a clear in-game reason, compare the timing of the disconnects with console messages and performance spikes.

You should check:

- whether disconnects happen during peak load
- whether the server restarts or freezes briefly
- whether all players disconnect at once or only individual users
- whether the issue started after a recent update or configuration change

If all players disconnect at the same time, the issue is usually related to the server or network path. If only one player disconnects, the cause is often local to that player.

</details>

<details>
  <summary>DDoS attacks and other network threats</summary>

Game servers can occasionally be targeted by malicious traffic, including Distributed Denial of Service attacks. These attacks can cause lag, connection failures, or temporary downtime.

ZAP-Hosting provides DDoS protection for hosted services, which helps reduce the impact of common and advanced attack patterns. However, if you suspect your Subnautica 2 server is being targeted, you should contact support and provide as much detail as possible, such as:

- when the issue started
- whether all players are affected
- whether the server becomes unreachable completely
- whether the issue repeats at specific times

:::info Built-In Protection
DDoS mitigation is handled on the infrastructure side. If you suspect malicious traffic, you do not usually need to change game server settings first. Instead, gather symptoms and contact support.
:::

</details>

### Gameplay-related server issues

Some problems are not direct crashes or network failures, but still affect whether the game works correctly for players.

<details>
  <summary>Version mismatch between client and server</summary>

If players cannot join after a game update, the server and game client may be running different versions. This is especially common shortly after patches.

To resolve this:

1. Confirm that the server has been updated
2. Restart the server after the update
3. Make sure players have updated their game client
4. Test the connection again

If only some players can join, compare their game version with the server version first.

</details>

<details>
  <summary>Changes do not apply after editing settings</summary>

If you changed configuration values but nothing seems different in-game, the server may still be using cached or unchanged runtime data, or the edited file may not be the active one.

Review the following:

- the correct file was edited
- the values were saved successfully
- the server was fully restarted afterward
- the changed setting is supported by your installed version

If the exact configuration behavior is unclear for your current Subnautica 2 version, avoid guessing and test changes one at a time so you can clearly identify what applies.

</details>

## Preventive measures

Preventing issues is usually easier than fixing them after they affect your players. A few regular maintenance steps can significantly improve stability.

### Recommended maintenance checklist

Use the following checklist to reduce the chance of future issues:

| Task | Why you should do it |
| --- | --- |
| Create regular backups | Protects your world and configuration from data loss |
| Update the server carefully | Reduces bugs and version mismatch problems |
| Test changes one at a time | Makes troubleshooting easier if something breaks |
| Monitor performance after changes | Helps identify rising CPU or memory usage early |
| Keep only necessary content installed | Reduces compatibility and performance risks |

### Use backups regularly

Regular backups can save a lot of time and prevent permanent data loss. If a configuration change, update, or world issue causes problems, you can restore a known working state instead of rebuilding everything manually.

You can use the available [backup solution](gameserver-backups.md) to create manual or scheduled backups for your game server.

:::tip Backup Before Risky Changes
Create a backup before updating the server, editing important files, or adding new mods and content. This gives you a safe rollback point if new issues appear.
:::

<InlineVoucher />

## Conclusion

Congratulations, you have successfully troubleshot common issues on your Subnautica 2 gameserver. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!