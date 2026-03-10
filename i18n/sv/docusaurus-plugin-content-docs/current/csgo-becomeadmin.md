---
id: csgo-becomeadmin
title: "CS:GO: Bli admin"
description: "Upptäck hur du tilldelar och hanterar adminrättigheter för full kontroll över din CS:GO-server med Sourcemod → Läs mer nu"
sidebar_label: Bli admin
services:
  - gameserver-csgo
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introduktion
Att tilldela adminrättigheter ger dig enkel och heltäckande administration med full kontroll över din server. Som admin kan du använda alla tillgängliga funktioner och verktyg som Sourcemod erbjuder direkt i spelet. Alla steg du behöver följa för att ge adminrättigheter på din server beskrivs nedan.  
<InlineVoucher />



## Förberedelser

För att använda adminprivilegier måste en grund först läggas. Som standard erbjuder inte CS:GO någon omfattande administrationshantering. Men det finns ramverk för detta, som Sourcemod. Ramverket måste installeras för att kunna konfigureras. Om du inte har installerat det än, kolla gärna in vår guide för plugin-installation för CS:GO.



## Definiera admins

Att lägga till admins görs via konfigurationsfilen `admins_simple.ini` eller `admins.cfg`, som du hittar under `../csgo/cstrike/addons/sourcemod/configs/`. För enklare uppsättningar räcker det oftast med `admins_simple.ini`. Där kan du definiera admins via SteamID och tilldela rättighetsflaggor direkt.

```ini title="admins_simple.ini (Exempel)"
"STEAM_0:1:12345678" "z"
"STEAM_0:1:87654321" "bcdefgjk"
```

I detta exempel får den första admin fulla rättigheter via flaggan `z`, medan den andra admin bara får utvalda rättigheter.

Vill du använda mer avancerade inställningar som grupper, immunitet eller lösenord bör du istället använda `admins.cfg`.

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

## Definiera admingrupper

Du kan också definiera admingrupper. På så sätt kan en admins rättigheter hanteras via deras grupp. Då behöver du inte konfigurera rättigheter individuellt för varje admin. Grupperna definieras i konfigurationsfilen `admin_groups.cfg`, som finns under `../csgo/cstrike/addons/sourcemod/configs/`.

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

Efter det kan du tilldela en grupp till en admin i `admins.cfg`-filen:

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

## Definiera adminimmunitet

En immunitetsnivå kan tilldelas admins eller grupper. Om en admin med lägre immunitet försöker rikta en kommando mot en admin med högre immunitet, kommer kommandot att misslyckas. Du kan definiera immunitet genom att lägga till nyckeln `immunity` till varje admin i `admins.cfg` eller direkt i `admin_groups.cfg`.

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

En högre immunitetsnivå betyder högre skydd mot administrativa åtgärder från andra admins med lägre immunitet.

## Avslutning

Grattis, du har nu framgångsrikt konfigurerat adminrättigheterna för din CS:GO-server med Sourcemod. Har du fler frågor eller behöver hjälp, tveka inte att kontakta vår support som finns tillgänglig varje dag för att hjälpa dig! 🙂

<InlineVoucher />