---
id: humanitz-enable-disable-permadeath
title: "HumanitZ: Permadeath In- of Uitschakelen"
description: "Leer hoe je permadeath aan- of uitzet op je HumanitZ-server → Ontdek het nu"
sidebar_label: "Permadeath In- of Uitschakelen"
services:
  - gameserver-humanitz
---

import InlineVoucher from '@site/src/components/InlineVoucher';
import InlineServiceLink from '@site/src/components/InlineServiceLink';

## Intro

Permadeath maakt de survival gameplay in HumanitZ een stuk pittiger en spannender. Als je het aanzet, verlies je je personage permanent als je sterft en moet je een nieuw personage maken. Deze instelling zie je vaak terug op hardcore of high-risk survival servers.

<InlineVoucher />



## Configuratie

Permadeath regel je in het `GameServerSettings.ini` bestand. Je vindt dit bestand in je serverbeheer paneel onder **Configs**. Zoek in het configbestand naar deze regel:

```
;When set to true the player that died will lose their character and have to create a new one
PermaDeath=false
```

- `PermaDeath=true` – Zet permadeath aan. Spelers verliezen hun personage permanent bij de dood.  
- `PermaDeath=false` – Zet permadeath uit. Spelers kunnen respawnen met hun bestaande personage.

Wil je permadeath activeren? Verander de waarde dan naar:

```
PermaDeath=true
```

Sla het bestand op en herstart de server zodat de nieuwe instelling actief wordt.



## Afsluiting

Nice! Door de `PermaDeath` waarde in `GameServerSettings.ini` aan te passen, heb je permadeath succesvol aan- of uitgezet op je HumanitZ-server. Heb je nog vragen of hulp nodig? Ons supportteam staat dagelijks voor je klaar! 🙂

<InlineVoucher />