---
id: palworld-max-guild-players
title: "Palworld: Max Guild Players"
description: "Learn how to change Palworld guild players limits by editing the max guild players setting on your server. -> Learn more now"
sidebar_label: "Max Guild Players"
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control how many players can join a single guild on your server. In this guide, you will learn how to manually change the maximum guild players limit by editing the correct configuration file in your ZAP-Hosting game server administration.

![](https://screensaver01.zap-hosting.com/index.php/s/SCREENSHOT_PLACEHOLDER/preview)

## Preparation

Before you begin, make sure that you have access to your Palworld game server administration in the ZAP-Hosting web interface.

:::info Configuration Access Requirement
You need access to your Palworld server administration and the `Configs` section, because this setting must be changed manually in the server configuration file.
:::

## Locate the correct configuration file

To change the guild player limit, you need to edit the `PalWorldSettings.ini` file.

In your ZAP-Hosting game server administration:

1. Open your **Palworld** server
2. Go to **Configs**
3. Open the file named `PalWorldSettings.ini`

This file contains the main gameplay configuration values for your Palworld server, including guild-related settings.

## Edit the max guild players setting

Inside `PalWorldSettings.ini`, look for the `OptionSettings` configuration line. The guild player limit is controlled by the `GuildPlayerMaxNum` key.

### Configuration value

Use the following setting to define the maximum number of players allowed in one guild:

```ini
GuildPlayerMaxNum=[your_value]
```

Replace `[your_value]` with the number of players you want to allow per guild.

### Default and example values

| Config key | Description | Default value |
| --- | --- | --- |
| `GuildPlayerMaxNum` | Maximum number of players allowed in one guild | `20` |

For example, if you want to allow up to `30` players per guild, set:

```ini
GuildPlayerMaxNum=30
```

:::note Edit the Existing OptionSettings Line
In Palworld, server settings are typically stored inside a single `OptionSettings=(...)` entry. You usually need to change the existing `GuildPlayerMaxNum` value within that line rather than adding a second duplicate entry.
:::

### Example snippet

Your configuration may look similar to this:

```ini
[/Script/Pal.PalGameWorldSettings]
OptionSettings=(GuildPlayerMaxNum=30)
```

If your file already contains many settings inside `OptionSettings=(...)`, only change the `GuildPlayerMaxNum` part and leave the other values unchanged.

:::caution Avoid Duplicate Keys
Do not add `GuildPlayerMaxNum` multiple times in the same configuration block. Duplicate keys can cause unexpected behavior or make it unclear which value the server will use.
:::

## Save and apply the changes

After editing the value:

1. Save the changes in `PalWorldSettings.ini`
2. Restart your Palworld server

A restart is required for the new guild players limit to be loaded by the server.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart server | Yes |
| Additional console command | No verified command required |

:::tip Restart Required
The updated max guild players value does not apply immediately while the server is running. You need to fully restart the server after saving the configuration.
:::

## Verify the new guild limit

Once the server has restarted, the new guild size limit should be active for players joining or managing guilds on your Palworld server.

If the change does not appear to apply, check the following:

- confirm that you edited the correct file: `PalWorldSettings.ini`
- confirm that `GuildPlayerMaxNum` is written correctly
- confirm that the value is inside the active `OptionSettings=(...)` configuration
- confirm that the server restart completed successfully

:::caution Configuration Formatting
Palworld configuration files are sensitive to formatting. If you accidentally remove commas, brackets, or other existing values inside `OptionSettings=(...)`, the server may ignore the setting or fail to load it correctly.
:::

## Conclusion

Congratulations, you have successfully changed the maximum guild players limit on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!