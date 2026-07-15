---
id: palworld-change-server-name
title: "Palworld: Change Server Name"
description: "Learn how to change your Palworld server name and update the server browser name shown to players by editing the correct configuration file manually. -> Learn more now"
sidebar_label: "Change Server Name"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld uses a configuration file to define the server name shown in the in-game server browser. In this guide, you will learn how to change the displayed server name manually in the ZAP-Hosting web interface and apply the change correctly.



## Preparation

Before you start, make sure you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit its configuration files.

:::info Manual Configuration Required
This change is performed by editing the Palworld server configuration manually. The relevant file can be accessed through your game server administration under `Configs`.
:::

## Open the Palworld Configuration File

To change the server name, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting web interface:

1. Open your **Palworld** game server.
2. Go to **Configs** in the server administration.
3. Open the file `PalWorldSettings.ini`.

:::note Configuration File Location
On Palworld dedicated servers, the relevant settings are typically stored in `PalWorldSettings.ini`. In the ZAP-Hosting interface, you should edit this file through the `Configs` section instead of changing file paths manually.
:::

## Edit the Server Name

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section. The server browser name is controlled by the `ServerName` entry.

You can also optionally set a server description with `ServerDescription`.

### Example Configuration

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(ServerName="zaphosting",ServerDescription="Your Palworld server description")
```

If your file already contains a longer `OptionSettings=(...)` line, you only need to change the existing values for `ServerName` and optionally `ServerDescription`.

### Values You Need to Change

| Config key | Description | Example value |
| --- | --- | --- |
| `ServerName` | The name shown in the Palworld server browser | `"zaphosting"` |
| `ServerDescription` | Optional description text shown with the server | `"Public survival server"` |

:::caution Keep Existing Settings Intact
`OptionSettings` often contains many other server settings in a single line. Only change the values for `ServerName` and `ServerDescription` unless you intentionally want to modify other options as well.
:::

## Save the Changes

After editing the values:

1. Save the `PalWorldSettings.ini` file in the **Configs** section.
2. Verify that the quotation marks and commas remain correctly formatted.

### Example of an Existing Line

If your file contains a line similar to the example below, update only the relevant text:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="Public survival server",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

## Restart the Server

After saving the configuration, you need to restart your Palworld server so the new name is loaded.

### Apply the New Configuration

Use the restart function in your ZAP-Hosting game server administration panel.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional console commands | No |

:::tip Server Browser Update Delay
After the restart, the updated server name may not appear instantly for all players in the server browser. If needed, wait a few minutes and refresh the server list.
:::

## Verify the New Server Name

Once the server has restarted:

1. Open Palworld.
2. Check the multiplayer server browser.
3. Search for the name you configured in `ServerName`.

If the old name still appears, reopen `PalWorldSettings.ini` and confirm that:
- the `ServerName` value was changed correctly
- the file was saved successfully
- the server was fully restarted after the change

## Conclusion

Congratulations, you have successfully changed your Palworld server name. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!