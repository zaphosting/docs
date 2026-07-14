---
id: palworld-collection-drop-rate
title: "Palworld: Collection Drop Rate"
description: "Learn how to adjust Palworld collection settings, increase gathered resources, and speed up respawns on your Palworld game server. -> Learn more now"
sidebar_label: Palworld: Collection Drop Rate
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how many resources players collect and how quickly gatherable objects return. In this guide, you will learn how to manually edit the correct configuration file in your ZAP-Hosting game server to change the collection drop rate and related resource settings.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and that the server is currently offline or can be restarted after the changes are made.

:::info Configuration File Access
For Palworld, the relevant gameplay settings are stored in the `PalWorldSettings.ini` file. In the ZAP-Hosting game server administration, you can access this file through the `Configs` section.
:::

## Open the Palworld Configuration File

To change collection settings, you need to edit the main Palworld server configuration file.

### Locate the file in the ZAP-Hosting interface

1. Log in to the [ZAP-Hosting web interface](https://zap-hosting.com).
2. Open your Palworld game server.
3. Navigate to the `Configs` section in the server administration.
4. Open the file named `PalWorldSettings.ini`.

:::note Correct File
The collection-related settings described in this guide are stored in `PalWorldSettings.ini`. If you do not see the expected entries immediately, they are usually located inside the `OptionSettings` configuration line.
:::

## Edit the Collection Settings

Palworld stores many gameplay options as key-value pairs inside the `OptionSettings` section of `PalWorldSettings.ini`. To increase gathered resources or change how quickly resource nodes return, you need to adjust the relevant values there.

### Relevant configuration keys

Use the following settings for collection-related behavior:

| Config key | Default value | Description |
| --- | --- | --- |
| `CollectionDropRate` | `1.000000` | Controls how many items players receive from gatherable resources. Higher values increase the amount collected. |
| `CollectionObjectRespawnSpeedRate` | `1.000000` | Controls how quickly gatherable objects respawn. Higher values make resources return faster. |
| `CollectionObjectHpRate` | `1.000000` | Controls the HP of gatherable objects such as rocks or trees. Higher values usually make them take longer to break. |

### Example configuration values

If you want to double gathered resources and make resource nodes respawn twice as fast, set both values to `2.000000`.

```ini
CollectionDropRate=2.000000
CollectionObjectRespawnSpeedRate=2.000000
```

If you also want gatherable objects to be easier to break, you can lower their HP multiplier:

```ini
CollectionObjectHpRate=0.500000
```

:::tip Recommended Starting Values
A value of `2.000000` is a common starting point for both `CollectionDropRate` and `CollectionObjectRespawnSpeedRate`. This gives noticeably faster progression without changing the Palworld game too aggressively.
:::

## Apply the Changes in `PalWorldSettings.ini`

After opening `PalWorldSettings.ini`, find the existing `OptionSettings` entry and adjust the relevant keys directly inside it.

### Example `OptionSettings` snippet

Depending on your current server configuration, the line may already contain many settings. You only need to change the values for the collection-related keys if they already exist, or add them if they are missing.

```ini
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=2.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=2.000000,EnemyDropItemRate=1.000000)
```

:::caution Preserve Existing Syntax
Make sure you keep the existing format of the `OptionSettings` line intact. Do not remove commas, brackets, or other settings accidentally, or the server may fail to load the configuration correctly.
:::

## Save and Restart the Server

Once you have finished editing the file, save your changes in the `Configs` section.

### Restart requirement

Palworld does not apply these gameplay configuration changes instantly while the server is running. You need to restart the server after saving the file so the new values are loaded.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Additional console command | No verified command required |

:::info Restart Required
A full server restart is required after changing `CollectionDropRate`, `CollectionObjectRespawnSpeedRate`, or `CollectionObjectHpRate`. No additional in-game or console command is required for these specific settings.
:::

## Verify the New Collection Behavior

After the restart is complete, join your server and test a few gatherable objects such as trees, stones, or ore nodes.

### What to check

- Whether players receive more materials per gather action
- Whether destroyed resource nodes return faster than before
- Whether gatherable objects feel easier or harder to break if you changed `CollectionObjectHpRate`

If the result is too strong or too weak, return to `PalWorldSettings.ini` and adjust the multipliers again.

:::tip Fine-Tuning Your Server
If you want a more balanced Palworld collection setup, increase values gradually, such as from `1.000000` to `1.500000`, before moving to higher multipliers.
:::

## Configuration Reference

The following table summarizes the most important values for this Palworld collection setup.

| Setting | Example | Effect |
| --- | --- | --- |
| `CollectionDropRate=1.000000` | Default | Standard gathered resource amount |
| `CollectionDropRate=2.000000` | Increased | Double gathered resources |
| `CollectionObjectRespawnSpeedRate=1.000000` | Default | Standard respawn speed |
| `CollectionObjectRespawnSpeedRate=2.000000` | Increased | Faster resource respawn |
| `CollectionObjectHpRate=1.000000` | Default | Standard gatherable object HP |
| `CollectionObjectHpRate=0.500000` | Reduced | Gatherable objects break faster |

## Conclusion

Congratulations, you have successfully changed the collection drop rate on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!