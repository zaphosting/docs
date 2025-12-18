---
id: avorion-rcon
title: "Avorion: RCON"
description: "Ontdek hoe je Avorion-servers op afstand beheert met RCON voor flexibele, veilige controle zonder in het spel te hoeven zitten → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-avorion
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Avorion wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in het spel hoeft te zitten**. Serveradmins kunnen Avorion monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het eerst ingeschakeld en ingesteld worden. Dit doe je direct in de gameserver administratie. Onder het kopje **Instellingen** vind je de optie **RCON** die je moet activeren. Stel een veilig wachtwoord in.

De toegewezen RCON-poort vind je onderaan de instellingenpagina bij **Poortoverzicht**. 



## Verbinden via RCON

Om verbinding te maken met de Avorion-server via RCON gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren op je computer maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je in het **Poortoverzicht** onderaan de instellingenpagina in de gameserver administratie. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of de configuratie hebt ingesteld. Gebruik het volgende commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commando’s

Zodra je verbonden bent via RCON kun je allerlei admin- en diagnose-commando’s uitvoeren op de Avorion-server. Welke commando’s beschikbaar zijn hangt af van de game engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                                   | Beschrijving                                               |
|--------------------------------------------|-------------------------------------------------------------|
| `/save`                                     | Slaat de huidige gamewereld op                             |
| `/status`                                   | Toont server- en spelersstatus                             |
| `/kick <playername>`                        | Kickt een speler van de server                             |
| `/ban <playername>`                         | Bant een speler van de server                              |
| `/unban <playername>`                       | Verwijdert een ban van een speler                          |
| `/teleport <x> <y>`                         | Teleporteert de speler naar de opgegeven sectorcoördinaten |
| `/tpto <playername>`                        | Teleporteert naar een andere speler                         |
| `/sethome`                                  | Stelt de huidige sector in als thuis                        |
| `/home`                                     | Teleporteert je naar je thuissector                         |
| `/give <itemName> <amount>`                 | Geeft je items of resources                                |




## Conclusie

RCON is een onmisbare tool voor het remote beheren van Avorion gameservers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is cruciaal om serverstabiliteit te waarborgen en ongeautoriseerde toegang te voorkomen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />