---
id: palworld-configuration
title: "Palworld: Palworld Server Configuration"
description: "Explore how to customize Palworld server settings for a tailored gaming experience and optimize your gameplay → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
Palworld servers come with a wide range of configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.
<YouTube videoId="Trs9Ysxa1gc" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/LsRSG5MHK9PyQZF/preview" title="Setup Palworld server in just a MINUTE! " description="Feel like you understand better when you see things in action? We’ve got you! Dive into our video that breaks it all down for you. Whether you're in a rush or just prefer to soak up information in the most engaging way possible!"/>

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

![](https://screensaver01.zap-hosting.com/index.php/s/2fNGG7jBdGRekKP/preview)

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

### Enable Crossplay support

Palworld dedicated servers supports the use of multiple platforms, so you can use crossplay. The Steam platform is set by default. If you want to activate support for Xbox, PS5 and Mac, you can do this in the game server administration under the settings. 

![img](https://screensaver01.zap-hosting.com/index.php/s/nD5kBoNH2JBfoxF/preview)

:::info
Crossplay between Steam & Microsoft Store/Xbox game versions is still not possible. Your server can either be set to work for Steam or for Microsoft Store/Xbox.
:::

:::info
On Xbox consoles, you cannot connect directly via the IP Address therefore if you plan to play on Xbox consoles, you will have to make your dedicated server public.

You should also set a server name that can be easily found, view our [Server Configuration](palworld-configuration.md) guide on how to do this.
:::

### Important Server Settings

These are server configuration options which are essential for customising your server's listing, protecting it through passwords and more internal settings.

:::tip
We do not recommending changing the Port or IP settings, as these are automatically configured by the game server. Changing the IP/Port values may potentially break your game server!
:::

| Parameter Name                 | Example                                 | Description                                                 |
| ------------------------------ | --------------------------------------- | ----------------------------------------------------------- | 
| ServerPlayerMaxNum             | 4                                       | The max amount of players that can join the server (max 32) |
| ServerName                     | ZAP-Hosting Docs Test                   | Your server's name                                          |
| ServerDescription              | This is a server that we are testing on | Your server's description                                   |
| AdminPassword                  | ctRQvhPAWVHq                            | The Admin Password used for admin commands                  |
| ServerPassword                 | iLoveZAP!2024                           | Lock the server behind a password (private)                 |
| PublicPort                     | 8211 (default)                          | The public port the server runs on                          |
| PublicIP                       | 123.123.123.123                         | Public IP the server runs on                                |
| RCONEnabled                    | true                                    | Toggle the use of RCON                                      |
| RCONPort                       | 8222                                    | Port number to be used for RCON                             |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

### Gameplay Configuration Settings

These are less important server configuration options, mostly for altering the gameplay and progression aswell as the map and world that you are playing in.

| Parameter Name                     | Description                                      | 
| ---------------------------------- | ------------------------------------------------ | 
| DayTimeSpeedRate                   | Set the time speed during the day                |
| NightTimeSpeedRate                 | Set the time speed during the night              |
| ExpRate                            | Set the rate at which you gain experience (XP)   |
| PalCaptureRate                     | Rate at which you capture Pals                   |
| PalSpawnNumRate                    | Pal appearance rate                              |
| PalDamageRateAttack                | Damage from pals multipiler                      |
| PalDamageRateDefense               | Damage to pals multipiler                        |
| PlayerDamageRateAttack             | Damage from player multipiler                    |
| PlayerDamageRateDefense            | Damage to player multipiler                      |
| PlayerStomachDecreaceRate          | Player hunger depletion rate                     |
| PlayerStaminaDecreaceRate          | Player stamina reduction rate                    |
| PlayerAutoHPRegeneRate             | Player auto HP regeneration rate                 |
| PlayerAutoHpRegeneRateInSleep      | Player sleep HP regeneration rate                |
| PalStomachDecreaceRate             | Pal hunger depletion rate                        |
| PalStaminaDecreaceRate             | Pal stamina reduction rate                       |
| PalAutoHPRegeneRate                | Pal auto HP regeneration rate                    |
| PalAutoHpRegeneRateInSleep         | Pal sleep health regeneration rate (in Palbox)   |
| BuildObjectDamageRate              | Damage to structure multipiler                   |
| BuildObjectDeteriorationDamageRate | Structure determination rate                     |
| CollectionDropRate                 | Getherable items multipiler                      |
| CollectionObjectHpRate             | Getherable objects HP multipiler                 |
| CollectionObjectRespawnSpeedRate   | Getherable objects respawn interval              |
| EnemyDropItemRate                  | Dropped Items Multipiler                         |
| DeathPenalty                       | Death penalty (None/Item)                        |
| GuildPlayerMaxNum                  | Max player of Guild                              |
| PalEggDefaultHatchingTime          | Time(h) to incubate massive egg                  |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

<InlineVoucher />
