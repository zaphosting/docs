---
id: voiceserver_voicebot_connection
title: Teamspeak: Connecting a voicebot to your Teamspeak server
description: Information on how to connect a voicebot to your Teamspeak server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Voicebot Connection
---


## 🎧 Connecting the bot to your TeamSpeak

To connect your voice bot to your TeamSpeak 3 server, you have to call it up in the control panel. Then, you will go to the **TeamSpeak Server** on the left as shown below:

![](https://screensaver01.zap-hosting.com/index.php/s/bL6Sbwk9H5qxcKp/preview)

Now you can select a TeamSpeak under **TeamSpeak Server** if this has also been booked with your account. If this is hosted externally, you can select **Custom Teamspeak Server** there as well.

The data can then be entered below, then just save and the voice bot connects to your TeamSpeak 3 server, here is an example:

![](https://screensaver01.zap-hosting.com/index.php/s/yaDmEkLHPcP3DBP/preview)


## 🎧 Connecting the bot to your Discord

To connect your voice bot to your Discord, you have to go to **TeamSpeak Server*, then under **TeamSpeak Server** you will have to select **Discord**.

![](https://screensaver01.zap-hosting.com/index.php/s/TqtZiW4SwWLsRSM/preview)

The **Discord Bot Token** and **Discord Bot Client ID** must then be entered. Then, the voice bot connects to your Discord server.


## 🎧 Getting your Discord Bot Token and Client ID

Since your Discord server doesn't have a direct IP address or port, there are a few steps to prepare before you can use your bot on a Discord server.

### Step 1: Create a Discord Application

The first thing you need to do is create a Discord application. Your bot is then assigned to it and acts under its name. To create such an application, please click this link: https://discordapp.com/developers/applications/me/.

Now, you will create a new application by clicking on **New App** and now you can assign a name as seen below:

![](https://screensaver01.zap-hosting.com/index.php/s/GPxfz74kQ2n5XMD/preview)

Then, you create the appplication by clicking on **Create App**. For the following steps, please write down the client ID now:

![](https://screensaver01.zap-hosting.com/index.php/s/jCDCgCQqfzLT2Dt/preview)


### Step 2: Create a Bot User

Your application now needs a user that the bot can use to connect to your server. 50 You can easily create this by clicking on **Create a Bot User**. Then, you will receive a user token which you should also note or write down somewhere:

![](https://screensaver01.zap-hosting.com/index.php/s/7cEqm59SDKAoSTS/preview)

>**Important: Please do not reveal the bot token to anyone so that your bot can work undisturbed. The token is like a secret key.**

### Step 3: Inviting your Bot to your Discord

To invite the bot, you have to insert the previously noted client ID in the following link at the appropriate place and then open the link in your browser:

>**https://discordapp.com/oauth2/authorize?&client_id=CLIENT_ID&scope=bot&permissions=0**

### Step 4: Configure the Bot's Panel

Now, you add the previously noted token and the client ID into the fields provided in the ZAP Hosting control panel and press **Save** at the bottom.

Then, you can start the bot. It should then connect to your Discord server within about 10 seconds. If you need help, please contact our support and we would be happy to help you!
