---
id: vserver-linux-ip-configuration
title: "VPS: IP-configuratie (Ubuntu/Debian)"
description: "Leer hoe je een statisch IP-adres configureert op een Linux-server met Ubuntu of Debian → Ontdek het nu"
sidebar_label: IP-adressen configureren
services:
- vserver
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Intro

Het configureren van IP-adressen op je Linux VPS geeft je controle over hoe je server communiceert binnen het netwerk. Dit omvat het toewijzen van IP-adressen, het instellen van de standaard gateway en het configureren van DNS-servers die nodig zijn voor netwerkconnectiviteit.

:::warning Server niet bereikbaar door ontbrekende internetverbinding?
Als je server niet meer bereikbaar is door een verkeerde netwerkconfiguratie of ontbrekende internetverbinding, werkt toegang via SSH mogelijk niet meer. Gebruik dan de [VNC-console](vserver-vnc.md) in het webpaneel om verbinding te maken met je server en de netwerkconfiguratie te herstellen.
:::

<InlineVoucher />

## Voorbereiding

Zorg dat je de volgende gegevens bij de hand hebt voordat je een statisch IP-adres instelt:

- Het IP-adres dat je wilt toewijzen  
- Subnetmasker  
- Standaard gateway  
- DNS-servers  

Deze info vind je in het webpaneel. Open hiervoor je **VPS-beheer** en ga naar **IP-adressen**.

## Configuratie

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Ubuntu gebruikt **Netplan** voor netwerkconfiguratie. Maak verbinding met je VPS via SSH en zoek het Netplan-configuratiebestand in de map `/etc/netplan/`. Open het bestand:

```bash
nano /etc/netplan/50-cloud-init.yaml
```

Pas de configuratie aan om een statisch IP-adres in te stellen:
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

Pas de volgende waarden aan naar jouw netwerkconfiguratie:

- 109.230.238.45 → Jouw statische IP-adres  
- 109.230.238.1 → Jouw gateway  
- DNS-adressen → Jouw favoriete DNS-servers  

Sla het bestand op en pas de configuratie toe:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian gebruikt meestal het netwerkinterfaces-configuratiebestand in plaats van Netplan. Maak verbinding met je VPS via SSH en open het configuratiebestand:

```
nano /etc/network/interfaces
```

Voeg de configuratie toe of pas deze aan voor je netwerkinterface. Voorbeeldconfiguratie:

```bash
auto lo
iface lo inet loopback

# De primaire netwerkinterface
allow-hotplug ens18
iface ens18 inet static
        address 134.255.219.160/24
        gateway 134.255.219.1
        # dns-* opties worden geïmplementeerd door het resolvconf-pakket, indien geïnstalleerd
        dns-nameservers 1.1.1.1
```

Pas de waarden aan volgens jouw netwerkconfiguratie:
- address → Jouw statische IP-adres  
- netmask → Jouw subnetmasker  
- gateway → Jouw standaard gateway  
- dns-nameservers → Jouw favoriete DNS-servers  

Na het opslaan van het bestand, herstart je de netwerkservice:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Controleren

Na het toepassen van de configuratie is het slim om te checken of het nieuwe IP-adres correct is ingesteld. Voer hiervoor het volgende commando uit in je terminal:

```
ip a
```

Dit toont alle **netwerkinterfaces** op het systeem met hun huidige configuratie. Zoek in de output de interface die je hebt ingesteld, meestal `eth0`, `ens18` of iets vergelijkbaars.

Binnen die interface sectie, zoek naar de **`inet` regel**, dit is het IPv4-adres dat aan de interface is toegewezen. De output zou het statische IP-adres moeten tonen dat je hebt ingesteld. Bijvoorbeeld:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Als het juiste adres in de output staat, is de statische IP-configuratie succesvol toegepast. Staat het nieuwe IP-adres er niet bij? Controleer dan het configuratiebestand nogmaals en zorg dat je wijzigingen goed hebt opgeslagen. Pas daarna de configuratie opnieuw toe met:

```
sudo netplan apply
```



## Afsluiting

Gefeliciteerd! Je hebt je IP-adres succesvol ingesteld op je Linux-server. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />