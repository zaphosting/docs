---
id: nmrih-rcon
title: "No More Room In Hell: RCON"
description: "Ontdek hoe je No More Room In Hell-servers op afstand beheert voor flexibele controle en monitoring → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-nmrih
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt beheren. Het geeft toegang tot de serverconsole zonder dat je direct in de serveromgeving hoeft te zitten. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In No More Room In Hell gebruik je RCON om server-side commando’s uit te voeren, zoals spelers beheren, gameplay-instellingen wijzigen of diagnostische output bekijken. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen No More Room In Hell monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `server.cfg` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
rcon_password "definieer-je-wachtwoord"
```


## Verbinden via RCON

Om via RCON verbinding te maken met je No More Room In Hell-server, gebruik je de command-line tool **rcon-cli**. Die kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren op je pc maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je onderaan de instellingenpagina in het gameserver beheer bij **Poortoverzicht**. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of configuratiebestand hebt ingesteld. Gebruik dit commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON Commando’s

Als je eenmaal via RCON verbonden bent, kun je allerlei admin- en diagnostische commando’s uitvoeren op je No More Room In Hell-server. Welke commando’s beschikbaar zijn, hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                     | Beschrijving                                |
| ---------------------------- | ------------------------------------------ |
| `rcon_password <password>`   | Authenticeert voor RCON-toegang            |
| `status`                     | Toont server- en spelersinformatie         |
| `changelevel <mapname>`      | Wisselt naar de opgegeven map               |
| `mp_timelimit <min>`         | Stelt de tijdslimiet per map in             |
| `mp_roundtime <min>`         | Stelt de ronde duur in                       |
| `sv_cheats 0/1`              | Zet cheat-commando’s aan/uit (alleen admin)|
| `kick <playername>`          | Kickt een speler van de server              |
| `banid <duration> <SteamID>` | Bant een speler voor een bepaalde tijd      |
| `exec <file.cfg>`            | Voert een configuratiebestand uit           |
| `say <message>`              | Stuurt een bericht naar alle spelers        |

## Conclusie

RCON is een must-have tool voor het remote beheren van je No More Room In Hell-servers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Zorg dat je het goed en veilig instelt om je server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />