---
id: palworld-performance-guide
title: "Palworld: Performance Guide"
description: "Improve Palworld server performance, reduce performance drops, and decrease server load with manual configuration changes. -> Learn more now"
sidebar_label: "Performance Guide"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld server performance can decrease over time, especially on active servers with many bases, workers, dropped items, and wild Pals. In this guide, you will learn how to optimize the `PalWorldSettings.ini` file in the ZAP-Hosting web interface to reduce server load and improve overall performance.

## Preparation

Before you begin, you need access to your Palworld game server administration and permission to edit configuration files.

:::info Required Access
You need access to your Palworld server in the ZAP-Hosting game server administration panel. The required configuration file is available under `Configs`.
:::

:::caution Create a Backup First
Performance tuning can change gameplay behavior significantly. Before editing your configuration, it is recommended to create a backup so you can restore your previous settings if needed.
:::

## Open the Palworld Configuration File

To optimize your server, you need to edit the main Palworld server configuration file.

1. Log in to your ZAP-Hosting web interface.
2. Open your **Palworld** game server administration.
3. Navigate to **Configs**.
4. Open the file `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Where to Make Changes
The performance-related settings are stored in `PalWorldSettings.ini`. You need to edit the existing option values manually in this file.
:::

## Understand the Relevant Settings

Several Palworld settings directly affect server performance. Some values reduce CPU, memory, and world simulation load, while others help limit buildup from inactive players or excessive world entities.

### Main Performance Settings

The following settings are the most relevant if you want to reduce performance drops on a busy server.

| Setting | Default | Recommended Change | Effect |
|---|---:|---|---|
| `BuildObjectDeteriorationDamageRate` | `1.0` | Keep at `0.1` or higher | Higher deterioration helps remove abandoned structures faster |
| `bAutoResetGuildNoOnlinePlayers` | `False` | Set to `True` if appropriate | Removes inactive guild bases after the configured grace period |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Adjust as needed | Defines the inactivity time in hours before guild reset |
| `PalSpawnNumRate` | `1.0` | Decrease | Spawns fewer wild Pals and reduces simulation load |
| `DropItemMaxNum` | `3000` | Decrease | Limits dropped items in the world |
| `DropItemAliveMaxHours` | `1.0` | Decrease | Removes dropped items faster |
| `BaseCampMaxNumInGuild` | `4` | Decrease | Reduces the number of guild bases |
| `ServerReplicatePawnCullDistance` | `15000.0` | Decrease | Lowers Pal synchronization distance and reduces network/server load |
| `BaseCampWorkerMaxNum` | `15` | Decrease | Limits worker Pals per base |
| `MaxBuildingLimitNum` | `0` | Set a value | Limits total buildings per player |
| `bEnableInvaderEnemy` | `True` | Set to `False` | Disables raid-style invader enemies and reduces load |
| `bEnableFastTravel` | `True` | Set to `False` if needed | Can reduce freezes caused by fast travel events |
| `bIsPvP` | `False` | Keep `False` unless required | PvP can increase server load in active environments |

### Secondary Performance Settings

These settings can also help, especially on larger public servers.

| Setting | Default | Recommended Change | Effect |
|---|---:|---|---|
| `BaseCampMaxNum` | `128` | Decrease | Lowers the total number of bases allowed on the server |
| `AutoSaveSpan` | `240` | Increase | Reduces how often the server performs automatic saves |

:::tip Choose Conservative Changes First
It is best to change only a few values at a time, then test server behavior. This makes it easier to identify which setting improved performance and which setting affected gameplay too much.
:::

## Edit the Configuration

Palworld stores server options in the `OptionSettings` section inside `PalWorldSettings.ini`. You need to adjust the relevant entries manually.

### Example Optimized Configuration

The following example shows a conservative performance-focused configuration. Replace only the values you actually want to use for your server.

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=0.800000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=False,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=2000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=64,BaseCampWorkerMaxNum=10,DropItemAliveMaxHours=0.500000,bAutoResetGuildNoOnlinePlayers=True,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=False,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,ServerReplicatePawnCullDistance=10000.000000,bEnableGuildPlayerSelect=False,BanListURL="https://api.palworldgame.com/api/banlist.txt",bAutoResetGuildNoOnlinePlayers=True,BaseCampMaxNumInGuild=3)
```

:::caution Verify Existing Entries
Palworld configuration formats can change between updates. Before saving, make sure you are editing the existing `OptionSettings` line already present in your file instead of creating duplicate or conflicting entries.
:::

### Recommended Value Adjustments

If you do not want to replace the full line, you can edit only the relevant values in your existing configuration.

| Entry | Example Value | Why to Change It |
|---|---:|---|
| `PalSpawnNumRate` | `0.8` | Reduces wild Pal spawns |
| `DropItemMaxNum` | `2000` | Decreases item clutter |
| `DropItemAliveMaxHours` | `0.5` | Removes dropped items faster |
| `BaseCampMaxNum` | `64` | Reduces total base count |
| `BaseCampMaxNumInGuild` | `3` | Limits guild base expansion |
| `BaseCampWorkerMaxNum` | `10` | Reduces AI worker load |
| `ServerReplicatePawnCullDistance` | `10000.0` | Decreases replication distance |
| `bEnableInvaderEnemy` | `False` | Disables raid-related load |
| `bEnableFastTravel` | `False` | Avoids fast travel related freezes |
| `bAutoResetGuildNoOnlinePlayers` | `True` | Cleans up inactive guild bases |
| `AutoResetGuildTimeNoOnlinePlayers` | `72.0` | Sets inactivity grace period |
| `MaxBuildingLimitNum` | `[your_limit]` | Restricts excessive building |
| `bIsPvP` | `False` | Prevents additional PvP overhead |
| `AutoSaveSpan` | `[your_value]` | Reduces save frequency if supported in your current config format |

:::danger Inactive Guild Reset Deletes Bases
If you enable `bAutoResetGuildNoOnlinePlayers=True`, inactive guilds can be disbanded automatically after the time set in `AutoResetGuildTimeNoOnlinePlayers`. This can permanently delete bases and structures belonging to inactive players.
:::

## Save and Apply the Changes

After editing the file, you need to save the configuration and restart the server so the new settings are loaded.

1. Save the changes in `PalWorldSettings.ini`.
2. Return to your game server administration.
3. Restart the Palworld server.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info Restart Required
A restart is required after changing `PalWorldSettings.ini`. Without a restart, the server will continue using the previous settings.
:::

## Best Practices for Long-Term Performance

Manual configuration changes help, but they are only part of overall server optimization.

### Use Automatic Daily Restarts

A daily restart is a common best practice for Palworld servers because resource usage can build up over time.

- Create an automatic restart schedule in your ZAP-Hosting server administration
- Choose a time with low player activity
- Inform your players in advance if your community is active

### Limit World Growth

The biggest cause of performance decrease on long-running Palworld servers is usually world complexity.

To reduce this:

- lower base limits
- lower worker counts
- reduce dropped item accumulation
- reduce wild Pal spawns
- clean up inactive guilds carefully
- consider setting a building limit with `MaxBuildingLimitNum`

### Test Changes Gradually

Do not apply extreme reductions immediately unless your server is already unstable.

A good process is:

1. Lower spawn and item values first
2. Reduce base and worker limits next
3. Disable optional high-load features if needed
4. Restart and monitor performance after each round of changes

:::tip Balance Performance and Gameplay
The best settings depend on your server type. A small private server can usually keep higher values, while a large public community server often needs stricter limits to prevent performance drops.
:::

## Conclusion

Congratulations, you have successfully optimized your Palworld server performance. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!