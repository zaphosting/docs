---
id: dedicated-linux-ip-configuration
title: "Dedicated Server: IP-configuratie (Ubuntu/Debian)"
description: "Leer hoe je een statisch IP-adres configureert op een Linux-server met Ubuntu of Debian → Leer nu meer"
sidebar_label: IP-adressen configureren
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Introductie

Het configureren van IP-adressen op je Linux Dedicated Server geeft je controle over hoe je server communiceert binnen het netwerk. Dit omvat het toewijzen van IP-adressen, het definiëren van de standaard gateway en het instellen van DNS-servers die nodig zijn voor netwerkconnectiviteit.

:::warning Server niet bereikbaar door ontbrekende internetverbinding?
Als je server niet meer bereikbaar is door een verkeerde netwerkconfiguratie of ontbrekende internetverbinding, werkt toegang via SSH mogelijk niet meer. Gebruik de [iLO HTML-console](dedicated-ilo.md#the-html5-console) om verbinding te maken met je server en de netwerkconfiguratie te herstellen.
:::

<InlineVoucher />

## Voorbereiding

Voordat je een statisch IP-adres instelt, zorg dat je de volgende gegevens bij de hand hebt:

- Het IP-adres dat je wilt toewijzen  
- Subnetmasker  
- Standaard gateway  
- DNS-servers  

Deze info vind je in de webinterface. Open hiervoor je **Dedicated Server beheer** en ga naar **IP-adressen**.

## Configuratie

<Tabs>
<TabItem value="ubuntu" label="Ubuntu" default>

Ubuntu gebruikt **Netplan** voor netwerkconfiguratie. Maak verbinding met je Dedicated Server via SSH en zoek het Netplan-configuratiebestand in de map `/etc/netplan/`. Open het configuratiebestand:

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

Pas de volgende waarden aan zodat ze overeenkomen met jouw netwerkconfiguratie:

- 109.230.238.45 → Jouw statische IP-adres  
- 109.230.238.1 → Jouw gateway  
- DNS-adressen → Jouw favoriete DNS-servers  

Sla het bestand op en pas de configuratie toe:

```
sudo netplan apply
```

</TabItem> <TabItem value="debian" label="Debian">

Debian gebruikt meestal het configuratiebestand voor netwerkinterfaces in plaats van Netplan. Maak verbinding met je Dedicated Server via SSH en open het configuratiebestand voor netwerkinterfaces:

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

Na het opslaan van het configuratiebestand, herstart je de netwerkservice:

```
systemctl restart networking
```

</TabItem> </Tabs>



## Controle

Na het toepassen van de configuratie is het aan te raden te controleren of het nieuwe IP-adres correct is ingesteld. Voer hiervoor het volgende commando uit in je terminal:

```
ip a
```

Dit commando toont alle **netwerkinterfaces** op het systeem met hun huidige configuratie. Zoek in de output de interface die je eerder hebt geconfigureerd, meestal `eth0`, `ens18` of een vergelijkbare naam afhankelijk van het systeem.

Binnen de interface-sectie zoek je naar de **`inet`-vermelding**, dit is het IPv4-adres dat aan de interface is toegewezen. De output zou het statische IP-adres moeten tonen dat je hebt ingesteld. Bijvoorbeeld:

```
inet 109.230.238.45/24
```

![img](https://screensaver01.zap-hosting.com/index.php/s/TmaCRcfLgiabTBp/preview)

Als het juiste adres in de output verschijnt, is de statische IP-configuratie succesvol toegepast. Als het nieuwe IP-adres niet zichtbaar is, controleer dan het configuratiebestand opnieuw en zorg dat de wijzigingen correct zijn opgeslagen voordat je de configuratie opnieuw toepast.



## Conclusie

Gefeliciteerd! Je hebt je IP-adres succesvol geconfigureerd op je Linux-server. Voor verdere vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />