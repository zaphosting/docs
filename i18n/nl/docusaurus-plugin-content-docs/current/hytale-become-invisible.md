---
id: hytale-become-invisible
title: "Hytale: Onzichtbaar worden"
description: "Ontdek hoe je onzichtbaar wordt op een Hytale-server → Leer het nu"
sidebar_label: Onzichtbaar worden
services:
- gameserver-hytale
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Onzichtbaar zijn kan super handig zijn op Hytale-servers voor moderatie, testen of content maken. Het stelt admins in staat om spelers te observeren zonder gezien te worden, verdachte activiteiten te checken of gebieden te verkennen zonder het spel te verstoren. Afhankelijk van de serverconfig en de rechten die je hebt, kun je onzichtbaarheid meestal aanzetten via in-game commands of de live console.

<InlineVoucher />

## Vereisten

Om onzichtbaarheid te gebruiken, moet je genoeg rechten hebben op de server. Meestal heb je operator privileges of toegang tot moderatie- en gameplay-commands nodig. Zonder de juiste rechten wordt het command geweigerd en kun je niet onzichtbaar worden. Wil je die rechten? Check dan onze [Word admin](hytale-becomeadmin.md) gids.

## Onzichtbaar worden

Open de in-game chat en typ het onzichtbaarheidscommand dat de server ondersteunt. Voer dit command uit:

```
/hide <spelernaam>
```

Als het command succesvol is uitgevoerd, ben je niet meer zichtbaar voor andere spelers in de wereld. Je kunt nog steeds bewegen, interacties uitvoeren en activiteiten volgen, afhankelijk van de serverregels en hoe onzichtbaarheid is ingesteld.

Naast het basis /hide-command heeft Hytale ook extra opties waarmee je kunt bepalen wie een speler kan zien. Bijvoorbeeld: je kunt een speler alleen voor een specifieke speler verbergen, of onzichtbaarheid toepassen op iedereen op de server.

Deze commands zijn beschikbaar:
- `/hide <spelernaam>`  Maakt de opgegeven speler onzichtbaar.
- `/hide <spelernaam> --target <spelernaam>`  Maakt de opgegeven speler alleen onzichtbaar voor de target speler.
- `/hide all`  Maakt alle spelers onzichtbaar.

## Onzichtbaarheid uitzetten

Wil je weer zichtbaar worden? Voer dan het bijbehorende command uit om onzichtbaarheid uit te schakelen. Zodra het command bevestigd is, kunnen andere spelers je weer gewoon zien.

```
/hide show <spelernaam>
```

Er zijn ook extra commands om onzichtbaarheid in specifieke situaties uit te zetten, zoals alleen voor bepaalde spelers of voor iedereen tegelijk.

Deze commands zijn beschikbaar:
- `/hide show <spelernaam>`  Haalt onzichtbaarheid weg bij de opgegeven speler.
- `/hide show <spelernaam> --target <spelernaam>`  Haalt onzichtbaarheid weg bij de opgegeven speler, maar alleen voor de target speler.
- `/hide showall`  Haalt onzichtbaarheid weg bij alle spelers.

## Conclusie

Onzichtbaar worden op een Hytale-server is een superhandige tool voor admins en moderators die discreet het spel willen monitoren. Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />