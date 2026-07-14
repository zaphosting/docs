---
id: palworld-randomized-pals
title: "Palworld: Randomized Pals"
description: "Learn how to enable randomized Pals in Palworld by editing your server configuration, including randomizer type and seed settings for the Palworld game world. -> Learn more now"
sidebar_label: Palworld: Randomized Pals
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld includes randomizer settings that can change how Pals spawn across your game world. In this guide, you will learn how to manually enable and configure randomized Pals on your ZAP-Hosting Palworld server by editing the correct configuration file.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface and permission to edit server configuration files.

:::info Configuration Access Requirement
You need access to your server's web administration to open the `Configs` section and edit the Palworld configuration files.
:::

## Open the correct configuration file

To configure randomized Pals, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting game server administration:

1. Open your **Palworld** server.
2. Navigate to **Configs**.
3. Open the file named `PalWorldSettings.ini`.

This file contains the main gameplay configuration values for your Palworld server, including randomizer options.

## Configure randomized Pals

The randomizer settings are stored as keys inside `PalWorldSettings.ini`. You need to locate the existing settings block and adjust the relevant values manually.

### Randomizer settings overview

Use the following configuration keys for randomized Pal spawns:

| Config key | Allowed values | Default | Purpose |
| --- | --- | --- | --- |
| `RandomizerType` | `None`, `Region` | `None` | Controls whether random Pal spawning is disabled or randomized by region |
| `bIsRandomizerPalLevelRandom` | `True`, `False` | `False` | Enables fully random wild Pal levels when set to `True` |
| `RandomizerSeed` | `[your_seed_value]` or empty | `""` | Defines the seed used when the world is generated |

:::caution Dedicated Server Compatibility
The `All` value has been reported as incompatible with Palworld dedicated servers. You should only use supported values such as `None` or `Region`.
:::

### Example configuration

Add or adjust the following values in your `PalWorldSettings.ini` file as needed:

```ini
RandomizerType=Region
bIsRandomizerPalLevelRandom=True
RandomizerSeed="zaphosting"
```

Replace `zaphosting` with your own seed value if you want a specific randomized setup. A seed ensures that the same randomization pattern is used when the world is generated.

### What each setting does

#### `RandomizerType`

This setting controls whether Pal spawns are randomized.

- `None` disables randomization
- `Region` enables regional randomization for Pal spawns

If you want randomized Pals in your Palworld world map, set this value to `Region`.

#### `bIsRandomizerPalLevelRandom`

This setting controls wild Pal levels.

- `False` keeps normal level behavior
- `True` enables fully random wild Pal levels

This can make the Palworld game significantly less predictable, especially in early progression.

#### `RandomizerSeed`

This optional setting defines the randomization seed used during world generation.

Example:

```ini
RandomizerSeed="[your_seed_value]"
```

Replace `[your_seed_value]` with any custom text or number you want to use as your seed.

:::note Seed Behavior
The randomizer seed is applied when the world is generated. If you change `RandomizerSeed` later on an existing world, the change will not apply unless you reset the world or start a new one.
:::

## Save and apply the changes

After editing the file, save your changes in the ZAP-Hosting `Configs` section.

Once the file has been saved, restart your Palworld server so the updated configuration can be loaded.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional console commands | No |
| Reset world for seed changes on an existing save | If changing `RandomizerSeed` |

:::tip When to start a new world
If you are enabling randomization for the first time, especially with a custom `RandomizerSeed`, it is best to use a fresh world to ensure the settings apply as intended.
:::

## Verify the result

After the restart, join your server and check whether Pal spawns behave according to your selected randomizer settings.

You should verify:

- whether randomized regional spawns are active
- whether wild Pal levels are randomized if enabled
- whether the expected world behavior matches your configured seed on a new world

If the changes do not appear to work, re-open `PalWorldSettings.ini` and confirm that:

- the keys were entered correctly
- the values use valid capitalization such as `True` and `False`
- the server was restarted after saving
- a new world was created if you changed the seed

## Troubleshooting

### Randomized Pals are not appearing

Check that `RandomizerType=Region` is present in `PalWorldSettings.ini`. If it is still set to `None`, randomization is disabled.

### Seed changes did not take effect

This usually means the world was already generated before the new seed was added. In that case, you need to reset the world or create a new one for the seed to apply.

### Server issues after changing randomizer settings

If you used an unsupported value, such as `All`, revert the setting to a supported value like `None` or `Region`, save the file, and restart the server again.

:::danger Avoid Unsupported Randomizer Values
Do not use `RandomizerType=All` on a dedicated server unless official Palworld server documentation confirms support for it. This setting is currently known to be incompatible in dedicated server environments.
:::

## Conclusion

Congratulations, you have successfully configured randomized Pals on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!