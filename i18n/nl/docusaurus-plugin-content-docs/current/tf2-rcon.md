---
id: tf2-rcon
title: "Team Fortress 2: RCON"
description: "Ontdek hoe je jouw Team Fortress 2-server op afstand beheert en controleert voor flexibele administratie en monitoring → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-tf2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te bedienen. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Hierdoor kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Team Fortress 2 wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en werkt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen Team Fortress 2 monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `server.cfg` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
rcon_password "definieer-je-wachtwoord"
```


## Verbinden via RCON

Om verbinding te maken met de Team Fortress 2-server via RCON gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren van de tool op je pc, maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je onder **Poortoverzicht** onderaan de instellingenpagina in het gameserver beheer. Het wachtwoord en de poort moeten overeenkomen met de waarden die je in het panel of configuratiebestand hebt ingesteld. Gebruik het volgende commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON Commando’s

Zodra je verbonden bent via RCON, kun je verschillende admin- en diagnostische commando’s uitvoeren op de Team Fortress 2-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je acties uitvoeren voor spelersbeheer, statusopvragen en servercontrole.

| Commando                     | Beschrijving                                |
| ---------------------------- | ------------------------------------------- |
| `rcon_password <password>`   | Authenticeert voor RCON-toegang             |
| `status`                     | Toont server- en spelersinformatie          |
| `changelevel <mapname>`      | Wisselt naar de opgegeven map                |
| `mp_timelimit <min>`         | Stelt de tijdslimiet per map in              |
| `mp_roundtime <min>`         | Stelt de ronde duur in                        |
| `sv_cheats 0/1`              | Zet cheat-commando’s aan/uit (alleen admin) |
| `kick <playername>`          | Kickt een speler van de server                |
| `banid <duration> <SteamID>` | Bant een speler voor een bepaalde tijd       |
| `exec <file.cfg>`            | Voert een configuratiebestand uit             |
| `say <message>`              | Stuurt een bericht naar alle spelers          |

## Conclusie

RCON is een essentieel hulpmiddel voor het remote beheren van Team Fortress 2-gameservers. Het biedt snelle en directe toegang tot admin-functies, met toegangsbescherming via wachtwoordauthenticatie. Een goede en veilige configuratie is cruciaal om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />