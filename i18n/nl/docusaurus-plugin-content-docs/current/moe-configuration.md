---
id: moe-configuration
title: "Myth of Empires: Serverconfiguratie"
description: "Ontdek hoe je jouw Myth of Empires-server kunt aanpassen voor de beste gameplay en controle → Leer het nu"
sidebar_label: Serverconfiguratie
services:
  - gameserver-moe
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Myth of Empires heeft een breed scala aan configuratie-opties waarmee je jouw server helemaal naar wens kunt instellen. In deze gids duiken we in een aantal van de beschikbare configuratieparameters en leggen we ze stuk voor stuk uit.

<YouTube videoId="a-tZnWIpOSg" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/GozxMwycZ43y4sm/preview" title="Myth Of Empires server in slechts ÉÉN MINUUT instellen!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het! Check onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever op de meest toffe manier info opneemt!"/>

<InlineVoucher />

## Je Configuratiebestand Openen

Eerst moet je bij je configuratiebestand kunnen om instellingen aan te passen. Er zijn meerdere manieren om dit bestand te bewerken.

:::tip
We raden sterk aan om de **Webinterface** te gebruiken, omdat MOE veel configuratie-opties en bestanden heeft. Dit maakt het veel sneller dan alles handmatig aanpassen via bestanden.
:::

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke manier is via de **Instellingen** sectie in de webinterface van je game server. Zoek daar de juiste instellingen, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Je ziet hier allerlei secties en instellingen waar je direct de waarden kunt aanpassen.

</TabItem>

<TabItem value="configs" label="Via WI Config-bestand">

#### Via WI Config-bestand

:::note
De server moet uitstaan voordat je het config-bestand kunt aanpassen. Als je het bestand bewerkt en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Voor wie liever direct de ruwe configuratiebestanden bewerkt, kan dit via de **Configs** sectie in de webinterface van je game server. Klik op de blauwe knop 'bestand bewerken', zoals hieronder:

![](https://screensaver01.zap-hosting.com/index.php/s/ke6TF9RooBGqawW/preview)

Er opent dan een teksteditor op de site waarmee je het bestand kunt aanpassen.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet uitstaan voordat je het config-bestand kunt aanpassen. Als je het bestand bewerkt en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

De laatste manier om het bestand te bereiken is via FTP. Als je niet bekend bent met FTP, check dan onze [Toegang via FTP](gameserver-ftpaccess.md) gids. Deze methode duurt langer en als je direct wilt aanpassen raden we aan om gewoon de **Instellingen** sectie in de webinterface te gebruiken.

</TabItem>
</Tabs>

## Serverconfiguratie-opties

Hier hebben we een aantal belangrijke en kernconfiguraties uitgekozen die je waarschijnlijk wilt aanpassen, inclusief wat interne instellingen.

:::tip
We raden af om de poort, IP of map-instellingen te veranderen, want die worden automatisch door de game server ingesteld. Aanpassen hiervan kan je server kapot maken!
:::

| Parameternaam | Voorbeeld                             | Beschrijving                                               |
| -------------- | ----------------------------------- | ---------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test               | De naam van je server                                      |
| password       | iLoveZAP!2024                      | Zet een wachtwoord op je server (privé)                    |
| description    | Dit is een coole server!            | Voeg een beschrijving toe voor je server                   |
| gamemode       | PVE / PVP                         | Stel de gamemode van je server in                          |
| mapname        | Central Island                    | Kies de map voor je server                                 |
| difficulty     | 1                                   | Moeilijkheidsgraad van je wereld                           |

Als je klaar bent met aanpassen, sla dan het bestand op en herstart je server. Bij de volgende start gebruikt je server de nieuwe instellingen.

<InlineVoucher />