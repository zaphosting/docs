---
id: over-the-top-wwi-configure-time-and-environment
title: "Over the Top WWI: Tijd en Omgeving Instellen"
description: "Leer hoe je de tijd van de dag en omgevingsinstellingen aanpast op je Over the Top WWI server → Leer het nu"
sidebar_label: Tijd & Omgeving
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Tijd- en omgevingsinstellingen in **Over the Top WWI** beïnvloeden zichtbaarheid, sfeer en de algemene gameplay-ervaring. Door deze waarden aan te passen, creëer je heldere gevechten overdag, donkere scenario’s of verschillende seizoensomgevingen.

Met deze instellingen kun je de look & feel van je server helemaal naar jouw smaak maken en de beleving voor je spelers een stuk intenser maken.

<InlineVoucher />

## Configuratie

Tijd- en omgevingsinstellingen pas je aan in het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` configuratiebestand. In dit bestand vind je de volgende parameters:

```
TimeOfDay = 8
Season = 0
TemperatureinCelcius = 0
```

- `TimeOfDay` bepaalt het uur in de game
- `Season` regelt het huidige seizoen

- `0` → Standaard
- `1` → Lente
- `2` → Zomer
- `3` → Herfst
- `4` → Winter

- `TemperatureinCelcius` stelt de omgevingstemperatuur in
- Dit kan de sfeer en omgevings-effecten beïnvloeden

Met deze instellingen maak je makkelijk verschillende scenario’s, zoals vroege ochtendgevechten, nachtelijke gevechten of seizoensgebonden omgevingen.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je je server. De nieuwe omgevingsinstellingen worden dan automatisch toegepast.

## Afsluiting

Nice! Je hebt nu succesvol de tijd en omgevingsinstellingen op je **Over the Top WWI server** aangepast. Zo kun je de sfeer helemaal naar wens maken en unieke gameplay-ervaringen creëren voor je spelers.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />