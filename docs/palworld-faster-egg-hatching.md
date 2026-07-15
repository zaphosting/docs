---
id: palworld-faster-egg-hatching
title: "Palworld: Faster Egg Hatching"
description: "Learn how to reduce egg hatching time in Palworld by editing the egg hatching Palworld server setting for faster hatching results. -> Learn more now"
sidebar_label: "Faster Egg Hatching"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In Palworld, egg hatching time is controlled through a server configuration value. In this guide, you will learn how to reduce egg hatching time on your ZAP-Hosting Palworld server by editing the correct config file and applying the change properly.



## Preparation

Before you begin, make sure that:

- you have access to your ZAP-Hosting game server web interface
- your Palworld server is available in the game server administration
- you are able to edit files under the **Configs** section

:::info Configuration File Access
For Palworld on ZAP-Hosting, the relevant server settings can be edited through the game server administration under **Configs**. For this task, you need to modify the `PalWorldSettings.ini` file.
:::

## Understanding the Egg Hatching Setting

Palworld uses the `PalEggDefaultHatchingTime` setting to define the base egg hatching time in hours. A lower value means eggs will hatch faster.

According to current Palworld server configuration references, the default value is `72`, which represents `72` hours for a Huge Egg. Other egg types also scale from this base value.

| Config key | Default value | Description |
| --- | --- | --- |
| `PalEggDefaultHatchingTime` | `72.000000` | Base egg hatching time in hours |

:::note How the Setting Works
This value affects the general egg hatching process on your server. If you reduce it, hatching becomes faster for all players using incubators.
:::

## Open the Palworld Configuration File

First, you need to access the correct configuration file in the ZAP-Hosting interface.

### Navigate to the Configs Section

Open your Palworld game server administration and go to the **Configs** section. There, locate and open the file named:

```ini
PalWorldSettings.ini
```

This is the file that contains the gameplay configuration entries for your Palworld server, including the egg hatching time setting.



## Edit the Egg Hatching Time

Once you have opened `PalWorldSettings.ini`, search for the `OptionSettings` line. Palworld stores many gameplay settings inside this section.

### Change the Required Config Key

Find the following entry:

```ini
PalEggDefaultHatchingTime=72.000000
```

Change the value to a lower number to make egg hatching faster.

For example:

```ini
PalEggDefaultHatchingTime=24.000000
```

This would reduce the base egg hatching time from `72` hours to `24` hours.

### Example Values

You can use different values depending on how fast you want hatching to be on your server.

| Value | Result |
| --- | --- |
| `72.000000` | Default egg hatching time |
| `48.000000` | Slower reduction, more balanced gameplay |
| `24.000000` | Much faster egg hatching |
| `12.000000` | Very fast egg hatching |
| `1.000000` | Extremely fast hatching |

:::caution Use Realistic Values
Very low values can significantly change gameplay balance. If you want a more natural progression, start with a moderate value such as `24.000000` or `48.000000`.
:::

### Example Configuration Snippet

Depending on your current configuration, the setting will appear inside the `OptionSettings` block. A typical example looks similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=24.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,BaseCampMaxNumInGuild=4)
```

:::tip Editing the Correct Entry
If the `PalEggDefaultHatchingTime` key already exists, edit the existing value instead of adding a duplicate entry. Duplicate values in the same `OptionSettings` block can cause settings to be ignored or overwritten.
:::

## Save and Apply the Changes

After editing the value, save the `PalWorldSettings.ini` file in the ZAP-Hosting interface.

### Restart the Server

Once the file has been saved, restart your Palworld server so the new egg hatching time is loaded.

:::info Restart Required
The updated configuration will not apply until the server has been restarted.
:::

## Important Behavior for Existing Eggs

If eggs are already incubating, the new hatching value does not reliably update for those active incubation timers. In practice, you should remove and restart the affected egg incubation process so the new rate is applied.

| Situation | Required action |
| --- | --- |
| New eggs placed after the change | No extra action needed after restart |
| Eggs already incubating before the change | Restart incubation for those eggs |

:::note Existing Incubation Timers
If you change the egg hatching time and do not see the expected result, check whether the egg was already incubating before the configuration change.
:::

## Conclusion

Congratulations, you have successfully reduced egg hatching time on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!