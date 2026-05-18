---
id: over-the-top-wwi-configure-class-limits
title: "Over the Top WWI: Konfigurera Klassgränser"
description: "Lär dig hur du konfigurerar klassgränser på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Klassgränser
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Klassgränser i **Over the Top WWI** styr hur många spelare som kan använda specifika enhetstyper som prickskyttar, sprängare eller tunga enheter. Att justera dessa gränser hjälper till att balansera spelet och förhindrar att vissa klasser blir överanvända.

Genom att konfigurera klassgränser kan du säkerställa rättvisa laguppställningar och skapa en mer strukturerad och taktisk spelupplevelse.

<InlineVoucher />

## Konfiguration

Klassgränser konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
EnableClassLimits = 1
PercentofCavPerTeam = 20
NumberOfSappers = 90
NumberOfSpecialists = 12
NumberofInfOfficers = 9
NumberOfSnipers = 10
NumberOfHeavys = 12
NumberofStormTroops = 25
MinimumNumOfPlayerForClassLimits = 15
```

- `EnableClassLimits` aktiverar eller inaktiverar klassbegränsningar  
- `0` → Avaktiverad  
- `1` → Aktiverad  

- `PercentofCavPerTeam` definierar procentandelen kavallerienheter per lag  

- `NumberOfSappers`, `NumberOfSpecialists`, `NumberOfSnipers`, `NumberOfHeavys`, `NumberofStormTroops` bestämmer hur många spelare som kan välja varje klass  

- `NumberofInfOfficers` styr antalet officerare som kan väljas  

- `MinimumNumOfPlayerForClassLimits` definierar hur många spelare som måste vara på servern innan klassgränserna träder i kraft  

Justera dessa värden för att kontrollera hur många spelare som kan välja varje klass och för att balansera din server efter din föredragna spelstil.

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De nya klassgränserna tillämpas automatiskt.

## Avslutning

Grattis! Du har nu framgångsrikt konfigurerat klassgränser på din **Over the Top WWI-server**. Det här gör att du kan balansera laguppställningar och förbättra den totala spelupplevelsen.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />