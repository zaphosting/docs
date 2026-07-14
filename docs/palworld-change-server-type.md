---
id: palworld-change-server-type
title: "Palworld: Change Server Type"
description: "Learn how to change your Palworld server type between Linux and Windows, update the correct config path, and apply the change properly for mod compatibility. -> Learn more now"
sidebar_label: Palworld: Change Server Type
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld servers can run with different server types, typically Linux or Windows, depending on your hosting setup and modding requirements. In this guide, you will learn how to change the server type in the ZAP-Hosting interface, identify the correct configuration file path afterward, and apply the change correctly.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have access to your Palworld game server in the ZAP-Hosting web interface and permission to stop and restart the server.

:::info Important Information About Server Type Changes
Changing the server type from Linux to Windows, or from Windows to Linux, may affect file paths, mod compatibility, and existing configuration locations. Windows server type is commonly required for certain UE4SS-based mod setups.
:::

:::caution Check for Reinstallation Requirements
Depending on how the Palworld product is deployed on your service, changing the server type may require a reinstall or a software re-deployment. If the exact option is not available directly in your current interface, please contact support before proceeding.
:::

## Understand What Changes When You Switch Server Type

Changing the server type does not usually mean changing a value inside the Palworld gameplay configuration itself. Instead, the main change is the underlying server software environment, which also changes the location of the active configuration files.

For Palworld, the main configuration file is typically:

- `PalWorldSettings.ini`

The folder containing this file depends on the selected server type.

| Server type | Config folder path | Main config file |
| --- | --- | --- |
| Linux | `Pal/Saved/Config/LinuxServer/` | `PalWorldSettings.ini` |
| Windows | `Pal/Saved/Config/WindowsServer/` | `PalWorldSettings.ini` |

:::note Why This Matters
If you edit the Linux configuration file but your server is currently running as a Windows server type, your changes may not be applied because the server will read from the Windows-specific path instead.
:::

## Stop the Server

Before changing the server type, you should stop the server to avoid file conflicts and incomplete changes.

1. Log in to the ZAP-Hosting game server web interface.
2. Open your Palworld server administration.
3. Stop the server using the server control options.

:::tip Recommended Before Editing
It is a good idea to create a backup before changing the server type, especially if you already use mods or have manually edited configuration files.
:::

## Change the Server Type in the ZAP-Hosting Interface

The server type change is generally handled through the product or software settings in the ZAP-Hosting interface, not by editing a line inside `PalWorldSettings.ini`.

1. In your Palworld server administration, look for the server software or game settings area.
2. Find the option that controls the installed server type or software variant.
3. Change the setting from `Linux` to `Windows`, or from `Windows` to `Linux`, depending on your target setup.
4. Save the change.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

:::info If You Cannot Find the Server Type Option
The exact label and location of this setting can vary depending on the current ZAP-Hosting interface or product generation. If no server type selector is visible, the change may require a reinstall action or assistance from support.
:::

## Edit the Correct Configuration File

After changing the server type, you need to verify that you are editing the active configuration file in the correct folder.

### Open the Configs Section

In the ZAP-Hosting game server administration:

1. Open your Palworld server.
2. Go to `Configs`.
3. Navigate to the folder matching your selected server type.

Use one of the following paths:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

Then open:

- `PalWorldSettings.ini`

### Verify or Reapply Your Settings

If you previously edited settings while using the other server type, those changes may only exist in the old folder. You should compare both versions of `PalWorldSettings.ini` and reapply any required values in the now-active file.

| What to check | Why it matters |
| --- | --- |
| Existing custom settings | They may only exist in the previous server type folder |
| Mod-related settings | Windows server type is often used for UE4SS mod support |
| Gameplay values | The server only reads the file from the active OS-specific path |

:::caution Do Not Assume Both Files Are Synchronized
The Linux and Windows configuration folders are separate. Changing the server type does not automatically guarantee that your custom settings are copied between both locations.
:::

## Check the Configuration Entries

The server type itself is not normally controlled by a line inside `PalWorldSettings.ini`. However, after switching type, you should still confirm that your active configuration file contains the settings you expect.

A typical `PalWorldSettings.ini` structure looks similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(Difficulty=None,DayTimeSpeedRate=1.000000,NightTimeSpeedRate=1.000000,ExpRate=1.000000,PalCaptureRate=1.000000,PalSpawnNumRate=1.000000,PalDamageRateAttack=1.000000,PalDamageRateDefense=1.000000,PlayerDamageRateAttack=1.000000,PlayerDamageRateDefense=1.000000,PlayerStomachDecreaceRate=1.000000,PlayerStaminaDecreaceRate=1.000000,PlayerAutoHPRegeneRate=1.000000,PlayerAutoHpRegeneRateInSleep=1.000000,PalStomachDecreaceRate=1.000000,PalStaminaDecreaceRate=1.000000,PalAutoHPRegeneRate=1.000000,PalAutoHpRegeneRateInSleep=1.000000,BuildObjectDamageRate=1.000000,BuildObjectDeteriorationDamageRate=1.000000,CollectionDropRate=1.000000,CollectionObjectHpRate=1.000000,CollectionObjectRespawnSpeedRate=1.000000,EnemyDropItemRate=1.000000,DeathPenalty=All,EnablePlayerToPlayerDamage=False,EnableFriendlyFire=False,EnableInvaderEnemy=True,ActiveUNKO=False,EnableAimAssistPad=True,EnableAimAssistKeyboard=False,DropItemMaxNum=3000,DropItemMaxNum_UNKO=100,BaseCampMaxNum=128,BaseCampWorkerMaxNum=15,DropItemAliveMaxHours=1.000000,AutoResetGuildNoOnlinePlayers=False,AutoResetGuildTimeNoOnlinePlayers=72.000000,GuildPlayerMaxNum=20,PalEggDefaultHatchingTime=72.000000,WorkSpeedRate=1.000000,IsMultiplay=True,IsPvP=False,CanPickupOtherGuildDeathPenaltyDrop=False,EnableNonLoginPenalty=True,EnableFastTravel=True,IsStartLocationSelectByMap=True,ExistPlayerAfterLogout=False,EnableDefenseOtherGuildPlayer=False,CoopPlayerMaxNum=4,ServerPlayerMaxNum=32,ServerName="[your_server_name]",ServerDescription="",AdminPassword="[your_admin_password]",ServerPassword="[your_server_password]",PublicPort=8211,PublicIP="[your_server_ip]",RCONEnabled=False,RCONPort=25575,Region="",bUseAuth=True,BanListURL="https://api.palworldgame.com/api/banlist.txt")
```

Replace placeholders such as:

- `[your_server_name]` with your actual server name
- `[your_admin_password]` with your admin password
- `[your_server_password]` with your join password if used
- `[your_server_ip]` with your public server IP if required by your setup

:::note No Special Command Is Required in the File
There is no known `PalWorldSettings.ini` entry that switches the underlying server type from Linux to Windows or the other way around. This change is handled by the installed server environment in the hosting interface.
:::

## Apply the Change

Once you have changed the server type and confirmed the correct configuration file, you need to apply the new setup.

### Restart the Server

Start the server again from the ZAP-Hosting web interface after saving your changes.

In many cases, a normal restart is enough if the server software type has already been switched successfully.

### Reinstall if the Interface Requires It

Some deployments may require a reinstall or reinstallation step after changing the software type. If your interface presents such an option, follow it carefully and verify afterward that:

- the correct server type is active
- the correct config path is being used
- your `PalWorldSettings.ini` values are still present

:::danger Reinstallation Can Overwrite Files
If a reinstall is required, custom files or mods may be removed unless they are backed up first. Always verify your save data, mods, and configuration files before confirming a reinstall.
:::

## Verify That the New Server Type Is Active

After the server starts again, confirm that the change was successful.

### Confirm Through the Config Path

Open `Configs` again and check whether the active file path now matches your selected server type:

- `Pal/Saved/Config/LinuxServer/`
- `Pal/Saved/Config/WindowsServer/`

### Confirm Mod Compatibility

If you changed to Windows specifically for UE4SS modding, verify that your mod files and related setup now match the Windows server environment.

### Review Server Behavior

Check whether the server starts normally and whether your expected settings are loaded correctly.

| Verification point | Expected result |
| --- | --- |
| Server starts successfully | No startup failure after type change |
| Correct config path | Matches Linux or Windows server type |
| Custom settings loaded | Server uses your edited `PalWorldSettings.ini` |
| Mod support | Windows-based mod requirements can now be used if applicable |

## Troubleshooting

### The Server Type Option Is Not Visible

If you cannot find a setting to change the server type, this may mean the option is not exposed directly in your current product interface. In that case, you should contact ZAP-Hosting support and ask whether your Palworld service can be switched between Linux and Windows server type.

### My Settings Did Not Apply After the Change

This usually happens when the wrong configuration path was edited. Check whether you updated:

- `Pal/Saved/Config/LinuxServer/PalWorldSettings.ini`

or

- `Pal/Saved/Config/WindowsServer/PalWorldSettings.ini`

based on the currently active server type.

### Mods Still Do Not Work

Switching to Windows server type alone may not complete the full mod setup. Some mods require additional files, loaders, or manual installation steps beyond the server type change.

## Conclusion

Congratulations, you have successfully changed your Palworld server type. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!