---
id: windrose-troubleshooting-common-issues
title: "Windrose: Common issues"
description: "Discover common Windrose game server issues, performance problems, and network troubleshooting steps to keep your game online and stable -> Learn more now"
sidebar_label: Common issues
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Running your own Windrose server can be a great way to build a custom multiplayer game experience, but issues can still occur during setup and daily operation. In this guide, you will learn how to identify and resolve common Windrose server issues related to visibility, crashes, performance, and network stability.

:::info Troubleshooting Scope
The exact causes of server issues can vary depending on your configuration, server load, installed content, and the current Windrose server version. If a specific setting, file, or feature is not clearly documented by the game, you should always verify it directly in your server logs and web interface instead of relying on assumptions.
:::

<InlineVoucher />

## Issues and solutions

Many common issues follow the same pattern: first identify the symptom, then check logs, configuration, and recent changes. This helps you solve problems faster and reduces unnecessary downtime for your game online environment.

### General issues

General issues usually affect the basic availability or behavior of your server. These problems are often caused by incomplete setup, invalid configuration values, or damaged files.

#### Server not visible

If your Windrose server is not visible in the server browser or cannot be found by players, you should first check whether the server started successfully. A failed startup, broken configuration, or corrupted files can prevent the server from registering correctly.

Use the following checklist:

| Check | Why it matters |
| --- | --- |
| Review the server console | Startup errors are usually shown there first |
| Review log files | Logs often contain more detailed error messages |
| Verify recent configuration changes | Invalid values can prevent proper initialization |
| Check server list filters | Incorrect filters may hide the server |
| Confirm the server is fully started | A server may be online in the panel but not ready for players yet |

:::tip Start With Recent Changes
If the server was visible before and suddenly disappeared, first review the most recent changes such as updated files, modified settings, or newly added content. This is often the fastest way to identify the cause.
:::

#### Server does not start properly

If the server remains offline, restarts repeatedly, or stops during startup, the problem is usually related to configuration errors, missing files, or incompatible content.

You should check the following areas:

- the server console for immediate startup errors
- log files for detailed exception messages
- recently added mods, plugins, resources, or frameworks
- any manually edited configuration files
- whether the installed server version matches your intended setup

:::caution Avoid Random File Changes
Do not remove or edit multiple files at once without documentation. If you change too many things in one attempt, it becomes much harder to identify the actual cause of the issue.
:::

### Crash issues

Unexpected crashes are among the most common server issues. They can be caused by outdated software, broken extensions, incompatible files, or resource exhaustion.

#### Keep your server up to date

Running the latest available Windrose server version is important for stability, compatibility, and security. Outdated server software may contain bugs that have already been fixed, and it may no longer work correctly with newer client versions or extensions.

If your server crashes after a game update, version mismatch is one of the first things you should investigate.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

Use this quick reference when reviewing update-related issues:

| Situation | Recommended action |
| --- | --- |
| Game client updated recently | Check whether the server also needs an update |
| Server crashes after update | Review logs for version or compatibility errors |
| Mods or plugins stop working | Verify compatibility with the current server version |
| Players cannot join after update | Check for protocol or content mismatch |

:::note Version Compatibility
If Windrose is still receiving active updates, server behavior, configuration structure, and supported extensions may change over time. If exact compatibility details are not available, you should verify them with the extension developer or official project source.
:::

#### Faulty or incompatible extensions

If you use additional frameworks, plugins, mods, or resources, one of them may be responsible for crashes. This is especially common after updates or when combining multiple third-party components.

A faulty extension can cause:

- startup failures
- random crashes during gameplay
- freezes under load
- memory leaks
- errors when players join or use specific features

To isolate the issue, use a structured approach:

1. Stop the server.
2. Disable newly added or recently updated extensions.
3. Start the server again and test stability.
4. Re-enable content one item at a time.
5. Test after each change until the issue returns.

This process helps you identify the exact component causing problems instead of guessing.

:::tip Test With a Minimal Setup
If you are troubleshooting severe crash issues, temporarily run the server with only the core files required for Windrose. Once the server is stable, add your extra content back gradually.
:::

### Performance issues

Performance issues can affect the entire game experience. Lag, delayed actions, low responsiveness, or stuttering often indicate that the server is overloaded or not configured efficiently.

#### Review your server configuration

Poorly optimized settings can increase CPU, memory, disk, or network usage. Even if the server starts normally, bad configuration values may create serious performance issues during gameplay.

You should review:

- player-related limits
- world or map settings
- AI or entity-heavy features
- autosave frequency
- logging verbosity if configurable
- extension-specific settings

If available for your Windrose server, you can usually manage settings through the **Settings** section or directly through configuration files in **Configs** within the ZAP-Hosting web interface.

| Area | Possible impact |
| --- | --- |
| High player limits | Increased CPU and RAM usage |
| Aggressive save intervals | More disk activity and possible lag spikes |
| Heavy AI or world simulation | Higher CPU load |
| Verbose logging | Extra disk writes and overhead |
| Poor extension settings | Unnecessary resource consumption |

:::info Configuration Accuracy
If a specific Windrose configuration key is not officially documented, do not guess its function. Incorrect values may cause startup failures or unstable behavior.
:::

#### Check whether your server meets the requirements

Your selected server package must match the scale of your project. A lightly used private game server has very different requirements than a public server with many players and additional content.

Important factors include:

- expected concurrent player count
- installed mods or plugins
- world size and activity
- frequency of automated tasks
- overall gameplay complexity

ZAP-Hosting provides recommended minimum configurations during the ordering process. These recommendations are useful as a baseline, but your actual needs may be higher depending on your project.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

If your server regularly reaches its limits, upgrading your package can improve stability and reduce lag.

#### Unoptimized extensions

Even if an extension is technically functional, it may still be poorly optimized. This can cause high resource usage without obvious errors in the console.

Common signs include:

- CPU usage rising sharply when certain features are used
- memory usage increasing over time
- lag appearing only after players trigger specific content
- server responsiveness dropping after adding a new mod or plugin

To investigate, compare server behavior before and after disabling suspicious extensions. If performance improves significantly, the extension is likely contributing to the problem.

:::caution Performance Problems Are Not Always Core Server Issues
A stable base server can still perform badly if third-party content is inefficient. Always include extensions in your troubleshooting process.
:::

### Network issues

Network-related problems can lead to lag, connection drops, or unstable gameplay. These issues may be caused by routing, packet loss, player distance, or external attacks.

#### Ping spikes, lag, and delay

High latency and unstable response times are often caused by one or more of the following:

| Cause | Effect |
| --- | --- |
| Server location far from players | Higher ping |
| Insufficient CPU or RAM | Delayed processing that feels like lag |
| Too many players or heavy scripts | Increased load and slower response |
| Packet loss or unstable routing | Rubberbanding and connection issues |
| Background tasks or overload | Temporary lag spikes |

You can reduce these issues by following these best practices:

- choose a server location close to your player base
- make sure your package has enough resources
- reduce unnecessary extensions or scripts
- review server load during peak times
- test whether issues happen constantly or only under high activity

:::tip Choose the Right Server Location
A nearby hosting location can significantly improve the game online experience for your players by reducing latency and improving route quality.
:::

If you suspect routing problems or unusual network behavior outside your own configuration, contact support with as much detail as possible, including timestamps and affected regions.

#### DDoS and other network threats

Public game servers can become targets of malicious traffic such as *Distributed Denial of Service* attacks. These attacks can cause severe lag, connection failures, or complete temporary downtime.

ZAP-Hosting provides DDoS protection for hosted services, which helps mitigate many common attack patterns. However, if you notice sudden unexplained connection loss, unusual traffic behavior, or repeated disruption affecting many players, you should report it to support.

:::danger Suspected Active Attack
If you believe your server is currently affected by a DDoS attack or another serious network threat, avoid making unnecessary configuration changes during the incident. Collect timestamps, symptoms, and affected regions first so support can investigate more effectively.
:::

## Preventive measures

Preventive maintenance helps reduce future issues and makes recovery easier if something goes wrong.

### Create regular backups

Backups are one of the most important protections for any server. If an update, broken extension, or accidental change damages your setup, a backup allows you to restore a working state much faster.

ZAP-Hosting offers a [backup solution](gameserver-backups.md) that you can use for manual or scheduled backups, depending on your workflow.

Recommended backup strategy:

| Backup type | When to use it |
| --- | --- |
| Manual backup | Before updates or major changes |
| Scheduled backup | For regular ongoing protection |
| Pre-extension backup | Before installing mods, plugins, or frameworks |
| Recovery backup copy | Before attempting deeper troubleshooting |

### Document your changes

Keeping a simple change log can save a lot of time when troubleshooting recurring issues. Record changes such as:

- installed or removed extensions
- updated server versions
- modified configuration files
- changes to player limits or performance settings

This makes it much easier to connect a new issue with a recent action.

### Test changes gradually

Avoid applying many changes at once. If you install multiple extensions, change several settings, and update the server at the same time, it becomes difficult to know which change caused the issue.

:::tip Safer Change Management
Apply one major change at a time, then test the server before continuing. This is one of the most effective ways to prevent hard-to-trace issues.
:::

## When to contact support

If you have already checked logs, reverted recent changes, and tested a minimal setup but the issue remains, it may be time to contact support.

Before opening a request, prepare the following information if available:

| Information | Why it helps |
| --- | --- |
| Approximate time the issue started | Helps correlate logs and events |
| Exact symptoms | Makes diagnosis faster |
| Recent changes | Identifies likely causes |
| Error messages from console or logs | Provides technical evidence |
| Affected players or regions | Useful for network-related issues |

Providing clear details helps reduce troubleshooting time and improves the chance of resolving the issue quickly.

## Conclusion

You now know how to troubleshoot common Windrose server issues involving visibility, crashes, performance, backups, and network stability. If the problem continues after these checks, collecting logs and recent change details will help you or support narrow it down faster.

Congratulations, you have successfully troubleshot common Windrose server issues. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!