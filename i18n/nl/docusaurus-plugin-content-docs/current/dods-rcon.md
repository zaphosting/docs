---
id: dods-rcon
title: "Day of Defeat: Source: RCON"
description: "Ontdek hoe je Day of Defeat: Source servers op afstand beheert voor flexibele controle en monitoring → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-dods
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt bedienen. Het geeft toegang tot de serverconsole zonder dat je direct in de serveromgeving hoeft te zitten. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Day of Defeat: Source gebruik je RCON om server-side commando’s te draaien, zoals spelers beheren, gameplay-instellingen veranderen of diagnostische output bekijken. De verbinding is beveiligd met een wachtwoord en loopt via een specifieke poort, die je bereikt met compatibele RCON-clients.

Het grote voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler ingelogd hoeft te zijn in het spel**. Serveradmins kunnen Day of Defeat: Source monitoren en aansturen via externe tools, command-line interfaces of webdashboards. Super flexibel en chill voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet je het eerst aanzetten en instellen. Dit doe je direct in de gameserver admin. Onder **Instellingen** vind je de optie **RCON** die je moet activeren. Stel een veilig wachtwoord in en kies een geldige poort.

De toegewezen RCON-poort vind je onderaan de instellingenpagina bij **Poortoverzicht**.

RCON inschakelen doe je door het configuratiebestand aan te passen, te vinden onder **Configs** in het gameserver beheerpanel. In het bestand `server.cfg` voeg je deze regel toe of pas je ‘m aan:

```cfg
rcon_password "jouw-veilige-wachtwoord"
```

## Verbinden via RCON

Om via RCON verbinding te maken met je Day of Defeat: Source server, gebruik je de command-line tool **rcon-cli**. Die kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na installatie op je pc maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De juiste poort check je in het **Poortoverzicht** onderaan de instellingenpagina in het gameserver adminpanel. Wachtwoord en poort moeten overeenkomen met wat je in het panel of configbestand hebt ingesteld. Gebruik dit commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

## RCON Commando’s

Als je verbonden bent via RCON, kun je allerlei admin- en diagnostische commando’s uitvoeren op je Day of Defeat: Source server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                     | Beschrijving                                |
| ---------------------------- | ------------------------------------------ |
| `rcon_password <password>`   | Authenticeert voor RCON-toegang            |
| `status`                     | Toont server- en spelersinformatie         |
| `changelevel <mapname>`      | Wisselt naar de opgegeven map               |
| `mp_timelimit <min>`         | Stelt de tijdslimiet per map in             |
| `mp_roundtime <min>`         | Stelt de ronde duur in                      |
| `sv_cheats 0/1`              | Zet cheat-commando’s aan/uit (alleen admin)|
| `kick <playername>`          | Kickt een speler van de server              |
| `banid <duration> <SteamID>` | Bant een speler voor een bepaalde tijd      |
| `exec <file.cfg>`            | Voert een configuratiebestand uit           |
| `say <message>`              | Stuurt een bericht naar alle spelers        |

## Wrap-up

RCON is dé tool voor remote beheer van je Day of Defeat: Source servers. Het geeft je snelle en directe toegang tot admin-functies, met beveiliging via wachtwoord. Zorg dat je het goed en veilig instelt om je server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />