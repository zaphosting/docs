---
title: "Over the Top WWI: Byt Spelläget"
description: "Lär dig hur du byter spelläge på din Over the Top WWI-server → Läs mer nu"
sidebar_label: Byt Spelläget
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Spelläget på en **Over the Top WWI**-server bestämmer hur matcherna spelas och vilka mål spelarna måste uppnå. Olika spellägen kan förändra tempot, strategin och hela spelupplevelsen rejält.

Genom att justera spelläget kan du anpassa din server för att fokusera på storskaliga strider, defensivt spel eller målbaserade scenarion beroende på vad din community gillar mest.

<InlineVoucher />

## Konfiguration

Spelläget ställs in i serverns konfigurationsfil. Du hittar och kan redigera den i ditt **gameserver kontrollpanel** under **Configs**. Leta upp och öppna filen `ServerConfiguration.ini`. Inuti den här filen hittar du följande parameter:

```
CurrentGameMode = 2
```

Värdet bestämmer vilket spelläge som är aktivt på din server. Tillgängliga värden:

- `2` → Conquest
- `3` → Siege

Det valda värdet definierar de grundläggande spelreglerna för varje match.

- **Conquest (2)** handlar om att ta och hålla kontroll över mål på kartan, vilket uppmuntrar till ständig rörelse och lagarbete.
- **Siege (3)** är oftast mer defensivt, där ett lag attackerar medan det andra försvarar strategiska positioner.

Vilket läge du väljer beror på din favoritspelstil och hur många spelare ni är.

När du ändrat värdet i `ServerConfiguration.ini`, spara filen och starta om servern. Det nya spelläget aktiveras vid nästa match eller kartrotation.

## Avslutning

Grattis! Du har nu bytt spelläge på din **Over the Top WWI-server**. Genom att välja rätt läge kan du forma spelupplevelsen och bättre anpassa den efter din communitys önskemål.

Har du fler frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />