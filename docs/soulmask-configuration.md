---
id: soulmask-configuration
title: "Soulmask: Server Configuration"
description: "Explore how to customize Soulmask server settings and optimize gameplay configurations for a tailored gaming experience → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver-soulmask
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

Soulmask servers come with a wide range of configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.

<InlineVoucher />

## Accessing your Configuration File

Firstly, you will have to access your configuration files in order to edit any parameters. You can adjust your server settings via the webinterface and your gameplay settings via FTP.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

The main method to access your server configuration options is by heading over to the **Settings** section on your game server's webinterface and searching for the appropriate settings there, as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
The Server must be stopped before the config can be edited, editing the config and restarting the server will result in any changes being undone.
:::

The main method to access your gameplay configuration file is through FTP. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide.

</TabItem>
</Tabs>

## Server Configuration Options
In the following sections, we will cover how to access the configuration options as well as explore some of the available configuration options for both server and gameplay settings.

### Important Server Settings

Currently, the only way to adjust server settings is through the **Settings** section on your game server's webinterface. In this section, you will be able to adjust the following:

| Parameter Name       | Example               | Description                                             |
| -------------------- | --------------------- | ------------------------------------------------------- | 
| Servername           | ZAP-Hosting Docs Test | Set the name for your server                            |
| Game server password | iLoveZAP!2024         | Set a password for your server, or leave empty for none |
| Admin password       | iLoveZAP!2024         | Set a password for Admin access                         |
| Gamemode             | PVE/PVP               | Select if you want your game to be PVE or PVP           |

Once you are done, make sure to use the save button at the base of the section and restart your server.

### Gameplay Configuration Settings

At the moment, the only option to access the configuration file is through FTP. Make sure to stop your server before editing the file, otherwise changes will likely become undone.

Head over to the following path and open the **GameXishu.json** file:
```
../soulmask/WS/Saved/GameplaySettings
```

This file consists a significant amount of gameplay configuration options that you can adjust to your liking.

After you complete your changes, make sure to save the file where appropriate and restart your server. The next time your server starts up, it will use the settings that you have provided.

<InlineVoucher />
