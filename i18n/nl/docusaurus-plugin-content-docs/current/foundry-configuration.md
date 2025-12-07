---
id: foundry-configuration
title: "Foundry: Serverconfiguratie"
description: "Ontdek hoe je Foundry serverinstellingen kunt aanpassen voor optimale gameplay en serverbeheer → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver-foundry
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Foundry-servers bieden een breed scala aan configuratieparameters die je helemaal naar eigen wens kunt aanpassen. In deze gids nemen we alle beschikbare configuratieopties door en leggen we ze stuk voor stuk uit.

<InlineVoucher />

## Toegang tot je Configuratiebestand

Allereerst moet je toegang krijgen tot je configuratiebestand om parameters te kunnen aanpassen. Er zijn meerdere manieren om dit bestand te bewerken.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke manier is door naar de **Instellingen** sectie te gaan in het webinterface van je game server en daar de juiste instellingen te zoeken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)
</TabItem>

<TabItem value="configs" label="Via WI Config bestand">

#### Via WI Config Bestand

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het config-bestand aanpast en de server opnieuw opstart, worden de wijzigingen ongedaan gemaakt.
:::

Voor gebruikers die het ruwe bestand direct willen aanpassen, kun je dit doen via de **Configs** sectie in het webinterface van je game server door op de blauwe bewerkknop te klikken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/64bAt9qCqHAdWXH/preview)

Dit opent een teksteditor direct op de site, zodat je het bestand kunt aanpassen.

</TabItem>

<TabItem value="ftp" label="Via FTP">

#### Via FTP

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het config-bestand aanpast en de server opnieuw opstart, worden de wijzigingen ongedaan gemaakt.
:::

De laatste manier om het ruwe bestand te benaderen is via FTP. Als je niet bekend bent met FTP, raden we je aan om eerst onze [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken. Deze methode duurt wat langer en als je het bestand direct wilt aanpassen, raden we aan om gewoon de **Configs** sectie in het webinterface van je game server te gebruiken zoals hierboven beschreven.

</TabItem>
</Tabs>

## Serverconfiguratie Opties

In de onderstaande tabel vind je belangrijke serverconfiguratie-opties die momenteel beschikbaar zijn binnen Foundry-servers.

:::tip
We raden af om de poortinstellingen aan te passen, omdat deze automatisch door de game server worden ingesteld. Het wijzigen van poortwaarden kan je game server kapot maken!
:::

### Belangrijke Serverinstellingen

| Parameternaam      | Voorbeeld                | Beschrijving                                                                          |
| ------------------ | ------------------------ | ------------------------------------------------------------------------------------ | 
| server_world_name  | ZAPDocsTest              | Stel de naam van de wereld in, dit is ook de map waarin savebestanden worden opgeslagen |
| server_name        | ZAP-Hosting Docs Test    | Naam die in de serverlijst verschijnt voor jouw server                               |
| server_password    | iLoveZAP!2024            | Stel een wachtwoord in dat nodig is om op de server te komen                         |
| server_is_public   | true/false               | Schakel in of de server zichtbaar is in de serverbrowser                            |
| server_port        | 3724 (standaard)         | Stel de netwerkpoort in die door de game gebruikt wordt                             |
| server_query_port  | 27015 (standaard)        | Stel de querypoort in die info over de server teruggeeft in de serverlijst          |
| server_max_players | 32                       | Stel het maximale aantal spelers in dat tegelijk op de server kan zijn              |

### Gameplay Configuratie-instellingen

| Parameternaam           | Voorbeeld     | Beschrijving                                                                       |
| ----------------------- | ------------- | --------------------------------------------------------------------------------- | 
| pause_server_when_empty  | true/false    | Schakel in of de server moet pauzeren als er geen spelers online zijn             |
| map_seed                | 42938743982   | Stel een custom seed in voor wereldgeneratie                                     |
| autosave_interval       | 300           | Stel in hoe vaak de server automatisch opslaat, in seconden                       |

Als je klaar bent met je aanpassingen, vergeet dan niet het bestand op te slaan en je server opnieuw te starten. De volgende keer dat je server opstart, worden de door jou opgegeven instellingen gebruikt.

<InlineVoucher />