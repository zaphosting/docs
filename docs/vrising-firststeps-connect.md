---
id: vrising-firststeps-connect
title: "V Rising: Connect to V Rising Server"
description: "Discover how to connect to your V Rising server directly or via server list for seamless gameplay setup → Learn more now"
sidebar_label: Connect to Server
services:
  - gameserver-vrising
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction

In this guide, we will explore how to connect to your V Rising server. There are two methods of connecting, either directly via the IP address of your server or through the server list. We recommend configurating the server to your likings beforehand, learn more about this through our [Server Configuration](vrising-configuration.md) guide.

<InlineVoucher />

## Direct Connect via IP

### Obtaining Server IP

Firstly, you need to know the IP and Port of your V Rising server in order to be able to direct connect. Simply head over to your [ZAP-Hosting webinterface](https://zap-hosting.com/en/customer/) on the site, and have the full IP and Port on hand.

![](https://screensaver01.zap-hosting.com/index.php/s/4L86LFeqL8o96kn/preview)

If you are running your V Rising server as an external dedicated server, your IP will be of the host machine and the Port will be the one which you have set in your configuration file (by default this is 9876). Check out our [Server Configuration](vrising-configuration.md) guide for more information about the port.

### Connecting in-game

Begin by launching V Rising from your game launcher. In the main menu, select **Play**, followed by the **Online Play** option.

![](https://screensaver01.zap-hosting.com/index.php/s/cJcnRAX2Wj7sogx/preview)

Select the gamemode you will be playing, or alternatively just press **Show all Servers** in the bottom right to get straight to the server browser. 

Now press the **Direct Connect** button at the bottom and input your IP followed by the port, as an example: `123.456.679.123:9876`. If there is a password, the game will prompt you to enter this in after connecting.

![](https://screensaver01.zap-hosting.com/index.php/s/tfroQDEgmr3p2D8/preview)

If you cannot join the server successfully and receive a timeout error, please ensure that the inputted IP and Port is correct and that your server is online. You can use the console section of your webinterface for your V Rising server to help with debugging.

## Connect via Server List

The easier option for connecting to your server is through the server list. However, this does require your server to be set to public within the server configuration parameters. 

Please check out our [Server Configuration](vrising-configuration.md) in order to add the appropriate `Name` and `ListOnMasterServer` parameters into your configuration file or via the webinterface panel.

Once this is done, in the main menu select **Play**, followed by the **Online Play** option and once again press **Show all Servers** in the bottom right. You can now use the server browser to find your server using the provided filters such as name search, game mode, difficulty and much much more.

![](https://screensaver01.zap-hosting.com/index.php/s/CGoZBkRsGTwkTQg/preview)

<InlineVoucher />
