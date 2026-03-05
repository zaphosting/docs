---
id: csgo-becomeadmin
title: "CS:GO: Bli admin"
description: "Upptäck hur du tilldelar och hanterar administratörsrättigheter för full kontroll över din CS:GO-server → Lär dig mer nu"
sidebar_label: Bli admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela administratörsrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga alternativ och funktioner som spelet erbjuder direkt i spelet. Alla steg du behöver följa för att tilldela adminrättigheter till din server beskrivs nedan.  
<InlineVoucher />

## Förberedelser
För att använda adminprivilegier måste en grund först läggas. Som standard erbjuder inte CS:GO någon heltäckande administrationshantering. Men det finns ramverk för detta, som CounterStrikeSharp. Ramverket måste installeras för att kunna konfigureras. Om du inte installerat det än, kolla gärna in vår guide för [Installera Plugins](csgo-plugins).

## Definiera Admins

Att lägga till en admin görs via konfigurationsfilen `admins.json`, som finns under `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`. För att deklarera en ny admin måste du skapa en ny post. Den ska innehålla ett namn, identifierare (identity) och flags (rättigheter). Namnet kan du välja fritt, det används bara som en etikett/identifierare. För identifieraren "identity" måste SteamID från Steam-kontot anges. Dessutom måste flags definieras enligt behov.

```js title="admins.json (Exempel)"
{
  "User 1": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"]
  },
  "User 2": {
    "identity": "STEAM_0:1:1",
    "flags": ["@css/generic"]
  }
}
```

## Definiera Admingrupper
Admingrupper kan också definieras. På så sätt kan en admins rättigheter styras via deras grupp. Då behöver du inte konfigurera rättigheter individuellt för varje admin. Grupperna definieras i konfigurationsfilen admin_groups.json, som finns under `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`.
```js title="admin_groups.json"
"#css/simple-admin": {
  "flags": [
    "@css/generic",
    "@css/reservation",
    "@css/ban",
    "@css/slay",
  ]
}
```

## Definiera Admin Immunitet
En immunitetsnivå kan tilldelas admins. Om en admin eller spelare med lägre immunitet attackerar en admin eller spelare med högre immunitet, kommer kommandot att misslyckas. Du kan definiera immunitet genom att lägga till nyckeln immunity till varje admin i configs/admins.json.

```
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
Immunitetskontrollen utförs inte automatiskt av CounterStrikeSharp. Det är upp till varje plugin att hantera immunitetskontrollen.
:::

## Avslutning

Grattis, du har nu konfigurerat administratörsrättigheterna! Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />