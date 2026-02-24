---
id: humanitz-change-pvp-mode
title: "HumanitZ: PvP-modus wijzigen"
description: "Leer hoe je PvP aan- of uitzet op je HumanitZ-server → Ontdek het nu"
sidebar_label: "PvP-modus wijzigen"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

Player versus Player (PvP) gevechten zijn een kernmechaniek in survivalgames zoals HumanitZ. PvP aan- of uitzetten bepaalt hoe spelers met elkaar kunnen vechten, of ze elkaar schade kunnen toebrengen, en of ze kunnen interacteren met door spelers beheerde items zoals voertuigen of containers.

<InlineVoucher />

## Configuratie

De PvP-modus wordt geregeld in het `GameServerSettings.ini` bestand. Je vindt dit bestand in je serverbeheer paneel onder **Configs**. Zoek in het configbestand naar de volgende parameter:

```
;false/true=Uit/Aan. Dit beïnvloedt ook de mogelijkheid om met spelersitems zoals auto's en containers te interacteren
PVP=true
```

- `PVP=true` – Zet Player versus Player combat aan  
- `PVP=false` – Zet Player versus Player combat uit

Om de PvP-modus te wijzigen, stel je de waarde simpelweg in op `true` (Aan) of `false` (Uit), afhankelijk van hoe je PvP op je server wilt laten werken.

Voorbeeld – PvP uitgeschakeld:

```
PVP=false
```

Sla na het aanpassen van het bestand je wijzigingen op en herstart de server zodat de nieuwe instelling actief wordt.

## Afsluiting

Gefeliciteerd! Door de `PVP` waarde in `GameServerSettings.ini` aan te passen, heb je de PvP-modus op je HumanitZ-server succesvol veranderd. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />