---
id: rimworldtogether-configuration
title: "RimWorld Together: Server Configuration"
description: "Explore RimWorld Together server settings to customize gameplay and manage access for a tailored multiplayer experience → Learn more now"
sidebar_label: Server Configuration
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

RimWorld Together servers come with a wide range of configuration parameters that you can customise to your likings. In this guide, we will explore all of the currently available configuration parameters and explain each in more detail.

<InlineVoucher />

## Accessing your Configuration File

Firstly, you will have to access your configuration file in order to edit any parameters. Currently, the only way to edit these files is by accessing your server via FTP. If you are not familiar with using FTP, we recommend you to have a look at the [Access via FTP](gameserver-ftpaccess.md) guide.

:::note
The Server must be stopped before any configs can be edited, editing a config and restarting the server will result in any changes being undone.
:::

With your FTP client now ready, navigate to the following directory:
```
../rimworld-together/Core
```

This folder will contain a wide variety of `.json` configuration files for your RimWorld Together server.

![](https://screensaver01.zap-hosting.com/index.php/s/76g3TcY9TCLyFsH/preview)

## Server Configuration Options

In the sections below, we present information on how to adjust a few popular and common configuration options for your RimWorld Together server. You can learn more about each of the files by reading the [official RimWorld Together guide](https://rimworldtogether.github.io/Guide/selfhosting/getting-started.html#core) which covers configuration options.

:::tip
We do not recommending changing the Port or IP settings found in the **ServerConfig.json** file, as these are automatically configured by the game server. Changing these values may potentially break your game server!
:::

#### Server Whitelist

Toggling the server whitelist is simply. Open the **Whitelist.json** configuration file and set the `UseWhitelist` parameter to true.

Now adjust the `WhitelistedUsers` parameter, adding the in-game usernames of people that you wish to add to the list. Anyone who is not on this list, will now not be able to connect.

#### Gameplay Settings

You can adjust a wide range of difficulty parameters for your RimWorld Together servers via the **DifficultyValues.json** file.

Adjusting the Savegame settings is also possible through the **WorldConfig.json** file. It is recommended that you don't edit this whilst being deep into your playthrough as it may ruin the experience.

<InlineVoucher />
