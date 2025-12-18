---
id: factorio-rcon
title: "Factorio: RCON"
description: "Ontdek hoe je je Factorio-server op afstand beheert en bestuurt voor efficiënte administratie en gameplay-aanpassingen → Leer het nu"
sidebar_label: RCON
services:
  - gameserver-factorio
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

RCON (Remote Console) is een netwerkprotocol dat wordt gebruikt om gameservers op afstand te bedienen. Het geeft toegang tot de serverconsole zonder directe interactie met de serveromgeving. Hierdoor kun je administratieve commando’s uitvoeren, configuratie-instellingen aanpassen of serverstatusinformatie opvragen.

In Factorio wordt RCON gebruikt om server-side commando’s uit te voeren, zoals het beheren van spelers, het wijzigen van gameplay-instellingen of het opvragen van diagnostische gegevens. De verbinding is beveiligd met een wachtwoord en verloopt via een specifieke poort, toegankelijk via compatibele RCON-clients.

Een groot voordeel van RCON is dat je de server kunt beheren **zonder dat je als speler ingelogd hoeft te zijn in het spel**. Serveradmins kunnen Factorio monitoren en aansturen via externe tools, command-line interfaces of webdashboards, wat super flexibel en handig is voor remote beheer.

<InlineVoucher />

## Configuratie

Voordat je RCON kunt gebruiken, moet het ingeschakeld en ingesteld worden. Dit doe je direct in de gameserver administratie. Onder het kopje **Instellingen** vind je de optie **RCON** die je moet activeren. Stel een veilig wachtwoord in.

De toegewezen RCON-poort vind je onderaan de instellingenpagina bij **Poortoverzicht**. 



## Verbinden via RCON

Om via RCON verbinding te maken met je Factorio-server gebruik je de command-line tool **rcon-cli**. Deze kun je downloaden van de officiële [GitHub repository](https://github.com/gorcon/rcon-cli). Na het downloaden en installeren op je computer maak je verbinding met het IP-adres van de server, de RCON-poort en het RCON-wachtwoord.

De toegewezen poort vind je in het **Poortoverzicht** onderaan de instellingenpagina in de gameserver administratie. Het wachtwoord en de poort moeten overeenkomen met wat je in het panel of de configuratie hebt ingesteld. Gebruik het volgende commando om te verbinden en direct een commando uit te voeren:

```bash
rcon-cli -a <IP>:<PORT> -p <PASSWORD> command
```



## RCON Commando’s

Zodra je via RCON verbonden bent, kun je verschillende admin- en diagnosecommando’s uitvoeren op je Factorio-server. Welke commando’s beschikbaar zijn, hangt af van de game-engine, maar meestal kun je spelers beheren, statusinformatie opvragen en de server aansturen.

| Commando                         | Beschrijving                                          |
|---------------------------------|------------------------------------------------------|
| `/help`                         | Toont alle beschikbare commando’s                    |
| `/players`                      | Lijst van alle verbonden spelers                     |
| `/kick <player>`                | Kickt een speler van de server                        |
| `/ban <player>`                 | Bant een speler permanent                             |
| `/unban <player>`               | Haalt een eerder gebande speler van de ban af        |
| `/admins`                       | Toont de lijst met serveradmins                       |
| `/promote <player>`             | Geeft adminrechten aan een speler                      |
| `/demote <player>`              | Neemt adminrechten van een speler af                   |
| `/save`                         | Slaat de huidige wereldstatus op                      |
| `/server-save`                  | Start een handmatige server save                      |



## Conclusie

RCON is een onmisbare tool voor het remote beheren van je Factorio-gameservers. Het biedt snelle en directe toegang tot adminfuncties, met beveiliging via wachtwoordauthenticatie. Een goede en veilige configuratie is essentieel om de server stabiel te houden en ongeautoriseerde toegang te voorkomen.

Heb je vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />