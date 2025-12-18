---
id: projectzomboid-rcon
title: "Project Zomboid: RCON"
description: "Ontdek hoe je Project Zomboid-servers veilig op afstand beheert en controleert zonder in-game toegang → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-projectzomboid
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te bedienen. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Project Zomboid wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische output. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen Project Zomboid monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het eerst ingeschakeld en ingesteld worden. Dit doe je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `servertest.ini` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
RCONPort=XXXXX
RCONPassword=define-your-password
```
De toegewezen RCON-poort vind je onderaan de instellingenpagina in het Port overzicht, deze moet je daar ook invullen.



## Verbinden via RCON

Om verbinding te maken met de Project Zomboid-server via RCON gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren van de tool op je pc, maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je in het **Port overzicht** onderaan de instellingenpagina in het gameserver beheer. Het wachtwoord en de poort moeten overeenkomen met de waarden die je in het panel of configuratiebestand hebt ingesteld. Gebruik het volgende commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commando’s

Zodra je via RCON verbonden bent, kun je verschillende admin- en diagnosecommando’s uitvoeren op de Project Zomboid-server. Welke commando’s beschikbaar zijn hangt af van de game-engine, maar meestal kun je acties uitvoeren voor spelersbeheer, statusvragen en servercontrole.

| Commando                          | Beschrijving                             |
| -------------------------------- | --------------------------------------- |
| `/grantadmin <username>`         | Geeft adminrechten aan een speler       |
| `/removeadmin <username>`        | Neemt adminrechten af van een speler    |
| `/save`                          | Slaat de wereld handmatig op            |
| `/kickuser <username>`           | Kickt een speler van de server          |
| `/banuser <username>`            | Bant een speler                         |
| `/unbanuser <username>`          | Haalt een ban van een speler af          |
| `/adduser <username> <password>` | Maakt een nieuwe gebruiker met wachtwoord |
| `/godmod <username>`             | Zet godmode aan of uit voor de opgegeven gebruiker |
| `/teleport <Name1> <Name2>`      | Teleporteert Name1 naar Name2           |
| `/chopper`                       | Simuleert een helikopter flyover        |



## Conclusie

RCON is een onmisbare tool voor het remote beheren van Project Zomboid-servers. Het geeft snelle en directe toegang tot adminfuncties, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is essentieel om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, we staan elke dag voor je klaar! 🙂

<InlineVoucher />