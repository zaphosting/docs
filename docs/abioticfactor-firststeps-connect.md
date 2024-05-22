---
id: abioticfactor-firststeps-connect
title: "Abiotic Factor: Connect to Abiotic Factor Server"
description: Information about connecting to a Abiotic Factor server from ZAP-Hosting - ZAP-Hosting.com documentation
sidebar_label: Connect to Server
---



## Introduction

In this guide, we will explore how to connect to your Abiotic Factor server. There are two methods of connecting, either directly via the IP address of your server or through the server list. We recommend configurating the server to your likings beforehand, learn more about this through our [Abiotic Factor Configuration guide](abioticfactor-configuration.md).

## Direct Connect via IP

### Obtaining Server IP

Firstly, you need to know the IP and Port of your Abiotic Factor server in order to be able to direct connect. Simply head over to your [ZAP-Hosting webinterface](https://zap-hosting.com/en/customer/) on the site, and have the full IP and Port on hand.

![image](https://screensaver01.zap-hosting.com/index.php/s/FYdNBfyWHb6g9MJ/preview)

If you are running your Abiotic Factor server as an external dedicated server, your IP will be of the host machine and the Port will be the one which you have set in your configuration file (by default this is 7777). Check out our [Abiotic Factor Configuration guide](abioticfactor-configuration.md) for more information about the port.

### Connecting in-game

Abiotic Factor makes use of Steam Serves which means you can use your gameserver's IP Address to directly add your server.

Open up Steam and head over to the **View->Game Servers** tab.

![image](https://screensaver01.zap-hosting.com/index.php/s/9Yi2ymdSRj3WDbx/preview)

Now head over to the **Favorites** section and press the plus icon at the bottom to open the Direct IP menu.

![image](https://screensaver01.zap-hosting.com/index.php/s/7dFW9ANQmeTNdz9/preview)

Into the new prompt, input your server's IP Address and Port in the following format: `[your_ipaddress]:[your_port]`. Press **OK** when ready and it should add the server to your list. If you recieve an error, ensure that you have inputted both parts of the Direct IP correctly.

![image](https://screensaver01.zap-hosting.com/index.php/s/ir5Hy54fc95CDbs/preview)

You should now be able to see your Abiotic Factor server in the Steam Game Servers list. Simply select the server and use the **Connect** button at the bottom of the menu to connect to your server.

## Connect via Server List

The easier option for connecting to your server is through the server list. Make sure to set an appropriate server name by heading over to the **Settings** section on your gameserver's webinterface.

We also recommend setting up a password under the same area to secure your server. Once ready, restart your server to put the new options into effect.

Now head over to your game, select **Enter the Facility** followed by **Join a Server**. On this page, use the top search bar to search for your server's name.

:::info
Be patient as it may take some time for the search results to appear, or alternatively connect through Direct IP as above.

Ensure that the **Show Dedicated** toggle is ticked, otherwise your server won't display.
:::

![image](https://screensaver01.zap-hosting.com/index.php/s/B5JjGR93qkp9WXK/preview)