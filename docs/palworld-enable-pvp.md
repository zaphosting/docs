---
id: palworld-enable-pvp
title: "Palworld: Enable PvP"
description: "Learn how to enable PvP in Palworld, configure base combat behavior, and apply recommended PvP settings on your server. -> Learn more now"
sidebar_label: "Enable PvP"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld includes a PvP mode that allows players to fight each other and changes how base combat and guild interaction work on your server. In this guide, you will learn how to manually enable PvP by editing the correct configuration file in the ZAP-Hosting game server administration and applying the required settings.

:::caution Trial Feature Notice
PvP in Palworld is considered a trial feature by the game developer. Configuration options and gameplay behavior may change in future game updates.
:::

## Preparation

Before you start, make sure that:

- You have access to your Palworld game server in the ZAP-Hosting web interface
- Your server is currently stopped or can be restarted after the changes
- You understand that PvP changes gameplay significantly, especially around player combat, base defense, and item loss on death

:::info Configuration Access
For ZAP-Hosting Palworld servers, the relevant configuration file can be accessed through your game server administration under `Configs`.
:::

## Open the Palworld Configuration File

To enable PvP, you need to edit the `PalWorldSettings.ini` file.

### Find the file in the ZAP-Hosting interface

1. Log in to the ZAP-Hosting web interface.
2. Open your Palworld game server.
3. Navigate to `Configs` in the game server administration.
4. Open the file `PalWorldSettings.ini`.



:::note Configuration Format
Palworld server settings are typically stored inside the `OptionSettings=(...)` section in `PalWorldSettings.ini`. You need to add or adjust the required keys inside that settings block.
:::

## Enable the Required PvP Settings

To activate PvP, you must ensure that the following three settings are set to `True` in `PalWorldSettings.ini`.

### Required PvP keys

| Setting | Required value | Description |
|---|---|---|
| `bIsPvP` | `True` | Enables PvP mode on the server |
| `bEnablePlayerToPlayerDamage` | `True` | Allows direct player-to-player damage |
| `bEnableDefenseOtherGuildPlayer` | `True` | Allows defensive interaction involving other guild players |

### Example configuration

Add these values to your `OptionSettings=(...)` line, or change the existing values if they are already present:

```ini
bIsPvP=True,
bEnablePlayerToPlayerDamage=True,
bEnableDefenseOtherGuildPlayer=True
```

:::tip Avoid Duplicate Keys
If a setting already exists in `PalWorldSettings.ini`, edit the existing value instead of adding the same key a second time. Duplicate entries can cause unexpected behavior or make troubleshooting harder.
:::

## Recommended PvP Settings

Once PvP is enabled, you can also adjust additional settings for a more balanced PvP game experience. The following values are commonly recommended for PvP-focused servers.

### Suggested values

| Setting | Recommended value | Description |
|---|---|---|
| `bAllowEnhanceStat_Health` | `False` | Prevents HP stat allocation |
| `bAllowEnhanceStat_Attack` | `False` | Prevents Attack stat allocation |
| `bEnableFastTravel` | `True` | Keeps fast travel enabled |
| `bEnableFastTravelOnlyBaseCamp` | `True` | Limits fast travel to base camps |
| `bExistPlayerAfterLogout` | `True` | Keeps players in the world after logout |
| `bEnableAimAssistPad` | `False` | Disables controller aim assist |
| `DeathPenalty` | `All` | Drops all items and Pals on death |
| `bCanPickupOtherGuildDeathPenaltyDrop` | `True` | Allows looting other players' dropped items |
| `bInvisibleOtherGuildBaseCampAreaFX` | `False` | Shows other guild base areas |
| `bBuildAreaLimit` | `True` | Helps prevent building in restricted areas |
| `GuildPlayerMaxNum` | `4` | Limits guild size |
| `BaseCampMaxNumInGuild` | `2` | Limits base count per guild |
| `MaxBuildingLimitNum` | `1000` | Limits structures per player |
| `GuildRejoinCooldownMinutes` | `60` | Sets guild rejoin cooldown |
| `BlockRespawnTime` | `5.0` | Sets base respawn delay |
| `RespawnPenaltyDurationThreshold` | `1800.0` | Time before respawn penalty resets |
| `RespawnPenaltyTimeScale` | `2.0` | Multiplies respawn penalty after repeated deaths |

### Example PvP settings block

If you want to use the recommended PvP values, include the following entries in your `OptionSettings=(...)` section:

```ini
bAllowEnhanceStat_Health=False,
bAllowEnhanceStat_Attack=False,
bEnableFastTravel=True,
bEnableFastTravelOnlyBaseCamp=True,
bExistPlayerAfterLogout=True,
bEnableAimAssistPad=False,
DeathPenalty=All,
bCanPickupOtherGuildDeathPenaltyDrop=True,
bInvisibleOtherGuildBaseCampAreaFX=False,
bBuildAreaLimit=True,
GuildPlayerMaxNum=4,
BaseCampMaxNumInGuild=2,
MaxBuildingLimitNum=1000,
GuildRejoinCooldownMinutes=60,
BlockRespawnTime=5.0,
RespawnPenaltyDurationThreshold=1800.0,
RespawnPenaltyTimeScale=2.0
```

## Optional PvP Restrictions and Rewards

Depending on how competitive you want your PvP server to be, you can also configure technology restrictions and PvP rewards.

### Restrict fast-movement technologies

You can restrict certain movement-related technologies by setting `DenyTechnologyList`.

| Setting | Example value |
|---|---|
| `DenyTechnologyList` | `SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5` |

Example entry:

```ini
DenyTechnologyList="SkillUnlock_JetDragon,SkillUnlock_IceHorse,SkillUnlock_IceHorse_Dark,SkillUnlock_SaintCentaur,SkillUnlock_BlackCentaur,SkillUnlock_DarkMechaDragon,SkillUnlock_PoseidonOrca,GrapplingGun,GrapplingGun2,GrapplingGun3,GrapplingGun4,GrapplingGun5"
```

:::note Verify Existing Syntax
Palworld configuration formatting can vary depending on the current server version and how the existing `OptionSettings=(...)` line is structured. Before saving, make sure your entry matches the syntax style already used in your file.
:::

### Configure PvP reward drops

Palworld also includes PvP-related reward options for player kills.

| Setting | Description |
|---|---|
| `bAdditionalDropItemWhenPlayerKillingInPvPMode` | Enables additional item drops on PvP kills |
| `AdditionalDropItemWhenPlayerKillingInPvPMode` | Defines the item ID to drop |
| `AdditionalDropItemNumWhenPlayerKillingInPvPMode` | Sets the drop quantity |
| `bDisplayPvPItemNumOnWorldMap_BaseCamp` | Shows PvP item counts on the world map for bases |
| `bDisplayPvPItemNumOnWorldMap_Player` | Shows PvP item counts on the world map for players |

Example configuration:

```ini
bAdditionalDropItemWhenPlayerKillingInPvPMode=True,
AdditionalDropItemWhenPlayerKillingInPvPMode=PlayerDropItem,
AdditionalDropItemNumWhenPlayerKillingInPvPMode=1,
bDisplayPvPItemNumOnWorldMap_BaseCamp=True,
bDisplayPvPItemNumOnWorldMap_Player=True
```

:::caution Item ID Compatibility
If you use a custom value for `AdditionalDropItemWhenPlayerKillingInPvPMode`, make sure the item ID is valid for your current Palworld version. Invalid item identifiers may cause the setting to fail or be ignored.
:::

## What Changes When PvP Is Enabled

After enabling PvP, gameplay on your server changes in several important ways. Based on current publicly available Palworld PvP guidance, you can generally expect the following behavior:

- Players can damage each other
- Entering another player's base can cause their base Pals to become hostile
- Flying players and mounted Pals may take increased damage
- Summoned Pals and base Pals may take reduced damage
- Players may be able to access chests owned by other guilds
- Melee weapon damage against other players' structures may be reduced
- Base Pals may defend across a larger area
- The allowed distance between neighboring bases may increase
- Players may receive notifications when their base is under attack
- Building and repairing may be restricted during a base attack
- Some weapons may have modified range or damage values in PvP mode

:::danger Gameplay Impact Warning
Enabling PvP can significantly change progression, base security, and player retention on your server. If you run a public server, it is recommended to inform your players before applying these changes.
:::

## Save the File and Restart the Server

After you finish editing `PalWorldSettings.ini`, save the file in the ZAP-Hosting `Configs` area.

### Apply the changes

To activate the new PvP settings:

1. Save the changes in `PalWorldSettings.ini`.
2. Restart your Palworld server from the ZAP-Hosting game server administration.

A restart is required for the configuration changes to take effect.

:::info No Additional Command Required
No extra in-game or console command is normally required after editing `PalWorldSettings.ini`. A full server restart is the required step to apply the new PvP configuration.
:::

## Verify That PvP Is Active

After the server restarts, join the server and test the behavior in-game.

### Basic checks

You can verify the setup by checking whether:

- Players can damage each other
- PvP-related base behavior is active
- Death penalties and loot rules match your configured values
- Optional restrictions such as `DenyTechnologyList` are working as expected

If the changes do not apply, reopen `PalWorldSettings.ini` and check for:

- Misspelled setting names
- Duplicate keys
- Incorrect commas or formatting inside `OptionSettings=(...)`
- Values that were not saved correctly before restart

## Conclusion

Congratulations, you have successfully enabled PvP on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!