---
id: hytale-become-invisible
title: "Hytale: Bli osynlig"
description: "Upptäck hur du blir osynlig på en Hytale-server → Läs mer nu"
sidebar_label: Bli osynlig
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att vara osynlig kan vara grymt användbart på Hytale-servrar för moderation, testning eller content-skapande. Det låter admins spana på spelare utan att bli upptäckta, kolla misstänkt aktivitet eller utforska områden utan att störa spelet. Beroende på serverns inställningar och vilka rättigheter du har, kan osynlighet oftast aktiveras via in-game-kommandon eller live-konsolen.

<InlineVoucher />

## Krav

För att använda osynlighetsfunktionerna måste du ha tillräckliga rättigheter på servern. Oftast krävs operatörsprivilegier eller tillgång till moderations- och spelkommandon. Har du inte rättigheterna nekas kommandot och osynligheten kan inte aktiveras. Vill du fixa rättigheterna? Kolla in vår guide [Bli admin](hytale-becomeadmin.md).

## Så blir du osynlig

Öppna chatten i spelet och skriv in osynlighetskommandot som servern stödjer. Kör det här kommandot:

```
/hide <playername>
```

När kommandot gått igenom blir din karaktär osynlig för andra spelare i världen. Du kan fortfarande röra dig, interagera och hålla koll på vad som händer, beroende på serverns regler och hur osynligheten är implementerad.

Utöver grundkommandot finns det också utökade alternativ som låter dig styra vem som kan se en spelare. Du kan till exempel gömma en spelare bara för en specifik målspelare, eller göra alla osynliga på servern.

Följande kommandon finns:
- `/hide <playername>`  Gör den angivna spelaren osynlig.
- `/hide <playername> --target <playername>`  Gör den angivna spelaren osynlig bara för målspelaren.
- `/hide all`  Gör alla spelare osynliga.

## Stäng av osynlighet

Vill du synas igen? Kör motsvarande kommando för att stänga av osynligheten. När kommandot bekräftats kan andra spelare se din karaktär som vanligt igen.

```
/hide show <playername>
```

Det finns också fler kommandon för att ta bort osynlighet i mer specifika situationer, som att återställa synlighet bara för vissa målspelare eller ta bort osynlighet från alla.

Följande kommandon finns:
- `/hide show <playername>`  Tar bort osynligheten från den angivna spelaren.
- `/hide show <playername> --target <playername>`  Tar bort osynligheten från den angivna spelaren för målspelaren.
- `/hide showall`  Tar bort osynligheten från alla spelare.

## Sammanfattning

Att bli osynlig på en Hytale-server är ett grymt verktyg för admins och moderators som vill hålla koll på spelet diskret. Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, vi finns här för dig varje dag! 🙂

<InlineVoucher />