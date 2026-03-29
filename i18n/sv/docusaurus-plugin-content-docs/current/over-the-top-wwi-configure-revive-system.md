---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Konfigurera Revive-systemet"
description: "Lär dig hur du konfigurerar revive-mekanik på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Revive System
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Revive-systemet i **Over the Top WWI** bestämmer hur spelare kan återupplivas efter att ha blivit nedskjutna. Genom att justera dessa inställningar kan du styra hur förlåtande eller straffande striderna ska vara.

Ett snabbare eller mer pålitligt revive-system gör spelet mer tillgängligt, medan striktare inställningar ökar realismen och konsekvenserna för misstag.

<InlineVoucher />

## Konfiguration

Revive-systemet konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i din **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` definierar hur lång tid det tar att återuppliva en spelare
- `ReviveChance` bestämmer chansen att en revive lyckas
- `ReviveMaxDamage` definierar den maximala skada en spelare kan ha för att fortfarande kunna återupplivas

Justera dessa värden för att styra hur ofta revives lyckas och hur lång tid processen tar.

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De nya revive-inställningarna tillämpas automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat revive-systemet på din **Over the Top WWI-server**. Det ger dig möjlighet att finjustera svårighetsgraden i striderna och förbättra spelupplevelsen.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />