---
id: palworld-max-dropped-items
title: "Palworld: Max Dropped Items"
description: "Learn how to change dropped items limits and item despawn settings on your Palworld server by editing the correct config values. -> Learn more now"
sidebar_label: "Max Dropped Items"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how many dropped items can exist in your world and how long those items remain before they disappear. In this guide, you will learn how to edit the correct configuration file in the ZAP-Hosting interface, adjust the dropped item settings, and apply the changes safely.



## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit its configuration files.

:::info Manual Configuration Required
This setup is performed manually by editing the Palworld server configuration. The required file can be accessed in your game server administration under `Configs`.
:::

## Open the Palworld Configuration File

To change the dropped items limit, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your Palworld server
2. Navigate to `Configs`
3. Open the file `PalWorldSettings.ini`

This file contains the main gameplay configuration values for your Palworld server, including dropped item behavior.

## Change the Dropped Item Settings

The dropped items settings are configured through entries inside `PalWorldSettings.ini`. You need to adjust the relevant values in the active settings line or section of the file.

### Relevant Configuration Keys

Use the following configuration keys to control dropped items:

| Config key | Default value | Description |
| --- | --- | --- |
| `DropItemMaxNum` | `3000` | Maximum number of dropped items that can exist in the world at the same time |
| `DropItemAliveMaxHours` | `1.0` | Time in hours before dropped items despawn automatically |

### Example Configuration

Depending on your current file content, these values are usually part of the Palworld option settings entry. For example:

```ini
OptionSettings=(DropItemMaxNum=3000,DropItemAliveMaxHours=1.000000)
```

If these keys already exist in your `OptionSettings` entry, change only the values. For example:

```ini
OptionSettings=(DropItemMaxNum=2000,DropItemAliveMaxHours=0.500000)
```

In this example:

- `DropItemMaxNum=2000` limits the world to `2000` dropped items
- `DropItemAliveMaxHours=0.500000` makes dropped items disappear after `0.5` hours, which is `30` minutes

:::note Value Format
Palworld server settings often use decimal values with multiple trailing zeros, such as `1.000000`. You should keep the existing formatting style used in your file where possible.
:::

## Choose Suitable Values

The correct values depend on your player count, server activity, and loot generation.

### Recommended Use Cases

| Scenario | `DropItemMaxNum` | `DropItemAliveMaxHours` |
| --- | --- | --- |
| Small private server | `3000` | `1.000000` |
| Busy multiplayer server | `2000` | `0.500000` |
| Performance-focused setup | `1000` to `1500` | `0.250000` to `0.500000` |

### Performance Considerations

Lower dropped item limits can improve server performance, especially if:

- many players are active at the same time
- your world generates a large number of items
- players frequently farm, build, or leave loot on the ground

:::tip Improve Performance With Lower Item Limits
If you notice lag or reduced server responsiveness, lowering both the maximum dropped items value and the despawn timer can help reduce world clutter and improve stability.
:::

:::caution Avoid Extremely Low Values
If you set these values too low, players may notice items disappearing too quickly or dropped loot reaching the cap sooner than expected. Test changes carefully after applying them.
:::

## Save and Apply the Changes

After editing `PalWorldSettings.ini`, save the file in the ZAP-Hosting interface.

Once the file has been saved, restart your Palworld server so the new dropped items settings are loaded.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Additional console command | No |

:::info Restart Required
Changes to `PalWorldSettings.ini` will not take effect until you restart the Palworld server.
:::

## Verify the New Settings

After the restart, join your server and monitor how dropped items behave during normal gameplay.

You should check whether:

- the number of dropped items is being controlled as expected
- items remain on the ground for the intended amount of time
- server performance improves after reducing item quantity or lifetime

If needed, return to `PalWorldSettings.ini` and fine-tune the values further.

## Conclusion

Congratulations, you have successfully configured the maximum dropped items and despawn timer on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!