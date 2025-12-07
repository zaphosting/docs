---
id: vserver-linux-add-ip
title: "VPS: IP-adres(sen) configureren"
description: "Leer hoe je primaire en extra IP-adressen configureert en beheert op Debian- en Ubuntu-systemen voor een geoptimaliseerde netwerksetup → Leer nu meer"
sidebar_label: IP-adres(sen) configureren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Wil je je netwerkconfiguratie instellen en specifieke IP-adressen toewijzen?

<InlineVoucher />

## IP-adres configureren

In deze sectie leggen we uit hoe je het hoofd-IP-adres definieert en controleert.

<Tabs>
  <TabItem value="debian" label="Debian" default>

De netwerkconfiguratie in Debian verloopt via de netwerkinterfaces. Voer het commando `sudo nano /etc/network/interfaces` uit om de netwerkconfiguratie te openen. Standaard zou de inhoud er zo uit moeten zien:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Als dit nog niet zo is, moet de inhoud er precies zo uitzien. Vervang de IP-adres placeholder (XXX.XXX.XXX.XXX) door het IP-adres van jouw server, te vinden in het serverbeheer in het dashboard. Gebruik `255.255.255.0` (klasse C netwerk) als subnet en zorg dat het laatste octet van de gateway alleen een 1 bevat.

Sla de wijzigingen op met CTRL+X en bevestig met Enter. Het netwerk moet nu opnieuw gestart worden zodat het nieuwe IPv4-adres actief wordt, dit doe je met:

```
sudo service networking restart
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

```
[Match]
Name = eth0

[Network]
Description = Interface eth0 autoconfigured by PVE
Address = 185.223.31.234/24
Gateway = 185.223.31.1
DHCP = no
IPv6AcceptRA = false
```

  </TabItem>
</Tabs>

## Extra IP-adressen configureren
<Tabs>
  <TabItem value="debian" label="Debian" default>

```
allow-hotplug eth0:1
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

  </TabItem>
  <TabItem value="ubuntu" label="Ubuntu">

   Placeholder

  </TabItem>
</Tabs>

## Configuratie testen
Om te checken of een geconfigureerd IP-adres correct werkt, kun je een ping-test uitvoeren. Dit kan bijvoorbeeld op je eigen pc door de command prompt (cmd.exe) te openen en het volgende commando uit te voeren:

```
ping <jouw_server_ip>
```

Als je het IP-adres goed hebt ingesteld, zou het resultaat er ongeveer zo uit moeten zien:

```
Pinging XXX.XXX.XXX.XX with 32 bytes of data:
Reply from XXX.XXX.XXX.XX: bytes=32 time=25ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=22ms TTL=56
Reply from XXX.XXX.XXX.XX: bytes=32 time=23ms TTL=56

Ping statistics for XXX.XXX.XXX.XX:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milli-seconds:
    Minimum = 22ms, Maximum = 25ms, Average = 23ms
```

## Afsluiting

Gefeliciteerd, je hebt je netwerkconfiguratie succesvol ingesteld. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />