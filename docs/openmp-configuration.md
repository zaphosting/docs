---
id: openmp-configuration
title: "Open.mp: Open.mp Server Configuration"
description: "Discover how to customize Open.mp server settings to optimize your gameplay experience and server performance → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Open.mp servers come with a wide range of configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.

<InlineVoucher />

## Accessing your Configuration File

Firstly, you will have to access your configuration file in order to edit any parameters. There are multiple ways to edit this file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

The most user-friendly method to edit the basic settings is by heading over to the **Settings** section on your game server's webinterface and searching for the appropriate settings there, as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Keep in mind, not all configuration options will be accessible here. If you wish to configure everything, use the **WI Config File** tab to easily edit the necessary file directly in the webinterface.

</TabItem>

<TabItem value="configs" label="Via WI Config file">

#### Via WI Config File

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

For users who wish to directly edit the file and all of the configuration options, you can access this by heading over to the **Configs** section on your game server's webinterface and pressing the blue edit file button, as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/CTKjYX6ryo8JoWn/preview)

This will open up a text editor directly on the site to enable you to edit it.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

The final method of accessing the raw file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your game server's webinterface as mentioned.

Once logged in via your FTP Client, head over to the following directory, replacing `[zap_id]` with your own ZAP ID:
```
..g[zap_id]/gta-openmp/
```

At this path, find the `config.json` file and open it. This is the server configuration file that you should edit.

</TabItem>
</Tabs>

## Server Configuration Options

### Server Details

These are server configuration options which adjust your server's information in the public server browser. You will have to find these options in your configuration file, which can be done easily using `CTRL+F` in your browser or editing application to search.

| Parameter Name                 | Example                                 | Description                                                                        |
| ------------------------------ | --------------------------------------- | ---------------------------------------------------------------------------------- |
| name                           | ZAP-Hosting Docs Test                   | Set the hostname for your server                                                   |
| language                       | English                                 | Language which will appear in the server browser for your server                   |
| website                        | zap-hosting.com/                | Add a website that people can visit to gain more info about your server            |
| discord.invite                 | discord.gg/zaphosting           | Discord server link that appears in he server browser                              |
| banners.light                  | zap-hosting.com/lighticon.png   | Set a url to your light theme banner which appears in the server browser           |
| banners.dark                   | zap-hosting.com/darkicon.png    | Set a url to your dark theme banner which appears in the server browser            |
| game.map                       | ZAPtastic Stunt Map                     | The mapname that should appear in the server browser                               |
| game.mode                      | Survival                                | The gamemode that should appear in the server browser                              |
| announce                       | true                                    | Toggle whether your server should be displayed in the public server browser at all |
| enable_query                   | true                                    | Toggle whether your server's information should be displayed in the server browser |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

### Core Server Settings

These are more important server configuration options which adjust your server's functionality. You will have to find these options in your configuration file, which can be done easily using `CTRL+F` in your browser or editing application to search.

| Parameter Name                 | Example                                 | Description                                                                                     |
| ------------------------------ | --------------------------------------- | ----------------------------------------------------------------------------------------------- | 
| max_players                    | 50 (default)                            | Set the maximum amount of players that the server can hold at a time                            |
| max_bots                       | 0 (default)                             | Set maximum amount of NPC's the server can hold. This contributes towards the max_players total |
| password                       | iLoveZAP!2024                           | Set a password which players must use to connect to the server                                  |
| rcon.enable                    | true                                    | Toggle whether RCON feature should be enabled or disabled                                       |
| rcon.password                  | ZAP-IS-AWESOME                          | Set a password which must be used to be able to access RCON from clients                        |
| logging.enable                 | true                                    | Toggle whether logging should be used                                                           |
| logging.file                   | log.txt                                 | Path and filename to be used for logging if enabled                                             |
| logging.log_chat               | true                                    | Toggle whether the player chat should be shown in server console                                |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

## Gameplay & Networking Settings

Open.mp has a wide range of gameplay and networking options which lets you adjust your server to a great extent. Here we will summaries a few of the more important ones. You will have to find these options in your configuration file, which can be done easily using `CTRL+F` in your browser or editing application to search.

If you wish to adjust all of the settings, we recommend reading [open.mp's config.json guide](https://www.open.mp/docs/server/config.json) which presents all of the configuration options that are currently available.

:::tip
We do not recommending changing the Port or IP settings, as these are automatically configured by the game server. Changing the IP/Port values may potentially break your game server!
:::

| Parameter Name                 | Description                                                                                  | 
| ------------------------------ | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius           | Toggle whether chat radius should be on                                                      |
| game.chat_radius               | Set a radius limitation for chat                                                             |
| game.time                      | Set the global time that the server uses                                                     |
| game.use_nametags              | Toggles the drawing of nametags, health bars and armour bars above players                   |
| game.use_vehicle_friendly_fire | Enable friendly fire for team vehicles                                                       |
| game.vehicle_respawn_time      | Vehicle respawn time in miliseconds                                                          |
| game.weather                   | Global weathter that the server uses                                                         |
| network.bind                   | The IP Address that the server should use (we recommend not to change this for gameservers)  |
| network.port                   | The port the server should use (once again, we recommend not to change this for gameservers) |
| network.messages_limit         | Maximum number of messages a user can send per second                                        |
| network.player_timeout         | Time in miliseconds after which a player will timeout when no data is sent to server         |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

<InlineVoucher />
