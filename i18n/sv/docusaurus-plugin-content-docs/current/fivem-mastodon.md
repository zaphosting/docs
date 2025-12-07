---
id: fivem-mastodon
title: "FiveM: Ställ in ett aktivitetsflöde för din server"
description: "Upptäck hur du integrerar ett Mastodon-aktivitetsflöde i din server för realtidsuppdateringar och bättre community-engagemang → Lär dig mer nu"
sidebar_label: Konfigurera Aktivitetsflöde
services:
  - gameserver-fivem
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Förberedelser

För att ställa in ett aktivitetsflöde på vår server behöver vi först registrera ett konto på Mastodon.

## Setup

Nu öppnar vi vår Mastodon-profil och kopierar vårt användarnamn, i vårt fall är det `zaphosting@mstdn.instance`

Nu kan vi öppna våra "Configs" på vår FiveM-server och redigera server.cfg.

Vi lägger in följande rad längst ner:

```
sets activitypubFeed username
```

"username" ska bytas ut mot ditt Mastodon-användarnamn.

![](https://screensaver01.zap-hosting.com/index.php/s/oQWC9pxrweM8FsY/preview)

Nu sparar vi filen och startar om servern, efter ~20 minuter kommer fliken "Feed" vara tillgänglig när din server är igång.


<InlineVoucher />