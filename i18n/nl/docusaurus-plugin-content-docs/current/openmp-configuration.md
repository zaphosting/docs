---
id: openmp-configuration
title: "Open.mp: Open.mp Serverconfiguratie"
description: "Ontdek hoe je Open.mp serverinstellingen kunt aanpassen om je gameplay-ervaring en serverprestaties te optimaliseren → Leer nu meer"
sidebar_label: Serverconfiguratie
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Open.mp servers bieden een breed scala aan configuratieparameters die je helemaal naar eigen wens kunt aanpassen. In deze gids nemen we alle momenteel beschikbare configuratieparameters door en leggen we ze stuk voor stuk uit.

<InlineVoucher />

## Toegang tot je Configuratiebestand

Allereerst moet je toegang krijgen tot je configuratiebestand om parameters te kunnen aanpassen. Er zijn meerdere manieren om dit bestand te bewerken.

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="settings" label="Via Webinterface" default>

#### Via Webinterface

De meest gebruiksvriendelijke manier om de basisinstellingen te wijzigen is door naar de **Settings** sectie van de webinterface van je game server te gaan en daar de juiste instellingen te zoeken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/QDPzFgWRrfB49HB/preview)

Houd er rekening mee dat niet alle configuratie-opties hier beschikbaar zijn. Wil je alles instellen, gebruik dan de **WI Config File** tab om het benodigde bestand direct in de webinterface te bewerken.

</TabItem>

<TabItem value="configs" label="Via WI Config bestand">

#### Via WI Config Bestand

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het bestand aanpast en de server herstart, worden de wijzigingen ongedaan gemaakt.
:::

Voor gebruikers die het bestand en alle configuratie-opties direct willen aanpassen, kun je dit doen via de **Configs** sectie in de webinterface van je game server door op de blauwe bewerkknop te klikken, zoals hieronder te zien is:

![](https://screensaver01.zap-hosting.com/index.php/s/izzL3f9FaGdc9ay/preview)

Er opent dan een teksteditor direct op de site waarmee je het bestand kunt aanpassen.

</TabItem>

<TabItem value="ftp" label="Via FTP">


#### Via FTP

:::note
De server moet gestopt zijn voordat je het config-bestand kunt bewerken. Als je het bestand aanpast en de server herstart, worden de wijzigingen ongedaan gemaakt.
:::

De laatste manier om het ruwe bestand te bereiken is via FTP. Als je niet bekend bent met FTP, raden we je aan om eerst de [Toegang via FTP](gameserver-ftpaccess.md) gids te bekijken. Deze methode duurt echter langer en als je het bestand direct wilt aanpassen, raden we aan om gewoon de **Configs** sectie in de webinterface van je game server te gebruiken zoals hierboven beschreven.

Eenmaal ingelogd via je FTP-client, navigeer je naar de volgende map, waarbij je `[zap_id]` vervangt door je eigen ZAP ID:
```
..g[zap_id]/gta-openmp/
```

In deze map vind je het `config.json` bestand. Dit is het serverconfiguratiebestand dat je moet aanpassen.

</TabItem>
</Tabs>

## Serverconfiguratie Opties

### Server Details

Dit zijn serverconfiguratie-opties die de informatie van je server in de publieke serverbrowser aanpassen. Je vindt deze opties in je configuratiebestand, wat je makkelijk kunt zoeken met `CTRL+F` in je browser of bewerkingsprogramma.

| Parameter Naam               | Voorbeeld                              | Beschrijving                                                                       |
| ---------------------------- | ------------------------------------- | --------------------------------------------------------------------------------- |
| name                         | ZAP-Hosting Docs Test                  | Stel de hostnaam van je server in                                                 |
| language                     | English                              | Taal die in de serverbrowser voor je server wordt weergegeven                     |
| website                      | zap-hosting.com/                     | Voeg een website toe die mensen kunnen bezoeken voor meer info over je server     |
| discord.invite               | discord.gg/zaphosting                | Discord server link die in de serverbrowser verschijnt                            |
| banners.light                | zap-hosting.com/lighticon.png        | Stel een URL in voor je lichte thema banner die in de serverbrowser verschijnt    |
| banners.dark                 | zap-hosting.com/darkicon.png         | Stel een URL in voor je donkere thema banner die in de serverbrowser verschijnt   |
| game.map                     | ZAPtastic Stunt Map                   | De mapnaam die in de serverbrowser moet verschijnen                               |
| game.mode                    | Survival                            | De gamemode die in de serverbrowser moet verschijnen                              |
| announce                     | true                                | Schakel in of uit of je server überhaupt in de publieke serverbrowser wordt getoond |
| enable_query                 | true                                | Schakel in of uit of de serverinformatie in de serverbrowser getoond wordt       |

Nadat je je wijzigingen hebt doorgevoerd, sla je het bestand op en herstart je de server. De volgende keer dat je server opstart, worden de door jou opgegeven instellingen gebruikt.

### Kern Serverinstellingen

Dit zijn belangrijkere serverconfiguratie-opties die de functionaliteit van je server aanpassen. Je vindt deze opties in je configuratiebestand, wat je makkelijk kunt zoeken met `CTRL+F` in je browser of bewerkingsprogramma.

| Parameter Naam               | Voorbeeld                              | Beschrijving                                                                                  |
| ---------------------------- | ------------------------------------- | -------------------------------------------------------------------------------------------- | 
| max_players                  | 50 (standaard)                        | Stel het maximale aantal spelers in dat de server tegelijk kan hosten                       |
| max_bots                     | 0 (standaard)                         | Stel het maximale aantal NPC's in dat de server kan hosten. Dit telt mee in het max_players totaal |
| password                     | iLoveZAP!2024                       | Stel een wachtwoord in dat spelers moeten gebruiken om verbinding te maken met de server    |
| rcon.enable                  | true                                | Schakel in of uit of de RCON-functie geactiveerd moet zijn                                  |
| rcon.password                | ZAP-IS-AWESOME                      | Stel een wachtwoord in dat nodig is om via clients toegang te krijgen tot RCON              |
| logging.enable               | true                                | Schakel in of uit of logging gebruikt moet worden                                          |
| logging.file                 | log.txt                             | Pad en bestandsnaam die gebruikt wordt voor logging als dit ingeschakeld is                |
| logging.log_chat             | true                                | Schakel in of uit of de chat van spelers in de serverconsole getoond moet worden            |

Nadat je je wijzigingen hebt doorgevoerd, sla je het bestand op en herstart je de server. De volgende keer dat je server opstart, worden de door jou opgegeven instellingen gebruikt.

## Gameplay & Netwerk Instellingen

Open.mp heeft een breed scala aan gameplay- en netwerkopties waarmee je je server tot in detail kunt aanpassen. Hier vatten we een paar van de belangrijkste samen. Je vindt deze opties in je configuratiebestand, wat je makkelijk kunt zoeken met `CTRL+F` in je browser of bewerkingsprogramma.

Wil je alle instellingen aanpassen, dan raden we aan om de [open.mp config.json gids](https://www.open.mp/docs/server/config.json) te lezen, waarin alle beschikbare configuratie-opties staan.

:::tip
We raden af om de poort- of IP-instellingen te wijzigen, want deze worden automatisch door de game server ingesteld. Het veranderen van IP/poort kan je game server kapot maken!
:::

| Parameter Naam               | Beschrijving                                                                                  | 
| ---------------------------- | -------------------------------------------------------------------------------------------- | 
| game.use_chat_radius         | Schakel in of uit of de chat radius actief moet zijn                                        |
| game.chat_radius             | Stel een radiuslimiet in voor chat                                                          |
| game.time                   | Stel de globale tijd in die de server gebruikt                                              |
| game.use_nametags            | Schakel in of uit of nametags, health bars en armour bars boven spelers getoond worden      |
| game.use_vehicle_friendly_fire | Schakel friendly fire in voor teamvoertuigen                                              |
| game.vehicle_respawn_time    | Respawntijd van voertuigen in milliseconden                                                |
| game.weather                 | Globale weersinstelling die de server gebruikt                                             |
| network.bind                 | Het IP-adres dat de server moet gebruiken (wij raden aan dit niet te wijzigen voor gameservers) |
| network.port                 | De poort die de server moet gebruiken (ook hier raden we aan dit niet te wijzigen voor gameservers) |
| network.messages_limit       | Maximaal aantal berichten dat een gebruiker per seconde kan versturen                       |
| network.player_timeout       | Tijd in milliseconden waarna een speler timed out als er geen data naar de server wordt gestuurd |

Nadat je je wijzigingen hebt doorgevoerd, sla je het bestand op en herstart je de server. De volgende keer dat je server opstart, worden de door jou opgegeven instellingen gebruikt.

<InlineVoucher />