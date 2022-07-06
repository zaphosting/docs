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

![image](https://user-images.githubusercontent.com/13604413/172062132-fbd375ad-4fee-4c28-af6f-370005f560eb.png)


There you can see all existing DNS entries for your domain.

![image](https://user-images.githubusercontent.com/13604413/172062190-77af42af-4639-4908-91d5-1320684049a9.png)


## ⛏ Forwarding the domain for Minecraft
First you have to find out the IP and port of the Minecraft server you want to redirect to.
With this information, the following steps can be followed.

In our example we use "testserver-domain.de" as domain name, "123.123.123.123" as server IP and "25500" as PORT.

### Creating A Record
To create a new record, use the "**New entry**" button.

This opens a window with four fields that must be filled:

![image](https://user-images.githubusercontent.com/13604413/172062215-06dc635b-eec9-4ad2-9901-0b7554b7e7b9.png)


The "**Name**" is the main- or subdomain over which the forwarding to the IP takes place, this name is freely selectable. The "**Type**" is left at "**A**" in this step. At the "**Value**" only the IP of the Minecraft server has to be entered which was searched out before.
In our example it looks like this.

![image](https://user-images.githubusercontent.com/13604413/172062230-a8019e62-9c82-4601-af01-ac5340c1cba5.png)

Once saved this entry will be displayed correctly:

![image](https://user-images.githubusercontent.com/13604413/172062255-ea720a1b-65e1-4eb3-bf65-bfd83fb03a6c.png)


### Create SRV Record
Now you have to create a SRV record, this is used for port forwarding which is necessary if you don't have the default port.
Therefore click again on the button "**New entry**". 

At "**Name**" you have to enter the protocol and the connection domain. The domain name which is entered there will be used later for the connection to the server. As "**Type**" the value "**SRV**" is selected in this step through the drop down menu:

![image](https://user-images.githubusercontent.com/13604413/172062272-0394edff-aa9c-4587-9a17-77ac74dc3cb5.png)


At the "**Value**" now three values have to be entered, first the priority which can be left at 0 by default, then as second the port of the gameserver in our example "25500" and last but not least the domain name of the just created "**A-Record**".

In our example it looks like this:

![image](https://user-images.githubusercontent.com/13604413/172062452-ec6e0fdb-5c6d-4a30-b578-933f5da0446d.png)


### Troubleshooting & Result
> IMPORTANT! at the end of the entry a dot must be written, without this dot the system tries to append the domain. 

If this hint is not followed, the system will redirect minecraft.testserver-domain.de to minecraft.testserver-domain.de.testserver-domain.de and the redirection will fail.

## 🐌 Forwarding the domain for FiveM
First you have to find out the IP and port of the FiveM server you want to redirect to.
With this data the following steps can be followed.

In our example we use "testserver-domain.de" as domain name, "123.123.123.123" as server IP and PORT "30300".

### Creating A Record
To create a new record, use the "**New entry**" button.

This opens a window with four fields that must be filled:

![image](https://user-images.githubusercontent.com/13604413/172062501-ad0a0629-3c36-480e-96bb-1c09960d7e78.png)


The "**Name**" is the main- or subdomain over which the forwarding to the IP takes place, this name is freely selectable. The "**Type**" is left at "**A**" in this step. At the "**Value**" only the IP of the FiveM server must be entered which was searched out before.
In our example it looks like this.

![image](https://user-images.githubusercontent.com/13604413/172062490-cf3bab81-573c-448a-98a1-fcd12ec0823d.png)


Once saved this entry will be displayed correctly:

![image](https://user-images.githubusercontent.com/13604413/172062510-8b24fc94-49fa-440e-abb2-7cff693be8d2.png)


### Create SRV Record
Now you have to create a SRV record, this is used for port forwarding which is necessary if you don't have the default port.
Therefore click again on the button "**New entry**".

At "**Name**" you have to enter the protocol and the connection domain. The domain name which is entered there will be used later for the connection to the server. As "**Type**" the value "**SRV**" is selected in this step through the drop down menu:

![image](https://user-images.githubusercontent.com/13604413/172062652-3400e743-37ba-4906-8c30-8162d05c865c.png)


At the "**Value**" now three values have to be entered, first the priority which can be left at 0 by default, then as second the port of the gameserver in our example "30300" and last but not least the domain name of the just created "**A-Record**".

In our example it looks like this:

![image](https://user-images.githubusercontent.com/13604413/172062644-89dcfad2-073c-435f-839d-115dba26bf94.png)


### Troubleshooting & Result
> IMPORTANT! at the end of the entry a dot must be written, without this dot the system tries to append the domain. 

If this hint is not followed, the system will redirect fivem.testserver-domain.de to fivem.testserver-domain.de.testserver-domain.de and the redirection will fail.
