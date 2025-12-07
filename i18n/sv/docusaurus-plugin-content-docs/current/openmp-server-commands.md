---
id: openmp-server-commands
title: "Open.mp: Open.mp Serverkommandon"
description: "Upptäck hur du hanterar Open.mp-serverkommandon säkert med RCON-access och förbättra din serverkontroll → Lär dig mer nu"
sidebar_label: Serverkommandon
services:
  - gameserver-openmp
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Open.mp-servrar levereras med en rad användbara inbyggda serverkommandon som kan användas både i spelet och via serverkonsolen. I den här guiden går vi igenom många av dessa kommandon med beskrivningar och exempel på hur du använder dem.

<InlineVoucher />

## Ställa in access (RCON)

För att kunna köra serverkommandon i spelet måste du aktivera RCON-funktionen. Du behöver öppna din konfigurationsfil `config.json` och justera de nödvändiga parametrarna för att slå på funktionen och lägga till ett lösenord. Använd gärna vår [Serverkonfigurationsguide](openmp-configuration.md) för att hitta och öppna din serverkonfigurationsfil.

När du har filen öppen, leta upp parametrarna nedan; slå på funktionen och sätt ett RCON-lösenord.

| Parameter Namn                | Exempel                                | Beskrivning                                                                                   |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------- | 
| rcon.enable                   | true                                  | Slå på eller av RCON-funktionen                                                              |
| rcon.password                 | ZAP-IS-AWESOME                        | Sätt ett lösenord som krävs för att komma åt RCON från klienter                              |

:::info
Se till att du har satt ett RCON-lösenord i din konfiguration. Annars kan du få problem och RCON blir tillgängligt för vem som helst, vilket är väldigt osäkert.
:::

När du gjort dina ändringar, spara filen och starta om din server. Nästa gång servern startar ska RCON vara tillgängligt och redo att användas.

:::tip
Vill du veta mer om RCON? Kolla in vår [RCON-guide](openmp-rcon.md) som går djupare in på ämnet.
:::

## Tillgängliga Kommandon

Tabellen nedan visar viktiga serverkommandon för Open.mp, med exempel på hur du använder dem och vad de gör. Kommandona kan köras i spelet, via serverkonsolen eller med ett RCON-program. Vill du se alla aktuella kommandon rekommenderar vi att du läser [open.mp:s guide för serverkontroll](https://www.open.mp/docs/server/ControllingServer) som listar alla tillgängliga kommandon.

:::tip
När du kör kommandon direkt i konsolen eller via ett RCON-program behöver du inte använda prefixet `/rcon`. Det behövs bara när du kör kommandon **i spelet**.
:::

:::note
Se till att RCON är aktiverat, annars fungerar inte kommandona i spelet eller via RCON-program.
:::

### Allmänna Kommandon

| Kommando Syntax              | Accepterade Värden | Beskrivning                                                        | 
| ---------------------------- | ------------------ | ------------------------------------------------------------------ | 
| /rcon cmdlist                | -                  | Visar en lista med alla serverkommandon                            | 
| /rcon varlist                | -                  | Visar en lista med alla aktuella servervariabler                   | 
| /rcon exit                   | -                  | Stänger ner servern                                                | 
| /rcon echo [text]            | Sträng             | Skicka ett meddelande till serverkonsolen (visas inte i spelet)    | 
| /rcon say [text]             | Sträng             | Skicka ett meddelande till alla spelare i spelet (visas som "Admin: [text]") | 
| /rcon players                | -                  | Visar info om alla spelare som är anslutna just nu                 |
| /rcon reloadlog              | -                  | Laddar om serverns loggfil                                         |

### Moderativa Kommandon

| Kommando Syntax              | Accepterade Värden | Beskrivning                                                        | 
| ---------------------------- | ------------------ | ------------------------------------------------------------------ | 
| /rcon kick [id]              | Heltal             | Kicka ut en spelare från servern                                  | 
| /rcon ban [id]               | Heltal             | Banna en spelare från servern                                     | 
| /rcon banip [ip]             | Sträng             | Banna en IP-adress från servern                                   | 
| /rcon unbanip [ip]           | Sträng             | Ta bort bannlysning för en IP-adress                              | 
| /rcon reloadbans             | -                  | Laddar om bannlistan                                              |

<InlineVoucher />