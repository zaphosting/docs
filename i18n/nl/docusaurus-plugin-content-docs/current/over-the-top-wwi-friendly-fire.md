---
id: over-the-top-wwi-friendly-fire
title: "Over the Top WWI: Friendly Fire Instellen"
description: "Leer hoe je friendly fire aanzet of aanpast op je Over the Top WWI server → Ontdek het nu"
sidebar_label: Friendly Fire
services:
- gameserver-over-the-top-wwi
---

import InlineVoucher from '@site/src/components/InlineVoucher';

## Intro

Friendly fire bepaalt of spelers hun eigen teamgenoten kunnen beschadigen tijdens het spelen. Door deze instellingen aan te passen, bepaal jij hoe realistisch of vergevingsgezind het gevecht op jouw **Over the Top WWI** server moet zijn.

Friendly fire aanzetten zorgt voor meer realisme en tactiek, terwijl het uitzetten of verminderen juist zorgt voor een relaxtere en toegankelijkere ervaring.

<InlineVoucher />

## Configuratie

De friendly fire instellingen pas je aan in het serverconfiguratiebestand. Je vindt en bewerkt dit bestand in je **gameserver beheerpanel** onder **Configs**. Zoek en open het `ServerConfiguration.ini` bestand. In dit bestand vind je de volgende parameters:

```
EnableFriendlyMeleeFire = 1
EnableFriendlyRangeFire = 1
FriendlyFireAtRoundStart = 60
FriendlyFirePercent = 5
RangeFriendlyFirePercent = 5
ExplosionFf = 0
FriendlyFireReflectPercent = 0
```

- `EnableFriendlyMeleeFire` zet melee schade tegen teamgenoten aan of uit.
- `EnableFriendlyRangeFire` zet ranged schade tegen teamgenoten aan of uit.
- `FriendlyFireAtRoundStart` bepaalt hoeveel seconden vertraging er is voordat friendly fire actief wordt.
- `FriendlyFirePercent` regelt hoeveel melee schade teamgenoten krijgen.
- `RangeFriendlyFirePercent` regelt hoeveel ranged schade teamgenoten krijgen.
- `ExplosionFf` zet explosieve schade tegen teamgenoten aan of uit.
- `FriendlyFireReflectPercent` kaatst een percentage van de schade terug naar de aanvaller in plaats van naar de teamgenoot.

Na het aanpassen van `ServerConfiguration.ini`, sla je het bestand op en herstart je de server. De nieuwe friendly fire instellingen worden direct toegepast.

## Afsluiting

Nice! Je hebt de friendly fire instellingen op je **Over the Top WWI server** succesvol aangepast. Zo kun je de perfecte balans vinden tussen realisme en speelplezier voor jouw community.

Heb je nog vragen of hulp nodig? Neem gerust contact op met onze support, die dagelijks voor je klaarstaat! 🙂

<InlineVoucher />