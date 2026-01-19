---
id: hytale-pvp-management
title: "Hytale: PvP-hantering"
description: "Hantera och konfigurera spelare mot spelare-strider (PvP) på din Hytale-server → Lär dig mer nu"
sidebar_label: PvP-hantering
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion

PvP-hantering på en Hytale-server styr om spelare kan skada eller slåss mot varandra i en värld. Genom att justera PvP-inställningarna kan serverägare bestämma om strider mellan spelare är helt aktiverade, helt avstängda eller begränsade till specifika situationer.

<InlineVoucher />

## Konfiguration

PvP-beteendet definieras per värld och konfigureras via serverns konfigurationsfil:

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

Denna inställning avgör hur servern hanterar skada mellan spelare och om PvP är tillåtet i den aktiva världen. Ändringar i PvP-inställningarna gäller globalt för den berörda världen och kräver en serveromstart för att träda i kraft.

Följande exempel visar en konfiguration där PvP är avstängt för en värld:

```
"WorldConfig": {
  "PvP": false
}
```

Med denna konfiguration kan spelare inte längre skada varandra i den världen, vilket skapar en PvE-fokuserad miljö.

För att aktivera PvP och tillåta spelare att slåss mot varandra kan konfigurationen sättas så här:

```
"WorldConfig": {
  "PvP": true
}
```

## Slutsats

När det är uppsatt har du en tydlig översikt över hur PvP hanteras och kan enkelt justera konfigurationen för att stödja co-op-spel, tävlingsinriktade miljöer eller en mix av båda. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vårt supportteam som finns tillgängligt varje dag för att hjälpa dig! 🙂

<InlineVoucher />