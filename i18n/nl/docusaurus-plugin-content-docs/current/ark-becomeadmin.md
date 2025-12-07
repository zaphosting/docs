---
id: ark-becomeadmin
title: "ARK: Word admin"
description: "Ontdek hoe je jouw game server beheert met volledige admin controle en de gameplay verbetert → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-ark
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je adminrechten toekent voor jouw server.  
<InlineVoucher />

## Configuratie

Adminrechten stellen je in staat om direct in het spel aanpassingen te maken op je server, zonder dat je iets in de Config hoeft te veranderen. Om jezelf of andere spelers adminrechten te geven, moet je eerst een server admin wachtwoord instellen. Dit doe je in de instellingen van ons webinterface.

![](https://screensaver01.zap-hosting.com/index.php/s/kLEsKbT6RN6c7Na/preview)

Zodra het wachtwoord is ingesteld, moet de server opnieuw opgestart worden. Daarna kun je verbinden met je server en inloggen als admin via de in-game console met het volgende commando en je server admin wachtwoord:

```
enableCheats wachtwoord
```

Daarna kun je alle servercommando’s als admin uitvoeren. Hieronder vind je een overzicht van de meest gebruikte commands.

## Veelgebruikte commando’s

| Commando                                      | Beschrijving                                                |
| --------------------------------------------- | ------------------------------------------------------------ |
| setcheatplayer TRUE/FALSE                      | Zet het cheatmenu aan of uit                                |
| admincheat AllowPlayerToJoinNoCheck SteamID    | Voeg een speler toe aan de whitelist                         |
| admincheat DisallowPlayerToJoinNoCheck SteamID | Verwijder een speler van de whitelist                        |
| admincheat SetMessageOfTheDay Bericht          | Stel het bericht van de dag (MOTD) in. Dit bericht verschijnt wanneer een speler verbinding maakt met de server |
| admincheat broadcast Bericht                   | Stuurt een bericht naar alle spelers op de server           |
| admincheat god                                 | Zet onsterfelijkheid aan voor je eigen speler               |
| admincheat fly                                 | Zet vliegen aan voor je eigen speler                         |
| admincheat walk                                | Zet vliegen uit voor je eigen speler                         |
| admincheat teleport                            | Teleporteert je speler in de richting waar je naar kijkt    |
| admincheat slomo                               | Verandert de snelheid van de server en de beweging van alle spelers |
| admincheat playersonly                         | Stopt alle bewegingen van wezens en stopt/voorkomt crafting |
| admincheat ghost                               | Zet noclip aan voor je eigen speler                          |
| admincheat forcetame                           | Laat je dinosauriërs direct temmen en berijden zonder zadel  |
| admincheat listplayers                         | Toont alle spelers inclusief hun SteamId64                   |
| admincheat banplayer SteamId64                 | Banned spelers via hun SteamID64                             |
| admincheat unbanplayer SteamId64               | Haalt een ban weg via het SteamID64                          |
| admincheat setplayerpos x y z                  | Teleporteert je eigen speler naar de gewenste locatie        |
| admincheat saveworld                           | Slaat de huidige wereldstatus op                             |
| admincheat addexperience Aantal                 | Voegt ervaring toe aan de speler                              |
| admincheat settimeofday Tijd                   | Verandert de tijd van de dag op de server. Voorbeeld: "admincheat settimeofday 12:00" |

## Conclusie

Gefeliciteerd, je hebt adminrechten succesvol ingesteld! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />