---
id: humanitz-enable-disable-death-notifications
title: "HumanitZ: Death Notifications Aan- of Uitzetten"
description: "Leer hoe je spelerdoodmeldingen aan- of uitzet op je HumanitZ-server → Ontdek het nu"
sidebar_label: "Death Notifications Aan-/Uitzetten"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

Death notifications laten spelers weten wanneer iemand op de server is overleden. Dit kan handig zijn om de activiteit bij te houden, maar sommige servers willen liever een meer immersive of competitieve ervaring zonder publieke doodmeldingen.

Bij HumanitZ kun je spelerdoodmeldingen aan- of uitzetten via het serverconfiguratiebestand.

<InlineVoucher />

## Configuratie

De instellingen voor death notifications vind je in het `GameServerSettings.ini` bestand. Je opent dit bestand via je serverbeheerpanel onder **Configs**. 
Zoek in het configbestand naar deze parameter:

```
;If set to true notification about dead players will be disabled. Admins will still be able to see them.
NoDeathFeedback=true
```

- `NoDeathFeedback=true` – Zet death notifications uit voor gewone spelers. Admins blijven ze wel zien. 
- `NoDeathFeedback=false` – Zet death notifications aan voor alle spelers.

Wil je dat iedereen de death notifications ziet? Zet dan deze waarde op:

```
NoDeathFeedback=false
```

Sla na het aanpassen het bestand op en herstart de server zodat de nieuwe instelling actief wordt.

## Afsluiting

Nice! Door de `NoDeathFeedback` waarde in `GameServerSettings.ini` aan te passen, heb je de death notifications op je HumanitZ-server succesvol ingesteld. Heb je nog vragen of hulp nodig? Onze support staat dagelijks voor je klaar! 🙂

<InlineVoucher />