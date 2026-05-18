---
id: humanitz-airdrop-management
title: "HumanitZ: Airdropbeheer"
description: "Leer hoe je airdrops aan- en uitzet en configureert op je HumanitZ-server → Ontdek het nu"
sidebar_label: "Airdropbeheer"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

Airdrops in HumanitZ leveren waardevolle loot op en kunnen de beweging van spelers, conflictzones en de algehele serverdynamiek flink beïnvloeden. Afhankelijk van de speelstijl van je server wil je misschien juist vaak supply drops om de actie te verhogen, of ze juist helemaal uitzetten voor een survival-ervaring met schaarse resources.

<InlineVoucher />



## Configuratie

De airdrop-instellingen regel je in het `GameServerSettings.ini` bestand. Je vindt dit bestand in je serverbeheerpanel onder **Configs**. Zoek in het configbestand naar de volgende parameters:

```
; Zet aan of uit of airdrops ingeschakeld zijn
AirDrop=true
;Hoeveel game dagen er tussen elke AirDrop zitten
AirDropInterval=1
```

De configuratie werkt zo:

- `AirDrop=true` – Zet airdrops aan  
- `AirDrop=false` – Zet airdrops helemaal uit  
- `AirDropInterval` – Bepaalt hoeveel in-game dagen er tussen elke airdrop zitten  

Wil je bijvoorbeeld dat er elke drie in-game dagen een airdrop komt:

```
AirDrop=true
AirDropInterval=3
```

Wil je airdrops helemaal uitzetten:

```
AirDrop=false
```


Sla na het aanpassen het bestand op en start je server opnieuw op zodat de nieuwe instellingen actief worden.



## Conclusie

Nice! Door de waarden van `AirDrop` en `AirDropInterval` in het `GameServerSettings.ini` aan te passen, heb je de airdrop-gedrag op je HumanitZ-server succesvol ingesteld. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar, dus neem vooral contact op! 🙂

<InlineVoucher />