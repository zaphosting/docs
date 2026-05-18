---
id: over-the-top-wwi-configure-round-settings
title: "Over the Top WWI: Konfigurera Runda-inställningar"
description: "Lär dig hur du ställer in rundlängd och matchflöde på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Runda-inställningar
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Runda-inställningarna i **Over the Top WWI** bestämmer hur länge matcher varar och hur spelet flyter på. Genom att justera dessa värden kan du styra matchtempot, rundlängden och hela sessionens flöde.

Det här är extra viktigt för att balansera snabba matcher mot längre, mer strategiska bataljer.

<InlineVoucher />

## Konfiguration

Runda-inställningarna konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera den här filen i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
MaxAmountofRounds = 3
MaxMapTime = 30
FinalRecapTimer2 = 3
PersistentMatch = 0
```

- `MaxAmountofRounds` definierar hur många rundor som spelas per match
- `MaxMapTime` sätter maxlängden på en karta i minuter
- `FinalRecapTimer2` styr hur länge slutrecapen visas efter rundan

- `PersistentMatch` avgör om tid och poäng fortsätter mellan rundorna

  - `0` → Avstängt
  - `1` → Påslaget

Justera dessa värden för att skapa kortare matcher med snabbare rotationer eller längre sessioner med utökad gameplay.

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De uppdaterade runda-inställningarna appliceras automatiskt.

## Avslutning

Grattis! Du har nu konfigurerat runda-inställningarna på din **Over the Top WWI-server**. Det ger dig kontroll över matchlängden och förbättrar spelupplevelsen på din server.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />