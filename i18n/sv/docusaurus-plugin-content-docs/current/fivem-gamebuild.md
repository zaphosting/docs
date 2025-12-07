---
id: fivem-gamebuild
title: "FiveM: Aktivera DLC-innehåll"
description: "Upptäck hur du tvingar fram specifika DLC-versioner på din FiveM-server för att få tillgång till de senaste kartorna, fordonen och innehållet → Lär dig mer nu"
sidebar_label: Aktivera DLC game build
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att tvinga fram en game build låter dig sätta en specifik DLC-version på din server, så att du kan spela med de senaste kartorna, kläderna, fordonen och mycket mer!

<InlineVoucher />

## Tillgängliga Gamebuilds

Här är en översikt över alla tillgängliga DLC och deras Build IDs:

| Build ID |        Build Name         |
| :------: | :-----------------------: |
|   2060   | Los Santos Summer Special |
|   2189   |        Cayo Perico        |
|   2372   |         Tuner DLC         |
|   2545   |       The Contract        |
|   2699   | The Criminal Enterprises  |
|   2802   |   Los Santos Drug Wars    |
|   2944   |  San Andreas Mercenaries  |
|   3095   |       The Chop Shop       |
|   3258   |  Bottom Dollar Bounties   |
|   3407   |    Agents of Sabotage     |
|   3570   |        Money Fronts       |



## Aktivera build

För att använda extra DLC-innehåll som Cayo Perico, Tuner DLC eller Los Santos Summer Special måste du ställa in det i konfigurationen för din server. För att sätta DLC-builden öppnar du din txAdmin-panel och går till FXServer-inställningarna.

![](https://screensaver01.zap-hosting.com/index.php/s/HxmnfPEdcDJgZLX/preview)

Lägg sedan enkelt till din önskade gamebuild i avsnittet **Additional Arguments** med kommandot set, där du byter ut `BUILD_ID_CHOICE` mot ett från tabellen:

```
+set sv_enforceGameBuild BUILD_ID_CHOICE
```



## Sammanfattning

När du valt din build, starta om din FiveM-server. Din server kommer nu att starta med den angivna DLC-builden. Du har nu framgångsrikt satt en gamebuild för din FiveM-spelserver. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />