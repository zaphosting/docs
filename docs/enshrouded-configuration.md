---
id: enshrouded-configuration
title: "Enshrouded: Enshrouded Server Configuration"
description: Information about configuring a Enshrouded gameserver from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Server Configuration
---

Enshrouded at launch has a few configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.

<iframe width="560" height="315" src="https://www.youtube.com/embed/wgvfvQdtwN4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Accessing your Configuration File

Firstly, you will have to access your configuration file in order to edit any parameters. There are multiple ways to edit this file.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

The most user-friendly method is by heading over to the **Settings** section on your gameserver's webinterface and searching for the appropriate settings there, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/5e65fc4a-45ec-4696-8170-e7c6384dac8d)

</TabItem>

<TabItem value="configs" label="Via WI Config file">

#### Via WI Config File

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Alternatively, for users who wish to directly edit the raw file, you can access this by heading over to the **Configs** section on your gameserver's webinterface and pressing the blue edit file button, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/dc4699bc-33fa-447d-ac59-2960b3b080f9)

This will open up a text editor directly on the site to enable you to edit it.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

The final method of accessing the raw file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Configs** section on your gameserver's webinterface as mentioned.

</TabItem>
</Tabs>

## Server Configuration Options

These are the currently available server configuration options that are provided by the game for customising your server, most notably the server name, password as well as some internal settings.

:::tip
We do not recommending changing the Port, IP or Directory settings, as these are automatically configured by the gameserver. Changing these values may potentially break your gameserver!
:::

| Parameter Name | Example                                 | Description                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                   | Your server's name                                          |
| password       | iLoveZAP!2024                           | Lock the server behind a password (private)                 |
| saveDirectory  | ./savegame (default)                    | Set a directory for where you want your saves to be stored  |
| logDirectory   | ./logs (default)                        | Set a directory for where you want your logs to be stored   |
| ip             | 123.123.123.123                         | Public IP the server runs on                                |
| gamePort       | 15636 (default)                         | The public port the server runs on                          |
| queryPort      | 15637 (default)                         | The public port the server can be accessed through          |
| slotCount      | 4                                       | The max amount of players that can join the server (max 16) |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.
