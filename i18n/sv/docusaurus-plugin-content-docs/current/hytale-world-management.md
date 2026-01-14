---
id: hytale-world-management
title: "Hytale: Världshantering"
description: "Upptäck hur du säkrar din Hytale-server genom att hantera spelaråtkomst med whitelist-funktioner och skydda ditt spel → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

Världshantering på en Hytale-server handlar om att kontrollera den persistenta spelvärlden där spelare utforskar, bygger och interagerar. En värld består av all terrängdata, byggnader, spelarprogression och inställningar som definierar den gemensamma upplevelsen. Att kunna skapa, byta namn på, återställa eller organisera världar är en grundläggande del av att underhålla en server för både privata och offentliga communities.

:::info Early Access-meddelande

Hytale släpptes den 13 januari 2026 och finns just nu i Early Access. Eftersom spelet fortfarande är under aktiv utveckling kan serverprogramvara, konfigurationsfiler, moddsupport och installationsflöden fortsätta att förändras över tid.

:::

## Skapa ny värld

Att skapa en ny värld ger din server en fräsch miljö där terräng, byggnader och spelprogression genereras från grunden. Via live-konsolen kan världar skapas eller bytas genom att använda rätt kommandon för världshantering.  
När ett nytt världnamn anges kommer servern antingen att ladda en befintlig värld med det namnet eller generera en ny om ingen matchande världdata finns.

```
/world create <worldname>
```

Det här kommandot skapar en ny värld med namnet `<worldname>`. Om det inte finns någon befintlig världdata för det namnet genererar servern en helt ny världsmiljö.



## Sätt en värld som standard

En specifik värld kan markeras som standardvärld så att den automatiskt laddas när servern startar. Att sätta en standardvärld är smidigt när flera världar finns och en av dem alltid ska användas som huvudmiljö.

Via live-konsolen kan standardvärlden ändras utan att behöva redigera konfigurationsfiler manuellt. När den är satt prioriterar servern denna värld vid nästa omstart.

```
/world setdefault <worldname>
```

Det här kommandot sätter världen med namnet `mainworld` som standardvärld. Efter serveromstart laddas den världen automatiskt.



## Ta bort befintlig värld

Förutom att skapa och ladda världar kan live-konsolen också användas för att ta bort befintliga världar från servern. Det är användbart när gamla, oanvända eller testvärldar inte längre behövs. Att ta bort en värld raderar dess tillhörande världdata från servern. Denna åtgärd är permanent och kan inte ångras om du inte har en backup.

```
/world remove <worldname>
```

Det här kommandot tar bort världen med namnet `worldname` från servern. Om världen är aktiv måste den först avlastas, annars kan servern neka kommandot beroende på implementation.



## Avslutning

Att hantera världar via live-konsolen ger ett snabbt och flexibelt sätt att styra den aktiva miljön på en Hytale-server. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂