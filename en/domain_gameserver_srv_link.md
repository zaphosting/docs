---
id: domain_gameserver_srv_link
title: Domain Gameserver Redirect
sidebar_label: Domain Gameserver Redirect
---

> Please note that it can always take up to 24 hours before changes to DNS entries become active!

## Forward domain to game server

You can either redirect your domain completely, or only a subdomain to your game server.
So nobody has to remember the complicated IP address which consists of numbers, but can simply connect to your game server using the domain.
In the following examples, create two subdomains and forward them to a Minecraft and a FiveM game server.


## How does it work?

### Before we start creating entries in the DNS settings of the domain, here is some information in advance:
For the forwarding of the IP address either a subdomain is created which redirects to the IP address of the game server, or you forward the complete domain without subdomain.
This would be sufficient if the game server uses the default port of the game.
If the game server uses a different port than the standard port of the game, an additional **SRV entry** is created.
is required to forward the subdomain to the correct port.


> Not all games support the forwarding of a domain to the game port via SRV entry, so check in advance if 
your game supports SRV entries.


### SRV Service

The service name depends on the game and always starts with a **underscore**.
For example, the service name for a Minecraft game server is always **_minecraft** and for a FiveM game server **_cfx**.


### SRV Protocol

As protocol we specify the Internet protocol used for the connection. Here **UDP** and **TCP** are available.
Which protocol is used here also depends on the game, the specification of the protocol also always starts
with an **underscore** and is either **_udp** or **_tcp**.


## Forwarding the domain without subdomain

To forward your domain to a game server without creating a subdomain, first open your domain by
on the dashboard, then open DNS Management from the menu on the left.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)


There you will see all existing DNS entries for your domain.
If you have not yet created your own entries there, you can view all existing entries by clicking 
on the red trash can on the right side.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Then click **New record** and you will be taken to the creation of a new DNS record.
As **Name** we choose here the name of the domain, as an example **fivem-server.de**, the **type is A** and the **value** is the
pay IP of your game server, in this case **88.214.57.116**.
You can leave the field **TTL** untouched.

![](https://puu.sh/Fuzsi/3bbe761892.png)

If you have all your entries, click on **Save**, the entry will be saved in the DNS settings and will be saved within
of 24 hours.

> It can always take up to 24 hours until new DNS entries become active. Unfortunately nobody has influence on this.


## Forwarding the domain with subdomain

If you want to create a subdomain, for example minecraft.fivem-server.de, you do it like in the previous example, 
However, for **Name** you do not enter the name of the domain, but the subdomain.
This looks like this:

![](https://puu.sh/Fuzxd/de90d297e8.png)


## Forwarding of the domain with game port (SRV)

If the game port is not used, an additional **SRV entry** must be created to not only protect the domain
to the IP of the game server but also to the correct port.

First you either create a **subdomain** as described above, or you redirect the domain as described above
directly to the game server, both is possible. 

### Forwarding without subdomain


After you have forwarded your domain to the IP address of your game server as described above, click on **New entry**.
and create an entry that looks like this:

![](https://puu.sh/FuXZs/a4d7149643.png)

The field **Name** contains the name of the service, which in this case is our Minecraft gameserver, so **_minecraft**. The protocol type is also specified there, in this case **_tcp** as well as the **domain name**. 
The field **Type** indicates what kind of entry it is, in this case it is a **SRV** entry.
The field **value** contains the game port and the domain, in this case **0 2132 fivem-server.de**, where **2132** is the **port of the game** and **fivem-server.de** is the domain to which the redirection is done. 
The value **0** is no longer relevant and always remains the same. You also leave the field **TTL** untouched.

Then you can click on **Save**.

> It is important that in the field **value** at the end of the domain a **dot** is set!

### Forwarding with subdomain

With a subdomain it behaves almost exactly the same. First you create a subdomain as described above and forward it to the IP address of your game server. 
Then click on **New entry** and create an entry with the following content:

![](https://puu.sh/FuYbj/423a8cb5eb.png)

The field **Name** contains the name of the service, which in this case is our Minecraft gameserver, so **_minecraft**. The protocol type is also specified there, in this case **_tcp** as well as the **domain name** together with the **subdomain**, which is **minecraft.fivem-server.de**. 
The **Type** field indicates the type of entry, in this case it is a **SRV** entry.
The field **Value** contains the game port and the domain with subdomain, in this case **0 2132 minecraft.fivem-server.de**, where **2132** is the **port of the game** and **minecraft.fivem-server.de** is the domain with subdomain to which the redirection is done. 
The value **0** is no longer relevant and always remains the same. The field **TTL** is also not affected.
