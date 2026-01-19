---
id: hytale-commands
title: "Hytale: Commandolijst"
description: "Overzicht van beschikbare console- en in-game commando’s voor Hytale-servers → Ontdek het nu"
sidebar_label: Commandolijst
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hytale-servers bieden een breed scala aan commando’s waarmee admins gameplay, spelers, werelden en serverconfiguratie kunnen beheren. Deze commando’s kunnen worden uitgevoerd via de live serverconsole of direct in-game, mits je de juiste permissies hebt.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Op deze pagina vind je een overzicht van veelgebruikte en officieel gedocumenteerde Hytale-servercommando’s.

<InlineVoucher />



## Authenticatie

Authenticatie-commando’s zijn nodig om de server te autoriseren zodat deze spelersverbindingen accepteert en kan communiceren met Hytale online services.

| Commando               | Beschrijving                                                  |
| --------------------- | ------------------------------------------------------------ |
| `/auth login device`  | Start de device-gebaseerde authenticatieflow. De server toont een URL en een devicecode die bevestigd moet worden met een Hytale-account. |
| `/auth login browser` | Start een browser-gebaseerde authenticatieflow. Vereist een grafische omgeving op de server. |
| `/auth status`        | Toont de huidige authenticatiestatus van de server.          |
| `/auth logout`        | Logt de server uit en verwijdert de actieve authenticatiesessie. |



## Speler & Permissies

Met deze commando’s regel je admin-toegang en gedetailleerde permissietoewijzing voor gebruikers en groepen.

| Commando                                   | Beschrijving                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Geeft operatorrechten aan de opgegeven speler.           |
| `/op remove <PlayerName>`                 | Neemt operatorrechten af van de opgegeven speler.        |
| `/perm user list <uuid>`                  | Toont alle permissies die direct aan de gebruiker zijn toegekend. |
| `/perm user add <uuid> <permission>`      | Ken één of meerdere permissies direct toe aan de gebruiker. |
| `/perm user remove <uuid> <permission>`   | Verwijdert specifieke permissies van de gebruiker.       |
| `/perm user group list <uuid>`            | Toont alle permissiegroepen waar de gebruiker lid van is. |
| `/perm user group add <uuid> <group>`     | Voegt de gebruiker toe aan de opgegeven permissiegroep.  |
| `/perm user group remove <uuid> <group>`  | Verwijdert de gebruiker uit de opgegeven permissiegroep. |
| `/perm group list <group>`                | Lijst alle permissies die aan een groep zijn toegekend.  |
| `/perm group add <group> <permission>`    | Voegt permissies toe aan een groep.                      |
| `/perm group remove <group> <permission>` | Verwijdert permissies van een groep.                     |



## Whitelist

Whitelist-commando’s beperken de servertoegang tot alleen goedgekeurde spelers.

| Commando                          | Beschrijving                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Voegt de opgegeven speler toe aan de whitelist.   |
| `/whitelist remove <playername>` | Verwijdert de opgegeven speler van de whitelist.  |
| `/whitelist list`                | Toont alle spelers die momenteel op de whitelist staan. |
| `/whitelist enable`              | Zet de whitelist aan.                             |
| `/whitelist disable`             | Zet de whitelist uit.                             |
| `/whitelist status`              | Toont de huidige status van de whitelist.         |



## Wereldbeheer

Wereld-commando’s regelen het aanmaken, laden, ontladen en verwijderen van werelden.

| Commando                    | Beschrijving                                        |
| -- | -- |
| `/world create <name>`     | Maakt een nieuwe wereld aan met de opgegeven naam. |
| `/world load <name>`       | Laadt een bestaande wereld en maakt deze actief.    |
| `/world unload <name>`     | Ontlaadt een wereld zonder de data te verwijderen.  |
| `/world remove <name>`     | Verwijdert een wereld en alle bijbehorende data.    |
| `/world setdefault <name>` | Stelt de standaardwereld in die bij het opstarten van de server wordt geladen. |



## Gameplay en omgeving

Deze commando’s beïnvloeden direct de gameplayregels en het gedrag van de wereld.

| Commando                    | Beschrijving                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Toont alle spelers die momenteel verbonden zijn. |
| `/tp <player> <target>`    | Teleporteert een speler naar een andere speler. |
| `/tp <player> <x> <y> <z>` | Teleporteert een speler naar specifieke coördinaten. |



## Teleportatie & Positionering

Commando’s om spelersposities en zichtbaarheid te beheren.

| Commando                    | Beschrijving                                 |
| -- | - |
| `/list`                    | Toont alle spelers die momenteel verbonden zijn. |
| `/tp <player> <target>`    | Teleporteert een speler naar een andere speler. |
| `/tp <player> <x> <y> <z>` | Teleporteert een speler naar specifieke coördinaten. |



## Utility en hulp

Utility-commando’s bieden hulp en serverinformatie.

| Commando           | Beschrijving                                          |
| ----- | ---- |
| `/help`           | Toont een lijst met beschikbare commando’s.           |
| `/help <command>` | Toont gedetailleerde hulp voor een specifiek commando. |
| `/status`         | Toont de huidige serverstatus en runtime-informatie.  |



## Conclusie

Het Hytale-commandosysteem biedt krachtige tools om servers, spelers en gameplay te beheren. Door de beschikbare commando’s te begrijpen en te gebruiken, kunnen admins hun Hytale-serveromgeving efficiënt runnen en personaliseren.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂



<InlineVoucher />