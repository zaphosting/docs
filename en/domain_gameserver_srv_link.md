---
id: domain_gameserver_srv_link
title: Domains: Set up game server forwarding
description: Information on how to set up a forwarding from your domain to a game server - ZAP-Hosting.com documentation
sidebar_label: Domain Gameserver Redirect
---

> Please note that it can always take up to 24 hours until changes to DNS entries become active!

## Forward domain to gameserver
You can either forward your domain completely or only a subdomain to your gameserver.
So no one has to remember the complicated IP address which consists of numbers but can simply connect to your game server using the domain.

## How does it work?

### Before we start creating entries in the DNS settings of the domain, here is some information in advance:
For forwarding the IP address, either a subdomain is created which forwards to the IP address of the game server, or you forward the entire domain without a subdomain.
This would be sufficient if the gameserver uses the default port of the game.
If the gameserver uses another port than the default port of the game, you need an additional **SRV entry** to forward the subdomain to the gameserver.

> Not all games support the forwarding of a domain to the game port via SRV entry, so inform yourself beforehand if your game supports SRV entries. 
your game supports SRV entries.


### SRV Service
The service name depends on the game and always starts with an **underscore**.
For example, the service name for a Minecraft gameserver is always **_minecraft** and for a FiveM gameserver **_cfx**.


### SRV protocol
As protocol we specify the internet protocol used for the connection. Here **UDP** and **TCP** are available.
Which protocol is used here also depends on the respective game, the specification of the protocol also always begins
with an **underscore** and is either **_udp** or **_tcp**.

## Preparation
To forward your domain to a gameserver without creating a subdomain, you first open your domain by
in the dashboard, then open the DNS management from the menu on the left.

![](https://screensaver01.zap-hosting.com/index.php/s/4y3sp7RFSS5RfbZ/preview)

There you can see all existing DNS entries for your domain.

![](https://screensaver01.zap-hosting.com/index.php/s/pBxr2seQiFqNyom/preview)

## ⛏ Forwarding the domain for Minecraft
First you have to find out the IP and port of the Minecraft server you want to redirect to.
With this information, the following steps can be followed.

In our example we use "testserver-domain.de" as domain name, "123.123.123.123" as server IP and "25500" as PORT.

### Creating A Record
To create a new record, use the "**New entry**" button.

![](https://screensaver01.zap-hosting.com/index.php/s/PQG6r895PQx8d4z/preview)

This opens a window with four fields that must be filled:

![](https://screensaver01.zap-hosting.com/index.php/s/HEgQJABCi8kBoz7/preview)

The "**Name**" is the main- or subdomain over which the forwarding to the IP takes place, this name is freely selectable. The "**Type**" is left at "**A**" in this step. At the "**Value**" only the IP of the Minecraft server has to be entered which was searched out before.
In our example it looks like this.

![](https://screensaver01.zap-hosting.com/index.php/s/bTA7DEzrdAWN385/preview)

Once saved this entry will be displayed correctly:

![](https://screensaver01.zap-hosting.com/index.php/s/KN4Mp5Akk8dpgn2/preview)

### Create SRV Record
Now you have to create a SRV record, this is used for port forwarding which is necessary if you don't have the default port.
Therefore click again on the button "**New entry**". 

![](https://screensaver01.zap-hosting.com/index.php/s/PQG6r895PQx8d4z/preview)

At "**Name**" you have to enter the protocol and the connection domain. The domain name which is entered there will be used later for the connection to the server. As "**Type**" the value "**SRV**" is selected in this step through the drop down menu:

![](https://screensaver01.zap-hosting.com/index.php/s/nRoKoX8QsR7SDYB/preview)

At the "**Value**" now three values have to be entered, first the priority which can be left at 0 by default, then as second the port of the gameserver in our example "25500" and last but not least the domain name of the just created "**A-Record**".

In our example it looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/NSiYs9WLjCeXEeW/preview)

### Troubleshooting & Result
> IMPORTANT! at the end of the entry a dot must be written, without this dot the system tries to append the domain. 

If this hint is not followed, the system will redirect minecraft.testserver-domain.de to minecraft.testserver-domain.de.testserver-domain.de and the redirection will fail.

Correctly created, the result looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/cA9DSgbNTk94rWN/preview)

## 🐌 Forwarding the domain for Fivem
First you have to find out the IP and port of the Fivem server you want to redirect to.
With this data the following steps can be followed.

In our example we use "testserver-domain.de" as domain name, "123.123.123.123" as server IP and PORT "30300".

### Creating A Record
To create a new record, use the "**New entry**" button.

![](https://screensaver01.zap-hosting.com/index.php/s/PQG6r895PQx8d4z/preview)

This opens a window with four fields that must be filled:

![](https://screensaver01.zap-hosting.com/index.php/s/HEgQJABCi8kBoz7/preview)

The "**Name**" is the main- or subdomain over which the forwarding to the IP takes place, this name is freely selectable. The "**Type**" is left at "**A**" in this step. At the "**Value**" only the IP of the Fivem server must be entered which was searched out before.
In our example it looks like this.

![](https://screensaver01.zap-hosting.com/index.php/s/mYw9mGaTrBNqHfS/preview)

Once saved this entry will be displayed correctly:

![](https://screensaver01.zap-hosting.com/index.php/s/8QHdpZewZ9EeMCa/preview)

### Create SRV Record
Now you have to create a SRV record, this is used for port forwarding which is necessary if you don't have the default port.
Therefore click again on the button "**New entry**".

![](https://screensaver01.zap-hosting.com/index.php/s/PQG6r895PQx8d4z/preview)

At "**Name**" you have to enter the protocol and the connection domain. The domain name which is entered there will be used later for the connection to the server. As "**Type**" the value "**SRV**" is selected in this step through the drop down menu:

![](https://screensaver01.zap-hosting.com/index.php/s/eFxnpWQWMXJNCaS/preview)

At the "**Value**" now three values have to be entered, first the priority which can be left at 0 by default, then as second the port of the gameserver in our example "30300" and last but not least the domain name of the just created "**A-Record**".

In our example it looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/EAB3MogM5J9ekoi/preview)

### Troubleshooting & Result
> IMPORTANT! at the end of the entry a dot must be written, without this dot the system tries to append the domain. 

If this hint is not followed, the system will redirect fivem.testserver-domain.de to fivem.testserver-domain.de.testserver-domain.de and the redirection will fail.

Correctly created the result looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/bRq4L9DoZzdtbNH/preview)
