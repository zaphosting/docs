---
id: csgo-becomeadmin
title: "CS:GO: Word admin"
description: "Ontdek hoe je administratorrechten toewijst en beheert voor volledige servercontrole in CS:GO gameplay → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je eenvoudige en uitgebreide controle over je server. Als admin kun je alle beschikbare opties en functies van het spel direct in de game gebruiken. Hieronder leggen we stap voor stap uit hoe je administratorrechten voor jouw server instelt.  
<InlineVoucher />

## Voorbereiding
Om adminrechten te gebruiken, moet er eerst een basis worden gelegd. Standaard biedt CS:GO geen uitgebreide admin management. Gelukkig zijn er frameworks zoals CounterStrikeSharp die dit mogelijk maken. Dit framework moet geïnstalleerd zijn om te kunnen configureren. Heb je het nog niet geïnstalleerd? Check dan zeker onze [Plugins installeren](csgo-plugins) gids.

## Admins toevoegen

Een admin voeg je toe via het `admins.json` configuratiebestand, te vinden onder `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`. Om een nieuwe admin toe te voegen maak je een nieuwe entry aan. Deze moet een naam, identifier (identity) en flags (rechten) bevatten. De naam mag je zelf kiezen, die dient alleen als herkenning. Bij de identifier "identity" moet je de SteamID van het Steam-account invullen. Daarnaast definieer je de benodigde flags.

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
Je kunt ook admin groepen aanmaken. Zo kun je de rechten van een admin bepalen via de groep waar hij in zit. Hierdoor hoef je niet voor elke admin apart rechten in te stellen. De groepen definieer je in het admin_groups.json bestand, te vinden onder `../CS:GO/game/csgo/addons/CounterStrikeShap/addons/configs/`.

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
Je kunt admins ook een immuniteitswaarde geven. Als een admin of speler met een lagere immuniteit een commando uitvoert op een admin of speler met een hogere immuniteit, dan faalt het commando. Dit stel je in door de key `immunity` toe te voegen aan elke admin in configs/admins.json.

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
De immuniteitscheck wordt niet automatisch door CounterStrikeSharp uitgevoerd. Het is aan de individuele plugins om deze check te verwerken en te beheren.
:::

## Conclusie

Gefeliciteerd, je hebt de administratorrechten succesvol ingesteld! Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />