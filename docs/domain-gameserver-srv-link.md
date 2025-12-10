---
id: domain-gameserver-srv-link
title: "Domain: Set up game server forwarding"
description: "Discover how to forward your domain or subdomain to a game server for easy access and improved connectivity → Learn more now"
sidebar_label: Gameserver forwarding
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduction
You can either forward your domain completely or only a subdomain to your game server. This is useful because it allows people to connect to your game server via a domain, instead of having to remember complicated IP addresses composed of numbers only. In this guide, we will cover the process of setting up a domain to forward to your game server via DNS records.

<InlineVoucher />

:::info
Please note that it can always take up to 24 hours until changes to DNS entries become active!
:::

## Functionality

For forwarding the IP address, either a subdomain is created which forwards to the IP address of the game server, or you forward the entire domain without a subdomain. This would be sufficient if the game server uses the default port of the game. If the game server uses another port than the default port of the game, you need an additional **SRV entry** to forward the subdomain to the game server.

:::info
Not all games support the forwarding of a domain to the game port via SRV entry, so inform yourself beforehand if your game supports SRV entries. 
:::

### SRV Service

The service name depends on the game and always starts with an **underscore**. For example, the service name for a Minecraft game server is always **_minecraft** and for a FiveM game server **_cfx**.

### SRV protocol

As protocol we specify the internet protocol used for the connection. Here **UDP** and **TCP** are available. Which protocol is used here also depends on the respective game, the specification of the protocol also always begins
with an **underscore** and is either **_udp** or **_tcp**.

## Preparation

To forward your domain to a game server without creating a subdomain, you first open your domain by in the dashboard, then open the DNS management from the menu on the left.

![](https://screensaver01.zap-hosting.com/index.php/s/X8q3jdigEdZrRaB/preview)

There you can see all existing DNS entries for your domain.

![](https://screensaver01.zap-hosting.com/index.php/s/zRzCnwbqYxaeSiJ/preview)

## Domain forwarding (Minecraft)

First you have to find out the IP and port of the Minecraft server you want to redirect to. With this information, the following steps can be followed.

In our example we use `testserver-domain.de` as domain name, `123.123.123.123` as server IP and `25500` as PORT.

### Create A Record

To create a new record, use the **New entry** button.

This opens a window with four fields that must be filled:

![](https://screensaver01.zap-hosting.com/index.php/s/BYNiFMMwdwjEHwZ/preview)

The **Name** is the main- or subdomain over which the forwarding to the IP takes place, this name is freely selectable. The **Type** is left at **A** in this step. At the **Value** only the IP of the Minecraft server has to be entered which was searched out before. In our example it looks like this.

![](https://screensaver01.zap-hosting.com/index.php/s/aRYpxgrySQqzton/preview)

Once saved this entry will be displayed correctly:

![](https://screensaver01.zap-hosting.com/index.php/s/eFLm8oqbo4cLtn8/preview)

### Create SRV Record

Now you have to create a SRV record, this is used for port forwarding which is necessary if you don't have the default port.
Therefore click again on the button **New entry**. 

At **Name** you have to enter the protocol and the connection domain. The domain name which is entered there will be used later for the connection to the server. As **Type** the value **SRV** is selected in this step through the drop down menu:

![](https://screensaver01.zap-hosting.com/index.php/s/pH9F5kZins8wHn4/preview)


At the **Value** now three values have to be entered, first the priority which can be left at 0 by default, then as second the port of the game server in our example `25500` and last but not least the domain name of the just created **A-Record**.

In our example it looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/Gf8kkc5srHEbC2N/preview)


### Troubleshooting & Result

:::important
At the end of the entry a dot must be written, without this dot the system tries to append the domain. 
:::

If this hint is not followed, the system will redirect `minecraft.testserver-domain.de` to `minecraft.testserver-domain.de.testserver-domain.de` and the redirection will fail.

## Domain forwarding (FiveM)
First you have to find out the IP and port of the FiveM server you want to redirect to. With this data the following steps can be followed.

In our example we use `testserver-domain.de` as domain name, `123.123.123.123` as server IP and PORT `30300`.

### Create A-Record
To create a new record, use the **New entry** button.

This opens a window with four fields that must be filled:

![](https://screensaver01.zap-hosting.com/index.php/s/FigmCXEc3eJYz78/preview)


The **Name** is the main- or subdomain over which the forwarding to the IP takes place, this name is freely selectable. The **Type** is left at **A** in this step. At the **Value** only the IP of the FiveM server must be entered which was searched out before. In our example it looks like this.

![](https://screensaver01.zap-hosting.com/index.php/s/7dBKaJ4xomTiS9C/preview)

Once saved this entry will be displayed correctly:

![](https://screensaver01.zap-hosting.com/index.php/s/5DppfyXsADTT85t/preview)

### Create SRV Record
Now you have to create a SRV record, this is used for port forwarding which is necessary if you don't have the default port.
Therefore click again on the button **New entry**.

At **Name** you have to enter the protocol and the connection domain. The domain name which is entered there will be used later for the connection to the server. As **Type** the value **SRV** is selected in this step through the drop down menu:

![](https://screensaver01.zap-hosting.com/index.php/s/Yab6ksJNJFTLAeB/preview)


At the **Value** now three values have to be entered, first the priority which can be left at 0 by default, then as second the port of the game server in our example `30300` and last but not least the domain name of the just created **A-Record**.

In our example it looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/te4LJ3yKRpTSi5W/preview)


### Troubleshooting & Result

:::important
At the end of the entry a dot must be written, without this dot the system tries to append the domain. 
:::

If this hint is not followed, the system will redirect `fivem.testserver-domain.de` to `fivem.testserver-domain.de.testserver-domain.de` and the redirection will fail.

<InlineVoucher />
