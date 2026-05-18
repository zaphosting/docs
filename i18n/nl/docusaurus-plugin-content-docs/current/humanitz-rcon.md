---
id: humanitz-rcon
title: "HumanitZ: RCON"
description: "Leer hoe je je HumanitZ-server op afstand beheert met RCON en rcon-cli → Ontdek het nu"
sidebar_label: RCON
services:
- gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt beheren. Hiermee kunnen admins commando’s uitvoeren op de server zonder dat ze direct in het spel hoeven in te loggen. Zo kun je spelers beheren, instellingen aanpassen of serveractiviteit monitoren, allemaal extern.

In **HumanitZ** kun je met RCON admin-commando’s uitvoeren zoals spelers kicken, berichten sturen of het servergedrag regelen. De toegang is beveiligd met een wachtwoord en een speciale poort.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder als speler ingelogd te zijn**, wat super flexibel en efficiënt is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet je het eerst inschakelen in de serverconfiguratie. Open de instellingenpagina van je server en zet de rcon-optie aan. Je kunt dit ook aanpassen via de configbestanden. Ga in je gameserver beheerpanel naar Configs en open het bestand `GameServerSettings.ini`.

Voeg de volgende regels toe of pas ze aan:

```
RCONEnabled=true
RCONPassword=je_veilige_wachtwoord
RCONPort=XXXXX
```

De toegewezen RCON-poort vind je terug in het **Poortoverzicht** binnen je serverbeheer. Zorg dat het wachtwoord en de poort overeenkomen met je configuratie.

Sla na het aanpassen het bestand op en **herstart de server** zodat de instellingen actief worden.

## Verbinden via RCON

Om verbinding te maken met je HumanitZ-server via RCON, kun je de commandline-tool **rcon-cli** gebruiken. Deze is beschikbaar via de officiële GitHub-repo:
https://github.com/gorcon/rcon-cli

Na installatie verbind je met je server via dit commando:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```

Vervang de placeholders door het IP-adres van je server, de RCON-poort en het wachtwoord.

Met dit commando voer je direct RCON-commando’s uit vanaf je eigen systeem, zonder een interactieve sessie te hoeven starten.

## RCON-commando’s

Eenmaal verbonden via RCON kun je verschillende admin-commando’s uitvoeren op je HumanitZ-server. Welke commando’s beschikbaar zijn, hangt af van de game, maar meestal kun je spelers beheren en de server aansturen.

| Commando | Beschrijving |
|----------------------------------|------------------------------------------|
| `broadcast <bericht>`| Stuurt een bericht naar alle spelers |
| `kick <spelernaam>`| Kickt een speler van de server |
| `ban <spelernaam>` | Bant een speler |
| `unban <spelernaam>` | Haalt een ban van een speler af |
| `save` | Slaat de huidige gamestatus op |
| `restart`| Herstart de server |
| `shutdown` | Zet de server uit |
| `whitelist add <steamid>`| Voegt een speler toe aan de whitelist |
| `whitelist remove <steamid>` | Verwijdert een speler van de whitelist |

## Conclusie

Gefeliciteerd! Je hebt succesvol **RCON opgezet en gebruikt voor je HumanitZ-server**. Zo beheer je je server op afstand, voer je admin-commando’s uit en houd je controle zonder het spel te hoeven joinen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />