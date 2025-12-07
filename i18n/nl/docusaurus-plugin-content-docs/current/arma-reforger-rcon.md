---
id: arma-reforger-rcon
title: "Arma Reforger: RCON"
description: "Ontdek hoe je Arma Reforger-servers veilig op afstand beheert en controleert voor flexibele administratie en monitoring → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-arma-reforger
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat gebruikt wordt om gameservers op afstand te beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Arma Reforger wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen Arma Reforger monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het eerst ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `BEServer_x64.cfg` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
RConPort XXXXX
RConPassword define-your-password
```
De toegewezen RCON-poort vind je onderaan de instellingenpagina in het Port overzicht en moet daar ook ingevuld worden.



## Verbinden via RCON

Om verbinding te maken met de Arma Reforger-server via RCON gebruik je de tool **BattleWarden**. Deze kun je downloaden van de [officiële website](https://www.battlewarden.net). Na het downloaden en installeren op je pc maak je een nieuw connectieprofiel aan. Hiervoor heb je de volgende gegevens nodig:

- Server IP-adres  
- RCON-poort 
- RCON-wachtwoord

Als de verbinding staat, kun je RCON-commando’s uitvoeren via de grafische interface. De tool biedt ook extra functies zoals spelerslijsten, live chat en commandogeschiedenis, afhankelijk van de game-integratie.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-commando’s

Eenmaal verbonden via RCON kun je verschillende admin- en diagnosecommando’s uitvoeren op de Arma Reforger-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je acties uitvoeren voor spelersbeheer, statusopvragen en servercontrole.

| Commando                         | Beschrijving                                        |
|----------------------------------|----------------------------------------------------|
| `#login <password>`             | Inloggen als serveradmin                            |
| `#logout`                       | Uitloggen van adminstatus                           |
| `#mission <missionName>`       | Start een nieuwe missie op de server                |
| `#missions`                    | Toont een lijst met beschikbare missies             |
| `#restart`                     | Herstart de huidige missie                          |
| `#reassign`                    | Zet alle spelers terug naar hun roltoewijzing       |
| `#kick <playerID>`             | Kickt een speler                                   |
| `#exec ban <playerID>`         | Bant een speler                                    |
| `#exec unban <playerID>`       | Haalt een ban van een speler af                     |
| `#shutdown`                    | Zet de server uit                                 |



## Conclusie

RCON is een onmisbare tool voor het remote beheren van Arma Reforger-servers. Het geeft snelle en directe toegang tot adminfuncties, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is essentieel om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂

<InlineVoucher />