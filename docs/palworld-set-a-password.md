---
id: palworld-set-a-password
title: "Palworld: Set a Password"
description: "Learn how to set a Palworld server password by editing the Palworld game configuration manually and applying the password change correctly. -> Learn more now"
sidebar_label: Palworld: Set a Password
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to protect your server with a password so only authorized players can join. In this guide, you will learn how to manually set or change the server password in your ZAP-Hosting game server configuration and apply the password correctly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that:

- your Palworld game server is online in the ZAP-Hosting web interface
- you have access to the game server administration
- you know the password you want to use for server access

:::info Manual Configuration Required
For Palworld, the password can be configured manually through the server configuration files. In the ZAP-Hosting interface, you can access these files through your game server administration under `Configs`.
:::

## Open the Palworld Configuration File

To set a password for your Palworld server, you need to edit the `PalWorldSettings.ini` file.

### Find the file in the ZAP-Hosting interface

1. Log in to the ZAP-Hosting web interface.
2. Open your **Palworld** game server administration.
3. Navigate to **Configs**.
4. Open the file `PalWorldSettings.ini`.

This file contains the main Palworld server settings, including the entry that controls whether a password is required to join.

:::note Configuration File Purpose
The `PalWorldSettings.ini` file stores server options in a single configuration line, usually inside the `OptionSettings=(...)` section. You need to edit the `ServerPassword` value there.
:::

## Edit the Server Password

Once you have opened `PalWorldSettings.ini`, look for the `ServerPassword` entry.

### Required configuration entry

Use the following value:

```ini
ServerPassword="[your_password]"
```

Replace `[your_password]` with the password you want players to enter when joining your server.

If the password is currently disabled, the value may look like this:

```ini
ServerPassword=""
```

An empty value means that no join password is set.

### Example configuration

In Palworld, the setting is typically part of the `OptionSettings=(...)` block. It may look similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,bEnablePlayerToPlayerDamage=False,bEnableFriendlyFire=False,bEnableInvaderEnemy=True,bActiveUNKO=False,bEnableAimAssistPad=True,bEnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,bAutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,bIsMultiplay=False,bIsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,bEnableNonLoginPenalty=True,bEnableFastTravel=True,bIsStartLocationSelectByMap=True,bExistPlayerAfterLogout=False,bEnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="zaphosting",ServerDescription="",AdminPassword="",ServerPassword="[your_password]",PublicPort=8211,PublicIP="",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

:::caution Keep the Existing Format Intact
Only change the value inside `ServerPassword="..."`. Do not remove commas, quotation marks, brackets, or other entries in the `OptionSettings=(...)` line, as this can prevent the server from loading the configuration correctly.
:::

## Configuration Reference

The following table shows the relevant setting for this password change:

| Setting | Example value | Purpose |
| --- | --- | --- |
| `ServerPassword` | `ServerPassword="[your_password]"` | Requires players to enter a password before joining the server |

### Password recommendations

When choosing a password, keep these points in mind:

| Recommendation | Explanation |
| --- | --- |
| Use a unique password | Avoid reusing an account password from other services |
| Avoid very simple words | Easy passwords are easier to guess |
| Share it only with trusted players | Anyone with the password can attempt to join |
| Store it securely | A password manager can help you keep track of it safely |

:::tip Choose a Strong Password
If you plan to run a private Palworld server for friends or a restricted community, use a strong password instead of a simple word or server name. This helps reduce unwanted join attempts.
:::

## Save the Changes and Restart the Server

After editing the password, save the file in the `Configs` section.

### Apply the new password

To make the password change active:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld game server.

A restart is required because Palworld reads the server settings from the configuration file during startup. Without a restart, the new password may not be applied.

:::info Restart Required
After changing `ServerPassword`, you need to restart the server manually from the ZAP-Hosting game server administration so the new setting is loaded.
:::

## Verify the Password

After the restart is complete, test the configuration by joining the server from the Palworld game.

### What to check

When connecting, confirm that:

- the server now requests a password before joining
- the configured password works correctly
- players without the password cannot access the server

If the server does not ask for a password, reopen `PalWorldSettings.ini` and check that:

- `ServerPassword` is present in the `OptionSettings=(...)` section
- the value is not empty
- the file was saved successfully
- the server was restarted after the change

:::note Password Visibility
The password is stored in plain text in the configuration file. Make sure you only share access to your server administration with trusted users.
:::

## Conclusion

Congratulations, you have successfully set a password for your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!