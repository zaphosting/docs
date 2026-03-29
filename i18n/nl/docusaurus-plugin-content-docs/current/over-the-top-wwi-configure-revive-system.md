---
id: over-the-top-wwi-configure-revive-system
title: "Over the Top WWI: Revive Systeem Configureren"
description: "Leer hoe je de revive-mechanieken op je Over the Top WWI server instelt → Ontdek het nu"
sidebar_label: Revive Systeem
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Introductie

Het revive systeem in **Over the Top WWI** bepaalt hoe spelers weer terug in de strijd kunnen komen nadat ze zijn neergehaald. Door deze instellingen aan te passen, bepaal je zelf hoe vergevingsgezind of streng het gevecht is.

Een sneller of betrouwbaarder revive systeem maakt de gameplay toegankelijker, terwijl strengere instellingen zorgen voor meer realisme en consequenties bij fouten.

<InlineVoucher />

## Configuratie

Het revive systeem stel je in via het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. In dit bestand vind je de volgende parameters:

```
ReviveTimer = 60
ReviveChance = 100
ReviveMaxDamage = 80
```

- `ReviveTimer` bepaalt hoe lang het duurt om een speler te reviven
- `ReviveChance` geeft de kans op een succesvolle revive aan
- `ReviveMaxDamage` bepaalt hoeveel schade een speler maximaal mag hebben om nog gerevived te kunnen worden

Pas deze waarden aan om te bepalen hoe vaak revives slagen en hoe lang het proces duurt.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe revive-instellingen worden dan automatisch toegepast.

## Conclusie

Gefeliciteerd! Je hebt het revive systeem op je **Over the Top WWI server** succesvol ingesteld. Zo kun je de moeilijkheid van het gevecht fijn afstemmen en de gameplay-ervaring verbeteren.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />