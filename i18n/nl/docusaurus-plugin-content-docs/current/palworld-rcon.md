---
id: palworld-rcon
title: "Palworld: RCON"
description: "Ontdek hoe je Palworld-servers op afstand beheert voor flexibele controle en monitoring zonder het spel te joinen → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-palworld
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt beheren. Het geeft toegang tot de serverconsole zonder dat je direct in de serveromgeving hoeft te zitten. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Palworld gebruik je RCON om server-side commando’s uit te voeren, zoals spelers beheren, gameplay-instellingen wijzigen of diagnostische output bekijken. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in het spel hoeft te zitten**. Serveradmins kunnen Palworld monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `PalWorldSettings.ini` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
RCONEnabled=True,
RCONPort=XXXXX,
AdminPassword="kies-je-wachtwoord"
```
De toegewezen RCON-poort vind je onderaan de instellingenpagina in het Port overzicht en moet daar ook ingevuld worden.



## Verbinden via RCON

Om via RCON verbinding te maken met de Palworld-server gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren op je pc maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je in het **Port overzicht** onderaan de instellingenpagina in het gameserver beheer. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of configuratiebestand hebt ingesteld. Gebruik dit commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commando’s

Als je verbonden bent via RCON, kun je verschillende admin- en diagnose-commando’s uitvoeren op de Palworld-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                                 | Beschrijving                                               |
|-----------------------------------------|------------------------------------------------------------|
| `/Shutdown <seconds> <message>`          | Sluit de server af na een countdown met een bericht        |
| `/DoExit`                               | Stopt de server direct                                     |
| `/Broadcast <message>`                  | Stuurt een bericht naar alle verbonden spelers             |
| `/KickPlayer <SteamID>`                 | Kickt een speler via SteamID                               |
| `/BanPlayer <SteamID>`                  | Banned een speler permanent                                |
| `/TeleportToPlayer <SteamID>`           | Teleporteert jezelf naar de opgegeven speler                |
| `/TeleportToMe <SteamID>`               | Teleporteert de opgegeven speler naar jouw locatie          |
| `/ShowPlayers`                          | Toont een lijst van alle verbonden spelers                  |
| `/Info`                                 | Laat basisinformatie van de server zien                    |
| `/Save`                                 | Slaat de wereld handmatig op                               |



## Conclusie

RCON is een must-have tool voor het remote beheren van Palworld-servers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is super belangrijk om de server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />