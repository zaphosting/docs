---
id: abioticfactor-configuration
title: "Abiotic Factor: Server Configuration"
description: "Explore how to customize Abiotic Factor server settings to optimize your gameplay experience and server performance → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-abioticfactor
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Abiotic Factor servers come with a wide range of configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.

<InlineVoucher />

## Accessing your Configuration File

Firstly, you will have to access your configuration file in order to edit any parameters. There are multiple ways to edit this file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

The most user-friendly method is by heading over to the **Settings** section on your game server's webinterface and searching for the appropriate settings there, as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Config file">

#### Via WI Config File

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Alternatively, for users who wish to directly edit the raw file, you can access this by heading over to the **Configs** section on your game server's webinterface and pressing the blue edit file button, as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/dPZLs4YMQopCpfd/preview)

This will open up a text editor directly on the site to enable you to edit it.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

The final method of accessing the raw file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your game server's webinterface as mentioned.

</TabItem>
</Tabs>

## Server Configuration Options

In the sections below, we present a tables which contain information about a wide range of configuration options that are available for Abiotic Factor dedicated servers.

### Important Server Settings

These settings can only be set directly through your gameserver's webinterface panel under the **Settings** section.

| Parameter Name     | Example                  | Description                                                                |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Server Name        | ZAP-Hosting Docs Test    | Set the name for your server                                               |
| Password           | iLoveZAP!2024            | Set a password for your server, or leave empty for none                    |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

### Gameplay Configuration Settings

Abiotic Factor contains a wide range of gameplay configuration options which are named **Sandbox Settings**. A file named **SandboxSettings.ini** should be present in the main `world` folder when accessing your server through FTP.

If you do not see this file, create this file on your system locally and copy the following contents: [Abiotic Factor Default SandboxSettings.ini GitHub](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

You can now adjust the values as you wish. Once ready, upload this file to the main `world` folder via FTP, at the following path:
```
../abiotic-factor/AbioticFactor/Saved/SaveGames/Server/Worlds/world
```

In the table below, we will summarise a few key gameplay settings that are found in the **SandboxSettings.ini** file. If you wish to view all available options, see the [Official GitHub Page](https://github.com/DFJacob/AbioticFactorDedicatedServer/blob/main/SandboxSettings.ini).

| Parameter Name               | Example    | Description                                                             |
| ---------------------------- | ---------- | ----------------------------------------------------------------------- | 
| LootRespawnEnabled           | true/false | Toggle whether loot should spawn around the map                         |
| PowerSocketsOffAtNight       | true/false | Toggle whether the power should be off during the night                 |
| DayNightCycleSpeedMultiplier | 1.0        | Set the speed multiplier of the day and night cycle                     |
| EnemySpawnRate               | 1.0        | Set the frequency at which enemies spawn                                |
| EnemyHealthMultiplier        | 1.0        | Set a multiplier for enemy health                                       |
| EnemyPlayerDamageMultiplier  | 1.0        | Set a multiplier for how much damange enemies do to players             |
| DetectionSpeedMultiplier     | 1.0        | Set a multiplier for how fast enemeies can spot/detect players          |
| PlayerXPGainMultiplier       | 1.0        | Set a multiplier for XP gained by players                               |
| ItemStackSizeMultiplier      | 1.0        | Set a multiplier for how much items can be stacked in an inventory slot |
| ItemDurabilityMultiplier     | 1.0        | Set a multiplier for item durability                                    |
| ShowDeathMessages            | true/false | Toggle whether players should be notified of entity deaths              |
| AllowRecipeSharing           | true/false | Toggle whether players can share item recipes                           |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

<InlineVoucher />
