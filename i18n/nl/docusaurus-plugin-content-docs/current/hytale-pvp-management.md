---
id: hytale-pvp-management
title: "Hytale: PvP Beheer"
description: "Beheer en configureer player versus player gevechten (PvP) op je Hytale server → Leer er nu meer over"
sidebar_label: PvP Beheer
services:
  - gameserver-hytale
---

import YouTube from '@site/src/components/YouTube/YouTube';
import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

PvP beheer op een Hytale server bepaalt of spelers elkaar kunnen aanvallen of schade kunnen toebrengen binnen een wereld. Door de PvP-instellingen aan te passen, kunnen servereigenaren bepalen of gevechten tussen spelers volledig aanstaan, helemaal uitgeschakeld zijn, of beperkt worden tot specifieke situaties.

<InlineVoucher />

## Configuratie

Het PvP-gedrag wordt per wereld ingesteld en geconfigureerd via het configuratiebestand van de server:

```
/gXXXXXXX/hytale/universe/worlds/default/config.json
```

Deze instelling bepaalt hoe de server omgaat met schade tussen spelers en of PvP is toegestaan in de actieve wereld. Wijzigingen in de PvP-instellingen gelden wereldwijd voor de betreffende wereld en vereisen een serverherstart om actief te worden.

Het volgende voorbeeld toont een configuratie waarbij PvP is uitgeschakeld voor een wereld:

```
"WorldConfig": {
  "PvP": false
}
```

Met deze configuratie kunnen spelers elkaar niet meer beschadigen binnen die wereld, wat effectief een PvE-gerichte omgeving creëert.

Om PvP in te schakelen en speler-tegen-speler gevechten toe te staan, kan de configuratie als volgt worden ingesteld:

```
"WorldConfig": {
  "PvP": true
}
```

## Conclusie

Als dit eenmaal is ingesteld, heb je een duidelijk overzicht van hoe PvP wordt beheerd en kun je de configuratie eenvoudig aanpassen om coöperatief spelen, competitieve omgevingen of een mix van beide te ondersteunen. Voor vragen of hulp kun je altijd contact opnemen met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />