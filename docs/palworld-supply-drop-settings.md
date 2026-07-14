---
id: palworld-supply-drop-settings
title: "Palworld: Supply Drop Settings"
description: "Learn how to change Palworld supply drop frequency on your Palworld game server by editing the SupplyDropSpan setting manually. -> Learn more now"
sidebar_label: Palworld: Supply Drop Settings
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld includes supply drops that appear at regular intervals and can contain useful resources. In this guide, you will learn how to manually change the supply drop frequency on your ZAP-Hosting Palworld game server by editing the correct configuration file and applying the changes properly.

## Preparation

Before you begin, make sure you have access to your Palworld game server through the ZAP-Hosting web interface and that the server is currently available in your game server administration.

:::info Manual Configuration Required
This setup is performed by manually editing the Palworld server configuration. You will need to open the configuration file through the **Configs** section in your game server administration.
:::

## Locate the Configuration File

To change the supply drop interval, you need to edit the `PalWorldSettings.ini` file.

In your ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Go to **Configs**.
3. Open the file `PalWorldSettings.ini`.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::note Configuration File Location
On ZAP-Hosting, the relevant Palworld settings for gameplay are typically managed through the `PalWorldSettings.ini` file in the **Configs** area of your server administration. If your interface layout differs slightly, use the available config file list and look specifically for `PalWorldSettings.ini`.
:::

## Edit the Supply Drop Setting

The setting used for supply drop frequency is `SupplyDropSpan`.

This value defines the interval between supply drops in **minutes**.

### Find the Correct Section

In `PalWorldSettings.ini`, Palworld server settings are usually stored inside the `OptionSettings` line. You need to locate the existing settings block and check whether `SupplyDropSpan` is already present.

If it already exists, change its value.

If it does not exist, add it inside the `OptionSettings=(...)` section together with the other comma-separated settings.

### Configuration Entry

Use the following format:

```ini
SupplyDropSpan=[your_value]
```

Replace `[your_value]` with the number of minutes you want to use.

### Example Values

| Setting | Meaning |
| --- | --- |
| `SupplyDropSpan=180` | Default interval of 3 hours |
| `SupplyDropSpan=60` | Supply drops every 1 hour |
| `SupplyDropSpan=360` | Supply drops every 6 hours |
| `SupplyDropSpan=30` | Very frequent supply drops |

Here is an example of how the setting may appear inside the full `OptionSettings` block:

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt",SupplyDropSpan=60)
```

:::caution Keep Existing Syntax Intact
Do not remove commas, brackets, or other existing values in the `OptionSettings` line. A formatting mistake in this line can prevent the server from loading the configuration correctly.
:::

## Save and Apply the Changes

After editing the value:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server from the ZAP-Hosting game server administration.

A restart is required because Palworld does not apply this gameplay setting live while the server is already running.

### Is an Additional Command Required?

No additional in-game or console command is normally required for this specific change. Restarting the server is the required step to load the updated `SupplyDropSpan` value.

| Action | Required |
| --- | --- |
| Edit `PalWorldSettings.ini` | Yes |
| Add or change `SupplyDropSpan` | Yes |
| Run extra console command | No |
| Restart server after saving | Yes |

## Verify the Setting

Once the server has restarted, the new supply drop interval should be active.

Because this setting controls timed world events, you may need to wait for the next spawn cycle before you can fully confirm the change in-game. If you set a shorter interval such as `60` or `30`, verification will be easier.

:::tip Testing Changes Faster
If you want to confirm that the setting works without waiting several hours, temporarily set `SupplyDropSpan=30`. After testing, you can change it again to your preferred long-term value.
:::

## Troubleshooting

### Setting Does Not Apply

If the supply drop frequency does not seem to change, check the following:

- Make sure `SupplyDropSpan` is written exactly as shown
- Confirm the value is inside the `OptionSettings=(...)` section
- Verify there are no broken commas or missing brackets
- Restart the server after saving the file

### Server Has Configuration Errors

If the server fails to start after editing the file, restore the previous configuration and review the syntax carefully.

:::danger Incorrect INI Formatting
Palworld stores many gameplay settings in a single `OptionSettings` line. Even one misplaced character can break the config. Always review your changes carefully before saving.
:::

## Conclusion

Congratulations, you have successfully changed the Palworld supply drop settings. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!