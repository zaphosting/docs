---
id: over-the-top-wwi-configure-auto-balance
title: "Over the Top WWI: Auto Team Balance Instellen"
description: "Leer hoe je automatische teamverdeling configureert op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Auto Team Balance
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Teamverdeling is super belangrijk voor eerlijke en leuke potjes in **Over the Top WWI**. Zonder goede balans kan één team een flinke voorsprong krijgen, wat zorgt voor scheve gameplay en een minder toffe ervaring voor spelers.

Het auto-balance systeem helpt om het eerlijk te houden door spelers automatisch tussen teams te verdelen zodra bepaalde voorwaarden bereikt zijn.

<InlineVoucher />

## Configuratie

Auto team balance stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. In dit bestand vind je de volgende parameters:

```
EnableAutobalance = 1
TeamPercentsAutoBalance = 50
AutoBalanceThreshold = 5
MinAutoBalanceCount = 15
LimitTeamSelection = 0
```

- `EnableAutobalance` zet automatische teamverdeling aan of uit

- `0` → Uitgeschakeld
- `1` → Ingeschakeld

- `TeamPercentsAutoBalance` bepaalt de gewenste teamverdeling. Voorbeeld: `50` = gelijke teamgroottes
- `AutoBalanceThreshold` bepaalt hoeveel onevenwichtigheid toegestaan is voordat auto-balance ingrijpt
- `MinAutoBalanceCount` geeft het minimum aantal spelers aan voordat auto-balance actief wordt
- `LimitTeamSelection` beperkt of spelers zelf een team mogen kiezen

- `0` → Geen beperking
- `1–3` → Beperkt teamkeuze afhankelijk van de waarde

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. Het auto-balance systeem regelt dan automatisch de teamverdeling tijdens de potjes.

## Conclusie

Nice! Je hebt nu succesvol automatische teamverdeling ingesteld op je **Over the Top WWI server**. Dit zorgt voor eerlijkere matches en een betere ervaring voor iedereen.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />