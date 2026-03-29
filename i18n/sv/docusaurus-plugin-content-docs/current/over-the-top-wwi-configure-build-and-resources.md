---
id: over-the-top-wwi-configure-build-and-resources
title: "Over the Top WWI: Konfigurera Byggpoäng och Resurser"
description: "Lär dig hur du konfigurerar byggpoäng, kanoner och resursgränser på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Byggpoäng & Resurser
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Byggpoäng och resursinställningar i **Over the Top WWI** styr hur många byggnader, försvar och utrustning spelare kan placera ut under en match. Dessa värden påverkar direkt spelbalansen, särskilt i lägen där byggande och befästningar är centrala.

Genom att justera dessa inställningar kan du skapa mer defensivt gameplay med omfattande befästningar eller begränsa resurser för snabbare och mer aggressiva matcher.

<InlineVoucher />

## Konfiguration

Bygg- och resursinställningar konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
AttackerBuildPoints = 5000
DefenderBuildPoints = 5000
AttackerCannonPoints = 250
DefenderCannonPoints = 250
SapperBPRegenAmount = 50
SapperCannonPRegenAmount = 5
SapperPropBPRegenTime = 15
CannonPropPRegenTime = 15
```

- `AttackerBuildPoints` och `DefenderBuildPoints` definierar hur många byggpoäng varje lag har tillgängligt

- `AttackerCannonPoints` och `DefenderCannonPoints` styr hur många kanoner eller artillerienheter som kan placeras ut

- `SapperBPRegenAmount` definierar hur många byggpoäng som regenereras över tid

- `SapperCannonPRegenAmount` styr hur snabbt kanonpoäng regenereras

- `SapperPropBPRegenTime` och `CannonPropPRegenTime` definierar tiden i sekunder mellan varje regenereringstakt

Justera dessa värden för att kontrollera hur många byggnader och försvar spelare kan skapa och hur snabbt resurser fylls på under spelets gång.

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De uppdaterade resursinställningarna tillämpas automatiskt.

## Slutsats

Grattis! Du har nu framgångsrikt konfigurerat byggpoäng och resursinställningar på din **Over the Top WWI-server**. Det ger dig kontroll över befästningar, balanserar gameplay och formar hela stridsupplevelsen.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />