---
id: palworld-max-guild-bases
title: "Palworld: Max Guild Bases"
description: "Learn how to change the max guild bases setting in Palworld by editing the BaseCampMaxNumInGuild value on your server. -> Learn more now"
sidebar_label: Palworld: Max Guild Bases
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Palworld allows you to control the maximum number of bases each guild can place on your server. In this guide, you will learn how to manually edit the correct configuration file in the ZAP-Hosting web interface, change the `BaseCampMaxNumInGuild` setting, and apply the change by restarting your server.



## Preparation

Before you begin, make sure that you have access to your Palworld game server in the ZAP-Hosting web interface.

:::info Required Access
You need access to your Palworld server administration and the `Configs` section to edit configuration files.
:::

## Locate the configuration file

To change the max guild bases setting, you need to edit the `PalWorldSettings.ini` file.

In the ZAP-Hosting web interface, open your Palworld game server administration and navigate to:

`Configs` → `PalWorldSettings.ini`

This file contains the main gameplay configuration values for your Palworld server, including guild and base limits.

## Edit the max guild bases value

Inside `PalWorldSettings.ini`, look for the `OptionSettings` section. The setting you need to change is:

`BaseCampMaxNumInGuild=[your_value]`

Replace `[your_value]` with the number of bases you want each guild to be allowed to place.

### Example configuration

If you want to allow up to `6` bases per guild, the entry should look like this:

```ini
BaseCampMaxNumInGuild=6
```

If the setting already exists, change only its value. If it is missing, add it inside the existing `OptionSettings` parameter list in the file.

:::note Default and vanilla maximum
Current reference information indicates that the default value is `4`, and the normal vanilla maximum is `10`. Values above `10` are generally not supported in an unmodded Palworld server.
:::

### Value reference

| Config key | Description | Default value | Vanilla maximum |
| --- | --- | --- | --- |
| `BaseCampMaxNumInGuild` | Maximum number of bases allowed per guild | `4` | `10` |

:::caution Use valid values
Set `BaseCampMaxNumInGuild` only to a reasonable supported value. Values above `10` typically require server-side modding and may not work correctly on a standard Palworld server.
:::

## Save the configuration

After changing the value, save the `PalWorldSettings.ini` file in the ZAP-Hosting configuration editor.

This stores the new max guild setting, but it will not take effect until the server has been restarted.

## Restart the server

Once the file has been saved, restart your Palworld server from the server administration interface.

A restart is required because Palworld reads the `PalWorldSettings.ini` configuration during server startup. Without restarting, the new guild base limit will usually not be applied.

### What you need to do afterward

No additional console commands are normally required after editing `BaseCampMaxNumInGuild`. After the restart, the new value should be active automatically.

| Action | Required |
| --- | --- |
| Save `PalWorldSettings.ini` | Yes |
| Restart the server | Yes |
| Run additional commands | No |

:::tip Test the new limit
After the restart, join the server and test the base placement limit with a guild to confirm that the new setting has been applied as expected.
:::

## Troubleshooting

If the max guild bases setting does not seem to change, check the following points.

### Verify the config entry

Make sure that `BaseCampMaxNumInGuild` is written correctly and uses a numeric value, for example:

```ini
BaseCampMaxNumInGuild=8
```

A typo in the key name or an invalid value can prevent the setting from working.

### Confirm the file was saved

Check that your changes were saved in `Configs` → `PalWorldSettings.ini` before restarting the server.

### Restart the server fully

A full server restart is required after changing this setting. If you only saved the file without restarting, the old value may still be in use.

### Stay within the vanilla limit

If you set a value above `10`, the server may ignore it or behave unexpectedly unless you are using compatible mods. If you are running a standard server, keep the value at `10` or below.

## Conclusion

Congratulations, you have successfully changed the maximum number of guild bases on your Palworld server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you!