---
id: vrising-configuration
title: "V Rising: Server Configuration"
description: "Explore how to customize V Rising server settings for optimal gameplay and control your server environment → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

V Rising servers come with a wide range of configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.

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

![](https://screensaver01.zap-hosting.com/index.php/s/3Dg6NCtN9akx8bg/preview)

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

In the sections below, we present tables which contain information about the configuration options that available, both for the actual server as well as gameplay configuration options.

:::tip
We do not recommending changing the Port settings, as these are automatically configured by the game server. Changing the Port values may potentially break your game server!
:::

### Important Server Settings

This section summarises the most important server settings, which are found within the **ServerHostSettings.json** configuration file. For the full list of configuration options, view  the [game's official GitHub guide](https://github.com/StunlockStudios/vrising-dedicated-server-instructions/blob/master/1.0.x/INSTRUCTIONS.md).

| Parameter Name     | Example                  | Description                                                                |
| ------------------ | ------------------------ | -------------------------------------------------------------------------- | 
| Name               | ZAP-Hosting Docs Test    | Set the name for your server                                               |
| Description        | ZAP is the best!         | Set description for your server                                            |
| Port               | 9876 (default)           | Set the network port to be used by the game                                |
| QueryPort          | 9877 (default)           | Set the query port used to return info about the server in the server list |
| MaxConnectedUsers  | 10                       | Set the maximum amount of players that can be on the server at once        |
| MaxConnectedAdmins | 4                        | Set the amount of admins that can join a full server                       |
| ServerFps          | 30 (recommended default) | Set the frame rate for your server, we recommend leaving this at default   |
| SaveName           | ZAPDocsTest              | Set the name of the world save                                             |
| Password           | iLoveZAP!2024            | Set a password for your server, or leave empty for none                    |
| ListOnMasterServer | true/false               | Toggle whether your server should be listed on the server list             |
| AutoSaveCount      | 15                       | Decide how many older saves should be stored                               |
| AutoSaveInterval   | 600                      | Set the interval between each auto save                                    |
| RCON Enabled       | true/false               | Toggle whether RCON is enabled                                             |
| RCON Port          | 25575                    | Set the RCON port                                                          |
| RCON Password      | iLoveZAP!2024            | Set the password for your RCON connection                                  |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

### Key Gameplay Configuration Settings

V Rising has a significant amount of parameters and configuration options present to adjust gameplay. Therefore in this section, we will summarise the most important ones, which are found within the **ServerGameSettings.json** configuration file.

| Parameter Name           | Example                       | Description                                                                                            |
| ------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------ | 
| GameDifficulty           | Normal                        | Set the game difficulty for your world                                                                 |
| GameModeType             | PvP, PvE                      | Set the type of gamemode for your world                                                                |
| CastleDamageMode         | Always, Never, TimeRestricted | Set when Castles can be damaged, using VSCastle parameter to select time for "TimeRestricted"          |
| PlayerDamageMode         | Always, TimeRestricted        | Set whether other players can be damaged, using VSPlayer parameter to select time for "TimeRestricted" |
| PvPProtectionMode        | Short, Medium, Long           | Set how long new players are invincible for                                                            |
| DeathContainerPermission | Anyone, ClanMembers           | Set who can loot dropped items when a players dies                                                     |
| CanLootEnemyContainers   | true/false                    | Set whether a player can loot another players chest that is not in the clan                            |
| BloodBoundEquipment      | true/false                    | Set whether you keep your equipment after death                                                        |
| TeleportBoundItems       | true/false                    | Set whether items can block you from teleporting via Vampire Waygates                                  |
| AllowGlobalChat          | true/false                    | Toggle the global chat                                                                                 |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

<InlineVoucher />
