---
id: redm-gamebuild
title: "RedM: Aktivera DLC-innehåll"
description: "Upptäck hur du tvingar fram specifika DLC-versioner på din RedM-server för de senaste kartorna, fordonen och innehållet → Lär dig mer nu"
sidebar_label: Aktivera DLC game build
services:
  - gameserver-redm
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att tvinga fram en game build låter dig sätta en specifik DLC-version på din server, så att du kan spela med de senaste kartorna, kläderna, fordonen och mer!

<InlineVoucher />

## Tillgängliga Gamebuilds

Här är en översikt över alla tillgängliga DLC och deras Build IDs:

| Build ID |                          Build Namn                          |
| :------: | :----------------------------------------------------------: |
|   1311   | Uppdatering från mitten av 2020, inte kompatibel med Red Dead Online-licenser. |
|   1355   | December 2020-uppdatering, fungerar med nyare spelutgåvor som RDO. |
|   1436   | Juli 2021-uppdatering, inkluderar nytt innehåll från Blood Money DLC. |
|   1491   |       September 2022-uppdatering, begränsat innehåll/förändringar.        |


## Aktivera build

För att använda extra DLC-innehåll som Blood Money måste du ställa in det i serverns konfigurationsfil. För att sätta DLC-builden öppnar du txAdmin-gränssnittet och går till CFG Editor. Justera sedan enkelt din önskade game build med kommandot `sv_enforceGameBuld` med någon av builds från tabellen.

![img](https://screensaver01.zap-hosting.com/index.php/s/YoRFMoHxdSNydoD/preview)


## Slutsats

När du valt din build, starta om din RedM-server. Din server kommer nu att starta med den angivna DLC-builden. Du har nu framgångsrikt satt en gamebuild för din RedM-spelserver. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />