---
id: foundry-firststeps-connect
title: "Foundry: Connect to Foundry Server"
description: Information about connecting to a Foundry server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Connect to Server
---



## Introduction

In this guide, we will explore how to connect to your Foundry server. There are two methods of connecting, either directly via the IP address of your server or through the server list. We recommend configurating the server to your likings beforehand, learn more about this through our [Foundry Configuration guide](foundry-configuration.md).

## Direct Connect via IP

### Obtaining Server IP

Firstly, you need to know the IP and Port of your Foundry server in order to be able to direct connect. Simply head over to your [ZAP-Hosting webinterface](https://zap-hosting.com/en/customer/) on the site, and have the full IP and Port on hand.

![image](https://screensaver01.zap-hosting.com/index.php/s/XmmnD2d9C3xm4SE/preview)

If you are running your Foundry server as an external dedicated server, your IP will be of the host machine and the Port will be the one which you have set in your configuration file (by default this is 3724). Check out our [Foundry Configuration guide](foundry-configuration.md) for more information about the port.

### Connecting in-game

Begin by launching Foundry from your game launcher. In the main menu, select **Multiplayer**, followed by the **IP Direct Connect** option.

![image](https://screensaver01.zap-hosting.com/index.php/s/KS9jQiZtgzfkfaW/preview)

A prompt will appear and into this you should input the details of your server including the IP Address and Port that you previously obtained from your webinterface, or the IP and Port of your own external dedicated server instance.

There is also an optional password field which you should use if your server has a password configured, otherwise you may leave this empty.

![image](https://screensaver01.zap-hosting.com/index.php/s/5kNMZyrkDwt9ZAy/preview)

If you cannot join the server successfully and receive a timeout error, please ensure that the inputted IP and Port is correct and that your server is online. You can use the console section of your webinterface for your Foundry server to help with debugging.

## Connect via Server List

The easier option for connecting to your server is through the server list. However, this does require your server to be set to public within the server configuration parameters. 

Please check out our [Foundry Server Configuration guide](foundry-configuration.md) in order to add the appropriate `server_name` and `server_is_public` parameters into your configuration file or via the webinterface panel.

Once this is done, in the main menu select **Multiplayer**, followed by the **Join Steam Server** option. In here, search for the server name that you have set in the configuration and you should be able to find your server and connect.

![image](https://screensaver01.zap-hosting.com/index.php/s/FfTPgx7Q6wbwn4g/preview)