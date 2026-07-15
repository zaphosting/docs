---
id: palworld-max-players
title: "Palworld: Max Players"
description: "Learn how to change the Palworld max players setting on your Palworld game server by editing the correct config file in the ZAP interface. -> Learn more now"
sidebar_label: "Max Players"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how many players can join your server at the same time. In this guide, you will learn how to manually change the maximum player count by editing the correct configuration file in your ZAP-Hosting game server administration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server administration in the ZAP-Hosting web interface.

:::info Configuration File Access
You need to edit the server configuration manually through the **Configs** area of your game server administration. If you do not yet know how to access your game server, first open it from the ZAP-Hosting web interface.
:::

## Locate the Palworld Configuration File

To change the maximum number of players, you need to edit the `PalWorldSettings.ini` file.

In your ZAP-Hosting game server administration:

1. Open your **Palworld** server
2. Go to **Configs**
3. Open the file named `PalWorldSettings.ini`

This file contains the main gameplay and server settings, including the maximum number of allowed players.

:::note Correct File
For this change, you should edit `PalWorldSettings.ini` only. If your server contains additional files, do not change unrelated values unless you know exactly what they do.
:::

## Change the Maximum Player Count

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section and find the `ServerPlayerMaxNum` entry.

The relevant setting is:

| Config key | Description | Default value |
| --- | --- | --- |
| `ServerPlayerMaxNum` | Sets the maximum number of players that can join the server | `32` |

A typical entry looks similar to this:

```ini
ServerPlayerMaxNum=32
```

Change the value to your preferred player limit. For example, to allow 16 players:

```ini
ServerPlayerMaxNum=16
```

Or to keep the default 32-player setup:

```ini
ServerPlayerMaxNum=32
```

:::caution Use Supported Values
Palworld dedicated servers commonly use `32` as the default maximum. If you set a much higher value, this may affect server stability or performance depending on your plan and the current game version. If you are unsure, start with a lower value and test your server first.
:::

## Example Configuration

Depending on how your file is formatted, the setting may appear inside a longer `OptionSettings` line. In that case, you only need to change the value of `ServerPlayerMaxNum`.

Example:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=True,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=16,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

If your file uses this format, do not remove commas, brackets, or quotation marks from other entries. Only replace the number after `ServerPlayerMaxNum=`.

## Save and Apply the Changes

After changing the value:

1. Save the `PalWorldSettings.ini` file
2. Restart your Palworld server

A restart is required before the new maximum player count is applied.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Run additional console commands | No verified additional command required |
| Restart the server | Yes |

:::tip Restart Required
Configuration changes to `ServerPlayerMaxNum` are not applied immediately while the server is running. You need to restart the server so Palworld loads the updated settings.
:::

## Verify the New Player Limit

After the restart, your server should use the new maximum player count.

You can verify this by:

- checking the server details in your game server administration if shown there
- joining the server with multiple players
- reviewing the current configuration again in `PalWorldSettings.ini`

If the setting does not apply, open the file again and confirm that:

- `ServerPlayerMaxNum=[your_value]` is present
- the file formatting was not broken
- the server was fully restarted after saving

:::caution Configuration Syntax
If you accidentally remove a comma, bracket, or another value from the `OptionSettings` line, the server may ignore the setting or fail to load the configuration correctly. Edit the file carefully and change only the required value.
:::

## Conclusion

Congratulations, you have successfully changed the maximum number of players on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!