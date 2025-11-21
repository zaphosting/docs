---
id: vserver-linux-add-ip
title: "vServer: IP-Adresse(n) konfigurieren"
description: "Lerne, wie du primäre und zusätzliche IP-Adressen auf Debian- und Ubuntu-Systemen konfigurierst und verwaltest, um dein Netzwerk optimal einzurichten → Jetzt mehr erfahren"
sidebar_label: IP-Adresse(n) konfigurieren
services:
  - vserver
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Einführung

Willst du deine Netzwerkkonfiguration anpassen und IP-Adressen festlegen?

<InlineVoucher />

## IP-Adresse konfigurieren

In diesem Abschnitt erfährst du, wie du die Haupt-IP-Adresse definierst und festlegst.

<Tabs>
  <TabItem value="debian" label="Debian" default>

Die Netzwerkkonfiguration unter Debian erfolgt über die Netzwerk-Interfaces. Öffne die Netzwerkkonfiguration mit dem Befehl `sudo nano /etc/network/interfaces`. Standardmäßig sollte der Inhalt der Netzwerkkonfiguration so aussehen:

```
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet static
        address XXX.XXX.XXX.XXX
        netmask 255.255.255.0
        gateway XXX.XXX.XXX.1
```

Falls das noch nicht vorhanden ist, sollte der Inhalt so aussehen. Ersetze den Platzhalter für die IP-Adresse (XXX.XXX.XXX.XXX) mit der IP-Adresse deines Servers, die du im Dashboard der Serververwaltung findest. Verwende als Subnetz `255.255.255.0` (Klasse C Netzwerk) und achte darauf, dass das letzte Oktett für das Gateway nur die 1 enthält.

Speichere die Änderungen mit STRG+X und bestätige mit der Enter-Taste. Das Netzwerkmodul muss nun neu gestartet werden, damit die neue IPv4-Adresse aktiv wird. Das machst du mit folgendem Befehl:

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

## Zusätzliche IP-Adressen konfigurieren
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

   Platzhalter

</TabItem>
</Tabs>

## Konfiguration testen
Um die Richtigkeit und Funktionalität einer konfigurierten IP-Adresse zu prüfen, kannst du einen Ping-Test durchführen. Das geht zum Beispiel auf deinem eigenen Rechner, indem du die Eingabeaufforderung (cmd.exe) öffnest und folgenden Befehl ausführst:

```
ping <deine_server_ip>
```

Nach Ausführung des Befehls und vorausgesetzt, du hast die IP-Adresse korrekt konfiguriert, sollte das Ergebnis so aussehen:

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

## Fazit

Glückwunsch, du hast deine Netzwerkkonfiguration erfolgreich eingerichtet. Bei weiteren Fragen oder wenn du Hilfe brauchst, steht dir unser Support-Team täglich zur Seite! 🙂

<InlineVoucher />