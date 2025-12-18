---
id: gameserver-resourcelimit
title: 'Gameserver: Resursgräns - Lås upp din gameserver'
description: "Förstå varför din gameserver är avstängd på grund av resursgränser och utforska lösningar för att återställa driften → Läs mer nu"
sidebar_label: Resursgräns
services:
  - gameserver
---

import InlineVoucher from '@site/src/components/InlineVoucher';





## Introduktion

Ajdå, det hände tyvärr! Men varför? Orsakerna till en avstängning kan vara många. Det måste kollas upp och fixas så snabbt som möjligt. Så här ser det ut när din gameserver har blivit avstängd:

 ![](https://screensaver01.zap-hosting.com/index.php/s/eSRe2WDkLPnTZxE/preview)
 
 <InlineVoucher />

## Orsaker
Anledningen till avstängningen är att resursgränsen har överskridits. Det betyder att servern använder mer resurser än vad du har bokat för din tjänst under en längre tid. Det är inget problem om gränsen överskrids under en kort period. Då tillhandahåller vi fortfarande extra resurser för att undvika omedelbar avstängning och potentiella problem. 

Men om gränsen överskrids under en längre tid stängs servern av automatiskt. Genom att klicka på den röda frågeteckensymbolen kan du se orsaken med mer detaljerad info.

![](https://screensaver01.zap-hosting.com/index.php/s/bzmyP2LKcbn6yGS/preview)

Översikten visar hur mycket resurser du har tillgängligt, hur mycket du använt under en längre period och hur mycket vi rekommenderar för normal användning. Det ger dig chansen att se var aktiv handling behövs och kunna ta rätt steg. 

## Lösningsförslag

Du har tre alternativ för att låsa upp din gameserver, fixa problemet och återställa driften. Alternativen **Hitta felaktiga mods/scripts via konsolen & lås upp servern temporärt**, **Utför uppgradering** och **Skapa supportärende** förklaras mer i detalj nedan. 



### Konsol
En plötslig ökning av belastningen kan till exempel bero på nyligen gjorda ändringar. Det kan hända vid justering av befintligt innehåll eller tillägg av nytt innehåll, som plugins eller mods. Speciellt extra plugins/mods orsakar ofta problem. Det kan till exempel bero på felaktig eller dåligt programmerad kod. 

I vissa fall kan något sånt leda till ett minnesläckage. Det betyder att mods/plugins reserverar minne men inte släpper det ordentligt. Då ökar minnesanvändningen hela tiden och snart överskrids gränsen. 

Som förklarat i början kan orsakerna vara många. För att analysera problemet är första steget att kolla serverkonsolen. Den brukar ge bra info för att begränsa möjliga orsaker. Klicka på **Konsol**-knappen under **Alternativ 1** för att göra det. ![](https://screensaver01.zap-hosting.com/index.php/s/g9N5D7aqTPwX2R7/preview)

:::info Lås upp tjänsten 
Att använda **Alternativ 1** låser upp din tjänst igen så att du kan ta tag i problemet. Var medveten om att om belastningen överskrids länge igen så stängs tjänsten av på nytt. Försök aktivt att lösa problemet och hitta lösningar. 
:::



### Uppgradering

En ökad belastning behöver inte alltid bero på problem. Beroende på spelet kan det också hända när projektet växer. Om spelets omfattning blir större eller mer avancerad så följer en konsekvent ökad belastning med. Då krävs en betald uppgradering för en permanent lösning. Du kan kolla statistiken för att se hur belastningen utvecklats nyligen. Du kan också följa vår rekommendation för din uppgradering. Klicka på **Utför**-knappen under **Alternativ 2**. 

![](https://screensaver01.zap-hosting.com/index.php/s/JBAa2mFfyW5p9kC/preview)

### Kontakta support

Alternativ 1 och 2 hjälpte inte eller känns oklara? Ingen fara! Kontakta gärna vårt supportteam om du behöver hjälp. Vi kollar gärna närmare på problemet tillsammans med dig för att hitta orsaken och möjliga lösningar. Skapa ett ärende genom att klicka på **Utför**-knappen under **Alternativ 3**. 


![](https://screensaver01.zap-hosting.com/index.php/s/HPb5aT5xQgwkbcm/preview)



## Slutsats

Genom att följa ett eller flera av lösningsförslagen borde du ha löst problemet och återställt serverns funktion. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />