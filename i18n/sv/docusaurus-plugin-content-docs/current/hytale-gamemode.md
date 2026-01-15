---
id: hytale-gamemode
title: "Hytale: Spellägesinställningar"
description: "Lär dig hur du säkrar din Hytale-server genom att hantera spelartillgång med whitelist-funktioner och skydda ditt spel → Läs mer nu"
sidebar_label: Spellägesinställningar
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Hytale-servrar låter dig konfigurera spelinställningar som spelläget som definierar spelarupplevelsen. Att ändra spelläge gör att du kan anpassa din server efter en specifik spelstil eller communitypreferens.

:::info Early Access-meddelande

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, moddstöd och installationsflöden fortsätta att förändras över tid.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Ändra spelläge

### Live-konsol
Spelläget kan ändras medan servern körs genom att använda live-konsolen eller kommandon i spelet, förutsatt att rätt behörigheter finns. Den här metoden låter administratörer byta spelläge utan att redigera konfigurationsfiler.

Att använda konsolkommandot uppdaterar det aktiva spelläget direkt för serversessionen. Beroende på serverinställning kan ändringen gälla tills nästa omstart eller återgå till värdet som definieras i konfigurationsfilen.

```
/gamemode <gamemode> <playername>
```

Värdet på `GameMode` bestämmer vilket spelläge som används när servern startar. Beroende på vilken spelupplevelse du vill ha kan detta värde justeras.

Vanliga spellägen är:

- `Creative` för fri byggnation och skapande av innehåll
- `Adventure` för strukturerat spel med definierad progression och interaktionsregler

Efter att ha ändrat spelläget måste servern startas om för att den nya inställningen ska börja gälla.



### Konfigurationsfil

Spelläget kan definieras direkt i serverns konfigurationsfil.  
Den här metoden rekommenderas när du vill att servern alltid ska starta med ett specifikt spelläge eller när du förbereder en ny server.

Konfigurationsfilen nås via din hostingkontrollpanel eller filhanterare. I filen finns en inställning som styr vilket spelläge som används när servern startar. Efter att ha ändrat detta värde måste servern startas om för att ändringen ska träda i kraft.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

Värdet på `GameMode` bestämmer vilket spelläge som används när servern startar. Beroende på vilken spelupplevelse du vill ha kan detta värde justeras.

Vanliga spellägen är:

- `Creative` för fri byggnation och skapande av innehåll
- `Adventure` för strukturerat spel med definierad progression och interaktionsregler

Efter att ha ändrat spelläget måste servern startas om för att den nya inställningen ska börja gälla.



## Slutsats

Genom att konfigurera spelläget antingen via serverns konfigurationsfil eller live-konsolen kan du styra spelupplevelsen på din Hytale-server exakt. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂