---
id: palworld-max-workers
title: "Palworld: Max Workers"
description: "Learn how to change the Palworld max workers setting by editing BaseCampWorkerMaxNum, including the default max and safe vanilla limits for workers per base. -> Learn more now"
sidebar_label: "Max Workers"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to change the maximum number of working Pals assigned to each base camp on your server. In this guide, you will learn how to edit the correct configuration file in the ZAP-Hosting web interface, adjust the `BaseCampWorkerMaxNum` value, and apply the change correctly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server through the ZAP-Hosting game server administration panel.

:::info Configuration Access Requirement
You need access to your server's web administration so you can open the **Configs** section and edit the Palworld configuration files manually.
:::

## Understanding the Max Workers Setting

The Palworld setting responsible for the max workers value is `BaseCampWorkerMaxNum`. This option controls how many Pals can work at each individual base camp.

| Setting | Configuration file | Purpose | Default value | Vanilla maximum |
| --- | --- | --- | --- | --- |
| `BaseCampWorkerMaxNum` | `PalWorldSettings.ini` | Sets the maximum number of worker Pals per base camp | `15` | `50` |

:::note Vanilla Limit Information
Current public documentation indicates that the normal in-game maximum is `50`. Values above `50` generally require modding and are not part of the standard vanilla server configuration.
:::

:::caution Performance Impact
Increasing the number of workers can raise CPU and memory usage because more Pals will be active at your bases. If you use a high value, monitor your server performance after the change.
:::

## Open the Palworld Configuration File

To change the max workers setting, you need to edit the `PalWorldSettings.ini` file.

### Find the file in the ZAP-Hosting interface

Open your Palworld game server administration and navigate to:

- `Configs`
- `PalWorldSettings.ini`

This is the configuration file where the gameplay settings for your Palworld server are stored.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Edit the BaseCampWorkerMaxNum Value

Once you have opened `PalWorldSettings.ini`, look for the `OptionSettings` line. Palworld server settings are typically stored as comma-separated key-value pairs inside this section.

### Change the configuration entry

Find the following key:

```ini
BaseCampWorkerMaxNum=15
```

Change the value to your preferred amount. For example, to allow `20` worker Pals per base, use:

```ini
BaseCampWorkerMaxNum=20
```

### Example configuration

Depending on your current file, the setting will usually appear inside a longer `OptionSettings` entry similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=20,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,bCanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,bInvisibleOtherGuildBaseCampAreaFX=False,bBuildAreaLimit=False,ItemWeightRate=1.000000,bHardcore=False,bPalLost=False,bRawData=False)
```

:::tip Edit Only the Required Value
Only change `BaseCampWorkerMaxNum` unless you intentionally want to adjust other gameplay settings. This helps avoid accidental configuration mistakes.
:::

## Recommended Values

You can choose any value that fits your gameplay style, as long as it remains within supported vanilla limits.

| Value | Result | Recommendation |
| --- | --- | --- |
| `15` | Default Palworld worker limit | Best for standard gameplay |
| `20` to `30` | Increased base automation | Good balance for most private servers |
| `40` to `50` | Very high worker count | Use only if your server has enough resources |
| Above `50` | Not standard vanilla behavior | Usually requires mods and is not recommended without testing |

## Save and Apply the Changes

After editing the value, save the `PalWorldSettings.ini` file in the ZAP-Hosting configuration editor.

### Restart the server

Once the file has been saved, restart your Palworld server so the new max workers setting is loaded.

:::info Restart Required
Changes to `PalWorldSettings.ini` are not applied immediately while the server is running. You need to restart the server after saving the file.
:::

## Verify the New Worker Limit

After the server has restarted, join your Palworld server and check one of your base camps. You should now be able to assign worker Pals up to the new limit you configured.

If the change does not appear to work, check the following:

| Check | What to verify |
| --- | --- |
| Correct file | You edited `PalWorldSettings.ini` |
| Correct key | `BaseCampWorkerMaxNum` is present and spelled correctly |
| Valid syntax | The surrounding `OptionSettings` line was not broken |
| Restart completed | The server was fully restarted after saving |
| Value range | The value is within the normal vanilla limit of `50` |

:::caution Configuration Syntax
Palworld configuration entries are sensitive to formatting. If you accidentally remove commas, brackets, or other parts of the `OptionSettings` line, the server may ignore the setting or fail to load it correctly.
:::

## Conclusion

Congratulations, you have successfully changed the maximum number of workers per base camp on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!