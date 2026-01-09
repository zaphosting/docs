---
id: enshrouded-configuration
title: "Enshrouded: Enshrouded Serverconfiguratie"
description: "Ontdek hoe je Enshrouded serverinstellingen kunt aanpassen voor optimale gameplay en serverbeheer → Leer het nu"
sidebar_label: Serverconfiguratie
services:
  - gameserver-enshrouded
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Enshrouded heeft bij de lancering een paar configuratieparameters die je naar wens kunt aanpassen. In deze gids bekijken we alle momenteel beschikbare configuratieparameters en leggen we ze stuk voor stuk uit.

<YouTube videoId="wgvfvQdtwN4" imageSrc="https://screensaver01.zap-hosting.com/index.php/s/tc7mcyZqk8Wyafa/preview" title="Enshrouded Server in slechts 60 seconden instellen!" description="Snap je het beter als je dingen in actie ziet? Wij fixen het! Duik in onze video die alles voor je uitlegt. Of je nu haast hebt of gewoon liever info op de meest toffe manier tot je neemt!"/>

<InlineVoucher />

## Je Configuratiebestand Openen

Eerst moet je bij je configuratiebestand kunnen om parameters aan te passen. Er zijn meerdere manieren om dit bestand te bewerken.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke manier is door naar de **Instellingen** sectie te gaan in de webinterface van je game server en daar de juiste instellingen te zoeken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

</TabItem>

<TabItem value="configs" label="Via WI Configbestand">

#### Via WI Configbestand

:::note
De server moet uitstaan voordat je het configbestand kunt bewerken. Als je het configbestand aanpast en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

Als alternatief, voor gebruikers die het ruwe bestand direct willen aanpassen, kun je dit doen via de **Configs** sectie in de webinterface van je game server door op de blauwe 'bestand bewerken' knop te klikken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/jPep5HzYtWnJTxT/preview)

Dit opent een teksteditor direct op de site zodat je het bestand kunt aanpassen.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
De server moet uitstaan voordat je het configbestand kunt bewerken. Als je het configbestand aanpast en daarna de server herstart, worden je wijzigingen ongedaan gemaakt.
:::

De laatste manier om het ruwe bestand te bereiken is via FTP. Als je niet bekend bent met FTP, raden we je aan om onze [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken. Deze methode duurt echter langer en als je het bestand direct wilt aanpassen, raden we aan gewoon de **Configs** sectie in de webinterface van je game server te gebruiken zoals hierboven beschreven.

</TabItem>
</Tabs>

## Serverconfiguratie Opties

Dit zijn de momenteel beschikbare serverconfiguratie-opties die het spel biedt om je server aan te passen, vooral de servernaam, wachtwoord en enkele interne instellingen.

:::tip
We raden af om de Poort, IP of Directory instellingen te wijzigen, want deze worden automatisch door de game server ingesteld. Wijzigingen hierin kunnen je game server kapot maken!
:::

| Parameternaam | Voorbeeld                              | Beschrijving                                               |
| -------------- | ------------------------------------- | ---------------------------------------------------------- | 
| name           | ZAP-Hosting Docs Test                 | De naam van je server                                      |
| password       | iLoveZAP!2024                        | Zet een wachtwoord op de server (privé)                    |
| saveDirectory  | ./savegame (standaard)                | Stel een map in waar je saves opgeslagen worden            |
| logDirectory   | ./logs (standaard)                    | Stel een map in waar je logs opgeslagen worden             |
| ip             | 123.123.123.123                      | Publiek IP-adres waarop de server draait                   |
| gamePort       | 15636 (standaard)                    | De publieke poort waarop de server draait                   |
| queryPort      | 15637 (standaard)                    | De publieke poort waarmee de server benaderd kan worden     |
| slotCount      | 4                                    | Maximaal aantal spelers dat op de server kan joinen (max 16) |

Als je klaar bent met je aanpassingen, sla dan het bestand op en herstart je server. De volgende keer dat je server opstart, gebruikt hij de door jou opgegeven instellingen.

<InlineVoucher />