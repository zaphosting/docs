---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Konfigurera Automatisk Lagbalansering"
description: "Lär dig hur du konfigurerar automatisk lagbalansering på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Automatisk Lagbalansering
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Lagbalansering är superviktigt för rättvisa och roliga matcher i **Over the Top WWI**. Utan bra balans kan ett lag få en stor fördel, vilket leder till ojämn gameplay och en sämre spelupplevelse.

Auto-balance-systemet hjälper till att hålla det rättvist genom att automatiskt flytta spelare mellan lagen när vissa villkor uppfylls.

<InlineVoucher />

## Konfiguration

Automatisk lagbalansering ställs in i serverns konfigurationsfil. Du hittar och redigerar den i din **gameserver kontrollpanel** under **Configs**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti den hittar du följande inställningar:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` aktiverar eller avaktiverar automatisk lagbalansering

- `0` → Avaktiverad
- `1` → Aktiverad

- `TeamPercentsAutoBalance` bestämmer önskad lagfördelning. Exempel: `50` = lika stora lag
- `AutoBalanceThreshold` anger hur stor obalans som tillåts innan balansering startar
- `MinAutoBalanceCount` anger minsta antal spelare innan auto-balance aktiveras
- `LimitTeamSelection` begränsar om spelare kan välja lag manuellt

- `0` → Ingen begränsning
- `1–3` → Begränsar lagval beroende på värdet

När du ändrat i `ServerConfiguration.ini`, spara filen och starta om din server. Då sköter auto-balance systemet lagfördelningen automatiskt under matcherna.

## Slutsats

Grattis! Du har nu konfigurerat automatisk lagbalansering på din **Over the Top WWI-server**. Det hjälper till att skapa rättvisa matcher och ger en bättre upplevelse för alla spelare.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />