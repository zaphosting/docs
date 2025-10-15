---
id: fivem-txadmin-discord-bot
title: "FiveM: txAdmin Discord Bot"
description: "Discover how to integrate and use the Discord bot with your txAdmin server for enhanced FiveM server management → Learn more now"
sidebar_label: txAdmin Discord Bot
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';


## Introduction
The txAdmin panel brings a lot of features for your FiveM server, including a Discord bot integration.
In this guide, we will show you how to set the Discord bot up and how to use it.

<InlineVoucher />

## Preparation

To set up the Discord bot for your txAdmin server, you first have to login to your txAdmin Panel.
The login information is displayed on the server's overview page, as shown here:

![img](https://screensaver01.zap-hosting.com/index.php/s/69LdTK3FyNZNXid/download)

:::info

This guide requires that txAdmin is already set up. To learn how to do that, you can visit our [FiveM: txAdmin Setup](fivem-txadmin-setup.md) guide.

:::

## Setup

### Creating a Discord Application

In order to set up the bot with txAdmin, you have to create a Discord application. Your bot is then assigned to it and acts under its name. To create such an application, please access [the Discord Developer Portal](https://discord.com/developers/applications/).

Now, you will create a new application by clicking on **New Application** and now you can assign a name as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/YPbPtRaPEHZ7pB4/preview)

Then, you create the appplication by clicking on **Create**. For the following steps, please write down the application ID now:

![](https://screensaver01.zap-hosting.com/index.php/s/tzBNzKBGzX8j4EK/preview)


### Configuring Bot and Getting Token

When creating an application, a bot is automatically created as well. You can easily get the token, by clicking **Reset Token**. Then, you will receive a user token which you should also note or write down somewhere:

![](https://screensaver01.zap-hosting.com/index.php/s/5ypmywwPJxRAFax/preview)

:::caution
Do not reveal the bot token to anyone so that your bot can work undisturbed and cannot cause a security issue. The token is like a secret key and should not be shared.
:::

On the same page, you have to scroll a little down and enable the "Server Members Intent" and save your changes:

![](https://screensaver01.zap-hosting.com/index.php/s/c5SnKpn4GXtGM38/preview)

### Inviting Bot to your Discord

To invite the bot, you have to insert the previously noted client ID in the following link at the appropriate place and then open the link in your browser and add the bot to your Discord server. It should look like this example:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=18432
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Getting Server and Channel IDs

To use the bot properly with txAdmin, you have to get the server ID, on which the bot will operate.
You can get it by right clicking the server-icon in Discord and clicking on **Copy Server ID**. Note that ID down as well.

Here is an example of how it should look:
![](https://screensaver01.zap-hosting.com/index.php/s/GBZGZGRPQQo95ys/preview)

You can also optionally set a channel where status updates like restart schedules would be posted, you can copy the ID the same way, just for a channel.
Don't forget that the bot has to have permission to read and write in that channel.

:::info
If you don't have the option to copy the server or channel ID, you have to enable developer mode in your Discord user Settings first:
![](https://screensaver01.zap-hosting.com/index.php/s/gLRRxNsLL8Eb5jj/preview)
:::

### Customizing Settings in txAdmin

Now you can enable the Discord bot in txAdmin and insert all the IDs and tokens you had saved earlier:

![](https://screensaver01.zap-hosting.com/index.php/s/HBAEi9c7dMLLCBy/preview)

#### Optional: Send Status Message

You can optionally send a status message once, which will constantly update the current server status, players, etc.
To do that, click on the Discord channel you want to have it in and type `/status add`. Make sure that the bot has permission to send messages in that channel.

This should create a message like that:

![](https://screensaver01.zap-hosting.com/index.php/s/XnzsK4NGZTHYsM6/preview)

Everything in that message can be customized on the Discord settings page within txAdmin.

## Conclusion

Setting up a Discord bot for txAdmin allows you to easily display your FiveM server status and other information in your Discord server. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
