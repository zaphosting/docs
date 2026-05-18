---
id: hytale-bettermap
title: "Hytale: Förbättra Världsutforskning med BetterMap"
description: "Upptäck hur du förbättrar världsexplorering i Hytale med BetterMap-modden som sparar kartdata, waypoints, zoom och optimerad rendering → Lär dig mer nu"
sidebar_label: BetterMap
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Att utforska stora och komplexa världar är en central del av Hytale-upplevelsen. När världarna växer och spelare reser längre bort från sin spawnpunkt kan det snabbt bli svårt att hålla koll på utforskade områden, intressanta platser och rutter.

![img](https://screensaver01.zap-hosting.com/index.php/s/WGaiERKfa3EFy48/preview)

**BetterMap**-modden förbättrar världsexploreringen genom att erbjuda en avancerad in-game-karta med sparad data, anpassningsbara zoomnivåer, waypoints och prestandaoptimerad rendering. Istället för att förlita sig på minnet eller externa verktyg kan spelare använda BetterMap för att navigera världen mer effektivt och dela kartkunskap med andra.

<InlineVoucher />



## Vad BetterMap tillför Hytale

BetterMap utökar den vanliga utforskningsupplevelsen genom att introducera ett fullfjädrat kartsystem. Utforskade områden sparas automatiskt och finns kvar mellan spelsessioner, vilket låter spelare bygga upp en pålitlig översikt av världen över tid.

Kartan stödjer justerbara zoomnivåer, vilket gör det enkelt att växla mellan en detaljerad lokal vy och en bredare översikt över omgivande regioner. Perfekt när du planerar långa resor eller letar efter specifika biomer och byggnader.

Waypoints låter spelare markera viktiga platser som baser, byar, grottor eller resursrika områden. Dessa markörer hjälper till med orientering och minskar onödig restid.

BetterMap har också stöd för delade kartfunktioner. På multiplayer-servrar kan kartdata delas mellan spelare, vilket gör det enklare för team att samarbeta och bygga en gemensam förståelse av den utforskade världen.



## Installera BetterMap

BetterMap distribueras via CurseForge och installeras som en mod. Du kan installera mods antingen via vår Mods Installer eller via FTP. Mer info hittar du i vår [Install Mods](hytale-mods.md)-guide.

Efter installation, starta om Hytale-servern. När den är igång blir kartgränssnittet tillgängligt i spelet och börjar automatiskt spara utforskade områden.


## Använda BetterMap

När du är inne i spelet ger BetterMap både ett visuellt kartgränssnitt och kommandon som låter dig styra kartan och waypoints direkt.

Kartgränssnittet öppnas med den konfigurerade knappbindningen, där utforskad terräng visas i realtid. Du kan zooma in och ut för att växla mellan detaljerade lokala vyer och bredare översikter, vilket hjälper dig att navigera och planera.

BetterMap erbjuder också kommandon som kan köras via in-game chatten. Dessa är smidiga för att snabbt hantera kartan och waypoints utan att behöva öppna hela gränssnittet.




## Hantera Waypoints

Waypoints är en av de mest kraftfulla funktionerna i BetterMap och kan hanteras både via kartgränssnittet och kommandon. För att skapa en waypoint på din nuvarande position, använd:

```
/bettermap waypoint add <namn>
```
Detta skapar en ny waypoint med dina aktuella koordinater och det angivna namnet.

![img](https://screensaver01.zap-hosting.com/index.php/s/99KXn7XmSbQSmNy/preview)


För att ta bort en befintlig waypoint:
```
/bettermap waypoint remove <namn>
```

För att lista alla befintliga waypoints:
```
/bettermap waypoint list
```

Waypoints kan redigeras för att bättre organisera kartan. Många servrar tillåter anpassning som färger eller ikoner, antingen via kartgränssnittet eller kommandoparametrar, beroende på modversion.

```
/bettermap waypoint edit <namn> color red
```

Waypoint-hanteraren gör det enkelt att aktivera eller inaktivera enskilda waypoints, byta namn på dem eller ta bort gamla platser när världen förändras.

På multiplayer-servrar möjliggör delade waypoints att team kan koordinera utforskningen. Platser som upptäckts av en spelare kan delas med andra, vilket skapar en gemensam karta över viktiga områden.

## Sammanfattning

BetterMap förbättrar världsexploreringen i Hytale rejält genom att kombinera sparad kartdata, zoombara vyer, waypoints, delad kartläggning och effektiv rendering. Med BetterMap får du bättre orientering, förbättrad planering och en roligare utforskningsupplevelse i både singleplayer och multiplayer.

Har du frågor eller behöver hjälp? Tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />