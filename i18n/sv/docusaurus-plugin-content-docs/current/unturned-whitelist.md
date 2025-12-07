---
id: unturned-whitelist
title: "Unturned: Aktivera och redigera whitelist på servern"
description: "Upptäck hur du säkrar din Unturned-server genom att aktivera och hantera whitelist för kontrollerad spelartillgång → Lär dig mer nu"
sidebar_label: Whitelist
services:
  - gameserver-unturned
---

import InlineVoucher from '@site/src/components/InlineVoucher';

<InlineVoucher />

## Aktivera whitelist

Whitelist i Unturned låter dig skydda din server genom att bara tillåta utvalda spelare som finns på listan att ansluta till servern. Att aktivera whitelist görs i spelet via kommando. Detta kräver **ägarrättigheter**. Om du inte vet vad det är eller hur man tilldelar dem, kolla in följande guide: [Bli admin](unturned-becomeadmin.md)

Om du följt guiden och blivit admin, kan du nu aktivera whitelist på din server. Öppna chatten/konsolen i spelet på din server och kör följande kommando:

```
/Whitelisted
```

Whitelist ska nu vara aktiv och endast tillåta spelare som finns på listan att ansluta till servern. Att lägga till och ta bort spelare gör du med följande kommandon.

## Hantera whitelist

**Lägg till spelare i whitelist:**

```
Permit [SteamID]/[Tag]
```

**Ta bort spelare från whitelist:**

```
Unpermit [SteamID]
```

**Visa alla tillåtna spelare:**

```
Permits
```

<InlineVoucher />