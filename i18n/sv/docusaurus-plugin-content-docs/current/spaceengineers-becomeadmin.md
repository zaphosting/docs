---
id: spaceengineers-becomeadmin
title: "Space Engineers: Bli serveradmin"
description: "Upptäck hur du ger administratörsrättigheter för full kontroll över din server och smidig hantering direkt i spelet → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-spaceengineers
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och komplett administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver följa för att ge administratörsrättigheter på din server beskrivs nedan.  
<InlineVoucher />

För att kunna hantera din egen spelserver smidigt ingame är det viktigt att ha Admin-rank.

### SteamID64 via webbplats

Först måste du öppna profilen i Steam och sedan högerklicka var som helst på den.
Där kan du kopiera Steam-URL:en för profilen.

![](https://screensaver01.zap-hosting.com/index.php/s/pNMMAqQDRPSoo38/preview)

När det är gjort kan du klistra in URL:en på någon av följande sidor:

- https://steamidfinder.com/
- https://steamid.io/
- https://steamrep.com/

![](https://screensaver01.zap-hosting.com/index.php/s/dBezeZQEoP3KYq5/preview)

### Lägg in SteamID i configen

Nästa steg är att öppna ditt gränssnitt och servern.  
Gå till fliken **Configs**

![](https://screensaver01.zap-hosting.com/index.php/s/NQffqKfjszY23HK/preview)

Öppna sedan **SpaceEngineers-Dedicated.cfg**

![](https://screensaver01.zap-hosting.com/index.php/s/yx2efZLYmW32BZH/preview)

Tryck därefter på **STR + F** och sök efter *admin*

![](https://screensaver01.zap-hosting.com/index.php/s/eBgLRwe5Y3itnyt/preview)

Nu skriver du så här:
```
<Administrators>
<unsignedLong>STEAM64ID</unsignedLong>
</Administrators>
````
Det ska se ut så här när du är klar:

![](https://screensaver01.zap-hosting.com/index.php/s/r7tj3EF6trSiz5x/preview)

Spara sedan bara **Config-filen** och klart!

## Slutsats

Grattis, du har nu framgångsrikt konfigurerat administratörsrättigheterna. Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />