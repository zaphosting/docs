---
id: voiceserver-voicebot-connection
title: "Voiceserver: Linking your voicebot with your voice server"
description: "Discover how to connect your voice bot to TeamSpeak and Discord servers for seamless communication and control → Learn more now"
sidebar_label: Link to voice server
services:
  - voiceserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />



## Introduction

Do you want to connect your Voicebot to your TeamSpeak server, but you don't really know how to do it yet? No worries, in the following we will explain to you in detail how to do this!



## Connecting the bot to your TeamSpeak

To connect your voice bot to your TeamSpeak 3 server, you have to call it up in the control panel. Then, you will go to the **Server** on the left as shown below:

![](https://screensaver01.zap-hosting.com/index.php/s/bPPCgtQH4Q8NwxB/preview)

Now you can select a TeamSpeak under **Server** if this has also been booked with your account. If this is hosted externally, you can select **Custom Teamspeak Server** there as well.

The data can then be entered below, then just save and the voice bot connects to your TeamSpeak 3 server, here is an example:

![](https://screensaver01.zap-hosting.com/index.php/s/PDBa6qy53FgAKRY/preview)


## Connecting the bot to your Discord

To connect your voice bot to your Discord, you have to go to **Server**, then you will have to select **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/g73fPeqbesHiXSm/preview)

The **Discord Bot Token** and **Discord Bot Client ID** must then be entered. Then, the voice bot connects to your Discord server.


## Getting your Discord Bot Token and Client ID

Since your Discord server doesn't have a direct IP address or port, there are a few steps to prepare before you can use your bot on a Discord server.


### Creating a Discord Application

The first thing you need to do is create a Discord application. Your bot is then assigned to it and acts under its name. To create such an application, please access [the Discord Developer Portal](https://discord.com/developers/applications/).

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

On the same page, you have to scroll a little down and enable the **Presence Intent**, **Server Members Intent** and **Message Content Intent**, then save your changes:

![](https://screensaver01.zap-hosting.com/index.php/s/3Lkbs5Yb9grgrJ7/preview)


### Inviting Bot to your Discord

To invite the bot, you have to insert the previously noted client ID in the following link at the appropriate place and then open the link in your browser and add the bot to your Discord server. It should look like this example:
```
https://discordapp.com/oauth2/authorize?&client_id=1364549558197026816&scope=bot&permissions=0
```

![](https://screensaver01.zap-hosting.com/index.php/s/yKX4ocRtrZ7zLWB/preview)


### Configure the Bot's Panel

Now, you add the previously noted token and the client ID into the fields provided in the ZAP-Hosting control panel and press **Save** at the bottom:

![](https://screensaver01.zap-hosting.com/index.php/s/9Y79xx2FzGm73zW/preview)

Then, you can start the bot. It should then connect to your Discord server within about 10 seconds. 


## Conclusion

The Voicebot is a very useful and fun product for a lot of people. You can use it either on a Teamspeak server or on Discord. For further questions or assistance, please don't hesitate to contact our support team, which is available daily to assist you! 🙂

<InlineVoucher />
