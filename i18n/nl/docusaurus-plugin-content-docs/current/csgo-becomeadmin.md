---
id: csgo-becomeadmin
title: "CS:GO: Word admin"
description: "Ontdek hoe je administratorrechten toekent en beheert voor volledige servercontrole in CS:GO met Sourcemod → Leer het nu"
sidebar_label: Word admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie
Het toewijzen van administratorrechten geeft je een simpele en uitgebreide manier om je server te beheren met volledige controle. Als admin kun je alle beschikbare opties en functies van Sourcemod direct in het spel gebruiken. Hieronder leggen we stap voor stap uit hoe je adminrechten toekent voor jouw server.  
<InlineVoucher />

## Voorbereiding

Om adminrechten te gebruiken, moet er eerst een basis worden gelegd. Standaard biedt CS:GO geen uitgebreide admin management. Gelukkig zijn er frameworks zoals Sourcemod die dit mogelijk maken. Dit framework moet geïnstalleerd zijn om te kunnen configureren. Heb je het nog niet geïnstalleerd? Check dan zeker onze plugin installatiehandleiding voor CS:GO.

## Admins definiëren

Admins toevoegen kan via het configuratiebestand `admins_simple.ini` of `admins.cfg`, te vinden onder `../csgo/cstrike/addons/sourcemod/configs/`. Voor simpele setups is `admins_simple.ini` meestal genoeg. Hier kun je admins definiëren via hun SteamID en direct permissievlaggen toewijzen.

```ini title="admins_simple.ini (Voorbeeld)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

In dit voorbeeld krijgt de eerste admin volledige rechten met de `z` vlag, terwijl de tweede admin alleen geselecteerde permissies krijgt.

Wil je geavanceerdere instellingen zoals groepen, immuniteit of wachtwoorden gebruiken, dan gebruik je beter `admins.cfg`.

```
Admins
{
  "User 1"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:12345678"
    "flags"   "z"
  }

  "User 2"
  {
    "auth"    "steam"
    "identity" "STEAM_0:1:87654321"
    "flags"   "bcdefgjk"
  }
}
```

## Admin groepen definiëren

Je kunt ook admin groepen aanmaken. Zo beheer je de permissies van admins via hun groep, zonder alles per admin te hoeven instellen. De groepen definieer je in het bestand `admin_groups.cfg`, te vinden onder `../csgo/cstrike/addons/sourcemod/configs/`.

```
Groups
{
  "Full Admin"
  {
    "flags"   "z"
    "immunity" "99"
  }

  "Moderator"
  {
    "flags"   "bcdefgjk"
    "immunity" "10"
  }
}
```

Daarna wijs je een groep toe aan een admin in het `admins.cfg` bestand:

```
Admins
{
  "User 1"
  {
    "auth"     "steam"
    "identity" "STEAM_0:1:12345678"
    "group"    "Full Admin"
  }
}
```

## Admin immuniteit definiëren

Je kunt admins of groepen een immuniteitswaarde geven. Als een admin met een lagere immuniteit een admin met een hogere immuniteit probeert te targeten, mislukt het commando. Definieer een immuniteitswaarde door de `immunity` key toe te voegen aan elke admin in `admins.cfg` of direct in `admin_groups.cfg`.

```
Admins
{
  "ZoNiCaL"
  {
    "auth"      "steam"
    "identity"  "STEAM_0:1:12345678"
    "flags"     "z"
    "immunity"  "100"
  }
}
```

Een hogere immuniteitswaarde betekent meer bescherming tegen admin acties van andere admins met een lagere immuniteit.

## Conclusie

Gefeliciteerd, je hebt succesvol de adminrechten voor je CS:GO server met Sourcemod ingesteld. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />