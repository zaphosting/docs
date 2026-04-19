---
id: windrose-world-modifiers
title: "Windrose: World Modifiers"
description: "Configure Windrose world modifiers with a full parameter reference for float values, combat settings, and co-op scaling parameters example -> Learn more now"
sidebar_label: World modifiers
services:
 - gameserver-windrose
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Windrose custom world modifiers let you adjust combat, naval combat, exploration, quests, and co-op scaling in detail. In this guide, you will learn how to edit the `WorldDescription.json` file, understand each parameter, and apply custom settings to your Windrose gameserver.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure you have the following:

- An active Windrose gameserver at ZAP-Hosting
- Access to the gameserver management
- Your server stopped before editing files
- Access to the **Configs** or **File Manager** area in the gameserver management

:::info Configuration File Location
Custom world modifiers are stored in the `WorldDescription.json` file under the `WorldSettings` block.
:::

:::caution Stop the Server First
You should always stop your server before editing `WorldDescription.json`. This helps prevent file corruption or overwritten changes during startup or autosave operations.
:::

## Understanding World Modifiers

Each custom setting is defined individually inside `WorldDescription.json` under `WorldSettings`. The game separates values by type:

- `float` for numeric multipliers such as health or damage
- `bool` for true or false options
- `tag` for named difficulty values such as combat difficulty

This structure is important because each parameter must be placed in the correct section. If you place a `float` value in `bool`, or use an invalid tag, the setting may not work as expected.

:::note Parameter Types
If you are unfamiliar with the term *parameter*, it simply means a configurable value used by the game. In this guide, each parameter controls one part of the world difficulty or gameplay behavior.
:::

## Open the World Configuration File

To apply custom world modifiers, you need to edit the correct world file.

1. Stop your Windrose server in the gameserver management.
2. Open the **File Manager**.
3. Navigate to the following path:

```text
R5/Saved/SaveProfiles/Default/RocksDB/<game_version>/Worlds/<world_id>/WorldDescription.json
```

Replace the placeholders as follows:

| Placeholder | Meaning |
| --- | --- |
| `[your_game_version]` | Your current Windrose game version folder |
| `[your_world_id]` | The ID of the world you want to modify |

:::tip Finding the Correct World
If you have multiple worlds, make sure you edit the `WorldDescription.json` file inside the correct `[your_world_id]` folder. Otherwise, your changes will affect a different save.
:::

## Edit the WorldSettings Block

Inside `WorldDescription.json`, locate the `WorldSettings` block. Add or adjust your custom values there.

Use the following structure:

```json
"WorldSettings": {
  "bool": {
    "CoopQuests": true,
    "EasyExplore": false
  },
  "float": {
    "MobHealthMultiplier": 1.5,
    "MobDamageMultiplier": 1.2,
    "ShipHealthMultiplier": 1.0,
    "ShipDamageMultiplier": 1.0,
    "BoardingDifficultyMultiplier": 1.0,
    "Coop_StatsCorrectionModifier": 1.0,
    "Coop_ShipStatsCorrectionModifier": 0.5
  },
  "tag": {
    "CombatDifficulty": {
      "TagName": "WDS.Parameter.CombatDifficulty.Hard"
    }
  }
}
```

After saving the file, start your server again.

:::info Preset Behavior
If you set any custom value manually, `WorldPresetType` automatically changes to `Custom` on the next server start. If you want to use a clean preset instead of custom values, you should use the appropriate preset configuration rather than mixing both methods.
:::

## Full Parameter Reference

The following tables provide a complete reference for every available custom world modifier.

### Combat Parameters

| Parameter | Section | Default | Range | Effect |
| --- | --- | --- | --- | --- |
| `MobHealthMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Enemy health multiplier |
| `MobDamageMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Enemy damage multiplier |
| `CombatDifficulty` | `tag` | `Normal` | `Easy`, `Normal`, `Hard` | Boss aggression and encounter difficulty |

`CombatDifficulty` must be written as a tag value, for example:

```json
"tag": {
  "CombatDifficulty": {
    "TagName": "WDS.Parameter.CombatDifficulty.Hard"
  }
}
```

Available values:

| Difficulty | TagName value |
| --- | --- |
| Easy | `WDS.Parameter.CombatDifficulty.Easy` |
| Normal | `WDS.Parameter.CombatDifficulty.Normal` |
| Hard | `WDS.Parameter.CombatDifficulty.Hard` |

### Naval Combat Parameters

| Parameter | Section | Default | Range | Effect |
| --- | --- | --- | --- | --- |
| `ShipHealthMultiplier` | `float` | `1.0` | `0.4 - 5.0` | Enemy ship health multiplier |
| `ShipDamageMultiplier` | `float` | `1.0` | `0.2 - 2.5` | Enemy ship damage multiplier |
| `BoardingDifficultyMultiplier` | `float` | `1.0` | `0.2 - 5.0` | Number of enemy sailors to defeat in a boarding action |

These settings are useful if you want to make sea battles easier for smaller crews or much more demanding for experienced groups.

### Co-Op Scaling Parameters

| Parameter | Section | Default | Range | Effect |
| --- | --- | --- | --- | --- |
| `Coop_StatsCorrectionModifier` | `float` | `1.0` | `0.0 - 2.0` | Adjusts enemy health and posture loss based on player count |
| `Coop_ShipStatsCorrectionModifier` | `float` | `0.0` | `0.0 - 2.0` | Adjusts enemy ship health based on player count |

These values are especially useful for larger crews. They allow you to keep combat balanced as more players join the world.

### Exploration Parameters

| Parameter | Section | Default | Effect |
| --- | --- | --- | --- |
| `EasyExplore` | `bool` | `false` | Disables map markers for points of interest |

:::note EasyExplore Naming
Despite the name, setting `EasyExplore` to `true` makes exploration harder because it disables map markers for points of interest. This is effectively an immersive exploration mode.
:::

### Quest Parameters

| Parameter | Section | Default | Effect |
| --- | --- | --- | --- |
| `CoopQuests` | `bool` | `true` | When one player completes a co-op quest, it auto-completes for all other players who have it active |

This setting is useful if you want to simplify group progression or require each player to complete objectives individually.

## Multiplier Scale Reference

If you are unsure how a `float` value changes gameplay, use this quick scale reference.

| Value | Effect |
| --- | --- |
| `0.5` | `50%` - noticeably easier |
| `1.0` | `100%` - default or normal |
| `2.0` | `200%` - noticeably harder |
| `5.0` | `500%` - extremely difficult |

This table is a practical parameters example for balancing your world. Lower values reduce difficulty, while higher values increase it significantly.

:::tip Start With Small Adjustments
If you are testing balance changes, increase or decrease one parameter at a time. This makes it easier to understand which setting caused the gameplay difference.
:::

## Example Configurations

The following examples can help you build your own custom setup.

### Casual Crew

This setup lowers combat pressure, keeps quest sharing enabled, and makes boarding easier.

```json
"float": {
  "MobHealthMultiplier": 0.6,
  "MobDamageMultiplier": 0.6,
  "BoardingDifficultyMultiplier": 0.5
}
```

### Hardcore Seas

This setup increases both land and naval difficulty, disables shared quest completion, and enables immersive exploration.

```json
"bool": {
  "CoopQuests": false,
  "EasyExplore": true
},
"float": {
  "MobHealthMultiplier": 2.0,
  "MobDamageMultiplier": 1.5,
  "ShipHealthMultiplier": 2.0,
  "ShipDamageMultiplier": 1.5
}
```

### Large Group Scaling

This setup is useful for larger groups, such as 8 players, where default scaling may feel too easy.

```json
"float": {
  "MobHealthMultiplier": 1.0,
  "MobDamageMultiplier": 1.0,
  "Coop_StatsCorrectionModifier": 2.0,
  "Coop_ShipStatsCorrectionModifier": 2.0
}
```

## Best Practices for Editing Values

### Use Valid Ranges

Each `float` parameter only supports a defined range. Staying inside the documented range helps avoid unexpected behavior.

| Parameter | Minimum | Maximum |
| --- | --- | --- |
| `MobHealthMultiplier` | `0.2` | `5.0` |
| `MobDamageMultiplier` | `0.2` | `5.0` |
| `ShipHealthMultiplier` | `0.4` | `5.0` |
| `ShipDamageMultiplier` | `0.2` | `2.5` |
| `BoardingDifficultyMultiplier` | `0.2` | `5.0` |
| `Coop_StatsCorrectionModifier` | `0.0` | `2.0` |
| `Coop_ShipStatsCorrectionModifier` | `0.0` | `2.0` |

:::caution Invalid Values
If you use unsupported values, incorrect formatting, or place a parameter in the wrong section, the game may ignore the setting or fail to apply it correctly.
:::

### Keep JSON Formatting Correct

When editing `WorldDescription.json`, make sure that:

- All keys remain in double quotes
- Commas are placed correctly
- Braces `{}` and brackets are closed properly
- `true` and `false` are written in lowercase
- Decimal values use a period, for example `1.5`

A broken JSON file may prevent the world configuration from loading correctly.

### Restart After Saving

After you finish editing:

1. Save `WorldDescription.json`
2. Start your server again
3. Join the server and test the changes in gameplay

Some values are easiest to verify in combat, boarding, or co-op sessions rather than immediately at login.

## Managing Configs in the Gameserver Management

You can manage Windrose configuration files directly in the ZAP-Hosting gameserver management under the available config and file options. This is the recommended way to edit `WorldDescription.json` if you do not want to use external tools.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

If the exact config entry is not listed directly, use the **File Manager** and navigate manually to the world file path shown earlier in this guide.

:::info Config Management
Depending on the current gameserver interface and your existing world setup, the exact file listing may vary. If a specific config entry is not visible, use the file path directly instead of assuming a missing feature.
:::

## Troubleshooting

### Changes Do Not Apply

If your modifiers are not active after restarting, check the following:

- You edited the correct `WorldDescription.json`
- The server was stopped before editing
- The JSON syntax is valid
- Each parameter is in the correct section: `float`, `bool`, or `tag`
- The server was fully restarted after saving

### Difficulty Feels Unchanged

Some modifiers are more noticeable than others. For example:

- `MobHealthMultiplier` is easiest to notice in regular combat
- `ShipHealthMultiplier` is only noticeable during naval combat
- `Coop_StatsCorrectionModifier` is most visible with multiple players
- `EasyExplore` only affects exploration behavior and map markers

### Preset Changed to Custom

This is expected behavior once you manually set custom values. The game automatically switches the world preset type to `Custom` on the next startup.

## Conclusion

Congratulations, you have successfully configured Windrose world modifiers. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!