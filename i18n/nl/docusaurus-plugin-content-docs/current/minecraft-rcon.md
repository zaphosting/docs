---
id: minecraft-rcon
title: "Minecraft: RCON"
description: "Ontdek hoe je Minecraft-servers op afstand beheert met RCON voor flexibele, veilige controle en efficiënte serveradministratie → Leer nu meer"
sidebar_label: RCON
services:
  - gameserver-minecraft
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol waarmee je gameservers op afstand kunt bedienen. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Zo kun je admin-commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Minecraft wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het bekijken van diagnostische outputs. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler in de game hoeft te zitten**. Serveradmins kunnen Minecraft monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het eerst ingeschakeld en ingesteld worden. Dit doe je direct in de gameserver administratie. Onder de **Instellingen** vind je de optie **RCON** die je moet activeren. Stel een veilig wachtwoord in en kies een geldige poort. Dit regel je door het configuratiebestand te bewerken dat je vindt onder **Configs** in het gameserver beheerpanel. In het bestand `server.properties` moeten de volgende regels toegevoegd of aangepast worden:

```cfg
enable-rcon=true
rcon.port=<XXXXX>
rcon.password=<definieer-je-wachtwoord>
```
De toegewezen RCON-poort vind je onderaan de instellingenpagina in het Poortoverzicht, deze moet je daar ook invullen.



## Verbinden via RCON

Om via RCON verbinding te maken met je Minecraft-server, gebruik je de command-line tool **rcon-cli**. Die kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren op je pc, maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je in het **Poortoverzicht** onderaan de instellingenpagina in de gameserver administratie. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of configuratiebestand hebt ingesteld. Gebruik dit commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commando’s

Als je verbonden bent via RCON, kun je allerlei admin- en diagnostische commando’s uitvoeren op de Minecraft-server. Welke commando’s beschikbaar zijn, hangt af van de game-engine, maar meestal kun je spelers beheren, status opvragen en de server aansturen.

| Commando               | Beschrijving                                |
|------------------------|---------------------------------------------|
| `list`                 | Toont de lijst met verbonden spelers       |
| `say <bericht>`        | Stuurt een bericht naar alle spelers        |
| `kick <speler>`        | Kickt een speler van de server               |
| `ban <speler>`         | Bant een speler                              |
| `pardon <speler>`      | Haalt een ban van een speler af              |
| `op <speler>`          | Geeft operatorrechten aan een speler          |
| `deop <speler>`        | Neemt operatorrechten af                      |
| `time set <waarde>`    | Zet de wereldtijd (bijv. dag, nacht, nummer) |
| `gamemode <modus> <speler>` | Zet de gamemode van een speler          |
| `weather <clear/rain/thunder>` | Verandert het weer                   |
| `stop`                 | Stopt de server netjes                        |



## Conclusie

RCON is een must-have tool voor het remote beheren van Minecraft-servers. Het geeft snelle en directe toegang tot admin-functies, met beveiliging via wachtwoordauthenticatie. Zorg voor een goede en veilige configuratie om de server stabiel te houden en ongewenste toegang te voorkomen.

Heb je vragen of hulp nodig? Onze support staat dagelijks voor je klaar om je te helpen! 🙂

<InlineVoucher />