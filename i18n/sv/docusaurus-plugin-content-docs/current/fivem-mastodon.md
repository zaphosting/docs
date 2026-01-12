---
id: fivem-mastodon
title: "FiveM: Ställ in ett aktivitetsflöde med Mastodon"
description: "Upptäck hur du integrerar ett Mastodon-aktivitetsflöde i din server för realtidsuppdateringar och bättre community-engagemang → Lär dig mer nu"
sidebar_label: Konfigurera Aktivitetsflöde
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';



## Introduktion

Ett aktivitetsflöde hjälper till att hålla spelarna uppdaterade direkt i din FiveM-server. Genom att koppla ett Mastodon-konto kan serveruppdateringar, annonser och korta meddelanden visas i realtid, utan att spelarna behöver kolla externa plattformar.

Denna integration skapar en tydlig kommunikationskanal mellan servern och dess community och säkerställer att viktig info alltid är synlig på ett och samma ställe.

## Förberedelser

Innan du konfigurerar aktivitetsflödet behöver du ett Mastodon-konto. Det kontot används för att publicera uppdateringar som sedan visas på servern.

Om du inte har något konto än, registrera dig på en [Mastodon](https://joinmastodon.org/) instans du gillar. Efter registreringen, se till att profilen är tillgänglig och redo att posta uppdateringar, eftersom dessa inlägg kommer att visas i aktivitetsflödet.



## Setup

Öppna din Mastodon-profil och kopiera ditt fullständiga användarnamn.  
Användarnamnet brukar se ut så här:

```
användarnamn@instans.domän
```

I det här exemplet är användarnamnet `zaphosting@mstdn.instance`. Nästa steg är att öppna **Configs**-sektionen i din FiveM-server och redigera `server.cfg`-filen. Scrolla längst ner i filen och lägg till följande rad:

```
sets activitypubFeed användarnamn
```

Byt ut `användarnamn` mot ditt eget Mastodon-användarnamn.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Spara filen och starta om servern. Efter omstarten kan det ta upp till 20 minuter innan aktivitetsflödet blir tillgängligt. När det är aktivt dyker en ny **Feed**-flik upp när du öppnar servern, där inlägg från det kopplade Mastodon-kontot visas.



## Slutsats

Med aktivitetsflödet konfigurerat visas serveruppdateringar och annonser direkt för spelarna på ett tydligt och lättillgängligt sätt. Den här setupen ökar transparensen, stärker communityn och ger ett smidigt sätt att dela nyheter och info utan att behöva länka till externa plattformar.



Har du frågor eller behöver hjälp? Tveka inte att kontakta vår support, som finns tillgänglig varje dag för att hjälpa dig! 🙂