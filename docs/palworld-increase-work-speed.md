---
id: palworld-increase-work-speed
title: "Palworld: Increase Work Speed"
description: "Learn how to increase Palworld work speed by editing the WorkSpeedRate setting for faster player and Pal work on your server. -> Learn more now"
sidebar_label: Palworld: Increase Work Speed
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to adjust how quickly players and Pals complete base-related work by changing a server configuration value. In this guide, you will learn how to increase work speed on your ZAP-Hosting Palworld server by editing the correct config file and applying the changes properly.



## Preparation

Before you begin, make sure that you have access to your Palworld game server administration in the ZAP-Hosting web interface.

:::info Manual Configuration Required
This setup is performed manually through the configuration editor. You need to edit the Palworld server configuration file yourself under the `Configs` section of your game server administration.
:::

## Open the Palworld Configuration File

To change the work speed, you need to edit the `PalWorldSettings.ini` file.

### Where to find the file

1. Log in to the ZAP-Hosting website.
2. Open your **Palworld** game server administration.
3. Navigate to **Configs**.
4. Open the file named `PalWorldSettings.ini`.

This file contains the gameplay settings that control rates and multipliers for your Palworld server.

:::note Configuration File Location
In ZAP-Hosting, the relevant file for this change is available directly through your game server administration under `Configs`. If your server shows multiple configuration files, make sure that you edit `PalWorldSettings.ini`.
:::

## Change the Work Speed Setting

The setting used to increase work speed is `WorkSpeedRate`.

### What the setting does

`WorkSpeedRate` controls how quickly players and Pals perform work-related tasks at your base. The default value is typically `1.0`, which means normal speed.

Higher values increase the speed multiplier:

| Config key | Default value | Example value | Effect |
| --- | --- | --- | --- |
| `WorkSpeedRate` | `1.0` | `2.0` | Double work speed |
| `WorkSpeedRate` | `1.0` | `10.0` | Very fast work speed |

### Edit the value

Look for the `OptionSettings` line inside `PalWorldSettings.ini`. The `WorkSpeedRate` entry is stored inside that settings block.

If the entry already exists, change its value. For example:

```ini
WorkSpeedRate=1.000000
```

Change it to a higher value such as:

```ini
WorkSpeedRate=2.000000
```

For a much faster result, you can use a higher multiplier such as:

```ini
WorkSpeedRate=10.000000
```

### Example configuration snippet

Depending on your current file contents, the setting may appear as part of a longer `OptionSettings` line similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=2.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Edit the Existing Syntax Carefully
`PalWorldSettings.ini` uses a strict format. Make sure that you only change the value for `WorkSpeedRate` and do not remove commas, brackets, or quotation marks from the surrounding `OptionSettings` line.
:::

## Save and Restart the Server

After editing the file, you need to save the changes and restart your Palworld server.

### Apply the changes

1. Save the updated `PalWorldSettings.ini` file.
2. Restart your Palworld game server from the ZAP-Hosting server administration.

A restart is required because Palworld reads these gameplay settings when the server starts. The new work speed value will not apply correctly until the server has restarted.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Additional console command | No |

:::tip Recommended Testing
Start with a moderate value such as `2.0` and test the result in-game. Extremely high values may make progression much faster than intended, which can affect your overall gameplay balance.
:::

## Verify the New Work Speed

Once the server is back online, join your Palworld server and test work-related activities at your base.

You should notice that players and Pals complete tasks faster than before. If you do not see any change, re-open `PalWorldSettings.ini` and confirm that:

- `WorkSpeedRate` is present
- the value is set correctly
- the file was saved successfully
- the server was fully restarted after the edit

:::note Gameplay Balance
Increasing work speed can significantly change how quickly your base develops. If you want a balanced experience, increase the value gradually instead of setting an extremely high speed immediately.
:::

## Conclusion

Congratulations, you have successfully increased work speed on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!