---
id: l4d2-rcon
title: "Left 4 Dead 2: RCON"
description: "Ontdek hoe je Left 4 Dead 2-servers veilig op afstand beheert en controleert zonder het spel te joinen → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-l4d2
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt bedienen. Het geeft toegang tot de serverconsole zonder dat je direct in de serveromgeving hoeft te zitten. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Left 4 Dead 2 gebruik je RCON om server-side commando’s te draaien, zoals spelers beheren, gameplay-instellingen wijzigen of diagnostische output bekijken. De verbinding is beveiligd met een wachtwoord en loopt via een specifieke poort, die je bereikt met compatibele RCON-clients.

Het grote voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in het spel hoeft te zitten**. Serveradmins kunnen Left 4 Dead 2 monitoren en aansturen via externe tools, command-line interfaces of webdashboards. Super flexibel en handig voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `server.cfg` voeg je de volgende regel toe of pas je deze aan:

```cfg
rcon_password "definieer-je-wachtwoord"
```


## Verbinden via RCON

Om via RCON verbinding te maken met je Left 4 Dead 2-server, gebruik je de command-line tool **rcon-cli**. Die kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na installatie op je pc maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je onderaan de instellingenpagina in het gameserver beheer bij **Poortoverzicht**. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of configuratiebestand hebt ingesteld. Gebruik dit commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON Commando’s

Als je eenmaal via RCON verbonden bent, kun je allerlei admin- en diagnostische commando’s uitvoeren op je Left 4 Dead 2-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                     | Beschrijving                                |
| ---------------------------- | -------------------------------------------- |
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

RCON is een must-have tool voor het remote beheren van Left 4 Dead 2-servers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Zorg dat je het goed en veilig instelt om de server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />