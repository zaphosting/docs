---
id: domain-teamspeak-redirect
title: "Domain: Set up TeamSpeak 3 forwarding"
description: "Discover how to simplify connecting to your TeamSpeak 3 server using custom domains or subdomains for easy access → Learn more now"
sidebar_label: TeamSpeak 3 forwarding
services:
  - domain
---

import InlineVoucher from '@site/src/components/InlineVoucher';

:::info
Please note that it can always take up to 24 hours before changes to DNS entries become active!
:::

## Introduction

You can either redirect your entire domain or just a subdomain to your TeamSpeak 3 server.
This way, no one has to remember the complicated IP address consisting of numbers and can simply connect to your TeamSpeak 3 server using the domain.

:::note
By default, **new** TeamSpeak 3 servers will now receive a `.zap.cloud` alias with a random prefix which can be used to connect.
:::

<InlineVoucher />

## Using TSDNS quick setup

We have implemented a new TSDNS system for our TeamSpeak 3 servers, which allows you to setup a subdomain for your TeamSpeak 3 server in just a few clicks! If you don't have a domain with us, skip to the next section to manually setup DNS records.

Simply begin by heading over to the **Settings->TSDNS** section on your TeamSpeak's webinterface on our website. Here you will be able to choose a subdomain (prefix before the domain) as well as either our `zap-ts3.com` or one of your own domains that you have with us on your ZAP-Hosting account.

:::info
For this quick setup feature, you would need to [purchase a perfect domain directly with us](https://zap-hosting.com/en/shop/product/domain/) or move your own domain to your ZAP-Hosting account. These domains will appear within the TSDNS section once they are setup. Alternatively, you can use the regular `zap-ts3.com` for free.
:::

In our example, you can see us create a new subdomain using the `.zap.cloud` domain, which will lead us to our TeamSpeak 3 server when used.

![](https://screensaver01.zap-hosting.com/index.php/s/Mi3wK7cY639Rp3x/preview)

:::note
Please note, it can take up to 3 hours for the domain to propagate and start functioning.
:::

## Regular DNS setup

To forward the IP address, either create a subdomain that redirects to the IP address of the TeamSpeak 3 server, or forward the entire domain without a subdomain.
This would be sufficient if the TeamSpeak 3 server uses the default port **9987**.
However, if the TeamSpeak 3 server is using a different port than the default port, an additional **SRV entry** will be added to the TeamSpeak 3 server's IP address
is required to forward the domain or subdomain to the correct port.


### SRV Service

The service name always begins with a **underscore**.
For a TeamSpeak 3 server, the service name is always **_ts3**, with no exceptions.

### SRV Protocol

As protocol we specify the Internet protocol used for the connection. Here **UDP** and **TCP** are available.
The protocol specification also always starts with a **underscore** and is either **_udp** or **_tcp**.
For a TeamSpeak 3 server, **_udp** is always used, without exception. 


## Forwarding the domain without subdomain

To forward your domain to a game server without creating a subdomain, first open your domain by
on the dashboard, then open DNS Management from the menu on the left.

![](https://puu.sh/Fuzfa/0927cbb177.png)

![](https://puu.sh/FuzhO/6f4694ab62.png)


There you will see all existing DNS entries for your domain.
If you have not yet created your own entries there, you can view all existing entries by clicking 
on the red trash can on the right side.

![](https://puu.sh/Fuzm8/39f3c72fa6.png)

Then click **New entry** and you will be taken to the creation of a new DNS record.
As **Name** we choose here the name of the domain, as an example **teamspeak-server.de**, the **type is A** and the **value** is the
IP of your TeamSpeak 3 server, in this case **88.214.57.116**.
You can leave the **TTL** field untouched.

![](https://screensaver01.zap-hosting.com/index.php/s/cTGTdBFrigs7HDG/preview)

When you have entered everything, click on **Save**, the entry will be saved in the DNS settings and will be displayed within
of 24 hours.

:::info
It can always take up to 24 hours until new DNS entries become active. Unfortunately nobody has influence on this.
:::

## Forwarding the domain with subdomain

If you want to create a subdomain, for example ts.teamspeak-server.de, you do it like in the previous example, 
However, for **Name** you do not enter the name of the domain, but the subdomain.
This looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/ocaqgX2DSdspGQ8/preview)


## Forwarding the domain with port (SRV)

If the standard port **9987** is not used, an additional **SRV entry** must be created in order to not only protect the domain
to the IP of the game server but also to the correct port.

First you either create a **subdomain** as described above, or you redirect the domain as described above
directly to the TeamSpeak 3 server, both are possible. 

### Forwarding without subdomain


After you have forwarded your domain to the IP address of your TeamSpeak 3 server as described above, click on **New Entry**.
and create an entry that looks like this:

![](https://screensaver01.zap-hosting.com/index.php/s/H3NGmYZHyJsCYnf/preview)

The **Name** field contains the name of the service, which in this case is our TeamSpeak 3 server, so **_ts3**. It also contains the protocol type, in this case **_udp** as well as the **domain name**. 
The **Type** field indicates what type of entry it is, in this case it is a **SRV** entry.
The field **value** contains the game port and the domain, in this case **0 1234 teamspeak-server.de**, where **1234** is the **port of the game** and **teamspeak-server.de** is the domain to which the forwarding is done. 
The value **0** is no longer relevant and always remains the same. The fields **TTL** and **Prio** are also not affected.

Afterwards you can click on **Save**.

:::info
It is important that a **dot** is set in the **value** field at the end of the domain!
:::



### Forwarding with subdomain

With a subdomain it behaves almost exactly the same. First, you create a subdomain as described above and forward it to the IP address of your TeamSpeak 3 server. Then click on **New Entry** and create an entry with the following content:

![](https://screensaver01.zap-hosting.com/index.php/s/aEkro3z9WBgWf8g/preview)


The **Name** field contains the name of the service, which in this case is our TeamSpeak 3 server, so **_ts3**. It also contains the protocol type, in this case **_udp** as well as the **domain name** together with the **subdomain**, which is **ts.teamspeak-server.de**. 
The field **Type** indicates what type of entry it is, in this case it is a **SRV** entry.
The field **value** contains the port and the domain with subdomain, in this case **0 1234 ts.teamspeak-server.de**, where **1234** is the **port of the TeamSpeak 3 server** and **ts.teamspeak-server.de** is the domain with subdomain to which the forwarding is done. 
The value **0** is no longer relevant and always remains the same. The fields **TTL** and **Prio** are also not affected.

<InlineVoucher />
