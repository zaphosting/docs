---
id: domain_gameserver_srv_link
title: Domains: Set up game server forwarding
description: Information on how to set up a forwarding from your domain to a game server - ZAP-Hosting.com documentation
sidebar_label: Domain Gameserver Redirect
---

> Please note that it can always take up to 24 hours for changes to DNS entries to become active!

## Forward domain to game server

You can either forward your entire domain or just a subdomain to your game server.
This way, no one has to remember the complicated IP address, which consists of numbers, but can simply connect to your game server using the domain.
In the following examples, we will create two subdomains and forward them to a Minecraft game server and a FiveM game server.


## How does it work?

### Before we start creating entries in the DNS settings of the domain, here is some information in advance:
For the forwarding of the IP address, either a subdomain is created which forwards to the IP address of the game server, or you forward the entire domain without a subdomain.
This would already be sufficient if the game server uses the standard port of the respective game.
However, if the game server uses a port other than the standard port of the respective game, a so-called **SRV entry** is also required to forward the subdomain to the game server.
is required to forward the subdomain to the correct port.

> Not all games support the forwarding of a domain to the game port via SRV entry, so find out beforehand whether your game supports SRV entries. 
your game supports SRV entries.


### SRV Service

The service name depends on the game and always starts with an **underscore**.
For example, the service name for a Minecraft game server is always **_minecraft** and for a FiveM game server **_cfx**.


### SRV Protocol

As protocol, we specify the Internet protocol used for the connection. Here **UDP** and **TCP** are available.
Which protocol is used here also depends on the game in question.
with an **underscore** and is either **_udp** or **_tcp**.

## Preparation
In order to forward your domain to a game server without creating a subdomain, you first open your domain by
in the dashboard, then open the DNS administration via the menu on the left side.


![](https://screensaver01.zap-hosting.com/index.php/s/arRoyHj3wR4sCGw/preview)

![](https://screensaver01.zap-hosting.com/index.php/s/3WEqw4aTdqaanYi/preview)

There you will see all existing DNS entries for your domain.
If you have not yet created your own entries there, you can delete all the existing entries by clicking 
on the red bin on the right side.

![](https://screensaver01.zap-hosting.com/index.php/s/F5kEtW5XHx5Y8Lk/preview)

## Forwarding the domain without subdomain but with the standard port
As long as you want to use the main domain AND the target server has the standard port, you are in the right place!

### Minecraft + Fivem
You can click on **New entry** in your domain administration and will then land in the creation for a new DNS entry.
As **Name** we select the name of the domain, for example **minecraft-server.de**, the **Type is A** and the **Value** corresponds to the IP of your game server.
IP of your game server, in this case **88.214.57.116**.
You can leave the **TTL** field untouched.

![](https://screensaver01.zap-hosting.com/index.php/s/iCX7mJScBTZSqQe/preview)

When you have entered everything, click on **Save**, the entry will then be stored in the DNS settings and will be accessible within 24 hours.
within 24 hours. You can then connect to your Fivem server or Minecraft server with the domain "minecraft-server.de"!

> It can always take **up to** 24 hours for new DNS entries to become active. Unfortunately, no one has any influence on this.


## Forwarding the domain with subdomain and with the default port

### Minecraft + Fivem
If you want to create a subdomain, for example lobby.minecraft-server.de, you do this as in the previous example, 
but do not enter the name of the domain in **Name**, but the name of the subdomain.
This looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/NzmLzAJkgcaZpqa/preview)

Click on **Save** after entering the data.
It can then take up to 24 hours until this has been globally adopted.
You can then connect to your Minecraft / Fivem server with lobby.minecraft-server.de.

## Forwarding of the domain without standard port and without subdomain

If the game port is not used, a so-called **SRV entry** must also be created in order to forward not only the domain
to the IP of the game server but also to the correct port.

At first, you create a subdomain as usual, which points to the IP of your server.
The name of the subdomain does not matter at all.
In our example, our subdomain is called "SRV".
It looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/DXTB2MtjC8FcgqE/preview)

Subsequently, another record must be created. In this case, the aforementioned pure SRV entry.
Here we distinguish between Fivem and Minecraft.

### Minecraft
If you have a Minecraft server, you are in the right place!
Click on **New entry** in your domain administration again.
Here we work through line by line to complete the link.

The **Name** field contains the name of the service, which in this case is our Minecraft game server, i.e. **_minecraft**. Also the protocol type, in this case **_tcp** as well as the **domain name** is to be entered there.
This would then look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/MPtWqE3WHkYBKGr/preview)

The **Type** field indicates what type of entry it is, in this case it is a **SRV** entry.

The **Value** field contains the port of the server as well as the subdomain that you initially created and which points to the IP of the server. So in this case **0 2132 srv.minecraft-server.de**, where **2132** is the **port of the game** and **srv.minecraft-server.de** is the domain to which the redirection is made.
In our example, it would look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/TjAcNMW4jRMFema/preview)
 
The value **0** is not relevant and always remains the same. You also leave the field **TTL** and **Prio** untouched.

The completed full SRV entry looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/34ByFQMrs3YKkzT/preview)

Then you can click on **Save**.

> It is important that a **dot** is set in the **value** field at the end of the domain!

### FiveM
With Fivem, this is almost identical to Minecraft.
Here, too, we create a new entry by clicking on **New Entry**.
Here we also work through line by line to complete the link.

The **Name** field contains the name of the service, which in this case is our Fivem game server, i.e. **_cfx**. The protocol type, in this case **_udp**, as well as the **domain name** must also be entered there.
This would then look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/jj5epyCGe5pDLsz/preview)

The **Type** field indicates what type of entry it is, in this case it is a **SRV** entry.

The **Value** field contains the port of the server as well as the subdomain you initially created and which points to the IP of the server. So in this case **0 33121 srv.fivem-server.com**, where **33121** is the **port from the Fivem server** and **srv.fivem-server.com** is the domain to which the redirection is made.
In our example, it would look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/nHoMS5FkXmCWYGQ/preview)
 
The value **0** is not relevant and always remains the same. The field **TTL** and **Prio** are also left untouched.

The complete SRV entry looks as follows:

![](https://screensaver01.zap-hosting.com/index.php/s/GaJ4H3afityAked/preview)

Then you can click on **Save**.

> It is important that a **dot** is set in the **value** field at the end of the domain!

## Forwarding the domain without standard port and with subdomain

It is almost exactly the same with a subdomain. You first create a subdomain as described above and forward it to the IP address of your game server. 
For example, "docs.fivem-server.de" or "docs.minecraft-server.de".
This would then look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/dKpXBQgQG7frCfR/preview)

Now we differentiate again between FiveM and Minecraft. However, the procedure is identical 1:1 for both.

### Minecraft

You create a new entry by clicking on **New entry**.
Here we go through the possible fields one by one.

The **Name** field contains the name of the service, which in this case is our Minecraft game server, i.e. **_minecraft**. The protocol type, in this case **_tcp**, as well as the **domain name WITH the initially created subdomain** must also be entered there.
This would then look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/nLMqFxsAAabd8wT/preview)

The **Type** field indicates what type of entry it is, in this case it is a **SRV** entry.

The **Value** field contains the port of the server as well as the subdomain you initially created and which points to the IP of the server. So in this case **0 2132 docs.minecraft-server.com**, where **2132** is the **port of the game** and **docs.minecraft-server.com** is the domain to which the redirection is made.
In our example, it would look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/gm6bKkPGSEX7osx/preview)
 
The value **0** is not relevant and always remains the same. The field **TTL** and **Prio** are also left untouched.

The complete SRV entry looks as follows:

![](https://screensaver01.zap-hosting.com/index.php/s/DFjAbKwLoZCtgpS/preview)

Then you can click on **Save**.

> It is important that a **dot** is set in the **value** field at the end of the domain!

### Fivem
With Fivem, this is almost identical to Minecraft.
Here, too, we create a new entry by clicking on **New Entry**.
Here we also work through line by line to complete the link.

The **Name** field contains the name of the service, which in this case is our Fivem game server, i.e. **_cfx**. The protocol type, in this case **_udp** as well as the **domain name WITH subdomain** must also be entered there.
This would then look like this: 

![](https://screensaver01.zap-hosting.com/index.php/s/gxkLiFmB9g4HfBL/preview)

The **Type** field indicates what type of entry it is, in this case it is a **SRV** entry.

The **Value** field contains the port of the server as well as the subdomain you initially created and which points to the IP of the server. So in this case **0 33121 docs.fivem-server.com**, where **33121** is the **port from the Fivem server** and **docs.fivem-server.com** is the domain to which the redirection is made.
In our example, it would look like this:

![](https://screensaver01.zap-hosting.com/index.php/s/4mot7XSbMGZw7Pa/preview)
 
The value **0** is not relevant and always remains the same. You also leave the field **TTL** and **Prio** untouched.

The completed full SRV entry looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/s8WskQR22GXAiCH/preview)

Then you can click on **Save**.

> It is important that a **dot** is set in the **value** field at the end of the domain!
