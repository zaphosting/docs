---
id: vserver-linux-add-ip
title: "VPS: Konfigurera IP-adress(er)"
description: "Lär dig hur du konfigurerar och hanterar primära och extra IP-adresser på Debian och Ubuntu för en optimerad nätverksinställning → Läs mer nu"
sidebar_label: Konfigurera IP-adress(er)
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Vill du konfigurera din nätverksinställning och specificera IP-adresser?

<InlineVoucher />

## Konfigurera IP-adress

Här går vi igenom hur du definierar och fastställer huvud-IP-adressen.

<Tabs>
  <TabItem value="debian" label="Debian" default>

Nätverkskonfigurationen i Debian sker via nätverksgränssnitten. Kör kommandot `sudo nano /etc/network/interfaces` för att öppna nätverksinställningarna. Som standard bör innehållet i nätverkskonfigurationen se ut så här:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Om detta inte finns än, ska innehållet se ut som ovan. Byt ut IP-adress-platshållaren (XXX.XXX.XXX.XXX) mot din egen server-IP som visas i serveradministrationen i dashboarden. Använd `255.255.255.0` (klass C-nätverk) som subnet och se till att sista oktetten endast innehåller 1 för gateway.

Spara ändringarna genom att trycka CTRL+X och bekräfta med Enter. Nätverksmodulen måste nu startas om för att den nya IPv4-adressen ska aktiveras, det gör du med följande kommando:

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

## Konfigurera extra IP-adresser
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

   Platshållare

</TabItem>
</Tabs>

## Testa konfigurationen
För att kontrollera att en konfigurerad IP-adress är korrekt och fungerar kan du göra ett ping-test. Det kan du till exempel göra på din egen dator genom att öppna kommandotolken (cmd.exe) och köra följande kommando:

```
ping <din_server_ip>
```

Efter att ha kört kommandot och förutsatt att du konfigurerat IP-adressen rätt, bör resultatet se ut så här:

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

## Slutsats

Grattis, du har nu konfigurerat din nätverksinställning! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support – vi finns här för dig varje dag! 🙂

<InlineVoucher />