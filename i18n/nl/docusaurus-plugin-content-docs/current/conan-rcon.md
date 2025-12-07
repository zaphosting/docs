---
id: conan-rcon
title: "Conan Exiles: RCON"
description: "Ontdek hoe je Conan Exiles-servers veilig op afstand beheert en controleert zonder in-game verbinding → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-conan
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt bedienen. Het geeft toegang tot de serverconsole zonder dat je direct in de serveromgeving hoeft te zitten. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Conan Exiles gebruik je RCON om server-side commando’s uit te voeren, zoals spelers beheren, gameplay-instellingen wijzigen of diagnostische output bekijken. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in het spel hoeft te zitten**. Serveradmins kunnen Conan Exiles monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `game.ini` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
[RconPlugin]
RconEnabled=1
RconPassword=definieer-je-wachtwoord
RconPort=XXXXX
```
De toegewezen RCON-poort vind je onderaan de instellingenpagina in het Poort-overzicht en moet daar ook ingevuld worden.



## Verbinden via RCON

Om via RCON verbinding te maken met je Conan Exiles-server gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren op je pc maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je in het **Poort-overzicht** onderaan de instellingenpagina in het gameserver beheer. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of configuratiebestand hebt ingesteld. Gebruik dit commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commando’s

Zodra je via RCON verbonden bent, kun je allerlei admin- en diagnostische commando’s uitvoeren op je Conan Exiles-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                    | Beschrijving                      |
| --------------------------- | -------------------------------- |
| `broadcast <message>`       | Stuurt een bericht naar alle spelers |
| `kick <playername>`         | Kickt een speler van de server   |
| `ban <playername>`          | Bant een speler                  |
| `unban <playername>`        | Haalt een ban van een speler af  |
| `restartserver`             | Herstart de server               |
| `restartserver <seconds>`   | Herstart de server met vertraging |
| `shutdownserver`            | Zet de server uit                |
| `shutdownserver <seconds>`  | Zet de server uit met vertraging |
| `changemap <mapname>`       | Laadt een andere map             |
| `setpassword <newpassword>` | Stelt een nieuw RCON-wachtwoord in |

## Conclusie

RCON is een must-have tool voor het remote beheren van je Conan Exiles-servers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Zorg dat je het goed en veilig instelt om je server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂

<InlineVoucher />