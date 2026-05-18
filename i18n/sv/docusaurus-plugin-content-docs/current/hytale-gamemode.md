---
id: hytale-gamemode
title: "Hytale: Spellägesinställningar"
description: "Lär dig hur du säkrar din Hytale-server genom att hantera spelartillgång med whitelist-funktioner och skydda ditt spel → Läs mer nu"
sidebar_label: Spelläge
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Hytale-servrar låter dig konfigurera spelinställningar som spelläget som definierar spelarupplevelsen. Att byta spelläge gör att du kan anpassa din server efter en specifik spelstil eller communitypreferens.

:::info Early Access Notice

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, modstöd och installationsflöden fortsätta att förändras över tid.

:::

![img](https://screensaver01.zap-hosting.com/index.php/s/KsesqALHY3AgKHF/preview)



## Byt spelläge

### Live-konsol
Spelläget kan ändras medan servern körs genom att använda live-konsolen eller in-game-kommandon, förutsatt att du har rätt behörigheter. Den här metoden låter admins byta spelläge utan att behöva redigera konfigurationsfiler.

Att använda konsolkommandot uppdaterar det aktiva spelläget direkt för server-sessionen. Beroende på serverns setup kan ändringen gälla tills nästa omstart eller återgå till värdet som är definierat i konfigurationsfilen.

```
/gamemode <gamemode> <playername>
```

Värdet på `GameMode` bestämmer vilket spelläge som används när servern startar. Beroende på vilken spelupplevelse du vill ha kan du justera detta värde.

Vanliga spellägen är:

- `Creative` för fri byggnation och skapande
- `Adventure` för strukturerat spel med definierad progression och interaktionsregler

Efter att du ändrat spelläget måste servern startas om för att den nya inställningen ska börja gälla.



### Konfigurationsfil

Spelläget kan också definieras direkt i serverns konfigurationsfil.  
Den här metoden rekommenderas om du vill att servern alltid ska starta med ett specifikt spelläge eller när du sätter upp en helt ny server.

Konfigurationsfilen nås via din kontrollpanel eller filhanterare. I filen finns en inställning som styr vilket spelläge som är aktivt när servern startar. Efter att du ändrat värdet måste servern startas om för att ändringen ska slå igenom.

```
"Defaults": {
"World": "default",
"GameMode": "Adventure"
},
```

Värdet på `GameMode` bestämmer vilket spelläge som används när servern startar. Beroende på vilken spelupplevelse du vill ha kan du justera detta värde.

Vanliga spellägen är:

- `Creative` för fri byggnation och skapande
- `Adventure` för strukturerat spel med definierad progression och interaktionsregler

Efter att du ändrat spelläget måste servern startas om för att den nya inställningen ska börja gälla.



## Sammanfattning

Genom att konfigurera spelläget antingen via serverns konfigurationsfil eller live-konsolen kan du styra spelupplevelsen på din Hytale-server exakt som du vill. Har du fler frågor eller behöver hjälp är du alltid välkommen att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂