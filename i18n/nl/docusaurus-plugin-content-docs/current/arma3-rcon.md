---
id: arma3-rcon
title: "Arma 3: RCON"
description: "Ontdek hoe je Arma 3-servers veilig op afstand beheert en controleert zonder het spel te joinen → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-arma3
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Hierdoor kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Arma 3 wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in het spel hoeft te zitten**. Serveradmins kunnen Arma 3 monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het eerst ingeschakeld en ingesteld worden. Dit doe je direct in de gameserver administratie. Onder het kopje **Instellingen** vind je de optie **RCON** die je moet activeren. Stel een veilig wachtwoord in.

De toegewezen RCON-poort vind je onderaan de instellingenpagina bij **Poortoverzicht**. 



## Verbinden via RCON

Om via RCON verbinding te maken met je Arma 3-server gebruik je de tool **BattleWarden**. Deze kun je downloaden van de [officiële website](https://www.battlewarden.net). Na het downloaden en installeren op je pc maak je een nieuw connectieprofiel aan. Je hebt de volgende gegevens nodig:

- Server IP-adres  
- RCON-poort 
- RCON-wachtwoord

Als de verbinding staat, kun je RCON-commando’s uitvoeren via de grafische interface. De tool biedt ook extra functies zoals spelerslijsten, live chat en commandogeschiedenis, afhankelijk van de game-integratie.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON-commando’s

Zodra je via RCON verbonden bent, kun je verschillende admin- en diagnosecommando’s uitvoeren op de Arma 3-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                        | Beschrijving                                      |
|--------------------------------|--------------------------------------------------|
| `#login <wachtwoord>`           | Inloggen als serveradmin                          |
| `#logout`                      | Uitloggen van adminstatus                         |
| `#mission <missionNaam>`       | Start een nieuwe missie op de server             |
| `#missions`                   | Toont een lijst met beschikbare missies          |
| `#restart`                    | Herstart de huidige missie                        |
| `#reassign`                   | Zet alle spelers terug naar roltoewijzing        |
| `#kick <playerID>`            | Kickt een speler                                  |
| `#exec ban <playerID>`        | Bant een speler                                   |
| `#exec unban <playerID>`      | Haalt een ban van een speler af                   |
| `#shutdown`                   | Zet de server uit                                |



## Conclusie

RCON is een onmisbare tool voor het remote beheren van Arma 3-servers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is essentieel om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />