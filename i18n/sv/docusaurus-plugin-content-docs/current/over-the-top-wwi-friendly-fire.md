---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Konfigurera Friendly Fire"
description: "Lär dig hur du aktiverar eller justerar friendly fire-inställningar på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Friendly fire avgör om spelare kan skada sina egna lagkamrater under spelets gång. Genom att justera dessa inställningar kan du styra hur realistisk eller förlåtande striden ska vara på din **Over the Top WWI**-server.

Att aktivera friendly fire kan öka realismen och den taktiska spelupplevelsen, medan att inaktivera eller minska det kan skapa en mer avslappnad och tillgänglig upplevelse.

<InlineVoucher />

## Konfiguration

Friendly fire-inställningarna konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` aktiverar eller inaktiverar närstridsskada mot lagkamrater.
- `EnableFriendlyRangeFire` aktiverar eller inaktiverar distansskada mot lagkamrater.
- `FriendlyFireAtRoundStart` definierar en fördröjning i sekunder innan friendly fire blir aktivt.
- `FriendlyFirePercent` styr hur mycket närstridsskada som appliceras på lagkamrater.
- `RangeFriendlyFirePercent` styr hur mycket distansskada som appliceras på lagkamrater.
- `ExplosionFf` aktiverar eller inaktiverar explosionsskada mot lagkamrater.
- `FriendlyFireReflectPercent` reflekterar en procentandel av skadan tillbaka till angriparen istället för till lagkamraten.

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De nya friendly fire-inställningarna träder i kraft direkt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat friendly fire-inställningarna på din **Over the Top WWI-server**. Genom att justera dessa värden kan du balansera realismen och spelupplevelsen för din community.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />