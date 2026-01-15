---
id: hytale-commands-list
title: "Hytale: Commandolijst"
description: "Overzicht van beschikbare console- en in-game commands voor Hytale servers → Ontdek het nu"
sidebar_label: Commandolijst
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Hytale-servers bieden een breed scala aan commands waarmee admins gameplay, spelers, werelden en serverconfiguratie kunnen beheren. Deze commands kunnen worden uitgevoerd via de live serverconsole of direct in-game, mits je de juiste permissies hebt.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Op deze pagina vind je een overzicht van veelgebruikte en officieel gedocumenteerde Hytale server commands.

<InlineVoucher />



## Authenticatie

Authenticatie-commands zijn nodig om de server te autoriseren zodat hij spelersverbindingen accepteert en kan communiceren met de online Hytale-diensten.

| Command               | Beschrijving                                                  |
| --------------------- | ------------------------------------------------------------- |
| `/auth login device`  | Start de device-gebaseerde authenticatie flow. De server toont een URL en een devicecode die bevestigd moeten worden met een Hytale-account. |
| `/auth login browser` | Start een browser-gebaseerde authenticatie flow. Vereist een grafische omgeving op de server. |
| `/auth status`        | Toont de huidige authenticatiestatus van de server.           |
| `/auth logout`        | Logt de server uit en verwijdert de actieve authenticatiesessie. |



## Speler & Permissies

Met deze commands regel je admin-toegang en gedetailleerde permissietoewijzing voor gebruikers en groepen.

| Command                                   | Beschrijving                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Geeft operatorrechten aan de opgegeven speler.          |
| `/op remove <PlayerName>`                 | Neemt operatorrechten af van de opgegeven speler.        |
| `/perm user list <uuid>`                  | Toont alle permissies die direct aan de gebruiker zijn toegekend. |
| `/perm user add <uuid> <permission>`      | Ken één of meerdere permissies direct toe aan de gebruiker. |
| `/perm user remove <uuid> <permission>`   | Verwijdert specifieke permissies van de gebruiker.       |
| `/perm user group list <uuid>`            | Toont alle permissiegroepen waar de gebruiker lid van is. |
| `/perm user group add <uuid> <group>`     | Voegt de gebruiker toe aan de opgegeven permissiegroep.  |
| `/perm user group remove <uuid> <group>`  | Verwijdert de gebruiker uit de opgegeven permissiegroep. |
| `/perm group list <group>`                | Toont alle permissies die aan een groep zijn toegekend.  |
| `/perm group add <group> <permission>`    | Voegt permissies toe aan een groep.                      |
| `/perm group remove <group> <permission>` | Verwijdert permissies van een groep.                     |



## Whitelist

Whitelist-commands beperken de servertoegang tot alleen goedgekeurde spelers.

| Command                          | Beschrijving                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Voegt de opgegeven speler toe aan de whitelist.  |
| `/whitelist remove <playername>` | Verwijdert de opgegeven speler van de whitelist. |
| `/whitelist list`                | Toont alle spelers die momenteel op de whitelist staan. |
| `/whitelist enable`              | Zet de whitelist aan.                             |
| `/whitelist disable`             | Zet de whitelist uit.                             |
| `/whitelist status`              | Toont de huidige status van de whitelist.        |



## Wereldbeheer

Wereld-commands regelen het aanmaken, laden, ontladen en verwijderen van werelden.

| Command                    | Beschrijving                                        |
| -- | -- |
| `/world create <name>`     | Maakt een nieuwe wereld aan met de opgegeven naam. |
| `/world load <name>`       | Laadt een bestaande wereld en maakt deze actief.    |
| `/world unload <name>`     | Ontlaadt een wereld zonder de data te verwijderen.  |
| `/world remove <name>`     | Verwijdert een wereld en alle bijbehorende data.    |
| `/world setdefault <name>` | Stelt de standaardwereld in die bij het opstarten van de server geladen wordt. |



## Gameplay en omgeving

Deze commands beïnvloeden direct de gameplayregels en het gedrag van de wereld.

| Command                    | Beschrijving                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Toont alle momenteel verbonden spelers.    |
| `/tp <player> <target>`    | Teleporteert een speler naar een andere speler. |
| `/tp <player> <x> <y> <z>` | Teleporteert een speler naar specifieke coördinaten. |



## Teleportatie & Positionering

Commands om spelerposities en zichtbaarheid te beheren.

| Command                    | Beschrijving                                 |
| -- | - |
| `/list`                    | Toont alle momenteel verbonden spelers.    |
| `/tp <player> <target>`    | Teleporteert een speler naar een andere speler. |
| `/tp <player> <x> <y> <z>` | Teleporteert een speler naar specifieke coördinaten. |



## Utility en hulp

Utility-commands bieden hulp en serverinformatie.

| Command           | Beschrijving                                          |
| ----- | ---- |
| `/help`           | Toont een lijst met beschikbare commands.            |
| `/help <command>` | Toont gedetailleerde hulp voor een specifiek command. |
| `/status`         | Toont de huidige serverstatus en runtime-informatie. |



## Conclusie

Het Hytale commandosysteem biedt krachtige tools om servers, spelers en gameplay te beheren. Door de beschikbare commands te begrijpen en te gebruiken, kunnen admins hun Hytale-serveromgeving efficiënt runnen en personaliseren.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, we staan dagelijks voor je klaar! 🙂



<InlineVoucher />