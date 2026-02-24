---
id: humanitz-change-day-night-length
title: "HumanitZ: Pas de dag-/nachtlengte aan"
description: "Ontdek hoe je de duur van dag en nacht op je HumanitZ-server kunt aanpassen → Leer het nu"
sidebar_label: "Dag-/nachtlengte aanpassen"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

De dag- en nachtcyclus in HumanitZ beïnvloedt direct de gameplay, zichtbaarheid, overlevingsuitdaging en het tempo van het spel. Kortere dagen zorgen voor een intensere survival-ervaring, terwijl langere daglichtperiodes spelers meer tijd geven om te verkennen, bouwen en resources te verzamelen.

<InlineVoucher />

## Configuratie

De duur van dag en nacht wordt geregeld in het bestand `GameServerSettings.ini`. Je vindt dit bestand in je serverbeheerpanel onder **Configs**. Zoek in het configbestand naar de volgende parameters:

```
;Dagduur in minuten
DayDur=40
;Nachtduur in minuten
NightDur=20
```

De waarden zijn in minuten:

- `DayDur` – Bepaalt hoe lang de dag duurt  
- `NightDur` – Bepaalt hoe lang de nacht duurt  

Wil je de cyclus aanpassen? Pas dan simpelweg de getallen aan naar de gewenste duur. Bijvoorbeeld voor langere dagen en kortere nachten:

```
DayDur=60
NightDur=15
```

Sla na het aanpassen het bestand op en herstart de server zodat de nieuwe instellingen actief worden.

## Afsluiting

Gefeliciteerd! Door de waarden van `DayDur` en `NightDur` in `GameServerSettings.ini` aan te passen, heb je de dag- en nachtcyclus op je HumanitZ-server succesvol veranderd. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />