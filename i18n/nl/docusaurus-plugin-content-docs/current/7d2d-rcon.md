---
id: 7d2d-rcon
title: "7 Days to Die: RCON"
description: "Ontdek hoe je 7 Days to Die-servers veilig op afstand beheert en controleert zonder in-game toegang voor efficiënte serveradministratie → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-7d2d
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In 7 Days to Die wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen 7 Days to Die monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het eerst ingeschakeld en ingesteld worden. Dit doe je direct in de gameserver administratie. Onder het kopje **Instellingen** vind je de optie **RCON** die je moet activeren. Stel een veilig wachtwoord in en kies een geldige poort.

De toegewezen RCON-poort vind je onderaan de instellingenpagina bij **Poortoverzicht**.

Daarnaast moet je de configuratie aanpassen door het bestand `serverconfig.xml` te bewerken, te vinden onder **Configs** in het gameserver beheerpanel. Voeg hierin de volgende regel toe of pas deze aan:

```cfg
<property name="TelnetPassword" value="definieer-je-wachtwoord-hier"/>
```

De poort die je gebruikt, moet overeenkomen met die in het **Poortoverzicht** onderaan de instellingenpagina.

## Verbinden via RCON

Om via RCON verbinding te maken met je 7 Days to Die-server, gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na installatie op je pc maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De poort vind je terug in het **Poortoverzicht** onderaan de instellingenpagina in het gameserver beheer. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of de config hebt ingesteld. Gebruik dit commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> -t telnet command
```

## RCON Commando’s

Als je verbonden bent via RCON, kun je allerlei admin- en diagnostische commando’s uitvoeren op je 7 Days to Die-server. Welke commando’s beschikbaar zijn, hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                | Beschrijving                                  |
|------------------------|-----------------------------------------------|
| `dm` of `debugmenu on`  | Zet de ontwikkelaarsmodus aan                  |
| `giveme <ItemName> <count>` | Geeft jezelf een item                       |
| `buffplayer <ID> <buff>` | Geeft een buff aan een speler                  |
| `tele <x> <y> <z>`     | Teleporteert je naar coördinaten               |
| `settime <seconds>`     | Zet de huidige in-game tijd                     |
| `setgameday <day>`      | Zet de huidige gamedag                          |
| `spawnentity <ID>`      | Spawn een entity op basis van ID                |
| `kick <player>`         | Kickt een speler van de server                   |
| `ban <address>`         | Bant een IP-adres of speler                      |
| `saveworld`             | Slaat handmatig de wereldstatus op              |

## Conclusie

RCON is een must-have tool voor het remote beheren van je 7 Days to Die-servers. Het geeft snelle en directe toegang tot adminfuncties, met beveiliging via wachtwoordauthenticatie. Zorg dat je RCON goed en veilig instelt om je server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />