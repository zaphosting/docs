---
id: dayz-rcon
title: "DayZ: RCON"
description: "Ontdek hoe je DayZ gameservers efficiënt op afstand beheert en controleert zonder in-game verbinding → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-dayz
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Hierdoor kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In DayZ wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en werkt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game verbonden hoeft te zijn**. Serveradmins kunnen DayZ monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je direct in de gameserver administratie. Onder de **Instellingen** vind je de optie **RCON** die je moet activeren. Stel een veilig wachtwoord in.

De toegewezen RCON-poort vind je onderaan de instellingenpagina bij het **Poortoverzicht**. 



## Verbinden via RCON

Om via RCON verbinding te maken met je DayZ-server gebruik je de tool **BattleWarden**. Deze kun je downloaden van de [officiële website](https://www.battlewarden.net). Na het downloaden en installeren op je pc maak je een nieuw connectieprofiel aan. Hiervoor heb je de volgende gegevens nodig:

- Server IP-adres  
- RCON-poort 
- RCON-wachtwoord

Als de verbinding staat, kun je RCON-commando’s uitvoeren via de grafische interface. De tool biedt ook extra functies zoals spelerslijsten, live chat en commandohistorie, afhankelijk van de game-integratie.

![img](https://screensaver01.zap-hosting.com/index.php/s/P9S3rx3GFWkAo3G/preview)



## RCON Commando’s

Zodra je via RCON verbonden bent, kun je verschillende admin- en diagnosecommando’s uitvoeren op de DayZ-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                         | Beschrijving                                          |
|----------------------------------|------------------------------------------------------|
| `#login <wachtwoord>`             | Logt in als RCON-admin                                |
| `#logout`                       | Beëindigt de admin-sessie                             |
| `#kick <spelerNaam>`            | Kickt een speler van de server                        |
| `#ban <spelerNaam>`             | Bant een speler permanent                             |
| `#exec ban <spelerID>`          | Bant een speler via Steam64ID (BattlEye)             |
| `#exec unban <spelerID>`        | Haalt een eerder verbannen speler van de ban af      |
| `#shutdown`                     | Zet de server uit                                    |
| `#monitor <seconden>`           | Toont prestatiegegevens elke x seconden               |
| `#lock`                         | Vergrendelt de server voor nieuwe verbindingen       |
| `#unlock`                       | Ontgrendelt de server weer                            |




## Conclusie

RCON is een must-have tool voor het remote beheren van DayZ gameservers. Het geeft snelle en directe toegang tot adminfuncties en beschermt de toegang met een wachtwoord. Een goede en veilige configuratie is essentieel om de server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />