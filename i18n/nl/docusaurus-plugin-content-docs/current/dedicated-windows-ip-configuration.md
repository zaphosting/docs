---
id: dedicated-windows-ip-configuration
title: "Dedicated Server: IP-configuratie (Windows)"
description: "Leer hoe je IP-instellingen configureert op een Windows Dedicated Server → Ontdek het nu"
sidebar_label: IP-adressen configureren
services:
- dedicated
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Het configureren van IP-adressen op je Windows Dedicated Server geeft je controle over hoe je server communiceert binnen het netwerk. Dit omvat het toewijzen van IP-adressen, het instellen van de standaardgateway en het configureren van DNS-servers die nodig zijn voor netwerkconnectiviteit.

Een correcte IP-configuratie is super belangrijk voor servers die diensten draaien zoals game servers, webservers, databases of remote access systemen, omdat het zorgt voor stabiele netwerkcommunicatie en betrouwbare bereikbaarheid.

:::warning Server niet bereikbaar door ontbrekende internetverbinding?
Als je server niet meer bereikbaar is door een verkeerde netwerkconfiguratie of ontbrekende internetverbinding, werkt remote toegang via RDP mogelijk niet meer. Gebruik dan de [iLO HTML-console](dedicated-ilo.md#the-html5-console) om verbinding te maken met je server en de netwerkconfiguratie te herstellen.
:::

<InlineVoucher />

## Voorbereiding

Zorg dat je de volgende info bij de hand hebt voordat je IP-adressen gaat instellen:

- Het IP-adres dat je wilt toewijzen
- Subnetmasker
- Standaardgateway
- DNS-servers

Deze info vind je terug in de webinterface. Open hiervoor je **Dedicated Server beheer** en ga naar **IP-adressen**.

## Configuratie

Maak verbinding met je Dedicated Server via **Remote Desktop (RDP)**. Eenmaal verbonden, open je het **Configuratiescherm**. Navigeer naar **Configuratiescherm → Netwerk en internet → Netwerkcentrum**.

Klik links op **Adapterinstellingen wijzigen**. Je ziet nu de beschikbare netwerkinterfaces. Klik met de rechtermuisknop op je actieve netwerkadapter (meestal **Ethernet**) en kies **Eigenschappen**. Selecteer in de lijst **Internet Protocol versie 4 (TCP/IPv4)** en klik op **Eigenschappen**.

![img](https://screensaver01.zap-hosting.com/index.php/s/3EpqZXg5pgWHoLK/download)

Kies **De volgende IP-adres gebruiken** en vul de benodigde waarden in:

- **IP-adres** → Het IP-adres dat je hebt toegewezen gekregen
- **Subnetmasker** → Je subnetmasker
- **Standaardgateway** → Je gateway
- **DNS-servers →** 1.1.1.1, 8.8.8.8

Configureer daarna de DNS-servers door **De volgende DNS-serveradressen gebruiken** te selecteren en je voorkeurs-DNS-servers in te vullen. Bevestig alle instellingen met **OK** en sluit de overige vensters.

## Controle

Om te checken of alles goed staat, open je de **Opdrachtprompt** en voer je uit:
```
ipconfig
```
![img](https://screensaver01.zap-hosting.com/index.php/s/AK8F3jppqL8xnsx/download)

Deze opdracht toont alle netwerkinterfaces en hun huidige IP-configuratie. Zoek je actieve netwerkadapter op en controleer of het **IPv4-adres** overeenkomt met het IP-adres dat je hebt ingesteld. Als het juiste IP-adres zichtbaar is, is de configuratie succesvol toegepast.

## Afsluiting

Gefeliciteerd! Je hebt de IP-instellingen op je Windows Dedicated Server succesvol geconfigureerd. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar.

<InlineVoucher />