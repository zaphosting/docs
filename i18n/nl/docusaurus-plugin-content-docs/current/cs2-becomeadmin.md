---
id: cs2-becomeadmin
title: "CS2: Word admin"
description: "Ontdek hoe je administratorrechten toewijst en beheert voor volledige servercontrole in CS2 gameplay → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-cs2
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide admin-mogelijkheden met volledige controle over je server. Als admin kun je alle beschikbare opties en functies die het spel biedt direct in het spel gebruiken. Hieronder vind je alle stappen die je moet volgen om administratorrechten voor je server toe te wijzen.  
<InlineVoucher />

## Voorbereiding
Om adminrechten te gebruiken, moet er eerst een basis worden gelegd. Standaard biedt CS2 geen uitgebreide admin-management. Er zijn echter frameworks voor dit doel, zoals CounterStrikeSharp. Dit framework moet geïnstalleerd worden om te configureren. Heb je het nog niet geïnstalleerd? Check dan zeker onze [Plugins installeren](cs2-plugins) gids.

## Admins toevoegen

Een admin toevoegen doe je via het configuratiebestand `admins.json`, te vinden onder `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`. Om een nieuwe admin toe te voegen, maak je een nieuwe entry aan. Deze moet een naam, identifier (identity) en flags (rechten) bevatten. De naam mag je zelf kiezen, die wordt alleen als placeholder/label gebruikt. Bij de identifier "identity" moet je de SteamID van het Steam-account invullen. Daarnaast definieer je de benodigde flags.

```js title="admins.json (voorbeeld)"
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

## Admin groepen definiëren
Je kunt ook admin groepen aanmaken. Zo kun je de rechten van een admin bepalen via de groep waar die bij hoort. Hierdoor hoef je niet voor elke admin apart rechten in te stellen. De groepen worden gedefinieerd in het configuratiebestand `admin_groups.json`, te vinden onder `../cs2/game/csgo/addons/CounterStrikeShap/addons/configs/`.

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

## Admin Immuniteit instellen
Je kunt admins een immuniteitswaarde geven. Als een admin of speler met een lagere immuniteit een admin of speler met een hogere immuniteit probeert aan te vallen, faalt het commando. Je stelt een immuniteitswaarde in door de key `immunity` toe te voegen aan elke admin in `configs/admins.json`.

```json
{
  "ZoNiCaL": {
    "identity": "76561198808392634",
    "flags": ["@css/changemap", "@css/generic"],
    "immunity": 100
  }
}
```
:::info
De immuniteitscheck wordt niet automatisch door CounterStrikeSharp uitgevoerd. Het is aan de individuele plugins om deze check te verwerken en te beheren.
:::

## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />