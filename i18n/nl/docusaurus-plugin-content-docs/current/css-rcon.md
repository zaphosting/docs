---
id: css-rcon
title: "Counter-Strike: Source: RCON"
description: "Ontdek hoe je Counter-Strike: Source servers veilig en efficiënt op afstand beheert en bestuurt → Leer nu meer"
sidebar_label: RCON
services:
  - gameserver-css
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te bedienen. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Hierdoor kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Counter-Strike: Source wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen Counter-Strike: Source monitoren en besturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `server.cfg` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
rcon_password "definieer-je-wachtwoord"
```


## Verbinden via RCON

Om via RCON verbinding te maken met de Counter-Strike: Source server, gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren van de tool op je computer, maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je onder **Poortoverzicht** onderaan de instellingenpagina in het gameserver beheer. Het wachtwoord en de poort moeten overeenkomen met de waarden die je in het panel of configuratiebestand hebt ingesteld. Gebruik het volgende commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```


## RCON Commando’s

Zodra je via RCON verbonden bent, kun je verschillende admin- en diagnosecommando’s uitvoeren op de Counter-Strike: Source server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, statusinformatie opvragen en de server aansturen.

| Commando                  | Beschrijving                                   |
|---------------------------|------------------------------------------------|
| `rcon_password <password>` | Authenticeer als RCON admin                    |
| `status`                  | Toont info over spelers en server              |
| `changelevel <map>`       | Wisselt van map                                |
| `mp_autoteambalance 0/1`  | Zet team auto-balancing aan/uit                 |
| `mp_timelimit <minutes>`  | Stelt de tijdslimiet van de map in             |
| `mp_friendlyfire 0/1`     | Zet friendly fire aan/uit                        |
| `mp_freezetime <seconds>` | Stelt de freeze-tijd aan het begin van een ronde in |
| `sv_cheats 0/1`           | Zet cheats aan/uit (alleen voor admins)         |
| `exec <file.cfg>`         | Voert een config-bestand uit                     |
| `kick <player>`           | Kickt een speler van de server                   |


## Conclusie

RCON is een onmisbare tool voor het remote beheren van Counter-Strike: Source gameservers. Het biedt snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is essentieel om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />