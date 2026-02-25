---
id: humanitz-change-save-interval
title: "HumanitZ: Save-interval aanpassen"
description: "Leer hoe je het automatische save-interval van je HumanitZ-server aanpast → Ontdek het nu"
sidebar_label: "Save-interval aanpassen"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

Het save-interval bepaalt hoe vaak je HumanitZ-server automatisch de wereld opslaat. Regelmatig saven voorkomt dat je data kwijtraakt bij crashes of onverwachte shutdowns, terwijl langere intervallen de schijfactiviteit iets kunnen verminderen.

<InlineVoucher />

## Configuratie

Het save-interval van de wereld stel je in via het `GameServerSettings.ini` bestand. Je vindt dit bestand in je serverbeheerpanel onder **Configs**. Zoek in het config-bestand naar deze parameter:

```
;The interval in seconds at which the server saves the world. Set to 0 to disable auto-saving.
SaveIntervalSec=300
```

- `SaveIntervalSec=300` – De server slaat de wereld elke 300 seconden (5 minuten) op.  
- `SaveIntervalSec=0` – Schakelt automatisch saven uit.  

De waarde is in **seconden**. Bijvoorbeeld:

- `600` = 10 minuten
- `900` = 15 minuten

Wil je het interval naar 10 minuten verhogen? Pas het dan zo aan:

```
SaveIntervalSec=600
```

Sla het bestand op en herstart de server zodat de nieuwe instelling actief wordt.

## Afsluiting

Nice! Door de `SaveIntervalSec` waarde in `GameServerSettings.ini` aan te passen, heb je het automatische save-interval op je HumanitZ-server succesvol veranderd.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />