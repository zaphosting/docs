---
id: hytale-commands
title: "Hytale: Kommandolista"
description: "Översikt över tillgängliga konsol- och in-game-kommandon för Hytale-servrar → Lär dig mer nu"
sidebar_label: Kommandolista
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Hytale-servrar erbjuder en mängd kommandon som låter admins styra gameplay, spelare, världar och serverinställningar. Dessa kommandon kan köras antingen via live-serverkonsolen eller direkt i spelet, så länge du har rätt behörigheter.

![](https://screensaver01.zap-hosting.com/index.php/s/2yJ6G3AWCDfAHMj/download)

Den här sidan ger en översikt över vanliga och officiellt dokumenterade Hytale-serverkommandon.

<InlineVoucher />



## Autentisering

Autentiseringskommandon krävs för att auktorisera servern så att den kan ta emot spelarkopplingar och interagera med Hytales online-tjänster.

| Kommando               | Beskrivning                                                  |
| --------------------- | ------------------------------------------------------------ |
| `/auth login device`  | Startar autentisering via enhet. Servern visar en URL och en enhetskod som måste bekräftas med ett Hytale-konto. |
| `/auth login browser` | Startar autentisering via webbläsare. Kräver grafiskt gränssnitt på servern. |
| `/auth status`        | Visar aktuell autentiseringsstatus för servern.              |
| `/auth logout`        | Loggar ut servern och tar bort den aktiva autentiseringssessionen. |



## Spelare & Behörigheter

Dessa kommandon styr adminåtkomst och detaljerad behörighetsfördelning för användare och grupper.

| Kommando                                   | Beskrivning                                             |
| ----- | - |
| `/op add <PlayerName>`                    | Ger operatörsrättigheter till angiven spelare.          |
| `/op remove <PlayerName>`                 | Tar bort operatörsrättigheter från angiven spelare.     |
| `/perm user list <uuid>`                  | Visar alla behörigheter som är direkt tilldelade användaren. |
| `/perm user add <uuid> <permission>`      | Tilldelar en eller flera behörigheter direkt till användaren. |
| `/perm user remove <uuid> <permission>`   | Tar bort specifika behörigheter från användaren.        |
| `/perm user group list <uuid>`            | Visar alla behörighetsgrupper användaren tillhör.       |
| `/perm user group add <uuid> <group>`     | Lägger till användaren i angiven behörighetsgrupp.      |
| `/perm user group remove <uuid> <group>`  | Tar bort användaren från angiven behörighetsgrupp.       |
| `/perm group list <group>`                | Listar alla behörigheter som är tilldelade en grupp.    |
| `/perm group add <group> <permission>`    | Lägger till behörigheter i en grupp.                     |
| `/perm group remove <group> <permission>` | Tar bort behörigheter från en grupp.                      |



## Whitelist

Whitelist-kommandon begränsar serveråtkomst till godkända spelare.

| Kommando                          | Beskrivning                                      |
| -------------------------------- | ------------------------------------------------ |
| `/whitelist add <playername>`    | Lägger till angiven spelare i whitelist.         |
| `/whitelist remove <playername>` | Tar bort angiven spelare från whitelist.          |
| `/whitelist list`                | Visar alla spelare som för tillfället är på whitelist. |
| `/whitelist enable`              | Aktiverar whitelist.                              |
| `/whitelist disable`             | Avaktiverar whitelist.                            |
| `/whitelist status`              | Visar aktuell status för whitelist.               |



## Världshantering

Världskommandon styr skapande, inläsning, avlastning och borttagning av världar.

| Kommando                    | Beskrivning                                        |
| -- | -- |
| `/world create <name>`     | Skapar en ny värld med angivet namn.               |
| `/world load <name>`       | Läser in en befintlig värld och aktiverar den.     |
| `/world unload <name>`     | Avlastar en värld utan att radera dess data.       |
| `/world remove <name>`     | Tar bort en värld och all tillhörande data.        |
| `/world setdefault <name>` | Sätter standardvärlden som laddas vid serverstart. |



## Gameplay och miljö

Dessa kommandon påverkar direkt spelregler och världens beteende.

| Kommando                    | Beskrivning                                 |
| -------------------------- | ------------------------------------------- |
| `/list`                    | Visar alla spelare som är anslutna just nu. |
| `/tp <player> <target>`    | Teleporterar en spelare till en annan spelare. |
| `/tp <player> <x> <y> <z>` | Teleporterar en spelare till specifika koordinater. |



## Teleport & Positionering

Kommandon för att hantera spelarpositioner och synlighet.

| Kommando                    | Beskrivning                                 |
| -- | - |
| `/list`                    | Visar alla spelare som är anslutna just nu. |
| `/tp <player> <target>`    | Teleporterar en spelare till en annan spelare. |
| `/tp <player> <x> <y> <z>` | Teleporterar en spelare till specifika koordinater. |



## Verktyg och hjälp

Verktygskommandon ger hjälp och serverinfo.

| Kommando           | Beskrivning                                          |
| ----- | ---- |
| `/help`           | Visar en lista över tillgängliga kommandon.          |
| `/help <command>` | Visar detaljerad hjälp för ett specifikt kommando.   |
| `/status`         | Visar aktuell serverstatus och runtime-info.         |



## Avslutning

Hytales kommandosystem ger grymma verktyg för att hantera servrar, spelare och gameplay-beteende. Genom att förstå och använda kommandona kan admins smidigt driva och anpassa sin Hytale-servermiljö.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂



<InlineVoucher />