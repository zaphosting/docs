---
id: foundry-configuration
title: "Foundry: Server Configuration"
description: "Explore how to customize Foundry server settings for optimal gameplay and server management → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Foundry servers come with a wide range of configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.

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

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

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

In the table below, we present important server configuration options that are currently available within Foundry servers.

:::tip
We do not recommending changing the Port settings, as these are automatically configured by the game server. Changing the Port values may potentially break your game server!
:::

### Important Server Settings

| Parameter Name     | Example                   | Description                                                                          |
| ------------------ | ------------------------- | ------------------------------------------------------------------------------------ | 
| server_world_name  | ZAPDocsTest               | Set the name of the world, which is also the folder save files will be stored within |
| server_name        | ZAP-Hosting Docs Test     | Name that appears on the server list for your server                                 |
| server_password    | iLoveZAP!2024             | Set a password required to join the server                                           |
| server_is_public   | true/false                | Toggle whether server is displayed on the server browser                             |
| server_port        | 3724 (default)            | Set the network port to be used by the game                                          |
| server_query_port  | 27015 (default)           | Set the query port used to return info about the server in the server list           |
| server_max_players | 32                        | Set the maximum amount of players that can be on the server at once                  |

### Gameplay Configuration Settings

| Parameter Name          | Example     | Description                                                                       |
| ----------------------- | ----------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty | true/false  | Toggle whether the factory should continue functioning without any players online |
| map_seed                | 42938743982 | Set a custom seed for world generation                                            |
| autosave_interval       | 300         | Set how often the server saves in seconds                                         |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

<InlineVoucher />
