---
id: moe-configuration
title: "Myth of Empires: Server Configuration"
description: Information about configuring a Myth of Empires game server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Server Configuration
---

Myth of Empires contains a wide range of configuration options that allows you to customise your server to your liking. In this guide, we will explore some of the currently available configuration parameters and explain each in more detail.

<iframe width="560" height="315" src="https://www.youtube.com/embed/a-tZnWIpOSg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Accessing your Configuration File

Firstly, you will have to access your configuration file in order to edit any parameters. There are multiple ways to edit this file.

:::tip
We highly recommend using the **Webinterface** method because MOE has a significant amount of configuration options as well as configuration files, which means it will take much longer to setup as opposed to directly editing values through the webinterface.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

The most user-friendly method is by heading over to the **Settings** section on your game server's webinterface and searching for the appropriate settings there, as seen below:

![image](https://github.com/zaphosting/docs/assets/42719082/5e65fc4a-45ec-4696-8170-e7c6384dac8d)

You will be able to see a wide variety of sections and settings in which you can directly edit the values.

</TabItem>

<TabItem value="configs" label="Via WI Config file">

#### Via WI Config File

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

Alternatively, for users who wish to directly edit raw configuration files, you can access these by heading over to the **Configs** section on your game server's webinterface. To edit a configuration file, simply press the blue edit file button, as seen below:

![image](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

This will open up a text editor directly on the site to enable you to edit it.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

The final method of accessing the raw file, is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [FTP file access](gameserver-ftpaccess.md) guide. However, this method takes longer and if you wish to directly edit the file contents, we recommend simply using the **Settings** section on your game server's webinterface as mentioned.

</TabItem>
</Tabs>

## Server Configuration Options

Here we have picked out some of the core and important server configuration options which you likely will want to change, including some internal settings.

:::tip
We do not recommending changing the Port, IP or Directory settings, as these are automatically configured by the game server. Changing these values may potentially break your game server!
:::

| Parameter Name | Example                                 | Description                                                 |
| -------------- | --------------------------------------- | ----------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                   | Your server's name                                          |
| password       | iLoveZAP!2024                           | Lock the server behind a password (private)                 |
| description    | This is a cool server!                  | Add a description for your server                           |
| gamemode       | PVE / PVP                               | Set the gamemode for your server                            |
| mapname        | Central Island                          | Set the map for your server                                 |
| difficulty     | 1                                       | Difficulty of your world                                    |

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.
