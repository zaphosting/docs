---
id: humanitz-enable-disable-voice-chat
title: "HumanitZ: Voice Chat Aan- of Uitzetten"
description: "Leer hoe je voice chat aan- of uitzet op je HumanitZ server → Ontdek het nu"
sidebar_label: "Voice Chat Aan/Uit"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

Voice communicatie kan de sfeer op je HumanitZ server compleet veranderen. Voice chat aanzetten zorgt ervoor dat spelers direct dichtbij elkaar kunnen praten, wat de beleving en samenwerking een flinke boost geeft. Zet je het uit, dan stimuleer je misschien het gebruik van externe communicatieplatforms of creëer je juist een rustigere, meer geïsoleerde survival ervaring.

In HumanitZ stel je voice chat in via het serverconfiguratiebestand.

<InlineVoucher />

## Configuratie

De voice chat instellingen vind je in het bestand `GameServerSettings.ini`. Je opent dit bestand via je serverbeheer paneel onder **Configs**. Zoek in het configbestand naar deze regel:

```
;When set to 1 or true voice chat will be enabled, set 0 or false to disable
Voip=true
```

De instellingen werken zo:

- `Voip=true` of `Voip=1` – Voice chat aan  
- `Voip=false` of `Voip=0` – Voice chat uit  

Wil je de voice chat aan- of uitzetten? Pas dan simpelweg de waarde aan naar wat jij wilt. Sla daarna het bestand op en herstart je server zodat de wijziging actief wordt.

## Afsluiting

Nice! Door de `Voip` waarde in `GameServerSettings.ini` aan te passen, heb je voice chat succesvol aan- of uitgezet op je HumanitZ server. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />