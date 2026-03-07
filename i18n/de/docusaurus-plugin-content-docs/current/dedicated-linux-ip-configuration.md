---
id: dedicated-linux-ip-configuration
title: "Dedicated Server: IP-Konfiguration (Ubuntu/Debian)"
description: "Lerne, wie du eine statische IP-Adresse auf einem Linux-Server mit Ubuntu oder Debian konfigurierst → Jetzt mehr erfahren"
sidebar_label: IP-Adressen konfigurieren
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Einführung

Die Konfiguration von IP-Adressen auf deinem Linux Dedicated Server ermöglicht dir die Kontrolle darüber, wie dein Server im Netzwerk kommuniziert. Dazu gehört das Zuweisen von IP-Adressen, das Definieren des Standard-Gateways und das Einrichten von DNS-Servern, die für die Netzwerkverbindung benötigt werden.

:::warning Server nicht erreichbar wegen fehlender Internetverbindung?
Falls dein Server aufgrund einer falschen Netzwerkkonfiguration oder fehlender Internetverbindung nicht mehr erreichbar ist, funktioniert der Remote-Zugriff via SSH möglicherweise nicht mehr. Nutze die [iLO HTML-Konsole](dedicated-ilo.md#the-html5-console), um dich mit deinem Server zu verbinden und die Netzwerkkonfiguration zu korrigieren.
:::

<InlineVoucher />

## Vorbereitung

Bevor du eine statische IP-Adresse konfigurierst, stelle sicher, dass du folgende Informationen parat hast:

- IP-Adresse, die du zuweisen möchtest  
- Subnetzmaske  
- Standard-Gateway  
- DNS-Server  

Diese Infos findest du im Webinterface. Öffne dazu dein **Dedicated Server Management** und navigiere zu **IP-Adressen**.

## Konfiguration

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Ubuntu-Installationen nutzen **Netplan** für die Netzwerkkonfiguration. Verbinde dich via SSH mit deinem Dedicated Server und finde die Netplan-Konfigurationsdatei im Verzeichnis `/etc/netplan/`. Öffne die Konfigurationsdatei:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Passe die Konfiguration an, um eine statische IP-Adresse zu definieren:
```
network:
  version: 2
  ethernets:
    eth0:
      match:
        macaddress: "bc:24:11:5f:5c:34"
      addresses:
      - "109.230.238.45/24"
      nameservers:
        addresses:
        - 8.8.8.8
        - 1.1.1.1
      set-name: "eth0"
      routes:
      - to: "default"
        via: "109.230.238.1"
```

Passe folgende Werte an deine Netzwerkkonfiguration an:

- 109.230.238.45 → Deine statische IP-Adresse
- 109.230.238.1 → Dein Gateway
- DNS-Adressen → Deine bevorzugten DNS-Server

Speichere die Datei und wende die Konfiguration an:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian nutzt häufig die Konfigurationsdatei für Netzwerkinterfaces statt Netplan. Verbinde dich via SSH mit deinem Dedicated Server und öffne die Datei für die Netzwerkschnittstellen:

```
nano /etc/network/interfaces
```

Füge die Konfiguration für deine Netzwerkschnittstelle hinzu oder passe sie an. Beispielkonfiguration:

```bash
auto lo
iface lo inet loopback

# Die primäre Netzwerkschnittstelle
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # dns-* Optionen werden vom resolvconf-Paket umgesetzt, falls installiert
        dns-nameservers 1.1.1.1
```

Passe die Werte entsprechend deiner Netzwerkkonfiguration an:
- address → Deine statische IP-Adresse
- netmask → Deine Subnetzmaske
- gateway → Dein Standard-Gateway
- dns-nameservers → Deine bevorzugten DNS-Server

Nach dem Speichern der Konfigurationsdatei starte den Netzwerkdienst neu:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Überprüfung

Nach dem Anwenden der Konfiguration solltest du prüfen, ob die neue IP-Adresse korrekt übernommen wurde. Führe dazu folgenden Befehl im Terminal aus:

```
ip a
```

Dieser Befehl zeigt alle **Netzwerkschnittstellen** des Systems mit ihren aktuellen Konfigurationsdetails an. Suche in der Ausgabe die Schnittstelle, die du konfiguriert hast, meist heißt sie `eth0`, `ens18` oder ähnlich, je nach System.

Im Abschnitt der Schnittstelle findest du den **`inet`-Eintrag**, der die zugewiesene IPv4-Adresse darstellt. Die Ausgabe sollte die statische IP-Adresse enthalten, die du konfiguriert hast. Zum Beispiel:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Wenn die korrekte Adresse angezeigt wird, wurde die statische IP-Konfiguration erfolgreich übernommen. Falls die neue IP-Adresse nicht erscheint, überprüfe die Konfigurationsdatei erneut und stelle sicher, dass die Änderungen korrekt gespeichert wurden, bevor du die Konfiguration erneut anwendest.



## Fazit

Glückwunsch! Du hast deine IP-Adresse erfolgreich auf deinem Linux-Server konfiguriert. Bei weiteren Fragen oder Problemen steht dir unser Support-Team täglich zur Verfügung – zögere nicht, uns zu kontaktieren! 🙂

<InlineVoucher />