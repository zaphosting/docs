---
id: vrising-rcon
title: "V Rising: RCON"
description: "Ontdek hoe je V Rising-servers efficiënt op afstand beheert en controleert zonder in-game verbinding → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-vrising
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te beheren. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Hierdoor kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In V Rising wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in het spel verbonden hoeft te zijn**. Serveradmins kunnen V Rising monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `ServerHostSettings.json` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
  "Rcon": {
    "Enabled": false,
    "Port": XXXXX,
    "Password": "define-your-password"
  },
```

De toegewezen RCON-poort vind je onderaan de instellingenpagina in het Poortoverzicht en moet daar ook ingevuld worden.



## Verbinden via RCON

Voor het verbinden met je V Rising-server via RCON gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Nadat je de tool hebt geïnstalleerd op je pc, maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je in het **Poortoverzicht** onderaan de instellingenpagina in het gameserver beheer. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of configuratiebestand hebt ingesteld. Gebruik het volgende commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commando’s

Zodra je verbonden bent via RCON, kun je verschillende admin- en diagnosecommando’s uitvoeren op de V Rising-server. Welke commando’s beschikbaar zijn, hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando                                   | Beschrijving                                                 |
|--------------------------------------------|--------------------------------------------------------------|
| `adminauth`                                | Activeert adminrechten voor je karakter (alleen in-game)     |
| `admindeauth`                              | Deactiveert adminrechten                                      |
| `banuser <SteamID>`                        | Banneert een speler permanent                                 |
| `unbanuser <SteamID>`                      | Haalt een ban van een speler weg                              |
| `kick <playername>`                        | Kickt een speler direct van de server                         |
| `give <ItemName> <Amount>`                 | Geeft items direct aan je inventory                           |
| `teleport <X> <Y>`                         | Teleporteert je karakter naar opgegeven coördinaten          |
| `teleportplayer <name> <X> <Y>`            | Teleporteert een andere speler naar specifieke coördinaten   |
| `changehealth <value>`                     | Zet je huidige gezondheid op een specifieke waarde           |
| `spawn <EntityName> <Amount>`              | Spawnt NPC’s, creatures of andere entiteiten                  |



## Conclusie

RCON is een onmisbare tool voor het remote beheren van V Rising-servers. Het biedt snelle en directe toegang tot adminfuncties, met beveiliging via wachtwoordauthenticatie. Een correcte en veilige configuratie is essentieel om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />