---
id: over-the-top-wwi-configure-performance-settings
title: "Over the Top WWI: Optimera Serverprestanda"
description: "Lär dig hur du optimerar prestanda och serverbeteende på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Prestandainställningar
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Prestandainställningarna i **Over the Top WWI** påverkar hur smidigt din server körs, särskilt vid höga spelarantal eller tung AI-användning. Rätt konfiguration kan förbättra stabiliteten, minska lagg och ge en bättre spelupplevelse för alla spelare.

Genom att justera dessa värden kan du balansera visuell simulering, AI-beräkningar och serverbelastning.

<InlineVoucher />

## Konfiguration

Prestandainställningar konfigureras i serverns konfigurationsfil. Du kan komma åt och redigera denna fil i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna konfigurationsfilen `ServerConfiguration.ini`. Inuti filen hittar du följande parametrar:

```
TargetFPS = 0
NavCalcsPerFrame = 2000
NavMeshFrames = 1
NavMeshAutoSeed = 5
ResetIfNoPlayers = 1
```

- `TargetFPS` definierar serverns prestandaprofil

  - `0` → Standard
  - `1` → Optimering för högre spelarantal
  - `2` → Optimering för mycket högt spelarantal

- `NavCalcsPerFrame` styr hur många navigationsberäkningar som görs per frame
- `NavMeshFrames` definierar hur ofta navigationsnät uppdateras
- `NavMeshAutoSeed` påverkar hur AI:s navigationsvägar genereras
- `ResetIfNoPlayers` återställer servern automatiskt när inga spelare är anslutna

  - `0` → Avaktiverad
  - `1` → Aktiverad

Att justera dessa inställningar kan hjälpa till att förbättra serverprestandan, särskilt när du kör många bots eller hostar stora strider.

Efter att du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. De nya prestandainställningarna tillämpas automatiskt.

## Slutsats

Grattis! Du har nu optimerat prestandainställningarna på din **Over the Top WWI-server**. Rätt justering av dessa värden hjälper till att bibehålla stabilitet och säkerställer smidig gameplay även vid hög belastning.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam, som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />